import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';

// Chapter 4: Breakout Trading
const Chapter4 = ({ currentSegment = 0 }) => {
    const showDetails = currentSegment >= 2;

    return (
        <ChapterWrapper chapterNum={4} title="Breakout Trading">
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
                                <div className="text-6xl mb-6">⚡</div>
                                <h1 className="text-7xl font-bold text-orange-400 mb-4">Breakout Trading</h1>
                                <p className="text-2xl text-stone-400">When price breaks out of consolidation</p>
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
                                Volume confirmation is <span className="text-green-400 font-bold">critical</span> here!
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
                                <div className="text-2xl font-bold text-green-400 mb-2">Volume / OBV</div>
                                <p className="text-stone-400">Breakout + high volume = valid. Low volume = fake.</p>
                            </motion.div>

                            <motion.div
                                className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-2xl font-bold text-blue-400 mb-2">Volume Profile</div>
                                <p className="text-stone-400">Low volume nodes = price moves fast through breakout zones</p>
                            </motion.div>

                            <AnimatePresence>
                                {currentSegment >= 3 && (
                                    <motion.div
                                        className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <div className="text-2xl font-bold text-amber-400 mb-2">MACD Histogram</div>
                                        <p className="text-stone-400">Expanding histogram confirms breakout momentum</p>
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
                                        <h2 className="text-4xl font-bold text-red-400 mb-8">⚠️ BE CAREFUL WITH</h2>
                                    </motion.div>

                                    <div className="space-y-6">
                                        <motion.div
                                            className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <div className="text-2xl font-bold text-orange-400 mb-2">RSI Overbought Signals</div>
                                            <p className="text-stone-400">Breakouts WILL trigger overbought - don't exit too early</p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <div className="text-2xl font-bold text-orange-400 mb-2">Slow Moving Averages</div>
                                            <p className="text-stone-400">Too lagging - you'll miss the initial move</p>
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

Chapter4.segmentCount = 5;
Chapter4.segmentIds = ['4_1', '4_2', '4_3', '4_4', '4_5'];

export default Chapter4;
