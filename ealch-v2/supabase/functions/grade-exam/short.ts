// The short-answer check: does a typed comprehension answer MEAN the corrigé?
// Pure (no Deno APIs), so node can test it beside the function.
//
// The app marks typed answers by key words first (src/utils/shortAnswer.logic.ts)
// and sends only the ones the key words could not settle here, ALL of a
// section's in one request, so a section costs one grading turn and not one
// per question. The rule handed to the model is the official one, from the
// FEI DALF C1 corrigé: spelling and syntax do not count unless they wreck the
// meaning, and any rewording consistent with the question is accepted.

export type ShortItem = {
  /** The app's question key; echoed back so verdicts land on the right answer. */
  key: string;
  kind: "short" | "tfj";
  question: string;
  /** short: the corrigé. tfj: the right choice (« Vrai » / « Faux »). */
  expected: string;
  /** tfj only: the passages the author accepted as justification. */
  quotes?: string[];
  /** What the candidate typed (tfj: the copied quote). */
  answer: string;
};

export type ShortCheckRequest = { items: ShortItem[]; passage?: string; lang?: "fr" | "en" };

// Bounded by the providers' 500-token reply (index.ts): 24 verdicts fit with room.
export const SHORT_MAX_ITEMS = 24;
const MAX_FIELD = 2000;
const MAX_PASSAGE = 20000;

const str = (v: unknown, max: number): v is string => typeof v === "string" && v.trim() !== "" && v.length <= max;

/** Null when the request is acceptable, else the reason. */
export function shortRequestProblem(body: unknown): string | null {
  const b = body as Partial<ShortCheckRequest>;
  if (!Array.isArray(b?.items) || b.items.length === 0) return "items must be a non-empty array";
  if (b.items.length > SHORT_MAX_ITEMS) return `at most ${SHORT_MAX_ITEMS} items per request`;
  if (b.passage !== undefined && !(typeof b.passage === "string" && b.passage.length <= MAX_PASSAGE)) return "passage too long";
  const keys = new Set<string>();
  for (const it of b.items as Partial<ShortItem>[]) {
    if (!str(it?.key, 80) || keys.has(it.key)) return "every item needs a unique key";
    keys.add(it.key);
    if (it.kind !== "short" && it.kind !== "tfj") return `item ${it.key}: kind must be short or tfj`;
    if (!str(it.question, MAX_FIELD) || !str(it.expected, MAX_FIELD) || !str(it.answer, MAX_FIELD)) {
      return `item ${it.key}: question, expected and answer are required`;
    }
    if (it.quotes !== undefined && (!Array.isArray(it.quotes) || it.quotes.some((q) => !str(q, MAX_FIELD)))) {
      return `item ${it.key}: quotes must be strings`;
    }
  }
  return null;
}

export function shortPrompt(req: ShortCheckRequest): { system: string; user: string } {
  const system = [
    "You mark short answers in a French C1 comprehension exam, as the official marker does.",
    "Rules: spelling and grammar do not count unless they make the meaning unclear.",
    "Accept any rewording that is consistent with the question and means the same as the expected answer.",
    "Reject an answer that is vague, only partly right on its key point, contradicts the expected answer, or answers a different question.",
    "For a 'tfj' item the candidate already chose the right option; accept their copied quote only if it is a passage from the text that actually justifies that choice (compare with the accepted passages and the text).",
    'Reply with JSON only: {"verdicts": {"<key>": true or false, ...}} with every key present.',
  ].join("\n");
  const items = req.items.map((it) => ({
    key: it.key, kind: it.kind, question: it.question, expected: it.expected,
    ...(it.quotes?.length ? { accepted_passages: it.quotes } : {}), answer: it.answer,
  }));
  const user = [
    req.passage ? `TEXT:\n${req.passage}` : "",
    `ITEMS:\n${JSON.stringify(items, null, 1)}`,
  ].filter(Boolean).join("\n\n");
  return { system, user };
}

/** Parse the model's verdicts. Every requested key must come back as a
 *  boolean, or the whole reply is a failure: a partial set would leave some
 *  answers silently unmarked. */
export function parseVerdicts(raw: string, keys: string[]): Record<string, boolean> | null {
  let obj: unknown;
  try {
    obj = JSON.parse(raw);
  } catch {
    const m = raw.match(/\{[\s\S]*\}/);
    if (!m) return null;
    try { obj = JSON.parse(m[0]); } catch { return null; }
  }
  const v = (obj as { verdicts?: unknown })?.verdicts;
  if (typeof v !== "object" || v === null) return null;
  const out: Record<string, boolean> = {};
  for (const k of keys) {
    const x = (v as Record<string, unknown>)[k];
    if (typeof x !== "boolean") return null;
    out[k] = x;
  }
  return out;
}
