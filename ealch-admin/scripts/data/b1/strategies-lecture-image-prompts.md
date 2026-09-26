# b1.37 « Lire sans tout comprendre » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/strategies-lecture/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/strategies-lecture/actNN.jpg`, so a different name renders nothing).
- **Format:** landscape 4:3, JPEG.
- **Before anything renders:** each ref must be registered in
  `ealch-v2/src/content/lessonImages.ts`, with alt text. `require()` resolves
  statically, so a ref registered before its file exists breaks the bundle.
  Generate the files first, then register them. This file does NOT touch
  lessonImages.ts.
- Every prompt below stands alone: paste one into ChatGPT (or the Fal image
  script) and it produces that act's picture without any other context. The
  house style block is repeated in full in each prompt on purpose.
- **No lettering of any kind** in any image, no close-up faces, and nothing that
  needs a caption to be understood: the opener already carries the act title and
  the promise line underneath. This lesson is about READING, so almost every
  picture contains a page, a screen, a notice or a sign, and EVERY ONE OF THEM
  IS WORDLESS: text is drawn as soft grey horizontal bars or blank lines, a
  headline as one thicker bar, a number as a small solid block. Never letters,
  never digits, never symbols such as %, $ or an arrow with a word in it.
- **The single visual metaphor is THE READER'S LAMP.** A good reader does not
  light the whole page at once: a warm ochre pool of light falls first on the
  parts that carry the meaning (the top of a page, a headline bar, a signpost,
  a number block, a name), while the rest of the page stays in soft, cool
  shadow. Act 1 is the exception on purpose: there the light is a thin,
  pencil-wide beam that lights one bar at a time, and the page is a wall. From
  act 2 onward the pool widens and lands on the right places. The conceptual
  images (acts 2, 3, 4, 5, 6, 10) alternate with quiet human or place scenes
  (acts 1, 7, 8, 9, 11) so eleven pictures do not read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language
> textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue,
> terracotta, warm ochre, sage green. Soft rounded geometric figures with simple
> calm faces, no black outlines, gentle flat shading. Subtle paper grain texture
> over the whole image. Warm even light. No text unless explicitly described.
> Uncluttered composition with generous empty space. Absolutely no lettering,
> captions, watermarks or logos beyond what is described.

---

## Act 01 : Le mur de mots · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act01.jpg`

A quiet scene about reading one word at a time and seeing nothing. The inside of a Montréal metro carriage seen from the side at mid distance, morning, a few seated passengers shown small and calm. In the centre, one seated figure bends over a phone held close, with a thick open dictionary balanced on their knees. Above the phone, drawn large as if projected into the air, the article appears as a tall dense wall of soft grey horizontal bars filling almost the whole upper half of the frame. A single pencil-thin ochre beam from the phone lights exactly one short bar in the middle of the wall; every other bar stays flat and cool. The carriage windows behind show a blurred slate-blue tunnel. The subject is one reader, one tiny beam and a wall of unlit lines. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 : Quel texte ? · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act02.jpg`

A conceptual illustration about recognising a text by its shape before reading it. Four wordless papers are pinned side by side on a cream cork board, each a different kind of text told only by its form: an official notice with one thick slate-blue band across the top and a round seal-like terracotta disc in the corner; a short news brief, narrow, with a tiny clock-face circle at its top edge and three grey bars; a forum post shaped like a rounded speech bubble with a small circular avatar dot and four uneven grey bars; and an advert cut as a bright ochre starburst with one big solid block in the middle. A warm pool of lamplight falls across the TOP edge of all four papers at once, lighting their bands, discs and shapes, while their lower halves stay in soft shadow. The subject is four texts known by their outlines. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 : Le titre annonce la suite · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act03.jpg`

A conceptual illustration about reading the top of a page first. A single newspaper page lies flat on a warm wooden table, seen from slightly above. A round ochre pool of light from an unseen desk lamp falls on the upper part of the page only, lighting one thick dark headline bar, two medium bars just beneath it, and three short bold bars spaced down the page like stepping stones. Everything else on the page, the long rows of thin body bars, rests in cool slate-blue shadow. A pair of reading glasses lies folded at the page's edge. The subject is a page whose headline, standfirst and subheadings are lit and whose body waits in the dark. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 : Survoler, puis chercher · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act04.jpg`

