# b2.07 « Le futur antérieur » : chapter opener artwork

Eleven images, one per act, shown on the chapter card the pager draws before each
act's first mission (`LessonAct.opener.imageRef`).

- **Where the files go:** `ealch-v2/assets/lessons/futur-anterieur/`
- **Filenames, exactly:** `act01.jpg` … `act11.jpg` (the lesson already points at
  `lessons/futur-anterieur/actNN.jpg`, so a different name renders nothing).
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
  needs a caption to be understood. Planners, envelopes, clocks and phones appear:
  every one of them is BLANK.
- **The single visual metaphor is LE JALON**, a marker further down the road from
  which the futur antérieur looks back: a terracotta post or flags on a path (acts 4
  and 11) and, in the human scenes, a moment where something is already done (the
  presentation ready at nine in act 1, the room prepared in act 3, the planner in
  act 7). Conceptual images (acts 2, 4, 6, 10) alternate with quiet human scenes so
  eleven pictures do not read as eleven diagrams.

## The house STYLE block

Verbatim from `ealch-admin/scripts/gen-rythme-images.mjs`, and repeated in full
at the end of every prompt below so each one stands alone:

> Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

---

## Act 01 · Vendredi, ce sera fait · `act01.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act01.jpg`

A quiet human scene about work that is finished before a visitor arrives. A bright design studio in the early morning: on a large table, a neat stack of finished presentation boards and a closed laptop sit ready, a coffee cup beside them. Through the glass door at the far end, a small figure in a winter coat is just stepping into the building from a snowy street. A wall clock shows nine o'clock with plain hands and no numerals. The subject is everything already in place at the moment someone arrives. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 02 · La forme · `act02.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act02.jpg`

A conceptual illustration about two pieces joining. On a cream field, two rounded blocks sit side by side on a low shelf: a larger slate-blue block on the left and a smaller terracotta block on the right, their edges fitting together like a simple joint. Above them, a small ochre arrow curves forward past the blocks and then bends back towards them, as if pointing from a later place. The subject is two parts making one form, looked at from further along. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 03 · Les accords · `act03.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act03.jpg`

A quiet human scene of preparation for guests. A small bedroom in a Lyon flat: freshly made twin beds with folded sage-green sheets, a vase of flowers on the windowsill, and on each pillow a blank sealed envelope. On a side table, a few printed photographs lie face up showing only soft abstract shapes. The door is half open onto a sunny corridor. The subject is a room made ready, each small thing already done. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 04 · Deux futurs, une ligne · `act04.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act04.jpg`

A conceptual illustration about one moment on a road. A long horizontal path of dusty slate blue runs across a cream field. At its centre stands a single terracotta marker post planted in the ground. To the left of the post, just behind it, a small ochre dot sits settled and complete; directly at the post, a second dot is in motion, with soft trailing lines. The rest of the path continues empty to the right edge. The subject is one marker, with something already done behind it and something happening at it. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 05 · Quand, dès que, une fois que · `act05.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act05.jpg`

A quiet human scene about doing things in order. A moving day seen from the pavement of a Brussels street: a small removal van with its back doors open, two figures carrying a sofa together towards it, and neat stacks of taped cardboard boxes waiting on the kerb. One box has already been loaded inside the van. The subject is one step finished and the next one beginning. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 06 · Le piège de l'anglais · `act06.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act06.jpg`

A conceptual illustration about two paths that look alike. On a cream field, two slate-blue footbridges start side by side from the same small bank. One bridge crosses cleanly to a far bank shaded sage green; the other, identical at first, stops halfway with a gentle gap, its end hanging over pale water. A single small figure stands at the start, looking at both. The subject is a familiar-looking path that does not lead where it seems to. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 07 · D'ici vendredi · `act07.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act07.jpg`

A quiet human scene about deadlines kept. An office wall with a large paper wall planner divided into plain empty squares, several of them covered by small ochre and terracotta sticky notes with no writing. Below it, a desk with a closed folder tied with a ribbon and a tidy tray. Afternoon light falls across the planner. The subject is a schedule where the tasks are already behind their dates. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 08 · Il aura oublié · `act08.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act08.jpg`

A quiet human scene about waiting and guessing. A café terrace in Liège at midday, seen from a few metres away: a young woman sits alone at a small round table with two cups, one untouched, holding a phone whose screen shows only a soft glow. Across the square, blurred passers-by and a tram in the distance. Above her head, three small pale thought bubbles hold simple icons: a calendar page, a tram, an empty battery, all without any letters or numbers. The subject is a person imagining the reasons for an absence. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 09 · En dix ans, j'aurai vu · `act09.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act09.jpg`

A quiet human scene about looking back over a long time. A small public library at dusk, seen from inside: tall shelves full of books with plain spines, a wooden reading table, and an older woman standing by the window with her coat over her arm, looking back at the room. On the table, a simple bouquet of flowers and a wrapped gift with no card. The subject is a long career seen from its last evening. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 10 · Aurai ou aurais · `act10.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act10.jpg`

A conceptual illustration about one small difference that changes everything. On a cream field, two identical envelopes lie side by side. The left envelope is sealed and tied with a slate-blue ribbon, a small sage-green check-mark shape resting on it like a promise. The right envelope is open and empty, a faint terracotta shadow of what might have been inside drifting away from it. A tiny ochre dot sits between them. The subject is two things that look the same but mean a promise and a regret. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.

## Act 11 · Ton plan, tes jalons · `act11.jpg`

**Save the image as:** `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/futur-anterieur/act11.jpg`

A quiet human scene about planning a future. A young woman, seen from behind and slightly to the side, sits at a desk by a window in a small Montréal studio at night, writing a letter by lamplight. On the wall above the desk, a simple drawn winding path is pinned up, with small terracotta flags planted along it at intervals, no writing anywhere. Snow falls softly outside. The subject is someone setting markers along the road ahead. Flat editorial vector illustration, in the style of a modern French language textbook. Muted warm palette: cream and bone backgrounds, dusty slate blue, terracotta, warm ochre, sage green. Soft rounded geometric figures with simple calm faces, no black outlines, gentle flat shading. Subtle paper grain texture over the whole image. Warm even light. No text unless explicitly described. Uncluttered composition with generous empty space. Absolutely no lettering, captions, watermarks or logos beyond what is described.
