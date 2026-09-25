# b1.23 « Tout, tous, toute, toutes » · chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/tout/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/tout/actNN.jpg`, so a different name renders nothing).
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
  the promise line underneath. The one notice in act 4 is a BLANK pale rectangle.
- **The single visual metaphor is THE WHOLE SET AGAINST ONE PIECE.** Tout never
  picks a piece: every image shows a whole (a whole street moving, one ribbon
  shaped to what it wraps, one unbroken day, everything gathered in one bundle,
  a table where nothing is missing), and several set one lone piece beside it so
  the whole reads as whole. Conceptual images (acts 2, 3, 5, 6, 8, 9) alternate
  with quiet human scenes in Montréal on moving day (acts 1, 4, 7, 10, 11) so
  eleven pictures do not read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le premier juillet · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act01.jpg`

A quiet human scene about a whole street moving on the same day. A row of three pale brick Montréal townhouses with their typical exterior staircases is seen from across the street, in late morning light. In front of each house a small dusty slate blue moving truck is parked, rear doors open, and rounded figures carry terracotta and ochre boxes down every staircase at once, so that not one house is left out. A single sage green armchair waits alone on the pavement. The subject is a whole street moving together, every house without exception. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 02 · Quatre formes devant un nom · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act02.jpg`

A conceptual illustration about one shape wrapping four different things. On a cream field, four simple objects stand in a row with even spacing: a single ochre sofa, a single terracotta kitchen pot, a stack of slate blue books, and a stack of sage green plates. Around each object a soft bone-coloured band curves like a ribbon, and each ribbon has taken a slightly different shape to fit its object exactly: short and round for the pot, long and low for the sofa, tall for the books, wide for the plates. The subject is one ribbon that takes the shape of whatever it wraps. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 03 · Tous les jours, toute la journée · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act03.jpg`

A conceptual illustration contrasting repeated moments with one long stretch. In the upper half of a cream field, seven small identical ochre suns sit in a neat row, evenly spaced, like days ticked off one after another. In the lower half, a single long dusty slate blue band runs from the left edge to the right edge without a break, with a small terracotta sunrise at its left end and a small sage green moon at its right end. The subject is many small repeated days above, and one whole day drawn as a single unbroken band below. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 04 · Tout un, tout ce, tout mon · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act04.jpg`

A quiet human scene about something far too big for what it holds. A huge dusty slate blue moving truck with its rear doors wide open is parked on a calm residential street, and inside it, far at the back, sit only three small terracotta boxes and one ochre lamp. A rounded figure stands beside the open doors, one hand on the truck, looking into the vast empty space. A small pale bone rectangle, completely blank, is taped to the truck door like a notice. The subject is a whole truck for almost nothing. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 05 · Tout, le pronom · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act05.jpg`

A conceptual illustration about many things becoming one bundle. On a cream field, a scatter of small household objects (a cup, a book, a lamp, a plant, a clock, a folded shirt) in terracotta, ochre, sage and slate blue drift toward the centre, where a single large bone-coloured cloth has gathered them into one neat round bundle tied at the top. Only two objects are still on their way in. The subject is everything gathered into one single bundle, seen as one thing. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 06 · Tous, avec son s · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act06.jpg`

A conceptual illustration about a small sound that appears only when a word stands alone. On a cream field, two identical rows of four rounded slate blue figures stand side by side. In the left row the figures stand close behind a long terracotta banner shape that runs in front of them, and nothing else happens. In the right row there is no banner; the figures stand free, and from the last figure a small curl of warm ochre sound rises into the air like a soft ribbon. The subject is the same group twice, silent when something stands in front of it, sounding when it stands alone. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 07 · La place · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act07.jpg`

A quiet human scene inside a newly moved-into flat in the evening. A rounded figure sits on the floor between stacked terracotta boxes, and a second figure has just come through the doorway, still wearing a coat. Between the two, on the floor, a neat line of objects runs from a sofa to a lamp, with one small ochre box set carefully in the exact middle of the line, fitting the gap perfectly. Warm lamplight fills the room. The subject is one small thing slipped into the middle of a row, exactly where it belongs. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 08 · Tout, l'adverbe · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act08.jpg`

A conceptual illustration about something that is completely one thing. On a cream field, three simple objects stand apart: a sage green fridge, a terracotta cooking stove and a bone-coloured chair. The fridge and the stove are perfectly clean and new, with a soft even sheen and not a single mark, and the chair beside them is also flawless. A tiny ochre sparkle sits on the top corner of each object. The subject is things that are completely, entirely new, down to the last corner. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 09 · Les expressions · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act09.jpg`

A conceptual illustration about fixed blocks that never change. On a cream field, a small stack of five rounded bone-coloured building blocks sits on a slate blue shelf. Each block has a different soft colour stripe (terracotta, ochre, sage, slate blue, cream) and they are set solidly, fused together so they cannot be separated. Next to the shelf, a single loose ochre block lies on its side, tilted, not part of the stack. The subject is a set of blocks welded together into shapes that never move. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 10 · Tout le monde · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act10.jpg`

A quiet human scene in the back courtyard of a Montréal building. Around a long table under a string of warm lights, a crowd of rounded figures in slate blue, terracotta, ochre and sage stand together as one loose group, all turned toward the same point, where a figure raises a glass. Two figures on the right stand a little apart, side by side, clearly a pair. Behind them, a wooden fence and a leafy tree. The subject is one crowd seen as a single group, with a pair standing together at its edge. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 11 · Organiser une fête · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tout/act11.jpg`

A quiet human scene about everything being ready for a party. A long table in a building courtyard, seen from slightly above, is fully laid: every chair is in place, every plate set, every glass standing upright, and a row of ochre and terracotta dishes waits in the middle. Nobody is sitting yet. A single rounded figure stands at the end of the table holding a phone at chest height, looking along the table. The subject is a party where everything, without exception, is ready. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
