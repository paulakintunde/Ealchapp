// 08.1-02 / 08-QUALITY-AUDIT E2 / D-20. Makes MainActivity handle OS font-scale
// and display-size changes in place instead of being recreated (which dropped
// the learner at Home and lost deck, lesson position and any recording).
//
// `android/` is prebuild output, so the manifest change lives here. The mod is
// idempotent and keeps the values Expo already wrote.
const { withAndroidManifest, AndroidConfig } = require('expo/config-plugins');

const REQUIRED = ['fontScale', 'density'];

/** Pure: returns the configChanges string with REQUIRED flags added once. */
function mergeConfigChanges(current) {
  const parts = (current ?? '').split('|').map((p) => p.trim()).filter(Boolean);
  for (const flag of REQUIRED) if (!parts.includes(flag)) parts.push(flag);
  return parts.join('|');
}

/** Mutates the manifest object (as withAndroidManifest hands it over). */
function applyConfigChanges(androidManifest) {
  const activity = AndroidConfig.Manifest.getMainActivityOrThrow(androidManifest);
  activity.$['android:configChanges'] = mergeConfigChanges(activity.$['android:configChanges']);
  return androidManifest;
}

const withConfigChanges = (config) =>
  withAndroidManifest(config, (c) => {
    c.modResults = applyConfigChanges(c.modResults);
    return c;
  });

module.exports = withConfigChanges;
module.exports.mergeConfigChanges = mergeConfigChanges;
module.exports.applyConfigChanges = applyConfigChanges;
