import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scene 3: Ranging Markets - Fixed vertical layout
const Scene3 = ({ currentSegment = 0 }) => {
    return (
        <div className="video-container flex flex-col items-center px-12 py-16">
            {/* Header */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-8xl mb-6">↔️</div>
                <h1 className="text-6xl font-black text-blue-400">RANGING</h1>
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
                                    <div className="text-3xl font-bold text-purple-400 mb-2">RSI</div>
                                    <p className="text-xl text-stone-400">Buy at 30, Sell at 70</p>
                                </div>
                                <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-6">
                                    <div className="text-3xl font-bold text-amber-400 mb-2">Stochastic</div>
                                    <p className="text-xl text-stone-400">Crossovers work great!</p>
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
                                <div className="text-3xl font-bold text-red-400 mb-2">MA Crossovers</div>
                                <p className="text-xl text-stone-400">Constant whipsaws!</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

Scene3.segmentCount = 2;
Scene3.segmentIds = ['3_1', '3_2'];

export default Scene3;
