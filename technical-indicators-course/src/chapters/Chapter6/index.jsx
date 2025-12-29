import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';
import CandlestickChart from '../../components/CandlestickChart';
import { DEMO_DATA } from '../../data/chartData';

// Calculate Stochastic
const calculateStochastic = (data, period = 14) => {
    const k = [], d = [];
    for (let i = 0; i < data.length; i++) {
        if (i < period - 1) { k.push(50); d.push(50); }
        else {
            const slice = data.slice(i - period + 1, i + 1);
            const high = Math.max(...slice.map(c => c.high));
            const low = Math.min(...slice.map(c => c.low));
            const kVal = ((data[i].close - low) / (high - low)) * 100;
            k.push(kVal);
            d.push(k.length >= 3 ? (k[k.length - 1] + k[k.length - 2] + k[k.length - 3]) / 3 : kVal);
        }
    }
    return { k, d };
};

const stoch = calculateStochastic(DEMO_DATA);

// Stochastic Panel
const StochasticPanel = ({ data, stoch, width, height, showK, showD, showZones }) => {
    const padding = { left: 60, right: 40, top: 20, bottom: 30 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const xScale = (i) => padding.left + (i / (data.length - 1)) * chartWidth;
    const yScale = (val) => padding.top + (1 - val / 100) * chartHeight;
    const line80 = yScale(80), line20 = yScale(20);

    return (
        <svg width={width} height={height}>
            {showZones && <motion.rect x={padding.left} y={padding.top} width={chartWidth} height={line80 - padding.top} fill="rgba(239, 68, 68, 0.1)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />}
            {showZones && <motion.rect x={padding.left} y={line20} width={chartWidth} height={chartHeight + padding.top - line20} fill="rgba(16, 185, 129, 0.1)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />}
            <line x1={padding.left} y1={line80} x2={width - padding.right} y2={line80} stroke="#EF4444" strokeWidth={1} strokeDasharray="4" />
            <line x1={padding.left} y1={line20} x2={width - padding.right} y2={line20} stroke="#10B981" strokeWidth={1} strokeDasharray="4" />
            {showK && <motion.path d={stoch.k.map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`).join(' ')} stroke="#F59E0B" strokeWidth={2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />}
            {showD && <motion.path d={stoch.d.map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`).join(' ')} stroke="#FB923C" strokeWidth={2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }} />}
        </svg>
    );
};

// Chapter 6: Stochastic - Two-phase layout
const Chapter6 = ({ currentSegment = 0 }) => {
    const showChart = currentSegment >= 1;

    return (
        <ChapterWrapper chapterNum={6} title="Stochastic Oscillator">
            {/* Phase 1: Centered */}
            {!showChart && (
                <div className="flex flex-col items-center justify-center h-full px-20">
                    <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-7xl font-bold text-amber-400 mb-6">Stochastic</h1>
                        <p className="text-3xl text-stone-300 max-w-3xl">
                            Compares closing price to its <span className="text-amber-400 font-bold">price range</span> over a period
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Phase 2: Split */}
            {showChart && (
                <motion.div className="flex h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="w-2/5 flex flex-col justify-center px-12">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <SectionTitle>Stochastic</SectionTitle>
                        </motion.div>

                        <motion.div className="space-y-3 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-1 bg-amber-400 rounded" />
                                <span className="text-stone-300">%K - Fast line</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-1 bg-orange-400 rounded" />
                                <span className="text-stone-300">%D - Slow line</span>
                            </div>
                        </motion.div>

                        <AnimatePresence>
                            {currentSegment >= 2 && (
                                <motion.div className="space-y-3 mb-6" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-4 bg-red-500/30 border border-red-500 rounded" />
                                        <span className="text-stone-300">Above 80 = <span className="text-red-400">Overbought</span></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-4 bg-green-500/30 border border-green-500 rounded" />
                                        <span className="text-stone-300">Below 20 = <span className="text-green-400">Oversold</span></span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 3 && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="info">
                                        <p className="text-stone-300"><span className="text-amber-400 font-bold">Best for:</span> Ranging markets</p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 4 && (
                                <motion.div className="mt-3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="success">
                                        <p className="text-stone-300"><span className="text-green-400 font-bold">Buy:</span> %K crosses above %D in oversold</p>
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
                            <StochasticPanel data={DEMO_DATA} stoch={stoch} width={900} height={180} showK={true} showD={true} showZones={currentSegment >= 2} />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </ChapterWrapper>
    );
};

Chapter6.segmentCount = 5;
Chapter6.segmentIds = ['6_1', '6_2', '6_3', '6_4', '6_5'];

export default Chapter6;
