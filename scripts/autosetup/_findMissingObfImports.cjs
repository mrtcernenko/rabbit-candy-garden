'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');
const services = path.join(root, 'services');

function parseImportsAndLocals(text) {
  const defined = new Set();
  const importRe = /import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"]/g;
  let m;
  while ((m = importRe.exec(text))) {
    for (const part of m[1].split(',')) {
      const n = part.trim().split(/\s+as\s+/).pop().trim();
      if (n) defined.add(n);
    }
  }
  const defRe =
    /\b(?:export\s+)?(?:async\s+)?function\s+([A-Za-z_]\w*)|\b(?:const|let|var)\s+([A-Za-z_]\w*)\s*=/g;
  while ((m = defRe.exec(text))) {
    if (m[1]) defined.add(m[1]);
    if (m[2]) defined.add(m[2]);
  }
  return defined;
}

function collectExports(dir) {
  const map = new Map(); // name -> file
  for (const name of fs.readdirSync(dir)) {
    if (!/\.(ts|tsx|js)$/.test(name)) continue;
    const full = path.join(dir, name);
    const text = fs.readFileSync(full, 'utf8');
    const re = /\bexport\s+(?:async\s+)?function\s+([A-Za-z_]\w*)|\bexport\s+(?:const|let|var)\s+([A-Za-z_]\w*)/g;
    let m;
    while ((m = re.exec(text))) {
      const id = m[1] || m[2];
      if (!map.has(id)) map.set(id, './' + name.replace(/\.tsx?$/, ''));
    }
  }
  return map;
}

const targetRel = process.argv[2] || 'services/ViewporabbitcantdnygsarwdenrtHost.ts';
const target = path.join(root, targetRel);
const text = fs.readFileSync(target, 'utf8');
const defined = parseImportsAndLocals(text);
const used = new Set();
const voidRe = /\bvoid\s+([A-Za-z_]\w*)\s*\(/g;
let m;
while ((m = voidRe.exec(text))) used.add(m[1]);

const exportMap = collectExports(services);
const missing = [...used].filter((n) => !defined.has(n)).sort();
console.log('missing count', missing.length);
for (const n of missing) {
  console.log(n, '->', exportMap.get(n) || 'NOT FOUND');
}
