'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');
const f = path.join(
  root,
  'android/app/src/main/java/com/rabblxitcoxanldyganrden3z53x7/linkkit/AppLinrabbitcantdnygsarwdenk.java',
);

function skipTrivia(code, i) {
  while (i < code.length) {
    const c = code[i];
    const n = code[i + 1];
    if (c === ' ' || c === '\t' || c === '\r' || c === '\n') {
      i++;
      continue;
    }
    if (c === '/' && n === '/') {
      const e = code.indexOf('\n', i);
      i = e < 0 ? code.length : e + 1;
      continue;
    }
    if (c === '/' && n === '*') {
      const e = code.indexOf('*/', i + 2);
      i = e < 0 ? code.length : e + 2;
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

let t = fs.readFileSync(f, 'utf8');
let depth = 0;
let i = 0;
let lastTop = -1;
while (i < t.length) {
  const s = skipTrivia(t, i);
  if (s > i) {
    i = s;
    continue;
  }
  if (t[i] === '{') depth++;
  else if (t[i] === '}') {
    depth--;
    if (depth === 0) lastTop = i;
  }
  i++;
}

console.log('depth', depth, 'lastTop', lastTop, 'len', t.length);
if (lastTop < 0) {
  console.error('no class close found');
  process.exit(1);
}

const orphan = t.slice(lastTop + 1).trim();
if (orphan.length > 10) {
  t = t.slice(0, lastTop) + '\n\n' + orphan + '\n}\n';
  fs.writeFileSync(f, t);
  console.log('moved orphan helpers inside class, chars', orphan.length);
} else {
  console.log('no orphan content after class close');
}
