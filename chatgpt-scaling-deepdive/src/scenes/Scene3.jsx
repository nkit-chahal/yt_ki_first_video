import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, AlertTriangle, Play } from 'lucide-react';

// Scene 3: Continuous Batching (Story Mode)
const Scene3 = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "Traffic Jam",
            desc: "Naive Batching: Everyone waits for the slowest person.",
            color: "text-red-500"
        },
        {
            title: "The Waste",
            desc: "Lane 1 is empty, but blocked. GPU is sleeping.",
            color: "text-yellow-400"
        },
        {
            title: "Orca Scheduling",
            desc: "We check every millisecond: 'Is a lane free?'",
            color: "text-blue-400"
        },
        {
            title: "Tetris Mode",
            desc: "Continuous Batching. 3x Throughput.",
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

    const requests = [
        { id: "A", size: 30, color: "bg-red-500" },
        { id: "B", size: 100, color: "bg-blue-500" }, // The slow one
        { id: "C", size: 50, color: "bg-yellow-500" }
    ];

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
            <div className="flex-1 w-full max-w-6xl flex flex-col gap-8 relative mt-8">

                {requests.map((req, i) => (
                    <div key={i} className="flex items-center gap-6">
                        <span className="text-2xl font-mono text-gray-500 w-24">Lane {i + 1}</span>
                        <div className="flex-1 h-24 bg-gray-900 rounded-xl border-2 border-gray-700 relative overflow-hidden flex items-center px-2">

                            {/* The Request Block */}
                            <motion.div
                                className={`${req.color} h-20 rounded-lg flex items-center justify-center shadow-lg`}
                                style={{ width: `${req.size}%` }}
                                layout
                            >
                                <span className="text-2xl font-black">REQ {req.id}</span>
                            </motion.div>

                            {/* Naive Waste Overlay */}
                            {step < 2 && req.size < 100 && (
                                <motion.div
                                    className="h-20 flex-1 ml-2 bg-red-900/20 border-2 border-dashed border-red-500/30 rounded-lg flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <Clock className="text-red-500 mr-2" />
                                    <span className="text-red-500 font-bold">BLOCKED</span>
                                </motion.div>
                            )}

                            {/* New Request (Step 3+) */}
                            {step >= 2 && req.size < 100 && (
                                <motion.div
                                    className="h-20 flex-1 ml-2 bg-green-500 rounded-lg flex items-center justify-center shadow-lg"
                                    initial={{ x: 200, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <span className="text-2xl font-black text-black">NEXT!</span>
                                </motion.div>
                            )}
                        </div>
                    </div>
                ))}

            </div>

            {/* Controls Hint */}
            <div className="absolute bottom-8 text-gray-500 text-xl font-mono flex items-center gap-4">
                <span className="bg-gray-800 px-3 py-1 rounded">↑ Next Step</span>
                <span className="bg-gray-800 px-3 py-1 rounded">↓ Prev Step</span>
            </div>

        </div>
    );
};

export default Scene3;
