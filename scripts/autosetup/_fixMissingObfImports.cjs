'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');

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
  const map = new Map();
  if (!fs.existsSync(dir)) return map;
  for (const name of fs.readdirSync(dir)) {
    if (!/\.(ts|tsx|js)$/.test(name)) continue;
    const full = path.join(dir, name);
    const text = fs.readFileSync(full, 'utf8');
    const re =
      /\bexport\s+(?:async\s+)?function\s+([A-Za-z_]\w*)|\bexport\s+(?:const|let|var)\s+([A-Za-z_]\w*)/g;
    let m;
    while ((m = re.exec(text))) {
      const id = m[1] || m[2];
      if (!map.has(id)) map.set(id, './' + name.replace(/\.tsx?$/, ''));
    }
  }
  return map;
}

function fixFile(filePath, searchDirs) {
  let text = fs.readFileSync(filePath, 'utf8');
  const defined = parseImportsAndLocals(text);
  const used = new Set();
  const voidRe = /\bvoid\s+([A-Za-z_]\w*)\s*\(/g;
  let m;
  while ((m = voidRe.exec(text))) used.add(m[1]);

  const exportMap = new Map();
  for (const dir of searchDirs) {
    for (const [k, v] of collectExports(dir)) {
      if (!exportMap.has(k)) exportMap.set(k, v);
    }
  }

  const byFile = new Map();
  for (const name of used) {
    if (defined.has(name)) continue;
    const from = exportMap.get(name);
    if (!from) {
      console.warn('NOT FOUND', name, 'in', path.relative(root, filePath));
      continue;
    }
    if (!byFile.has(from)) byFile.set(from, []);
    byFile.get(from).push(name);
  }

  if (!byFile.size) return 0;

  const blocks = [];
  for (const [from, names] of [...byFile.entries()].sort()) {
    names.sort();
    blocks.push(`import { ${names.join(', ')} } from '${from}';`);
  }

  // Insert after last import
  const importLineRe = /^import\s.+;?\s*$/gm;
  let lastEnd = 0;
  let im;
  while ((im = importLineRe.exec(text))) lastEnd = im.index + im[0].length;
  if (lastEnd === 0) {
    text = blocks.join('\n') + '\n' + text;
  } else {
    text = text.slice(0, lastEnd) + '\n' + blocks.join('\n') + text.slice(lastEnd);
  }
  fs.writeFileSync(filePath, text);
  console.log(
    'fixed',
    path.relative(root, filePath),
    'added',
    [...byFile.values()].reduce((a, b) => a + b.length, 0),
  );
  return [...byFile.values()].reduce((a, b) => a + b.length, 0);
}

const targets = [
  path.join(root, 'services/ViewporabbitcantdnygsarwdenrtHost.ts'),
];

// Also scan all services/*.ts for the same pattern
const servicesDir = path.join(root, 'services');
for (const name of fs.readdirSync(servicesDir)) {
  if (!/\.tsx?$/.test(name)) continue;
  const full = path.join(servicesDir, name);
  if (!targets.includes(full)) targets.push(full);
}

let total = 0;
for (const t of targets) {
  total += fixFile(t, [servicesDir, path.dirname(t)]);
}
console.log('total imports added', total);
