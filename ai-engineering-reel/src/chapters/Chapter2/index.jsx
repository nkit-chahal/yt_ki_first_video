import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Introduction Question
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full relative">
        {/* Phase 1: The Question (0-2.5s) */}
        <motion.div
            className="absolute flex flex-col items-center gap-6"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 2.5, duration: 0.5 }}
        >
            <AICharacter mood="thinking" label="???" highlight={true} />
            <motion.div
                className="text-8xl font-black text-zinc-800"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                What is it?
            </motion.div>
        </motion.div>

        {/* Phase 2: The Comparison (2.5s+) */}
        <motion.div
            className="flex flex-col items-center gap-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
        >
            <div className="flex items-end gap-20">
                {/* Traditional ML */}
                <motion.div
                    className="flex flex-col items-center gap-4 opacity-50"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.5 }}
                    transition={{ delay: 2.8, type: "spring" }}
                >
                    <div className="font-hand bg-zinc-200 px-4 py-2 rounded-lg text-3xl">Traditional ML</div>
                    <div className="w-24 h-24 bg-zinc-200 rounded-full flex items-center justify-center text-7xl">🤖</div>
                </motion.div>

                <motion.div
                    className="text-9xl font-black text-zinc-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 4.0, type: "spring" }}
                >
                    VS
                </motion.div>

                {/* AI Engineering */}
                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 4.2, type: "spring" }}
                >
                    <div className="font-hand bg-gradient-to-r from-yellow-200 to-amber-200 border-2 border-yellow-400 px-4 py-2 rounded-lg font-bold text-3xl">AI Engineering</div>
                    <AICharacter mood="happy" label="New!" highlight={true} />
                </motion.div>
            </div>

            <motion.div
                className="text-6xl font-hand font-bold text-zinc-800"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 4.5 }}
            >
                What's the difference?
            </motion.div>
        </motion.div>
    </div>
);

// Scene 2: Explosion Hook
export const Scene2 = () => (
    <div className="flex flex-col items-center justify-center gap-8 h-full">
        <AICharacter mood="surprised" label="Whoa!" />

        <div className="relative flex items-center justify-center">
            {/* Explosion Effect */}
            <motion.div
                className="absolute"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1.2], rotate: [0, 10, -10, 0] }}
                transition={{
                    duration: 0.6,
                    times: [0, 0.6, 1],
                    type: "tween",
                    ease: "anticipate"
                }}
            >
                <div className="text-9xl">💥</div>
            </motion.div>

            <motion.h1
                className="text-8xl font-black text-zinc-800 relative z-10 bg-[#FDFBF7]/70 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
            >
                The Explosion
            </motion.h1>
        </div>

        <motion.div
            className="text-4xl font-hand text-zinc-500 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
        >
            (Two Simple Reasons)
        </motion.div>
    </div>
);

// Scene 3: Better Models vs Lower Barrier (Timed Split)
export const Scene3 = () => (
    <div className="flex items-center justify-center gap-24 h-full">
        {/* Reason 1: Better Models (0.5s) */}
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            <motion.div
                className="w-48 h-48 bg-gradient-to-br from-green-100 to-emerald-200 border-4 border-green-500 rounded-full flex items-center justify-center text-9xl shadow-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                🧠
            </motion.div>
            <div className="text-5xl font-bold font-hand text-center text-zinc-800">
                Models got<br /><span className="text-green-600 font-black text-6xl">BETTER</span>
            </div>
        </motion.div>

        {/* Reason 2: Lower Barrier (3.5s) */}
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.5, type: "spring" }}
        >
            <div className="w-48 h-48 flex items-center justify-center relative">
                {/* Wall collapsing animation */}
                <motion.div
                    className="absolute bottom-0 w-40 h-40 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-lg flex items-center justify-center text-white font-bold shadow-xl overflow-hidden"
                    initial={{ height: 160 }}
                    animate={{ height: 10 }}
                    transition={{ duration: 1.0, delay: 3.8, type: "spring", bounce: 0.2 }} // Sync: "gotten much LOWER"
                >
                    <span className="text-sm absolute top-2 opacity-50">Barrier</span>
                </motion.div>
                <motion.div
                    className="absolute -top-8 text-7xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4.2, type: "spring" }}
                >
                    📉
                </motion.div>
            </div>
            <div className="text-5xl font-bold font-hand text-center text-zinc-800 mt-4">
                Barrier got<br /><span className="text-red-500 font-black text-6xl">LOWER</span>
            </div>
        </motion.div>
    </div>
);

