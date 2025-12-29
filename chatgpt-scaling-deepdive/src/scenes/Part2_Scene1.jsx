import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

// Part 2 - Scene 1: The Tragedy
// "The first problem was a tragedy of inefficiency."
const Part2_Scene1 = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8 overflow-hidden relative">

            {/* Background Mood */}
            <div className="absolute inset-0 bg-red-950/20" />

            <motion.div
                className="z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                >
                    <AlertTriangle size={120} className="text-red-600 mx-auto mb-8" />
                </motion.div>

                <h1 className="text-6xl font-black uppercase tracking-widest mb-4">
                    The First Problem
                </h1>

                <motion.p
                    className="text-4xl text-gray-400 font-serif italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    ...was a tragedy of <span className="text-red-500 font-bold">inefficiency</span>.
                </motion.p>
            </motion.div>

        </div>
    );
};

export default Part2_Scene1;
