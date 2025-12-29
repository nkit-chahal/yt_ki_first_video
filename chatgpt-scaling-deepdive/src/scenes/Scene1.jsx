import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, ArrowRight, Activity, ChevronRight, ChevronLeft } from 'lucide-react';

// Scene 1: The Memory Wall (Story Mode)
const Scene1 = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "The Beast",
            subtitle: "H100 GPU: 14,000 Cores",
            desc: "This is a Ferrari engine. It wants to do 1,000 Teraflops of math.",
            color: "text-white"
        },
        {
            title: "The Starvation",
            subtitle: "Waiting for Data",
            desc: "But it can't doing math if it doesn't have numbers. It sits idle.",
            color: "text-yellow-400"
        },
        {
            title: "The Bottleneck",
            subtitle: "Bandwidth vs Compute",
            desc: "Math is 100x faster than Memory. It's drinking from a coffee stirrer.",
            color: "text-red-500"
        },
        {
            title: "The Goal",
            subtitle: "Feed the Beast",
            desc: "How do we keep this $30,000 chip busy?",
            color: "text-primary"
        }
    ];

    const nextStep = () => setStep(s => Math.min(s + 1, steps.length - 1));
    const prevStep = () => setStep(s => Math.max(s - 1, 0));

    // Keyboard navigation for steps
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowUp') nextStep();
            if (e.key === 'ArrowDown') prevStep();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-start pt-12 p-8 relative overflow-hidden text-white font-sans">

            {/* Story Indicator */}
            <div className="flex gap-2 mb-8 absolute top-8 right-8">
                {steps.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-colors ${i === step ? 'bg-primary' : i < step ? 'bg-primary/30' : 'bg-gray-800'}`}
                    />
                ))}
            </div>

            {/* Dynamic Title */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    className="text-center mb-12 h-32"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <h1 className={`text-7xl font-black uppercase tracking-tight mb-4 ${steps[step].color}`}>
                        {steps[step].title}
                    </h1>
                    <p className="text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        {steps[step].desc}
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* Main Visual Stage */}
            <div className="flex-1 w-full max-w-7xl flex items-center justify-center relative">

                {/* 1. GPU (The Beast) */}
                <motion.div
                    className="absolute left-32 flex flex-col items-center gap-8"
                    animate={{
                        scale: step === 0 ? 1.2 : 1,
                        opacity: step === 2 ? 0.3 : 1
                    }}
                >
                    <div className="relative">
                        <motion.div
                            className="bg-gray-800 p-16 rounded-3xl border-4 border-primary shadow-[0_0_100px_rgba(16,163,127,0.5)]"
                            animate={{
                                boxShadow: step === 1 ? "0 0 0px rgba(16,163,127,0)" : "0 0 80px rgba(16,163,127,0.4)",
                                borderColor: step === 1 ? "#333" : "#10a37f"
                            }}
                        >
                            <Cpu size={180} className={step === 1 ? "text-gray-600" : "text-primary"} strokeWidth={1.5} />
                        </motion.div>
                        {step === 0 && (
                            <motion.div
                                className="absolute -top-6 -right-6 bg-yellow-400 text-black font-bold px-6 py-2 rounded-full text-xl"
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                            >
                                1,000 TFLOPS!
                            </motion.div>
                        )}
                        {step === 1 && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-3xl backdrop-blur-sm"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            >
                                <span className="text-4xl font-bold text-yellow-400">WAITING...</span>
                            </motion.div>
                        )}
                    </div>
                    <h2 className="text-4xl font-black">H100 GPU</h2>
                </motion.div>

                {/* 2. The Bottleneck (Pipe) */}
                <AnimatePresence>
                    {(step === 2 || step === 3) && (
                        <motion.div
                            className="absolute bg-gray-900 border-2 border-red-500 rounded-3xl p-12 z-20 flex flex-col items-center gap-6"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.5, opacity: 0 }}
                        >
                            <h3 className="text-5xl font-black text-red-500">The Bottleneck</h3>
                            <div className="flex items-center gap-12 mt-4">
                                <div className="text-center opacity-40">
                                    <div className="text-6xl font-bold">🚀</div>
                                    <p className="text-2xl mt-2">Compute</p>
                                </div>
                                <div className="text-7xl font-bold text-gray-600">vs</div>
                                <div className="text-center">
                                    <div className="text-6xl font-bold">🐢</div>
                                    <p className="text-2xl mt-2">Memory</p>
                                </div>
                            </div>
                            <p className="text-2xl text-red-300 mt-4 text-center">
                                Need: 100 TB/s<br />
                                Have: 3 TB/s
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 3. Memory (Fuel) */}
                <motion.div
                    className="absolute right-32 flex flex-col items-center gap-8"
                    animate={{
                        x: step === 0 ? 200 : 0,
                        opacity: step === 0 ? 0 : (step === 2 ? 0.3 : 1)
                    }}
                >
                    <div className="bg-gray-900 p-16 rounded-3xl border-4 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                        <Database size={180} className="text-blue-500" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl font-black">VRAM</h2>
                </motion.div>

                {/* Connection Pipe */}
                <motion.div
                    className="w-[400px] h-4 bg-gray-800 relative overflow-hidden rounded-full"
                    animate={{ opacity: step === 0 ? 0 : 1 }}
                >
                    <motion.div
                        className="absolute top-0 bottom-0 left-0 w-20 bg-blue-500 blur-md"
                        animate={{ x: ["-100%", "500%"] }}
                        transition={{ duration: step === 2 ? 4 : 1, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>

            </div>

            {/* Controls Hint */}
            <div className="absolute bottom-8 text-gray-500 text-xl font-mono flex items-center gap-4">
                <span className="bg-gray-800 px-3 py-1 rounded">↑ Next Step</span>
                <span className="bg-gray-800 px-3 py-1 rounded">↓ Prev Step</span>
            </div>

        </div>
    );
};

export default Scene1;
