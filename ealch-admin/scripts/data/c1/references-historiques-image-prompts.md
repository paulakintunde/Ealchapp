# c1.13 « Les références qui comptent » : chapter opener artwork

Twelve images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/references-historiques/`
- **Filenames, exactly:** `act01.jpg` … `act12.jpg` (the lesson already points at
  `lessons/references-historiques/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Maps, plaques, books, flags and signs appear:
  every one of them is BLANK, with no writing, no numbers and no recognisable
  emblem.
- **No real, identifiable person.** No Napoleon, no de Gaulle, no king, no
  president, no poet, no portrait of anyone who lived. Historical moments are
  shown only through objects, places and small anonymous figures seen from a
  distance, never as a reconstruction of a real scene with real people. No
  uniforms or symbols of any real army, regime or party.
- **No caricature and no side taken.** Acts on contested history (4, 5, 6, 8,
  9) show two things held side by side, balanced, never one crushed by the
  other.
- **The single visual metaphor is THE FOLDED MAP**: a whole landscape folded
  down to one small square, which unfolds into what it contains, and the hand
  that holds it. Conceptual images of folding, unfolding and holding (acts 1, 3,
  5, 6, 12) alternate with quiet scenes from each act's text in Paris, Québec,
  Brussels, the Swiss Alps and Dakar (acts 2, 4, 7, 8, 9, 10, 11), so twelve
  pictures do not read as twelve diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Le Waterloo du tramway · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act01.jpg`

A conceptual illustration of a word that is really a folded landscape. On a cream desk lies an open newspaper drawn as soft grey bars, with no writing at all. From the place where the headline would be, a small square of paper rises and begins to unfold in the air above the page, and inside its first folds a tiny gentle hillside appears in sage green, with a distant ochre field and a few small dusty slate blue flags with no emblem, too small to show any figure. Beside the newspaper sit a coffee cup and a pen. The subject is a headline that opens like a folded map onto a faraway battlefield. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · 1789 et les Lumières · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act02.jpg`

A quiet evening scene of an old idea still lit. A tall window of a Parisian apartment opens onto a summer evening sky in warm ochre and dusty blue; on the sill sits a single old oil lamp with a soft flame, and beside it a closed leather book with a blank cover and a folded sheet of paper. Far below and away, in the distance, the silhouette of a city of grey rooftops stretches out, with one empty square where a small crowd of tiny anonymous figures gathers around a ribbon of terracotta bunting with no symbol. The subject is a lamp of ideas on a windowsill above a city in celebration. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Les noms devenus des leçons · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act03.jpg`

A conceptual illustration of places that shrank into words. On a cream background, a row of five small paper squares stands upright like tiles, each one folded tight. Above each tile floats a faint, translucent memory of a landscape it once was: a wide green field, a cold slate blue river with a wooden bridge, a snowy hill with a small castle, a dry ochre plain, a misty valley at dawn. Thin dotted lines link each landscape down into its tiny folded square. No figures anywhere. The subject is whole landscapes folded down into small tiles of meaning. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · La laïcité, de 1905 à la loi 21 · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act04.jpg`

A balanced scene of one word on two shores. A calm sea in dusty slate blue runs across the middle of the image. On the left shore stands a small stone town hall with a plain pediment and a blank flag; on the right shore, a snowy town with a silver steeple and a red brick public building. Between them, floating above the water, a single unfolded sheet of paper hangs level like a bridge, blank and glowing softly, touching neither shore. Two tiny anonymous figures, one on each shore, look up at it from far away. The subject is one shared word floating between two shores that read it differently. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Le 18 juin et Vichy · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act05.jpg`

A conceptual illustration of one date and the date it calls up. On a cream table stands an old wooden radio set with a round speaker grille, its dial glowing softly ochre; from the speaker a gentle ribbon of sound drifts upward into an open evening sky. Beside the radio lie two closed archive boxes in dusty blue and sage green, side by side and exactly the same size, each tied with a plain string and carrying a blank label. A small reading lamp lights all three objects evenly. No figures. The subject is a voice from a radio set beside two closed boxes of memory of equal weight. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · L’Algérie : les mots pour le dire · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act06.jpg`

