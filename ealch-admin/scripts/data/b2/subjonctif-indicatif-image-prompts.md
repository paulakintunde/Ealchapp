# b2.06 « Subjonctif ou indicatif ? » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/subjonctif-indicatif/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/subjonctif-indicatif/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Notices, screens, letters and signs appear:
  every one of them is BLANK.
- **The single visual metaphor is LA PIERRE POSÉE, LA PIERRE TENUE**: the
  indicative puts a fact down on the table, the subjunctive holds it up and looks
  at it. Acts 1, 4 and 10 show it directly (a smooth stone set down on a table, a
  hand raising a second stone to the light); the human scenes carry it as a
  thing placed against a thing looked for (a flat already found, a seat still
  empty, a door not yet open). Conceptual images alternate with quiet
  neighbourhood scenes so eleven pictures do not read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · La pierre posée · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act01.jpg`

A conceptual illustration about stating something versus considering it. A plain wooden table in warm ochre stands in a cream room. On the left half of the table, a smooth terracotta stone rests flat and still, casting a short soft shadow. On the right, a hand in a slate blue sleeve lifts an identical terracotta stone a little above the table and holds it towards a soft light from a window, as if examining it. Nothing else is on the table; the window shows only a pale sky. The subject is one stone set down and one stone held up to be looked at. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Ce que le B1 t'a donné · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act02.jpg`

A conceptual illustration about a familiar set of tools with one new one added. A single cream door with a round ochre handle stands in an empty bone-coloured space. In front of it, a ring of five simple keys in slate blue hangs from a small hook at shoulder height. A sixth key, in terracotta and slightly larger, hangs beside the ring on its own hook, catching the light. The door is closed and calm. The subject is a known ring of keys and one new key beside it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Penser, croire, être sûr · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act03.jpg`

A quiet office scene about wondering whether someone will come. Two colleagues seen from a little distance sit at a shared desk by a tall window in Lausanne, one in a sage green jumper, one in a slate blue shirt. Between them, a wall calendar shows a grid of blank squares, one square gently circled in terracotta. At the head of a small meeting table beyond them, one chair stands empty and pushed in, with a closed laptop in front of it. Through the window, a distant lake and pale hills. The subject is two people looking towards an empty chair that may or may not be filled. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Certain, probable, possible · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act04.jpg`

A conceptual illustration about degrees of certainty. A long gentle staircase of six broad steps rises from left to right across a cream background. On the three higher steps, terracotta stones rest flat and firmly placed. On the three lower steps, the stones are smaller and paler, slate blue, and seem to float just above the surface without touching it. A thin ochre line runs vertically between the third and fourth steps, marking a border. The subject is a staircase where the stones settle only above a certain line. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Chercher ou avoir trouvé · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act05.jpg`

A café scene about looking for someone who is not there yet. A young woman in an ochre coat sits at a small round table in a Montréal café with large windows, a cup and a phone in front of her. Across from her, one chair is occupied by a friend in slate blue; a second chair at the same table stands empty, with a soft dotted outline of a person drawn lightly in the air above it. Outside, snow on a row of brick houses with outdoor staircases. The subject is a table with one friend present and one place waiting for someone not yet found. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Le seul, le premier, le meilleur · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act06.jpg`

A street scene about the one shop that stands out. A narrow Liège street at dusk, seen from a little distance, with a row of shopfronts in bone and slate blue, all with their shutters down. One small restaurant in the middle has its door open and warm ochre light spilling onto the pavement, with two tables outside and a blank chalkboard easel. A figure in terracotta pauses in front of it, looking in. The subject is a single lit doorway in a row of closed ones. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Le but ou le résultat · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act07.jpg`

A split scene about an aim and its outcome. On the left half, a quiet street closed by two sage green barriers, empty and clean, with a small child's ball waiting alone in the middle of the road. On the right half, the same street in morning light with three small children running across it and a parent watching from a bench under a young tree. A thin vertical ochre line separates the two halves. The subject is the same street before and after, what was aimed at and what came of it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Bien que ou même si · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act08.jpg`

A conceptual illustration about weighing one thing against another. A simple balance scale in ochre stands on a bone-coloured table. On one pan sits a small terracotta stone; on the other, a slightly larger slate blue stone. The scale is tipped towards the blue side, but the terracotta stone stays firmly in place and is not removed. Behind the scale, a window shows light rain falling over a market awning. The subject is a scale that tips one way while the smaller weight is still acknowledged. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Avant que, après que · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act09.jpg`

A conceptual illustration about before and after on a timeline. A long horizontal slate blue line crosses a cream field. At its centre stands a small ochre door, closed. To the right of the door, along the line, three terracotta stones lie flat and settled, as if already placed. To the left of the door, three pale slate blue outlines of stones hover just above the line, not yet set down. The subject is a line where what comes after the door is placed and what comes before it is still waiting. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Quand les deux sont possibles · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act10.jpg`

A conceptual illustration about two right answers with different shades. Two identical terracotta stones sit side by side on a long ochre table. The left stone rests flat on the table in full warm light. The right stone rests on the same table but under a soft sage green glass dome, slightly shaded, as if kept at a little distance. Both are whole and undamaged. The subject is the same stone shown two ways, one set plainly down and one held a little apart. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Ta réponse sur le forum · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subjonctif-indicatif/act11.jpg`

A calm evening scene about writing a considered reply to neighbours. Seen from behind and a little to the side, a person in a sage green cardigan sits at a desk by a window, typing on a laptop whose screen is blank and softly lit. Beside the laptop lie a small terracotta stone and a notebook with blank pages. Through the window, an old market hall with a pitched roof stands across a small square, a few parked cars beside it and a lit street lamp. The subject is someone composing a reply while looking out at the building everyone is talking about. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
