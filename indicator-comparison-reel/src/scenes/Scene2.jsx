import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scene 2: Trending Markets - Fixed vertical layout
const Scene2 = ({ currentSegment = 0 }) => {
    return (
        <div className="video-container flex flex-col items-center px-12 py-16">
            {/* Header */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-8xl mb-6">📈</div>
                <h1 className="text-6xl font-black text-green-400">TRENDING</h1>
                <p className="text-2xl text-stone-500 mt-3">Markets</p>
            </motion.div>

            {/* Content */}
            <div className="w-full flex-1 flex flex-col justify-center">
                {/* Use These */}
                <AnimatePresence>
                    {currentSegment >= 0 && (
                        <motion.div
                            className="mb-10"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
                                <span className="text-4xl">✅</span> USE
                            </h2>
                            <div className="space-y-5">
                                <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-6">
                                    <div className="text-3xl font-bold text-amber-400 mb-2">SMA / EMA</div>
                                    <p className="text-xl text-stone-400">Dynamic support & resistance</p>
                                </div>
                                <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-6">
                                    <div className="text-3xl font-bold text-amber-400 mb-2">MACD</div>
                                    <p className="text-xl text-stone-400">Confirm trend strength</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Avoid These */}
                <AnimatePresence>
                    {currentSegment >= 1 && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-3xl font-bold text-red-400 mb-6 flex items-center gap-3">
                                <span className="text-4xl">❌</span> AVOID
                            </h2>
                            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-red-400 mb-2">RSI for entries</div>
                                <p className="text-xl text-stone-400">Stays overbought in trends!</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

Scene2.segmentCount = 2;
Scene2.segmentIds = ['2_1', '2_2'];

export default Scene2;
