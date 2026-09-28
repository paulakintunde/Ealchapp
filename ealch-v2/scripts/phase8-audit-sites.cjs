// Generate a reviewable JSX control inventory for the phase 8 per-site audits.
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const names = process.argv.slice(2);
if (!names.length) throw new Error('Pass component names without .tsx');
const root = path.join(__dirname, '..', 'src', 'components');
const rows = [];
const heading = process.env.PHASE8_AUDIT_HEADING;

for (const name of names) {
  const inApp = name.startsWith('app:');
  const shortName = inApp ? name.slice(4) : name;
  const file = inApp ? path.join(__dirname, '..', 'app', `${shortName}.tsx`) : path.join(root, `${shortName}.tsx`);
  const link = inApp ? `../../../ealch-v2/app/${shortName}.tsx` : `../../../ealch-v2/src/components/${shortName}.tsx`;
  const source = fs.readFileSync(file, 'utf8');
  const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const visit = (node) => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tag = node.tagName.getText(tree);
      const attrs = Object.fromEntries(node.attributes.properties
        .filter(ts.isJsxAttribute)
        .map((a) => [a.name.getText(tree), a.initializer?.getText(tree) ?? 'true']));
      const tappable = ['Press', 'Pressable', 'Button'].includes(tag) ||
        ('onPress' in attrs && ['TX', 'Text'].includes(tag));
      if (tappable) {
        const line = tree.getLineAndCharacterOfPosition(node.getStart(tree)).line + 1;
        const owner = node.parent;
        const body = ts.isJsxElement(owner) ? owner.children.map((child) => child.getText(tree).trim())
          .filter(Boolean).join(' ').replace(/\s+/g, ' ').slice(0, 130) : '';
        const role = attrs.accessibilityRole ?? (tag === 'Button' ? 'Button primitive' : 'UNSET');
        const label = attrs.accessibilityLabel ?? attrs.label ?? (body || 'UNSET');
        const state = attrs.accessibilityState ?? attrs.accessibilityValue ?? attrs.disabled ?? 'none';
        const action = attrs.onPress ?? attrs.onLongPress ?? 'none';
        const esc = (s) => s.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').slice(0, 160);
        rows.push(`| [${shortName}.tsx:${line}](${link}#L${line}) | ${esc(tag)} | ${esc(role)} | ${esc(label)} | ${esc(state)} | ${esc(action)} |`);
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(tree);
}
if (heading) process.stdout.write(`${heading}\n\n`);
process.stdout.write('| Site | Control | Role | Name source or visible content | State/value | Activation |\n');
process.stdout.write('|---|---|---|---|---|---|\n');
process.stdout.write(`${rows.join('\n')}\n`);
