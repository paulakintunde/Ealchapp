# Device Proof Runbook — Pixel 6 + Metro

**For:** getting the Ealch dev build back onto the Pixel and connected to Metro, from a cold start.
**Written:** 2026-08-25, after a session where the setup broke in six different ways.
**Validated:** 2026-08-25 — E2 and E3 were device-proven end to end using these exact steps.
**Scope:** everything from "phone in a drawer" to "the exam runner is on screen and I can drive it over adb."

> **Read §1 before anything else.** Skipping it is what cost a whole session: the app installed on the phone was a *release* build, which ignores Metro entirely, and every symptom looked like a Metro fault instead.

---

## 0. What you need

| Thing | Where |
|---|---|
| `adb` | `C:\Users\harki\AppData\Local\Android\Sdk\platform-tools\adb.exe` |
| Debug APK | `ealch-v2/android/app/build/outputs/apk/debug/app-debug.apk` (109 MB) |
| Project | `ealch-v2/` |
| USB cable | A **data** cable. A charge-only cable enumerates and charges but never shows in `adb devices`. |

**Every `adb shell` command that names a device path needs `export MSYS_NO_PATHCONV=1` first.** Git Bash rewrites `/sdcard/x.png` into `C:/Program Files/Git/sdcard/x.png` and the command fails with a confusing usage dump.

---

## 1. Phone setup and connection

### 1.1 On the phone

1. **Settings → About phone → Build number**, tap 7 times to enable Developer options.
2. **Settings → System → Developer options**:
   - **USB debugging** → ON
   - **Stay awake** → ON *(strongly recommended: the screen locking mid-test broke this twice, and a locked phone cannot be driven or screenshotted)*
   - **Revoke USB debugging authorizations** → tap it if the computer was previously authorized and is now misbehaving
3. Plug in over USB. When the **"Allow USB debugging?"** dialog appears, tick *Always allow from this computer* and accept.

### 1.2 Verify

```bash
ADB="/c/Users/harki/AppData/Local/Android/Sdk/platform-tools/adb.exe"
"$ADB" devices -l
```

Expect:
```
21041FDF600BMN   device product:oriole model:Pixel_6 device:oriole
```

| What you see | Meaning | Fix |
|---|---|---|
| nothing listed | not connected / charge-only cable | swap cable, try another port |
| `unauthorized` | the RSA prompt was not accepted | unlock phone, accept the dialog |
| `offline` | stale transport | `"$ADB" reconnect offline` then `"$ADB" wait-for-device` |

---

## 2. ⚠️ Check what is installed — DO THIS FIRST

```bash
ADB="/c/Users/harki/AppData/Local/Android/Sdk/platform-tools/adb.exe"
export MSYS_NO_PATHCONV=1
"$ADB" shell pm list packages | grep -E "ealch|exponent"
"$ADB" shell dumpsys package app.ealch.mobile | grep -ci devlauncher
"$ADB" shell dumpsys package app.ealch.mobile | grep -E "flags=\["
```

**You need all three of these to be true:**

| Check | Dev build (good) | Release build (useless for this) |
|---|---|---|
| `devlauncher` count | **≥ 1** | **0** |
| flags | `[ DEBUGGABLE HAS_CODE ... ]` | `[ HAS_CODE ... ]`, and `flags=0x0` |
| behaviour | fetches JS from Metro | runs an **embedded bundle**, ignores Metro completely |

**If it is a release build, stop and go to §3.** A release build produces exactly the symptoms that look like a broken Metro:
- deep links to new routes give **"Unmatched Route"**
- Metro serves **zero** android bundles no matter how long you wait
- the dev-client deep link just opens the app normally

Also note whether **Expo Go** (`host.exp.exponent`) is installed. It is on this phone, and it matters — see §6.

---

## 3. Install the dev build

A **locally built** release is signed with the SAME debug keystore as the debug
APK — `android/app/build.gradle` gives `release { signingConfig signingConfigs.debug }`.
So a local release installs straight over the debug build with `adb install -r`:
no uninstall, **no data wipe**. Only an EAS or store build carries a different
key and needs the old one removed first.

Uninstall anyway if you want a clean slate, but know what it costs (below).

```bash
ADB="/c/Users/harki/AppData/Local/Android/Sdk/platform-tools/adb.exe"
export MSYS_NO_PATHCONV=1
cd "c:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2"

"$ADB" uninstall app.ealch.mobile            # wipes local app data — see below
"$ADB" install -r android/app/build/outputs/apk/debug/app-debug.apk
```

