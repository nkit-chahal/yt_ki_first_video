import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';

// Chapter 1: Introduction - When to Use Which Indicator
const Chapter1 = ({ currentSegment = 0 }) => {
    return (
        <ChapterWrapper chapterNum={1} title="Introduction">
            <div className="flex flex-col items-center justify-center h-full px-20">
                {/* Title */}
                <AnimatePresence>
                    {currentSegment >= 0 && (
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-6xl font-bold text-stone-200 mb-4">When to Use</h1>
                            <h1 className="text-7xl font-bold text-amber-400">Which Indicator?</h1>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Subtitle */}
                <AnimatePresence>
                    {currentSegment >= 1 && (
                        <motion.div
                            className="max-w-3xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <Callout type="info">
                                <p className="text-2xl text-stone-300 text-center">
                                    Knowing <span className="text-amber-400 font-bold">what</span> an indicator does is just the start.<br />
                                    Knowing <span className="text-amber-400 font-bold">when</span> to use it is the real skill.
                                </p>
                            </Callout>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Categories Preview */}
                <AnimatePresence>
                    {currentSegment >= 2 && (
                        <motion.div
                            className="flex gap-8 mt-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-2">📈</div>
                                <div className="text-lg font-bold text-green-400">Trending</div>
                            </div>
                            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-2">↔️</div>
                                <div className="text-lg font-bold text-blue-400">Ranging</div>
                            </div>
                            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-2">⚡</div>
                                <div className="text-lg font-bold text-orange-400">Breakout</div>
                            </div>
                            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-2">🔄</div>
                                <div className="text-lg font-bold text-purple-400">Reversal</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ChapterWrapper>
    );
};

Chapter1.segmentCount = 3;
Chapter1.segmentIds = ['1_1', '1_2', '1_3'];

export default Chapter1;
