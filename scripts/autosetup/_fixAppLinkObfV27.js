'use strict';

const fs = require('fs');
const path = require('path');

const f = path.resolve(
  __dirname,
  '../../android/app/src/main/java/com/rabblxitcoxanldyganrden3z53x7/linkkit/AppLinrabbitcantdnygsarwdenk.java',
);

let t = fs.readFileSync(f, 'utf8');

const marker = '/* obfuscation-batch:v27 */';
const idx = t.indexOf(marker);
if (idx < 0) {
  console.error('v27 marker not found');
  process.exit(1);
}

// Find the Target class closing brace that currently sits right after ObfV27 methods.
// Pattern: ObfV27 block then bare `}` then `/* obfuscation-batch:v17 */`
const after = t.slice(idx);
const v17 = after.indexOf('/* obfuscation-batch:v17 */');
if (v17 < 0) {
  console.error('v17 marker not found after v27');
  process.exit(1);
}

const block = after.slice(0, v17);
// Remove a trailing class-close `}` that belongs to Target if present between ObfV27 and v17
const trimmed = block.replace(/\}\s*$/, '');
const targetClose = block.match(/\}\s*$/) ? '}\n\n' : '';

if (!targetClose) {
  console.log('no Target close between v27 and v17; checking structure');
}

// Move: Target closes BEFORE ObfV27; ObfV27 stays on outer class with other batches
const before = t.slice(0, idx);
const rest = after.slice(v17);

// Insert Target close before ObfV27 if ObfV27 was inside Target
const needsMove = /public static class Target/.test(before) && targetClose;
if (!needsMove && !/\}\s*$/.test(block)) {
  console.error('unexpected structure');
  process.exit(1);
}

// before currently ends mid-Target (after last Target method). Close Target, then ObfV27, then rest.
const newText = before.replace(/\s*$/, '\n  }\n\n') + trimmed.trimStart() + '\n\n' + rest;
fs.writeFileSync(f, newText);
console.log('moved ObfV27 out of Target inner class');
