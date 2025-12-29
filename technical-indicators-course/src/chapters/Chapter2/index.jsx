import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Formula, Callout } from '../../components/Layout';
import CandlestickChart from '../../components/CandlestickChart';
import { DEMO_DATA, calculateSMA } from '../../data/chartData';

// Pre-calculate SMAs
const sma5 = calculateSMA(DEMO_DATA, 5);
const sma20 = calculateSMA(DEMO_DATA, 20);

// Chapter 2: SMA - Two-phase layout
// Phase 1 (segments 0-1): Centered, large content
// Phase 2 (segments 2+): Split layout with chart

const Chapter2 = ({ currentSegment = 0 }) => {
    const showChart = currentSegment >= 2;
    const showSMA5 = currentSegment >= 3;
    const showSMA20 = currentSegment >= 4;

    const indicatorLines = [];
    if (showSMA5) {
        indicatorLines.push({ data: sma5, color: '#F59E0B', width: 3, delay: 0, duration: 1 });
    }
    if (showSMA20) {
        indicatorLines.push({ data: sma20, color: '#FB923C', width: 3, delay: 0, duration: 1 });
    }

    return (
        <ChapterWrapper chapterNum={2} title="Simple Moving Average (SMA)">
            {/* Phase 1: Centered content (no chart yet) */}
            {!showChart && (
                <div className="flex flex-col items-center justify-center h-full px-20">
                    {/* Title - Large centered */}
                    <AnimatePresence>
                        {currentSegment >= 0 && (
                            <motion.div
                                className="text-center mb-12"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -200 }}
                            >
                                <h1 className="text-7xl font-bold text-amber-400 mb-6">SMA</h1>
                                <p className="text-3xl text-stone-300 max-w-3xl">
                                    The <span className="text-amber-400 font-bold">Simple Moving Average</span> calculates the average closing price over a specific period.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Formula - Large centered */}
                    <AnimatePresence>
                        {currentSegment >= 1 && (
                            <motion.div
                                className="bg-stone-800/50 border border-stone-700 rounded-2xl px-16 py-10"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, x: -200 }}
                            >
                                <div className="font-mono text-4xl text-stone-200 text-center">
                                    SMA = (P₁ + P₂ + ... + Pₙ) / n
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Phase 2: Split layout with chart */}
            {showChart && (
                <motion.div
                    className="flex h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {/* Left side - Text content (smaller now) */}
                    <div className="w-2/5 flex flex-col justify-center px-12">
                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <SectionTitle>SMA</SectionTitle>
                            <p className="text-lg text-stone-300 mb-6">
                                The average closing price over a specific period.
                            </p>
                        </motion.div>

                        {/* Formula */}
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Formula>SMA = (P₁ + ... + Pₙ) / n</Formula>
                        </motion.div>

                        {/* SMA Legend */}
                        <AnimatePresence>
                            {currentSegment >= 3 && (
                                <motion.div
                                    className="space-y-3 mb-6"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-1 bg-amber-400 rounded" />
                                        <span className="text-stone-300">5-day SMA (Fast)</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 4 && (
                                <motion.div
                                    className="space-y-3 mb-6"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-1 bg-orange-400 rounded" />
                                        <span className="text-stone-300">20-day SMA (Slow)</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Buy Signal */}
                        <AnimatePresence>
                            {currentSegment >= 5 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <Callout type="success">
                                        <p className="text-stone-300">
                                            <span className="text-green-400 font-bold">↑ Buy:</span> Fast SMA crosses above slow
                                        </p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Sell Signal */}
                        <AnimatePresence>
                            {currentSegment >= 6 && (
                                <motion.div
                                    className="mt-3"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <Callout type="danger">
                                        <p className="text-stone-300">
                                            <span className="text-red-400 font-bold">↓ Sell:</span> Fast SMA crosses below slow
                                        </p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right side - Chart */}
                    <div className="w-3/5 flex items-center justify-center">
                        <motion.div
                            className="chart-container"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <CandlestickChart
                                data={DEMO_DATA}
                                width={900}
                                height={550}
                                animationDelay={0}
                                candleDelay={0.02}
                                indicatorLines={indicatorLines}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </ChapterWrapper>
    );
};

Chapter2.segmentCount = 7;
Chapter2.segmentIds = ['2_1', '2_2', '2_3', '2_4', '2_5', '2_6', '2_7'];

export default Chapter2;