A conceptual illustration about two speeds of reading. A long pale page unrolls horizontally across the whole frame like a scroll, covered in rows of soft grey bars. A wide, faint, even band of warm light sweeps across the entire page from left to right, lighting everything a little, like a quick glance over the whole thing. On top of that, one small bright ochre spotlight lands precisely on a single small solid block near the right end of the page, and only the short row around that block is fully lit. The rest of the page stays in the faint wash. The subject is one wide soft sweep and one small bright landing point. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 : Les chiffres qui comptent · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act05.jpg`

A conceptual illustration about what a number does rather than what it is. On a cream background stand a few tall paper strips cut like a simple bar chart, with no axes and no marks: one terracotta strip clearly taller than its neighbour and topped by a small upward-curving paper fold, one slate-blue strip clearly shorter and topped by a downward fold, and beside them a round paper pie split into three equal slices with one slice lifted slightly out in ochre. A warm pool of light touches only the tops of the strips and the lifted slice. A small flat paper calendar leaf with no marks leans against the chart, half in shadow. The subject is up, down and one part out of three, shown only by shapes. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 : Un mot inconnu · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act06.jpg`

A conceptual illustration about understanding an unknown word through its neighbours. A single horizontal row of rounded pale paper tiles runs across the middle of the frame, like one line of text drawn as tiles. One tile in the centre is dark slate blue and slightly larger: the unknown word. The tiles on either side of it glow softly with warm ochre light, and that light spills sideways onto the dark tile so that its edges start to show a warm rim. Above the row, a smaller tile hangs like a key half fitted into the dark tile's top edge, and just below the row one tile looks almost the same as a friendly neighbour but casts a shadow of a different shape: the false friend. Wide empty cream space all around. The subject is one dark tile being lit by the tiles around it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 : Les panneaux du texte · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act07.jpg`

A quiet landscape about following an argument by its signposts. A pale winding country road seen from a gentle height runs from the bottom left of the frame to a small village on a hill at the top right, through sage-green fields. Along it stand three plain wordless road signs, each only a coloured shape on a post: first a slate-blue sign with a straight upward arrow, then, where the road bends sharply, a terracotta sign with a curving arrow, and at the end near the village a small ochre flag. Soft late-afternoon light falls on the three signs and the bend, while the long straight stretches of road stay in even shade. No cars and no people. The subject is a road whose meaning is carried by three signs. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 : Qui est « ce dernier » ? · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act08.jpg`

A calm scene about knowing which person a text is talking about. A new covered fish market by the sea in Dakar, seen at mid distance from outside: clean pale concrete stalls in a row, a few baskets, the ocean a band of slate blue beyond, a painted pirogue pulled up on the sand. In front of the stalls, three small figures stand in a line at an opening ceremony, seen from a distance with no facial detail: a man in a dark suit, a man in a light suit with a sash, and at the end of the line a woman in a bright terracotta and ochre wax-print dress and headwrap. A soft warm spotlight falls on the LAST figure in the line; the other two stand in gentle shade. No banners with writing, no ribbon with words. The subject is a row of people and the light resting on the last one. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 : Un fait ou une opinion · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act09.jpg`

A street scene about telling facts from opinions. A wide Brussels square in morning light, low art deco building fronts in bone and slate blue, a few trees. On the left, parked neatly in a row, three electric scooters, and beside them a plain upright post holding a blank round sign lit clearly and evenly: the fact. On the right, two small figures seen from a distance, an older man with a flat cap and a young woman with a backpack, talking; above each of them floats a blank speech bubble, and one bubble trails off into a soft little cloud shape: the rumour. The left half of the picture is in crisp, even light; the right half is in softer, dappled light under the trees. The subject is a lit, measurable thing on one side and two people's words on the other. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 : La question d'abord · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act10.jpg`

A conceptual illustration about reading the question before the document. An exam desk seen from directly above: a large pale document sheet covered in rows of soft grey bars, and resting on top of it, slightly askew, a small cream question card with just two short bars and one small ochre circle. A warm pool of light falls first and brightest on the small card. From the card's ochre circle, a thin line of the same warm light runs across the document and ends on one single row, which is lit; the rest of the document stays in cool shade. A pencil lies beside the sheets. The subject is a small card that tells the light where to go on a big page. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 : Résumer pour un ami · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/strategies-lecture/act11.jpg`

A warm evening scene about turning a long article into a short message for a friend. Two lit apartment windows side by side on a Montréal brick facade with an outdoor iron staircase, seen from the street at dusk. In the left window a figure sits at a kitchen table with a long printed article of many grey bars spread out, the warm lamp lighting only a few of its bars. In the right window, a second figure on a sofa holds a phone showing one short message bubble with just three short bars. Between the windows a soft curved line of warm light links the two, like a thread. On the pavement below, a small white community fridge stands beside a doorway, its door shut, a few potted herbs next to it. The subject is many lines on one side and three short lines on the other. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
