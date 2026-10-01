# c1.21 « Débats et entretiens » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/debats-entretiens/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/debats-entretiens/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Generate the files first, then register them. This file does NOT touch
  lessonImages.ts.
- Paul makes these himself in ChatGPT (C1 build log, « How one wave runs », step
  5). Every prompt below stands alone: paste one into ChatGPT and it produces that
  act's picture without any other context. The house style block is repeated in
  full in each prompt on purpose. Never Fal.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood: the opener already carries the act title and
  the promise line. Sound is drawn, never written: speech is a ribbon or a stream
  of small soft shapes; every screen, sheet, sign or tag is WORDLESS (soft grey
  bars at most). Never letters, never digits, never a speech bubble with text in it.
- **The single visual metaphor is THE DIVIDING LINE (la ligne de partage).** Two
  or three voices share a wide common ground (one broad field of colour), and
  what separates them is a single thin terracotta line, narrower than you would
  expect. Act 1 shows the mistake (a thick bar drawn where only a thin edge
  exists); from act 2 the line appears in many guises (a fork far down a shared
  road, a beam narrowing, one brick handed over a wall), and act 12 shows the
  learner drawing it precisely on the page. Conceptual images (acts 2, 3, 5, 6,
  8, 10) alternate with quiet human or place scenes (acts 1, 4, 7, 9, 11, 12) so
  twelve pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs` (as repeated in
`../b2/lecture-critique-image-prompts.md`), and repeated in full at the end of
every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 : Le débat à trois voix · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act01.jpg`

A quiet office scene about mistaking two camps for a real disagreement. A small municipal office seen from the side at mid distance, morning light, a small radio on a shelf and two coffee cups. On the desk lies a large sheet of paper on which two big soft discs, one dusty slate blue and one terracotta, overlap almost completely, leaving only a thin crescent of each colour uncovered at the edges. One seated figure has drawn a thick dark ochre bar straight down the middle of the sheet, while a standing colleague, seen from behind and to the side, calmly traces with one finger the thin crescent edge where the two colours really part. The subject is a wide shared ground and the narrow edge where two views actually separate. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : Le modérateur · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act02.jpg`

A conceptual illustration about one guide who keeps three voices in order. A round table seen from a gentle high angle on a cream field, with three small seated rounded figures spaced around it. From each figure a soft ribbon of colour flows towards the centre, one sage green, one warm ochre, one dusty slate blue, each ribbon loose and wandering. A fourth figure stands at the edge of the table holding a long thin terracotta rod, like a conductor's baton, whose tip gathers the three ribbons into one neat, even braid at the centre of the table. The subject is a guide who gathers three wandering voices into one readable strand. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : L'accord d'abord · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act03.jpg`

A conceptual illustration about a long agreement before a late parting. A wide road of warm ochre crosses a calm cream landscape from the foreground towards the horizon, broad enough for two small figures who walk side by side on it. For most of its length the road is a single shared surface; only near the far horizon does it split gently into two narrower paths, one bending left and one bending right, with a thin terracotta line marking the exact point of the fork. Low sage-green hills sit on either side, with generous empty sky above. The subject is a long road walked together and the precise point where it forks. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : Le mot qui gêne · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act04.jpg`

A quiet harbour scene about a dispute over a name. A small fishing harbour in August seen from a café terrace at mid distance, warm afternoon light. Along one short stretch of quay, many tiny rounded figures crowd together under parasols, while the rest of the long curving coastline stays almost empty, with boats resting on calm water. In the foreground, two figures sit at a small terrace table, seen from the side, both looking at one small blank wooden tag lying on the table between them, one figure reaching towards it as if to turn it over. The tag is completely blank. The subject is one crowded stretch of coast and a blank label two people cannot agree to name. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : Concéder sans céder · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act05.jpg`

