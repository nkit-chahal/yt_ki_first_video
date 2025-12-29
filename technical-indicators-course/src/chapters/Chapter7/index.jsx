import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';
import CandlestickChart from '../../components/CandlestickChart';
import { DEMO_DATA } from '../../data/chartData';

// Calculate OBV
const calculateOBV = (data) => {
    const obv = [0];
    for (let i = 1; i < data.length; i++) {
        if (data[i].close > data[i - 1].close) obv.push(obv[i - 1] + data[i].volume);
        else if (data[i].close < data[i - 1].close) obv.push(obv[i - 1] - data[i].volume);
        else obv.push(obv[i - 1]);
    }
    return obv;
};

const obv = calculateOBV(DEMO_DATA);

// OBV Panel
const OBVPanel = ({ data, obv, width, height, showOBV }) => {
    const padding = { left: 60, right: 40, top: 20, bottom: 30 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const minVal = Math.min(...obv);
    const maxVal = Math.max(...obv);
    const range = maxVal - minVal;

    const xScale = (i) => padding.left + (i / (data.length - 1)) * chartWidth;
    const yScale = (val) => padding.top + (1 - (val - minVal) / range) * chartHeight;
    const zeroY = yScale((minVal + maxVal) / 2);

    return (
        <svg width={width} height={height}>
            <line x1={padding.left} y1={zeroY} x2={width - padding.right} y2={zeroY} stroke="#44403B" strokeWidth={1} />
            {showOBV && <motion.path d={obv.map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`).join(' ')} stroke="#10B981" strokeWidth={2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />}
            <text x={padding.left + 10} y={padding.top + 20} fill="#10B981" fontSize={14} fontWeight="bold">OBV</text>
        </svg>
    );
};

// Chapter 7: OBV - Two-phase layout
const Chapter7 = ({ currentSegment = 0 }) => {
    const showChart = currentSegment >= 1;
    const showOBV = currentSegment >= 2;

    return (
        <ChapterWrapper chapterNum={7} title="On-Balance Volume (OBV)">
            {/* Phase 1: Centered */}
            {!showChart && (
                <div className="flex flex-col items-center justify-center h-full px-20">
                    <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-7xl font-bold text-green-400 mb-6">OBV</h1>
                        <p className="text-3xl text-stone-300 max-w-3xl">
                            On-Balance Volume adds volume on up days, subtracts on down days
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Phase 2: Split */}
            {showChart && (
                <motion.div className="flex h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="w-2/5 flex flex-col justify-center px-12">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <SectionTitle>OBV</SectionTitle>
                        </motion.div>

                        <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                            <Callout type="info">
                                <p className="text-stone-300">Core idea: <span className="text-amber-400 font-bold">Volume precedes price</span></p>
                            </Callout>
                        </motion.div>

                        <AnimatePresence>
                            {currentSegment >= 2 && (
                                <motion.div className="space-y-3 mb-6" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                                    <p className="text-stone-300"><span className="text-green-400">↑ OBV rising + price flat</span> = Accumulating</p>
                                    <p className="text-stone-300"><span className="text-red-400">↓ OBV falling + price flat</span> = Distributing</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 3 && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="success">
                                        <p className="text-stone-300"><span className="text-green-400 font-bold">Key use:</span> OBV divergence is a powerful confirmation tool</p>
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
                            <OBVPanel data={DEMO_DATA} obv={obv} width={900} height={180} showOBV={showOBV} />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </ChapterWrapper>
    );
};

Chapter7.segmentCount = 4;
Chapter7.segmentIds = ['7_1', '7_2', '7_3', '7_4'];

export default Chapter7;
