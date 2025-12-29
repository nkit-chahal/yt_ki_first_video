import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitCommit, Folder } from 'lucide-react';

// Scene 5: BUILD PORTFOLIO - Huge GitHub Stats
const ResearchScene5 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12 bg-bg-main relative">

            <motion.h2
                className="text-6xl font-black text-white z-10 text-center tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Step 4: Build a <span className="text-primary glow-primary">Portfolio</span>
            </motion.h2>

            <div className="flex flex-col gap-12 w-full max-w-2xl z-10">

                {/* Main GitHub Card */}
                <motion.div
                    className="stat-card flex flex-col items-center gap-6 p-10"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="icon-wrapper bg-white/10 p-10 rounded-full border-4 border-white/20">
                        <Github size={140} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                        <p className="text-6xl font-black text-white tracking-widest">OPEN SOURCE</p>
                        <p className="text-2xl text-gray-400 font-bold uppercase tracking-wide">Your Best Resume</p>
                    </div>
                </motion.div>

                {/* Repo Examples */}
                <div className="grid grid-cols-2 gap-6">
                    <motion.div
                        className="stat-card flex flex-col items-center gap-4 p-6"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0 / speed }}
                    >
                        <GitCommit size={60} className="text-primary" />
                        <p className="text-xl font-bold text-white text-center">LoRA-from-scratch</p>
                        <div className="flex items-center gap-2 text-accent">
                            <Star size={24} fill="currentColor" />
                            <span className="font-bold text-2xl">1.2k</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="stat-card flex flex-col items-center gap-4 p-6"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3 / speed }}
                    >
                        <Folder size={60} className="text-secondary" />
                        <p className="text-xl font-bold text-white text-center">nano-diffusion</p>
                        <div className="flex items-center gap-2 text-accent">
                            <Star size={24} fill="currentColor" />
                            <span className="font-bold text-2xl">840</span>
                        </div>
                    </motion.div>
                </div>

            </div>

            <motion.p
                className="text-3xl text-primary font-bold text-center z-10 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 / speed }}
            >
                Replicate famous papers. Ship it. 🚀
            </motion.p>
        </div>
    );
};

export default ResearchScene5;
