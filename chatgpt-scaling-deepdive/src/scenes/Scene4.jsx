import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, CheckCircle, XCircle, ArrowRight, Zap, Target } from 'lucide-react';

// Scene 4: Speculative Decoding (Story Mode)
const Scene4 = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "The Problem",
            desc: "Big models are smart but heavy. Generating 1 by 1 is slow.",
            color: "text-white"
        },
        {
            title: "The Intern",
            desc: "Key Insight: A tiny 'Draft Model' is fast and often right.",
            color: "text-blue-400"
        },
        {
            title: "The Professor",
            desc: "GPT-4 verifies 5 draft tokens in ONE parallel step.",
            color: "text-yellow-400"
        },
        {
            title: "Cheat Code",
            desc: "We just generated 4 tokens for the price of 1.",
            color: "text-green-500"
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

    const draftTokens = ["The", "weather", "is", "nice", "today"];

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
            <div className="flex-1 w-full max-w-7xl flex items-center justify-center gap-16">

                {/* Draft Model (The Intern) */}
                <motion.div
                    className="flex flex-col items-center gap-6"
                    animate={{
                        opacity: step === 0 ? 0.3 : 1,
                        scale: step === 1 ? 1.1 : 1
                    }}
                >
                    <div className="relative">
                        <div className="bg-blue-900/40 p-12 rounded-3xl border-4 border-blue-500">
                            <Bot size={150} className="text-blue-400" strokeWidth={1.5} />
                        </div>
                        {step >= 1 && (
                            <motion.div
                                className="absolute -top-4 -right-4 bg-blue-500 text-white font-bold px-4 py-1 rounded-full text-lg"
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                            >
                                DRAFT
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Token Flow */}
                <div className="flex gap-4">
                    {draftTokens.map((token, i) => (
                        <motion.div
                            key={i}
                            className={`px-6 py-4 rounded-2xl font-bold text-2xl flex items-center gap-2
                                ${step === 1 ? 'bg-blue-600' :
                                    step >= 2 ? (i === 4 ? 'bg-red-600' : 'bg-green-600') : 'bg-gray-800'}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: step >= 1 ? 1 : 0, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {token}
                            {step >= 2 && (i === 4 ? <XCircle size={24} /> : <CheckCircle size={24} />)}
                        </motion.div>
                    ))}
                </div>

                {/* Main Model (The Professor) */}
                <motion.div
                    className="flex flex-col items-center gap-6"
                    animate={{
                        opacity: step >= 2 ? 1 : 0.3,
                        scale: step === 2 ? 1.1 : 1
                    }}
                >
                    <div className="relative">
                        <div className="bg-primary/30 p-12 rounded-3xl border-4 border-primary">
                            <Bot size={180} className="text-primary" strokeWidth={1.5} />
                        </div>
                        {step >= 2 && (
                            <motion.div
                                className="absolute -top-4 -right-4 bg-primary text-black font-bold px-4 py-1 rounded-full text-lg"
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                            >
                                VERIFY
                            </motion.div>
                        )}
                    </div>
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

export default Scene4;
