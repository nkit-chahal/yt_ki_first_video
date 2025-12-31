import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Zap, MousePointer2 } from 'lucide-react';

// Scene 0: Hook - "Copilot vs Cursor"
const Scene0 = ({ playbackSpeed = 1 }) => {
    const t = (val) => val / playbackSpeed;
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        // Phase 0: "Most developers stuck with Copilot" (0-3.5s)
        // Phase 1: "Switching to ONE tool" (3.5s+)
        const timers = [
            setTimeout(() => setPhase(1), t(3500)),
        ];
        return () => timers.forEach(id => clearTimeout(id));
    }, [playbackSpeed]);

    return (
        <div className="w-full h-full relative flex overflow-hidden">

            {/* Left Side: The Old Way (Copilot) */}
            <motion.div
                className="w-1/2 h-full bg-gray-100 flex flex-col items-center justify-center border-r border-gray-300 relative z-10"
                animate={phase === 1 ? { x: '-50%', opacity: 0.5 } : {}}
                transition={{ duration: t(0.8) }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: t(0.5) }}
                    className="flex flex-col items-center"
                >
                    <Github size={80} className="text-gray-400 mb-4" />
                    <h2 className="text-3xl font-bold text-gray-500">2025</h2>
                    <p className="text-gray-400 font-medium">Github Copilot</p>
                </motion.div>

                {/* Visual clutter/noise for "Stuck" */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
            </motion.div>

            {/* Right Side: The New Way (Cursor) */}
            <div className="w-1/2 h-full bg-[#0F0F0F] flex flex-col items-center justify-center relative relative z-10">
                {/* This stays static initially */}
                <AnimatePresence>
                    {phase === 0 && (
                        <motion.div
                            className="opacity-20 blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                        >
                            <MousePointer2 size={80} className="text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* REVEAL: Phase 1 Overlay */}
            <AnimatePresence>
                {phase === 1 && (
                    <motion.div
                        className="absolute inset-0 bg-[#0F0F0F] flex flex-col items-center justify-center z-20"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: t(0.6), ease: "circOut" }}
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-150 animate-pulse" />

                        <motion.div
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, duration: t(0.8), delay: t(0.2) }}
                        >
                            <MousePointer2 size={120} className="text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" fill="white" />
                        </motion.div>

                        <motion.h1
                            className="text-6xl font-black text-white mt-8 tracking-tighter"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: t(0.4), duration: t(0.5) }}
                        >
                            CURSOR
                        </motion.h1>

                        <motion.div
                            className="mt-4 px-6 py-2 bg-blue-600 rounded-full text-white font-bold text-sm"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: t(0.6), type: "spring" }}
                        >
                            #1 AI TOOL 2026
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Scene0;
