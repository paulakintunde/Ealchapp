import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import ts from 'typescript';
const files = execSync('git status --porcelain scripts/data/', { encoding: 'utf8' }).trim().split('\n').map((l) => l.trim().split(/\s+/).pop()).filter((f) => f && f.endsWith('.ts'));
let bad = 0;
for (const f of files) {
  const sf = ts.createSourceFile(f, readFileSync('../' + f, 'utf8'), ts.ScriptTarget.ESNext, true);
  const errs = sf.parseDiagnostics || [];
  if (errs.length) { bad++; console.log('PARSE FAIL', f, ts.flattenDiagnosticMessageText(errs[0].messageText, ' '), 'line', sf.getLineAndCharacterOfPosition(errs[0].start).line + 1); }
}
console.log(files.length + ' files checked, ' + bad + ' broken');
