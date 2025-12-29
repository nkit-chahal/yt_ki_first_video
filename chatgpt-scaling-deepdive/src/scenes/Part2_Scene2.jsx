import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

// Part 2 - Scene 2: Reading the Book
// "Imagine reading a book, but for every new word... forced to re-read the entire book."
const Part2_Scene2 = () => {
    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-center text-white font-sans p-8 overflow-hidden relative">

            <motion.div
                className="flex items-center gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {/* The Book */}
                <div className="relative">
                    <BookOpen size={200} className="text-gray-300" strokeWidth={1} />

                    {/* Pages Flipping Back - Analogy for Re-reading */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                    >
                        <div className="w-40 h-1 bg-white rotate-45" />
                    </motion.div>
                </div>

                <div className="max-w-xl">
                    <h2 className="text-5xl font-bold mb-6 text-primary">The Reading Rule:</h2>
                    <ul className="space-y-4 text-2xl text-gray-400">
                        <motion.li
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                        >
                            Read Word 1.
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2 }}
                        >
                            Read Word 1... then Word 2.
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 3 }}
                        >
                            Read Word 1... Word 2... then Word 3.
                        </motion.li>
                        <motion.li
                            className="text-red-500 font-bold"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 4 }}
                        >
                            (Repeat forever)
                        </motion.li>
                    </ul>
                </div>

            </motion.div>

        </div>
    );
};

export default Part2_Scene2;
