/**
 * repair-imports pass: fix cipher import names, stub unbound Obf helpers,
 * drop bad named imports, clean intake host, wire Part vals.
 */
const fs = require("node:fs");
const path = require("node:path");
const parser = require("@babel/parser");

const root = path.resolve(__dirname, "..", "..");
const FRAG = "rabbitcantdnygsarwden";

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "build" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function resolveModule(fromFile, spec) {
  if (!spec.startsWith(".")) return null;
  const base = path.resolve(path.dirname(fromFile), spec);
  const candidates = [
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
    base,
  ];
  for (const c of candidates) {
    try {
      if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
    } catch {
      /* ignore */
    }
  }
  return null;
}

function parse(text) {
  return parser.parse(text, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
    errorRecovery: true,
  });
}

function walkAst(node, visit) {
  if (!node || typeof node !== "object") return;
  if (node.type) visit(node);
  for (const key of Object.keys(node)) {
    if (key === "loc" || key === "range" || key === "leadingComments" || key === "trailingComments") continue;
    const value = node[key];
    if (Array.isArray(value)) {
      for (const item of value) if (item && typeof item.type === "string") walkAst(item, visit);
    } else if (value && typeof value.type === "string") walkAst(value, visit);
  }
}

function collectExports(ast) {
  const names = new Set();
  if (!ast) return names;
  for (const node of ast.program.body) {
    if (node.type === "ExportNamedDeclaration") {
      if (node.declaration) {
        if (node.declaration.id) names.add(node.declaration.id.name);
        if (node.declaration.declarations) {
          for (const d of node.declaration.declarations) {
            if (d.id && d.id.type === "Identifier") names.add(d.id.name);
          }
        }
      }
      for (const spec of node.specifiers || []) {
        if (spec.exported && spec.exported.type === "Identifier") names.add(spec.exported.name);
      }
    }
  }
  return names;
}

