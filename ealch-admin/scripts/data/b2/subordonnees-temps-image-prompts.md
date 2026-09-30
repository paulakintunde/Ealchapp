# b2.18 « Les rapports de temps » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/subordonnees-temps/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/subordonnees-temps/actNN.jpg`, so a different name renders nothing).
  The folder is `subordonnees-temps`, NOT `subordination` (that is lesson 31 in B1).
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
  needs a caption to be understood. Clocks have no numerals, papers, screens,
  signs and departure boards are BLANK.
- **The single visual metaphor is LA LIGNE VUE DU FAIT PRINCIPAL**: a long line
  (a railway platform edge, a thread, a road, a shoreline) with one warm ochre
  marker standing on it, and other events placed before, at, or after that
  marker (acts 2, 4 and 11 are conceptual versions of it); the other acts are
  quiet human scenes where something happens just before, during or just after
  something else. Conceptual images alternate with scenes so twelve pictures do
  not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Mettre les faits dans l’ordre · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act01.jpg`

A quiet domestic scene about putting events in order after a small disaster. In a simple apartment hallway with pale cream walls, a figure in a slate blue sweater sits on a low stool, holding a phone to one ear and a blank notepad on one knee, while folded towels lie on a damp patch of floor near a doorway. Beside the figure, a small side table holds a mug and a round wall clock with no numerals hangs above. A faint trail of water glints on the floorboards leading to the doorway. The subject is someone calmly telling what happened, step by step, after a leak. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La ligne du temps · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act02.jpg`

A conceptual illustration about placing things before, during and after one moment. A long horizontal line of dusty slate blue runs across a cream field, clearly continuing past both edges. At its centre stands one tall warm ochre marker, like a small post. To the left of the marker, two small pale sage circles sit on the line, drawn only as outlines; directly on the marker, a solid terracotta circle overlaps it; to the right, two small solid slate blue circles rest on the line. Soft shadows fall to the right. The subject is one fixed marker on a line, with events waiting before it, touching it, and already past it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Avant que, avant de · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act03.jpg`

A calm workplace scene about doing things before something else happens. Behind the counter of a small, bright pharmacy with pale wooden shelves of plain unlabelled bottles, an older pharmacist in a sage green cardigan shows a younger trainee in a white coat how to hold a small glass bottle up to the light. On the counter, a bowl of water and a folded towel wait beside a closed paper bag. Through the glass door, the street is still empty and the morning light is soft. The subject is careful preparation before the first customer arrives. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Jusqu’à ce que · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act04.jpg`

A quiet scene about waiting for something that has not come yet. In a large, airy railway hall with tall arched windows, two figures sit side by side on a wooden bench with small suitcases at their feet; one holds a paper coffee cup, the other looks towards a large departure board that is completely blank. The empty platform beyond the glass stretches away, its edge a long slate blue line ending at a single ochre marker far off. The subject is two people waiting until a train that has not yet arrived. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Le ne explétif · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act05.jpg`

A gentle scene about a word that looks like a refusal but is not one. In a sunny office with white walls, a potted plant and a slatted window, a notary in a terracotta jacket stands up from a wooden desk, briefcase in hand, ready to leave, while two seated figures, a woman and a man, lean over a single blank document, one pointing at it with a pen. A tiny, pale ochre token sits on the desk beside the pen, small and harmless. The subject is a formal moment just before someone leaves, where nothing is being refused. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · En même temps · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act06.jpg`

A street scene about two things happening at the same moment. At a quiet crossroads in an old stone town, a cyclist in a slate blue jacket rolls across a pedestrian crossing while a small terracotta car begins to turn at the corner, both caught in the same instant. On the pavement, a figure holding a bread bag steps out of a bakery doorway and turns towards them. A traffic light shows a plain green disc. The subject is one instant where several actions overlap. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · À mesure que, depuis que · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act07.jpg`

A warm scene about things growing together over time. Inside a small bakery at dawn, a baker in an ochre apron slides a long tray of loaves out of a stone oven, while behind her a wooden shelf holds rows of bread that grow fuller from left to right, like steps. Through the window, a short queue of customers is forming in the blue morning light. The subject is a business that grows as its customers keep coming back. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Alors que : le temps ou non · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act08.jpg`

A conceptual illustration about one word with two meanings. The image is split by a soft vertical fold into two panels. On the left, two slate blue lines run side by side in the same direction, crossing the same moment together. On the right, two short lines face each other from opposite sides, one sage green and one terracotta, balanced like the pans of a scale without the scale. In the middle, on the fold, one small warm ochre token belongs to both panels. The subject is one link that can mean at the same time or on the other hand. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Quand tu arriveras · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act09.jpg`

A calm scene about instructions for later. On the front step of a small house with a green door and terracotta tiles, a figure with a travel bag hands a single key to a friend, while a watering can stands beside a pot of tomato plants and a bicycle leans against the wall. A small flowerpot by the door is slightly tilted, as if hiding something beneath it. The low evening sun lights the scene. The subject is someone preparing a house for a friend who will arrive when they are gone. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Après que · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act10.jpg`

A community scene about one thing following another. In a modest meeting room with rows of chairs and a long table, a chairwoman in a slate blue jacket has just set down a small wooden gavel, while at the end of the table a treasurer stands and opens a folder, and a secretary writes on a blank sheet. A few raised hands appear among the seated members. The subject is a meeting where each step comes after the one before. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Dès que, une fois que · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act11.jpg`

A tender scene about what comes just after something is finished. On a narrow balcony overlooking a calm blue sea and a small harbour, an elderly man sits in a wicker chair beside a teenage girl holding a notebook; on a little table between them, an empty plate and a folded napkin show that the meal is over. Below, small fishing boats glide back towards the harbour wall in the late light. The subject is an old habit that begins as soon as the day's work is done. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton compte rendu · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/subordonnees-temps/act12.jpg`

A focused scene about writing events down in order. At a wooden desk near a window that looks onto an empty swimming pool hall, a figure in a sage green jumper writes on a sheet of paper with a pen; the page is blank. Across the top of the desk, a long thin slate blue ruler lies straight, and along it sit five small tokens in a neat row, the middle one warm ochre and slightly taller than the others. A lamp casts a soft circle of warm light over the paper. The subject is someone setting every event in its place on one line. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
