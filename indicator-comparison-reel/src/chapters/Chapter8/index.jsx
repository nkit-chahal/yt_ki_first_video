import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';
import CandlestickChart from '../../components/CandlestickChart';
import { DEMO_DATA } from '../../data/chartData';

// Calculate VWAP
const calculateVWAP = (data) => {
    let cumulativeTPV = 0, cumulativeVolume = 0;
    return data.map(d => {
        const typicalPrice = (d.high + d.low + d.close) / 3;
        cumulativeTPV += typicalPrice * d.volume;
        cumulativeVolume += d.volume;
        return cumulativeTPV / cumulativeVolume;
    });
};

const vwap = calculateVWAP(DEMO_DATA);

// Chapter 8: VWAP - Two-phase layout
const Chapter8 = ({ currentSegment = 0 }) => {
    const showChart = currentSegment >= 1;

    const indicatorLines = showChart ? [{ data: vwap, color: '#F59E0B', width: 3, delay: 0.5, duration: 1.5 }] : [];

    return (
        <ChapterWrapper chapterNum={8} title="VWAP">
            {/* Phase 1: Centered */}
            {!showChart && (
                <div className="flex flex-col items-center justify-center h-full px-20">
                    <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-7xl font-bold text-amber-400 mb-6">VWAP</h1>
                        <p className="text-3xl text-stone-300 max-w-3xl">
                            Volume Weighted Average Price
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Phase 2: Split */}
            {showChart && (
                <motion.div className="flex h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="w-2/5 flex flex-col justify-center px-12">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <SectionTitle>VWAP</SectionTitle>
                            <p className="text-lg text-stone-300 mb-6">Average price weighted by volume</p>
                        </motion.div>

                        <AnimatePresence>
                            {currentSegment >= 2 && (
                                <motion.div className="mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="info">
                                        <p className="text-stone-300"><span className="text-amber-400 font-bold">Institutional benchmark:</span> Measures execution quality</p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 3 && (
                                <motion.div className="space-y-3 mb-6" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                                    <p className="text-stone-300"><span className="text-green-400">Price above VWAP</span> → Bullish</p>
                                    <p className="text-stone-300"><span className="text-red-400">Price below VWAP</span> → Bearish</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 4 && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="success">
                                        <p className="text-stone-300"><span className="text-green-400 font-bold">Strategy:</span> Mean reversion when price deviates from VWAP</p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="w-3/5 flex items-center justify-center">
                        <motion.div className="chart-container" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
                            <CandlestickChart data={DEMO_DATA} width={900} height={550} showVolume={true} animationDelay={0} candleDelay={0.02} indicatorLines={indicatorLines} />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </ChapterWrapper>
    );
};

Chapter8.segmentCount = 5;
Chapter8.segmentIds = ['8_1', '8_2', '8_3', '8_4', '8_5'];

export default Chapter8;
