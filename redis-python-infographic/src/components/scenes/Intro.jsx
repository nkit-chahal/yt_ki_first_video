import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, HardDrive, Zap, Clock, AlertTriangle, Users, ArrowRight } from 'lucide-react';

const Intro = ({ speed = 1 }) => {
    const [phase, setPhase] = useState(0);

    // Auto-advance through narrative phases
    useEffect(() => {
        const durations = [
            3000 / speed,  // Phase 0: "Your app is slow. Users are leaving."
            3000 / speed,  // Phase 1: "Problem is your database"
            4000 / speed,  // Phase 2: "200ms per read - lifetime"
            3000 / speed,  // Phase 3: "What if RAM?"
            5000 / speed,  // Phase 4: "Redis - Sub-millisecond"
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

                {/* PHASE 0: The Hook - "Your app is slow" */}
                {phase === 0 && (
                    <motion.div
                        key="phase0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center gap-8 text-center"
                    >
                        <motion.div
                            className="text-red-500"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        >
                            <AlertTriangle size={80} />
                        </motion.div>

                        <h1 className="text-5xl font-black text-white">Your App is <span className="text-red-500">Slow</span></h1>

                        <div className="flex gap-4 mt-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col items-center gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: [1, 0.3, 1], y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
                                >
                                    <Users size={32} className="text-gray-500" />
                                    <span className="text-xs text-red-400">leaving...</span>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-gray-500 text-xl mt-4">Users are leaving.</p>
                    </motion.div>
                )}

                {/* PHASE 1: The Blame - "It's your database" */}
                {phase === 1 && (
                    <motion.div
                        key="phase1"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center gap-8 text-center"
                    >
                        <p className="text-2xl text-gray-400">The problem isn't your code...</p>

                        <motion.div
                            className="relative"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        >
                            <div className="absolute inset-0 bg-red-500/30 blur-3xl rounded-full"></div>
                            <div className="relative w-40 h-40 bg-gray-800 border-4 border-red-500 rounded-2xl flex items-center justify-center">
                                <Database size={80} className="text-red-500" />
                            </div>
                        </motion.div>

                        <h1 className="text-5xl font-black text-white">It's Your <span className="text-red-500">Database</span></h1>

                        <p className="text-gray-500 text-lg">Every query hits the disk. And disk is <span className="text-red-400 font-bold">SLOW</span>.</p>
                    </motion.div>
                )}

                {/* PHASE 2: The Impact - "200 milliseconds" */}
                {phase === 2 && (
                    <motion.div
                        key="phase2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex flex-col items-center justify-center gap-8 text-center"
                    >
                        <div className="flex items-center gap-8">
                            <motion.div
                                className="w-32 h-32 border-4 border-dashed border-gray-600 rounded-xl flex items-center justify-center"
                                animate={{ x: [-2, 2, -2] }}
                                transition={{ duration: 0.1, repeat: Infinity }}
                            >
                                <HardDrive size={64} className="text-gray-500" />
                            </motion.div>

                            <ArrowRight size={48} className="text-gray-600" />

                            {/* Slow Loading Bar */}
                            <div className="w-64 h-8 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-red-600 to-red-400"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2 / speed, ease: "linear" }}
                                />
                            </div>
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                            className="mt-8"
                        >
                            <span className="text-8xl font-black text-red-500 font-mono tracking-tighter">200ms</span>
                        </motion.div>

                        <motion.p
                            className="text-2xl text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            That's a <span className="text-red-400 font-bold">LIFETIME</span> in computing.
                        </motion.p>
                    </motion.div>
                )}

                {/* PHASE 3: The Hope - "What if RAM?" */}
                {phase === 3 && (
                    <motion.div
                        key="phase3"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center gap-8 text-center"
                    >
                        <p className="text-3xl text-gray-300">But what if...</p>

                        <motion.h1
                            className="text-6xl font-black text-white"
                            animate={{ textShadow: ["0 0 10px rgba(46,160,67,0)", "0 0 30px rgba(46,160,67,0.5)", "0 0 10px rgba(46,160,67,0)"] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            You stored everything in <span className="text-accent-green">RAM</span>?
                        </motion.h1>

                        <motion.div
                            className="flex gap-2 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-16 bg-accent-green rounded-full"
                                    animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 0.4, delay: i * 0.05, repeat: Infinity }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}

                {/* PHASE 4: The Solution - Redis */}
                {phase === 4 && (
                    <motion.div
                        key="phase4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center gap-10 text-center"
                    >
                        <motion.div
                            className="relative"
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            transition={{ type: "spring", bounce: 0.4 }}
                        >
                            <div className="absolute inset-0 bg-accent-green/30 blur-[80px] rounded-full"></div>
                            <div className="relative flex items-center gap-4">
                                <Zap size={64} className="text-accent-green fill-accent-green" />
                                <h1 className="text-7xl font-black text-white">Redis</h1>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                        >
                            <motion.span
                                className="text-9xl font-black text-accent-green font-mono"
                                animate={{
                                    textShadow: ["0 0 20px #2ea043", "0 0 60px #2ea043", "0 0 20px #2ea043"]
                                }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            >
                                &lt;1ms
                            </motion.span>
                        </motion.div>

                        <motion.p
                            className="text-2xl text-accent-green font-bold uppercase tracking-widest"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Sub-Millisecond Access
                        </motion.p>

                        {/* Speed Particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-12 bg-accent-green rounded-full opacity-50"
                                    style={{ left: `${5 + i * 5}%` }}
                                    animate={{ y: [-100, 800], opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.03,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            ))}
                        </div>

                        <motion.p
                            className="text-xl text-gray-400 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            Let me show you how it works.
                        </motion.p>
                    </motion.div>
                )}

            </AnimatePresence>

            {/* Phase Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${phase === i ? 'bg-white scale-125' : 'bg-gray-700'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Intro;
