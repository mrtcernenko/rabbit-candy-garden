/**
 * Rename duplicate rabbitcantdnygsarwdenSinkV* locals within the same method scope.
 */
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const javaRoot = path.join(root, "android", "app", "src", "main", "java");
const FRAG = "rabbitcantdnygsarwden";

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "build" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(java|kt)$/.test(entry.name)) acc.push(full);
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

function fixFile(file) {
  let text = fs.readFileSync(file, "utf8");
  const re =
    /(?:(?:public|private|protected|override)\s+)*(?:static\s+)?(?:fun\s+)?[A-Za-z_<\[]>[\w.<>,\[\]\s]*?\s+([A-Za-z_]\w*)\s*\([^;{]*\)\s*(?::\s*[^{]+)?\{/g;
  // Simpler: find method/fun bodies by looking for ) { after signatures - too fragile.
  // Instead scan for Sink declarations and rename duplicates while brace-depth of class methods.
  // Approach: split on "private static int NAME(" / "fun NAME(" / method opens and fix within each top-level function body.

  const methodStarts = [];
  const patterns = [
    /\b(?:public|private|protected)\s+(?:static\s+)?(?:final\s+)?(?:int|void|boolean|String|long|Uri|List(?:<[^>]+>)?)\s+[A-Za-z_]\w*\s*\(/g,
    // Java constructors (no return type)
    /\b(?:public|private|protected)\s+[A-Z][A-Za-z_]\w*\s*\(/g,
    /\bfun\s+[A-Za-z_]\w*\s*\(/g,
    /\boverride\s+fun\s+[A-Za-z_]\w*\s*\(/g,
  ];
  for (const pat of patterns) {
    let m;
    while ((m = pat.exec(text))) methodStarts.push(m.index);
  }
  methodStarts.sort((a, b) => a - b);

  // Collect bodies
  const bodies = [];
  for (const start of methodStarts) {
    const openParen = text.indexOf("(", start);
    // find matching ) then {
    let depth = 0;
    let i = openParen;
    let closeParen = -1;
    while (i < text.length) {
      const skipped = skipTrivia(text, i);
      if (skipped > i) {
        i = skipped;
        continue;
      }
      if (text[i] === "(") depth++;
      else if (text[i] === ")") {
        depth--;
        if (depth === 0) {
          closeParen = i;
          break;
        }
      }
      i++;
    }
    if (closeParen < 0) continue;
    let j = skipTrivia(text, closeParen + 1);
    // kotlin return type
    if (text[j] === ":") {
      while (j < text.length && text[j] !== "{" && text[j] !== "=") j++;
      j = skipTrivia(text, j);
    }
    if (text[j] !== "{") continue;
    const close = matchBrace(text, j);
    if (close < 0) continue;
    bodies.push({ open: j + 1, close });
  }

  // Process from end so offsets stay valid
  bodies.sort((a, b) => b.open - a.open);
  let renames = 0;
  for (const body of bodies) {
    let chunk = text.slice(body.open, body.close);
    const seen = new Map();
    const sinkRe = new RegExp(
      `(\\b(?:final\\s+)?(?:int|val)\\s+)(${FRAG}SinkV\\d+[a-zA-Z]*)(\\s*=)`,
      "g"
    );
    chunk = chunk.replace(sinkRe, (full, prefix, name, eq) => {
      const count = seen.get(name) || 0;
      seen.set(name, count + 1);
      if (count === 0) return full;
      renames++;
      return `${prefix}${name}_${count}${eq}`;
    });
    text = text.slice(0, body.open) + chunk + text.slice(body.close);
  }

  if (renames) {
    fs.writeFileSync(file, text);
    console.log(path.relative(root, file), "renamed", renames);
  }
  return renames;
}

let total = 0;
for (const file of walk(javaRoot)) {
  if (file.includes("rnobfuscator")) continue;
  total += fixFile(file);
}
console.log("total renames", total);