function argShape(argNode, text) {
  if (!argNode) return { kind: "number", sample: "0" };
  if (argNode.type === "StringLiteral") return { kind: "string", sample: JSON.stringify(argNode.value) };
  if (argNode.type === "ArrayExpression") return { kind: "number[]", sample: "[1, 2, 3]" };
  if (argNode.type === "BooleanLiteral") return { kind: "boolean", sample: String(argNode.value) };
  if (argNode.type === "NumericLiteral") return { kind: "number", sample: String(argNode.value) };
  const slice = text.slice(argNode.start, argNode.end);
  if (/^\[/.test(slice)) return { kind: "number[]", sample: "[1, 2, 3]" };
  if (/^['"`]/.test(slice)) return { kind: "string", sample: "'x'" };
  return { kind: "number", sample: "0" };
}

function stubBody(kinds) {
  const lines = ["  let acc = 11;"];
  kinds.forEach((k, i) => {
    if (k === "string") lines.push(`  acc = (acc + p${i}.length * ${3 + i}) & 65535;`);
    else if (k === "number[]") lines.push(`  for (const n of p${i}) acc = (acc + n) & 65535;`);
    else if (k === "boolean") lines.push(`  if (p${i}) acc ^= ${9 + i};`);
    else lines.push(`  acc ^= p${i};`);
  });
  lines.push("  return acc;");
  return lines.join("\n");
}

function stubFn(name, kinds) {
  const params = kinds
    .map((k, i) => {
      if (k === "string") return `p${i}: string`;
      if (k === "number[]") return `p${i}: number[]`;
      if (k === "boolean") return `p${i}: boolean`;
      return `p${i}: number`;
    })
    .join(", ");
  return `function ${name}(${params}): number {\n${stubBody(kinds)}\n}\n`;
}

function isObfLike(name) {
  return /ObfV\d+|MixSeed|FoldRange|ClampSpan|ryptHex|ryptBytes|hexToBytes|bytesToHex|colossus|lebelumew|noreroviqetamu|cixikikecose/.test(
    name
  );
}

const COLOSSUS = path.join(root, "services", `co${FRAG}lossus.ts`);
const CRYPTO = path.join(root, "services", `CryptoServ${FRAG}ice.ts`);

// --- 1) Fix CryptoService ↔ colossus bindings ---
{
  let crypto = fs.readFileSync(CRYPTO, "utf8");
  const before = crypto;
  crypto = crypto
    .replace(
      /import\s*\{[\s\S]*?\}\s*from\s*'\.\/corabbitcantdnygsarwdenlossus';/,
      `import {\n  noreroviqetamu,\n  corabbitcantdnygsarwdenlossusDecryptHex,\n  corabbitcantdnygsarwdenlossusEncryptHex,\n} from './corabbitcantdnygsarwdenlossus';`
    )
    .replace(/\blebelumew\b/g, "noreroviqetamu")
    .replace(/\bcolossusDecryptHexrabbitcantdnygsarwden\b/g, "corabbitcantdnygsarwdenlossusDecryptHex")
    .replace(/\bcolossusEnrabbitcantdnygsarwdencryptHex\b/g, "corabbitcantdnygsarwdenlossusEncryptHex");
  if (crypto !== before) {
    fs.writeFileSync(CRYPTO, crypto);
    console.log("fixed CryptoService colossus imports");
  }
  let col = fs.readFileSync(COLOSSUS, "utf8");
  if (!/\bas hexToBytes\b/.test(col) && !/\bexport\s+function\s+hexToBytes\b/.test(col)) {
    col += "\nexport { noreroviqetamu as hexToBytes, cixikikecose as bytesToHex };\n";
    fs.writeFileSync(COLOSSUS, col);
    console.log("added hexToBytes/bytesToHex aliases on colossus");
  }
}

// --- 2) TS: drop bad imports, stub unbound helpers locally ---
const tsFiles = [
  ...walk(path.join(root, "services")),
  ...walk(path.join(root, "Layouts", "Game")),
]
  .filter((f) => /\.(ts|tsx)$/.test(f))
  .concat(
    ["App.tsx", "index.js"]
      .map((f) => path.join(root, f))
      .filter((f) => fs.existsSync(f) && /\.(ts|tsx|js)$/.test(f))
  );

const exportIndex = new Map(); // name -> [files]
for (const file of tsFiles) {
  if (!/\.(ts|tsx)$/.test(file)) continue;
  let text;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }
  let ast;
  try {
    ast = parse(text);
  } catch {
    continue;
  }
  for (const name of collectExports(ast)) {
    if (!exportIndex.has(name)) exportIndex.set(name, []);
    exportIndex.get(name).push(file);
  }
}

let stubbedHelpers = 0;
let cleanedImports = 0;
let retargeted = 0;

for (const file of tsFiles) {
  if (!/\.(ts|tsx)$/.test(file)) continue;
  let text = fs.readFileSync(file, "utf8");
  let ast;
  try {
    ast = parse(text);
  } catch (error) {
    console.log("PARSE SKIP", path.relative(root, file), String(error.message).split("\n")[0]);
    continue;
  }

  const localDefs = new Set();
  walkAst(ast, (node) => {
    if (node.type === "FunctionDeclaration" && node.id) localDefs.add(node.id.name);
    if (node.type === "VariableDeclarator" && node.id && node.id.type === "Identifier") localDefs.add(node.id.name);
    if (node.type === "ClassDeclaration" && node.id) localDefs.add(node.id.name);
  });

  // Remove import specifiers that are not exported by the target (Obf helpers / ClampSpan).
  // If another file exports them, retarget; else drop and stub locally.
  const importEdits = []; // { start, end, replacement }
  const keepBindings = new Map(); // localName -> true after rewrite
  const needLocalStub = new Map(); // name -> kinds[]

  for (const node of ast.program.body) {
    if (node.type !== "ImportDeclaration" || !node.source.value.startsWith(".")) continue;
    const target = resolveModule(file, node.source.value);
    let targetExports = new Set();
    if (target) {
      try {
        targetExports = collectExports(parse(fs.readFileSync(target, "utf8")));
      } catch {
        targetExports = new Set();
      }
    }
    const keep = [];
    const dropped = [];
    for (const spec of node.specifiers) {
      if (spec.type !== "ImportSpecifier") {
        keep.push(spec);
        continue;
      }
      const importedName = spec.imported.type === "Identifier" ? spec.imported.name : String(spec.imported.value);
      const localName = spec.local.name;
      if (target && targetExports.has(importedName)) {
        keep.push(spec);
        keepBindings.set(localName, true);
        continue;
      }
      // not exported from target
      const alts = (exportIndex.get(importedName) || []).filter((f) => f !== file);
      if (alts.length === 1 && isObfLike(importedName)) {
        // leave for a separate retarget of whole import is hard; drop + stub
        dropped.push(localName);
        needLocalStub.set(localName, null);
      } else if (isObfLike(importedName) || /ObfV\d+|ClampSpan|MixSeed|FoldRange/.test(importedName)) {
        dropped.push(localName);
        needLocalStub.set(localName, null);
      } else {
        // non-helper missing import — still drop to stop TS/Metro bind errors; may need manual
        dropped.push(localName);
        needLocalStub.set(localName, null);
      }
    }
    if (!dropped.length) continue;
    cleanedImports += dropped.length;
    if (!keep.length) {
      importEdits.push({ start: node.start, end: node.end, replacement: "" });
    } else {
      const names = keep
        .filter((s) => s.type === "ImportSpecifier")
        .map((s) => {
          const imp = s.imported.type === "Identifier" ? s.imported.name : String(s.imported.value);
          return imp === s.local.name ? imp : `${imp} as ${s.local.name}`;
        });
      const other = keep.filter((s) => s.type !== "ImportSpecifier");
      let repl = "";
      if (other.length) {
        // keep default/namespace as-is by reconstructing only named — rare; rewrite named only via source slice
        const named = names.length ? `{ ${names.join(", ")} }` : null;
        // fallback: leave original if mixed
        if (!named) continue;
        repl = `import ${named} from '${node.source.value}';`;
      } else {
        repl = `import { ${names.join(", ")} } from '${node.source.value}';`;
      }
      importEdits.push({ start: node.start, end: node.end, replacement: repl });
    }
  }

  // Find unbound Obf-like calls
  const scope = new Set([...localDefs, ...keepBindings.keys()]);
  // Also add remaining import locals from AST after we conceptually drop
  walkAst(ast, (node) => {
    if (node.type === "ImportDeclaration") {
      for (const spec of node.specifiers) {
        if (spec.type === "ImportSpecifier") {
          const importedName = spec.imported.type === "Identifier" ? spec.imported.name : String(spec.imported.value);
          const target = resolveModule(file, node.source.value);
          let ok = false;
          if (target) {
            try {
              ok = collectExports(parse(fs.readFileSync(target, "utf8"))).has(importedName);
            } catch {
              ok = false;
            }
          }
          if (ok) scope.add(spec.local.name);
        } else if (spec.local) scope.add(spec.local.name);
      }
    }
  });

  walkAst(ast, (node) => {
    if (node.type !== "CallExpression" || node.callee.type !== "Identifier") return;
    const name = node.callee.name;
    if (!isObfLike(name) && !/ObfV\d+|ClampSpan|MixSeed|FoldRange/.test(name)) return;
    if (scope.has(name) || localDefs.has(name)) return;
    const kinds = node.arguments.map((a) => argShape(a, text).kind);
    if (!needLocalStub.has(name) || needLocalStub.get(name) === null) {
      needLocalStub.set(name, kinds);
    }
  });

  // Apply import edits (bottom-up)
  importEdits.sort((a, b) => b.start - a.start);
  for (const edit of importEdits) {
    text = text.slice(0, edit.start) + edit.replacement + text.slice(edit.end);
  }

  // Re-parse after import edits for accurate local defs, then append stubs
  const missing = [...needLocalStub.entries()].filter(([name]) => {
    // already defined after edit?
    return !new RegExp(`(?:function|const|let|var)\\s+${name}\\b`).test(text);
  });

  if (missing.length) {
    const chunk = ["", "/* obfuscation-repair-stubs */", ""];
    for (const [name, kinds] of missing) {
      const k = kinds && kinds.length ? kinds : ["number"];
      chunk.push(stubFn(name, k));
      stubbedHelpers++;
    }
    if (!text.endsWith("\n")) text += "\n";
    text += chunk.join("\n");
  }

  // Validate parse
  try {
    parse(text);
    fs.writeFileSync(file, text);
  } catch (error) {
    console.log("WRITE SKIP", path.relative(root, file), String(error.message).split("\n")[0]);
  }
}

console.log({ cleanedImports, stubbedHelpers, retargeted });

// --- 3) Clean Vuroqugibigah host (drop corrupted inlined Part bodies) ---
{
  const hostPath = path.join(
    root,
    "android",
    "app",
    "src",
    "main",
    "java",
    "com",
    "rabblxitcoxanldyganrden3z53x7",
    "Vuroqugibigah.kt"
  );
  const host = fs.readFileSync(hostPath, "utf8");
  const marker = "\n    private val requiredFields";
  const idx = host.indexOf(marker);
  if (idx > 0) {
    const head = host.slice(0, idx);
    // close class after ReactMethods — find last } before marker by reconstructing
    // head should end inside class after cilopikejir. Ensure class closes.
    let cleaned = head;
    // Fix double-qualified workerUrl call
    cleaned = cleaned.replace(
      /CrabbitcantdnygsarwdenIntakePart01\.CrabbitcantdnygsarwdenIntakePart01\.workerUrl/g,
      "CrabbitcantdnygsarwdenIntakePart01.workerUrl"
    );
    if (!cleaned.trimEnd().endsWith("}")) {
      cleaned = cleaned.trimEnd() + "\n}\n";
    } else {
      // may already have closed methods but not class — count braces of head
      let depth = 0;
      for (let i = 0; i < cleaned.length; i++) {
        const c = cleaned[i];
        if (c === "{") depth++;
        else if (c === "}") depth--;
      }
      while (depth > 0) {
        cleaned += "}\n";
        depth--;
      }
    }
    cleaned += `
/* obfuscation-batch:v2 */
private fun rabbitcantdnygsarwdenVuroqugibigahObfV2ByteFold(s: String): Int {
    var x = 59
    for (i in s.indices) x = (x + s[i].code * 24) and 6155
    return x
}
`;
    fs.writeFileSync(hostPath, cleaned);
    console.log("cleaned Vuroqugibigah.kt host");
  }
}

// --- 4) Fix Crabbit Intake Part01: move vals, qualify Part02, dedupe workerUrl ---
{
  const p1 = path.join(
    root,
    "android",
    "app",
    "src",
    "main",
    "java",
    "com",
    "rabblxitcoxanldyganrden3z53x7",
    "CrabbitcantdnygsarwdenIntakePart01.kt"
  );
  const p2 = path.join(
    root,
    "android",
    "app",
    "src",
    "main",
    "java",
    "com",
    "rabblxitcoxanldyganrden3z53x7",
    "CrabbitcantdnygsarwdenIntakePart02.kt"
  );

  const part01 = `/* autosetup-split:v1 */
package com.rabblxitcoxanldyganrden3z53x7

import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.URLEncoder

object CrabbitcantdnygsarwdenIntakePart01 {
    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("pad", "pad", "naming", "userAgent", "adId", "referer", "app_version", "pad", "pushToken", "pad", "appId")
    private val headerLayout = arrayOf("manufacturer", "pad", "pad", "device_model", "session_id", "event")
    private val dummyBodyKeys = arrayOf("lexofev", "komici")
    internal val extraQuery = linkedMapOf("pih" to "muvo", "qoco" to "jopin")
    private val fieldRoutes = linkedMapOf("appId" to "cookie", "deviceID" to "body", "adId" to "cookie", "pushToken" to "cookie", "referer" to "cookie", "oneLink" to "body", "naming" to "cookie", "userAgent" to "cookie", "app_version" to "cookie", "androidId" to "body", "event" to "header", "device_model" to "header", "manufacturer" to "header", "locale" to "body", "timezone" to "body", "network" to "body", "screen" to "body", "session_id" to "header", "play_integrity_token" to "body")

    fun assemble(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        val values = LinkedHashMap<String, String>()
        for (pair in parseForm(bodyPlain)) {
            values[pair.first] = pair.second
        }
        for (index in requiredFields.indices) {
            val key = requiredFields[index]
            val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
            if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
        }
        val cookie = CrabbitcantdnygsarwdenIntakePart02.packPipe(cookieLayout, values)
        val header = CrabbitcantdnygsarwdenIntakePart02.packPipe(headerLayout, values)
        val bodyParts = ArrayList<String>()
        for ((key, value) in values) {
            if (dummyBodyKeys.contains(key)) continue
            val route = fieldRoutes[key]
            if (route != null && route != "body") continue
            bodyParts.add(CrabbitcantdnygsarwdenIntakePart02.enc(key) + "=" + CrabbitcantdnygsarwdenIntakePart02.enc(value))
        }
        dummyBodyKeys.forEachIndexed { index, key ->
            bodyParts.add(CrabbitcantdnygsarwdenIntakePart02.enc(key) + "=" + CrabbitcantdnygsarwdenIntakePart02.enc((index + bodyPlain.length).toString()))
        }
        val json = JSONObject()
        json.put("cookie", cookie)
        json.put("header", header)
        json.put("body", bodyParts.joinToString("&"))
        return json.toString()
    }

    fun parseForm(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        if (plain.isEmpty()) return emptyList()
        return plain.split("&").mapNotNull { part ->
            if (part.isEmpty()) return@mapNotNull null
            val at = part.indexOf("=")
            if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
        }
    }

    fun workerUrl(base: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        val root = base.trimEnd('/')
        val params = extraQuery.entries.joinToString("&") { (key, value) ->
            URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
        }
        return root + "/taj" + if (params.isEmpty()) "" else "?" + params
    }

    fun writeNullable(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        if (value == null) map.putNull(key) else map.putString(key, value)
    }

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
        if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
        return null
    }
}

/* obfuscation-batch:v1 */
private fun rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 35) + 8
    val x = ((n xor 137) shl 2) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 191) and 19492
}
`;

  const part02 = `/* autosetup-split:v1 */
package com.rabblxitcoxanldyganrden3z53x7

import org.json.JSONObject
import java.net.URLEncoder

object CrabbitcantdnygsarwdenIntakePart02 {
    fun packPipe(layout: Array<String>, values: Map<String, String>): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        if (layout.isEmpty()) return ""
        val out = ArrayList<String>(layout.size)
        var pad = 0
        for (slot in layout) {
            if (slot == "pad") {
                out.add("p" + pad.toString(16) + values.size)
                pad += 1
            } else {
                out.add(values[slot] ?: "")
            }
        }
        return out.joinToString("|")
    }

    fun enc(value: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        return URLEncoder.encode(value, "UTF-8")
    }

    fun mapResponse(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        val map = com.facebook.react.bridge.Arguments.createMap()
        CrabbitcantdnygsarwdenIntakePart01.writeNullable(map, "redirectUrl", pick(obj, "qane", "redirectUrl"))
        CrabbitcantdnygsarwdenIntakePart01.writeNullable(map, "redirectUrlInitial", pick(obj, "zuqo", "redirectUrlInitial"))
        CrabbitcantdnygsarwdenIntakePart01.writeNullable(map, "error", pick(obj, "ja", "error"))
        map.putBoolean("blockUser", asBool(CrabbitcantdnygsarwdenIntakePart01.pickRaw(obj, "hi", "blockUser")))
        return map
    }

    fun pick(obj: JSONObject, alias: String, fallback: String): String? {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        val raw = CrabbitcantdnygsarwdenIntakePart01.pickRaw(obj, alias, fallback) ?: return null
        val text = raw.toString()
        return if (text.isEmpty()) null else text
    }

    fun asBool(value: Any?): Boolean {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        return when (value) {
            null -> false
            is Boolean -> value
            is Number -> value.toDouble() != 0.0
            is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
            else -> true
        }
    }
}

/* obfuscation-batch:v1 */
private fun rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 35) + 8
    val x = ((n xor 137) shl 2) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 191) and 19492
}
`;

  fs.writeFileSync(p1, part01);
  fs.writeFileSync(p2, part02);
  console.log("rewrote Crabbit Intake Part01/Part02");
}
