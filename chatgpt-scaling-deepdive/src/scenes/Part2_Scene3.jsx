import React from 'react';
import { motion } from 'framer-motion';

// Part 2 - Scene 3: Naive Transformer
// "That is how a naive Transformer works. Autoregressive. To predict word 10..."
const Part2_Scene3 = () => {
    const words = Array.from({ length: 11 }, (_, i) => i + 1);

    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white font-sans p-8 overflow-hidden">

            <h2 className="text-4xl font-bold text-gray-500 mb-12 uppercase tracking-widest">Naive Autoregression</h2>

            <div className="w-full max-w-5xl space-y-2">

                {/* Visualizing the "Pyramid" of work */}
                {[9, 10, 11].map((currentWord, i) => (
                    <motion.div
                        key={currentWord}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 2 }}
                    >
                        <div className="w-32 text-right text-gray-400 font-mono">Word {currentWord}:</div>

                        <div className="flex gap-1">
                            {/* Previous Words (Re-processed) */}
                            {Array.from({ length: currentWord - 1 }).map((_, j) => (
                                <motion.div
                                    key={j}
                                    className="w-12 h-12 rounded bg-red-900 border border-red-700 flex items-center justify-center text-red-300 font-bold"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 2 + j * 0.1 }}
                                >
                                    {j + 1}
                                </motion.div>
                            ))}

                            {/* The New Word */}
                            <motion.div
                                className="w-12 h-12 rounded bg-green-600 border border-green-400 flex items-center justify-center text-white font-bold"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 2 + (currentWord) * 0.1 }}
                            >
                                {currentWord}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}

            </div>

        </div>
    );
};

export default Part2_Scene3;
