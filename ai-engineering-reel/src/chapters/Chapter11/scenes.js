// Chapter 11: Inference Optimization - 9 Scenes

export const CHAPTER_11_SCENES = [
    {
        id: "c11_s1",
        narration: "Now let's dive into one of the most practical aspects of AI engineering: Inference Optimization.",
        visualType: "inference_intro",
        duration: 8
    },
    {
        id: "c11_s2",
        narration: "A model's real-world usefulness boils down to two factors: cost and speed.",
        visualType: "cost_performance_balance",
        duration: 6
    },
    {
        id: "c11_s3",
        narration: "To optimize inference, we need to understand bottlenecks. AI workloads generally face two types: Compute-bound (limiting factor is power) or Memory bandwidth-bound (limiting factor is data movement).",
        visualType: "bottleneck_types",
        duration: 10
    },
    {
        id: "c11_s4",
        narration: "Inference APIs typically come in two types: Online APIs (optimize for latency) and Batch APIs (optimize for cost).",
        visualType: "api_types",
        duration: 9
    },
    {
        id: "c11_s5",
        narration: "Key inference performance metrics include Latency (Time to First Token, Time Per Output Token) and Throughput.",
        visualType: "performance_metrics",
        duration: 8
    },
    {
        id: "c11_s6",
        narration: "Model Compression reduces size to improve speed through Quantization, Pruning, and Distillation.",
        visualType: "compression_techniques",
        duration: 10
    },
    {
        id: "c11_s7",
        narration: "To overcome the sequential bottleneck of autoregressive models, we can use Speculative Decoding, Inference with Reference, or Parallel Decoding.",
        visualType: "sequential_bottleneck",
        duration: 12
    },
    {
        id: "c11_s8",
        narration: "Finally, Service-Level Optimization like Batching (Static, Dynamic, Continuous) and Caching can significantly improve performance.",
        visualType: "service_optimization",
        duration: 10
    },
    {
        id: "c11_s9",
        narration: "The optimal strategy depends on your needs. For low latency, Replica Parallelism is often best. For most use cases, Quantization yields the biggest gains.",
        visualType: "optimal_strategy",
        duration: 10
    }
];
