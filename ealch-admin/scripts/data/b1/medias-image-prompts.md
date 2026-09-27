# b1.34 « Les médias » · chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/medias/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/medias/actNN.jpg`, so a different name renders nothing).
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
  the promise line underneath. Every newspaper, screen, phone, sign and page is
  BLANK or shows only abstract pale grey marks that cannot be read. No real
  newspaper, channel, app or brand can be recognisable: no mastheads, no logos,
  no interface that looks like a real social network.
- **No alarming imagery.** The fake-news acts stay calm and a little playful: a
  bridge under water is shown as a flat picture on a phone, never as a disaster.
- **The single visual metaphor is EVERY PIECE OF NEWS HAS A RETURN ADDRESS.**
  In each image, one small piece of news (a folded paper, a sound wave, a phone
  screen, a speech bubble) is linked by a thin terracotta thread back to where it
  came from (a newsroom, a microphone, a witness, another phone). Act 1 states it
  outright; act 9 follows the thread all the way back. That is the lesson's
  reframe made visible: ask who is saying it, and how. The conceptual images
  (acts 1, 3, 6, 8, 9) alternate with quiet human scenes (acts 2, 4, 5, 7, 10,
  11), so eleven pictures do not read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le paysage des médias · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act01.jpg`

A conceptual illustration about four ways news reaches a person, each one tied to where it came from. In the centre of a cream field sits a simple rounded armchair, empty, with a small side table. Arranged around it at a calm distance are four objects: a folded blank newspaper on the table, a small ochre radio on a shelf, a slate blue television with a blank glowing screen, and a smartphone with a blank screen lying on the armrest. From each object a thin terracotta thread runs outward to the edge of the frame, where it ends at a tiny simple source: a little building, a microphone, a camera, a cloud. The subject is four media around one reader, each with a thread back to its source. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La presse écrite · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act02.jpg`

A quiet scene inside a small newspaper office, seen from across the room, with no faces in close-up. Three simple desks under tall windows, each with a blank screen and a neat pile of folded newspapers whose pages show only abstract grey bars. A woman in a sage cardigan stands by a long table, laying out large blank pages side by side as if choosing the front page; a young person with a notebook stands a step behind her, watching. On the wall, a plain calendar with no marks and a round clock. Soft morning light, a coffee cup, a plant. The subject is a calm newsroom preparing tomorrow's paper. No readable lettering anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Lire un titre · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act03.jpg`

A conceptual illustration about a headline being unpacked into a full sentence. On the left, a single large blank newspaper front page with one thick bold block at the top, drawn as a solid terracotta bar with no letters. From that bar, a row of small rounded shapes spills out to the right like beads leaving a box: one big ochre shape in front, followed by several smaller slate blue and sage shapes that fill the gaps between them, until they form a longer, even line across the cream space. The short bar and the long line of shapes are clearly the same idea, one compressed, one opened out. The subject is a short headline and the full sentence hidden inside it. No readable lettering anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · La radio et la télé · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act04.jpg`

A quiet early-morning scene in a small radio studio in Dakar, seen from the side, with no faces in close-up. A presenter in a bright ochre and terracotta patterned dress sits at a simple desk in front of a round microphone on a stand, headphones on, one hand raised as she speaks. Through a large window behind her, the pale blue sea and a curving coast road at sunrise, with a few palm trees and low white buildings. On the desk, a blank sheet of paper and a small glass of water; a red on-air lamp above the door is lit but carries no words. From the microphone, soft concentric sound waves drift out through the window toward the city. The subject is a morning bulletin going out on air. No readable lettering anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Qui dit quoi · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act05.jpg`

