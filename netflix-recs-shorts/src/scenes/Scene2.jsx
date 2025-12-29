import React from 'react';
import { motion } from 'framer-motion';
import { Users, Film } from 'lucide-react';

// Scene 2: THE SCALE - Megasized Icons
const Scene2 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12 bg-bg-main relative">

            <motion.h2
                className="text-6xl font-black text-white z-10 text-center tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                The <span className="text-primary glow-primary">Scale</span> Problem
            </motion.h2>

            <div className="flex flex-col gap-12 w-full max-w-2xl z-10">

                {/* Users Count */}
                <motion.div
                    className="stat-card flex flex-col items-center gap-6 p-10"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    <div className="icon-wrapper bg-white/10 p-10 rounded-full border-4 border-primary/20">
                        <Users size={140} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                        <p className="text-8xl font-black text-white tracking-widest">230M+</p>
                        <p className="text-3xl text-gray-400 font-bold uppercase tracking-wide">Subscribers</p>
                    </div>
                </motion.div>

                {/* Titles Count */}
                <motion.div
                    className="stat-card flex flex-col items-center gap-6 p-10"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 / speed }}
                >
                    <div className="icon-wrapper bg-white/10 p-10 rounded-full border-4 border-white/20">
                        <Film size={140} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                        <p className="text-8xl font-black text-white tracking-widest">15,000+</p>
                        <p className="text-3xl text-gray-400 font-bold uppercase tracking-wide">Titles</p>
                    </div>
                </motion.div>
            </div>

            <motion.p
                className="text-3xl text-primary font-bold text-center z-10 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 / speed }}
            >
                Billions of combinations! 🤯
            </motion.p>
        </div>
    );
};

export default Scene2;
