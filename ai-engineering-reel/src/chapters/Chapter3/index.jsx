import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Self-Supervision Intro
export const Scene1 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <AICharacter mood="thinking" label="Let me explain..." />
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.5, type: "spring" }} // Sync: "process called self-supervision"
        >
            <div className="text-8xl font-black text-zinc-800">Self-Supervision</div>
            <div className="text-5xl font-hand text-zinc-500">The Secret Sauce 🧪</div>
        </motion.div>
    </div>
);

// Scene 2: Labeling vs Prediction
export const Scene2 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        {/* Old Way (Humans) */}
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="w-48 h-48 bg-gradient-to-br from-red-100 to-orange-100 border-4 border-red-400 rounded-2xl flex flex-col items-center justify-center shadow-lg">
                <div className="text-8xl">👨‍💼</div>
                <div className="font-bold mt-2 text-red-700">Humans Label</div>
            </div>
            <div className="text-4xl font-hand text-red-600">❌ Slow & Expensive</div>
        </motion.div>

        <motion.div
            className="text-7xl text-zinc-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4.0, type: "spring" }}
        >
            vs
        </motion.div>

        {/* New Way (Model) */}
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.5, type: "spring" }} // Sync: "models can learn by predicting"
        >
            <div className="w-48 h-48 bg-gradient-to-br from-green-100 to-emerald-100 border-4 border-green-400 rounded-2xl flex flex-col items-center justify-center shadow-lg">
                <div className="text-8xl">🤖</div>
                <div className="font-bold mt-2 text-green-700">Model Predicts</div>
            </div>
            <div className="text-4xl font-hand text-green-600">✅ Fast & Scalable</div>
        </motion.div>
    </div>
);

// Scene 3: Bottleneck Solved
export const Scene3 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.div
            className="text-9xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring" }} // Scale uses spring
        >
            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, type: "tween" }} // Rotate uses tween explicitly
            >
                💥
            </motion.div>
        </motion.div>
        <div className="text-8xl font-black text-zinc-800 text-center">
            Data Labeling Bottleneck<br />
            <motion.span
                className="text-green-600 inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
            >
                SOLVED!
            </motion.span>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
            <AICharacter mood="happy" action="wave" label="Finally!" />
        </motion.div>
    </div>
);

// Scene 4: Scaling Up
export const Scene4 = () => (
    <div className="flex items-center justify-center gap-16 h-full">
        <AICharacter mood="surprised" label="Look at this!" />
        <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            {/* Evolution Text & Icon */}
            <div className="flex flex-col items-center gap-6 h-48 justify-center">
                <div className="relative flex items-center justify-center">
                    {/* Phase 1: LM (Simple) */}
                    <motion.div
                        className="absolute"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0.5 }}
                        transition={{ delay: 4.0, duration: 0.5 }} // Sync: Transition starts at "evolved..."
                    >
                        <div className="text-6xl text-zinc-400">🧠</div>
                        <div className="text-4xl font-hand text-zinc-500 mt-2">Language Model</div>
                    </motion.div>

                    {/* Phase 2: LLM (Advanced) */}
                    <motion.div
                        className="absolute"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.5 }}
                        transition={{ delay: 4.5, type: "spring", bounce: 0.5 }} // Sync: "Large Language Models"
                    >
                        <div className="text-8xl filter drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">🧠</div>
                        <motion.div
                            className="absolute -top-4 -right-4 text-4xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 5.0, type: "spring" }}
                        >
                            ✨
                        </motion.div>
                    </motion.div>
                </div>

                {/* Final Label (Appears after evolution) */}
                <motion.div
                    className="text-6xl font-black text-indigo-700 mt-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 5.5 }}
                >
                    Large Language Model (LLM)
                </motion.div>
            </div>

            {/* Compute/Data Bars (Background context) */}
            <div className="flex items-end gap-4 mt-8 opacity-50 scale-75">
                <motion.div
                    className="w-16 bg-indigo-400 rounded-t-lg"
                    initial={{ height: 0 }}
                    animate={{ height: 80 }}
                    transition={{ delay: 1.5 }}
                />
                <motion.div
                    className="w-16 bg-indigo-500 rounded-t-lg"
                    initial={{ height: 0 }}
                    animate={{ height: 160 }}
                    transition={{ delay: 2.5 }}
                />
                <motion.div
                    className="w-16 bg-indigo-600 rounded-t-lg"
                    initial={{ height: 0 }}
                    animate={{ height: 280 }}
                    transition={{ delay: 3.5 }}
                />
            </div>
            <div className="text-3xl font-bold text-indigo-900/50">More Data + Compute = 🚀</div>
        </motion.div>
    </div>
);