A calm roadside scene about who is speaking, seen from a distance. A wet highway shoulder after rain, with a parked police car and one small cordon of cones, nothing damaged or dramatic in view. In the foreground, three small groups of people stand apart: a police officer in slate blue speaking to a reporter holding a microphone, a woman in a sage coat talking to a second reporter with a notebook, and a man with an umbrella pointing down the road. Above each speaker floats a small blank speech bubble, and a thin terracotta thread links each bubble to a single folded newspaper held by a figure at the edge of the frame. The subject is one story made of several voices, each tied to the person who said it. No readable lettering anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Pas encore confirmé · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act06.jpg`

A conceptual illustration about the difference between something reported and something confirmed. Two identical blank sheets of paper float side by side on a cream field. The left one is drawn with a soft dotted outline and a pale, slightly transparent fill, like a draft or a shadow, with a small open question-shaped curl of terracotta thread hanging from its corner, not attached to anything. The right one is solid and crisp, with a firm ochre wax seal pressed at its corner and a taut terracotta thread running from the seal to a small solid building at the edge of the frame. The subject is the same news twice: once only heard, once confirmed at its source. No readable lettering and no question mark symbol anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Les réseaux sociaux · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act07.jpg`

A warm evening scene in a family living room in Abidjan, seen from across the room, with no faces in close-up. A young woman in a terracotta top sits on a sofa, looking at her phone with an amused half-smile; beside her, a cousin leans in to see. On a low table, a bowl of fruit and two glasses. Above the phone, a small blank video rectangle rises and splits into several copies that drift away in a gentle curving line toward the window, each a little smaller, each connected to the last by a thin terracotta thread, like a relay passing a baton. Through the window, the city at dusk with a few lit windows. The subject is one video leaving a phone and being passed on and on. No readable lettering and no recognisable app interface anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Vrai ou faux · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act08.jpg`

A conceptual and gently playful illustration about spotting a doctored picture. A large smartphone stands upright in the centre of a cream field. On its screen, a flat picture of a small bridge with pale blue water up to its arches and bright green leafy trees on the banks. But the real scene behind the phone, visible around its edges, is a winter landscape: the same bridge, dry, with bare trees and a little snow on the ground. A round magnifying glass held by a rounded hand in a sage sleeve hovers over the green trees on the screen, showing the mismatch. The subject is a photo that does not match the world it claims to show. No readable lettering and no app interface anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Vérifier une source · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act09.jpg`

A conceptual illustration about following a thread back to where a story began. In the foreground, a small blank speech bubble. From it, a single terracotta thread winds back across a cream landscape like a path, passing through a few simple waypoints: a phone, then another phone, then a plain web page shown as a blank rectangle, getting smaller as they recede. A small figure in an ochre coat walks along the thread with a lantern, halfway there. At the far end, near the horizon, the thread arrives at a small blank-fronted building with a single lit window, where the story started. The subject is someone patiently walking the thread back to the source. No readable lettering anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Juger une info · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act10.jpg`

A quiet scene of a radio phone-in, told through the listeners rather than the studio. A row of five small windows of an apartment building at evening, seen from the street, each window lit and showing one person at home holding a phone to their ear: an older man in an armchair, a young woman at a kitchen table, a man with a baby on his shoulder, a woman with reading glasses, a teenager on a bed. Each is calm, some thoughtful, one shrugging gently. From each window a soft sound wave drifts up and joins the others above the roof in a single wave heading toward a small radio mast on a distant hill. The subject is many ordinary people weighing the same story. No readable lettering anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · À toi de réagir · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/medias/act11.jpg`

A quiet scene of someone writing a reply, without faces. On a small desk by a window at dusk, an open laptop shows a blank page with a few lines of abstract pale grey marks that cannot be read, and a blinking cursor drawn as a short ochre bar. Beside it, a folded newspaper, a phone lying face down, a cup of tea and a small notebook with three short ticks drawn in it. A rounded hand in a terracotta sleeve rests on the keyboard, about to type. Through the window, a neighbourhood street with a small public library building, its door open and its windows lit. The subject is a thoughtful reply being written, with the library the story is about outside the window. No readable lettering anywhere. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
