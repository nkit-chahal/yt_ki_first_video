import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Evaluation Intro
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h1
            className="text-9xl font-black text-zinc-800"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            📊 Evaluation
        </motion.h1>
        <motion.div
            className="bg-gradient-to-r from-yellow-100 to-amber-100 border-4 border-yellow-500 px-10 py-6 rounded-2xl text-5xl font-hand text-yellow-800 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4.0 }} // Sync: "underappreciated"
        >
            The Most Underappreciated Skill
        </motion.div>
        <AICharacter mood="thinking" label="Let's talk about this..." />
    </div>
);

// Scene 2: Effort Pie
export const Scene2 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <div className="relative w-72 h-72">
            {/* Pie chart simulation */}
            <motion.div
                className="absolute inset-0 rounded-full bg-blue-200 border-4 border-blue-400 shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
            />
            <motion.div
                className="absolute inset-0 rounded-full bg-red-500 origin-center"
                style={{ clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }} // Sync: "majority of your development effort"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-black text-white">60%</span>
            </div>
        </div>
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-500 rounded shadow-lg" />
                <span className="text-5xl font-hand font-bold">Evaluation Work</span>
            </div>
            <div className="flex items-center gap-4 opacity-50">
                <div className="w-10 h-10 bg-blue-200 rounded" />
                <span className="text-5xl font-hand">Everything Else</span>
            </div>
            <AICharacter mood="surprised" label="That much?!" />
        </div>
    </div>
);

// Scene 3: Visibility Benefits
export const Scene3 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Why Evaluate?</h2>
        <div className="flex gap-10">
            {[
                { icon: "🛡️", label: "Mitigate Risks", color: "from-red-100 to-red-200 border-red-400" },
                { icon: "💡", label: "Uncover Opportunities", color: "from-yellow-100 to-yellow-200 border-yellow-400" },
                { icon: "👁️", label: "Gain Visibility", color: "from-blue-100 to-blue-200 border-blue-400" }
            ].map((item, i) => (
                <motion.div
                    key={item.label}
                    className={`w-52 h-52 bg-gradient-to-br ${item.color} border-4 rounded-2xl flex flex-col items-center justify-center shadow-xl`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 + i * 2.0 }} // Sync: 1s (Risk), 3s (Opp), 5s (Visibility)
                >
                    <div className="text-9xl">{item.icon}</div>
                    <div className="text-3xl font-hand font-bold mt-4 text-center px-4">{item.label}</div>
                </motion.div>
            ))}
        </div>
    </div>
);

// Scene 4: Open-Ended Challenge
export const Scene4 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }} // Sync: "Traditional ML"
        >
            <div className="w-56 h-40 bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                    <div className="text-7xl">✅</div>
                    <div className="text-3xl font-bold mt-3">Traditional ML</div>
                </div>
            </div>
            <div className="text-3xl font-hand text-zinc-500">Clear Right/Wrong</div>
        </motion.div>

        <motion.div
            className="text-8xl text-zinc-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
        >
            vs
        </motion.div>

        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 4.0 }} // Sync: "Foundation Models" / "Open-ended"
        >
            <div className="w-64 h-48 bg-gradient-to-br from-red-100 to-red-200 border-4 border-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                    <div className="text-7xl">🤯</div>
                    <div className="text-3xl font-bold mt-3">Foundation Models</div>
                </div>
            </div>
            <div className="text-3xl font-hand text-red-600 font-bold">Open-Ended Responses!</div>
        </motion.div>
    </div>
);

// Scene 5: Black Box
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <motion.div
            className="w-72 h-72 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl flex items-center justify-center shadow-2xl relative"
            animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 60px rgba(0,0,0,0.5)", "0 0 0 rgba(0,0,0,0)"] }}
            transition={{ repeat: Infinity, duration: 3 }}
        >
            <div className="text-9xl">❓</div>
            <motion.div
                className="absolute -bottom-8 bg-zinc-800 text-white px-8 py-3 rounded-full font-bold text-4xl shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }} // Sync: "Black Box"
            >
                Black Box
            </motion.div>
        </motion.div>
        <AICharacter mood="thinking" label="Can't see inside..." />
    </div>
);

