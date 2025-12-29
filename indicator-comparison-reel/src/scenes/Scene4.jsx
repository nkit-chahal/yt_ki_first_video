import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scene 4: Breakout Trading - Fixed vertical layout
const Scene4 = ({ currentSegment = 0 }) => {
    return (
        <div className="video-container flex flex-col items-center px-12 py-16">
            {/* Header */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-8xl mb-6">⚡</div>
                <h1 className="text-6xl font-black text-orange-400">BREAKOUT</h1>
                <p className="text-2xl text-stone-500 mt-3">Trading</p>
            </motion.div>

            {/* Key message */}
            <AnimatePresence>
                {currentSegment >= 0 && (
                    <motion.div
                        className="w-full bg-orange-500/10 border-2 border-orange-500/30 rounded-3xl p-8 mb-10 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <p className="text-4xl font-bold text-orange-400">
                            Volume is EVERYTHING! 📊
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content */}
            <div className="w-full flex-1 flex flex-col justify-center">
                {/* Use These */}
                <AnimatePresence>
                    {currentSegment >= 0 && (
                        <motion.div
                            className="mb-10"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
                                <span className="text-4xl">✅</span> USE
                            </h2>
                            <div className="space-y-5">
                                <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-6">
                                    <div className="text-3xl font-bold text-green-400 mb-2">Volume / OBV</div>
                                    <p className="text-xl text-stone-400">High vol = Real breakout</p>
                                </div>
                                <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-6">
                                    <div className="text-3xl font-bold text-blue-400 mb-2">Volume Profile</div>
                                    <p className="text-xl text-stone-400">Find low volume nodes</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Warning */}
                <AnimatePresence>
                    {currentSegment >= 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2 className="text-3xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                                <span className="text-4xl">⚠️</span> CAREFUL
                            </h2>
                            <div className="bg-orange-500/10 border-2 border-orange-500/30 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-orange-400 mb-2">RSI says "overbought"</div>
                                <p className="text-xl text-stone-400">Don't exit too early!</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

Scene4.segmentCount = 2;
Scene4.segmentIds = ['4_1', '4_2'];

export default Scene4;