A conceptual illustration of one event and several names held up to it. In the centre of a cream field sits a single folded map, closed, in warm ochre. Around it, at an even distance, three open hands of different skin tones each hold up a small blank card toward the map, like labels offered to it, none of them touching it; the cards are tinted terracotta, slate blue and sage green. Behind, a faint Mediterranean horizon line with a white coastal town on one side and a harbour on the other. The subject is one folded map and three different labels held out to name it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · Mai 68 et les Trente Glorieuses · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act07.jpg`

A quiet scene of a present looking at an old photograph. In a bright modern university corridor with large windows, a small anonymous student seen from behind holds up an old faded square photograph at arm's length; in the photograph, drawn in sepia tones, a cobbled street with tiny distant figures and a few rolled-up banners with nothing on them. Through the real window behind, a calm contemporary street with a tram and bicycles. The two scenes, the old one in the hand and the new one through the glass, line up side by side. The subject is a present-day reader comparing an old image with the street outside. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Le Québec et l’Acadie · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act08.jpg`

A winter scene of a motto read many ways. A wide stone façade of a grand parliament building in pale grey stone, with arched windows, stands under light snow; above its main door, a carved stone band is left perfectly smooth and blank. In the foreground, at a distance from the façade, three small anonymous passers-by in winter coats look up at the blank band, each with a small soft speech-shape of a different colour above their head, all empty. To one side, a parked car seen from behind has a blank licence plate. The subject is a carved motto above a door, read differently by each passer-by. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · La Belgique · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act09.jpg`

A city square at dusk with an empty pedestal. In a cobbled square of a northern European city, with tall narrow gabled houses in ochre and brick red, an old opera house with columns glows warmly on one side. In the middle of the square stands a stone pedestal with no statue on it, wrapped in a pale cloth, and two small anonymous groups of people stand at an equal distance on either side of it, seen from far away, calm. Above the rooftops, the evening sky turns from dusty blue to soft ochre. The subject is an empty pedestal in a square, looked at from two sides. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · La Suisse · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act10.jpg`

An alpine evening of a document and a legend. A green meadow on a mountainside slopes down to a calm lake under snowy peaks at dusk; small bonfires glow on distant ridges. In the foreground, on a flat rock, lies an old parchment rolled half open, blank, held down by a small stone. Beside it, slightly apart and drawn in softer, dreamier tones as if from a storybook, a single red apple sits on a wooden stump with a crossbow bolt resting nearby, no person in sight. The subject is a real parchment beside a storybook apple, document and legend side by side. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · L’Afrique francophone · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act11.jpg`

A seaside terrace in Dakar with a word turned around. On a whitewashed rooftop terrace overlooking an ocean in dusty slate blue, with a baobab and low white houses below, a low wooden table holds an open book with blank pages. From the book, a single ribbon of paper rises and turns over in the air, terracotta on one side and warm ochre on the other, showing both faces as it twists. Far off on the horizon, many small distinct coastlines and islands are drawn as separate soft shapes, each its own colour. No figures. The subject is a ribbon of paper turning over above an open book, one word showing two sides. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 12 · Ton explication · `act12.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/references-historiques/act12.jpg`

A conceptual illustration of a folded map fully unfolded on a desk. On a large cream desk, a map that was folded into a tiny square has been opened flat, its fold lines still visible as soft creases; across its surface, small simple landscapes sit side by side without borders: a city square, a snowy façade, an alpine lake, a seaside terrace, a green battlefield hill. A hand seen from above rests a pen beside the map, next to a neat sheet of writing paper drawn as soft grey bars. A small evening lamp lights everything evenly. The subject is a folded map opened flat, ready to be explained. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
