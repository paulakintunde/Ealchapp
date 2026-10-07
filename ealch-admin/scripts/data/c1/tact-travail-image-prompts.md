# c1.23 « Le tact au travail » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/tact-travail/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/tact-travail/actNN.jpg`, so a different name renders nothing).
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
  understood. Every sheet, screen, tag, book and envelope is BLANK.
- **The single visual metaphor is THE PARCEL DELIVERED INTACT.** The reframe says
  « Le tact n’adoucit pas le message : il le livre intact » : the content (the no,
  the delay, the limit) never changes, tact is only the packing. The burst box and
  the over-wrapped ball in act 1, six boxes wrapped more and more in act 2, the
  neat parcel with a smaller offering in act 3, the parcel on top of the mail in
  act 4, two boxes held up the stairs in act 5, the glass lift in act 6, the
  thorn in the bow in act 7, the scale and the reference books in act 8, two
  ribbons and two windows in act 9, the one-shape screen in act 10, the parcel
  held steady in act 11, the last knot in act 12. Conceptual images (acts 1, 2,
  5, 6, 7, 8) alternate with quiet human scenes so twelve pictures do not read as
  twelve diagrams.
- Each prompt's scene ends with « The subject is … »: that sentence is the alt
  text when the image is registered.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in
`../b2/lecture-critique-image-prompts.md`), and repeated in full at the end of
every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le non qui blesse · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act01.jpg`

A conceptual illustration about a hard message packed too little or too much. On a pale wooden desk seen from the side, two parcels sit apart. On the left, a small terracotta box has burst open with no packing at all, its lid split and a few blank cards spilled across the desk. On the right, a huge shapeless ball of layered slate blue and ochre wrapping paper, tied with many tangled ribbons, hides whatever was inside. Between them the desk is empty. The subject is a burst box with no packing beside a parcel lost under too many layers. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Les degrés de l’indirect · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act02.jpg`

A conceptual illustration about the dose of wrapping. A long shelf on a cream wall holds six identical small boxes in a row, left to right. The first is bare terracotta; each next one carries a little more wrapping, first a thin ribbon, then paper, then more paper, until the sixth is wrapped in so many soft layers that it is twice the size of the others. A small sage green marker stands under the third and fourth boxes. The subject is six identical boxes wrapped more and more heavily along a shelf. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Refuser par écrit · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act03.jpg`

A quiet scene about a refusal delivered with care. At the stage door of a small concert hall, seen at mid distance on a grey autumn afternoon, a courier shown small hands a compact parcel tied with one neat ribbon to a person standing in the doorway, both seen from the side. A second, smaller box is tucked under the ribbon like an extra offering. The doorway is lit warm from inside, a coat rack visible behind. The subject is a neat parcel with a smaller box tied to it, handed over at a stage door. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Annoncer une mauvaise nouvelle · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act04.jpg`

A quiet office scene about putting the hard news first. A tidy desk by a window in the morning, seen from the side at mid distance. A pile of blank envelopes sits to one side, and on top of everything, placed first and squarely in front of the empty chair, is one small terracotta parcel with a plain ribbon. A desk telephone and a closed planner wait beside it. The subject is one parcel placed on top of the morning mail, in front of the chair. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Dire non à sa hiérarchie · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act05.jpg`

A conceptual illustration about asking someone higher up to choose. A short flight of pale stairs rises left to right on a cream field. At the bottom, a small figure seen from behind holds up two boxes of different colours, one slate blue and one ochre, one in each hand. On the landing above, a second small figure, seen at a distance, leans forward to look at both. A simple balance scale stands empty on the landing beside them. The subject is a person at the foot of the stairs offering two boxes to someone above, beside an empty scale. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Relancer, puis faire remonter · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act06.jpg`

A conceptual illustration about passing a problem upward in the open. A cut-away view of a three-storey building on a cream field, each floor a simple room. A small glass lift in the middle carries one parcel from the ground floor up towards the top floor. On the ground floor, a small figure waves upward; on the middle floor, a second figure watches the lift pass through the glass; on the top floor, a third figure waits by the lift door. Everything is visible through the glass. The subject is a parcel rising in a glass lift past three floors, watched from every floor. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Quand la politesse pique · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act07.jpg`

A conceptual illustration about politeness that hides a barb. On a cream table sits a beautifully wrapped gift box in bone and dusty slate blue paper, tied with a large, perfect sage green bow. From the middle of the bow, a single thin thorny stem pokes out, small but sharp, a tiny terracotta thorn catching the light. Far in the background, two empty office chairs face away from each other. The subject is a perfectly wrapped present with a thorn hidden in its bow. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Les mots qui divisent · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act08.jpg`

A conceptual illustration about weighing words against the reference books. A sorting table seen from above at a slight angle: three small parcels each carry a blank tag of a different colour. Beside them lie two thick reference books open on blank pages, a round magnifying glass resting on one of them, and a small pair of scales holding one parcel on each pan, nearly level. The subject is three tagged parcels, two open reference books and a small scale on a sorting table. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Un courriel, deux lecteurs · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act09.jpg`

A quiet scene about one message and two readers. A pale table in a simple room, seen straight on at mid distance, with two identical small parcels side by side, each tied with a ribbon of a different colour, one ochre and one slate blue. Behind the table, two tall windows: through the left one, a river city with low stone roofs and a distant crane; through the right one, a snowy harbour town with a bell tower and a frozen shore. No flags and no signs anywhere. The subject is two identical parcels tied differently, in front of two windows onto two different towns. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Des titres qui disent quelque chose · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act10.jpg`

A quiet meeting-room scene about a slide that says one thing. A small audience of five people shown from behind, seated around a pale table in a softly lit room. On the wall, a large blank screen shows only one simple bold shape in the middle, a single terracotta box drawn in flat colour, with a thick slate blue band across the top of the screen and the lower edge of the screen left empty. A presenter shown small stands at the side, gesturing towards it. The subject is a screen showing one single bold shape and an audience looking at it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · La question qui fâche · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act11.jpg`

A quiet meeting scene about staying calm under a hard question. A long table seen from the side at mid distance. At the far end, one seated figure leans forward sharply, a few blank sheets lifting off the table as if blown towards the other end. At the near end, a standing figure shown small and calm holds a small parcel steady against their chest with both hands, the sheets drifting past. The other seats are occupied by small, still figures. The subject is a calm standing person holding a parcel steady while papers blow across the table. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton message · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tact-travail/act12.jpg`

A quiet evening scene about a hard message ready to leave intact. A desk by a dark window, lit by one warm lamp, seen from the side. A person shown small and from behind ties the final knot of a plain ribbon on a compact, neat parcel, next to an open laptop with a blank screen and a single blank sheet. Nothing is spilled and nothing is over-wrapped. The subject is a person tying the last knot on a neat parcel at an evening desk. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
