import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image, MousePointer, Radio, Globe, AlertTriangle, Trash2 } from 'lucide-react';

// Scene 0: The Hook - "Your Data is Garbage"
// TIMED SEQUENCE synced with narration (~10 seconds)
const Scene0 = ({ animSpeed = 1 }) => {

    const [phase, setPhase] = useState(0);

    // Helper to scale time (speed 0.5 = 2x duration)
    const t = (val) => val / animSpeed;

    useEffect(() => {
        // Reset phase when mounting or speed changes could be tricky, 
        // but for simplicity we just run the timers once on mount. 
        // If speed changes MID-scene, timers won't update precisely without complex logic.
        // For this use case (setting speed before paying or global adjustment), this is acceptable.
        // Or better: clear and restart timers? No, that resets animation state.
        // We will assume user sets speed mostly at start or accepts loose sync.

        // Actually, to make it responsive, we should probably rely on the speed prop
        // for current/future animations, but existing JS timers are hard to adjust on the fly.
        // Given constraints, we'll just set them up based on initial speed or current speed 
        // but they won't seamlessly adjust audio sync midpoint if changed blindly.
        // HOWEVER, App.jsx remounts the component when key changes? No.
        // We can just accept that changing speed might desync the *current* running timer.
        // A full fix requires requestAnimationFrame or a time-delta approach.
        // For a "reel", we'll stick to simple scaled timeouts.

        const timers = [
            setTimeout(() => setPhase(1), t(2000)),
            setTimeout(() => setPhase(2), t(4500)),
            setTimeout(() => setPhase(3), t(7000)),
        ];

        // SFX
        const sfx = new Audio('/sfx/error.mp3');
        sfx.volume = 0.2;
        // Adjust sfx playback rate if supported?
        sfx.playbackRate = animSpeed;
        setTimeout(() => sfx.play().catch(() => { }), t(500));

        return () => timers.forEach(id => clearTimeout(id));
    }, [animSpeed]); // Re-running this effect resets phase to 0? default useState is 0. 

    // If we include animSpeed in dependency, it restarts the scene phases from 0
    // which puts it back in sync with the audio (which App.jsx might not reset).
    // App.jsx manages audio play state. We might need to coordinate.
    // But for now, restart visual is safer than desync.

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DA 50%, #E8DFD0 100%)' }}>

            {/* Subtle texture */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(200,180,150,0.3) 0%, transparent 50%),
                                     radial-gradient(circle at 80% 70%, rgba(180,160,130,0.2) 0%, transparent 50%)`
                }}
            />

            {/* ========== PHASE 0: Opening Hook (0-2s) ========== */}
            <AnimatePresence>
                {phase === 0 && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center z-10"
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: t(0.4) }}
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 140, damping: 15, duration: t(0.8) }} // approximation for spring
                        >
                            <X size={120} strokeWidth={3} className="text-[#D94A38]" />
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-black text-gray-800 mt-6 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: t(0.3), duration: t(0.5) }}
                        >
                            Stop Training AI on
                            <br />
                            <span className="text-[#D94A38]">Internet Garbage</span>
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========== PHASE 1: The Problem (2-4.5s) ========== */}
            <AnimatePresence>
                {phase === 1 && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: t(0.4) }}
                    >
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 150, duration: t(0.6) }}
                        >
                            <Globe size={40} className="text-gray-600" />
                        </motion.div>

                        <motion.h2
                            className="text-3xl font-bold text-gray-800 text-center mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: t(0.3), duration: t(0.5) }}
                        >
                            Billions of Image-Text Pairs
                        </motion.h2>

                        {/* Animated counter */}
                        <motion.div
                            className="bg-white rounded-2xl px-8 py-6 shadow-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: t(0.5), duration: t(0.5) }}
                        >
                            <p className="text-gray-500 text-sm mb-2">Scraped from random webpages</p>
                            <motion.p
                                className="text-5xl font-black text-[#C4A77D]"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: t(0.7), repeat: 3 }}
                            >
                                5B+
                            </motion.p>
                            <p className="text-gray-600 text-sm mt-2">image-text pairs</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========== PHASE 2: The Problems List (4.5-7s) ========== */}
            <AnimatePresence>
                {phase === 2 && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: t(0.3) }}
                    >
                        <motion.h2
                            className="text-2xl font-bold text-gray-700 mb-8 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: t(0.5) }}
                        >
                            What's wrong with it?
                        </motion.h2>

                        <div className="flex flex-col gap-3 w-full max-w-xs">
                            {[
                                { icon: Radio, label: "It's NOISY", color: "#D94A38" },
                                { icon: MousePointer, label: "Full of ADS", color: "#C4A77D" },
                                { icon: Image, label: "Zero Logical Connection", color: "#8B7355" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: t(i * 0.4), duration: t(0.5) }}
                                >
                                    <motion.div
                                        animate={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ delay: t(i * 0.4 + 0.6), duration: t(0.7) }}
                                    >
                                        <item.icon size={24} style={{ color: item.color }} />
                                    </motion.div>
                                    <span className="font-semibold text-gray-800">{item.label}</span>
                                    <X size={20} className="ml-auto text-[#D94A38]" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========== PHASE 3: The Verdict (7-10s) ========== */}
            <AnimatePresence>
                {phase === 3 && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: t(0.3) }}
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 120, duration: t(0.8) }}
                        >
                            <Trash2 size={80} className="text-[#D94A38]" />
                        </motion.div>

                        <motion.div
                            className="mt-8 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: t(0.3), duration: t(0.5) }}
                        >
                            <p className="text-gray-500 text-lg mb-2">It's essentially</p>
                            <motion.h1
                                className="text-5xl font-black text-[#D94A38]"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: t(0.7), delay: t(0.6), repeat: 2 }}
                            >
                                JUNK FOOD
                            </motion.h1>
                            <p className="text-gray-700 text-xl font-medium mt-2">for AI</p>
                        </motion.div>

                        {/* Warning Badge */}
                        <motion.div
                            className="mt-10 flex items-center gap-2 px-5 py-3 bg-[#D94A38]/10 rounded-full border border-[#D94A38]/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: t(1), duration: t(0.5) }}
                        >
                            <AlertTriangle size={18} className="text-[#D94A38]" />
                            <span className="text-[#D94A38] font-medium text-sm">
                                Low quality = Low performance
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Scene0;
