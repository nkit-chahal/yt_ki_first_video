import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Inference Intro
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h1
            className="text-9xl font-black text-zinc-800 uppercase"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }} // Sync: "Inference"
        >
            ⚡ Inference
        </motion.h1>
        <motion.div
            className="bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-500 px-10 py-6 rounded-2xl text-5xl font-hand text-yellow-800 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.5 }} // Sync: "Inference Optimization"
        >
            Making it Fast & Cheap
        </motion.div>
        <AICharacter mood="happy" action="pointing" label="Let's optimize!" />
    </div>
);

// Scene 2: Cost & Speed
export const Scene2 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">The Ultimate Goal</h2>
        <div className="flex items-center justify-center gap-20">
            <motion.div
                className="w-56 h-56 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex flex-col items-center justify-center text-white shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5 }} // Sync: "cost"
            >
                <div className="text-8xl">💰</div>
                <div className="text-4xl font-bold mt-2">Low Cost</div>
            </motion.div>
            <div className="text-8xl text-zinc-300">+</div>
            <motion.div
                className="w-56 h-56 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex flex-col items-center justify-center text-white shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.5 }} // Sync: "speed"
            >
                <div className="text-8xl">🚀</div>
                <div className="text-4xl font-bold mt-2">High Speed</div>
            </motion.div>
        </div>
        <AICharacter mood="happy" label="That's the dream!" />
    </div>
);

// Scene 3: Bottleneck Types
export const Scene3 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">The Bottlenecks</h2>
        <div className="flex gap-16">
            {/* Compute Bound */}
            <motion.div
                className="w-80 h-64 bg-red-100 border-4 border-red-500 rounded-3xl flex flex-col items-center justify-center shadow-xl p-6"
                initial={{ x: -25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 }} // Sync: "Compute-bound"
            >
                <div className="text-8xl mb-4">🧮</div>
                <div className="text-4xl font-bold text-red-800">Compute Bound</div>
                <div className="text-2xl text-red-600 mt-2">Limiting Factor:</div>
                <div className="font-bold text-red-800 text-3xl">Math Speed</div>
            </motion.div>

            {/* Memory Bound */}
            <motion.div
                className="w-80 h-64 bg-orange-100 border-4 border-orange-500 rounded-3xl flex flex-col items-center justify-center shadow-xl p-6"
                initial={{ x: 25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 5.0 }} // Sync: "Memory bandwidth-bound"
            >
                <div className="text-8xl mb-4">💾</div>
                <div className="text-4xl font-bold text-orange-800">Memory Bound</div>
                <div className="text-2xl text-orange-600 mt-2">Limiting Factor:</div>
                <div className="font-bold text-orange-800 text-3xl">Data Movement</div>
            </motion.div>
        </div>
    </div>
);

// Scene 4: API Types
export const Scene4 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        {/* Online API */}
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }} // Sync: "Online APIs"
        >
            <div className="w-64 h-56 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                <div className="text-8xl">⚡</div>
                <div className="text-4xl font-bold mt-4">Online API</div>
            </div>
            <div className="text-3xl font-hand text-zinc-500 text-center">
                User Waiting...<br />
                <span className="font-bold text-indigo-600">Low Latency</span>
            </div>
        </motion.div>

        <div className="text-8xl text-zinc-300">vs</div>

        {/* Batch API */}
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4.0 }} // Sync: "Batch APIs"
        >
            <div className="w-64 h-56 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                <div className="text-8xl">📦</div>
                <div className="text-4xl font-bold mt-4">Batch API</div>
            </div>
            <div className="text-3xl font-hand text-zinc-500 text-center">
                No Rush...<br />
                <span className="font-bold text-green-600">Low Cost</span>
            </div>
        </motion.div>
    </div>
);

// Scene 5: Performance Metrics
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Metrics That Matter</h2>
        <div className="flex gap-8">
            <motion.div
                className="w-56 h-48 bg-[#FDFBF7] border-4 border-indigo-400 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.5 }} // Sync: "Time to First Token"
            >
                <div className="text-7xl">⏱️</div>
                <div className="font-bold mt-3 text-2xl">TTFT</div>
                <div className="text-sm text-zinc-500">First Token</div>
            </motion.div>
            <motion.div
                className="w-56 h-48 bg-[#FDFBF7] border-4 border-purple-400 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 4.0 }} // Sync: "Time Per Output Token"
            >
                <div className="text-7xl">🏃</div>
                <div className="font-bold mt-3 text-2xl">TPOT</div>
                <div className="text-sm text-zinc-500">Per Token</div>
            </motion.div>
            <motion.div
                className="w-56 h-48 bg-[#FDFBF7] border-4 border-green-400 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 5.5 }} // Sync: "Throughput"
            >
                <div className="text-7xl">🌊</div>
                <div className="font-bold mt-3 text-2xl">Throughput</div>
                <div className="text-sm text-zinc-500">Total Tokens/Sec</div>
            </motion.div>
        </div>
        <AICharacter mood="thinking" label="So many acronyms..." />
    </div>
);

