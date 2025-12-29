import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Weight } from 'lucide-react';

// P4_S2: Heavy Model
// "GPT-4 is a genius, but it is heavy. It is slow."
const Part4_Scene2 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8">

            <motion.div
                className="relative"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <Brain size={200} className="text-primary" strokeWidth={1} />
                <motion.div
                    className="absolute -top-4 -right-4 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    GENIUS
                </motion.div>
            </motion.div>

            <motion.h1
                className="text-6xl font-black mt-8 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                GPT-4
            </motion.h1>

            <motion.div
                className="flex gap-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <div className="flex items-center gap-3 text-3xl text-red-400">
                    <Weight size={40} />
                    <span>Heavy</span>
                </div>
                <div className="flex items-center gap-3 text-3xl text-red-400">
                    <span className="text-4xl">🐢</span>
                    <span>Slow</span>
                </div>
            </motion.div>

        </div>
    );
};

export default Part4_Scene2;