**The uninstall wipes local app data**: streak, settings, exam results, cached content snapshot, signed-in session. `sync.ts` pulls `public.attempts` back on sign-in so drill history returns; exam results and settings do not. Sign in first if you care.

Verify:
```bash
"$ADB" shell dumpsys package app.ealch.mobile | grep -ci devlauncher      # want ≥ 1
"$ADB" shell dumpsys package app.ealch.mobile | grep -o DEBUGGABLE        # want DEBUGGABLE
```

### 3.1 If the APK is missing or too old

Its age only matters for **native** modules — JavaScript always comes from Metro, so a months-old debug APK is fine as long as no native dependency changed since. Rebuild only if it did:

```bash
export JAVA_HOME="/c/Program Files/Android/Android Studio/jbr"
cd "c:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2"
# android/local.properties must exist and contain:
#   sdk.dir=C:\\Users\\harki\\AppData\\Local\\Android\\Sdk
npx expo run:android
```
First build is 15–30 minutes.

---

## 4. Start Metro — the exact form matters

Two independent traps here, both reproduced in the same session.

**Trap 1 — `npx`.** `npx expo start` wraps the launch in `npx-cli.js → cmd.exe → node.exe`. Because `app.json` uses `runtimeVersion: {policy: "fingerprint"}`, Expo spawns a `runtimeversion:resolve` grandchild, and from inside that nested tree it dies with Windows `0xC0000142`. The dev client then lands on **`DevLauncherErrorActivity`** while Metro looks perfectly healthy, logging `metro:instantiate` but never `metro:bundling:started`.

**Trap 2 — piped stdout.** Launching Metro from a background task with its output redirected can kill it with `Error [ERR_STREAM_UNABLE_TO_PIPE]: Cannot pipe to a closed or destroyed stream`. It keeps the port bound afterwards but never answers anything.

**So: direct `node`, in a real console window.**

From PowerShell:
```powershell
$proj = "C:\Users\harki\Downloads\gitbuild appealch\Ealchapp\ealch-v2"
$cmd = "cd /d `"$proj`" && set RCT_METRO_PORT=8082 && node node_modules\expo\bin\cli start --port 8082"
Start-Process -FilePath "cmd.exe" -ArgumentList "/k", $cmd -WorkingDirectory $proj
```

Or just open a terminal yourself and run:
```
cd ealch-v2
node node_modules\expo\bin\cli start --port 8082
```

Add `--clear` only when you have changed `metro.config.js`, `babel.config.js` or dependencies. It adds ~2 minutes and is otherwise unnecessary.

### 4.1 Knowing when it is ready

Startup is slow on this machine: `devserver:start` → `metro:config` → `metro:instantiate` takes 2–4 minutes.

```bash
netstat -ano | grep LISTENING | grep ":8082"
```
`0.0.0.0:8082` **and** `[::]:8082` is correct (dual-stack). If you ever see only `[::1]` you started it with `--localhost`, which `adb reverse` cannot reach.

> **Do NOT health-check with curl.**
> `curl http://127.0.0.1:8082/` builds the **web** bundle.
> `curl -H "expo-platform: android" http://127.0.0.1:8082/` builds the **android** bundle.
> Both take minutes and time out to `000`. **A `000` is not a wedged Metro** — I killed a healthy one on that misreading. The only honest signals are the port being `LISTENING` and `metro:bundling:started` appearing in the log.

---

## 5. Reverse tunnel

```bash
"$ADB" reverse tcp:8082 tcp:8082
"$ADB" reverse --list          # want: UsbFfs tcp:8082 tcp:8082
```

`UsbFfs` means it is going over the actual USB cable. **Re-run this after every reconnect, reinstall or `adb reconnect`** — the tunnel does not survive them.

> **`--list` is not proof the tunnel works.** Seen on 3 September 2026: the app
> sat on a blank screen while `reverse --list` cheerfully reported
> `UsbFfs tcp:8082 tcp:8082` the whole time. The only honest signal is the app's
> own log:
>
> ```bash
> "$ADB" logcat -d | grep -F "ReconnectingWebSocket"
> ```
>
> `Couldn't connect to "ws://localhost:8082/message?…", will silently retry`
> means the tunnel is dead however it lists. Rebuild it rather than trusting it:
>
> ```bash
> "$ADB" reverse --remove-all
> "$ADB" reverse tcp:8082 tcp:8082
> ```
>
> That cleared it immediately and the device bundled seconds later.