A conceptual illustration about granting one precise thing and keeping the rest. A low garden wall of pale stone runs across a cream field. On the left of the wall, a small rounded figure stands beside a tall, tidy stack of terracotta bricks; with one hand it passes a single brick over the wall. On the right, a second figure receives that one brick with both hands, a little surprised. The tall stack on the left remains almost untouched, clearly much larger than the single brick that has crossed. The subject is one piece handed across a line while everything else stays where it was. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : Resserrer la thèse · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act06.jpg`

A conceptual illustration about a claim narrowed to what it can hold. A dark slate-blue stage floor seen from a gentle angle. A very wide, pale, diffuse circle of light covers most of the floor, faint and uncertain at its edges. Inside it, a second beam narrows to a small, bright, warm ochre circle around a single small object, a simple rounded lamp standing on its own, and the light inside the small circle is crisp and steady. A thin terracotta outline marks the edge of the small circle. The subject is a wide, vague beam tightened into a small, precise circle that holds firmly. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : Répondre à l'objection · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act07.jpg`

A quiet shop scene about an objection met with a way round it. The interior of a small corner grocery seen from the side at mid distance, warm light. Behind the counter, wooden crates of empty glass bottles are stacked high and crowded, and the shopkeeper, a rounded figure, raises one open hand as if to say there is no room. Through the open shop door, across a quiet street, a small separate collection kiosk is visible, and a short tidy row of crates on a little trolley is being wheeled towards it by a second figure. The glass bottles have no labels. The subject is a crowded counter and a simple path that answers the problem. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : L'analogie et l'allusion · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act08.jpg`

A conceptual illustration about an image held up in front of the real thing. An old pale brick school building with tall windows stands on a cream field under a calm sky. In front of it, a small rounded figure holds up a large empty wooden picture frame at arm's length. Seen through the frame, instead of the school, there is a tall wooden barrel with small holes from which thin streams of water trickle, while a tiny figure pours water into it from a jug. Outside the frame, the real school stands unchanged. The subject is a picture held in front of a building, saying something about it without being it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : Une seule écoute · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act09.jpg`

A quiet study scene about a single, prepared listening. A small desk by a window seen from the side at mid distance, soft evening light. A seated figure, seen in profile, wears simple over-ear headphones; on the desk lie a small hourglass with its sand almost run through and a sheet of paper showing only three short soft grey bars, like three blank answer lines. One smooth ribbon of small pale rounded shapes enters from the left edge of the image, passes once in front of the figure and leaves through the right edge, with nothing coming back. The subject is one pass of sound, met by a listener who prepared for it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : Trois documents · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act10.jpg`

A conceptual illustration about choosing the one solid option among plausible ones. A calm sage-green stream crosses a cream field from left to right. Four flat rounded shapes lie on the water in a row like stepping stones; three of them are actually floating leaves, gently curled at the edges and slightly tilted on the surface, and one is a real, solid, warm ochre stone that sits firmly. A small rounded figure on the near bank stretches one foot towards the solid stone and pauses, testing. The subject is four look-alike stepping places, and the one that will truly hold. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : Le reportage · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act11.jpg`

A quiet night scene about a choice that turned into something else. A small village at night seen from a gentle hillside at mid distance, a dozen houses with a few warm windows. Every street is dark except one main street at the bottom of the image, where a short line of street lamps still glows. Above, a deep slate-blue sky is filled with stars and a soft pale band of the Milky Way. In a garden in the foreground, two small rounded figures, an adult and a child, stand side by side looking up at the sky, seen from behind. The subject is a village that switched its lights off and found the sky. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 : Le débat du jeudi · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/debats-entretiens/act12.jpg`

A quiet scene about drawing the line precisely. In the background, a radio studio at night seen through a large glass window, with a host and three guests seated around a table, small and calm, microphones on thin arms. In the foreground, at a desk, a listener seen from behind and slightly to the side draws on a large sheet of paper: most of the sheet is one wide shared field of sage green, crossed by a single thin, exact terracotta line; at one end of the line sit a small closed door shape and, beside it, a small open window shape. The paper carries no writing. The subject is a debate turned into one wide shared field and one precise line. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
