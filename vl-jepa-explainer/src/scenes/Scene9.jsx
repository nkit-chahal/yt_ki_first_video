import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Heart, Share2 } from 'lucide-react';

// Scene 9: CTA - Huge Buttons
const Scene9 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12 bg-black relative">

            {/* Background red glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />

            {/* Main Text */}
            <motion.div className="text-center z-10">
                <motion.h1
                    className="text-8xl font-black text-white mb-4 tracking-tighter"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    FOLLOW
                </motion.h1>
                <motion.p
                    className="text-3xl text-primary font-bold tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 / speed }}
                >
                    For More System Design
                </motion.p>
            </motion.div>

            {/* Next Up Preview */}
            <motion.div
                className="w-full max-w-lg bg-gray-900 border border-gray-700 rounded-xl p-8 z-10 shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 / speed }}
            >
                <p className="text-gray-500 text-lg uppercase font-bold mb-6 tracking-wide">Coming Next</p>

                <div className="flex items-center gap-6 mb-6 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">U</div>
                    <div>
                        <p className="text-white font-bold text-2xl">Uber</p>
                        <p className="text-gray-400 text-lg">Geospatial Indexing</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">I</div>
                    <div>
                        <p className="text-white font-bold text-2xl">Instagram</p>
                        <p className="text-gray-400 text-lg">Feed Generation</p>
                    </div>
                </div>
            </motion.div>

            {/* Action Buttons - MASSIVE */}
            <motion.div
                className="flex gap-12 z-10 mt-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 / speed }}
            >
                <motion.button
                    className="flex flex-col items-center gap-4 group"
                    whileHover={{ scale: 1.1 }}
                >
                    <div className="p-8 bg-gray-800 rounded-full group-hover:bg-primary transition-colors border-2 border-gray-700">
                        <Heart size={80} className="text-white" fill="white" />
                    </div>
                    <span className="text-gray-400 text-xl font-bold">Like</span>
                </motion.button>

                <motion.button
                    className="flex flex-col items-center gap-4 group"
                    whileHover={{ scale: 1.1 }}
                >
                    <div className="p-8 bg-gray-800 rounded-full group-hover:bg-white transition-colors border-2 border-gray-700">
                        <Share2 size={80} className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-gray-400 text-xl font-bold">Share</span>
                </motion.button>
            </motion.div>

        </div>
    );
};

export default Scene9;
