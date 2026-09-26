# b1.29 « Les expressions de couleur » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/expressions-couleurs/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/expressions-couleurs/actNN.jpg`, so a different name renders nothing).
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
  the promise line underneath. The phone screen, the banknotes, the envelope and
  the ledger page are all BLANK.
- **The single visual metaphor is ONE COLOUR WASHING OVER AN ORDINARY SCENE.** In
  every image an everyday place (a desk, a campsite, a street, a kitchen) stays in
  the muted house palette, and one colour spreads through it like a wash of paint
  to show the act's feeling or situation: slate blue for fear and cold, terracotta
  for anger and blushing, sage green for envy, sickness, permission and talent,
  charcoal slate for hidden money and bad luck, bone white for emptiness, dusty
  rose for optimism. The house palette is muted, so every prompt says how its key
  colour sits INSIDE that palette and is never saturated. Conceptual images (acts
  1, 6, 8, 10, 12) alternate with quiet human or street scenes (acts 2, 3, 4, 5, 7,
  9, 11) so twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · La palette · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act01.jpg`

A conceptual illustration about every language having its own colours. A plain wooden painter's palette lies on a pale office desk beside a steaming cup of coffee, in front of a window where snow falls softly on rooftops. On the palette sit four soft round pools of paint: a deep charcoal slate, a dusty slate blue, a terracotta and a bone white, each pool spreading slightly like a gentle wash. A thin blue scarf lies folded and unused at the edge of the desk. Everything else in the scene stays muted cream and bone. The subject is one palette of four feelings waiting on an ordinary desk. The four colours are the palette's own muted tones, never bright. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La peur et le froid · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act02.jpg`

A quiet night scene about fear showing on a face. A small campsite in a dark forest clearing seen from a distance: two small tents, a low campfire of warm ochre embers, tall pine trunks. A wash of dusty slate blue flows down from the sky over the trees and the ground, cool and even, as if the whole night had turned blue with cold and fear. At the edge of the trees, the soft silhouette of a moose stands half hidden. Near the fire, two small rounded figures seen from behind hold each other, their shapes paler, bone white. The subject is a blue night pressing gently on a small warm fire. The blue is the house's muted dusty slate blue, deepened for night, never electric. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · La colère · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act03.jpg`

A street scene about anger rising. An ordinary residential street in Gatineau in late afternoon, seen at mid distance: a row of parked cars and one empty painted parking space in front of a duplex. From that one parking space a soft terracotta wash rises upward like heat haze, colouring the air, the pavement and the lower wall of the house, while the rest of the street stays calm cream and sage. Two small rounded figures stand on the doorstep, seen from behind, arms crossed. The subject is one patch of red heat spreading from a small injustice. The red is the house terracotta, warm and muted, never scarlet. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · La gêne · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act04.jpg`

A quiet human scene about embarrassment. A wedding banquet hall seen from the back of the room: long tables with white cloths, small vases, guests shown as simple rounded shapes from behind. One small figure stands alone at the head table holding a glass, and from him a soft terracotta blush spreads across the white tablecloth in front of him like spilled colour. On the groom's glass sits a single small highlight of warm ochre. No faces in close-up. The subject is one blush spreading across a clean white table. The red is muted terracotta, the yellow a quiet warm ochre. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · L'envie et la santé · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act05.jpg`

A calm travel scene about envy and feeling unwell. The deck of a small ferry on a grey sea, seen from the side: a railing, two benches, a plain lifebuoy with no markings, a distant low coastline. A soft sage green wash spreads across the railing and the bench where one small rounded figure sits bent forward, while the sea and sky stay pale bone and slate. On the other bench, a second small figure looks across with folded arms, a faint sage tint on the shoulders too. The subject is one green shading two people for two different reasons. The green is the house sage green, soft and dusty, never lime. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · L'argent au noir · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act06.jpg`

A conceptual illustration about hidden money. A small shop counter at dusk in Dakar, seen straight on: a wooden counter, shelves of spare car parts as simple shapes, a lamp. The right half of the counter falls into a deep charcoal slate shadow, and inside that shadow a plain blank envelope slides across the wood. On the lit half, a small stack of blank sage green paper notes rests beside a cash box, and a thin terracotta line runs along the bottom edge of a blank ledger page. The subject is money moving from light into shadow. The black is a deep charcoal slate within the muted palette; the notes are plain sage with no printing. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Le blanc · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act07.jpg`

A quiet interior about emptiness. An exam hall with rows of identical small desks and chairs, seen from the back and slightly above. The room is washed in a soft cream white that makes everything look faintly faded, as if the colour had drained out. On one desk in the middle row lies a single blank sheet that glows a brighter bone white than everything around it. A small rounded figure sits at that desk, seen from behind, perfectly still. Tall windows show a pale morning. The subject is one blank page in a room gone white. The white is warm bone and cream, never clinical. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · En rose ou en noir · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act08.jpg`

A conceptual illustration about two ways of seeing the same life. Two identical tall café windows side by side on a Genève street, seen from outside. Through both windows you see the same view: a lake, a small boat, a row of trees. The left window is washed in a soft dusty rose that makes the view gentle and warm; the right window is washed in a deep charcoal slate that makes the same view heavy and dim. Between the windows, a small rounded figure in a grey coat stands looking at neither. The subject is one scene seen through two colours. The rose is muted and dusty, the black a soft charcoal slate, both inside the house palette. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Le feu vert · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act09.jpg`

A calm urban scene about permission. An intersection in Gatineau at dusk, seen at mid distance: wet pavement, a pedestrian crossing, a single traffic light on a pole. The green lamp is lit, and a soft sage green wash spreads from it across the wet road and the crossing, inviting and calm, while the rest of the scene stays in cream and slate. On the far side of the street, a building's front door stands open with a short terracotta carpet rolled out onto the pavement. The subject is one green light turning the whole street into a yes. The green is the house sage green, gently luminous, never neon. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · La série noire · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act10.jpg`

A conceptual illustration about a run of bad luck. A long horizontal row of ordinary objects stands on a pale floor, evenly spaced like dominoes: a small car with its bonnet open, a bucket catching drips from above, a box of tissues, a toddler's overturned cup, a bicycle with a flat tyre. A wash of deep charcoal slate moves from left to right along the row, already covering the first four objects and just reaching the fifth, while the space beyond it is still cream. The subject is darkness travelling along a line of everyday troubles. The black is a soft charcoal slate within the muted palette. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Débutant ou doué · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act11.jpg`

A quiet human scene about beginners and talent. A restaurant kitchen in Old Québec seen from the side: steel counters as simple shapes, hanging pans, a window with snow outside. On the windowsill, pots of basil and herbs glow in a soft sage green wash that spills onto the counter below. In the middle, a small rounded figure in a dusty slate blue apron, seen from behind, holds a notebook and looks up at an older figure in a white jacket who points at the herbs. The subject is a green windowsill and a blue beginner in the same kitchen. The blue and green are the house slate blue and sage green. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Raconte ta semaine · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/expressions-couleurs/act12.jpg`

A warm still life about telling a story with colours. A kitchen table seen from above: a phone lying face up with a completely blank screen, a small dish of Québec pudding with a glossy caramel top in warm ochre, and a cup of tea. Around the phone, six small soft pools of colour sit on the table like drops from a painter's palette: dusty slate blue, bone white, terracotta, warm ochre, cream and sage green, each spreading gently into the wood. The subject is a message about to be written, surrounded by its colours. Every colour is one of the house's muted tones, never saturated. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
