import React from 'react';
import { motion } from 'framer-motion';
import StickFigure from './StickFigure';

const Visualizer = ({ chapterId, title }) => {

    // 0: Intro
    if (chapterId === 0) {
        return (
            <div className="flex flex-col items-center gap-8">
                <div className="relative">
                    <StickFigure pose="standing" expression="happy" className="scale-150 mb-8" />
                    {/* Floating Book Block */}
                    <motion.div
                        className="absolute top-20 -right-24 bg-white text-zinc-800 p-4 shadow-xl rotate-6 font-hand text-lg border-2 border-zinc-800"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 6 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        <div className="border-b-2 border-zinc-200 mb-2 font-bold">AI Engineering</div>
                        <div className="text-sm">800 Pages</div>
                    </motion.div>
                </div>

                <motion.h1
                    className="text-6xl font-black text-center tracking-tighter text-zinc-800"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    AI ENGINEERING<span className="text-red-500">.</span>
                </motion.h1>
                <div className="text-2xl text-zinc-500 max-w-2xl text-center font-hand">
                    The Definitive Guide
                </div>
            </div>
        );
    }

    // 1: What is AI Eng
    if (chapterId === 1) {
        return (
            <div className="flex gap-32 items-end justify-center h-full pb-20">
                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        className="bg-zinc-100 border-2 border-zinc-400 p-4 rounded rotate-2 font-hand"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        $ train_model.py
                    </motion.div>
                    <StickFigure pose="thinking" expression="neutral" />
                    <h3 className="text-xl font-bold font-hand text-zinc-600">ML Engineer</h3>
                </div>

                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-4xl text-zinc-400 font-bold mb-32 font-hand"
                >
                    VS
                </motion.div>

                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        className="bg-white text-zinc-800 border-2 border-zinc-800 p-4 rounded shadow-lg -rotate-2 font-hand"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        $ import openai
                    </motion.div>
                    <StickFigure pose="explaining" expression="happy" />
                    <h3 className="text-xl font-bold bg-yellow-100 px-4 py-1 border-2 border-yellow-400 text-zinc-800 font-hand">AI Engineer</h3>
                </div>
            </div>
        );
    }

    // 2: Foundation Models
    if (chapterId === 2) {
        return (
            <div className="flex flex-col items-center justify-center gap-12">
                <h2 className="text-4xl font-hand font-bold text-zinc-700">Self-Supervision</h2>
                <div className="flex items-center gap-8">
                    {/* Unlabeled Data */}
                    <div className="flex flex-col gap-2">
                        <motion.div className="w-16 h-16 border-2 border-zinc-300 bg-white flex items-center justify-center font-hand" animate={{ x: [0, 50, 0] }} transition={{ duration: 3, repeat: Infinity }}>txt</motion.div>
                        <motion.div className="w-16 h-16 border-2 border-zinc-300 bg-white flex items-center justify-center font-hand" animate={{ x: [0, 50, 0] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity }}>img</motion.div>
                    </div>

                    {/* Arrow */}
                    <svg width="100" height="40" className="text-zinc-400">
                        <path d="M0 20 H80 l-10 -10 m10 10 l-10 10" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>

                    {/* The Model Brain */}
                    <div className="relative">
                        <motion.div
                            className="w-48 h-48 rounded-full border-4 border-zinc-800 bg-zinc-100 flex items-center justify-center text-4xl"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🧠
                        </motion.div>
                        <motion.div className="absolute top-0 right-0 bg-yellow-200 px-2 border border-zinc-800 rotate-12 font-hand">Predicts Next Token</motion.div>
                    </div>
                </div>
            </div>
        );
    }

    // 3: Training Data
    if (chapterId === 3) {
        return (
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl font-hand font-bold text-zinc-700 mb-8">Data Filtering</h2>
                <div className="flex flex-col items-center">
                    {/* Garbage Input */}
                    <div className="flex gap-4 mb-2">
                        <span className="text-2xl">💩</span>
                        <span className="text-2xl">🤬</span>
                        <span className="text-2xl">🤥</span>
                    </div>

                    {/* Funnel */}
                    <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[100px] border-t-zinc-300 relative my-2">
                        <div className="absolute -top-[120px] left-[-30px] font-hand text-zinc-500">Filters</div>
                    </div>

                    {/* Gold Output */}
                    <div className="flex gap-4 mt-2">
                        <span className="text-4xl">✨</span>
                        <span className="text-4xl">📚</span>
                    </div>
                </div>
                <div className="flex mt-12 gap-8 items-end">
                    <StickFigure pose="standing" />
                    <div className="bg-white p-4 border-2 border-zinc-800 rounded-tl-xl rounded-tr-xl rounded-br-xl font-hand">
                        "Garbage In, Garbage Out!"
                    </div>
                </div>
            </div>
        );
    }

    // 4: Transformers
    if (chapterId === 4) {
        return (
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl font-hand font-bold text-zinc-700 mb-12">Attention Mechanism</h2>
                <div className="flex gap-8 items-center">
                    <StickFigure pose="explaining" />
                    <div className="flex flex-col gap-4">
                        {/* Q K V Blocks */}
                        <div className="flex gap-4">
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-16 h-16 bg-red-100 border-2 border-red-400 flex items-center justify-center font-bold text-xl rounded">Q</motion.div>
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, delay: 0.2, repeat: Infinity }} className="w-16 h-16 bg-green-100 border-2 border-green-400 flex items-center justify-center font-bold text-xl rounded">K</motion.div>
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, delay: 0.4, repeat: Infinity }} className="w-16 h-16 bg-blue-100 border-2 border-blue-400 flex items-center justify-center font-bold text-xl rounded">V</motion.div>
                        </div>
                        <div className="text-center font-hand text-zinc-500">Query • Key • Value</div>
                    </div>
                </div>
                <div className="mt-8 bg-zinc-100 p-4 w-full max-w-lg border-2 border-zinc-300 border-dashed text-center font-hand text-zinc-600">
                    "Parallel Processing = Speed ⚡"
                </div>
            </div>
        );
    }

    // 5: Evaluation
    if (chapterId === 5) {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-8">
                    <StickFigure pose="thinking" />

                    {/* The Black Box */}
                    <div className="w-48 h-48 bg-black rounded-lg flex items-center justify-center text-white font-mono text-xl relative shadow-2xl">
                        [ ? ]
                        <motion.div
                            className="absolute -right-16 top-1/2 w-12 h-12 bg-white border-2 border-zinc-800 rounded-full flex items-center justify-center text-2xl"
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity }}
                        >
                            🔎
                        </motion.div>
                    </div>
                </div>
                <div className="mt-12 text-2xl font-hand bg-yellow-100 px-6 py-2 rotate-1 shadow-sm">
                    Evaluation is HARD.
                </div>
                <div className="flex gap-4 mt-6">
                    <div className="bg-white border border-zinc-300 px-3 py-1 font-hand">Exact Match</div>
                    <div className="bg-white border border-zinc-300 px-3 py-1 font-hand">LLM-as-a-Judge</div>
                </div>
            </div>
        );
    }

    // 6: Model Selection
    if (chapterId === 6) {
        return (
            <div className="flex flex-col items-center justify-center gap-12">
                <h2 className="text-3xl font-hand font-bold">Pick Your Fighter</h2>
                <div className="flex items-end gap-16">
                    {/* Expensive Model */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-32 h-40 bg-purple-100 border-2 border-purple-800 rounded-xl flex items-center justify-center text-4xl shadow-lg relative">
                            🤖
                            <div className="absolute -top-4 -right-4 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full border border-black">GPT-4</div>
                        </div>
                        <div className="font-bold text-red-500 font-hand">$$$$</div>
                    </div>

                    {/* Cheap/Fast Model */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-32 bg-blue-100 border-2 border-blue-800 rounded-lg flex items-center justify-center text-2xl shadow-md relative">
                            ⚡
                            <div className="absolute -top-3 -right-3 bg-green-400 text-xs font-bold px-2 py-1 rounded-full border border-black">Llama</div>
                        </div>
                        <div className="font-bold text-green-600 font-hand">$</div>
                    </div>

                    <StickFigure pose="standing" />
                </div>
            </div>
        );
    }

    // 7: Prompt Engineering
    if (chapterId === 7) {
        return (
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="text-2xl font-hand bg-white border-2 border-zinc-800 p-4 rounded-xl shadow-lg relative">
                    "Act as a Senior Engineer..."
                    <div className="absolute -bottom-4 left-8 w-4 h-4 bg-white border-b-2 border-r-2 border-zinc-800 transform rotate-45"></div>
                </div>

                <div className="flex items-end gap-2">
                    <StickFigure pose="explaining" />
                    <div className="mb-32 ml-4">
                        <div className="w-16 h-1 bg-zinc-300 mb-1"></div>
                        <div className="w-24 h-1 bg-zinc-300 mb-1"></div>
                        <div className="w-12 h-1 bg-zinc-300"></div>
                    </div>
                    <div className="w-40 h-56 border-2 border-zinc-800 rounded-lg flex flex-col p-4 bg-zinc-50 ml-8">
                        <div className="text-xs font-mono text-zinc-400 mb-2">System Prompt</div>
                        <div className="text-xs font-mono text-zinc-400">User Prompt</div>
                    </div>
                </div>
            </div>
        );
    }

    // 8: RAG
    if (chapterId === 8) {
        return (
            <div className="flex flex-col items-center justify-center gap-8">
                <h2 className="text-4xl font-hand font-bold mb-4">Retrieval Augmented Generation</h2>
                <div className="flex items-center gap-8">
                    <StickFigure pose="standing" />

                    {/* Database / Library */}
                    <div className="flex flex-col gap-1 border-2 border-zinc-800 p-2 bg-amber-50 rounded">
                        <div className="w-20 h-4 bg-amber-200 border border-amber-400 rounded-sm"></div>
                        <div className="w-20 h-4 bg-amber-200 border border-amber-400 rounded-sm"></div>
                        <div className="w-20 h-4 bg-amber-200 border border-amber-400 rounded-sm"></div>
                        <div className="text-xs text-center font-hand mt-1">Context</div>
                    </div>

                    <div className="text-2xl">➡️</div>

                    {/* LLM */}
                    <div className="w-24 h-24 border-2 border-zinc-800 rounded-full flex items-center justify-center bg-white text-3xl">
                        🗣️
                    </div>
                </div>
            </div>
        );
    }

    // 9: Agents
    if (chapterId === 9) {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="relative w-80 h-80">
                    {/* Circular flow */}
                    <motion.div
                        className="absolute inset-0 border-4 border-dashed border-zinc-300 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 font-hand font-bold text-xl">Observe</div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-2 font-hand font-bold text-xl">Act</div>
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 font-hand font-bold text-xl">Think</div>
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 font-hand font-bold text-xl">Plan</div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <StickFigure pose="thinking" className="scale-75" />
                    </div>
                </div>
                <div className="mt-8 flex gap-4">
                    <div className="text-3xl bg-zinc-100 p-2 rounded border border-zinc-300">🛠️</div>
                    <div className="text-3xl bg-zinc-100 p-2 rounded border border-zinc-300">🌐</div>
                    <div className="text-3xl bg-zinc-100 p-2 rounded border border-zinc-300">🐍</div>
                </div>
            </div>
        );
    }

    // 10: Inference
    if (chapterId === 10) {
        return (
            <div className="flex items-center justify-center gap-20">
                <div className="flex flex-col items-center">
                    <div className="w-4 h-32 bg-zinc-200 rounded-full relative">
                        <motion.div
                            className="absolute bottom-0 w-full bg-red-500 rounded-full"
                            animate={{ height: ["0%", "80%", "0%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <span className="font-hand mt-2 font-bold">Latency</span>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-6xl font-black text-zinc-800 opacity-20">$$$</div>
                    <StickFigure pose="standing" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-32 h-4 bg-zinc-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-green-500"
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        />
                    </div>
                    <span className="font-hand mt-2 font-bold">Throughput</span>
                </div>
            </div>
        );
    }

    // 11: Conclusion
    if (chapterId === 11) {
        return (
            <div className="flex flex-col items-center justify-center gap-8">
                <h1 className="text-6xl font-hand font-bold text-zinc-800">The End!</h1>
                <StickFigure pose="standing" expression="happy" />
                <motion.div
                    className="bg-red-500 text-white font-bold text-2xl px-8 py-3 rounded shadow-lg font-hand cursor-pointer"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                >
                    Subscribe
                </motion.div>
            </div>
        );
    }

    // Default Fallback
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <motion.h2
                className="text-7xl font-bold text-zinc-800 mb-6 uppercase tracking-tight max-w-4xl"
            >
                {title}
            </motion.h2>
        </div>
    );
};

export default Visualizer;
