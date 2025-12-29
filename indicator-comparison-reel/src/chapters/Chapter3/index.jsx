import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';

// Chapter 3: Ranging/Sideways Markets
const Chapter3 = ({ currentSegment = 0 }) => {
    const showDetails = currentSegment >= 2;

    return (
        <ChapterWrapper chapterNum={3} title="Ranging Markets">
            {/* Phase 1: Centered intro */}
            {!showDetails && (
                <div className="flex flex-col items-center justify-center h-full px-20">
                    <AnimatePresence>
                        {currentSegment >= 0 && (
                            <motion.div
                                className="text-center mb-12"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="text-6xl mb-6">↔️</div>
                                <h1 className="text-7xl font-bold text-blue-400 mb-4">Ranging Markets</h1>
                                <p className="text-2xl text-stone-400">When price moves sideways between support and resistance</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {currentSegment >= 1 && (
                            <motion.div
                                className="text-3xl text-stone-300 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                This is where oscillators shine!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Phase 2: Split layout */}
            {showDetails && (
                <motion.div className="flex h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {/* Best Indicators */}
                    <div className="w-1/2 flex flex-col justify-center px-12 border-r border-stone-700">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <h2 className="text-4xl font-bold text-green-400 mb-8">✅ USE THESE</h2>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.div
                                className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="text-2xl font-bold text-purple-400 mb-2">RSI</div>
                                <p className="text-stone-400">Buy at 30, sell at 70 works well in ranges</p>
                            </motion.div>

                            <motion.div
                                className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-2xl font-bold text-amber-400 mb-2">Stochastic</div>
                                <p className="text-stone-400">Buy oversold, sell overbought - crossovers are reliable</p>
                            </motion.div>

                            <AnimatePresence>
                                {currentSegment >= 3 && (
                                    <motion.div
                                        className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <div className="text-2xl font-bold text-blue-400 mb-2">Bollinger Bands</div>
                                        <p className="text-stone-400">Price bounces between bands in ranges</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Avoid These */}
                    <div className="w-1/2 flex flex-col justify-center px-12">
                        <AnimatePresence>
                            {currentSegment >= 4 && (
                                <>
                                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
                                        <h2 className="text-4xl font-bold text-red-400 mb-8">❌ AVOID THESE</h2>
                                    </motion.div>

                                    <div className="space-y-6">
                                        <motion.div
                                            className="bg-red-500/10 border border-red-500/30 rounded-xl p-6"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <div className="text-2xl font-bold text-red-400 mb-2">Moving Average Crossovers</div>
                                            <p className="text-stone-400">Whipsaws galore - constant false signals</p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-red-500/10 border border-red-500/30 rounded-xl p-6"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <div className="text-2xl font-bold text-red-400 mb-2">Trend-Following Strategies</div>
                                            <p className="text-stone-400">There's no trend to follow!</p>
                                        </motion.div>
                                    </div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </ChapterWrapper>
    );
};

Chapter3.segmentCount = 5;
Chapter3.segmentIds = ['3_1', '3_2', '3_3', '3_4', '3_5'];

export default Chapter3;
