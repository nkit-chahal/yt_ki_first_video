import React from 'react';
import { motion } from 'framer-motion';
import { Sigma, Binary, BarChart3 } from 'lucide-react';

// Scene 2: THE FOUNDATION - Mega Icons Grid (Math)
const ResearchScene2 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12 bg-bg-main relative">

            <motion.h2
                className="text-6xl font-black text-white z-10 text-center tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Step 1: <span className="text-primary glow-primary">The Math</span>
            </motion.h2>

            <div className="flex flex-col gap-12 w-full max-w-2xl z-10">

                {/* Linear Algebra */}
                <motion.div
                    className="stat-card flex flex-col items-center gap-6 p-10"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="icon-wrapper bg-white/10 p-10 rounded-full border-4 border-primary/20">
                        <Sigma size={120} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-black text-white">Linear Algebra</p>
                        <p className="text-2xl text-gray-400 font-medium uppercase tracking-wide">Tensors & Matrices</p>
                    </div>
                </motion.div>

                {/* Calculus & Probability - Grid */}
                <div className="grid grid-cols-2 gap-8">
                    <motion.div
                        className="stat-card flex flex-col items-center gap-4 p-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 / speed }}
                    >
                        <div className="icon-wrapper bg-white/10 p-6 rounded-full">
                            <Binary size={80} className="text-secondary" strokeWidth={1.5} />
                        </div>
                        <p className="text-2xl font-bold text-white">Calculus</p>
                    </motion.div>

                    <motion.div
                        className="stat-card flex flex-col items-center gap-4 p-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 / speed }}
                    >
                        <div className="icon-wrapper bg-white/10 p-6 rounded-full">
                            <BarChart3 size={80} className="text-accent" strokeWidth={1.5} />
                        </div>
                        <p className="text-2xl font-bold text-white">Probability</p>
                    </motion.div>
                </div>
            </div>

            <motion.p
                className="text-3xl text-primary font-bold text-center z-10 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 / speed }}
            >
                You CANNOT skip this. 📚
            </motion.p>
        </div>
    );
};

export default ResearchScene2;
