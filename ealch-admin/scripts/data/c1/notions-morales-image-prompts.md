# c1.16 « Mémoire, vérité, beauté, éthique » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/notions-morales/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/notions-morales/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Generate the files first, then register them. This file does NOT touch
  lessonImages.ts.
- Paul makes these himself in ChatGPT. Every prompt below stands alone: paste one
  and it produces that act’s picture without any other context. The house style
  block is repeated in full in each prompt on purpose. The « The subject is »
  sentence of each prompt becomes its alt text.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Papers, cards, plaques and binders are BLANK;
  no symbols, no question marks, no numbers.
- **The single visual metaphor is LA BALANCE.** A small brass pair of scales: each
  word of the field weighs something different (intention or facts, a fault or a
  loss, one person or a group, a light pleasure or an overwhelming grandeur), and
  choosing the word is saying what you put on the scales. Every picture holds a
  pair of scales; acts 1 and 12 share the same small level scales, so the lesson
  opens and closes on the same object. Conceptual images (acts 2, 3, 4, 7)
  alternate with quiet human scenes and landscapes (acts 1, 5, 6, 8, 9, 10, 11,
  12) so twelve pictures do not read as twelve diagrams. No real monument, person
  or place is depicted; the lakeside town is invented.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in `../b2/lecture-critique-image-prompts.md`), repeated at the end of every prompt below:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 : Le témoin sincère · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act01.jpg`

A quiet scene about one word that can accuse or protect. A parish hall seen from the back at mid distance in the evening: rows of small seated figures on folding chairs, old flood photographs shown as plain grey rectangles on the far wall. At the front, an elderly figure sits on a chair beside a microphone stand, shown small and from the side, hands resting on a cane. On a table in the foreground stands a small brass pair of scales, perfectly level, beside an open blank register and a pen. Warm pendant lamps hang above the rows. The subject is a parish hall listening to an elderly witness, with a level pair of scales on the table. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : Sincère, véridique, vraisemblable · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act02.jpg`

A conceptual illustration about the difference between meaning what you say and saying what happened. A pair of scales stands on a cream ground. In the left pan rests a small warm terracotta heart shape, glowing softly. In the right pan rests a neat stack of three plain slate blue cards held by a sage green clip, like checked documents. The beam is level. Behind the scales, a faint transparent outline of a third card floats in the air, pale and hollow, like something that only looks solid. Nothing else is in the frame. The subject is a pair of scales holding a glowing heart and a stack of checked cards, with a hollow card floating behind. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : Mentir ou se tromper · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act03.jpg`

A conceptual illustration about knowing and not knowing that something is false. Two identical small signposts stand side by side on a cream path, each pointing the wrong way, away from a small ochre house in the distance. The left signpost is held in place by a small figure seen from behind, standing in its shadow and turning it on purpose. The right signpost has simply been bent by the wind, a few sage leaves blowing past it, with no one nearby. The two posts are the same height and colour, and a small pair of scales stands at the fork of the path. The subject is two identical signposts pointing the wrong way, one turned by a hidden figure, one bent by the wind. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : Infox ou erreur · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act04.jpg`

A conceptual illustration about three false messages with three different intentions. Three paper planes fly across a cream sky from left to right, all the same shape and size. The first is slate blue with a tiny dark weight hanging from its nose, as if built to fall on someone. The second is ochre with one wing slightly creased, drifting off course by accident. The third is sage green with a small festive terracotta ribbon trailing behind it, light and playful. Below, a pair of scales stands on the ground, empty, waiting. The subject is three identical paper planes, one weighted, one creased, one with a ribbon, above an empty pair of scales. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : Morale, éthique, déontologie · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act05.jpg`

A quiet scene about three kinds of duty. A newspaper office seen at mid distance: a long wooden desk with stacked blank papers, a closed binder with a plain slate blue cover standing upright like a rulebook, and a small round meeting table further back where three figures sit, shown small, leaning in to discuss. In the foreground, a pair of scales rests on the desk beside the binder. Through a tall window, the roofs of a small lakeside town. Warm afternoon light. The subject is a newspaper office with a rulebook binder, a small discussion table and a pair of scales. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : Remords, regret, honte · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act06.jpg`