// Scene 6: Benchmark Saturation
export const Scene6 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-red-600">⚠️ Benchmark Saturation</h2>
        <div className="flex items-end gap-6">
            {[85, 92, 97, 99, 100].map((score, i) => (
                <motion.div
                    key={i}
                    className="flex flex-col items-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 + i * 0.2 }} // Sync: "quickly become saturated"
                >
                    <div
                        className="w-24 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg flex items-end justify-center pb-3 shadow-lg"
                        style={{ height: `${score * 2}px` }}
                    >
                        <span className="text-white font-bold text-2xl">{score}%</span>
                    </div>
                    <div className="text-2xl font-bold mt-3">GPT-{i + 1}</div>
                </motion.div>
            ))}
        </div>
        <div className="text-4xl font-hand text-zinc-500">Models quickly max out public benchmarks</div>
    </div>
);

// Scene 7: Training Metrics
export const Scene7 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Training Metrics</h2>
        <div className="flex gap-16">
            <motion.div
                className="w-64 h-48 bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-blue-500 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 4.0 }} // Sync: "cross-entropy"
            >
                <div className="text-7xl font-mono font-bold text-blue-700">H(p,q)</div>
                <div className="text-3xl font-hand mt-4">Cross-Entropy</div>
            </motion.div>
            <motion.div
                className="w-64 h-48 bg-gradient-to-br from-purple-100 to-purple-200 border-4 border-purple-500 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 5.0 }} // Sync: "perplexity"
            >
                <div className="text-7xl font-mono font-bold text-purple-700">PPL</div>
                <div className="text-3xl font-hand mt-4">Perplexity</div>
            </motion.div>
        </div>
    </div>
);

// Scene 8: Next Token Prediction
export const Scene8 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <div className="flex items-center gap-5">
            {["The", "cat", "sat", "on", "the"].map((word, i) => (
                <motion.div
                    key={i}
                    className="w-28 h-20 bg-zinc-100 border-2 border-zinc-300 rounded-xl flex items-center justify-center font-bold text-3xl shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {word}
                </motion.div>
            ))}
            <motion.div
                className="w-32 h-24 bg-gradient-to-br from-green-200 to-green-300 border-4 border-green-500 rounded-xl flex items-center justify-center font-bold text-5xl shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.5, type: "spring" }} // Sync: "predicts the next token"
            >
                ???
            </motion.div>
        </div>
        <div className="text-5xl font-hand text-zinc-600">Predicting the next token</div>
        <AICharacter mood="thinking" label="What comes next?" />
    </div>
);

// Scene 9: Distribution Learning
export const Scene9 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <AICharacter mood="happy" action="pointing" label="Key insight!" />
        <div className="flex flex-col items-center gap-8">
            <motion.div
                className="w-96 h-56 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border-4 border-indigo-400 rounded-3xl flex items-center justify-center shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }} // Sync: "learns this distribution"
            >
                <div className="text-center">
                    <div className="text-7xl">📊</div>
                    <div className="text-5xl font-bold mt-4">Training Data Distribution</div>
                </div>
            </motion.div>
            <motion.div
                className="text-5xl font-hand text-green-600 font-bold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 5.0 }} // Sync: "lower cross-entropy"
            >
                Better fit = Lower cross-entropy ✅
            </motion.div>
        </div>
    </div>
);

// Scene 10: Perplexity Formula
export const Scene10 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <motion.div
            className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-white px-16 py-10 rounded-3xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5 }} // Sync: "exponential of..."
        >
            <div className="text-8xl font-mono font-bold text-center">
                PPL = e<sup className="text-6xl">H(p,q)</sup>
            </div>
        </motion.div>
        <motion.div
            className="text-5xl font-hand text-zinc-600 text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }} // Sync: "measures uncertainty"
        >
            Measures uncertainty when predicting next token
        </motion.div>
    </div>
);

