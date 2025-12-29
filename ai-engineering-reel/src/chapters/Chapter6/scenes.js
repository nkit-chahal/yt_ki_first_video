// Chapter 6: Evaluation - 14 Scenes

export const CHAPTER_6_SCENES = [
    {
        id: "c6_s1",
        narration: "Now that we understand foundation models a little more, let's talk about one of the most crucial yet underappreciated aspects of AI engineering: evaluation.",
        visualType: "eval_intro",
        duration: 8
    },
    {
        id: "c6_s2",
        narration: "For some applications, figuring out evaluation can consume the majority of your development effort.",
        visualType: "effort_pie",
        duration: 6
    },
    {
        id: "c6_s3",
        narration: "It's how you mitigate risks, uncover opportunities, and gain visibility into where your system is failing.",
        visualType: "visibility_benefits",
        duration: 7
    },
    {
        id: "c6_s4",
        narration: "Evaluating AI systems is significantly harder than traditional ML models because problems are complex and responses are open-ended.",
        visualType: "open_ended_challenge",
        duration: 8
    },
    {
        id: "c6_s5",
        narration: "Foundation models are black boxes. You can only evaluate them by observing their outputs, not by understanding their internal workings.",
        visualType: "black_box",
        duration: 8
    },
    {
        id: "c6_s6",
        narration: "Publicly available evaluation benchmarks quickly become saturated—meaning the model achieves perfect scores—as models improve.",
        visualType: "benchmark_saturation",
        duration: 7
    },
    {
        id: "c6_s7",
        narration: "So let's start with some fundamental metrics used to evaluate language models during training: cross-entropy and perplexity.",
        visualType: "training_metrics",
        duration: 7
    },
    {
        id: "c6_s8",
        narration: "These metrics essentially measure how well the model predicts the next token in a sequence.",
        visualType: "next_token_prediction",
        duration: 6
    },
    {
        id: "c6_s9",
        narration: "Language models learn the distribution of their training data. The better a model learns this distribution, the better it becomes at predicting what comes next, resulting in lower cross-entropy.",
        visualType: "distribution_learning",
        duration: 10
    },
    {
        id: "c6_s10",
        narration: "Perplexity is simply the exponential of cross-entropy. It measures the amount of uncertainty a model has when predicting the next token.",
        visualType: "perplexity_formula",
        duration: 8
    },
    {
        id: "c6_s11",
        narration: "While perplexity is useful for guiding training, it becomes less reliable for models that have undergone significant post-training with SFT or RLHF.",
        visualType: "post_training_limit",
        duration: 8
    },
    {
        id: "c6_s12",
        narration: "For some tasks, we can perform exact evaluation where there's no ambiguity about the correct answer, like multiple-choice questions.",
        visualType: "exact_eval",
        duration: 7
    },
    {
        id: "c6_s13",
        narration: "In coding tasks, functional correctness translates to execution accuracy: does the code run and produce the expected output?",
        visualType: "code_execution",
        duration: 7
    },
    {
        id: "c6_s14",
        narration: "One of the most powerful and common methods for evaluating AI models in production is using another AI model as a judge. These AI Judges are fast, easy to use, and relatively cheap compared to human evaluators.",
        visualType: "ai_judge",
        duration: 10
    }
];
