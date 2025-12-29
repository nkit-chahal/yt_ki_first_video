import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from './AICharacter';

// Reel Specific CTA Scene
const ReelCTA = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        {/* Hook: "This was just a glimpse" */}
        <motion.div
            className="text-5xl font-hand text-zinc-500 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            That was just a glimpse! 👀
        </motion.div>

        {/* Main Action: Watch Full Video */}
        <div className="flex flex-col items-center gap-6">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                <div className="w-80 h-48 bg-zinc-900 rounded-xl flex items-center justify-center border-4 border-zinc-200 shadow-2xl relative">
                    <div className="text-7xl text-red-600">▶️</div>
                    <div className="absolute -bottom-6 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-xl shadow-lg">
                        FULL DEEP DIVE
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="text-7xl font-black text-center text-zinc-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                Watch on Channel
            </motion.div>
        </div>

        {/* Arrow pointing down/to profile */}
        <motion.div
            className="text-6xl text-red-500"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
        >
            ⬇️
        </motion.div>

        <div className="flex items-center gap-8 bg-zinc-100 px-8 py-4 rounded-2xl border-2 border-zinc-200 shadow-md">
            <AICharacter mood="happy" action="wave" />
            <div className="flex flex-col">
                <span className="font-bold text-2xl">Subscribe for more!</span>
                <span className="text-sm text-zinc-500">New videos weekly</span>
            </div>
        </div>
    </div>
);

export default ReelCTA;
