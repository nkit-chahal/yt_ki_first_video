import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scene 5: Reversal Trading - Fixed layout
const Scene5 = ({ currentSegment = 0 }) => {
    return (
        <div className="video-container flex flex-col items-center px-12 py-16">
            {/* Header - Centered */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-8xl mb-6">🔄</div>
                <h1 className="text-6xl font-black text-purple-400">REVERSAL</h1>
                <p className="text-2xl text-stone-500 mt-3">Trading</p>
            </motion.div>

            {/* Key message - Centered */}
            <AnimatePresence>
                {currentSegment >= 0 && (
                    <motion.div
                        className="w-full bg-purple-500/10 border-2 border-purple-500/30 rounded-3xl p-8 mb-10 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <p className="text-4xl font-bold text-purple-400">
                            DIVERGENCE is
                        </p>
                        <p className="text-4xl font-bold text-purple-400">
                            your best friend! 👀
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Indicator cards - Stacked vertically */}
            <AnimatePresence>
                {currentSegment >= 0 && (
                    <motion.div
                        className="w-full flex-1 flex flex-col justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
                            <span className="text-4xl">✅</span> LOOK FOR
                        </h2>

                        <div className="space-y-5">
                            <motion.div
                                className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="text-3xl font-bold text-purple-400 mb-2">RSI Divergence</div>
                                <p className="text-xl text-stone-400">Price ↑ but RSI ↓ = Warning!</p>
                            </motion.div>

                            <motion.div
                                className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="text-3xl font-bold text-amber-400 mb-2">MACD Divergence</div>
                                <p className="text-xl text-stone-400">Histogram shrinking = Weak</p>
                            </motion.div>

                            <motion.div
                                className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <div className="text-3xl font-bold text-green-400 mb-2">OBV Divergence</div>
                                <p className="text-xl text-stone-400">Smart money moving out</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

Scene5.segmentCount = 1;
Scene5.segmentIds = ['5_1'];

export default Scene5;
