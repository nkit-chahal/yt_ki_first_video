import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';

// Chapter 1: Introduction to Technical Analysis
// Three categories shown horizontally in a row

const segments = [
    {
        id: "1_1",
        content: ({ isActive }) => (
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <SectionTitle subtitle="Understanding the tools that move markets">
                            Technical Indicators
                        </SectionTitle>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
    {
        id: "1_2",
        content: ({ isActive }) => (
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="max-w-4xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Callout type="info">
                            <p className="text-2xl text-stone-300 text-center">
                                Technical indicators are <span className="text-amber-400 font-bold">mathematical calculations</span> based on price and volume that help traders predict future price movements.
                            </p>
                        </Callout>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
    {
        id: "1_3",
        content: ({ isActive }) => (
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="text-4xl text-stone-300 font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        Three main categories:
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
    {
        id: "1_4",
        // Show TREND box
        content: ({ isActive }) => null // Handled in CategoryBoxes
    },
    {
        id: "1_5",
        // Show MOMENTUM box
        content: ({ isActive }) => null // Handled in CategoryBoxes
    },
    {
        id: "1_6",
        // Show VOLUME box
        content: ({ isActive }) => null // Handled in CategoryBoxes
    },
    {
        id: "1_7",
        content: ({ isActive }) => (
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="text-3xl text-stone-400 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        Let's start with the most basic: <span className="text-amber-400 font-bold">Simple Moving Average</span>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    }
];

// Category boxes component - displays them horizontally
const CategoryBoxes = ({ currentSegment }) => {
    const showTrend = currentSegment >= 3;
    const showMomentum = currentSegment >= 4;
    const showVolume = currentSegment >= 5;

    if (currentSegment < 3) return null;

    return (
        <div className="flex gap-8 justify-center">
            {/* TREND */}
            <AnimatePresence>
                {showTrend && (
                    <motion.div
                        className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 text-center min-w-[200px]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="text-5xl mb-3">📈</div>
                        <div className="text-2xl font-bold text-amber-400 mb-2">TREND</div>
                        <div className="text-lg text-stone-400">SMA, EMA, MACD</div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MOMENTUM */}
            <AnimatePresence>
                {showMomentum && (
                    <motion.div
                        className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 text-center min-w-[200px]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="text-5xl mb-3">⚡</div>
                        <div className="text-2xl font-bold text-orange-400 mb-2">MOMENTUM</div>
                        <div className="text-lg text-stone-400">RSI, Stochastic</div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* VOLUME */}
            <AnimatePresence>
                {showVolume && (
                    <motion.div
                        className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8 text-center min-w-[200px]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="text-5xl mb-3">📊</div>
                        <div className="text-2xl font-bold text-yellow-400 mb-2">VOLUME</div>
                        <div className="text-lg text-stone-400">OBV, VWAP, Profile</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Chapter1 = ({ currentSegment = 0 }) => {
    return (
        <ChapterWrapper chapterNum={1} title="Introduction to Technical Analysis">
            <div className="flex flex-col items-center justify-center h-full px-20 gap-8">
                {/* Title and intro segments */}
                {segments.slice(0, 3).map((segment, index) => {
                    const isActive = index <= currentSegment;
                    const Segment = segment.content;
                    return <div key={segment.id}><Segment isActive={isActive} /></div>;
                })}

                {/* Category boxes - displayed horizontally */}
                <CategoryBoxes currentSegment={currentSegment} />

                {/* Final segment */}
                {currentSegment >= 6 && (
                    <div>
                        {segments[6].content({ isActive: true })}
                    </div>
                )}
            </div>
        </ChapterWrapper>
    );
};

Chapter1.segmentCount = segments.length;
Chapter1.segmentIds = segments.map(s => s.id);

export default Chapter1;
