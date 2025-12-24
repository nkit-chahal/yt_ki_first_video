import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Database, Layers, Timer, Radio, ArrowRight, Bell, Youtube, ThumbsUp } from 'lucide-react';

const Outro = ({ speed = 1 }) => {
    const [phase, setPhase] = useState(0);

    // Auto-advance through narrative phases
    useEffect(() => {
        const durations = [
            2000 / speed,  // Phase 0: "Here's the truth"
            3000 / speed,  // Phase 1: "Your database is holding you back"
            3000 / speed,  // Phase 2: "Redis is a supercharger"
            4000 / speed,  // Phase 3: Feature summary
            3000 / speed,  // Phase 4: "Stop waiting. Start building."
            5000 / speed,  // Phase 5: Subscribe CTA
        ];

        if (phase < durations.length - 1) {
            const timer = setTimeout(() => setPhase(p => p + 1), durations[phase]);
            return () => clearTimeout(timer);
        }
    }, [phase, speed]);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <AnimatePresence mode="wait">

                {/* PHASE 0: "Here's the truth" */}
                {phase === 0 && (
                    <motion.div
                        key="phase0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-5xl font-black text-white"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Here's the <span className="text-accent-blue">truth</span>.
                        </motion.h1>
                    </motion.div>
                )}

                {/* PHASE 1: "Your database is holding you back" */}
                {phase === 1 && (
                    <motion.div
                        key="phase1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="flex flex-col items-center gap-8 text-center"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        >
                            <Database size={80} className="text-red-500" />
                        </motion.div>

                        <h1 className="text-5xl font-black text-white">
                            Your database is <span className="text-red-500">holding you back</span>.
                        </h1>
                    </motion.div>
                )}

                {/* PHASE 2: "Redis is a supercharger" */}
                {phase === 2 && (
                    <motion.div
                        key="phase2"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-8 text-center"
                    >
                        <h2 className="text-3xl text-gray-400">Redis isn't a replacement—</h2>

                        <motion.div className="flex items-center gap-4">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            >
                                <Zap size={64} className="text-accent-green fill-accent-green" />
                            </motion.div>
                            <motion.h1
                                className="text-6xl font-black text-accent-green"
                                animate={{ textShadow: ["0 0 10px #2ea043", "0 0 40px #2ea043", "0 0 10px #2ea043"] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                It's a SUPERCHARGER
                            </motion.h1>
                        </motion.div>
                    </motion.div>
                )}

                {/* PHASE 3: Feature Summary */}
                {phase === 3 && (
                    <motion.div
                        key="phase3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-10"
                    >
                        <h2 className="text-3xl text-gray-400">All in one tool.</h2>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Zap, label: 'In-Memory Speed', color: 'text-accent-green', bg: 'bg-accent-green/10 border-accent-green/30' },
                                { icon: Layers, label: 'Native Structures', color: 'text-accent-purple', bg: 'bg-accent-purple/10 border-accent-purple/30' },
                                { icon: Timer, label: 'Smart Caching', color: 'text-accent-blue', bg: 'bg-accent-blue/10 border-accent-blue/30' },
                                { icon: Radio, label: 'Real-Time Messaging', color: 'text-accent-orange', bg: 'bg-accent-orange/10 border-accent-orange/30' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    className={`flex items-center gap-4 px-6 py-4 rounded-xl border ${item.bg}`}
                                    initial={{ x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    <item.icon size={32} className={item.color} />
                                    <span className={`font-bold text-lg ${item.color}`}>{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* PHASE 4: "Stop waiting. Start building." */}
                {phase === 4 && (
                    <motion.div
                        key="phase4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-8 text-center"
                    >
                        <motion.h1
                            className="text-5xl font-black text-white"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <span className="text-red-400 line-through opacity-60">Stop waiting on disk.</span>
                        </motion.h1>

                        <motion.h1
                            className="text-6xl font-black text-accent-green"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Start building faster.
                        </motion.h1>

                        <motion.p
                            className="text-2xl text-gray-400 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            This is <span className="text-white font-bold">Redis with Python</span>.
                        </motion.p>

                        <motion.p
                            className="text-xl text-gray-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            And now you know how it works.
                        </motion.p>
                    </motion.div>
                )}

                {/* PHASE 5: Subscribe CTA */}
                {phase === 5 && (
                    <motion.div
                        key="phase5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center gap-10 text-center"
                    >
                        <motion.h2
                            className="text-3xl text-gray-400"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            Want more content like this?
                        </motion.h2>

                        {/* Subscribe Button */}
                        <motion.div
                            className="flex items-center gap-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                        >
                            <motion.button
                                className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-2xl px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Youtube size={32} />
                                SUBSCRIBE
                            </motion.button>

                            <motion.button
                                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold text-xl px-6 py-4 rounded-xl border border-gray-600 transition-all"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Bell size={24} className="text-yellow-400" />
                                <span className="text-yellow-400">Turn on</span>
                            </motion.button>
                        </motion.div>

                        {/* Like Button */}
                        <motion.div
                            className="flex items-center gap-4 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <motion.button
                                className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700 text-white px-6 py-3 rounded-full border border-gray-700 transition-all"
                                whileHover={{ scale: 1.05 }}
                            >
                                <ThumbsUp size={24} className="text-accent-blue" />
                                <span className="font-bold">Like this video</span>
                            </motion.button>
                        </motion.div>

                        {/* Final Message */}
                        <motion.p
                            className="text-xl text-gray-500 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            Thanks for watching! 🚀
                        </motion.p>

                        {/* Confetti-like particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-3 h-3 rounded-full ${i % 4 === 0 ? 'bg-red-500' :
                                            i % 4 === 1 ? 'bg-accent-green' :
                                                i % 4 === 2 ? 'bg-accent-blue' : 'bg-yellow-400'
                                        }`}
                                    style={{ left: `${5 + i * 5}%`, top: '-20px' }}
                                    animate={{
                                        y: [0, 700],
                                        x: [0, (i % 2 === 0 ? 50 : -50)],
                                        rotate: [0, 360],
                                        opacity: [1, 0]
                                    }}
                                    transition={{
                                        duration: 2 + Math.random(),
                                        delay: i * 0.1,
                                        ease: "easeIn"
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>

            {/* Phase Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${phase === i ? 'bg-white scale-125' : 'bg-gray-700'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Outro;
