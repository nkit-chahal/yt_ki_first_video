import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { File, CheckCircle, Sparkles, Command } from 'lucide-react';

// Scene 3: Demo - "Add Auth... Boom"
const Scene3 = ({ playbackSpeed = 1 }) => {
    const t = (val) => val / playbackSpeed;
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Step 0: Initial state (1s)
        // Step 1: Prompt typing (2s)
        // Step 2: Generation/Boom (3s+)
        const timers = [
            setTimeout(() => setStep(1), t(1000)),
            setTimeout(() => setStep(2), t(3000)),
            setTimeout(() => setStep(3), t(6000)), // Success
        ];
        return () => timers.forEach(id => clearTimeout(id));
    }, [playbackSpeed]);

    return (
        <div className="w-full h-full bg-[#090909] text-gray-300 font-mono text-xs flex flex-col overflow-hidden relative">

            {/* Top Bar (VS Code style) */}
            <div className="h-8 bg-[#1e1e1e] flex items-center px-4 border-b border-[#333]">
                <div className="flex gap-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-gray-500 ml-auto flex items-center gap-1">
                    <Command size={12} />
                    <span>Ctrl+K to Generate</span>
                </div>
            </div>

            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-48 bg-[#161616] border-r border-[#333] p-4 hidden md:block">
                    <div className="text-gray-500 uppercase text-[10px] tracking-wider mb-2">Explorer</div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-blue-400"><File size={12} /> page.tsx</div>
                        <div className="flex items-center gap-2 text-orange-400"><File size={12} /> layout.tsx</div>

                        {/* New Files appearing */}
                        <AnimatePresence>
                            {step >= 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: t(0.3) }}
                                    className="space-y-1"
                                >
                                    <div className="flex items-center gap-2 text-green-400"><File size={12} /> auth.ts</div>
                                    <div className="flex items-center gap-2 text-green-400"><File size={12} /> login.tsx</div>
                                    <div className="flex items-center gap-2 text-yellow-400"><File size={12} /> .env.local</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Main Editor */}
                <div className="flex-1 p-6 relative">
                    {/* Prompt Box Overlay */}
                    <AnimatePresence>
                        {step === 1 && (
                            <motion.div
                                className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 max-w-lg bg-[#252526] border border-blue-500/50 shadow-2xl rounded-lg p-4 z-20"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: t(0.2) }}
                            >
                                <div className="flex items-center gap-2 text-white text-sm mb-2">
                                    <Sparkles size={14} className="text-blue-400" />
                                    <span>Add user authentication to this Next.js app</span>
                                </div>
                                <div className="h-1 bg-blue-500/30 w-full rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-blue-500"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: t(1.5) }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Code Generation Effect */}
                    <div className="space-y-2">
                        <div className="text-pink-400">export default function <span className="text-yellow-300">AuthComponent</span>() {'{'}</div>
                        <AnimatePresence>
                            {step >= 2 && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: t(0.01), staggerChildren: 0.1 }} // Instant appear text
                                >
                                    <div className="pl-4 text-blue-300">const {`{ user, login, logout }`} = useAuth();</div>
                                    <div className="pl-4 text-gray-400">// Authenticated view</div>
                                    <div className="pl-4 text-green-300">if (user) return &lt;Dashboard /&gt;;</div>
                                    <div className="pl-4 text-gray-400">// Login view</div>
                                    <div className="pl-4 text-green-300">return &lt;LoginScreen onLogin={'{login}'} /&gt;;</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className="text-pink-400">{'}'}</div>
                    </div>

                    {/* BOOM Effect */}
                    {step === 2 && (
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: t(0.5) }}
                        >
                            <div className="text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">BOOM</div>
                        </motion.div>
                    )}

                    {/* Success State */}
                    {step >= 3 && (
                        <motion.div
                            className="absolute bottom-10 right-10 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/50 flex items-center gap-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                        >
                            <CheckCircle size={16} />
                            <span>Feature Added</span>
                        </motion.div>
                    )}

                </div>
            </div>

        </div>
    );
};

export default Scene3;
