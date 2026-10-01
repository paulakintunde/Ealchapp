import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { createRequire } from 'node:module';
import { test } from 'node:test';

// The plugin is CommonJS (Expo loads it with require), so load it the same way.
const require = createRequire(import.meta.url);
const plugin = require('../../plugins/withConfigChanges.js');

const ORIGINAL =
  'keyboard|keyboardHidden|orientation|screenSize|screenLayout|uiMode|smallestScreenSize|assetsPaths';

function manifestFixture(configChanges?: string) {
  return {
    manifest: {
      application: [
        {
          activity: [
            { $: { 'android:name': '.OtherActivity' } },
            {
              $: {
                'android:name': '.MainActivity',
                ...(configChanges === undefined ? {} : { 'android:configChanges': configChanges }),
              },
              'intent-filter': [
                {
                  action: [{ $: { 'android:name': 'android.intent.action.MAIN' } }],
                  category: [{ $: { 'android:name': 'android.intent.category.LAUNCHER' } }],
                },
              ],
            },
          ],
        },
      ],
    },
  };
}

function flags(m: ReturnType<typeof manifestFixture>): string[] {
  const main = m.manifest.application[0].activity[1] as { $: Record<string, string> };
  return main.$['android:configChanges'].split('|');
}

test('adds fontScale and density once, keeping every original flag, over two runs', () => {
  const m = manifestFixture(ORIGINAL);
  plugin.applyConfigChanges(m);
  plugin.applyConfigChanges(m);
  const got = flags(m);
  for (const f of ORIGINAL.split('|')) strictEqual(got.filter((x) => x === f).length, 1, f);
  strictEqual(got.filter((x) => x === 'fontScale').length, 1);
  strictEqual(got.filter((x) => x === 'density').length, 1);
  strictEqual(got.length, ORIGINAL.split('|').length + 2);
});

test('does not duplicate flags that are already present', () => {
  deepStrictEqual(plugin.mergeConfigChanges('uiMode|fontScale|density').split('|'), ['uiMode', 'fontScale', 'density']);
});

test('creates the attribute when MainActivity has none, and leaves other activities alone', () => {
  const m = manifestFixture();
  plugin.applyConfigChanges(m);
  deepStrictEqual(flags(m), ['fontScale', 'density']);
  ok(!('android:configChanges' in m.manifest.application[0].activity[0].$));
});
