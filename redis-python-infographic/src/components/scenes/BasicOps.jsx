import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, X, Database, Key } from 'lucide-react';

const BasicOps = ({ speed = 1 }) => {
    const [phase, setPhase] = useState(0);

    // Auto-advance through narrative phases
    useEffect(() => {
        const durations = [
            2500 / speed,  // Phase 0: "Forget SQL. Forget tables."
            2500 / speed,  // Phase 1: "Redis is brutally simple"
            3000 / speed,  // Phase 2: "No joins. No schemas. No overhead."
            3500 / speed,  // Phase 3: "SET a key"
            4000 / speed,  // Phase 4: "GET a key - watch how fast"
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

                {/* PHASE 0: "Forget SQL. Forget tables." */}
                {phase === 0 && (
                    <motion.div
                        key="phase0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center gap-10 text-center"
                    >
                        <div className="flex gap-12">
                            {/* SQL - Crossed Out */}
                            <motion.div
                                className="relative"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <div className="text-6xl font-black text-gray-500 font-mono">SQL</div>
                                <motion.div
                                    className="absolute top-1/2 left-0 w-full h-2 bg-red-500 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                    style={{ originX: 0 }}
                                />
                                <motion.div
                                    className="absolute -top-2 -right-2"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <X size={32} className="text-red-500" strokeWidth={4} />
                                </motion.div>
                            </motion.div>

                            {/* Tables - Crossed Out */}
                            <motion.div
                                className="relative"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-6xl font-black text-gray-500 font-mono">Tables</div>
                                <motion.div
                                    className="absolute top-1/2 left-0 w-full h-2 bg-red-500 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.6, duration: 0.3 }}
                                    style={{ originX: 0 }}
                                />
                                <motion.div
                                    className="absolute -top-2 -right-2"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <X size={32} className="text-red-500" strokeWidth={4} />
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-3xl text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            Forget them.
                        </motion.p>
                    </motion.div>
                )}

                {/* PHASE 1: "Redis is brutally simple" */}
                {phase === 1 && (
                    <motion.div
                        key="phase1"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center gap-8 text-center"
                    >
                        <h1 className="text-5xl font-black text-white">
                            Redis is <span className="text-accent-blue">Brutally Simple</span>
                        </h1>

                        <motion.div
                            className="flex items-center gap-8 mt-8"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-24 h-24 bg-accent-blue/20 border-2 border-accent-blue rounded-xl flex items-center justify-center">
                                    <Key size={48} className="text-accent-blue" />
                                </div>
                                <span className="text-accent-blue font-mono font-bold">KEY</span>
                            </div>

                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity }}
                            >
                                <ArrowRight size={48} className="text-white" />
                            </motion.div>

                            <div className="flex flex-col items-center gap-2">
                                <div className="w-24 h-24 bg-accent-green/20 border-2 border-accent-green rounded-xl flex items-center justify-center">
                                    <Database size={48} className="text-accent-green" />
                                </div>
                                <span className="text-accent-green font-mono font-bold">VALUE</span>
                            </div>
                        </motion.div>

                        <motion.p
                            className="text-2xl text-gray-400 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            That's it.
                        </motion.p>
                    </motion.div>
                )}

                {/* PHASE 2: "No joins. No schemas. No overhead." */}
                {phase === 2 && (
                    <motion.div
                        key="phase2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="flex flex-col items-center justify-center gap-8 text-center"
                    >
                        <div className="flex gap-8">
                            {['No Joins', 'No Schemas', 'No Overhead'].map((text, i) => (
                                <motion.div
                                    key={text}
                                    className="px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-xl"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <span className="text-2xl font-bold text-gray-400">{text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.h2
                            className="text-4xl font-black text-white mt-6"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            Just... <span className="text-accent-blue">set</span> a key, <span className="text-accent-green">get</span> a key.
                        </motion.h2>
                    </motion.div>
                )}

                {/* PHASE 3: SET Demo */}
                {phase === 3 && (
                    <motion.div
                        key="phase3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center gap-10"
                    >
                        <h2 className="text-3xl font-bold text-gray-400">Watch how fast this is.</h2>

                        <div className="flex items-center gap-12">
                            {/* Code */}
                            <motion.div
                                className="bg-gray-900 border border-gray-700 rounded-xl p-6 font-mono text-xl"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <span className="text-purple-400">r</span>.<span className="text-accent-blue font-bold">set</span>
                                <span className="text-yellow-300">(</span>
                                <span className="text-green-400">'user:1'</span>,
                                <span className="text-green-400">'Alice'</span>
                                <span className="text-yellow-300">)</span>
                            </motion.div>

                            {/* Arrow */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                <ArrowRight size={64} className="text-accent-blue" strokeWidth={3} />
                            </motion.div>

                            {/* Redis Memory */}
                            <motion.div
                                className="relative"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="bg-gray-800 border-2 border-accent-blue rounded-xl p-6 min-w-[200px]">
                                    <div className="text-xs text-gray-500 mb-2 font-mono">REDIS MEMORY</div>
                                    <motion.div
                                        className="flex justify-between items-center bg-gray-900 p-3 rounded-lg"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
                                    >
                                        <span className="text-accent-blue font-mono">user:1</span>
                                        <span className="text-accent-green font-mono">"Alice"</span>
                                    </motion.div>
                                </div>

                                {/* Flash effect */}
                                <motion.div
                                    className="absolute inset-0 bg-accent-blue/30 rounded-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.5, 0] }}
                                    transition={{ delay: 0.6, duration: 0.4 }}
                                />
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-accent-blue font-bold text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            ✓ Stored instantly
                        </motion.p>
                    </motion.div>
                )}

                {/* PHASE 4: GET Demo + Speed Emphasis */}
                {phase === 4 && (
                    <motion.div
                        key="phase4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center gap-10"
                    >
                        <div className="flex items-center gap-12">
                            {/* Redis Memory */}
                            <motion.div
                                className="bg-gray-800 border-2 border-accent-green rounded-xl p-6 min-w-[200px]"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <div className="text-xs text-gray-500 mb-2 font-mono">REDIS MEMORY</div>
                                <div className="flex justify-between items-center bg-gray-900 p-3 rounded-lg">
                                    <span className="text-accent-blue font-mono">user:1</span>
                                    <span className="text-accent-green font-mono">"Alice"</span>
                                </div>
                            </motion.div>

                            {/* Arrow */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                <ArrowRight size={64} className="text-accent-green rotate-180" strokeWidth={3} />
                            </motion.div>

                            {/* Code */}
                            <motion.div
                                className="bg-gray-900 border border-gray-700 rounded-xl p-6 font-mono text-xl"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="text-purple-400">val</span> = <span className="text-purple-400">r</span>.<span className="text-accent-green font-bold">get</span>
                                <span className="text-yellow-300">(</span>
                                <span className="text-green-400">'user:1'</span>
                                <span className="text-yellow-300">)</span>
                            </motion.div>
                        </div>

                        {/* Result */}
                        <motion.div
                            className="bg-accent-green text-black font-bold text-2xl px-8 py-4 rounded-full shadow-[0_0_40px_rgba(46,160,67,0.5)]"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
                        >
                            → "Alice"
                        </motion.div>

                        {/* Speed Emphasis */}
                        <motion.div
                            className="text-center mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <p className="text-gray-400 text-lg">The data doesn't touch the disk.</p>
                            <p className="text-white text-2xl font-bold mt-2">
                                It lives in <span className="text-accent-green">memory</span>, ready to go.
                            </p>
                        </motion.div>

                        {/* Speed particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-8 bg-accent-green rounded-full opacity-30"
                                    style={{ left: `${10 + i * 6}%` }}
                                    animate={{ y: [-50, 700], opacity: [0, 0.5, 0] }}
                                    transition={{
                                        duration: 0.6,
                                        delay: i * 0.04,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            ))}
                        </div>
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

export default BasicOps;
