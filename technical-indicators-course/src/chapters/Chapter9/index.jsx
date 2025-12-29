import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';
import { DEMO_DATA } from '../../data/chartData';

// Calculate Volume Profile
const calculateVolumeProfile = (data, bins = 12) => {
    const prices = data.flatMap(d => [d.high, d.low]);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const binSize = (maxPrice - minPrice) / bins;

    const profile = Array(bins).fill(0).map((_, i) => ({ priceLevel: minPrice + binSize * i + binSize / 2, volume: 0 }));

    data.forEach(d => {
        const avgPrice = (d.high + d.low + d.close) / 3;
        const binIndex = Math.min(Math.floor((avgPrice - minPrice) / binSize), bins - 1);
        if (binIndex >= 0 && binIndex < bins) profile[binIndex].volume += d.volume;
    });

    return profile;
};

const volumeProfile = calculateVolumeProfile(DEMO_DATA, 12);
const maxVolume = Math.max(...volumeProfile.map(p => p.volume));
const pocIndex = volumeProfile.findIndex(p => p.volume === maxVolume);

// Volume Profile Panel
const VolumeProfilePanel = ({ data, profile, width, height, showProfile, showPOC }) => {
    const padding = { left: 80, right: 150, top: 20, bottom: 30 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const prices = data.flatMap(d => [d.high, d.low]);
    const minPrice = Math.min(...prices) * 0.99;
    const maxPrice = Math.max(...prices) * 1.01;

    const yScale = (price) => padding.top + (1 - (price - minPrice) / (maxPrice - minPrice)) * chartHeight;
    const barHeight = chartHeight / profile.length - 2;
    const maxBarWidth = 100;
    const poc = profile[pocIndex];

    return (
        <svg width={width} height={height}>
            {data.map((d, i) => {
                const x = padding.left + (i / (data.length - 1)) * chartWidth;
                const isBullish = d.close > d.open;
                return (
                    <g key={i}>
                        <line x1={x} y1={yScale(d.high)} x2={x} y2={yScale(d.low)} stroke={isBullish ? '#10B981' : '#EF4444'} strokeWidth={1} />
                        <rect x={x - 3} y={yScale(Math.max(d.open, d.close))} width={6} height={Math.max(2, Math.abs(yScale(d.open) - yScale(d.close)))} fill={isBullish ? '#10B981' : '#EF4444'} />
                    </g>
                );
            })}
            {showProfile && profile.map((p, i) => {
                const y = yScale(p.priceLevel);
                const barW = (p.volume / maxVolume) * maxBarWidth;
                const isPOC = i === pocIndex;
                return (
                    <motion.rect key={i} x={width - padding.right - barW} y={y - barHeight / 2} width={barW} height={barHeight} fill={isPOC && showPOC ? '#F59E0B' : '#3B82F6'} opacity={isPOC && showPOC ? 1 : 0.6} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: i * 0.1 }} style={{ transformOrigin: 'right' }} />
                );
            })}
            {showPOC && poc && <motion.line x1={padding.left} y1={yScale(poc.priceLevel)} x2={width - padding.right} y2={yScale(poc.priceLevel)} stroke="#F59E0B" strokeWidth={2} strokeDasharray="8,4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />}
            {showPOC && poc && <motion.text x={padding.left + 10} y={yScale(poc.priceLevel) - 8} fill="#F59E0B" fontSize={14} fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>POC</motion.text>}
        </svg>
    );
};

// Chapter 9: Volume Profile - Two-phase layout
const Chapter9 = ({ currentSegment = 0 }) => {
    const showChart = currentSegment >= 1;

    return (
        <ChapterWrapper chapterNum={9} title="Volume Profile">
            {/* Phase 1: Centered */}
            {!showChart && (
                <div className="flex flex-col items-center justify-center h-full px-20">
                    <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-7xl font-bold text-blue-400 mb-6">Volume Profile</h1>
                        <p className="text-3xl text-stone-300 max-w-3xl">
                            Displays trading activity at <span className="text-amber-400 font-bold">specific price levels</span>
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Phase 2: Split */}
            {showChart && (
                <motion.div className="flex h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="w-1/3 flex flex-col justify-center px-10">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <SectionTitle>Volume Profile</SectionTitle>
                        </motion.div>

                        <AnimatePresence>
                            {currentSegment >= 1 && (
                                <motion.div className="mb-6" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-4 bg-amber-500 rounded" />
                                        <span className="text-stone-300"><span className="text-amber-400 font-bold">POC</span> - Highest volume</span>
                                    </div>
                                    <p className="text-stone-400">Key support/resistance level</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 2 && (
                                <motion.div className="space-y-2 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <p className="text-stone-300"><span className="text-blue-400 font-bold">High Volume:</span> Magnets for price</p>
                                    <p className="text-stone-300"><span className="text-stone-500 font-bold">Low Volume:</span> Price moves through quickly</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {currentSegment >= 3 && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Callout type="success">
                                        <p className="text-stone-300"><span className="text-green-400 font-bold">Key insight:</span> Most significant price levels based on actual trading</p>
                                    </Callout>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="w-2/3 flex items-center justify-center">
                        <motion.div className="chart-container" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
                            <VolumeProfilePanel data={DEMO_DATA} profile={volumeProfile} width={1000} height={550} showProfile={currentSegment >= 1} showPOC={currentSegment >= 1} />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </ChapterWrapper>
    );
};

Chapter9.segmentCount = 4;
Chapter9.segmentIds = ['9_1', '9_2', '9_3', '9_4'];

export default Chapter9;
