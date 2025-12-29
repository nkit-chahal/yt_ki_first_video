
# Reel 2: Fine-Tuning vs RAG (Veritasium Style ⚛️)

**Goal:** High-impact, technical explanation of *why* Fine-Tuning fails for facts.
**Visual Style:** Dark, Data-Viz, "DeepSeek" Green/Black.

## Script Draft

**1. The Misconception (Hook)**
"The most common mistake in AI Engineering? Thinking you can teach an LLM new facts by fine-tuning it."
*(Visual: Neural Net "rejecting" a data block / Error graph spiking)*

**2. The Mechanism (Parametric Memory)**
"Models store information as compressed probabilities in their weights. This is 'Parametric Efficiency'. But it's lossy."
*(Visual: A 3D matrix of weights glowing/fading - showing compression)*

**3. The Failure Mode (Distribution Shift)**
"When you fine-tune, you aren't writing to a database. You strictly shift the probability distribution of the next token. You're changing the *style*, not the *source*."
*(Visual: A Bell Curve shifting left/right (Style) but the data points underneath remaining fuzzy)*

**4. The Solution (Non-Parametric)**
"To add reliable knowledge, you need Non-Parametric memory. Placing the raw data directly into the Context Window."
*(Visual: A clean, sharp block of data sliding into a "Context" slot, locking in perfectly)*

**5. The Law (Impact Verdict)**
"Fine-tune for *form*. RAG for *facts*. Do not mix them up."
*(Visual: Split screen. Left: "Form = Weights". Right: "Facts = Context". Clear technical distinction.)*
