import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';
import CandlestickChart from '../../components/CandlestickChart';
import { DEMO_DATA, calculateRSI } from '../../data/chartData';

const rsi = calculateRSI(DEMO_DATA, 14);

// RSI Panel Component
const RSIPanel = ({ data, rsi, width, height, showRSI, showZones }) => {
    const padding = { left: 60, right: 40, top: 20, bottom: 30 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const xScale = (i) => padding.left + (i / (data.length - 1)) * chartWidth;
    const yScale = (val) => padding.top + (1 - val / 100) * chartHeight;

    const line70 = yScale(70);
    const line30 = yScale(30);

    return (
        <svg width={width} height={height}>
            {showZones && <motion.rect x={padding.left} y={padding.top} width={chartWidth} height={line70 - padding.top} fill="rgba(239, 68, 68, 0.1)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />}
            {showZones && <motion.rect x={padding.left} y={line30} width={chartWidth} height={chartHeight + padding.top - line30} fill="rgba(16, 185, 129, 0.1)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />}
            <line x1={padding.left} y1={line70} x2={width - padding.right} y2={line70} stroke="#EF4444" strokeWidth={1} strokeDasharray="4" />
            <text x={padding.left - 10} y={line70 + 4} textAnchor="end" fill="#EF4444" fontSize={12}>70</text>
            <line x1={padding.left} y1={line30} x2={width - padding.right} y2={line30} stroke="#10B981" strokeWidth={1} strokeDasharray="4" />
            <text x={padding.left - 10} y={line30 + 4} textAnchor="end" fill="#10B981" fontSize={12}>30</text>
            {showRSI && <motion.path d={rsi.map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`).join(' ')} stroke="#A855F7" strokeWidth={2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />}
        </svg>
    );
};

// Chapter 5: RSI - Two-phase layout
const Chapter5 = ({ currentSegment = 0 }) => {
    const showChart = currentSegment >= 1;
    const showRSI = currentSegment >= 2;
    const showZones = currentSegment >= 2;

    return (
        <ChapterWrapper chapterNum={5} title="Relative Strength Index (RSI)">
            {/* Phase 1: Centered */}
            {!showChart && (
                <div className="flex flex-col items-center justify-center h-full px-20">
                    <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-7xl font-bold text-purple-400 mb-6">RSI</h1>
                        <p className="text-3xl text-stone-300 max-w-3xl">
                            Relative Strength Index - A <span className="text-purple-400 font-bold">momentum oscillator</span>
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Phase 2: Split */}
            {showChart && (
                <motion.div className="flex h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="w-2/5 flex flex-col justify-center px-12">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <SectionTitle>RSI</SectionTitle>
                            <p className="text-lg text-stone-300 mb-4">Oscillates between 0 and 100</p>
                        </motion.div>

                        <AnimatePresence>
                            {currentSegment >= 2 && (
                                <motion.div className="space-y-3 mb-6" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-4 bg-red-500/30 border border-red-500 rounded" />
                                        <span className="text-stone-300">Above 70 = <span className="text-red-400">Overbought</span></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-4 bg-green-500/30 border border-green-500 rounded" />
                                        <span className="text-stone-300">Below 30 = <span className="text-green-400">Oversold</span></span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 3 && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="warning">
                                        <p className="text-stone-300"><span className="text-orange-400 font-bold">Warning:</span> RSI can stay extreme in strong trends</p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 4 && (
                                <motion.div className="mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <Callout type="info">
                                        <p className="text-stone-300"><span className="text-amber-400 font-bold">Pro tip:</span> RSI divergence is powerful</p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="w-3/5 flex flex-col items-center justify-center gap-4">
                        <motion.div className="chart-container" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
                            <CandlestickChart data={DEMO_DATA} width={900} height={320} showVolume={false} animationDelay={0} candleDelay={0.02} indicatorLines={[]} />
                        </motion.div>
                        <motion.div className="chart-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                            <RSIPanel data={DEMO_DATA} rsi={rsi} width={900} height={180} showRSI={showRSI} showZones={showZones} />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </ChapterWrapper>
    );
};

Chapter5.segmentCount = 5;
Chapter5.segmentIds = ['5_1', '5_2', '5_3', '5_4', '5_5'];

export default Chapter5;
