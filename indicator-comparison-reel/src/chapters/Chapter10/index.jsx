import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterWrapper, SectionTitle, Callout } from '../../components/Layout';

// Chapter 10: Conclusion - Segment-based
const segments = [
    {
        id: "10_1",
        content: ({ isActive }) => (
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                    >
                        <SectionTitle>Key Takeaways</SectionTitle>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
    {
        id: "10_2",
        content: ({ isActive }) => (
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Callout type="warning">
                            <p className="text-xl text-stone-300 text-center">
                                No indicator works perfectly on its own
                            </p>
                        </Callout>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
    {
        id: "10_3",
        content: ({ isActive }) => (
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <p className="text-2xl text-stone-300 text-center">
                            The best traders <span className="text-amber-400 font-bold">combine indicators</span> with price action and market structure
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
    {
        id: "10_4",
        content: ({ isActive }) => (
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="mt-8 space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p className="text-xl text-stone-400 text-center">Start simple. Master one or two indicators before adding more.</p>
                        <p className="text-xl text-stone-400 text-center">Remember: indicators <span className="text-red-400">lag</span> behind price.</p>
                        <p className="text-xl text-stone-400 text-center">Use them as <span className="text-green-400">confirmation tools</span>, not crystal balls.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
    {
        id: "10_5",
        content: ({ isActive }) => (
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 rounded-2xl p-8 text-center">
                            <p className="text-3xl font-bold text-amber-400 mb-4">Thanks for watching!</p>
                            <p className="text-xl text-stone-300">Subscribe for more trading education</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    }
];

// Summary icons for visual recap
const IndicatorSummary = ({ delay = 0 }) => (
    <motion.div
        className="grid grid-cols-3 gap-6 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
    >
        {/* Trend */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">📈</div>
            <div className="text-lg font-bold text-amber-400">Trend</div>
            <div className="text-sm text-stone-500">SMA, EMA, MACD</div>
        </div>

        {/* Momentum */}
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-lg font-bold text-orange-400">Momentum</div>
            <div className="text-sm text-stone-500">RSI, Stochastic</div>
        </div>

        {/* Volume */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-lg font-bold text-yellow-400">Volume</div>
            <div className="text-sm text-stone-500">OBV, VWAP, Profile</div>
        </div>
    </motion.div>
);

const Chapter10 = ({ currentSegment = 0 }) => {
    return (
        <ChapterWrapper chapterNum={10} title="Conclusion">
            <div className="flex flex-col items-center justify-center h-full px-20">
                {segments.map((segment, index) => {
                    const isActive = index <= currentSegment;
                    const Segment = segment.content;
                    return <div key={segment.id} className="w-full max-w-3xl"><Segment isActive={isActive} /></div>;
                })}

                {currentSegment >= 2 && <IndicatorSummary delay={0.5} />}
            </div>
        </ChapterWrapper>
    );
};

Chapter10.segmentCount = segments.length;
Chapter10.segmentIds = segments.map(s => s.id);

export default Chapter10;
