import React, { useState, useEffect } from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Laptop, ArrowDown, Check, Zap, Cpu } from 'lucide-react';

const QuantScene1 = () => {
    // 0 = Intro/Fail (70GB vs 4GB)
    // 1 = The Trick (Anticipation)
    // 2 = The Reveal (Quantization)
    // 3 = Success (Laptop)
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 3500), // "Well, there's a trick..." (Anticipation)
            setTimeout(() => setStep(2), 5200), // "It's called Quantization" (THE REVEAL)
            setTimeout(() => setStep(3), 7500)  // "To fit in your laptop"
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    // Helper to dim non-active steps
    const getOpacity = (activeStep) => step === activeStep ? 1 : 0.2;
    const getFilter = (activeStep) => step === activeStep ? 'none' : 'blur(4px)';

    return (
        <SceneWrapper>
            <div className="relative w-full h-full flex flex-col items-center justify-start pt-16 gap-6 overflow-hidden bg-slate-950">

                {/* Background Stars / Grid */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle, #64748b 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>

                {/* === GUIDE TEXT (Bottom) === */}
                <div className="absolute bottom-12 w-full text-center z-50 px-4">
                    <AnimatePresence mode='wait'>
                        {step === 0 && (
                            <motion.div
                                key="s0"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-3xl font-black text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.5)] bg-black/80 px-8 py-6 rounded-3xl border-2 border-red-500/50 inline-block"
                            >
                                Running 70GB is <br /><span className="text-white text-5xl drop-shadow-md">IMPOSSIBLE ❌</span>
                            </motion.div>
                        )}
                        {step === 1 && (
                            <motion.div
                                key="s1"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-3xl font-black text-blue-400 drop-shadow-lg bg-black/80 px-8 py-6 rounded-3xl border-2 border-blue-500/50 inline-block"
                            >
                                But there's a <br /><span className="text-white text-5xl">TRICK... 🪄</span>
                            </motion.div>
                        )}
                        {step >= 2 && step < 3 && (
                            <motion.div
                                key="s2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1.1 }}
                                exit={{ opacity: 0 }}
                                className="text-3xl font-black text-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] bg-black/80 px-8 py-6 rounded-3xl border-4 border-purple-500 inline-block"
                            >
                                It's called... <br /><span className="text-white text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">QUANTIZATION ✨</span>
                            </motion.div>
                        )}
                        {step === 3 && (
                            <motion.div
                                key="s3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-3xl font-black text-green-400 drop-shadow-lg bg-black/80 px-8 py-6 rounded-3xl border-2 border-green-500/50 inline-block"
                            >
                                Now it runs <br /><span className="text-white text-5xl">LOCALLY! 🚀</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* === IMPACT CONTAINER === */}
                <div className="relative w-[95%] max-w-lg h-[500px] flex items-center justify-center">

                    {/* === STEP 1: THE PROBLEM (70GB vs 4GB) === */}
                    <AnimatePresence>
                        {step === 0 && (
                            <motion.div
                                key="problem"
                                className="absolute w-full flex flex-col items-center gap-6"
                                exit={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* 70GB Model Block */}
                                <motion.div
                                    className="w-full bg-slate-900/90 border-4 border-slate-700/50 rounded-3xl p-6 flex items-center justify-between relative overflow-hidden"
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <div className="flex items-center gap-4 z-10">
                                        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                                            <Database className="text-white w-10 h-10" />
                                        </div>
                                        <div>
                                            <div className="text-blue-200 font-bold text-xl">LLaMA 70B</div>
                                            <div className="text-white font-black text-4xl">140 GB</div>
                                        </div>
                                    </div>
                                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-slate-800 to-transparent opacity-50" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <ArrowDown className="text-slate-500 w-12 h-12" strokeWidth={3} />
                                </motion.div>

                                {/* Laptop Block (Struggling) */}
                                <motion.div
                                    className="w-full bg-red-900/20 border-4 border-red-500/50 rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{
                                        x: [-2, 2, -2],
                                        boxShadow: ['0 0 0px #ef4444', '0 0 20px #ef4444', '0 0 0px #ef4444']
                                    }}
                                    transition={{
                                        x: { repeat: Infinity, duration: 0.1 },
                                        boxShadow: { repeat: Infinity, duration: 1 }
                                    }}
                                >
                                    <div className="flex items-center justify-between z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                                                <Laptop className="text-gray-400 w-8 h-8" />
                                            </div>
                                            <div>
                                                <div className="text-gray-300 font-bold text-lg">My Laptop</div>
                                                <div className="text-red-400 font-black text-3xl">16 GB RAM</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Exploding RAM Bar */}
                                    <div className="relative w-full h-8 bg-black rounded-full overflow-hidden border border-red-500/30">
                                        <motion.div
                                            className="absolute top-0 bottom-0 left-0 bg-red-600"
                                            initial={{ width: "10%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                        />
                                        <motion.div
                                            className="absolute top-0 bottom-0 left-0 bg-white opacity-20"
                                            animate={{ x: [-100, 500] }}
                                            transition={{ repeat: Infinity, duration: 0.5 }}
                                        />
                                    </div>
                                    <motion.div
                                        className="text-red-500 font-black uppercase text-center tracking-widest text-lg"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ repeat: Infinity, duration: 0.5 }}
                                    >
                                        Memory Overhead!
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* === STEP 2: THE REVEAL (Quantization) === */}
                    <AnimatePresence>
                        {step >= 2 && (
                            <motion.div
                                key="solution"
                                className="absolute w-full flex flex-col items-center justify-center z-20"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 0.8 }}
                            >
                                {/* Glowing Magic Orb */}
                                <div className="relative group">
                                    <motion.div
                                        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                                        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                    />
                                    <div className="relative w-48 h-48 bg-slate-900 rounded-full flex items-center justify-center border-4 border-purple-400 shadow-2xl">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                        >
                                            <Zap className="text-purple-400 w-24 h-24" strokeWidth={1.5} />
                                        </motion.div>
                                    </div>

                                    {/* Particles */}
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-300 rounded-full"
                                            initial={{ x: 0, y: 0, opacity: 0 }}
                                            animate={{
                                                x: (Math.random() - 0.5) * 200,
                                                y: (Math.random() - 0.5) * 200,
                                                opacity: [1, 0]
                                            }}
                                            transition={{ repeat: Infinity, duration: 1.5, delay: Math.random() }}
                                        />
                                    ))}
                                </div>

                                <motion.div
                                    className="mt-8 text-center"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="text-gray-400 font-mono text-lg mb-1">Applying algorithm...</div>
                                    <div className="flex gap-2 justify-center">
                                        <span className="bg-slate-800 px-3 py-1 rounded text-purple-300 font-mono border border-purple-500/30">FP32</span>
                                        <ArrowDown className="text-gray-500 rotate-[-90deg]" />
                                        <span className="bg-slate-800 px-3 py-1 rounded text-green-300 font-mono border border-green-500/30 animate-pulse">INT4</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* === STEP 3: SUCCESS (Laptop Happy) === */}
                    <AnimatePresence>
                        {step === 3 && (
                            <motion.div
                                key="success"
                                className="absolute top-0 w-full z-30"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring" }}
                            >
                                <motion.div
                                    className="w-full bg-slate-900 border-4 border-green-500 rounded-3xl p-8 flex flex-col items-center gap-4 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
                                >
                                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                                        <Check className="text-green-400 w-12 h-12" strokeWidth={4} />
                                    </div>

                                    <div className="text-center">
                                        <div className="text-green-400 font-black text-5xl mb-2">WORKS!</div>
                                        <div className="text-gray-300 text-xl">Model fits in <span className="text-white font-bold">16GB RAM</span></div>
                                    </div>

                                    {/* Fake Terminal */}
                                    <div className="w-full bg-black rounded-xl p-4 font-mono text-sm text-green-500 mt-2 border border-green-500/30">
                                        <div>&gt; loading model... done (1.2s)</div>
                                        <div>&gt; precision: INT4</div>
                                        <div>&gt; status: <span className="animate-pulse">READY</span></div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </SceneWrapper>
    );
};

export default QuantScene1;