A quiet scene about a fault and a loss. A figure seen from behind sits at a small table by a window at night, writing a letter on plain cream paper, shoulders bowed. On the table, a pair of scales: in the lower pan, a small dark terracotta stone; in the higher pan, a single sage green feather. In the corner of the room, an upright piano with its lid closed, shown in soft shadow. A warm lamp lights the paper. The subject is a figure writing a letter at night beside scales holding a stone and a feather, a closed piano in the corner. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : Intègre, pas intégral · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act07.jpg`

A conceptual illustration about a person who cannot be bought. A pair of scales stands on a cream ground. In one pan stands a small upright slate blue wooden piece, simple and smooth like a chess piece. A hand-shaped ochre silhouette reaches in from the edge of the frame, offering a small heap of golden coins toward it, but the coins stay on the table, not in the pan, and the beam does not move. Next to the scales lies a thick bound document, complete, every page neatly squared. The subject is a pair of scales holding an upright wooden figure that does not tip toward offered coins, beside a complete bound document. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : Le joli, le beau, le sublime · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act08.jpg`

A landscape in three steps from near to far. In the foreground, a small cluster of colourful wooden houses with flower boxes, cheerful and small. In the middle distance, a grey stone church with balanced proportions under a calm sky. In the far distance, a high cliff above a wide river in a storm, huge dark waves and slate clouds, with two tiny figures standing at the cliff edge, seen from behind, dwarfed by the view. The three zones are separated by gentle sage hills, and a small pair of scales sits on a fence post in the corner of the foreground. The subject is a pretty village, a beautiful church and a vast stormy river below a cliff, from near to far. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : Le goût et l’esthétique · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act09.jpg`

A quiet scene about judging with reasons. A gallery room with three large abstract paintings on cream walls: one in loud overlapping reds and oranges, one in calm balanced blues and sages, one small and pale. Two figures, shown small and from behind, stand in front of the red painting, one pointing gently at it as if explaining. Near the exit, a little shop shelf holds tiny glittering souvenir objects, a sunset-shaped magnet and a snow globe, beside a small brass pair of scales used as a display piece. The subject is two visitors discussing a loud red painting in a gallery, with a shelf of glittering souvenirs near the exit. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : Mémoire et souvenir · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act10.jpg`

A quiet scene about one person's memory and a village's memory. A school classroom: a child seen from the side holds a small recorder out toward an elderly figure sitting in an armchair, both shown small and at mid distance. On the wall behind them, a large board covered with many small blank photographs and cards pinned together, forming one big shape like a mosaic. On a side table, a pair of scales holds a single photograph in one pan and a thick album in the other, balanced. The subject is a child recording an elder in a classroom, a wall mosaic of pinned photographs and scales balancing one photo against an album. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : Commémorer, se souvenir · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act11.jpg`

A quiet scene about commemorating, not celebrating. A small square by a lake on a grey spring morning: a simple stone monument with a blank bronze plaque, a few figures standing in a loose half circle with bowed heads, shown small and from behind, one laying a wreath of sage leaves. Far in the background, on the other side of the water, a new low dyke with a few folded festival chairs stacked and waiting, unused for now. A pair of scales is carved into the base of the monument as a simple relief. The subject is a quiet ceremony at a lakeside monument with a wreath, and stacked festival chairs waiting across the water. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 : Ta réponse · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-morales/act12.jpg`

A quiet scene about answering someone with care. A writing desk by a window overlooking a lake town: an open letter on cream paper on the left, a fresh blank sheet on the right with a pen resting on it, and between them a small brass pair of scales, perfectly level, the same one as in the parish hall. A cup of tea steams beside the lamp. Through the window, the small stone monument is visible far away by the water. The subject is a writing desk with a letter, a blank sheet and a level pair of scales, the lakeside monument seen through the window. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