// Scene 5: Multimodal Expansion (Synced with narration)
// Narration: "...they've expanded to handle multiple types of data, including IMAGES and VIDEO..."
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.div
            className="text-7xl font-black text-zinc-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            Multimodal Models
        </motion.div>
        <div className="flex gap-8 items-center">
            {/* Text - appears first (context, muted) */}
            <motion.div
                className="w-36 h-36 bg-gradient-to-br from-blue-200 to-blue-100 border-4 border-blue-500 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
            >
                <div className="text-7xl">📝</div>
                <div className="font-bold mt-2 text-blue-700 text-lg">Text</div>
            </motion.div>

            {/* Images - POPS when "images" is said (~3.5s) */}
            <motion.div
                className="w-44 h-44 bg-gradient-to-br from-green-200 to-green-100 border-4 border-green-500 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 1.6, 1.3],
                    opacity: 1,
                    boxShadow: [
                        "0 0 0px rgba(34,197,94,0)",
                        "0 0 50px rgba(34,197,94,0.9)",
                        "0 0 25px rgba(34,197,94,0.5)"
                    ]
                }}
                transition={{ delay: 3.5, duration: 0.6, type: "tween", ease: "backOut" }}
            >
                <motion.div
                    className="text-8xl"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 4.0, type: "tween" }}
                >
                    🖼️
                </motion.div>
                <div className="font-bold mt-2 text-green-700 text-xl">Images</div>
            </motion.div>

            {/* Video - POPS when "video" is said (~4.5s) */}
            <motion.div
                className="w-44 h-44 bg-gradient-to-br from-red-200 to-red-100 border-4 border-red-500 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 1.6, 1.3],
                    opacity: 1,
                    boxShadow: [
                        "0 0 0px rgba(239,68,68,0)",
                        "0 0 50px rgba(239,68,68,0.9)",
                        "0 0 25px rgba(239,68,68,0.5)"
                    ]
                }}
                transition={{ delay: 4.5, duration: 0.6, type: "tween", ease: "backOut" }}
            >
                <motion.div
                    className="text-8xl"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 5.0, type: "tween" }}
                >
                    🎥
                </motion.div>
                <div className="font-bold mt-2 text-red-700 text-xl">Video</div>
            </motion.div>

            {/* Audio - appears at end (context, muted) */}
            <motion.div
                className="w-36 h-36 bg-gradient-to-br from-purple-200 to-purple-100 border-4 border-purple-500 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ delay: 5.5, type: "spring", bounce: 0.4 }}
            >
                <div className="text-7xl">🎵</div>
                <div className="font-bold mt-2 text-purple-700 text-lg">Audio</div>
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.0 }}
        >
            <AICharacter mood="happy" label="All in one!" />
        </motion.div>
    </div>
);

// Scene 6: Applications Grid
export const Scene6 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <div className="text-7xl font-black text-zinc-800">Real-World Applications</div>
        <div className="grid grid-cols-3 gap-6">
            {[
                // Narration order: Coding (0.5), Image (2.0), Writing (3.5), Support (5.0), Data (6.5)
                { icon: "💻", label: "GitHub Copilot", delay: 0.5 },
                { icon: "🎨", label: "DALL-E / Midjourney", delay: 2.0 },
                { icon: "✍️", label: "Writing Assistants", delay: 3.5 },
                { icon: "💬", label: "Customer Support", delay: 5.2 }, // "Customer support bots"
                { icon: "📊", label: "Data Analysis", delay: 6.8 },    // "sofisticated data analysis"
                { icon: "🔬", label: "Research Tools", delay: 8.0 }    // (extra?)
            ].map((app, i) => (
                <motion.div
                    key={app.label}
                    className="w-44 h-32 bg-[#FDFBF7] border-2 border-zinc-200 rounded-xl flex flex-col items-center justify-center shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: app.delay, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="text-7xl">{app.icon}</div>
                    <div className="font-hand font-bold mt-2 text-center text-lg">{app.label}</div>
                </motion.div>
            ))}
        </div>
    </div>
);

const Chapter3Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter3Visualizer;
