# c1.07 « Reformuler et conclure » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act’s first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/reformuler-conclure/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/reformuler-conclure/actNN.jpg`, so a different name renders nothing).
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
- **No lettering of any kind** in any image, no close-up faces (the conductor is
  always seen from behind or at a distance), and nothing that needs a caption to
  be understood. Music stands and sheets are BLANK; no notes, no staves.
- **The single visual metaphor is THE CONDUCTOR'S GESTURE.** The reframe says
  « Chaque marqueur est un geste » : a conductor's hand tells the orchestra what
  happens next, as a marker tells the reader. Four tangled gestures in act 1, a
  corrected line in act 2, a pointed stand in act 3, a hand lowering the volume
  in act 4, the heavy drum last in act 5, a discreet side cue in act 6, a growing
  arc in act 7, the downbeat in act 8, a sheet let go in act 9, the cut-off in
  act 10, rehearsal against concert in act 11, the pen taking over in act 12.
  Conceptual images (acts 2, 7) alternate with quiet human scenes so twelve
  pictures do not read as twelve diagrams.
- Each prompt's scene ends with « The subject is … »: that sentence is the alt
  text when the image is registered.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in
`../b2/lecture-critique-image-prompts.md`), and repeated in full at the end of
every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le discours qui tourne en rond · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act01.jpg`

A quiet rehearsal scene about too many signals at once. A small community hall seen from the back at mid distance, wooden floor, tall windows. A conductor stands on a low podium with his back to us, both arms raised, and four faint terracotta motion trails fan out from his hands in four different directions at once, like a gesture that cannot decide. In front of him, six seated musicians shown small hold their instruments lowered on their knees, waiting, their music stands blank. The subject is a conductor making four gestures at once while the orchestra waits. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · Rectifier en avançant · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act02.jpg`

A conceptual illustration about correcting a line without erasing it. On a wide cream field, a thin slate-blue curved line starts on the left as if drawn by the tip of a conductor's baton; halfway across, a bolder terracotta line branches off it at a gentle angle and continues further, truer and smoother, while the first thin line stays faintly visible, unfinished. A baton, shown only as a slim ochre stick held by a simple hand at the edge of the frame, is drawing the second line. The subject is a first line left visible and a second, truer line drawn beyond it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Ce que j’entends par là · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act03.jpg`

A quiet scene about pointing out one case among many. A long row of seven identical blank music stands seen from the side at mid distance on a pale stage. A conductor, shown from behind and small, extends a baton toward exactly one stand in the middle of the row, and a soft round ochre pool of light falls on that single stand only; the six others stay in the cream shadow. The subject is one gesture singling out the one stand that is meant. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · À vrai dire · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act04.jpg`

A quiet theatre scene about a candid, measured judgement. An old municipal theatre seen from the back of the stalls, with a curved balcony, warm lamps and rows of sage-green seats. In the middle aisle a single conductor figure, shown small and from behind, holds one hand flat, palm down, lowered halfway, the calm gesture that asks for less volume, while the other hand rests at his side. The balcony above is slightly dimmer than the stalls. The subject is a calm hand lowering the volume by half in a renovated theatre. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · L’argument qui pèse · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act05.jpg`

A concert scene about the heaviest voice entering last. A small orchestra seen from the side at mid distance: in front, a violin and a flute shown small, already playing; at the back, a large terracotta kettledrum with its player poised. The conductor, shown from behind, raises his left hand high toward the drum, and a single bold ochre arc travels from his hand to the drum. The subject is the heaviest instrument entering last on the conductor's cue. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · L’argument en passant · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act06.jpg`

A concert scene about a quiet extra voice slipped in on the side. A conductor shown from behind faces the main orchestra, both arms steady; at the far left edge of the stage, a single flute player sits apart, and the conductor tilts his head slightly toward her while one small finger of his left hand makes a tiny discreet gesture. A thin sage-green line of sound rises gently from the flute. The subject is a small side gesture bringing in one quiet extra voice. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Du cas le plus fort · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act07.jpg`

A conceptual illustration about reasoning from the less expected case to the obvious one. On a cream field, two blank music stands stand side by side: a small low one on the left and a tall one on the right. A baton gesture, drawn as a terracotta arc, starts thin above the small stand and grows steadily wider and bolder as it travels to the tall stand, where it lands with a soft ochre glow. The subject is a gesture that grows from the smaller case to the larger one. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Dès lors · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act08.jpg`

A quiet scene about the moment from which everything follows. A conductor seen from behind on a podium, baton held at the very bottom of a downbeat, frozen at that instant. Behind the orchestra, on the far wall, a round wall clock without numbers shows its two hands, and through a tall window a tram line in slate blue starts at the edge of a street and runs away into the distance. The subject is the downbeat from which everything after follows. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · Accepter le prix · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act09.jpg`

A quiet scene about letting one thing go and holding one point firm. A conductor seen from behind on a podium in a garden marquee: with one hand he lets a single blank sheet of music drift away on the breeze, while his other hand rests firmly on the podium rail. Beside him, a smooth grey stone sits on top of the remaining pile of blank scores so that it cannot move. Rows of potted vegetables and baskets are visible beyond the marquee. The subject is one sheet let go while one hand holds firm. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Fermer le texte · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act10.jpg`

A concert scene about the single gesture that ends a piece. A conductor seen from behind, both hands closing together in one small circular motion at chest height, the classic cut-off. In front, the musicians shown small lower their bows and instruments at the same moment, and one last faint ochre ring of sound fades in the air above the stage. The subject is the one final gesture that ends the piece. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Les marqueurs contestés · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act11.jpg`

A split scene about the same person in two settings. On the left half, a bright rehearsal room: a conductor in a loose sweater, shown from behind, gestures casually with an open hand while musicians in everyday clothes laugh and chat around a blank stand. On the right half, the same conductor in a dark formal jacket in a warm concert hall, gestures precisely with a baton before a still, attentive orchestra. A thin vertical sage-green line divides the two halves. The subject is the same conductor, relaxed in rehearsal and precise on the night. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ta version écrite · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/reformuler-conclure/act12.jpg`

A quiet desk scene about turning speech into writing. A pale wooden desk by a window at mid distance: a blank sheet of paper with soft grey horizontal bars for lines, a fountain pen held by a simple hand mid-stroke, and beside the paper a conductor's baton lying at rest. Through the window, a small neighbourhood hall with its door open and warm light inside. The subject is a pen taking over from the baton. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
