// Chapter 5: Transformers Architecture - 14 Scenes

export const CHAPTER_5_SCENES = [
    {
        id: "c5_s1",
        narration: "In terms of model architecture, most foundation models use transformer architectures based on the attention mechanism.",
        visualType: "transformers_intro",
        duration: 6
    },
    {
        id: "c5_s2",
        narration: "But to understand why transformers were such a breakthrough, we need to look at what came before.",
        visualType: "history_flashback",
        duration: 5
    },
    {
        id: "c5_s3",
        narration: "Transformers were invented to solve the problems of sequence-to-sequence models, which used recurrent neural networks (RNNs) for tasks like translation.",
        visualType: "seq2seq_rnn",
        duration: 8
    },
    {
        id: "c5_s4",
        narration: "These had two main components: an encoder that processes inputs and a decoder that generates outputs. Both worked sequentially, token by token.",
        visualType: "encoder_decoder",
        duration: 8
    },
    {
        id: "c5_s5",
        narration: "The problem is that the decoder only has access to a compressed representation of the entire input. Imagine trying to answer detailed questions about a book when all you have is a brief summary.",
        visualType: "compression_problem",
        duration: 10
    },
    {
        id: "c5_s6",
        narration: "Also, input processing and output generation are done sequentially, so it's slow for long sequences.",
        visualType: "sequential_slow",
        duration: 6
    },
    {
        id: "c5_s7",
        narration: "Transformers solved this with the attention mechanism, which allows the model to weigh the importance of different input tokens when generating each output token.",
        visualType: "attention_intro",
        duration: 9
    },
    {
        id: "c5_s8",
        narration: "It's like being able to reference any page in the book while answering questions. Plus, transformers can process input tokens in parallel, making them much faster.",
        visualType: "book_reference_parallel",
        duration: 8
    },
    {
        id: "c5_s9",
        narration: "During inference, transformers work in two steps: Prefill (processing all input tokens parallel) and Decode (generating one output token at a time).",
        visualType: "prefill_decode",
        duration: 8
    },
    {
        id: "c5_s10",
        narration: "The attention mechanism uses three types of vectors: Query vectors (Q), Key vectors (K), and Value vectors (V).",
        visualType: "qkv_vectors",
        duration: 7
    },
    {
        id: "c5_s11",
        narration: "The model computes how much attention to give each input token by comparing the Q and K vectors. A high similarity score means that the token's content (V) will heavily influence the output.",
        visualType: "qk_similarity",
        duration: 10
    },
    {
        id: "c5_s12",
        narration: "This is why longer context windows are computationally expensive: more tokens mean more K and V vectors to compute and store.",
        visualType: "context_window_cost",
        duration: 7
    },
    {
        id: "c5_s13",
        narration: "Attention is almost always multi-headed, allowing the model to focus on different groups of tokens simultaneously. In Llama-2-70B, there are 32 attention heads, for example.",
        visualType: "multi_head_attention",
        duration: 9
    },
    {
        id: "c5_s14",
        narration: "A complete transformer consists of multiple transformer blocks, each containing an attention module and a neural network module.",
        visualType: "transformer_block_stack",
        duration: 7
    }
];
