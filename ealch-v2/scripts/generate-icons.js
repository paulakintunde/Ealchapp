/**
 * Regenerates every app icon asset in assets/ from the "E." mark.
 *
 *   node scripts/generate-icons.js
 *
 * The mark is Instrument Serif Italic (the same font file the app ships, read out of
 * node_modules) on the #0B0C0E field, with the Riviera period. Everything is drawn in
 * HTML and screenshotted with headless Chrome, so there is no image dependency to install.
 *
 * Change ACCENT or FIELD below and re-run to reissue the whole set.
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const FONT = path.join(
  ROOT,
  'node_modules/@expo-google-fonts/instrument-serif/400Regular_Italic/InstrumentSerif_400Regular_Italic.ttf'
);

const ACCENT = '#2FD6C1'; // Riviera — theme.acc
const CREAM = '#F4F2ED'; // theme.tx (dark)
const FIELD = 'linear-gradient(178deg, #15181D 0%, #0E1013 46%, #0B0C0E 100%)';

const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

// The mark is 64% of the tile. Android crops adaptive icons to the centre 66%, so the
// foreground layers draw it at 64 * 0.667 ≈ 43% to land at the same size once masked.
const SET = [
  { file: 'icon.png', size: 64, w: 1024 },
  { file: 'ios-icon-light.png', size: 64, w: 1024 },
  { file: 'ios-icon-dark.png', size: 64, w: 1024, bare: true, alpha: true },
  { file: 'ios-icon-tinted.png', size: 64, w: 1024, bare: true, alpha: true, tinted: true },
  { file: 'android-icon-foreground.png', size: 43, w: 1024, bare: true, alpha: true },
  { file: 'android-icon-background.png', size: 64, w: 1024, fieldOnly: true },
  { file: 'android-icon-monochrome.png', size: 43, w: 1024, bare: true, alpha: true, mono: true },
  { file: 'splash-icon.png', size: 64, w: 1024, bare: true, alpha: true },
  { file: 'favicon.png', size: 64, w: 48 },
];

function page(a) {
  const font64 = fs.readFileSync(FONT).toString('base64');
  // iOS tints the icon by luminance, so the period is held a step darker than the E to
  // survive as its own beat once the system recolours it.
  const eColor = a.mono || a.tinted ? '#FFFFFF' : CREAM;
  const dotColor = a.mono ? '#FFFFFF' : a.tinted ? '#9AA0A6' : ACCENT;
  return `<!doctype html><meta charset="utf-8"><style>
@font-face { font-family:'E'; src:url(data:font/ttf;base64,${font64}) format('truetype'); font-display:block; }
html,body { margin:0; padding:0; background:transparent; }
.tile { position:relative; width:100vmin; height:100vmin; display:flex; align-items:center; justify-content:center; overflow:hidden; }
.field { position:absolute; inset:0; background:${FIELD}; ${a.bare ? 'display:none;' : ''} }
.mark { position:relative; font-family:'E'; line-height:1; white-space:nowrap; letter-spacing:-0.01em;
        font-size:${a.size}vmin; color:${eColor};
        /* Instrument Serif Italic sits high in its em box — nudge to optical centre. */
        transform:translateY(${(a.size * 0.035).toFixed(3)}vmin);
        ${a.fieldOnly ? 'display:none;' : ''} }
.mark i { font-style:normal; color:${dotColor}; }
</style><div class="tile"><div class="field"></div><div class="mark">E<i>.</i></div></div>`;
}

const chrome = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
if (!chrome) throw new Error('No Chrome found. Add its path to CHROME_CANDIDATES.');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ealch-icons-'));

for (const a of SET) {
  const html = path.join(tmp, a.file.replace('.png', '.html'));
  const out = path.join(ASSETS, a.file);
  fs.writeFileSync(html, page(a));

  const args = [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(), 'chr-'))}`,
    `--window-size=${a.w},${a.w}`,
    '--virtual-time-budget=4000',
    `--screenshot=${out}`,
  ];
  if (a.alpha) args.push('--default-background-color=00000000');
  args.push('file:///' + html.replace(/\\/g, '/'));

  execFileSync(chrome, args, { stdio: 'ignore' });

  const png = fs.readFileSync(out);
  console.log(`${a.file.padEnd(30)} ${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`);
}

fs.rmSync(tmp, { recursive: true, force: true });
