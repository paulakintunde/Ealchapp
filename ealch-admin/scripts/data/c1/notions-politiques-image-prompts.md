# c1.15 « Justice, liberté, identité, pouvoir » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/notions-politiques/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/notions-politiques/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Papers, books, screens and newspapers are BLANK
  or drawn as grey bars; no symbols, no flags, no party colours, no recognisable
  building, no real person.
- **Scales appear only when they carry the idea:** fairness in act 2, justice
  in act 3, and counterweights to power in act 7. Other acts use their own
  objects and settings. Conceptual images (acts 2, 3, 6, 7, 8, 11) alternate
  with quiet human scenes (acts 1, 4, 5, 9, 10, 12) so twelve pictures do not
  read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in `../b2/lecture-critique-image-prompts.md`), repeated at the end of every prompt below:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 : Le poids des mots · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act01.jpg`

A quiet scene about one word that changes a decision. A community hall seen from the back at mid distance in the evening: rows of small seated figures on folding chairs, a long table at the front with a coffee urn and three small potted seedlings, two together and one larger plant set apart. A standing figure, shown small and from the side, holds an open laptop and gestures toward the plants as the meeting listens. Warm pendant lamps hang from the ceiling. No scales or balance devices. The subject is a neighbourhood meeting discussing three potted seedlings at the front table. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : Égalité et équité · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act02.jpg`

A conceptual illustration about the same share and the fair share. Two identical brass pairs of scales stand side by side on a cream ground. On the left scales, three identical terracotta blocks of the same size sit one on each of three small hanging pans, all at the same height. On the right scales, three blocks of different sizes hang at different heights so that three small sage plants growing beneath them all reach the same level of light. Nothing else is in the frame. The subject is two pairs of scales, one giving equal blocks, one giving blocks sized to what each plant needs. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : La justice · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act03.jpg`

A conceptual illustration about justice as a value and as an institution. On the left of a cream field, a small brass pair of scales floats alone in open sky, light and simple, its pans level. On the right, the same scales are carved in pale stone above the columned doorway of a calm, rounded courthouse building in dusty slate blue, with three small figures walking up its steps. A soft ochre path links the floating scales to the stone ones. The subject is a floating pair of scales and the same scales carved above a courthouse door. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : La liberté et les libertés · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act04.jpg`

A quiet scene about one freedom and many freedoms. A wide public park at dusk seen from a gentle height: in the centre, a single sage-green kite rises freely in the sky. Below it, on the lawn, small groups of figures gather in separate circles: one around a small open book, one holding hands in a ring, one seated listening to a speaker on a low crate, one walking along a path that leaves the frame. A plain wooden bench sits at the edge of the lawn. No scales or balance devices. The subject is a park where a single kite flies above several small gatherings. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : Les droits et leurs textes · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act05.jpg`

A quiet scene about three founding texts. A wooden library table seen from slightly above, lit by a green-shaded lamp. Three sheets of pale paper lie side by side, each covered only with soft grey bars instead of writing, each with a different small wax seal: terracotta, slate blue, ochre. Two pairs of hands, shown from the wrist only, point at the sheets. A few closed reference books rest at the far end of the table. No scales or balance devices. The subject is three blank founding documents with different seals on a library table. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : Pouvoir, puissance, autorité · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act06.jpg`

A conceptual illustration about power, might and authority. A cream field holds three tall objects in a row. On the left, a heavy ornate key on a cushion, the sign of a power that is given. In the middle, a large ochre boulder pressing down on a small plank. On the right, a modest wooden lantern held up by a small figure, with a little crowd of figures turned towards its light. Keep the three objects clearly separated with generous empty space. No scales or balance devices. The subject is a key, a boulder and a lantern that people gather around. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : Les contre-pouvoirs · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act07.jpg`

A conceptual illustration about a power and its counterweights. A large brass pair of scales stands in the centre of a cream field. On one pan sits a tall slate-blue tower. On the other pan, several small objects together balance it exactly: a rolled newspaper drawn as a blank grey roll, a small megaphone, a little gavel and a folded blank sheet of paper. The beam is perfectly level. The subject is a pair of scales on which several small objects balance a tall tower. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : Légal et légitime · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act08.jpg`

A conceptual illustration about what the law allows and what reason can defend. On the left of a cream field, a thick closed slate-blue law book with no title supports a small terracotta block. On the right, an identical block stands beside a small glowing ochre lamp, whose warm pool of light makes the block's shadow visible. The two blocks have exactly the same shape, but their settings are distinct. A narrow open space separates the book from the lamp. No scales or balance devices. The subject is the same terracotta block beside a law book and beside a lamp. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : L’État de droit et l’impunité · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act09.jpg`

A quiet scene about a law that applies to everyone. A town square seen from a gentle height in soft morning light. A line of small figures crosses the square towards the same plain, open doorway of a modest public building; among them one figure in a long dark coat with a briefcase walks in the same line as the others, no taller and no shorter. One figure at the edge of the square holds an open blank notebook. No scales, statues, or balance devices. The subject is a square where everyone, including a person with a briefcase, waits in the same queue at one doorway. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : L’identité · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act10.jpg`

A quiet scene about an identity made of many parts. A figure seen from behind at mid distance stands at a window looking out over a city that blends three skylines into one: brick row houses, a tall church spire and a low terracotta market roof. Several small coloured stones and a single larger stone rest together on the windowsill. A few framed blank pictures hang on the wall. No scales or balance devices. The subject is a person at a window over a blended city, with several different stones on the sill. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : Vivre ensemble · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act11.jpg`

A conceptual illustration about two ways of living together. On the left of a cream field, a mosaic of separate coloured tiles in sage, ochre, terracotta and slate blue, each tile neat and apart from the others. On the right, the same colours woven into one large patterned cloth, threads crossing between them around a common cream centre. Leave a clear open gap between the mosaic and cloth so their different structures can be compared. No scales or balance devices. The subject is a mosaic of separate tiles beside a woven cloth made from the same colours. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 : Ta contribution · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/notions-politiques/act12.jpg`

A quiet scene about a written reply to a neighbour. A small kitchen table by a window at night, seen from slightly above and behind a seated figure. On the table: an open laptop whose screen shows only soft grey bars, a mug, and a printed letter covered with grey bars, several lines marked by small ochre underlines. The figure writes a reply while the neighbourhood lights glow outside. No scales or balance devices. The subject is a person writing a reply at a kitchen table beside a letter with marked lines. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
