import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Search, Server } from 'lucide-react';

// Scene 3: The Solution (DeepSeek Sparse Attention)
// Visual: A "Lightning Indexer" scanning and selecting specific data points
const Scene3 = () => {

    // SFX: Scanner swoosh
    useEffect(() => {
        const sfx = new Audio('/sfx/swoosh.mp3');
        sfx.volume = 0.2;
        setTimeout(() => sfx.play().catch(() => { }), 2000);
    }, []);
    return (
        <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden p-6">

            <motion.div
                className="absolute top-10 flex items-center gap-2 text-cyan-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Zap size={24} />
                <h2 className="text-2xl font-bold">DeepSeek Sparse Attention</h2>
            </motion.div>

            {/* The Library / Data Grid */}
            <div className="relative w-72 h-72 grid grid-cols-6 grid-rows-6 gap-2 p-4">
                {[...Array(36)].map((_, i) => (
                    <div key={i} className="bg-slate-800 rounded-sm relative overflow-hidden">
                        {/* Data block */}
                        <motion.div
                            className="absolute inset-0 bg-cyan-500"
                            initial={{ opacity: 0.1 }}
                            animate={{
                                opacity: [0.1, 0.8, 0.1],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 0.5,
                                delay: i % 6 === 2 || i % 6 === 5 ? 2 + i * 0.05 : 99 // Only animate specific "relevant" blocks later
                            }}
                        />
                    </div>
                ))}

                {/* Lightning Indexer (Scanner) */}
                <motion.div
                    className="absolute inset-0 border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] rounded-lg pointer-events-none"
                    initial={{ top: '0%', height: '10%', opacity: 0 }}
                    animate={{ top: ['0%', '90%', '20%'], height: ['10%', '10%', '16%'], opacity: 1 }}
                    transition={{ duration: 2, times: [0, 0.5, 1], ease: "easeInOut" }}
                >
                    <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyan-400 w-full shadow-[0_0_10px_#22d3ee]" />
                    <span className="absolute -right-24 top-0 text-xs text-cyan-400 font-mono bg-black/50 px-2 py-1">
                        LIGHTNING INDEXER
                    </span>
                </motion.div>

                {/* Connecting Lines (Top-K Selection) */}
                <svg className="absolute inset-0 overflow-visible pointer-events-none">
                    <motion.path
                        d="M144,144 L40,80 M144,144 L240,200 M144,144 L200,60"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 2.2, duration: 0.5 }}
                    />
                </svg>
            </div>

            <motion.div
                className="mt-8 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
            >
                <p className="text-cyan-100 font-mono">Retrieves only Top-K Logic</p>
            </motion.div>
        </div>
    );
};

export default Scene3;