---

## 6. Launch the app — pin the package

**Expo Go also claims the `ealch://expo-development-client/` scheme on this phone.** An unpinned intent opens Expo Go (`host.exp.exponent/…HomeActivity`) instead of the dev build, and then nothing ever reaches Metro. Always pin the component with `-n`:

```bash
"$ADB" shell am force-stop host.exp.exponent
"$ADB" shell am force-stop app.ealch.mobile
"$ADB" shell am start -n app.ealch.mobile/.MainActivity \
  -a android.intent.action.VIEW \
  -d "ealch://expo-development-client/?url=http%3A%2F%2Flocalhost%3A8082"
```

Confirm it went to the right app:
```bash
"$ADB" shell dumpsys window | grep mCurrentFocus
```
Want `app.ealch.mobile/…MainActivity`. If you see `host.exp.exponent`, the pin did not take. If you see `DevLauncherErrorActivity`, go back to §4 trap 1.

**Easiest alternative:** press **`a`** in the Metro console window. It runs the launch for you and skips all of this.

**Do not try to fill the dev launcher's URL field with `adb shell input text`** — it silently does not land, leaving the field on its `http://` placeholder.

---

## 7. Confirm the bundle actually served

This is the only real proof of a working connection.

```bash
LOG="c:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/.expo/dev/logs/start.log"
grep -o '"metro:bundling:[a-z]*"[^}]*"platform":"android"[^}]*' "$LOG" | tail -2
```

You want a `metro:bundling:started` with a **recent** `_t` timestamp, followed a minute or two later by `metro:bundling:done` with `total` in the low thousands. First build is ~130 s; later ones are seconds.

If nothing appears within ~3 minutes, the device never asked. Work back through §6 → §5 → §4.

---

## 8. Run the device proof

> ## ⚠️ A DEV BUILD CANNOT SHOW EXAM PAPERS
>
> Established on the phone, 3 September 2026, after "No mock exams available
> yet" survived a publish, two relaunches and a verified manifest.
>
> It is not a bug and there is no setting for it. Three facts compose:
>
> 1. **`seed.json` carries no exam keys at all** — not empty arrays, absent.
>    Its keys are items, lessons, playlists, scenarios, speakPath, units,
>    version. Papers exist ONLY in the published snapshot.
> 2. **A dev build never fetches a snapshot.** `refreshFromRemote()` opens with
>    `if (__DEV__) return;`. The "check for updates" button in `app/downloads.tsx`
>    calls that same function, so it is inert in dev too.
> 3. **A dev build never reads a cached one either.**
>    `adoptedForLaunch(await readCache(), __DEV__)` returns null in dev.
>
> Both guards are deliberate and both close real incidents (Phase 10 sons.02/03,
> and the Pixel 6 cache-outranks-seed bug). Defeating them is the wrong move:
> they exist so hand-edited seed content is what a dev build shows.
>
> The bridge used to be `devExamPaper.ts` / `devExamFixture.ts`, a paper bundled
> into the app. **It was deleted on 2 September 2026 as dead weight, which it was
> not** — it was this. Do not re-delete a fixture without checking what proves
> the exam screens.
>
> **So: exam proof runs on a RELEASE build.** That is the better proof anyway.
> It exercises the path a learner actually runs — manifest fetch, rollout gate,
> checksum verify, cache write, merge — where a fixture only proved the UI draws.
>
> ```bash
> export JAVA_HOME="/c/Program Files/Android/Android Studio/jbr"
> cd "c:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/android"
> ./gradlew assembleRelease
> "$ADB" install -r ../android/app/build/outputs/apk/release/app-release.apk
> ```
>
> `JAVA_HOME` is required: `gradlew` exits 49 with "JAVA_HOME is not set"
> without it.
>
> **`assembleRelease` dies in ninja, and it is NOT a stale cache.**
>
> ```
> [0/2] Re-checking globbed directories...
> [1/2] Re-running CMake...            (x100)
> ninja: error: manifest 'build.ninja' still dirty after 100 tries
> ```
>
> 10 to 15 minutes to fail, every time. Seen in `react-native-reanimated`, and
> in `expo-modules-core` on an earlier attempt.
>
> **Ruled out, so nobody spends the time twice:**
>
> 1. **Stale CMake output.** Deleting all six `node_modules/*/android/.cxx`
>    directories, 417 MB, and rebuilding from scratch failed identically, in the
>    same module. Staleness is not the cause and clearing them buys nothing but
>    a long cold rebuild.
> 2. **The space in the project path** (`gitbuild appealch`) is the obvious
>    suspect and is still UNTESTED. A `C:\ealchb` junction does not test it:
>    gradle canonicalises the junction away and CMake still records
>    `C:/Users/harki/Downloads/gitbuild appealch/...`. Only a real copy to a
>    space-free path would settle it.
>
> 3. **The `CONFIGURE_DEPENDS` globs.** `react-native-reanimated` and
>    `react-native-worklets` both use `file(GLOB_RECURSE ... CONFIGURE_DEPENDS)`,
>    which asks ninja to re-check the glob and re-run CMake whenever the result
>    might have changed. That is the textbook cause of this error and it is not
>    this one. Removing the keyword from both files WORKED as intended: the
>    `Re-checking globbed directories` lines disappear from the log entirely.
>    Ninja still fails with the same message. Those edits are still in place,
>    each with a comment saying why; they are harmless, they fix nothing, and a
>    `node_modules` reinstall reverts them.
>
> **So the cause is still open**, and the space in the path is the last suspect
> standing. Something other than the globs keeps `build.ninja` looking dirty to
> ninja after CMake has regenerated it. Four failed builds, about fifty minutes
> of build time, before anyone tries the one thing that would settle it: copy
> the tree to a path with no space in it and build there.
>
> **Do not reach for the Metro `--no-dev` workaround instead.** It looks like it
> should work: `__DEV__` is a bundle-time constant, `--no-dev` does flip it, and
> that should satisfy both OTA guards. Tried 2026-09-04 and it does not. The app
> boots to its own splash, goes white, and stays there through several minutes of
> polling, with GC activity but nothing rendered and no redbox to say why,
> because `--no-dev` also removes the error overlay. Half an hour gone.
>
> Signing is the debug keystore, so the release replaces the dev build with
> no data wipe (§3). Metro plays no part while it is installed; put the debug
> APK back with the same `install -r` to resume JS work.
>
> The OTA fetch is **fire-and-forget: the papers appear on the NEXT launch**, so
> start the app, wait for the fetch, then force-stop and start it again.

