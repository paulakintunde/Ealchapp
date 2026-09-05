# Getting the app running on the Pixel — recovery process

**Scope:** the JS delivery path only. Nothing here rebuilds native code.
Companion to `DEVICE-PROOF-RUNBOOK.md`, which covers sitting a paper once the
app is up. This file is the diagnosis half: what to check when the phone shows
a white screen and you do not yet know why.

Validated end to end on 2026-09-04, Pixel 6 `21041FDF600BMN` (oriole).

---

## 0. The one thing to internalise

**A white screen and a quiet log look identical whether the tunnel is dead, Metro
is wedged, or the bundle is merely slow.** Every fault below produces the same
symptom. Do not guess between them — each has a distinct, cheap check, and they
are listed in the order that costs least to rule out.

`adb` is not on PATH:

```bash
ADB=/c/Users/harki/AppData/Local/Android/Sdk/platform-tools/adb.exe
export MSYS_NO_PATHCONV=1   # or Git Bash rewrites /sdcard/x.png
```

---

## 1. Preflight — is it even a dev build?

Run this **before** touching Metro. A release build ignores Metro entirely and
every symptom then looks like a Metro problem.

```bash
"$ADB" shell dumpsys package app.ealch.mobile | grep -ci devlauncher   # want >= 1
"$ADB" shell dumpsys package app.ealch.mobile | grep -E "flags=\["      # want DEBUGGABLE
```

`0` and `flags=0x0` mean a release APK is installed. Reinstalling the debug APK
over it needs `adb uninstall` first (different signing key) and **wipes local app
data**.

---

## 2. Fault A — the reverse tunnel is dead while claiming to be alive

**Signature.** `adb reverse --list` prints `UsbFfs tcp:8083 tcp:8083`, which
looks correct. The app reaches `MainActivity` and then logs nothing but garbage
collection for minutes — no manifest fetch, no bundle request.

**The listing lies.** The real signal is the silence in the app's own log:

```bash
PID=$("$ADB" shell pidof app.ealch.mobile | tr -d '\r')
"$ADB" logcat -d --pid="$PID" | tail -30
```

Only `Background young concurrent mark compact GC` lines and no
`ReactNativeJS` = nothing is reaching the device.

**Fix.** Never re-add on top; clear first.

```bash
"$ADB" reverse --remove-all
"$ADB" reverse tcp:8083 tcp:8083
```

Re-run after **every** reconnect, reinstall or `adb reconnect`. The tunnel does
not survive them.

---

## 3. Fault B — Metro is wedged but still holding the port

**Signature.** It accepts connections, so `netstat` looks healthy. The tells:

- an `expo-platform: android` request produces **no bundling event at all**
- recent bundles log `"total":1` while taking 22–55s

A healthy graph for this app is **~2,188 modules**. `total: 1` is not a small
rebuild, it is a broken one.

```bash
LOG="ealch-v2/.expo/dev/logs/start.log"
grep -o '"_e":"metro:bundling:\(started\|done\)"[^}]*' "$LOG" | tail -4
```

**Fix.** Restart it (§5).

---

## 4. Fault C — the Metro process will not die

`taskkill /PID <pid> /F /T` can report SUCCESS while the process stays alive, and
`Stop-Process -Force` can be equally ignored. The port stays bound.

**Do not keep fighting it.** Move to the next port and re-tunnel — it costs one
command, where the fight costs minutes:

```bash
"$ADB" reverse tcp:8083 tcp:8083
```

This is why the working port drifted 8082 → 8083. Nothing depends on the number
as long as the tunnel, the start command and the deep link all agree.

To find and kill the real owner:

```powershell
Get-CimInstance Win32_Process -Filter "ProcessId = <pid>" | Select CommandLine
taskkill /PID <parent-cmd-pid> /F /T
```

---

## 5. Starting Metro — four constraints, all non-obvious

