import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Layers, Terminal } from 'lucide-react';

// Step 3: Implement - Steps 14-17 (KINETIC REDESIGN)
const Step3Scene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">

            <div className="noise-overlay" />

            {/* Coding Matrix Background */}
            <div className="absolute inset-0 font-mono text-xs opacity-20 p-4 overflow-hidden leading-tight text-green-500">
                {`import torch\nimport torch.nn as nn\nclass Transformer(nn.Module):\n    def __init__(self):\n        super().__init__()\n`.repeat(20)}
            </div>

            <AnimatePresence mode="wait">
                {step === 14 && (
                    <motion.div
                        key="title"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <Terminal size={64} className="text-white" />
                            <div className="h-16 w-1 bg-white animate-pulse" />
                        </div>

                        <h1 className="text-6xl font-black text-white">
                            IMPLEMENT
                        </h1>
                        <h1 className="text-6xl font-black text-green-400">
                            FROM SCRATCH
                        </h1>
                    </motion.div>
                )}

                {step === 15 && (
                    <motion.div
                        key="code"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex flex-col items-center gap-12">
                            {/* Reading (Faded) */}
                            <div className="opacity-30 flex flex-col items-center scale-75 blur-[2px]">
                                <div className="w-32 h-40 bg-gray-300 rounded-lg" />
                                <span className="text-2xl font-bold mt-4">Read</span>
                            </div>

                            {/* Arrows */}
                            <motion.div
                                className="text-4xl text-gray-400 rotate-90"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                ➔
                            </motion.div>

                            {/* Coding (Active) */}
                            <motion.div
                                className="bg-black/90 p-6 rounded-2xl shadow-2xl animate-float-medium border border-gray-700"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1.1 }}
                            >
                                <Code size={64} className="text-green-400 mb-4" />
                                <span className="text-white text-3xl font-mono font-bold">CODE IT</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {step === 16 && (
                    <motion.div
                        key="transformer"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* 3D Transformer Block */}
                        <div className="relative animate-float-slow perspective-1000">
                            <div className="w-64 h-64 bg-blue-500 rounded-3xl flex flex-col items-center justify-center text-white shadow-[0_20px_60px_rgba(59,130,246,0.4)] transform rotate-y-12 border-4 border-blue-300">
                                <Cpu size={100} className="text-white mb-4" />
                                <span className="font-black text-3xl tracking-wider">TRANSFORMER</span>
                            </div>

                            {/* Connecting wires */}
                            <div className="absolute top-1/2 -right-20 w-20 h-2 bg-blue-300 rounded-full" />
                            <div className="absolute top-1/2 -left-20 w-20 h-2 bg-blue-300 rounded-full" />
                        </div>
                    </motion.div>
                )}

                {step === 17 && (
                    <motion.div
                        key="diffusion"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="relative animate-float-medium">
                            {/* Noise effect for diffusion */}
                            <motion.div
                                className="w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 absolute top-0 left-0"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            <div className="w-64 h-64 bg-black/50 backdrop-blur-xl border border-pink-500/50 rounded-[40px] flex flex-col items-center justify-center p-8 shadow-2xl relative z-10">
                                <Layers size={100} className="text-pink-500 mb-4" />
                                <span className="font-black text-3xl text-pink-400 tracking-wider">DIFFUSION</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Step3Scene;
