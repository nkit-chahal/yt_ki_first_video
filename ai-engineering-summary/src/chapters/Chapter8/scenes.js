// Chapter 8: Prompt Engineering - 11 Scenes

export const CHAPTER_8_SCENES = [
    {
        id: "c8_s1",
        narration: "Now let's dive into what might be the most accessible, yet surprisingly nuanced aspect of AI engineering: Prompt Engineering.",
        visualType: "prompt_intro",
        duration: 7
    },
    {
        id: "c8_s2",
        narration: "Prompt engineering refers to the process of crafting instructions that guide a model to generate your desired outcome.",
        visualType: "crafting_prompts",
        duration: 7
    },
    {
        id: "c8_s3",
        narration: "It's the easiest and most common model adaptation technique because, unlike fine-tuning, it doesn't change the model's weights—you're just telling the model what you want it to do.",
        visualType: "no_weight_change",
        duration: 9
    },
    {
        id: "c8_s4",
        narration: "While it's the most accessible entry point to AI Engineering, don't be fooled into thinking that it's simplistic. Effective prompt engineering requires the same experimental rigor as any machine learning task.",
        visualType: "experimental_rigor",
        duration: 10
    },
    {
        id: "c8_s5",
        narration: "Prompts typically consist of one or more of these components: Task Description, Examples, and The Concrete Task.",
        visualType: "prompt_components",
        duration: 7
    },
    {
        id: "c8_s6",
        narration: "How much prompt engineering you need depends on the model's robustness to prompt perturbation.",
        visualType: "model_robustness",
        duration: 6
    },
    {
        id: "c8_s7",
        narration: "It's also worth noting that different models have different preferred prompt structures.",
        visualType: "model_preferences",
        duration: 5
    },
    {
        id: "c8_s8",
        narration: "Teaching models what to do via prompts is known as In-Context Learning. Each example in your prompt is called a 'shot,' so we get terms like 'few-shot,' 'zero-shot,' and 'one-shot' learning.",
        visualType: "shot_learning",
        duration: 10
    },
    {
        id: "c8_s9",
        narration: "Many modern models distinguish between system prompts (task description/role) and user prompts (specific query).",
        visualType: "system_vs_user",
        duration: 7
    },
    {
        id: "c8_s10",
        narration: "Key strategies for effective prompt engineering include: Write clear and explicit instructions. Ask the model to adopt a persona. Provide examples. Specify the output format. Break complex tasks into simpler subtasks. And give the model time to 'think' using Chain-of-Thought promoting.",
        visualType: "strategies_grid",
        duration: 14
    },
    {
        id: "c8_s11",
        narration: "Iterate systematically. This is so important. Different techniques work better for different models, so experimentation is crucial.",
        visualType: "iterate_systematically",
        duration: 7
    }
];
