import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Lock, Zap, RefreshCw, ChevronDown } from 'lucide-react';

// Scene 2: KV Caching (Story Mode)
const Scene2 = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "Wait... Redundant?",
            desc: "The model re-reads the whole book just to write the next word.",
            color: "text-white"
        },
        {
            title: "The Math Explosion",
            desc: "Without cache, 1000 tokens means 1,000,000 calculations.",
            color: "text-red-500"
        },
        {
            title: "Smart Storage",
            desc: "We save (Cache) the past understanding.",
            color: "text-primary"
        },
        {
            title: "Zero Waste",
            desc: "Now we ONLY compute the new token.",
            color: "text-green-400"
        }
    ];

    const nextStep = () => setStep(s => Math.min(s + 1, steps.length - 1));
    const prevStep = () => setStep(s => Math.max(s - 1, 0));

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowUp') nextStep();
            if (e.key === 'ArrowDown') prevStep();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    const tokens = ["The", "cat", "sat", "on", "the"];

    return (
        <div className="w-full h-full bg-bg-main flex flex-col items-center justify-start pt-12 p-8 relative overflow-hidden text-white font-sans">

            {/* Story Indicator */}
            <div className="flex gap-2 mb-8 absolute top-8 right-8">
                {steps.map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full transition-colors ${i === step ? 'bg-primary' : i < step ? 'bg-primary/30' : 'bg-gray-800'}`} />
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
            <div className="flex-1 w-full max-w-6xl flex flex-col items-center justify-center relative">

                {/* Generation Loop Visualization */}
                <div className="flex gap-6 mb-16">
                    {tokens.map((token, i) => (
                        <motion.div
                            key={i}
                            className={`p-8 rounded-2xl border-2 flex flex-col items-center transition-all duration-500
                                ${step >= 2 ? 'bg-green-900/30 border-green-500' : 'bg-gray-800 border-gray-600'}`}
                            animate={{
                                scale: step === 0 ? [1, 1.1, 1] : 1, // Pulse in step 0
                                opacity: step === 1 ? 0.3 : 1
                            }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="text-4xl font-bold mb-2">"{token}"</span>
                            {step >= 2 && <Lock size={24} className="text-green-400" />}
                            {step < 2 && <RefreshCw size={24} className="text-gray-500 animate-spin" />}
                        </motion.div>
                    ))}

                    {/* The New Token */}
                    <motion.div
                        className="p-8 rounded-2xl border-4 border-primary bg-primary/20 flex flex-col items-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity }}
                    >
                        <span className="text-4xl font-bold mb-2 text-white">?</span>
                        <Zap size={24} className="text-primary" />
                    </motion.div>
                </div>

                {/* The "Cost" Graph Overlay */}
                <AnimatePresence>
                    {step === 1 && (
                        <motion.div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-3xl"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        >
                            <div className="relative w-[600px] h-[400px] border-l-4 border-b-4 border-white p-4">
                                <motion.path
                                    d="M 0 400 Q 300 350 600 0"
                                    stroke="red" strokeWidth="8" fill="transparent"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                                />
                                <div className="absolute top-0 right-0 text-red-500 text-6xl font-black">O(n²)</div>
                                <div className="absolute bottom-4 right-4 text-gray-400 text-2xl">Context Length →</div>
                                <div className="absolute top-4 left-4 text-gray-400 text-2xl">Compute Cost ↑</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* The "Freezing" Overlay */}
                <AnimatePresence>
                    {step === 2 && (
                        <motion.div
                            className="absolute -top-10 text-center"
                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                        >
                            <div className="bg-green-500 text-black font-black text-2xl px-6 py-2 rounded-full mb-4">
                                CACHED TO VRAM
                            </div>
                            <ChevronDown size={40} className="text-green-500 mx-auto animate-bounce" />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            {/* Controls Hint */}
            <div className="absolute bottom-8 text-gray-500 text-xl font-mono flex items-center gap-4">
                <span className="bg-gray-800 px-3 py-1 rounded">↑ Next Step</span>
                <span className="bg-gray-800 px-3 py-1 rounded">↓ Prev Step</span>
            </div>

        </div>
    );
};

export default Scene2;
