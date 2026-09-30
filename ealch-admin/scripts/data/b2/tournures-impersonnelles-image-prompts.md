# b2.20 « Les tournures impersonnelles » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/tournures-impersonnelles/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/tournures-impersonnelles/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Notices, notes, papers, screens and signs
  appear: every one of them is BLANK.
- **The single visual metaphor is LE CURSEUR D'ENGAGEMENT**: an empty seat that
  stands for the impersonal il (acts 1 and 12), and a slider or dial that sets
  how far a statement commits (acts 2, 5 and 11). Conceptual images (acts 2, 5, 6)
  alternate with quiet human scenes so twelve pictures do not read as twelve
  diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Un il qui ne désigne personne · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act01.jpg`

A quiet meeting scene about speaking without naming anyone. In a simple common room with pale cream walls, a dozen people sit on folding chairs facing a small table; at the table a figure in a slate blue sweater writes in a blank notebook, while a woman in a sage green jacket stands beside a blank whiteboard, gesturing towards a small sketch of a roof drawn only as a simple outline. In the very front row, one terracotta folding chair stands empty, slightly apart, softly lit. Through a tall window, snowy rooftops of a city. The subject is a room full of people and one empty chair that everyone's words seem to address. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Quatre familles, deux modes · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act02.jpg`

A conceptual illustration about sorting one thing into four families. On a long bone-coloured table stand four simple open boxes in a row, each a different colour: slate blue, terracotta, warm ochre and sage green. Above the table floats a single slim horizontal slider track with a small round knob, like a volume control, drawn in cream with a soft shadow. Small identical rounded tokens rest in each box, the same tokens in all four. The subject is one set of tokens shared between four boxes, under one slider. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Il faut, il suffit de · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act03.jpg`

A calm administrative scene about rules that apply to everyone. At a light wooden counter in a bright town hall, a woman in a sage green cardigan slides a blank form across to a young man in a terracotta coat holding a travel bag. Behind her, a row of neat blank folders on a shelf and a small potted plant; through a large window, a pale blue lake and distant mountains. A short queue of three people waits at a respectful distance. The subject is one counter where the same simple rule is explained to whoever comes. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Il faut que, il importe que · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act04.jpg`

A quiet hospital scene about graded requirements. In a calm ward office, a senior nurse in a slate blue uniform points to a blank sheet pinned on a cork board, while a younger nurse in sage green reads it, holding a clipboard. On the desk, three small objects stand in a row, from smallest to largest: a single wristband, a folded mask, a small stack of blank files, as if arranged from the least to the most important. A window shows a pale grey sky over brick rooftops. The subject is a list of duties, from the smallest to the most essential. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Probable ou possible · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act05.jpg`

A conceptual illustration about degrees of certainty. A long horizontal gauge stretches across a cream field, shaded from deep slate blue on the left to pale cream on the right, with a single small warm ochre marker set just past its middle. Above it, on the left, a heavy snow cloud in dusty slate blue releases thick flakes; on the right, the sky thins to a few faint flakes. A small lighthouse and a line of snowy roofs sit low along the bottom edge. The subject is one gauge measuring how sure a forecast is, with the marker just past halfway. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · La négation et la question · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act06.jpg`

A conceptual illustration about a statement being turned over. On a cream background, a large blank sheet of paper is shown mid-flip, one half still face up in warm ochre, the other half curling over to reveal a slate blue back. A single slim terracotta pencil lies beside it, and a small round magnifying glass rests at the lower corner. Soft shadows fall to the right. The subject is one page turning over, so that what it said is seen from the other side. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Il semble, il paraît · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act07.jpg`

A warm street scene about where news comes from. On a sunny avenue lined with low ochre buildings, a long modern bus in slate blue waits at a clean new stop. In the foreground, two people talk quietly, one leaning to whisper to the other; a little further, a woman with a small microphone and a shoulder bag watches the bus attentively; on a bench, a man reads a blank newspaper. Palm trees and a hazy sea horizon in the background. The subject is one new bus line and the different ways people talk about it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Il est dommage que · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act08.jpg`

A calm morning-after scene about weighing what went well and what did not. On a stone embankment beside a wide river, two volunteers in terracotta and sage green vests sit on a low wall with a blank notebook between them. Behind them, strings of unlit lanterns hang between lampposts, and a few folded barriers lean against a tree. Across the river, a hill with a pale basilica silhouette under a clear dawn sky. The subject is two people looking back on a night of celebration, calmly judging it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Il a été décidé que · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act09.jpg`

A quiet interior about rules that nobody signs. In the entrance hall of a student residence with pinkish brick walls, a large cork notice board holds several blank sheets pinned neatly in a grid. No one stands at the board; a student with a backpack passes by in the background, glancing at it, and a row of blank mailboxes lines the opposite wall. A bicycle leans by the door. The subject is a board of notices that speaks to everyone and is signed by no one. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Il manque deux chaises · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act10.jpg`

A calm scene about counting what is missing. In a bright conference room with tall windows and a view of palm trees, neat rows of terracotta chairs face a small stage with a lectern. In the front row, two empty gaps break the line where chairs should be. A woman in a warm ochre dress holds a clipboard and points to the gaps, while a young man in slate blue carries two folded chairs towards them. The subject is one front row with two places missing. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Du certain au douteux · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act11.jpg`

A calm urban scene about sorting facts from guesses. A summer pedestrian street with shopfronts and café tables stretches into the distance, people strolling. In the foreground, at a small folding table, a woman in a slate blue blazer sorts blank cards into three small trays of different colours, sage green, warm ochre and terracotta, one card hovering in her hand as she decides. A counting clicker rests beside the trays. The subject is one person placing each observation in the tray it deserves. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ta note · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/tournures-impersonnelles/act12.jpg`

A quiet civic scene about a written note that helps a decision. Around a long wooden council table, five figures sit reading identical blank sheets, while at one end a person in a sage green jacket stands, calm, a single blank page in hand. At the far end of the table, one chair is empty. Through tall windows, the gable roofs of a small European town and a church tower in soft afternoon light. The subject is a table of decision-makers reading one careful note. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
