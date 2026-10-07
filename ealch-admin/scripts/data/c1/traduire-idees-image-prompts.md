# c1.22 « Traduire des idées » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/traduire-idees/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/traduire-idees/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Make the files first, then register them. This file does NOT touch
  lessonImages.ts.
- **Paul makes these himself in ChatGPT** (B2-BUILD-LOG, wave 0 item 6). Every
  prompt below stands alone: paste one in and it produces that act's picture
  without any other context. The house style block is repeated in full in each
  prompt on purpose. Never Fal.
- **No lettering of any kind** in any image, no close-up faces (people are shown
  small, from behind or at a distance), and nothing that needs a caption to be
  understood. Every sheet, sign, disc and cloud is BLANK.
- **The single visual metaphor is THE SAME CARGO IN ANOTHER BOAT.** The reframe
  says « Garde ce que le texte fait à son lecteur : l’idée, sa force, son fil ;
  pour le reste, écris en français » : the contents travel whole, the container
  changes. The crate left on the quay in act 1, the pile repacked in act 2, the
  level scale in act 3, the small buoy on a large anchor in act 4, the signposted
  path in act 5, the bridge between islands in act 6, the single bag in act 7,
  two keys for two doors in act 8, the distilled essence in act 9, one message in
  three colours in act 10, the double check under the lamp in act 11, and the
  loaded boat crossing to the far shore in act 12. Conceptual images (acts 2, 3,
  5, 6, 8, 9) alternate with quiet human scenes so twelve pictures do not read as
  twelve diagrams.
- Each prompt's scene ends with « The subject is … »: that sentence is the alt
  text when the image is registered.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in
`../b2/lecture-critique-image-prompts.md`), and repeated in full at the end of
every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Juste mais faux · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act01.jpg`

A quiet harbour scene about cargo that arrives incomplete. Two small wooden boats are moored side by side at a calm quay seen from mid distance. Crates are being passed from the left boat to the right one; the right boat holds every crate, neat and square, but one crate, a warm terracotta one glowing slightly, has been left behind on the quay between them. A figure shown small, from behind, stands on the quay looking at that single crate. The subject is a cargo moved from one boat to another with one bright crate left behind on the quay. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · L’idée avant les mots · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act02.jpg`

A conceptual illustration about keeping the contents and changing the container. On a cream field, a tall tangled stack of narrow slate-blue boxes, piled awkwardly one on top of another, leans on the left. On the right, the same objects, now fitted neatly into one simple open ochre crate, sit level and calm. A thin dotted path of small sage dots links the two. The subject is a wobbly pile of narrow boxes repacked neatly into one open crate. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Atténuer comme l’auteur · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act03.jpg`

A conceptual illustration about weighing exactly the same. A simple balance scale stands on a cream field. On the left pan rests one small slate-blue crate; on the right pan rests a terracotta crate of a different shape, and the beam is perfectly level. Beside the scale, on the ground, three tiny feathers lie unused. The subject is a level balance holding two differently shaped crates of exactly equal weight. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · La retenue anglaise · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act04.jpg`

A quiet scene about something larger than it looks. A calm sea seen from a low boat, a figure shown small from behind at the prow, looking out. On the surface floats a small, modest ochre buoy; beneath the waterline, visible in a soft cut-away, the chain leads down to a very large anchor resting on the sea floor. The subject is a small buoy on calm water held by a very large anchor below the surface. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Le fil du paragraphe · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act05.jpg`

A conceptual illustration about a path with its signposts. A gentle winding footpath crosses a cream and sage landscape from the bottom left to a small terracotta house at the top right. Along the path stand three simple wooden posts, each topped with a blank round disc in a different muted colour, placed at the bends. Nothing is written on them. The subject is a winding path to a small house with three blank signposts at its bends. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Expliciter · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act06.jpg`

A conceptual illustration about joining two islands. Two small round islands sit in a calm slate-blue sea, each with one sage tree. A slender ochre footbridge has just been completed between them, drawn clearly, while a faint dotted outline above the water shows where the link was only imagined before. The subject is two small islands newly joined by a slender bridge. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Alléger · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act07.jpg`

A quiet scene about travelling light. On a cream station platform, a figure shown small, from behind, walks towards a waiting train carrying one simple travel bag. Behind them, left neatly on a bench, sit two identical duplicate suitcases, matching pairs, not needed. The subject is a traveller walking to a train with one bag, leaving duplicate suitcases on a bench. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · L’équivalence culturelle · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act08.jpg`

A conceptual illustration about the same key for a different door. On a cream field stand two doors side by side, one rounded and slate blue, one square and terracotta, each with a differently shaped keyhole. Floating between them are two keys of different shapes on one ring, each clearly made for one of the doors. The subject is two different doors and two different keys on one ring, each key fitting its own door. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Résumer en traduisant · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act09.jpg`

A conceptual illustration about distilling. On a wooden table, a large clear glass jug full of loose sage-green leaves stands on the left; a thin copper pipe leads from it to a small round bottle on the right that holds a little bright ochre liquid. The scene is calm, with generous empty space around it. The subject is a large jug of leaves distilled into one small bottle of essence. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Changer de public · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act10.jpg`

A quiet scene about one message for three listeners. A long wooden bench in a park seen from mid distance. Three figures shown small, from behind and at a distance, sit on it: an older person in a coat, an adult with a folder, a teenager with a backpack. Above each, a soft rounded speech-shaped cloud floats, all three the same shape but in three different colours, slate blue, ochre and sage, and all blank. The subject is three different people on a bench receiving the same blank message in three colours. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Relire en traducteur · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act11.jpg`

A quiet workshop scene about checking twice. A wide desk under a warm lamp. On the left, two blank sheets lie side by side, one slate blue and one cream; a figure shown small, from behind, leans over them holding a round magnifying glass. On the right of the desk, the cream sheet alone, turned towards an empty chair, as if waiting to be read by someone else. The subject is a translator checking two blank sheets side by side under a lamp, then one sheet set apart for its reader. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ta traduction · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/traduire-idees/act12.jpg`

A calm harbour scene at morning. A single small boat, fully loaded with neat crates in slate blue, terracotta, ochre and sage, glides away from the quay across still water towards a far shore where a few small houses wait. A figure shown small, from behind, stands at the stern. The subject is a small boat carrying its whole cargo across calm water to the far shore. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
