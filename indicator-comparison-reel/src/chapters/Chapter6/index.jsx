import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';

// Chapter 6: Quick Reference - Indicator Matrix
const Chapter6 = ({ currentSegment = 0 }) => {
    return (
        <ChapterWrapper chapterNum={6} title="Quick Reference">
            <div className="flex flex-col items-center justify-center h-full px-16">
                {/* Title */}
                <AnimatePresence>
                    {currentSegment >= 0 && (
                        <motion.div
                            className="text-center mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl font-bold text-amber-400 mb-2">Quick Reference Matrix</h1>
                            <p className="text-xl text-stone-400">Which indicator for which market?</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Matrix Table */}
                <AnimatePresence>
                    {currentSegment >= 1 && (
                        <motion.div
                            className="w-full max-w-5xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="grid grid-cols-5 gap-2 text-center">
                                {/* Header Row */}
                                <div className="bg-stone-800 p-4 rounded-tl-xl"></div>
                                <div className="bg-green-500/20 p-4 text-green-400 font-bold">📈 Trending</div>
                                <div className="bg-blue-500/20 p-4 text-blue-400 font-bold">↔️ Ranging</div>
                                <div className="bg-orange-500/20 p-4 text-orange-400 font-bold">⚡ Breakout</div>
                                <div className="bg-purple-500/20 p-4 rounded-tr-xl text-purple-400 font-bold">🔄 Reversal</div>

                                {/* SMA/EMA Row */}
                                <div className="bg-stone-800 p-4 text-amber-400 font-bold text-left">SMA/EMA</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>
                                <div className="bg-red-500/10 p-4 text-3xl">❌</div>
                                <div className="bg-orange-500/10 p-4 text-3xl">⚠️</div>
                                <div className="bg-stone-800/50 p-4 text-3xl">➖</div>

                                {/* MACD Row */}
                                <div className="bg-stone-800 p-4 text-amber-400 font-bold text-left">MACD</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>
                                <div className="bg-stone-800/50 p-4 text-3xl">➖</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>

                                {/* RSI Row */}
                                <div className="bg-stone-800 p-4 text-purple-400 font-bold text-left">RSI</div>
                                <div className="bg-orange-500/10 p-4 text-3xl">⚠️</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>
                                <div className="bg-orange-500/10 p-4 text-3xl">⚠️</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>

                                {/* Stochastic Row */}
                                <div className="bg-stone-800 p-4 text-amber-400 font-bold text-left">Stochastic</div>
                                <div className="bg-red-500/10 p-4 text-3xl">❌</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>
                                <div className="bg-stone-800/50 p-4 text-3xl">➖</div>
                                <div className="bg-orange-500/10 p-4 text-3xl">⚠️</div>

                                {/* Volume Row */}
                                <div className="bg-stone-800 p-4 text-green-400 font-bold text-left">Volume/OBV</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>
                                <div className="bg-stone-800/50 p-4 text-3xl">➖</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>

                                {/* VWAP Row */}
                                <div className="bg-stone-800 p-4 rounded-bl-xl text-amber-400 font-bold text-left">VWAP</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>
                                <div className="bg-green-500/10 p-4 text-3xl">✅</div>
                                <div className="bg-stone-800/50 p-4 text-3xl">➖</div>
                                <div className="bg-stone-800/50 p-4 rounded-br-xl text-3xl">➖</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Legend */}
                <AnimatePresence>
                    {currentSegment >= 2 && (
                        <motion.div
                            className="flex gap-8 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">✅</span>
                                <span className="text-stone-400">Best choice</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">⚠️</span>
                                <span className="text-stone-400">Use with caution</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">❌</span>
                                <span className="text-stone-400">Avoid</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">➖</span>
                                <span className="text-stone-400">Neutral</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ChapterWrapper>
    );
};

Chapter6.segmentCount = 3;
Chapter6.segmentIds = ['6_1', '6_2', '6_3'];

export default Chapter6;
