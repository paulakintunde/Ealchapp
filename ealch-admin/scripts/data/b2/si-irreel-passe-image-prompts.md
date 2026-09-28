# b2.03 « Si j’avais su » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/si-irreel-passe/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/si-irreel-passe/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Make the files first, then register them. This file does NOT touch
  lessonImages.ts.
- **Paul makes these himself in ChatGPT** (B2-BUILD-LOG, wave 0 item 6). Every
  prompt below stands alone: paste one in and it produces that act's picture
  without any other context. The house style block is repeated in full in each
  prompt on purpose.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Timetables, boards, tickets and pages that
  appear are BLANK.
- **The single visual metaphor is THE ROAD NOT TAKEN**, drawn as a railway: the
  lesson opens on a missed train and its act 10 rewrites a village's history
  from a railway route. A solid path is what happened; a faint dotted or
  translucent outline is what would have happened. Acts 1, 6 and 10 are on the
  rails; conceptual images (acts 2, 4, 7, 9) alternate with quiet human scenes
  (acts 3, 5, 8, 11) so eleven pictures do not read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Si j’avais su · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act01.jpg`

A quiet illustration about a train that has just left. A long, empty station platform at early evening under a high arched glass roof, drawn in cream and slate blue. At the far end, the last carriage of a terracotta train is disappearing out of the frame, two small warm tail lights glowing. In the foreground, seen from behind and at a distance, a single traveller stands still beside a small ochre suitcase, one hand lowered, looking down the empty track; a blank departure board hangs above, its panels empty. The subject is one person and a train that is already gone. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Trois paires, un système · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act02.jpg`

A conceptual illustration about the same thing at three distances. Three shallow steps climb gently from left to right across a cream field. On each step sits an identical pair of rounded stones joined by a short sage-green band, so each step holds one matched pair. The pair on the lowest step is solid terracotta, the pair on the middle step is a softer, paler terracotta, and the pair on the highest step is drawn only as a faint translucent outline, as if it were a memory. The subject is one pair repeated three times, each a notch further back. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Monter la condition · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act03.jpg`

A quiet scene about arriving too late at a full hotel. A small mountain hotel reception at night, seen from the side: a wooden counter, a brass bell, and behind it a wall board of little hooks, every hook empty, no keys left. A receptionist behind the counter, drawn small and calm, turns her hands up gently. In front of the counter, a couple seen from behind, with a rolling suitcase and a backpack, stand still. Through a window, a dark blue lake and a mountain outline. The subject is a row of empty key hooks and two people who came too late. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Monter le résultat · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act04.jpg`

A conceptual illustration about consequences that never happened. A single slate-blue domino stands upright at the left of a long cream table. Stretching away from it in a gentle curve is a line of further dominoes drawn only as faint translucent outlines, and at the far end a small ochre bell drawn the same ghostly way: the chain that would have fallen if the first one had been pushed. Nothing has moved. The subject is one real domino and the outline of everything it did not knock down. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Le regret et le reproche · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act05.jpg`

A quiet scene about two colleagues the day after a failure. A bright office cafeteria by a large window, mid-morning. At a small round table, two colleagues sit facing each other, seen at a slight distance from the side, each holding a paper coffee cup; a closed laptop and a thin blank folder lie between them. Their postures are calm and a little tired, one leaning slightly forward as if speaking gently. Outside the window, city rooftops in slate and ochre. The subject is a quiet conversation where no one is shouting. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Le soulagement · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act06.jpg`

An illustration about making it just in time. A sage-green train stands at a lakeside platform, its doors about to close. A traveller, seen from behind, has one foot already inside the open door, a small backpack on one shoulder and a phone in the other hand, its screen glowing softly with no writing on it. On the platform behind, a faint dotted outline of the same traveller still sitting on a bench shows the version that missed the train. Beyond the platform, a calm blue lake and distant hills. The subject is one person stepping in and the ghost of the one who would have stayed. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · L’ordre des moitiés · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act07.jpg`

A conceptual illustration about putting two halves in either order. Two identical small wooden bridges span a narrow sage-green stream, one above the other on the page. Each bridge is made of two planks, one terracotta and one slate blue. On the upper bridge the terracotta plank comes first from the left; on the lower bridge the slate plank comes first. The planks themselves are exactly the same shape and colour in both bridges. The subject is two halves swapped in order and unchanged in themselves. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Même si et sauf si · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act08.jpg`

A scene about doing it anyway in the rain. A city marathon finish on a wet Sunday morning: slanting slate-blue rain lines across the whole picture, a simple finish arch with a plain blank banner, and a few runners in bright terracotta and ochre crossing it, soaked but upright, arms lifted. At the side, a handful of spectators under round umbrellas. Puddles reflect the arch. The subject is people finishing the race even though it poured. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Les pièges · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act09.jpg`

A conceptual illustration about looking twice before deciding. Three identical small stone doorways stand in a row on a cream field, each with a short path leading up to it. The doorways look exactly the same from the front, but behind them the paths diverge: behind the first, a sage-green garden; behind the second, a plain ochre room; behind the third, a steep drop drawn as a gentle shadow. A single terracotta pencil lies on the ground in front of the third doorway, its tip pointing at it. The subject is three look-alike doors that lead to three different places. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Refaire l’histoire · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act10.jpg`

An illustration about the railway that went one way and not the other. A wide, gentle valley seen from above, in sage green and ochre. A railway line comes in from the bottom of the picture and reaches a switch where it forks. The left branch is solid slate blue and runs to a lively village in the flat bottom of the valley, with a small station, a factory chimney, a school and a church. The right branch is drawn only as a faint dotted line climbing a hill toward a second, smaller village of translucent outlined houses, as it would have grown. A river crosses the valley under a small stone bridge. The subject is one track taken and one track imagined. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Ta mission · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/si-irreel-passe/act11.jpg`

A quiet scene about writing down a turning point. A wooden desk by a window in soft afternoon light. An old desk drawer is pulled half open, and on the desk in front of it lies a small faded blank ticket, kept for years, next to an open notebook with blank pages and a pen resting across it. A cup of tea steams gently. Through the window, far away, a thin line of railway track crosses a field. The subject is an old ticket and a blank page ready for the story. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
