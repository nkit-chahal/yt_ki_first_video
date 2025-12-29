import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Type, Bike, Bot, Zap } from 'lucide-react';

// Scene 1: The Hook + Road Rash Intro (Vector Version + SFX)
const Scene1 = ({ speed = 1 }) => {
    const [phase, setPhase] = useState('intro'); // 'intro', 'kick', 'impact', 'text'
    const [text, setText] = useState("");
    const fullText = "ChatGPT...";

    // Intro Sequence Logic + SFX
    useEffect(() => {
        if (phase === 'intro') {
            const audio = new Audio('/sfx/motorcycle.mp3');
            audio.volume = 0.3;
            audio.play().catch(() => { });

            const timer = setTimeout(() => setPhase('kick'), 1200 / speed);
            return () => clearTimeout(timer);
        }
        if (phase === 'kick') {
            const punch = new Audio('/sfx/punch.mp3');
            punch.volume = 0.5;
            punch.play().catch(() => { });
            const timer = setTimeout(() => setPhase('impact'), 300 / speed);
            return () => clearTimeout(timer);
        }
        if (phase === 'impact') {
            const audio = new Audio('/sfx/impact.mp3');
            audio.volume = 0.4;
            audio.play().catch(() => { });
            const timer = setTimeout(() => setPhase('text'), 1000 / speed);
            return () => clearTimeout(timer);
        }
    }, [phase, speed]);

    useEffect(() => {
        if (phase !== 'text') return;
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) i = 0;
        }, 300 / speed);
        return () => clearInterval(interval);
    }, [phase, speed]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-12 bg-bg-main relative overflow-hidden">

            {/* ROAD RASH INTRO */}
            <AnimatePresence>
                {phase !== 'text' && (
                    <motion.div
                        className="absolute inset-0 z-50 flex items-center justify-center bg-black"
                        exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">

                            {/* The Victim */}
                            <motion.div
                                className="absolute"
                                animate={phase === 'impact' ? { x: 800, rotate: 1080, scale: 0.5, opacity: 0 } : {}}
                                transition={{ duration: 0.8, ease: "circOut" }}
                            >
                                <div className="relative">
                                    <Bot size={160} className="text-gray-400" />
                                    {phase === 'kick' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -top-10 right-0 text-cyan-400 text-6xl">💦</motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* The Attacker */}
                            <motion.div
                                className="absolute left-[-200px]"
                                initial={{ x: 0 }}
                                animate={phase === 'intro' ? { x: "40%" } : { x: "45%" }}
                                transition={{ duration: 1 / speed, ease: "linear" }}
                            >
                                <div className="relative text-white filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                                    <Bike size={200} strokeWidth={2.5} />
                                    {phase !== 'intro' && (
                                        <motion.div
                                            className="absolute bottom-12 right-0 bg-white w-32 h-8 rounded-full border-4 border-black origin-left"
                                            initial={{ rotate: 90, scale: 0.5 }}
                                            animate={{ rotate: 10, scale: 1.2, x: 80 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        >
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-16 bg-white border-4 border-black rounded-r-xl" />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* IMPACT */}
                            {phase === 'impact' && (
                                <motion.div
                                    className="absolute z-50 pointer-events-none"
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 2, rotate: 10 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="relative">
                                        <Zap size={300} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_50px_rgba(250,204,21,0.8)]" />
                                        <span className="absolute inset-0 flex items-center justify-center font-black text-6xl text-black rotate-[-15deg]">SCALE!</span>
                                    </div>
                                </motion.div>
                            )}

                            {/* Speed Lines */}
                            <div className="absolute inset-0 z-[-1] overflow-hidden opacity-30">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div key={i} className="absolute h-1 bg-white" style={{ top: `${20 + i * 15}%`, width: '50%' }} animate={{ x: [-1000, 2000] }} transition={{ repeat: Infinity, duration: 0.2, delay: i * 0.05, ease: "linear" }} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN CONTENT */}
            {phase === 'text' && (
                <>
                    <motion.h2
                        className="text-4xl font-black text-white z-10 text-center tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Why isn't <span className="text-primary glow-primary">ChatGPT</span> slow?
                    </motion.h2>

                    <motion.p
                        className="text-3xl text-gray-400 z-10 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 / speed }}
                    >
                        100 Million users at once... 🤯
                    </motion.p>

                    <motion.div
                        className="flex flex-col items-center gap-8 z-10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 / speed }}
                    >
                        <div className="bg-gray-900 border-2 border-primary rounded-xl p-8 w-[800px] h-[250px] flex items-center justify-center shadow-[0_0_50px_rgba(16,163,127,0.2)]">
                            <p className="text-6xl font-mono text-primary font-bold">
                                {text}<span className="animate-pulse">_</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-500">
                            <Type size={40} />
                            <span className="text-2xl font-mono">1 Token at a time</span>
                        </div>
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default Scene1;
