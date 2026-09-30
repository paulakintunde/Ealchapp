# b2.12 « Le gérondif » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/gerondif/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/gerondif/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Tickets, notes, maps and screens appear:
  every one of them is BLANK.
- **The single visual metaphor is LE SUJET PRÊTÉ**, one person doing two things
  at once, the second action tied to the same body: a thin terracotta thread or
  ribbon links a figure to what it is doing (acts 2, 8 and 9), and in the human
  scenes one figure visibly carries both actions (walking and listening in act 4,
  working a counter with books beside the till in act 5). Conceptual images (acts
  2, 3, 8, 9) alternate with quiet human scenes so eleven pictures do not read as
  eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Un seul sujet, deux actions · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act01.jpg`

A quiet scene about one person doing two things at the same moment. A small figure in a dusty slate blue winter coat climbs the last steps of a metro exit staircase, rising from a darker slate stairwell into pale cream daylight with a few flakes of snow in the air. At the top of the stairs, a little to the side, a ticket inspector in a terracotta jacket holds out a hand towards the climbing figure, and the climbing figure is already reaching into a pocket for a small blank ochre ticket. The rail of the staircase runs diagonally across the frame and leads the eye up to the meeting point. The subject is the one traveller who is both coming out and being checked, in the same instant. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La forme · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act02.jpg`

A conceptual illustration about building a word from a familiar base. In the centre of a cream field sits a long sage green building block with a rounded end; the rounded end has been neatly cut away and lies slightly apart, tipped on its side. In its place a new terracotta end piece is sliding into position, fitting the cut exactly. In front of the whole block, a small separate ochre tile stands upright like a little door, as if it always has to come first. Soft shadows under each piece show they sit on the same table. The subject is one familiar block, one part removed and one new part added, with a small piece always placed in front. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Trois à part, et les ajouts · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act03.jpg`

A conceptual illustration about three exceptions set apart from a regular series. On a bone-coloured wall, a long wooden rail holds a neat row of identical small sage green keys, all the same shape, hanging at the same height. A little further to the right, on a separate short hook, hang exactly three keys of clearly different shapes, one terracotta, one ochre, one dusty slate blue, each with its own distinctive bow. Nothing else is on the wall except a soft shadow under each key. The subject is a regular row and three keys that do not follow it and are kept on their own hook. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · En même temps · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act04.jpg`

A calm scene about doing two things at once. A single figure in a sage green coat walks along a quiet canal path in Brussels in the early evening, wearing headphones, a paper coffee cup in one hand. A soft terracotta ribbon, like a gentle wave of music, flows from the headphones and runs alongside the figure at the same pace, parallel to the canal water. On the far bank, a row of narrow brick houses with warm ochre windows. The path, the ribbon and the water are three parallel lines moving together. The subject is one walker whose walking and listening travel side by side. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Comment ? · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act05.jpg`

A quiet human scene about how something is achieved. Inside a small café at night, a young person in an ochre apron stands behind the counter, drying a cup, while a neat stack of closed textbooks and a blank notebook rest beside the till, within reach. A single warm pendant lamp lights the counter; the rest of the café is empty, chairs tucked in. Through the window, a dark slate blue street with one lit lamppost. The subject is a student paying for their studies by working the evening shift, the books and the work side by side. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Si : la condition · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act06.jpg`

A quiet scene about leaving early and getting through. A long bridge crosses a wide frozen river at dawn, the sky pale cream turning ochre at the horizon. On the bridge, a single small sage green car drives across an empty road, its headlights still on. Far behind it, at the very edge of the frame on the riverbank, a faint line of tiny slate blue cars is just beginning to gather at the entrance ramp. Snow lines the railings. The subject is the one car that set off early and has the whole bridge to itself. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Parce que : la cause · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act07.jpg`

A gently comic scene about a good intention and its result. A small wooden house in the snowy Laurentian countryside, seen from the side. On the sloping roof, next to the chimney, sits a small older man in a terracotta sweater, arms around his knees, patiently waiting. Below him, a wooden ladder lies flat in the deep snow where it has fallen. On a bare tree branch nearby, a ginger cat walks calmly away towards an open garage window. Pine trees and a pale cream sky fill the background. The subject is the man stranded because he tried to rescue the cat, while the cat saves itself. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Tout en : l'opposition · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act08.jpg`

A conceptual illustration about holding two opposing things together. A single raised hand, seen from the side and simply drawn, holds the central bar of an old-fashioned balance scale. On the left pan rests a small sage green cube; on the right pan rests a terracotta sphere of a clearly different shape. Although the two objects are different, the scale hangs perfectly level. A thin terracotta thread runs from the wrist to the bar, showing that one person holds both sides. Everything else is empty cream space. The subject is one hand keeping two contrary weights in balance. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Le sujet qui manque · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act09.jpg`

A conceptual illustration about an action that has lost its owner and is tied back to it. An office doorway in a bone-coloured wall, the dusty slate blue door standing half open on its own, with nobody in the doorway. A thin terracotta thread starts at the door handle, loops loosely across the empty floor, and ends in the hand of a small figure standing calmly at the right edge of the frame, who is gently pulling it taut, as if reclaiming the door. A potted sage green plant and a blank noticeboard sit beside the door. The subject is a door that seems to open by itself until the thread shows who really came in. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · La place et les faux amis · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act10.jpg`

A quiet still life about a note left for someone. A small wooden kitchen table seen from slightly above, in soft morning light. On it lies a folded sheet of paper with a few BLANK wavy lines drawn on it and no writing, held down by a set of keys. Beside it, a covered bowl of soup, a folded tea towel and two neatly stacked plates. On the back of the chair hangs a terracotta scarf, as if someone has just left in a hurry. A window in the background shows a pale cream sky. The subject is the note on the table and the traces of someone who has just gone out. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Tes conseils · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/gerondif/act11.jpg`

A warm human scene about giving advice to a newcomer. Two figures sit side by side on a park bench in early autumn, seen from a little distance. One, in a sage green jacket, points along a winding path towards a row of buildings and a tram stop in the background; the other, in a dusty slate blue coat, holds an open BLANK folded map on their knees, a small ochre suitcase standing next to the bench. A few terracotta leaves drift down. The subject is one person showing the way to someone who has just arrived. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
