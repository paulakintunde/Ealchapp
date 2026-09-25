# b1.24 « Les emplois de même » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/meme/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/meme/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`. `require()` resolves statically, so a
  ref registered before its file exists breaks the bundle. Generate the files
  first, then register them. This file does NOT touch lessonImages.ts.
- Every prompt below stands alone: paste one into ChatGPT (or the Fal image
  script) and it produces that act's picture without any other context. The
  house style block is repeated in full in each prompt on purpose.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood: the opener already carries the act title and
  the promise line underneath. Clocks have plain hands and no numbers; the
  receipt in act 08 is blank.
- **The single visual metaphor is THE IDENTICAL PAIR WITH ONE SMALL DETAIL.** In
  every image two or more things are drawn exactly alike (two laptops, three
  houses, two suitcases, two café tables, two buildings), and one small detail
  makes the point of the act: a sticker, a pair of boots, a level line, an empty
  outline, a cat at the end of the row, a marker before one block, a receipt, a
  balcony. That is what même says: nothing changes, except exactly where you
  look. The conceptual images (acts 3, 4, 6, 7) alternate with quiet human or
  architectural scenes (acts 1, 2, 5, 8, 9, 10, 11) so eleven pictures do not
  read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le même que toi · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act01.jpg`

A quiet scene about two things that are exactly the same. A long pale wooden coworking table seen from a three-quarter angle, mid distance, in a bright room with a tall window on the left. On the table, side by side, sit two closed laptops of exactly the same dusty slate blue-grey, the same size, the same rounded corners, perfectly parallel. The only difference: the right-hand laptop carries one small round terracotta sticker in its corner. Beside them stand two identical white mugs. At the far end of the table a rounded figure, seen from behind, is walking away toward a door. The subject is two identical laptops and the one small sticker that tells them apart. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 02 · Le, la, les mêmes · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act02.jpg`

A quiet street scene about sameness repeated along a row. A short residential street of three identical two-storey brick houses in muted terracotta, each with the same curved outdoor iron staircase in dusty slate blue leading to the same sage green front door, the way houses look in a Québec City neighbourhood. The three facades are drawn exactly alike and evenly spaced. On the bottom step of the middle house stands one pair of small ochre boots, side by side. No people. A pale morning sky, with generous empty cream space above the roofs. The subject is three identical houses and a single pair of matching boots. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 03 · Le même ... que · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act03.jpg`

A conceptual illustration about two things measured against each other. On a wide cream floor stand two upright suitcases side by side with a gap between them, one dusty slate blue and one terracotta. They are exactly the same height and width. A single thin warm ochre horizontal line runs straight across the top of both, touching each lid at exactly the same level and continuing a little beyond on either side. Nothing else is in the frame except a soft shadow under each case. The subject is two different-coloured suitcases of exactly the same size, joined by one level line. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 04 · Le même, tout seul · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act04.jpg`

A conceptual illustration about something missing that you want again. Against a bone-coloured wall hang two simple wooden hangers on a slim sage green rail. The left hanger holds a dusty slate blue winter coat with a small grey collar. The right hanger is empty, but a faint pale outline of exactly the same coat, drawn only as a soft dotted contour, hangs where the coat would be. The rest of the wall is empty cream space. The subject is one real coat and the empty outline of its identical twin. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 05 · Moi-même · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act05.jpg`

A quiet interior scene about doing something with your own hands. A bright living room with a sage green wall, seen at mid distance. A rounded figure in an ochre sweater, seen from behind and slightly to the side, kneels on the floor tightening the last screw of a tall pale wooden bookcase that stands straight against the wall. An open terracotta toolbox sits beside them, and a small pile of flat cardboard is folded neatly nearby. Nobody else is in the room. A small can of paint and a roller rest on a folded cloth in the corner. The subject is one person alone, finishing a piece of furniture they built themselves. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 06 · Même, c'est even · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act06.jpg`

A gently humorous conceptual illustration about the case nobody expected. A long dusty slate blue umbrella, drawn wider than life, stretches horizontally across the frame. Under it, in a neat row, stand four rounded figures in muted coats, seen from the side, all sheltering from light rain drawn as short pale lines. At the very right end of the row, also sheltering under the last edge of the umbrella and sitting just as upright as the people, is a small terracotta cat. The rain falls on the cream ground all around them. The subject is a row of people under one umbrella, and the cat at the end who is under it too. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 07 · La place de même · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act07.jpg`

A conceptual illustration about where one small marker is placed. On a long pale table seen from slightly above lies a straight row of seven identical rounded wooden blocks in bone and cream, evenly spaced. One small bright terracotta pointer, like a little triangular flag on a pin, stands on the table immediately in front of the fifth block, pointing at it and at nothing else. The other blocks have no marker. There is generous empty space around the row. The subject is a row of identical blocks and one small marker set right before the block it points to. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 08 · Avant ou après le nom · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act08.jpg`

A quiet café scene about a moment that repeats exactly. The image is split into two equal panels side by side, like a diptych with a thin cream gap between them. Both panels show the same small café table by the same tall window, the same bentwood chair, the same round lamp and the same steaming ochre cup, drawn identically. The only difference: in the right-hand panel a small folded pale receipt lies beside the cup, completely blank. No people, no signs. The subject is the same café table seen twice, and the one small receipt that proves it was already there yesterday. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 09 · Quand même · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act09.jpg`

A street scene about going out despite the weather. A doorway in a cream stone building stands at the left edge of the frame; steady rain drawn as long pale slate lines falls across the whole scene, and small puddles shine on the pavement. Two rounded figures have just stepped out of the doorway into the rain, one under a terracotta umbrella and one under a sage green one, walking off together toward the right with a light, unhurried step. The street ahead of them is empty and wet. The subject is two people walking out into the rain anyway. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 10 · En même temps, de même · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act10.jpg`

An architectural scene about two things happening at the same moment. The facade of a quiet building with two identical sage green doors side by side, the same size, with the same round brass handles. Above each door hangs an identical round wall clock with plain hands and no numbers, both hands at exactly the same position. Both doors are opening at the same instant, and from each steps a rounded figure, one in a terracotta coat and one in a dusty slate blue coat, in exactly the same pose, like mirror images. The subject is two identical doors, two identical clocks, and two people stepping out at the same moment. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 11 · Comparer deux choses · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/meme/act11.jpg`

An architectural illustration about comparing two nearly identical places. Two narrow apartment buildings stand side by side on a cream background, drawn as flat facades of the same height, the same bone colour and the same grid of six dusty slate blue windows. The left building is plain. The right building has one small difference: a single ochre balcony on its top floor, with one potted sage green plant on it. Nothing else distinguishes them. A pale sky leaves a little empty space above the roofs. The subject is two identical buildings and the one balcony that decides between them. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
