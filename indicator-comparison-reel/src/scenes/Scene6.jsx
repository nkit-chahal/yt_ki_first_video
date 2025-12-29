import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scene 6: CTA - Fixed vertical layout
const Scene6 = ({ currentSegment = 0 }) => {
    return (
        <div className="video-container flex flex-col items-center justify-center px-12 py-16">
            {/* Main CTA */}
            <AnimatePresence>
                {currentSegment >= 0 && (
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <motion.div
                            className="text-9xl mb-8"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            🐍
                        </motion.div>
                        <h1 className="text-5xl font-black text-amber-400 mb-4">
                            Algo Trading
                        </h1>
                        <h1 className="text-5xl font-black text-amber-400 mb-4">
                            with Python
                        </h1>
                        <p className="text-2xl text-stone-400">Full Playlist</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Playlist items */}
            <AnimatePresence>
                {currentSegment >= 0 && (
                    <motion.div
                        className="w-full space-y-4 mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="bg-stone-800/50 rounded-2xl p-5 flex items-center gap-4">
                            <span className="text-green-400 text-3xl">✓</span>
                            <span className="text-2xl text-stone-300">Technical Indicators</span>
                        </div>
                        <div className="bg-stone-800/50 rounded-2xl p-5 flex items-center gap-4">
                            <span className="text-green-400 text-3xl">✓</span>
                            <span className="text-2xl text-stone-300">When to Use Which</span>
                        </div>
                        <div className="bg-amber-500/20 rounded-2xl p-5 flex items-center gap-4">
                            <span className="text-amber-400 text-3xl">🔜</span>
                            <span className="text-2xl text-amber-400">Automated Bots</span>
                        </div>
                        <div className="bg-purple-500/20 rounded-2xl p-5 flex items-center gap-4">
                            <span className="text-purple-400 text-3xl">🔜</span>
                            <span className="text-2xl text-purple-400">RL Trading</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subscribe */}
            <AnimatePresence>
                {currentSegment >= 1 && (
                    <motion.div
                        className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl px-16 py-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <p className="text-4xl font-bold text-stone-900">SUBSCRIBE 🔔</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

Scene6.segmentCount = 2;
Scene6.segmentIds = ['6_1', '6_2'];

export default Scene6;
