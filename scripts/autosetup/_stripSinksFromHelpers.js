'use strict';

/**
 * Remove SinkV* injections from private obfuscation helper bodies.
 * Those sinks call sibling helpers and cause StackOverflowError on class init.
 * Sinks in public/React methods and constructors are left alone.
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');
const javaRoot = path.join(
  root,
  'android/app/src/main/java/com/rabblxitcoxanldyganrden3z53x7',
);

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (/\.(java|kt)$/.test(e.name)) acc.push(full);
  }
  return acc;
}

function skipTrivia(code, i) {
  while (i < code.length) {
    const c = code[i];
    const n = code[i + 1];
    if (c === ' ' || c === '\t' || c === '\r' || c === '\n') {
      i++;
      continue;
    }
    if (c === '/' && n === '/') {
      const nl = code.indexOf('\n', i);
      i = nl < 0 ? code.length : nl + 1;
      continue;
    }
    if (c === '/' && n === '*') {
      const end = code.indexOf('*/', i + 2);
      i = end < 0 ? code.length : end + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      const q = c;
      i++;
      while (i < code.length) {
        if (code[i] === '\\') {
          i += 2;
          continue;
        }
        if (code[i] === q) {
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
    if (code[i] === '{') depth++;
    else if (code[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
    i++;
  }
  return -1;
}

const HELPER_RE =
  /\bprivate\s+(?:static\s+)?(?:fun\s+)?(?:int\s+)?([A-Za-z_]\w*)\s*\([^;{]*\)\s*(?::\s*Int)?\s*\{/g;

const SINK_LINE_RE =
  /^\s*@Suppress(?:Warnings)?\([^)]*\)\s+(?:final\s+)?(?:val|int|var)\s+rabbitcantdnygsarwdenSink[^\n]*\n/gm;

function stripSinksInHelpers(text) {
  const ranges = [];
  let m;
  HELPER_RE.lastIndex = 0;
  while ((m = HELPER_RE.exec(text))) {
    const open = m.index + m[0].length - 1;
    if (text[open] !== '{') continue;
    const close = matchBrace(text, open);
    if (close < 0) continue;
    ranges.push({ open: open + 1, close, name: m[1] });
  }

  // Process from end
  ranges.sort((a, b) => b.open - a.open);
  let removed = 0;
  for (const r of ranges) {
    let body = text.slice(r.open, r.close);
    const before = body;
    body = body.replace(SINK_LINE_RE, () => {
      removed++;
      return '';
    });
    // Also strip bare sink lines without @Suppress (Boot vals stay outside helpers)
    body = body.replace(
      /^\s*(?:final\s+)?(?:val|int|var)\s+rabbitcantdnygsarwdenSink[^\n]*\n/gm,
      () => {
        removed++;
        return '';
      },
    );
    if (body !== before) {
      text = text.slice(0, r.open) + body + text.slice(r.close);
    }
  }
  return { text, removed };
}

let total = 0;
for (const file of walk(javaRoot)) {
  if (file.includes('rnobfuscator')) continue;
  const raw = fs.readFileSync(file, 'utf8');
  const { text, removed } = stripSinksInHelpers(raw);
  if (removed) {
    fs.writeFileSync(file, text);
    console.log(path.relative(root, file), 'stripped', removed);
    total += removed;
  }
}
console.log('total stripped', total);
