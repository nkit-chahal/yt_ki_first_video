import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Repeat } from 'lucide-react';

// Part 2 - Scene 5: The Realization
// "Engineers realized: We are calculating the same numbers over and over again."
const Part2_Scene5 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8 relative">

            {/* The Thought */}
            <motion.div
                className="flex items-center gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="bg-yellow-500/20 p-6 rounded-full">
                    <Lightbulb size={64} className="text-yellow-500" />
                </div>
                <h2 className="text-4xl font-bold">The Realization</h2>
            </motion.div>

            {/* The Visual Proof */}
            <div className="bg-gray-900 p-12 rounded-3xl border border-gray-700 flex flex-col items-center">

                <h3 className="text-3xl text-gray-400 mb-8">Why are we doing this?</h3>

                <div className="flex gap-4 mb-4">
                    <div className="p-4 bg-gray-800 rounded text-2xl font-mono text-gray-500">Calc(Token 1)</div>
                    <div className="p-4 bg-gray-800 rounded text-2xl font-mono text-gray-500">Calc(Token 2)</div>
                    <div className="p-4 bg-gray-800 rounded text-2xl font-mono text-gray-500">Calc(Token 3)</div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <Repeat size={48} className="text-red-500 rotate-90 my-2" />
                </motion.div>

                <div className="flex gap-4">
                    <div className="p-4 bg-gray-800 rounded text-2xl font-mono text-gray-500 border-2 border-red-500">Calc(Token 1)</div>
                    <div className="p-4 bg-gray-800 rounded text-2xl font-mono text-gray-500 border-2 border-red-500">Calc(Token 2)</div>
                    <div className="p-4 bg-gray-800 rounded text-2xl font-mono text-gray-500 border-2 border-red-500">Calc(Token 3)</div>
                    <div className="p-4 bg-primary/20 rounded text-2xl font-mono text-primary">Calc(Token 4)</div>
                </div>

                <motion.div
                    className="mt-8 bg-red-600 text-white font-black text-2xl px-6 py-2 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 }}
                >
                    REDUNDANT!
                </motion.div>

            </div>

        </div>
    );
};

export default Part2_Scene5;
