import React from 'react';
import { motion } from 'framer-motion';
import { Filter, ArrowDown, List } from 'lucide-react';

// Scene 4: THE FUNNEL - Mega Icons
const Scene4 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                The Recommendation <span className="text-primary glow-primary">Funnel</span>
            </motion.h2>

            <div className="flex flex-col items-center gap-4 w-full max-w-2xl z-10">

                {/* Stage 1: All Titles */}
                <motion.div
                    className="w-full bg-gray-800 p-8 rounded-t-3xl border-b border-white/10 flex justify-between items-center"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <span className="text-gray-400 text-3xl font-bold">Total</span>
                    <span className="text-5xl font-black text-white">15,000</span>
                </motion.div>

                {/* Arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 / speed }}
                >
                    <ArrowDown size={80} className="text-primary" strokeWidth={3} />
                </motion.div>

                {/* Stage 2: Candidate Generation */}
                <motion.div
                    className="w-[85%] bg-gray-900 p-8 border-x border-primary/30 flex justify-between items-center"
                    initial={{ scaleX: 1.2, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.9 / speed }}
                >
                    <span className="text-primary font-bold text-3xl">Candidates</span>
                    <span className="text-5xl font-black text-white">2,000</span>
                </motion.div>

                {/* Arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 / speed }}
                >
                    <ArrowDown size={80} className="text-primary" strokeWidth={3} />
                </motion.div>

                {/* Stage 3: Ranking */}
                <motion.div
                    className="w-[65%] bg-primary/20 p-8 rounded-b-3xl border border-primary flex justify-between items-center shadow-[0_0_50px_rgba(229,9,20,0.3)]"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 / speed }}
                >
                    <span className="text-white font-bold text-3xl">Row</span>
                    <span className="text-5xl font-black text-white">50</span>
                </motion.div>
            </div>

            {/* Icons floating - Massive ambient icons */}
            <motion.div className="absolute top-1/4 left-16 opacity-20">
                <Filter size={200} className="text-gray-500" />
            </motion.div>
            <motion.div className="absolute bottom-1/4 right-16 opacity-20">
                <List size={200} className="text-gray-500" />
            </motion.div>

        </div>
    );
};

export default Scene4;
