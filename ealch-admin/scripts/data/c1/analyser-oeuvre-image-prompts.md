# c1.14 « Analyser une œuvre » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/analyser-oeuvre/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/analyser-oeuvre/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Make the files first, then register them. This file does NOT touch
  lessonImages.ts.
- **Paul makes these himself in ChatGPT.** Every prompt below stands alone:
  paste one in and it produces that act's picture without any other context.
  The house style block is repeated in full in each prompt on purpose. The
  « The subject is » sentence of each prompt becomes its alt text.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood. Posters, labels, sheet music, marquees and
  cassettes appear: every one of them is BLANK, with no writing and no emblem.
- **No real work and no real person.** No still from any film, no copy or
  pastiche of any painting, photograph or staging named in the lesson (Akerman,
  Sembène, Godard, Perrault and Brault, Keïta, La Tour, Monet, Magritte,
  Borduas, Ravel, Tremblay), and no named living director. The candle, the
  misty harbour, the patterned backdrops and the white whales are generic
  motifs, drawn in the house style, never in the manner of the works.
- **The single visual metaphor is THE BACK OF THE TAPESTRY**: the front gives
  the effect, the back shows the threads that make it. Conceptual images of
  weaving, framing, cutting and weighing (acts 1, 3, 4, 5, 8, 10, 11) alternate
  with quiet scenes from each act's text: a snowy cinema exit, an island in the
  Saint-Laurent, a gallery, an empty theatre, a beach at low tide (acts 2, 6,
  7, 9, 12), so twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · « J’ai adoré » ne suffit pas · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act01.jpg`

A conceptual illustration of a feeling that hides its threads. In the middle of a cream space hangs a small woven tapestry, its front turned toward us and showing only a soft glowing ochre sun over a sage green hill. One corner of the tapestry is gently lifted, as if by an invisible hand, and behind it we glimpse the back: a dense, orderly tangle of dusty slate blue, terracotta and ochre threads, knots and crossings. A single loose thread hangs from the lifted corner, inviting a pull. The subject is a pretty picture whose corner lifts to reveal the threads that make it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · De l’émotion aux moyens · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act02.jpg`

A quiet evening scene after a film. Outside a small neighbourhood cinema with a plain unlit marquee and blank poster frames, two small figures seen from a distance walk away along a snowy sidewalk under a streetlamp; one of them gestures broadly with both arms, the other holds a small closed notebook and points at something in the air. Warm light spills from the cinema doors onto the snow. The subject is two viewers leaving the same film, one gesturing, one taking notes. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Le cadre et le plan · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act03.jpg`

A conceptual illustration of a still camera frame. A simple plain kitchen in cross-section, seen from the front at eye level: a table, a chair, a bowl, a window with a pale sky. Over the whole scene lies a thin rectangular frame drawn in dusty slate blue, perfectly still and level, cropping part of the chair and the edge of the doorway. Outside the frame, the rest of the room fades into faint cream outlines. No person is in the frame. The subject is an ordinary room held in a fixed frame that decides what we see. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Champ et hors-champ · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act04.jpg`

A conceptual illustration of what lies outside the picture. A softly lit room is shown inside a rectangular frame; at the very edge of the frame a door stands half open onto darkness. From beyond the right edge of the frame, gentle curved sound waves in terracotta ripple into the room, but their source is not shown. Inside the frame, a small figure seen from behind, at a distance, turns slightly toward the sound. The subject is a framed room touched by a sound coming from outside the picture. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Le montage · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act05.jpg`

A conceptual illustration of joining and cutting. Across a cream background runs a long ribbon of film drawn as a strip of small blank rectangles in dusty slate blue and ochre, with no images inside. At one point the strip is cut cleanly and the two ends are being joined by a small piece of terracotta tape; further along, one long unbroken stretch of the strip curves in a smooth arc with no cut at all. A pair of small simple scissors rests nearby. The subject is a ribbon of film cut and joined in one place and left whole in another. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · La bande-son · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act06.jpg`

A quiet river landscape at dawn. A wide grey-blue river flows between low green banks; on a small island in the middle, a few tiny wooden houses and a church with a plain steeple. On the water, far away, the pale curved backs of two white whales break the surface. In the foreground, on the shore, an old portable tape recorder and a small round microphone on a short stand rest on a wooden crate, with soft sound waves drawn rising from the river toward it. No people. The subject is a recorder on a riverbank listening to an island and its water. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · La composition · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act07.jpg`

A quiet gallery scene. On a pale wall hang three framed photographs, each showing a small seated figure seen from a distance in front of a bold patterned fabric backdrop of flowers and circles in ochre, terracotta and sage green; the figures are tiny and their faces are only soft simple shapes. Opposite, on another wall, hangs a painted landscape where the lines of a quay converge toward a distant horizon and a large empty sky fills the right side. Two small visitors stand between the walls, seen from behind. The subject is a gallery where flat patterned portraits face a deep, open landscape. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · La lumière et la touche · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act08.jpg`

A conceptual illustration of two kinds of light. On the left half, in near darkness, a single small candle flame lights a table, a closed book and a small clay jar, everything else sinking into soft shadow. On the right half, a harbour at dawn dissolves into mist, drawn as loose visible dabs of blue, grey and orange, with a small low sun and the vague shapes of boats. A thin vertical band of cream separates the two halves. The subject is a candle in the dark beside a harbour dissolving into brushstrokes. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · La musique et la scène · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act09.jpg`

A quiet theatre seen from the back of the hall. Rows of empty red seats lead toward a stage where a single wooden chair stands under one circle of warm light; the rest of the stage is in soft darkness. In the orchestra pit in front of the stage, simple shapes of instruments rest on their stands: a small snare drum, a flute on a chair, music stands with blank sheets. No people. The subject is an empty stage with one lit chair and an orchestra pit waiting to play. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Peser le pour et le contre · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act10.jpg`

A conceptual illustration of weighing a work. A large old brass balance stands on a cream table. On one pan lies a small glowing ochre square like a fragment of a bright painting; on the other, a small tangle of grey rope and a blank label. The beam tilts gently toward the bright square, not completely, clearly still moving. Around the base lie a few pieces of driftwood and a blue buoy. The subject is a balance gently tipping between a bright fragment and a tangle of rope. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · La critique, un genre · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act11.jpg`

A conceptual illustration of a woven structure. The back of a tapestry is shown flat on a cream background, but here its threads are arranged in clear, orderly bands from left to right: a single bright terracotta thread at the start, then a band of sage green, a wider band of crossing slate blue and ochre threads, a small knot of grey, and at the far right a clean, finished edge. A narrow country road, seen from above, runs alongside the bands like a guide. The subject is the back of a tapestry woven in clear bands from first thread to finished edge. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ta critique · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/analyser-oeuvre/act12.jpg`

A quiet beach at low tide in the early evening. The sea has pulled far back, leaving wet sand that shines like a mirror. A long, narrow wooden fishing pirogue painted in faded ochre and terracotta stripes rests on the sand, slightly tilted. In the foreground, on a woven mat, sits a small old cassette player with its lid open and a few cassettes with blank labels beside it. Far away, at the edge of the water, a single small figure seen from behind looks at the horizon. The subject is a beached pirogue at low tide and an old cassette player waiting on the sand. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