Deep-link straight into a published paper (`blanc-01` .. `blanc-05`, paper
number matching the variant):

```bash
"$ADB" shell am start -n app.ealch.mobile/.MainActivity \
  -a android.intent.action.VIEW \
  -d "ealch://exam-paper?paperId=paper.tef_canada.blanc-02.2"
```

Confirm the device actually holds the papers before blaming a screen:

```bash
curl -s "$SUPABASE_URL/storage/v1/object/public/content/manifest.json"
# want: the version you just published, rollout 100, examPapers 5
```

Screenshot (note the two separate calls and `-p`):
```bash
"$ADB" shell screencap -p /sdcard/s.png
"$ADB" pull /sdcard/s.png ./s.png
```

### What to verify

**E2 — clock, sections, reading, writing**
- [ ] Paper screen lists four épreuves with per-section clocks and status
- [ ] Mode toggle offers *Mode examen* and *Mode entraînement*
- [ ] Clock counts down and **keeps counting while the app is backgrounded** (background it for a minute, come back)
- [ ] A section hard-stops at zero and submits whatever exists
- [ ] Nothing reveals a correct answer mid-section
- [ ] Practice-mode attempt is marked *Non noté*

**E3 — listening**
- [ ] **Document 1** (single play): 5 s reading window with questions already visible, then autoplay, no play button, then *Écoute terminée* with no way to replay
- [ ] **Document 2** (two plays): the two plays are **sequential, not stacked** — this is the whole reason `ExamPart.durationS` exists
- [ ] Practice mode shows *Réécouter* and *Transcription*; exam mode shows **neither**
- [ ] No scrub bar anywhere

---

## 9. Troubleshooting index

