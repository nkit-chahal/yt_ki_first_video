import React from 'react';
import { motion } from 'framer-motion';

// Shared styles for DeepSeek/Veritasium Theme
const textGreen = "text-[#10a37f]";
const textWhite = "text-white";

// Scene 0: INTRO - What This Video Is About
export const Reel2Intro = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full text-center">
        <motion.div
            className="text-[10rem]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            🤖
        </motion.div>
        <motion.h1
            className="text-7xl font-black text-white leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            Fine-Tuning<br />
            <span className={textGreen}>vs</span><br />
            RAG
        </motion.h1>
        <motion.div
            className="text-3xl text-zinc-400 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            When to use which? 🤔
        </motion.div>
    </div>
);

// Scene 1: The Misconception (Neural Rejection)
export const Reel2Hook = () => (
    <div className="flex flex-col items-center justify-center gap-16 h-full font-sans">
        <h2 className="text-6xl font-bold text-white text-center leading-tight">
            Can Fine-Tuning teach <br /> <span className={textGreen}>New Facts?</span>
        </h2>
        <motion.div className="relative" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            <div className="text-[12rem] grayscale opacity-50">🧠</div>
            <motion.div
                className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#10a37f] rounded-xl flex items-center justify-center text-white text-2xl font-bold"
                initial={{ x: 200, y: -80, opacity: 0 }}
                animate={{ x: [200, 80, 200], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                DATA
            </motion.div>
            <motion.div
                className="absolute -top-16 right-0 text-8xl font-bold text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, delay: 0.8, repeat: Infinity }}
            >❌</motion.div>
        </motion.div>
    </div>
);

// Scene 2: The Mechanism (Matrix)
export const Reel2Mechanism = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-5xl font-bold text-zinc-400 text-center">Parametric Memory</h2>
        <div className="grid grid-cols-5 gap-3 p-10 bg-[#0a1f16] rounded-3xl border border-zinc-800 shadow-2xl">
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-16 h-16 bg-[#10a37f] rounded-md text-sm flex items-center justify-center font-mono text-black font-bold"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
                >
                    0.{Math.floor(Math.random() * 99)}
                </motion.div>
            ))}
        </div>
        <div className="text-2xl font-mono text-[#10a37f] text-center">Weights = Compressed Probabilities</div>
    </div>
);

// Scene 3: Deep Dive - JPEG Compression
export const Reel2Compression = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-5xl font-bold text-white text-center">Lossy Compression</h2>
        <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-4">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center text-black font-bold text-2xl text-center p-4">RAW DATA</div>
                <div className="text-zinc-500 font-mono text-xl">100% Detail</div>
            </div>
            <div className="text-5xl text-zinc-600">➜</div>
            <div className="flex flex-col items-center gap-4">
                <div className="w-48 h-48 bg-[#10a37f] opacity-80 rounded-2xl grid grid-cols-4 gap-2 p-3">
                    {[...Array(16)].map((_, i) => <div key={i} className="bg-black opacity-30 rounded-sm"></div>)}
                </div>
                <div className="text-[#10a37f] font-mono text-xl">Artifacts</div>
            </div>
        </div>
        <div className="text-2xl text-center text-zinc-400 max-w-lg">You can't reconstruct the original facts perfectly.</div>
    </div>
);

