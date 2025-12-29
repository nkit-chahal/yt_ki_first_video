import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';

// Chapter 2: Trending Markets - Which Indicators Work Best
const Chapter2 = ({ currentSegment = 0 }) => {
    const showDetails = currentSegment >= 2;

    return (
        <ChapterWrapper chapterNum={2} title="Trending Markets">
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
                                <div className="text-6xl mb-6">📈</div>
                                <h1 className="text-7xl font-bold text-green-400 mb-4">Trending Markets</h1>
                                <p className="text-2xl text-stone-400">When price is moving in a clear direction</p>
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
                                Which indicators work best here?
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Phase 2: Split layout with recommendations */}
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
                                <div className="text-2xl font-bold text-amber-400 mb-2">Moving Averages (SMA/EMA)</div>
                                <p className="text-stone-400">Ride the trend with dynamic support/resistance</p>
                            </motion.div>

                            <motion.div
                                className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-2xl font-bold text-amber-400 mb-2">MACD</div>
                                <p className="text-stone-400">Confirm trend strength and momentum</p>
                            </motion.div>

                            <AnimatePresence>
                                {currentSegment >= 3 && (
                                    <motion.div
                                        className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <div className="text-2xl font-bold text-amber-400 mb-2">ADX (if available)</div>
                                        <p className="text-stone-400">Measures trend strength (above 25 = trending)</p>
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
                                            <div className="text-2xl font-bold text-red-400 mb-2">RSI for Buy/Sell Signals</div>
                                            <p className="text-stone-400">Can stay overbought/oversold for extended periods</p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-red-500/10 border border-red-500/30 rounded-xl p-6"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <div className="text-2xl font-bold text-red-400 mb-2">Stochastic for Reversals</div>
                                            <p className="text-stone-400">Gives false reversal signals in trends</p>
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

Chapter2.segmentCount = 5;
Chapter2.segmentIds = ['2_1', '2_2', '2_3', '2_4', '2_5'];

export default Chapter2;
