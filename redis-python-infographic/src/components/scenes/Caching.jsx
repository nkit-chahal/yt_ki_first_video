import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trash2, Zap, Clock, Sparkles } from 'lucide-react';

const Caching = ({ speed = 1 }) => {
    const [phase, setPhase] = useState(0);
    const [countdown, setCountdown] = useState(5);
    const [exploded, setExploded] = useState(false);

    // Auto-advance through narrative phases
    useEffect(() => {
        const durations = [
            2000 / speed,  // Phase 0: "Now, the killer feature"
            2500 / speed,  // Phase 1: "Time To Live"
            6500 / speed,  // Phase 2: Countdown demo (5s + buffer)
            3000 / speed,  // Phase 3: "Self-destructs" emphasis
            4000 / speed,  // Phase 4: Netflix/Twitter social proof
            4000 / speed,  // Phase 5: "3 lines of Python"
        ];

        if (phase < durations.length - 1) {
            const timer = setTimeout(() => setPhase(p => p + 1), durations[phase]);
            return () => clearTimeout(timer);
        }
    }, [phase, speed]);

    // Countdown timer for phase 2
    useEffect(() => {
        if (phase === 2 && countdown > 0) {
            const timer = setTimeout(() => setCountdown(c => c - 1), 1000 / speed);
            return () => clearTimeout(timer);
        }
        if (phase === 2 && countdown === 0 && !exploded) {
            setExploded(true);
        }
    }, [phase, countdown, speed, exploded]);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <AnimatePresence mode="wait">

                {/* PHASE 0: "Now, the killer feature" */}
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
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        >
                            Now, the <span className="text-accent-blue">killer feature</span>.
                        </motion.h1>
                    </motion.div>
                )}

                {/* PHASE 1: "Time To Live" */}
                {phase === 1 && (
                    <motion.div
                        key="phase1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="flex flex-col items-center gap-8 text-center"
                    >
                        <motion.div
                            className="relative"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                        >
                            <div className="absolute inset-0 bg-accent-blue/30 blur-3xl rounded-full"></div>
                            <Timer size={120} className="text-accent-blue relative" />
                        </motion.div>

                        <motion.h1
                            className="text-6xl font-black text-white"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Time To Live
                        </motion.h1>

                        <motion.p
                            className="text-2xl text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Data that <span className="text-accent-blue font-bold">expires</span> on its own.
                        </motion.p>
                    </motion.div>
                )}

                {/* PHASE 2: Countdown Demo */}
                {phase === 2 && (
                    <motion.div
                        key="phase2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-10"
                    >
                        <h2 className="text-2xl text-gray-400">
                            "Store this session for <span className="text-accent-blue font-bold">5 seconds</span>, then delete it."
                        </h2>

                        <div className="flex items-center gap-12">
                            {/* The Session Card */}
                            <AnimatePresence>
                                {!exploded ? (
                                    <motion.div
                                        className="relative bg-gray-800 border-2 border-accent-blue rounded-2xl p-8 min-w-[280px]"
                                        animate={countdown <= 2 ? { x: [-2, 2, -2, 2, 0] } : {}}
                                        transition={{ duration: 0.1, repeat: countdown <= 2 ? Infinity : 0 }}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                                            <span className="text-white font-mono">session:user_123</span>
                                        </div>
                                        <div className="text-gray-400 text-sm font-mono">
                                            token: "abc123..."<br />
                                            status: "active"
                                        </div>

                                        {/* Countdown Overlay */}
                                        <motion.div
                                            className="absolute top-4 right-4 w-16 h-16 rounded-full border-4 border-accent-blue flex items-center justify-center"
                                            animate={{
                                                borderColor: countdown <= 2 ? "#ef4444" : "#38bdf8",
                                                scale: countdown <= 2 ? [1, 1.1, 1] : 1
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className={`text-2xl font-black font-mono ${countdown <= 2 ? 'text-red-500' : 'text-accent-blue'}`}>
                                                {countdown}
                                            </span>
                                        </motion.div>

                                        {/* Progress Bar */}
                                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700 rounded-b-2xl overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-accent-blue to-red-500"
                                                initial={{ width: "100%" }}
                                                animate={{ width: "0%" }}
                                                transition={{ duration: 5 / speed, ease: "linear" }}
                                            />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="explosion"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: [1, 1.3, 0], opacity: [1, 1, 0] }}
                                        transition={{ duration: 0.4 }}
                                        className="relative"
                                    >
                                        {/* Explosion particles */}
                                        {[...Array(12)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-4 h-4 bg-red-500 rounded-full"
                                                initial={{ x: 0, y: 0, opacity: 1 }}
                                                animate={{
                                                    x: Math.cos(i * 30 * Math.PI / 180) * 150,
                                                    y: Math.sin(i * 30 * Math.PI / 180) * 150,
                                                    opacity: 0,
                                                    scale: 0
                                                }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        ))}
                                        <Trash2 size={80} className="text-red-500" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {exploded && (
                            <motion.p
                                className="text-3xl font-bold text-red-500"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                            >
                                💥 EXPIRED
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {/* PHASE 3: "Self-destructs" emphasis */}
                {phase === 3 && (
                    <motion.div
                        key="phase3"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-8 text-center"
                    >
                        <motion.h1
                            className="text-6xl font-black text-white"
                            animate={{ textShadow: ["0 0 0px #ef4444", "0 0 30px #ef4444", "0 0 0px #ef4444"] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            It <span className="text-red-500">self-destructs</span>.
                        </motion.h1>

                        <div className="flex gap-8 mt-4">
                            {['No Cron Jobs', 'No Cleanup Scripts', 'No Manual Deletion'].map((text, i) => (
                                <motion.div
                                    key={text}
                                    className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    <span className="text-lg text-gray-400 line-through">{text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-2xl text-gray-400 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            The data just... <span className="text-accent-blue">expires</span>.
                        </motion.p>
                    </motion.div>
                )}

                {/* PHASE 4: Netflix/Twitter Social Proof */}
                {phase === 4 && (
                    <motion.div
                        key="phase4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-10 text-center"
                    >
                        <h2 className="text-3xl text-gray-400">This is how the giants do it.</h2>

                        <div className="flex gap-16 items-center">
                            <motion.div
                                className="flex flex-col items-center gap-4"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-red-600 text-5xl font-black tracking-wider">NETFLIX</div>
                                <p className="text-gray-500 text-sm">Millions of sessions</p>
                            </motion.div>

                            <motion.div
                                className="text-4xl text-gray-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                +
                            </motion.div>

                            <motion.div
                                className="flex flex-col items-center gap-4"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <svg viewBox="0 0 24 24" className="w-16 h-16 fill-white">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                <p className="text-gray-500 text-sm">Timeline caching</p>
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-2xl text-white mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            And now, <span className="text-accent-green font-bold">you</span> can do it too.
                        </motion.p>
                    </motion.div>
                )}

                {/* PHASE 5: "3 lines of Python" */}
                {phase === 5 && (
                    <motion.div
                        key="phase5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center gap-8"
                    >
                        <h2 className="text-3xl text-gray-400">With just <span className="text-accent-green font-bold">3 lines</span> of Python.</h2>

                        <motion.div
                            className="bg-gray-900 border border-gray-700 rounded-xl p-8 font-mono text-xl"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                <span className="text-purple-400">import</span> <span className="text-accent-blue">redis</span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-2">
                                <span className="text-purple-400">r</span> = redis.<span className="text-yellow-300">Redis()</span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-4">
                                <span className="text-purple-400">r</span>.<span className="text-accent-green">set</span>
                                <span className="text-yellow-300">(</span>
                                <span className="text-green-400">'session'</span>,
                                <span className="text-green-400">'data'</span>,
                                <span className="text-accent-blue">ex</span>=<span className="text-orange-400">5</span>
                                <span className="text-yellow-300">)</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex items-center gap-2 text-accent-green font-bold text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            <Sparkles className="fill-accent-green" size={24} />
                            Done. It expires in 5 seconds.
                        </motion.div>
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

export default Caching;
