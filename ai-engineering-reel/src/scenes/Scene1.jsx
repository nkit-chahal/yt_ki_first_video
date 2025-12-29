import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Lock, Globe } from 'lucide-react';

// Scene 1: The Silent Crisis
// Visual: Closed Source skyrocketing vs Open Source flatlining
const Scene1 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />

            <motion.h1
                className="text-4xl font-bold text-white mb-12 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                SIX MONTHS AGO...
            </motion.h1>

            <div className="relative w-full max-w-sm h-80 border-l-2 border-b-2 border-gray-700">
                {/* Reference Grid */}
                <div className="absolute inset-0 grid grid-rows-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="border-b border-gray-800 w-full h-full" />
                    ))}
                </div>

                {/* Graphs Container */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 320" preserveAspectRatio="none">

                    {/* Open Source Line (Green Flatline) */}
                    <motion.path
                        d="M0,280 L400,280"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="4"
                        strokeDasharray="10 0"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "linear" }}
                    />

                    {/* Closed Source Line (Red Skyrocket) */}
                    <motion.path
                        d="M0,280 C100,280 200,250 350,50"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeIn" }}
                    />
                </svg>

                {/* Open Label (HTML Overlay) */}
                <motion.div
                    className="absolute bottom-12 right-0 flex items-center gap-1 text-green-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <Globe size={16} />
                    <span className="text-xs font-mono">Open Models</span>
                </motion.div>

                {/* Closed Label */}
                <motion.div
                    className="absolute top-10 right-0 flex items-center gap-1 text-red-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <Lock size={16} />
                    <span className="text-xs font-mono">GPT-5 / Gemini 3.0</span>
                </motion.div>

                {/* The Gap */}
                <motion.div
                    className="absolute right-10 top-20 bottom-10 w-0 border-l-2 border-dashed border-white/30 flex items-center justify-center"
                    initial={{ height: 0 }}
                    animate={{ height: "70%" }}
                    transition={{ delay: 2.2, duration: 1 }}
                >
                    <span className="bg-black/80 text-white text-xs px-2 py-1 rotate-90 whitespace-nowrap">
                        THE GAP
                    </span>
                </motion.div>
            </div>

            <motion.p
                className="mt-8 text-gray-400 text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                Late 2025: Calculate vs Reasoning
            </motion.p>
        </div>
    );
};

export default Scene1;