| Symptom | Cause | Fix |
|---|---|---|
| "Unmatched Route" on a new deep link | release build, embedded bundle | §2 → §3 |
| Metro serves zero android bundles | release build, or Expo Go stole the intent | §2, §6 |
| `DevLauncherErrorActivity` | Metro launched via `npx` | §4 trap 1 |
| Metro bound but never answers | started from a piped background task | §4 trap 2, restart in a console |
| `curl` returns `000` | that request **is** a bundle build | not a fault — §4.1 |
| Focus shows `host.exp.exponent` | Expo Go claimed the scheme | pin with `-n` — §6 |
| `screencap` usage dump / weird Windows path | MSYS path conversion | `export MSYS_NO_PATHCONV=1` |
| Phone locks mid-test | screen timeout | Developer options → **Stay awake** |
| Phone locked by `adb` | `KEYCODE_BACK` locks it | use `cmd statusbar collapse` instead |
| `adb: device offline` | stale transport | `adb reconnect offline`, then re-run §5 |
| Blank screen, `reverse --list` looks right | dead tunnel that still lists | `reverse --remove-all` then re-add — §5 |
| "No mock exams available yet" | dev build; exams are OTA-only | not a fault — §8 needs a release build |
| `gradlew` exits 49 | `JAVA_HOME` unset | `export JAVA_HOME="/c/Program Files/Android/Android Studio/jbr"` |
| `ninja: manifest 'build.ninja' still dirty after 100 tries` | native toolchain, unresolved | see below — use `--no-dev` instead |

### 9.1 `assembleRelease` does not currently build

3 September 2026. Two attempts, 17 minutes, same failure: `ninja: error:
manifest 'build.ninja' still dirty after 100 tries`. First in
`react-native-reanimated`; after deleting that module's 380 MB `.cxx` cache it
got past it and failed identically in `expo-modules-core`. Moving to the next
module means it is systemic to the native toolchain here, not one stale
directory.

Root cause NOT established. The project path contains a space
(`gitbuild appealch`), a known trigger for this exact ninja symptom — but the
debug APK in this tree built fine on 31 July at the same path, so that is a
suspicion, not a finding. If it needs solving, try building from a path with no
space before spending more time.

**You probably do not need to solve it.** The only reason a release build was
wanted was to make `__DEV__` false so the OTA snapshot loads (§8). Metro can do
that with no native build at all:

```
node node_modules\expo\bin\cli start --port 8082 --no-dev --minify
```

Both dev guards key off `__DEV__` and nothing else, so a production bundle
served to the EXISTING dev client lifts both. The phone keeps its dev build and
its data. Restart Metro without `--no-dev` to resume normal JS work.

Note `--minify` makes the first bundle noticeably slower than a dev bundle.
| App vanished between commands | uninstalled | re-run §3 |
| Metro only ever bundles `platform:"web"` | started with `--web` | drop `--web` — §4. A rising bundle count is **not** proof; grep for `platform":"android"` specifically. |

---

## 10. One-shot script

Everything from §5 to §7, assuming the dev build is installed and Metro is already listening:

```bash
ADB="/c/Users/harki/AppData/Local/Android/Sdk/platform-tools/adb.exe"
export MSYS_NO_PATHCONV=1
LOG="c:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/.expo/dev/logs/start.log"

"$ADB" wait-for-device
"$ADB" reverse tcp:8082 tcp:8082
"$ADB" shell am force-stop host.exp.exponent
"$ADB" shell am force-stop app.ealch.mobile

BASE=$(grep -c '"metro:bundling:started"' "$LOG")
"$ADB" shell am start -n app.ealch.mobile/.MainActivity \
  -a android.intent.action.VIEW \
  -d "ealch://expo-development-client/?url=http%3A%2F%2Flocalhost%3A8082"

until [ "$(grep -c '"metro:bundling:started"' "$LOG")" -gt "$BASE" ]; do sleep 5; done
echo "bundle requested"
until grep -o '"metro:bundling:done"[^}]*' "$LOG" | tail -1 | grep -q total; do sleep 8; done
echo "bundle served — app should be live"

"$ADB" shell am start -n app.ealch.mobile/.MainActivity \
  -a android.intent.action.VIEW \
  -d "ealch://exam-paper?paperId=paper.tef_canada.blanc-02.2"
```

---

## 11. Notes

- **The dev fixture is GONE (2026-09-01).** `devExamFixture.ts`, `devExamPaper.ts` and `emit-dev-paper.ts` were all deleted once TEF blanc-01 published as snapshot v57. Exam papers now arrive over the air like every other content type, so there is no dev-only paper to open and nothing to fence with `__DEV__`. A fresh OFFLINE install has no exam content at all: the seed cut carries no `examTasks` or `examPapers` keys, so the Examiner needs the snapshot before it can show anything.
- Metro startup on this machine is genuinely slow. Two to four minutes to bind is normal, not a hang.
