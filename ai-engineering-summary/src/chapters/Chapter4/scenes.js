// Detailed sub-scene structure for Chapter 4: Training Data Challenges

export const CHAPTER_4_SCENES = [
    {
        id: "c4_s1",
        narration: "Now that we've covered what AI Engineering is, let's dig deeper into foundation models themselves: how they're trained, how they work, and why understanding their architecture matters for AI engineers.",
        visualType: "dig_deeper_transition",
        duration: 8
    },
    {
        id: "c4_s2",
        narration: "Foundation models, at their core, can only know what they've been trained on. This might seem obvious, but it has profound implications.",
        visualType: "model_brain_limit",
        duration: 8
    },
    {
        id: "c4_s3",
        narration: "If a model hasn't seen examples of a specific language or concept during training, it simply won't have that knowledge.",
        visualType: "missing_data_knowledge",
        duration: 8
    },
    {
        id: "c4_s4",
        narration: "Most large foundation models are trained on web-crawled data, which brings some inherent problems.",
        visualType: "web_crawl_chaos",
        duration: 6
    },
    {
        id: "c4_s5",
        narration: "This data often contains clickbait, misinformation, toxic content, and fake news.",
        visualType: "toxic_content_trash",
        duration: 6
    },
    {
        id: "c4_s6",
        narration: "To combat this, teams use various filtering techniques. For instance, OpenAI only used Reddit links with at least three upvotes when training GPT-2.",
        visualType: "filtering_funnel",
        duration: 9
    },
    {
        id: "c4_s7",
        narration: "The language distribution in training data is also heavily skewed. About half of all crawled data is in English, which means languages with millions of speakers are often underrepresented.",
        visualType: "language_skew_chart",
        duration: 10
    },
    {
        id: "c4_s8",
        narration: "This is why specialized models for specific languages and domains are becoming increasingly important.",
        visualType: "specialized_models",
        duration: 7
    }
];
