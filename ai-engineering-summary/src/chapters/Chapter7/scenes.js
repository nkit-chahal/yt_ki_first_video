// Chapter 7: Model Selection - 9 Scenes

export const CHAPTER_7_SCENES = [
    {
        id: "c7_s1",
        narration: "Now that we understand evaluation, let's tackle one of the most crucial decisions in AI engineering: Model Selection.",
        visualType: "model_selection_intro",
        duration: 7
    },
    {
        id: "c7_s2",
        narration: "With the increasing number of readily available foundation models, the challenge isn't developing models but selecting the right one for your application.",
        visualType: "model_abundance",
        duration: 8
    },
    {
        id: "c7_s3",
        narration: "The selection process typically involves two key steps: Finding the best achievable performance on the task, and mapping models along a cost-performance axis.",
        visualType: "cost_performance_axis",
        duration: 9
    },
    {
        id: "c7_s4",
        narration: "Your criteria for evaluating a model can be organized into four buckets: Domain-specific capabilities, General capabilities, Instruction-following capabilities, and Cost/latency.",
        visualType: "four_buckets",
        duration: 9
    },
    {
        id: "c7_s5",
        narration: "When evaluating models, you also need to differentiate between hard attributes (impossible to change) and soft attributes (can be improved through adaptation).",
        visualType: "hard_vs_soft",
        duration: 8
    },
    {
        id: "c7_s6",
        narration: "A high-level workflow for model selection looks like this: Filter out models whose hard attributes don't work for you. Use publicly available information to narrow down options. Run your own experiments. Then continually monitor in production.",
        visualType: "selection_workflow",
        duration: 12
    },
    {
        id: "c7_s7",
        narration: "Most companies won't build foundation models from scratch, so another question is whether to use commercial model APIs or host an open-source model yourself.",
        visualType: "api_vs_self_host",
        duration: 8
    },
    {
        id: "c7_s8",
        narration: "For a model to be accessible to users, a machine needs to host and run it. The service that hosts the model and handles queries is often called the inference service.",
        visualType: "inference_service",
        duration: 8
    },
    {
        id: "c7_s9",
        narration: "Whether to host a model yourself or use a model API depends on several factors: Data Privacy, Data Lineage, Performance, and Control.",
        visualType: "hosting_factors",
        duration: 8
    }
];
