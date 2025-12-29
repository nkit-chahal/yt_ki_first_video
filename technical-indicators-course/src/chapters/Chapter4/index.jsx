import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';
import CandlestickChart from '../../components/CandlestickChart';
import { DEMO_DATA, calculateMACD } from '../../data/chartData';

const macd = calculateMACD(DEMO_DATA);

// MACD Panel Component
const MACDPanel = ({ data, macd, width, height, showMACD, showSignal, showHistogram }) => {
    const padding = { left: 60, right: 40, top: 20, bottom: 30 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const allValues = [...macd.macdLine, ...macd.signalLine, ...macd.histogram];
    const minVal = Math.min(...allValues) * 1.1;
    const maxVal = Math.max(...allValues) * 1.1;
    const range = maxVal - minVal;

    const xScale = (i) => padding.left + (i / (data.length - 1)) * chartWidth;
    const yScale = (val) => padding.top + (1 - (val - minVal) / range) * chartHeight;
    const zeroLine = yScale(0);
    const barWidth = Math.max(4, chartWidth / data.length - 2);

    return (
        <svg width={width} height={height}>
            <line x1={padding.left} y1={zeroLine} x2={width - padding.right} y2={zeroLine} stroke="#44403B" strokeWidth={1} />
            {showHistogram && macd.histogram.map((val, i) => (
                <motion.rect key={`hist-${i}`} x={xScale(i) - barWidth / 2} y={val >= 0 ? yScale(val) : zeroLine} width={barWidth} height={Math.abs(yScale(val) - zeroLine)} fill={val >= 0 ? '#10B981' : '#EF4444'} opacity={0.6} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: i * 0.02 }} style={{ transformOrigin: `${xScale(i)}px ${zeroLine}px` }} />
            ))}
            {showMACD && <motion.path d={macd.macdLine.map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`).join(' ')} stroke="#F59E0B" strokeWidth={2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />}
            {showSignal && <motion.path d={macd.signalLine.map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`).join(' ')} stroke="#EF4444" strokeWidth={2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />}
        </svg>
    );
};

// Chapter 4: MACD - Two-phase layout
const Chapter4 = ({ currentSegment = 0 }) => {
    const showChart = currentSegment >= 1;
    const showMACD = currentSegment >= 2;
    const showSignal = currentSegment >= 3;
    const showHistogram = currentSegment >= 2;

    return (
        <ChapterWrapper chapterNum={4} title="MACD">
            {/* Phase 1: Centered content */}
            {!showChart && (
                <div className="flex flex-col items-center justify-center h-full px-20">
                    <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-7xl font-bold text-amber-400 mb-6">MACD</h1>
                        <p className="text-3xl text-stone-300 max-w-3xl">
                            Moving Average Convergence <span className="text-amber-400 font-bold">Divergence</span>
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Phase 2: Split layout */}
            {showChart && (
                <motion.div className="flex h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="w-2/5 flex flex-col justify-center px-12">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <SectionTitle>MACD</SectionTitle>
                        </motion.div>

                        <motion.div className="space-y-3 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-1 bg-amber-400 rounded" />
                                <span className="text-stone-300">MACD Line</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-1 bg-red-400 rounded" />
                                <span className="text-stone-300">Signal Line</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-4 bg-green-500/50 rounded" />
                                <span className="text-stone-300">Histogram</span>
                            </div>
                        </motion.div>

                        <AnimatePresence>
                            {currentSegment >= 3 && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="success">
                                        <p className="text-stone-300"><span className="text-green-400 font-bold">Bullish:</span> MACD crosses above signal</p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 4 && (
                                <motion.div className="mt-3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="danger">
                                        <p className="text-stone-300"><span className="text-red-400 font-bold">Bearish:</span> MACD crosses below signal</p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 5 && (
                                <motion.div className="mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <Callout type="warning">
                                        <p className="text-stone-300"><span className="text-orange-400 font-bold">Pro tip:</span> Divergence signals reversals</p>
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
                            <MACDPanel data={DEMO_DATA} macd={macd} width={900} height={180} showMACD={showMACD} showSignal={showSignal} showHistogram={showHistogram} />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </ChapterWrapper>
    );
};

Chapter4.segmentCount = 6;
Chapter4.segmentIds = ['4_1', '4_2', '4_3', '4_4', '4_5', '4_6'];

export default Chapter4;
