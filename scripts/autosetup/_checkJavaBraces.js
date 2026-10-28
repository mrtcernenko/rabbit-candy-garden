'use strict';

const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);
if (!files.length) {
  console.error('usage: node _checkJavaBraces.js <file>...');
  process.exit(1);
}

function analyze(file) {
  const t = fs.readFileSync(file, 'utf8');
  let depth = 0;
  let line = 1;
  let negatives = [];
  let zeroCloses = [];
  for (let j = 0; j < t.length; j++) {
    const c = t[j];
    const n = t[j + 1];
    if (c === '\n') {
      line++;
      continue;
    }
    if (c === '/' && n === '/') {
      while (j < t.length && t[j] !== '\n') j++;
      continue;
    }
    if (c === '/' && n === '*') {
      j += 2;
      while (j < t.length - 1 && !(t[j] === '*' && t[j + 1] === '/')) {
        if (t[j] === '\n') line++;
        j++;
      }
      j++;
      continue;
    }
    if (c === '"') {
      j++;
      while (j < t.length) {
        if (t[j] === '\\') {
          j += 2;
          continue;
        }
        if (t[j] === '"') break;
        if (t[j] === '\n') line++;
        j++;
      }
      continue;
    }
    if (c === "'") {
      j++;
      while (j < t.length) {
        if (t[j] === '\\') {
          j += 2;
          continue;
        }
        if (t[j] === "'") break;
        if (t[j] === '\n') line++;
        j++;
      }
      continue;
    }
    if (c === '{') depth++;
    if (c === '}') {
      depth--;
      if (depth === 0) zeroCloses.push(line);
      if (depth < 0) {
        negatives.push({ line, depth });
        depth = 0;
      }
    }
  }
  console.log(
    path.basename(file),
    'finalDepth=',
    depth,
    'zeroCloses=',
    zeroCloses,
    'negatives=',
    negatives.slice(0, 5),
  );
}

for (const f of files) analyze(f);