// Scene 6: Compression Techniques
export const Scene6 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Shrink the Model!</h2>
        <div className="flex items-center gap-10">
            {/* Big Model */}
            <motion.div
                className="w-40 h-40 bg-zinc-300 rounded-xl flex items-center justify-center shadow-inner"
                initial={{ scale: 1 }}
                animate={{ scale: 0.8, opacity: 0.5 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="text-6xl text-zinc-500 font-bold">FP32</div>
            </motion.div>

            <motion.div
                className="text-6xl text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                ➜
            </motion.div>

            {/* Techniques */}
            <div className="flex flex-col gap-4">
                {[
                    { label: "Quantization", desc: "Lower Precision", color: "bg-blue-100 border-blue-500" },
                    { label: "Pruning", desc: "Remove Weights", color: "bg-red-100 border-red-500" },
                    { label: "Distillation", desc: "Teach Student", color: "bg-yellow-100 border-yellow-500" }
                ].map((tech, i) => (
                    <motion.div
                        key={tech.label}
                        className={`w-64 h-20 ${tech.color} border-l-8 rounded-r-xl flex items-center px-4 shadow-md justify-between`}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 3.0 + i * 1.0 }} // Sync: Quant(3.0), Pruning(4.0), Distill(5.0)
                    >
                        <div className="font-bold text-2xl">{tech.label}</div>
                        <div className="text-sm text-zinc-600 bg-[#FDFBF7]/50 px-2 py-1 rounded">{tech.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

// Scene 7: Sequential Bottleneck
export const Scene7 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Break the Sequence</h2>
        <div className="flex items-center gap-20">
            <div className="flex flex-col items-center">
                <div className="text-4xl font-bold mb-2 text-zinc-500">Standard</div>
                <div className="flex gap-2">
                    <motion.div className="w-12 h-12 bg-zinc-300 rounded" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} />
                    <motion.div className="w-12 h-12 bg-zinc-300 rounded" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.33 }} />
                    <motion.div className="w-12 h-12 bg-zinc-300 rounded" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.66 }} />
                </div>
            </div>

            <div className="text-6xl">vs</div>

            <div className="flex flex-col items-center">
                <div className="text-4xl font-bold mb-2 text-indigo-600">Speculative</div>
                <div className="flex gap-2">
                    <motion.div className="w-12 h-12 bg-indigo-500 rounded" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5, repeat: Infinity, delay: 4.0 }} />
                    <motion.div className="w-12 h-12 bg-indigo-500 rounded" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5, repeat: Infinity, delay: 4.0 }} />
                    <motion.div className="w-12 h-12 bg-indigo-500 rounded" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5, repeat: Infinity, delay: 4.0 }} />
                </div>
                <div className="text-lg text-indigo-500 mt-2 font-hand">Parallel Drafts!</div>
            </div>
        </div>
        <AICharacter mood="surprised" label="So fast!" />
    </div>
);

// Scene 8: Service Optimization
export const Scene8 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Service Tricks</h2>
        <div className="flex gap-12">
            <motion.div
                className="w-64 h-56 bg-gradient-to-br from-purple-100 to-purple-200 border-4 border-purple-500 rounded-3xl flex flex-col items-center justify-center shadow-xl p-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.0 }} // Sync: "Batching"
            >
                <div className="text-7xl mb-3">📦</div>
                <div className="text-3xl font-bold text-purple-800">Batching</div>
                <div className="text-lg text-purple-600 text-center mt-2">Process multiple requests at once</div>
            </motion.div>

            <motion.div
                className="w-64 h-56 bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-yellow-500 rounded-3xl flex flex-col items-center justify-center shadow-xl p-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 5.0 }} // Sync: "Caching"
            >
                <div className="text-7xl mb-3">💾</div>
                <div className="text-3xl font-bold text-yellow-800">Caching</div>
                <div className="text-lg text-yellow-600 text-center mt-2">Store frequent responses</div>
            </motion.div>
        </div>
    </div>
);

// Scene 9: Optimal Strategy
export const Scene9 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Winner Strategy?</h2>
        <div className="flex items-center gap-16">
            <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 5.5 }} // Sync: "Quantization"
            >
                <div className="w-28 h-28 bg-blue-500 rounded-full flex items-center justify-center text-white text-7xl shadow-xl">📉</div>
                <div className="font-hand font-bold text-3xl">Quantization</div>
                <div className="text-lg text-zinc-500 bg-zinc-100 px-3 py-1 rounded">Best Bang for Buck</div>
            </motion.div>

            <AICharacter mood="happy" action="pointing" />

            <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 3.0 }} // Sync: "Replica Parallelism" (Latency)
            >
                <div className="w-28 h-28 bg-red-500 rounded-full flex items-center justify-center text-white text-7xl shadow-xl">⚡</div>
                <div className="font-hand font-bold text-3xl">Parallelism</div>
                <div className="text-lg text-zinc-500 bg-zinc-100 px-3 py-1 rounded">Lowest Latency</div>
            </motion.div>
        </div>
    </div>
);

const Chapter11Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter11Visualizer;
