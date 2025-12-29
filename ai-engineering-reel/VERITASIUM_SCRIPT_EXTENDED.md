
# Reel 2: Fine-Tuning vs RAG (Extended Technical Cut ⚛️)

**Voice ID:** `UgBBYS2sOqTuMpoF3BR0` (Mark - Deep, Storyteller)
**Tone:** Scientific, Educational, High-Impact.

## Script Segment 1: The Hook
"The most common mistake in AI Engineering? Thinking you can teach an LLM new facts by fine-tuning it."

## Segment 2: The Mechanism (Parametric Memory)
"Models store information as compressed probabilities in their weights. This is 'Parametric Efficiency'. But it is lossy."

## Segment 3: Deep Dive - The "JPEG" Problem (New)
"Think of it like a JPEG image. You save space, but you lose the fine details. You can't perfectly reconstruct the source data from the compression artifacts."

## Segment 4: Catastrophic Forgetting (New)
"Worse, if you try to force new facts into these weights, you risk 'Catastrophic Forgetting'. The model literally overwrites its previous knowledge to make room for the new data."

## Segment 5: The "Reversal Curse" (New)
"And weights are directional. If a model learns 'A is B', it doesn't automatically know 'B is A'. It fails basic logical reversal because the probability chain only goes one way."

## Segment 6: The Solution (Non-Parametric)
"To add reliable knowledge, you need Non-Parametric memory. RAG. Placing the raw, uncompressed data directly into the Context Window."

## Segment 7: When to Fine-Tune? (New)
"So is fine-tuning useless? No. Use it to teach *Patterns*, not *Facts*. Teach it to think in JSON, or speak like a doctor. Teach it the *Form*."

## Segment 8: The Verdict
"Fine-tune for the 'How'. Use RAG for the 'What'. That is the law."
