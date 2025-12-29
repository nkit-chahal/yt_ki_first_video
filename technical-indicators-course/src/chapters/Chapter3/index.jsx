import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';
import CandlestickChart from '../../components/CandlestickChart';
import { DEMO_DATA, calculateEMA } from '../../data/chartData';

const ema9 = calculateEMA(DEMO_DATA, 9);
const ema21 = calculateEMA(DEMO_DATA, 21);

// Chapter 3: EMA - Two-phase layout
const Chapter3 = ({ currentSegment = 0 }) => {
    const showChart = currentSegment >= 2;
    const showEMA9 = currentSegment >= 2;
    const showEMA21 = currentSegment >= 3;

    const indicatorLines = [];
    if (showEMA9) indicatorLines.push({ data: ema9, color: '#F59E0B', width: 3, delay: 0, duration: 1 });
    if (showEMA21) indicatorLines.push({ data: ema21, color: '#FB923C', width: 3, delay: 0, duration: 1 });

    return (
        <ChapterWrapper chapterNum={3} title="Exponential Moving Average (EMA)">
            {/* Phase 1: Centered content */}
            {!showChart && (
                <div className="flex flex-col items-center justify-center h-full px-20">
                    <AnimatePresence>
                        {currentSegment >= 0 && (
                            <motion.div
                                className="text-center mb-12"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <h1 className="text-7xl font-bold text-amber-400 mb-6">EMA</h1>
                                <p className="text-3xl text-stone-300 max-w-3xl">
                                    The <span className="text-amber-400 font-bold">Exponential Moving Average</span> gives more weight to recent prices.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {currentSegment >= 1 && (
                            <motion.div
                                className="bg-amber-500/10 border border-amber-500/30 rounded-2xl px-16 py-10"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <p className="text-2xl text-stone-300 text-center">
                                    More <span className="text-amber-400 font-bold">responsive</span> to new information than the SMA
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Phase 2: Split layout with chart */}
            {showChart && (
                <motion.div className="flex h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="w-2/5 flex flex-col justify-center px-12">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <SectionTitle>EMA</SectionTitle>
                            <p className="text-lg text-stone-300 mb-6">More weight to recent prices</p>
                        </motion.div>

                        <AnimatePresence>
                            {currentSegment >= 3 && (
                                <motion.div className="space-y-3 mb-6" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-1 bg-amber-400 rounded" />
                                        <span className="text-stone-300">9-day EMA (Fast)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-1 bg-orange-400 rounded" />
                                        <span className="text-stone-300">21-day EMA (Medium)</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 4 && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="success">
                                        <p className="text-stone-300">
                                            <span className="text-green-400 font-bold">Crossover:</span> Fast EMA above slow = Bullish
                                        </p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="w-3/5 flex items-center justify-center">
                        <motion.div className="chart-container" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
                            <CandlestickChart data={DEMO_DATA} width={900} height={550} animationDelay={0} candleDelay={0.02} indicatorLines={indicatorLines} />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </ChapterWrapper>
    );
};

Chapter3.segmentCount = 5;
Chapter3.segmentIds = ['3_1', '3_2', '3_3', '3_4', '3_5'];

export default Chapter3;
