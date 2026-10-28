const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const javaRoot = path.join(root, "android", "app", "src", "main", "java");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "build" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function skipTrivia(code, i) {
  while (i < code.length) {
    const c = code[i];
    const n = code[i + 1];
    if (c === " " || c === "\t" || c === "\r" || c === "\n") {
      i++;
      continue;
    }
    if (c === "/" && n === "/") {
      const nl = code.indexOf("\n", i);
      i = nl < 0 ? code.length : nl + 1;
      continue;
    }
    if (c === "/" && n === "*") {
      const end = code.indexOf("*/", i + 2);
      i = end < 0 ? code.length : end + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      i++;
      while (i < code.length) {
        if (code[i] === "\\") {
          i += 2;
          continue;
        }
        if (code[i] === c) {
          i++;
          break;
        }
        i++;
      }
      continue;
    }
    break;
  }
  return i;
}

function matchParen(code, open) {
  let depth = 0;
  let i = open;
  while (i < code.length) {
    const skipped = skipTrivia(code, i);
    if (skipped > i) {
      i = skipped;
      continue;
    }
    if (code[i] === "(") depth++;
    else if (code[i] === ")") {
      depth--;
      if (depth === 0) return i;
    }
    i++;
  }
  return -1;
}

function matchBrace(code, open) {
  let depth = 0;
  let i = open;
  while (i < code.length) {
    const skipped = skipTrivia(code, i);
    if (skipped > i) {
      i = skipped;
      continue;
    }
    if (code[i] === "{") depth++;
    else if (code[i] === "}") {
      depth--;
      if (depth === 0) return i;
    }
    i++;
  }
  return -1;
}

function findMethods(text) {
  const methods = [];
  const re =
    /(?:(?:public|private|protected)\s+)?(?:static\s+)?(?:final\s+)?(?:int|void|boolean|String|long|Uri|List(?:<[^>]+>)?)\s+([A-Za-z_]\w*)\s*\(/g;
  let m;
  while ((m = re.exec(text))) {
    const name = m[1];
    if (name === "if" || name === "for" || name === "while" || name === "switch") continue;
    const openParen = text.indexOf("(", m.index);
    const closeParen = matchParen(text, openParen);
    if (closeParen < 0) continue;
    let i = skipTrivia(text, closeParen + 1);
    if (text[i] === "{") {
      const closeBrace = matchBrace(text, i);
      if (closeBrace < 0) continue;
      methods.push({ name, start: m.index, end: closeBrace + 1 });
    }
  }
  return methods;
}

function javaType(arg) {
  if (/^["']/.test(arg)) return "String";
  if (/^new\s+int\[\]/.test(arg)) return "int[]";
  if (/^(true|false)$/.test(arg)) return "boolean";
  return "int";
}

function splitArgs(src) {
  const args = [];
  let depth = 0;
  let cur = "";
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === "(" || c === "[" || c === "{") depth++;
    else if (c === ")" || c === "]" || c === "}") depth--;
    else if (c === "," && depth === 0) {
      args.push(cur.trim());
      cur = "";
      i++;
      continue;
    }
    cur += c;
    i++;
  }
  if (cur.trim()) args.push(cur.trim());
  return args;
}

function javaBody(types) {
  const lines = types.map((p, idx) => {
    if (p === "String") return `        acc = (acc + p${idx}.length() * ${3 + idx}) & 65535;`;
    if (p === "int[]") return `        for (int n : p${idx}) acc = (acc + n) & 65535;`;
    if (p === "boolean") return `        if (p${idx}) acc = acc ^ ${9 + idx};`;
    return `        acc = acc ^ p${idx};`;
  });
  return `        int acc = ${11 + types.length};\n${lines.join("\n")}\n        return acc;`;
}

function lastTopClose(code) {
  let depth = 0;
  let last = -1;
  let i = 0;
  while (i < code.length) {
    const skipped = skipTrivia(code, i);
    if (skipped > i) {
      i = skipped;
      continue;
    }
    if (code[i] === "{") depth++;
    else if (code[i] === "}") {
      depth--;
      if (depth === 0) last = i;
    }
    i++;
  }
  return last;
}

let removed = 0;
let stubbed = 0;
for (const file of walk(javaRoot).filter((f) => f.endsWith(".java"))) {
  let text = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  if (rel.includes("rnobfuscator") || text.includes("autosetup-decoy") || text.includes("dex-lanes")) continue;

  // Drop later duplicate method definitions (keep first).
  const methods = findMethods(text);
  const seen = new Map();
  const drop = [];
  for (const method of methods) {
    if (!seen.has(method.name)) {
      seen.set(method.name, method);
      continue;
    }
    drop.push(method);
  }
  drop.sort((a, b) => b.start - a.start);
  for (const method of drop) {
    text = text.slice(0, method.start) + text.slice(method.end);
    removed++;
  }

  // Stub missing Obf helpers called unqualified.
  const defs = new Set(findMethods(text).map((m) => m.name));
  const wanted = new Map();
  const re = /([A-Za-z_]\w*ObfV\d+\w*)\s*\(/g;
  let m;
  while ((m = re.exec(text))) {
    const name = m[1];
    const before = text.slice(Math.max(0, m.index - 24), m.index);
    if (/\b(?:int|void|boolean|String)\s+$/.test(before)) continue;
    if (/\.\s*$/.test(before)) continue;
    if (defs.has(name) || wanted.has(name)) continue;
    const open = text.indexOf("(", m.index);
    const close = matchParen(text, open);
    if (close < 0) continue;
    const args = splitArgs(text.slice(open + 1, close));
    wanted.set(name, args.map(javaType));
    defs.add(name);
  }
  if (wanted.size) {
    const chunks = [];
    for (const [name, types] of wanted) {
      const params = types.map((t, i) => `${t} p${i}`).join(", ");
      chunks.push(
        `    @SuppressWarnings("unused")\n    private static int ${name}(${params}) {\n${javaBody(types)}\n    }\n`
      );
      stubbed++;
    }
    const close = lastTopClose(text);
    if (close >= 0) {
      text = text.slice(0, close) + "\n" + chunks.join("\n") + text.slice(close);
    }
  }

  fs.writeFileSync(file, text);
  if (drop.length || wanted.size) console.log(rel, "dupsRemoved", drop.length, "stubbed", wanted.size);
}
console.log({ removed, stubbed });
