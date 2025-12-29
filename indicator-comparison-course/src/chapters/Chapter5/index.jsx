import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';

// Chapter 5: Reversal Trading
const Chapter5 = ({ currentSegment = 0 }) => {
    const showDetails = currentSegment >= 2;

    return (
        <ChapterWrapper chapterNum={5} title="Reversal Trading">
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
                                <div className="text-6xl mb-6">🔄</div>
                                <h1 className="text-7xl font-bold text-purple-400 mb-4">Reversal Trading</h1>
                                <p className="text-2xl text-stone-400">Catching trend changes early</p>
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
                                <span className="text-amber-400 font-bold">Divergence</span> is your best friend here!
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
                                <div className="text-2xl font-bold text-purple-400 mb-2">RSI Divergence</div>
                                <p className="text-stone-400">Price makes new high/low, RSI doesn't = potential reversal</p>
                            </motion.div>

                            <motion.div
                                className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-2xl font-bold text-amber-400 mb-2">MACD Divergence</div>
                                <p className="text-stone-400">Histogram shrinking while price extends = weakening momentum</p>
                            </motion.div>

                            <AnimatePresence>
                                {currentSegment >= 3 && (
                                    <motion.div
                                        className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <div className="text-2xl font-bold text-green-400 mb-2">OBV Divergence</div>
                                        <p className="text-stone-400">Volume leads price - smart money positioning</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Key Points */}
                    <div className="w-1/2 flex flex-col justify-center px-12">
                        <AnimatePresence>
                            {currentSegment >= 4 && (
                                <>
                                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
                                        <h2 className="text-4xl font-bold text-amber-400 mb-8">💡 PRO TIPS</h2>
                                    </motion.div>

                                    <div className="space-y-6">
                                        <motion.div
                                            className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <p className="text-stone-300">Wait for <span className="text-amber-400 font-bold">confirmation</span> - divergence alone isn't enough</p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <p className="text-stone-300">Multiple timeframe divergence = <span className="text-green-400 font-bold">stronger signal</span></p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <p className="text-stone-300">Combine with support/resistance for <span className="text-green-400 font-bold">best entries</span></p>
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

Chapter5.segmentCount = 5;
Chapter5.segmentIds = ['5_1', '5_2', '5_3', '5_4', '5_5'];

export default Chapter5;
