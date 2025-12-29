import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, Callout } from '../../components/Layout';

// Chapter 7: Conclusion
const Chapter7 = ({ currentSegment = 0 }) => {
    return (
        <ChapterWrapper chapterNum={7} title="Conclusion">
            <div className="flex flex-col items-center justify-center h-full px-20">
                {/* Title */}
                <AnimatePresence>
                    {currentSegment >= 0 && (
                        <motion.div
                            className="text-center mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl font-bold text-amber-400 mb-4">Key Takeaways</h1>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Key Points */}
                <div className="space-y-6 max-w-4xl">
                    <AnimatePresence>
                        {currentSegment >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Callout type="info">
                                    <p className="text-xl text-stone-300">
                                        <span className="text-amber-400 font-bold">1.</span> First, identify the market condition (trending, ranging, breakout, or reversal)
                                    </p>
                                </Callout>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {currentSegment >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Callout type="success">
                                    <p className="text-xl text-stone-300">
                                        <span className="text-green-400 font-bold">2.</span> Then choose indicators that work best in that condition
                                    </p>
                                </Callout>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {currentSegment >= 3 && (
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Callout type="warning">
                                    <p className="text-xl text-stone-300">
                                        <span className="text-orange-400 font-bold">3.</span> Always combine 2-3 complementary indicators, never rely on just one
                                    </p>
                                </Callout>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* CTA with Playlist Info */}
                <AnimatePresence>
                    {currentSegment >= 4 && (
                        <motion.div
                            className="mt-10 w-full max-w-4xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 rounded-2xl p-8 text-center">
                                <div className="text-stone-400 mb-2 text-lg">VIDEO 2 OF</div>
                                <p className="text-3xl font-bold text-amber-400 mb-4">Algo Trading with Python 🐍</p>
                                <p className="text-xl text-stone-300 mb-6">Subscribe & follow this playlist!</p>

                                <div className="flex justify-center gap-4 flex-wrap">
                                    <div className="bg-stone-800/50 rounded-xl px-4 py-2 text-stone-400">
                                        <span className="text-green-400">✓</span> Technical Indicators
                                    </div>
                                    <div className="bg-stone-800/50 rounded-xl px-4 py-2 text-stone-400">
                                        <span className="text-green-400">✓</span> When to Use Which
                                    </div>
                                    <div className="bg-amber-500/20 rounded-xl px-4 py-2 text-amber-400">
                                        Coming: Automated Bots 🤖
                                    </div>
                                    <div className="bg-purple-500/20 rounded-xl px-4 py-2 text-purple-400">
                                        Coming: RL Trading 🧠
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ChapterWrapper>
    );
};

Chapter7.segmentCount = 5;
Chapter7.segmentIds = ['7_1', '7_2', '7_3', '7_4', '7_5'];

export default Chapter7;