// Scene 11: Post-Training Limit
export const Scene11 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <div className="flex items-center gap-12">
            <div className="flex flex-col items-center">
                <div className="text-9xl">📉</div>
                <div className="text-3xl font-hand mt-3">Perplexity</div>
            </div>
            <div className="text-7xl text-red-500">❌</div>
            <div className="flex flex-col items-center">
                <motion.div
                    className="w-56 h-40 bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-yellow-500 rounded-2xl flex items-center justify-center text-center shadow-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 3.5 }} // Sync: "significant post-training"
                >
                    <div className="px-4">
                        <div className="font-bold text-3xl">SFT / RLHF</div>
                        <div className="text-lg text-zinc-500 mt-2">Post-Training</div>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className="text-5xl font-hand text-red-600">Less reliable after fine-tuning!</div>
        <AICharacter mood="thinking" label="Keep this in mind..." />
    </div>
);

// Scene 12: Exact Evaluation
export const Scene12 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-green-600">✅ Exact Evaluation</h2>
        <div className="bg-[#FDFBF7] border-4 border-zinc-300 p-10 rounded-3xl shadow-2xl">
            <div className="text-5xl font-bold mb-6">What is 2 + 2?</div>
            <div className="flex gap-5">
                {["A) 3", "B) 4", "C) 5", "D) 6"].map((opt, i) => (
                    <motion.div
                        key={opt}
                        className={`px-8 py-4 rounded-xl font-bold text-3xl ${i === 1 ? 'bg-green-200 border-4 border-green-500 shadow-lg' : 'bg-zinc-100 border-2 border-zinc-300'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.5 + i * 0.15 }} // Sync: "multiple-choice questions"
                    >
                        {opt}
                    </motion.div>
                ))}
            </div>
        </div>
        <div className="text-4xl font-hand text-zinc-500">No ambiguity - clear correct answer</div>
    </div>
);

// Scene 13: Code Execution
export const Scene13 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <div className="bg-zinc-900 text-green-400 p-10 rounded-3xl font-mono text-4xl shadow-2xl w-full max-w-3xl">
            <div className="text-zinc-500 mb-3"># Generated Code</div>
            <div>def add(a, b):</div>
            <div className="ml-8">return a + b</div>
            <div className="mt-6 text-yellow-400">{'>>>'} add(2, 3)</div>
            <motion.div
                className="text-white mt-3 text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.0 }} // Sync: "produce expected output"
            >
                5 ✅
            </motion.div>
        </div>
        <div className="text-4xl font-hand text-zinc-600">Does it run? Does it work?</div>
    </div>
);

// Scene 14: AI Judge
export const Scene14 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-indigo-700">🤖 AI as Judge</h2>
        <div className="flex items-center gap-10">
            <motion.div
                className="w-44 h-52 bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-blue-400 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }} // Sync: "Another AI model" (as input/judge target)
            >
                <div className="text-8xl">🤖</div>
                <div className="font-bold mt-3 text-3xl">Model A</div>
            </motion.div>
            <div className="text-7xl">➜</div>
            <motion.div
                className="w-52 h-64 bg-gradient-to-br from-yellow-100 to-amber-100 border-4 border-yellow-500 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ delay: 3.5, repeat: Infinity, duration: 2 }} // Sync: "AI Judge"
            >
                <div className="text-9xl">⚖️</div>
                <div className="font-bold text-4xl mt-3">AI Judge</div>
                <div className="text-2xl text-zinc-500 mt-2">Fast & Cheap</div>
            </motion.div>
            <div className="text-7xl">➜</div>
            <motion.div
                className="w-44 h-52 bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-400 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 5.5 }} // Sync: Result
            >
                <div className="text-8xl">📊</div>
                <div className="font-bold mt-3 text-3xl">Score</div>
            </motion.div>
        </div>
        <AICharacter mood="happy" label="Automated evaluation!" />
    </div>
);

const Chapter6Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11, Scene12, Scene13, Scene14];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter6Visualizer;
