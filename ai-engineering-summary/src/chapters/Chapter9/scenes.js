// Chapter 9: RAG (Retrieval Augmented Generation) - 11 Scenes

export const CHAPTER_9_SCENES = [
    {
        id: "c9_s1",
        narration: "Now that we've covered prompt engineering, let's explore how to give foundation models access to information beyond what they were trained on.",
        visualType: "beyond_training",
        duration: 8
    },
    {
        id: "c9_s2",
        narration: "Two dominant patterns have emerged for providing models with the information they need: Retrieval Augmented Generation (RAG) and the Agentic Pattern.",
        visualType: "two_patterns",
        duration: 8
    },
    {
        id: "c9_s3",
        narration: "RAG allows models to retrieve relevant information from external data sources, while the Agentic Pattern enables models to use tools like web search and APIs to gather information actively.",
        visualType: "rag_vs_agentic",
        duration: 10
    },
    {
        id: "c9_s4",
        narration: "Retrieval Augmented Generation enhances a model's generation capabilities by retrieving relevant information from external memory sources.",
        visualType: "rag_definition",
        duration: 8
    },
    {
        id: "c9_s5",
        narration: "A RAG system consists of two main components: A Retriever (fetches information) and A Generator (produces a response).",
        visualType: "retriever_generator",
        duration: 7
    },
    {
        id: "c9_s6",
        narration: "The success of a RAG system heavily depends on its retriever. A retriever performs two main functions: indexing and querying.",
        visualType: "indexing_querying",
        duration: 8
    },
    {
        id: "c9_s7",
        narration: "How you index your data determines how you retrieve it later. Typically, you split documents into smaller chunks.",
        visualType: "chunking",
        duration: 7
    },
    {
        id: "c9_s8",
        narration: "Retrieval algorithms include Term-Based Retrieval (keywords) and Embedding-Based Retrieval (semantic similarity using vector databases).",
        visualType: "retrieval_algorithms",
        duration: 8
    },
    {
        id: "c9_s9",
        narration: "A production retrieval system typically combines several approaches.",
        visualType: "hybrid_retrieval",
        duration: 5
    },
    {
        id: "c9_s10",
        narration: "Tactics to improve retrieval include Chunking, Re-ranking, Query Rewriting, and Contextual Retrieval.",
        visualType: "improvement_tactics",
        duration: 7
    },
    {
        id: "c9_s11",
        narration: "It's also important to note that RAG isn't limited to text. It can also be used with multimodal and tabular data.",
        visualType: "multimodal_rag",
        duration: 6
    }
];