// Scene 4: Perfect Storm (With Rain)
export const Scene4 = () => (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
        {/* Rain Effect */}
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-4xl opacity-40 text-blue-400"
                initial={{ y: -100, x: Math.random() * 800 - 400 }}
                animate={{ y: 800 }}
                transition={{
                    repeat: Infinity,
                    duration: 1 + Math.random(),
                    delay: Math.random() * 2,
                    ease: "linear"
                }}
            >
                💧
            </motion.div>
        ))}

        {/* Storm Clouds */}
        <motion.div
            className="absolute top-10 left-20 text-9xl opacity-80"
            animate={{ x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
        >
            ☁️
        </motion.div>
        <motion.div
            className="absolute top-20 right-20 text-9xl opacity-80"
            animate={{ x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
        >
            ⛈️
        </motion.div>

        {/* Lightning */}
        <motion.div
            className="absolute text-9xl text-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
        >
            ⚡
        </motion.div>

        <motion.div
            className="z-10 flex flex-col items-center gap-10 bg-[#FDFBF7]/90 p-14 rounded-3xl shadow-2xl backdrop-blur-md border border-zinc-200"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            <h1 className="text-8xl font-black text-indigo-900 uppercase tracking-tighter">
                The Perfect Storm
            </h1>
            <div className="flex items-center gap-8">
                <AICharacter mood="happy" action="wave" />
                <motion.div
                    className="text-4xl font-hand bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-4 rounded-xl text-indigo-800 border-2 border-indigo-200"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.5, type: "spring" }}
                >
                    Fastest Growing Discipline! 🚀
                </motion.div>
            </div>
        </motion.div>
    </div>
);

// Scene 5: Building on Foundation Models (Correct Flow)
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-6 h-full">
        {/* Layer 1: Foundation Models (Base) (Appears first) */}
        <motion.div
            className="w-[500px] h-28 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center text-white shadow-2xl z-10"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            <div className="flex flex-col items-center">
                <span className="font-bold text-4xl">Foundation Models</span>
                <span className="text-lg text-zinc-400 font-mono">OpenAI, Google, Anthropic</span>
            </div>
        </motion.div>

        {/* Arrow Up */}
        <motion.div
            className="text-6xl text-zinc-400"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1 } }}
        >
            ⬆️
        </motion.div>

        {/* Layer 2: Applications (Top) (Stacks on top) */}
        <motion.div
            className="w-[400px] h-36 bg-gradient-to-br from-yellow-100 to-amber-100 border-4 border-yellow-500 rounded-2xl flex flex-col items-center justify-center shadow-xl relative z-20"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.0, type: "spring", damping: 12 }}
        >
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3.5 }}>
                    <AICharacter mood="happy" action="pointing" />
                </motion.div>
            </div>
            <div className="text-center mt-2">
                <div className="text-5xl font-black text-yellow-800">Your App</div>
                <div className="text-2xl font-hand text-yellow-700">Providing Value 💡</div>
            </div>
        </motion.div>
    </div>
);

// Scene 6: Comparison (Scratch vs Adaptation)
export const Scene6 = () => (
    <div className="flex gap-24 items-center justify-center h-full">
        {/* ML Engineer */}
        <div className="flex flex-col items-center gap-6 w-72">
            <div className="text-4xl font-bold text-zinc-500 font-hand">ML Engineer</div>
            <div className="w-24 h-24 bg-zinc-200 rounded-full flex items-center justify-center text-7xl">🧑‍🔬</div>
            <motion.div
                className="bg-zinc-100 border-2 border-zinc-300 p-6 rounded-xl w-full text-center shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.05, 1] }}
                transition={{ delay: 0.2, scale: { delay: 1.5, duration: 0.5 } }}
            >
                <div className="text-lg font-mono text-left mb-3 text-zinc-400">train_new_model.py</div>
                <div className="text-7xl">🏋️</div>
                <div className="font-bold text-zinc-700 mt-3 text-3xl">Training</div>
                <div className="text-lg text-zinc-500">(From Scratch)</div>
            </motion.div>
        </div>

        <motion.div className="h-72 w-1 bg-zinc-200" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 3.5 }} />

        {/* AI Engineer */}
        <div className="flex flex-col items-center gap-6 w-72">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.0 }}
            >
                <div className="text-4xl font-bold text-indigo-600 font-hand">AI Engineer</div>
            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 4.2 }}
            >
                <AICharacter mood="happy" label="" />
            </motion.div>
            <motion.div
                className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl w-full text-center shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.05, 1] }}
                transition={{ delay: 4.5, scale: { delay: 5.0, duration: 0.5 } }}
            >
                <div className="text-lg font-mono text-left mb-3 text-indigo-300">import model</div>
                <div className="text-7xl">🧩</div>
                <div className="font-bold text-indigo-700 mt-3 text-3xl">Adaptation</div>
                <div className="text-lg text-indigo-500">(Using Existing)</div>
            </motion.div>
        </div>
    </div>
);

const Chapter2Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
}

export default Chapter2Visualizer;