// Scene 4: Catastrophic Forgetting
export const Reel2Forgetting = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-5xl font-bold text-red-500 text-center">Catastrophic<br />Forgetting</h2>
        <div className="relative w-80 h-80 border-4 border-zinc-700 rounded-3xl bg-zinc-900 overflow-hidden flex items-center justify-center">
            <motion.div
                className="absolute text-5xl font-bold text-zinc-600"
                animate={{ y: [0, 300], opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >History</motion.div>
            <motion.div
                className="absolute text-5xl font-bold text-[#10a37f]"
                initial={{ y: -300 }}
                animate={{ y: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
            >New Fact</motion.div>
        </div>
        <div className="text-2xl text-zinc-400 font-mono text-center">Overwriting Weight Clusters</div>
    </div>
);

// Scene 5: The Reversal Curse
export const Reel2Reversal = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-5xl font-bold text-white text-center">The Reversal Curse</h2>
        <div className="flex flex-col gap-8 w-full max-w-lg px-8">
            <motion.div
                className="flex items-center justify-between bg-[#1a1b1c] p-8 rounded-2xl border-2 border-green-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <span className="text-4xl font-bold text-white">A is B</span>
                <span className="text-4xl text-green-500">✅</span>
            </motion.div>
            <motion.div
                className="flex items-center justify-between bg-[#1a1b1c] p-8 rounded-2xl border-2 border-red-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <span className="text-4xl font-bold text-white">B is A</span>
                <span className="text-4xl text-red-500">❓ FAIL</span>
            </motion.div>
        </div>
        <div className="text-2xl text-zinc-500 text-center">Directional Probability Chain</div>
    </div>
);

// Scene 6: The Solution (Context Window)
export const Reel2RAG = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-5xl font-bold text-blue-400 text-center">Non-Parametric Memory</h2>
        <div className="w-96 h-96 border-4 border-dashed border-zinc-600 rounded-3xl flex flex-col items-center p-6 relative overflow-hidden bg-[#0a1f16]">
            <div className="text-zinc-400 font-mono text-2xl mb-6">Context Window</div>
            <motion.div
                className="w-full bg-[#10a37f] rounded-2xl p-8 shadow-[0_0_60px_rgba(16,163,127,0.5)]"
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
            >
                <div className="text-black font-bold font-mono text-center text-2xl">
                    DOCUMENT.pdf<br />
                    <span className="text-xl">"The exact answer is 42."</span>
                </div>
            </motion.div>
        </div>
    </div>
);

// Scene 7: When to Fine-Tune (Patterns)
export const Reel2Pattern = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-5xl font-bold text-white text-center">Fine-Tune for <br /> <span className="text-purple-500">Patterns</span></h2>
        <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
            <div className="bg-[#1a1b1c] p-8 rounded-2xl border-2 border-purple-800 flex flex-col items-center">
                <div className="text-6xl mb-4">📜</div>
                <div className="text-purple-400 font-mono text-lg text-center">JSON Format</div>
            </div>
            <div className="bg-[#1a1b1c] p-8 rounded-2xl border-2 border-purple-800 flex flex-col items-center">
                <div className="text-6xl mb-4">⚕️</div>
                <div className="text-purple-400 font-mono text-lg text-center">Medical Tone</div>
            </div>
            <div className="bg-[#1a1b1c] p-8 rounded-2xl border-2 border-purple-800 flex flex-col items-center col-span-2">
                <div className="text-6xl mb-4">🧠</div>
                <div className="text-purple-400 font-mono text-lg text-center">Reasoning Steps</div>
            </div>
        </div>
    </div>
);

// Scene 8: The Verdict
export const Reel2Verdict = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full w-full">
        <div className="text-6xl font-black text-white uppercase tracking-widest text-center">Role Allocation</div>
        <div className="flex flex-col gap-6 w-full max-w-lg px-8">
            <motion.div
                className="flex items-center justify-between border-b-2 pb-6 border-zinc-700"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
            >
                <span className="text-3xl font-bold text-zinc-400">HOW (Style)</span>
                <span className="text-4xl font-bold text-[#10a37f]">Fine-Tuning</span>
            </motion.div>
            <motion.div
                className="flex items-center justify-between border-b-2 pb-6 border-zinc-700"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <span className="text-3xl font-bold text-zinc-400">WHAT (Facts)</span>
                <span className="text-4xl font-bold text-blue-500">RAG</span>
            </motion.div>
        </div>
    </div>
);

// Scene 9: CTA (Subscribe + Watch)
export const Reel2CTA = () => (
    <div className="flex flex-col items-center justify-center gap-16 h-full w-full">
        {/* Subscribe Animation */}
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <div className="text-[10rem]">🔔</div>
            <div className="text-7xl font-black text-white">SUBSCRIBE</div>
            <div className="text-3xl text-zinc-500 font-mono text-center">For AI Engineering Deep Dives</div>
        </motion.div>

        {/* Watch Full Video */}
        <motion.div
            className="w-full max-w-md bg-[#1a1b1c] border-4 border-[#10a37f] rounded-3xl p-8 flex items-center gap-8 shadow-[0_0_50px_rgba(16,163,127,0.3)]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
        >
            <div className="w-20 h-20 bg-[#10a37f] rounded-2xl flex items-center justify-center text-4xl">📺</div>
            <div className="flex-1">
                <div className="font-bold text-white text-3xl">FULL GUIDE</div>
                <div className="text-[#10a37f] text-xl font-bold mt-2">ON CHANNEL ➜</div>
            </div>
        </motion.div>
    </div>
);