```powershell
$proj = "C:\Users\harki\Downloads\gitbuild appealch\Ealchapp\ealch-v2"
$cmd  = "cd /d `"$proj`" && set EALCH_USE_WATCHMAN=1 && node node_modules\expo\bin\cli start --port 8083 --no-dev"
Start-Process cmd.exe -ArgumentList "/k", $cmd -WorkingDirectory $proj
```

| Constraint | Why |
|---|---|
| **A real console window** | A backgrounded task with piped stdout kills Metro with `ERR_STREAM_UNABLE_TO_PIPE`. It then accepts connections and never answers — indistinguishable from Fault B. |
| **Direct `node …/cli`, never `npx`** | `npx` nests `npx-cli.js → cmd.exe → node.exe`. `app.json` uses `runtimeVersion: {policy:"fingerprint"}`, so Expo spawns a `runtimeversion:resolve` grandchild, which dies inside that tree with Windows `0xC0000142`. The dev client lands on `DevLauncherErrorActivity` while Metro looks perfectly healthy. |
| **`EALCH_USE_WATCHMAN=1`** | Expo pins `resolver.useWatchman = null` (`@expo/metro-config`), forcing Metro's Node crawler. On this tree that exceeds the hardcoded 240s limit in `metro-file-map`'s `Watcher.js:163`, and the bundler starts with **no transformer** — it serves a frozen snapshot and never sees an edit. Watchman takes the root in ~17s. Opt-in via the guard in `metro.config.js`. |
| **`--no-dev`, and NOT `--minify`** | The app skips its OTA snapshot refresh when `__DEV__` is true (`content.ts`), falling back to a bundled seed that has **no exam content**. Without `--no-dev` the TCF and TEF papers simply do not appear. `--minify` only costs build time and changes nothing about `__DEV__`. |

Never pass `--localhost`: it binds IPv6-only and `adb reverse` forwards to IPv4.
Want `0.0.0.0:8083` **and** `[::]:8083` in `netstat`.

Startup is 2–4 minutes to `metro:instantiate`. The only honest readiness signal
is the port being `LISTENING`.

---

## 6. Launch — pin the package

Expo Go (`host.exp.exponent`) is installed and also claims
`ealch://expo-development-client/`. An unpinned intent opens Expo Go and Metro
never hears from the device.

```bash
"$ADB" shell am force-stop host.exp.exponent
"$ADB" shell am force-stop app.ealch.mobile
"$ADB" shell am start -n app.ealch.mobile/.MainActivity \
  -a android.intent.action.VIEW \
  -d "ealch://expo-development-client/?url=http%3A%2F%2Flocalhost%3A8083"
```

Optionally warm the graph host-side so the phone hits a ready bundle. This
request **is** the build, not a health check — it takes minutes and a short
`-m` times out to `000`, which is not a wedged Metro:

```bash
curl -H "expo-platform: android" http://127.0.0.1:8083/
```

---

## 7. Verifying — and the trap that wastes the most time

`start.log` is **append-only across sessions**. A naive grep for
`"platform":"android"` matches entries hours old and reads as success. Always
compare against the current server's own start timestamp:

```bash
LOG="ealch-v2/.expo/dev/logs/start.log"
START=<_t of this server's env:load>
grep -o '"_e":"metro:bundling:started"[^}]*"platform":"android"[^}]*' "$LOG" \
  | awk -F'"_t":' -v s="$START" '{split($2,a,","); if (a[1]+0 > s) print}'
```

Green run, 2026-09-04:

| Check | Value |
|---|---|
| Manifest (`expo-platform: android`) | HTTP 200, 19.5s |
| Android bundle | 2,188 modules, 74.7s |
| Focused activity | `app.ealch.mobile/.MainActivity` |
| JS | `Running "main"` in logcat |

`DevLauncherErrorActivity` → go back to §5, constraint 2.

---

## 8. Deep links

```bash
"$ADB" shell am start -n app.ealch.mobile/.MainActivity -a android.intent.action.VIEW \
  -d "ealch://exam?format=tcf_canada"
"$ADB" shell am start -n app.ealch.mobile/.MainActivity -a android.intent.action.VIEW \
  -d "ealch://exam-section?paperId=paper.tcf_canada.blanc-01.1&skill=CO&mode=practice"
```

The scheme is **`ealch`**, not `exp+wonerock` (dead name, silently does nothing).
The Examiner list reads `?format=` — **without it the list renders empty**, which
looks exactly like missing content and is not.

`Warning: Activity not started, intent has been delivered to currently running
top-most instance` means it **worked**. Routing is async, so screenshot in a
**separate** call.

```bash
"$ADB" shell screencap -p /sdcard/s.png
"$ADB" pull /sdcard/s.png ./s.png
```

Never `adb shell input keyevent KEYCODE_BACK` to dismiss the notification shade —
it locks the phone. Use `adb shell cmd statusbar collapse`.

---

## 9. When the phone drops off mid-session

`adb devices` empty means the cable or USB session dropped. Everything device-side
is gone, including the tunnel. On reconnect: §1, then `adb reverse --remove-all`
and re-add, then §6. Metro itself is unaffected and does not need restarting.
