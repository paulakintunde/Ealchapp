# b2.28 « Le français des soins » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/francais-soins/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/francais-soins/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Letters, forms, labels, cards, screens and
  leaflets appear: every one of them is BLANK. No real medicine, brand or
  hospital is shown; no blood, needles or wounds.
- **The single visual metaphor is LE CARNET**, a small warm ochre notebook with
  a pencil that appears in every image: the patient's notebook, filled before
  the visit, during it and for someone else (« Décris avec précision, et demande
  jusqu'à comprendre »). Conceptual images (acts 2 and 7) alternate with quiet
  human scenes in a clinic, a triage desk, a pharmacy, a kitchen and an
  emergency room, so twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le patient précis · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act01.jpg`

A quiet clinic scene about saying exactly what is wrong. In a small examination room with a window onto a snowy street, a doctor in a sage green cardigan sits at a desk with a blank computer screen, turned attentively towards a patient in a terracotta sweater who sits on a chair and points precisely at the outer side of their right knee with one finger. On the patient's lap lies a small warm ochre notebook with a pencil, open on blank pages. The subject is one precise gesture that tells the doctor exactly where. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Où, quand, depuis quand · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act02.jpg`

A conceptual illustration about dating a pain. A long thin slate blue line runs horizontally across a cream field like a calendar timeline, with small evenly spaced ticks and no numerals. At one point on the left a single terracotta dot marks a start; from it, a soft ochre band stretches to the right edge of the frame, gently thicker and thinner along its length like a slow pulse. A small warm ochre notebook with a pencil rests below the line, open on blank pages. The subject is a beginning, and a duration that continues. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Quelle douleur, et combien · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act03.jpg`

A calm night scene at a hospital triage desk. A triage nurse in a slate blue uniform sits behind a low counter holding a pen over a blank form, looking kindly at a patient in a terracotta coat who holds up one open hand as if weighing something. On the wall behind them hangs a simple horizontal scale of eleven small circles going from pale sage to deep terracotta, with no numbers or letters. A small warm ochre notebook lies open on the counter, blank. The subject is a pain being given a size. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Tes antécédents · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act04.jpg`

A quiet desk scene about what came before. On a bone-coloured table, a small warm ochre notebook lies open on blank pages beside a pencil, a closed plain pill box, a folded blank paper and a small old photograph showing only the soft outlines of a family group with no detailed faces. A cup of tea steams gently. A hand in a sage green sleeve rests on the notebook as if about to write. The subject is gathering one's past before a first appointment. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Comprendre le médecin · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act05.jpg`

A consultation scene about asking. A doctor in a sage green cardigan speaks and gestures towards a lightbox on the wall that shows only the soft pale outline of a knee bone. The patient in a terracotta sweater leans slightly forward with one hand gently raised, as if asking a question, the small warm ochre notebook open on their knee with a pencil. The subject is a patient who interrupts politely to understand. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · L'ordonnance et la pharmacie · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act06.jpg`

A calm pharmacy counter in the evening. Behind the counter, a pharmacist in a white coat over a slate blue shirt holds up a small box with a blank label and points to it with a pen. Shelves behind him hold rows of plain boxes and bottles with blank labels in muted colours. On the customer side, a person in a terracotta coat listens, the small warm ochre notebook open on the counter in front of them. The subject is a medicine explained across a counter. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · La notice · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act07.jpg`

A conceptual illustration about reading a leaflet by sections. A long folded paper leaflet lies unfolded across a cream table, divided by faint fold lines into five equal panels, each filled only with soft grey horizontal bars instead of text. One of the five panels is gently highlighted by a warm ochre glow, as if just found. Beside it lie the small warm ochre notebook with a pencil and a pair of reading glasses. The subject is finding the one section that answers your question. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Le parcours de soins · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act08.jpg`

A quiet scene about moving from one health system to another. On a kitchen table sit an open envelope, a blank folded letter with a small plain cross at the top, two different health cards with blank faces, one green and one slate blue, and the small warm ochre notebook with a pencil. Through the window behind, a snowy street with a red-brick triplex and its outside metal staircase. The subject is papers from two countries meeting on one table. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Poser ses questions, donner son accord · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act09.jpg`

A calm specialist office scene about deciding carefully. A surgeon in a slate blue jacket sits across a desk and holds out a blank form and a pen. The patient in a terracotta sweater has not taken the pen yet; they look at the form thoughtfully, one hand resting on the small warm ochre notebook open on their lap. A wall clock with no numerals hangs above them. The subject is taking time before saying yes. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Le mot savant, le mot courant · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act10.jpg`

A warm kitchen table scene about translating words. An older man with white hair and reading glasses holds a blank typed letter and looks up, puzzled but smiling, at a younger person beside him who explains with an open hand. Between them the small warm ochre notebook lies open, its otherwise blank pages showing two simple drawn boxes joined by an arrow. A teapot and two cups complete the table. The subject is a difficult word turned into an everyday one. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Parler pour un proche · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act11.jpg`

A gentle emergency room scene about accompanying someone. An older man in a sage green cardigan sits on the edge of an examination bed, and beside him a younger person in a terracotta coat stands close with a reassuring hand on his shoulder. A doctor in a slate blue coat speaks to them both calmly, holding a blank clipboard against her chest. The small warm ochre notebook sticks out of the younger person's coat pocket. The subject is being there for someone while listening carefully. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · À toi d'écrire · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/francais-soins/act12.jpg`

A quiet evening writing scene. At a desk by a window with a soft lamp, a person in a terracotta sweater types on a laptop whose screen is blank, while beside the laptop the small warm ochre notebook lies open, its pages covered only in soft grey lines with no readable letters, next to a blank letter and a health card with a blank face. A cup of tea steams. The subject is all the notes of the lesson becoming one clear letter. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
