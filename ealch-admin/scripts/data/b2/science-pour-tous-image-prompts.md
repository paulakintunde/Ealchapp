# b2.29 « La science pour tous » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/science-pour-tous/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/science-pour-tous/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Phones, screens, papers, newspapers and
  book spines appear: every one of them is BLANK. No real brand, institution or
  logo appears.
- **The single visual metaphor is LE PASSEUR**, a finding carried from the
  laboratory to the street without being made bigger or smaller: an oversized
  shadow cast by a small screen (act 1), one sun behind two crowds (act 4), a
  bridge that grows plank by plank (act 5), a blanket round a globe (act 9).
  Conceptual images (acts 3, 5, 7, 11) alternate with quiet human scenes (a
  family dinner, a greenhouse, a beach, a radio studio, a library, a village
  at night, a desk) so twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le titre qui grossit · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act01.jpg`

A quiet family scene about a small thing made to look big. Around a round dining table in a warm Montréal apartment, six relatives sit over a chocolate cake; a teenage girl in a terracotta jumper holds up a phone whose blank screen casts a large, exaggerated slate blue glow onto the wall behind her, like a projected shadow many times the size of the phone. The other figures look towards a figure at the end of the table, seen from behind, who holds a small folded blank newspaper. The subject is a tiny screen throwing an oversized shadow. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Du doute à l’expérience · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act02.jpg`

A calm scene about testing an idea step by step. Inside a small glass greenhouse by a grey river estuary, two identical rows of young tomato plants stand on a wooden bench; one row is slightly taller than the other. A researcher in a sage green coat measures a plant with a simple wooden ruler, a blank clipboard under her arm. A small watering can and two identical pots of soil wait on the floor. The subject is two rows of plants, alike in everything but one. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Le groupe témoin et l’aveugle · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act03.jpg`

A conceptual illustration about a fair comparison. On a cream field, two identical groups of small rounded figures stand side by side, one group in dusty slate blue and one in ochre, separated by a thin line. Above them, a large hand drops small tokens from a cloth bag, sorting the figures at random. In the foreground, a figure with a soft blindfold marks blank papers without seeing which group they came from. The subject is two matched groups, formed by chance, judged without looking. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Lié à n’est pas causé par · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act04.jpg`

A summer beach scene about two things with one hidden cause. A bright ochre sun sits high in a pale sky. Below it, on the left, an ice cream cart with a terracotta awning has a short queue; on the right, a lifeguard chair stands by gentle waves with swimmers in the water. Long soft rays from the sun reach both the cart and the sea equally. The subject is one sun behind two separate crowds. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Un résultat solide · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act05.jpg`

A conceptual illustration about knowledge becoming solid. A small wooden footbridge crosses a stream: on the left bank it is a single thin plank, in the middle several planks are laid side by side, and on the right bank it becomes a sturdy bridge of many planks with a handrail, where two calm figures stand. A few blank sheets of paper are tucked under the planks. The subject is a bridge that grows stronger plank by plank. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Les chiffres qui bougent · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act06.jpg`

A quiet scene about figures that rise and fall. A radio studio with a warm desk lamp: a newsreader in a slate blue cardigan speaks into a microphone, while behind her a large window shows a stylised skyline made of simple bar shapes of different heights in terracotta, sage and ochre, one bar clearly twice as tall as its neighbour. Blank sheets lie on the desk. The subject is a voice reading changes in size. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Moyenne, médiane, ordre de grandeur · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act07.jpg`

A conceptual illustration about the middle of a group. Eleven rounded figures stand in a row on a cream floor, ordered by height; ten are of similar ordinary heights and the last one is a towering giant reaching the top of the frame. A thin sage green line passes exactly through the middle figure of the row, while a faint ochre dashed line floats higher, pulled up towards the giant. The subject is a row of people, one giant, and two different middles. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Les mots du numérique · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act08.jpg`

A calm scene about the hidden side of our screens. On the left, a figure sits on a sofa holding a phone with a blank glowing screen. A thin winding slate blue line runs from the phone out of the window, across a snowy landscape, to a long low building on the right filled with rows of simple server cabinets with small green lights, and a small padlock shape floats along the line. The subject is a small screen linked to a large, distant building. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Expliquer simplement · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act09.jpg`

A warm scene about explaining with an image. In the children’s corner of a library, a woman sits on a low stool, draping a soft woollen blanket around a large round globe beside her. Four small children sit on cushions and watch; one raises a hand. Shelves of books with blank spines line the wall behind. The subject is a blanket wrapped around a globe to explain something big. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Du labo au titre · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act10.jpg`

A quiet night scene about measured certainty. A village street at night: on one side, streetlamps glow ochre; on the other, the lamps are off and the dark sky is full of small pale moths flying over a hedge and a meadow. In a lit window of a small house, a radio sits on a sill. The subject is light on one side of the street, moths on the other. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Les faux amis de la science · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act11.jpg`

A conceptual illustration about words that look alike but differ. Two figures stand facing each other across a narrow gap on a cream floor, dressed almost identically in slate blue, like mirror images; but one holds a stethoscope and the other holds a simple model of an atom with orbiting dots. Between them, two blank card shapes float, identical in shape. The subject is two look-alikes with different tools. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton article · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/science-pour-tous/act12.jpg`

A focused scene about writing a careful post. At a wooden desk by a window at dusk, a figure in a sage green jumper types on a laptop whose blank screen glows softly; beside the laptop lie a blank paper strip crossed by a single terracotta line, a jar of pencils and a small model of a moth under a glass dome. A lamp casts a warm circle of light. The subject is a writer correcting a headline with care. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
