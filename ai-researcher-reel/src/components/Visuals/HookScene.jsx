import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Map, GraduationCap, ArrowRight, Star } from 'lucide-react';

// Hook Scene - Steps 0-2 (KINETIC REDESIGN)
const HookScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">

            {/* 1. Kinetic Background Layers */}
            <div className="noise-overlay" />
            <div className="grid-background" />

            {/* Floating Orbs (Background Interest) */}
            <motion.div
                animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-10 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ x: [0, -100, 0], y: [0, 50, 0], rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity }}
                className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"
            />

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="question"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    >
                        {/* Main Floating Element */}
                        <div className="relative animate-float-slow">
                            {/* Glow behind */}
                            <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 transform scale-150" />

                            <div className="w-56 h-56 bg-black/50 backdrop-blur-xl rounded-[40px] flex items-center justify-center border border-white/20 shadow-2xl relative z-10">
                                <Brain size={120} className="text-purple-600 drop-shadow-lg" />

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-6 -right-6 bg-black text-white px-4 py-2 rounded-full font-bold shadow-lg border-2 border-white"
                                >
                                    2026?
                                </motion.div>
                            </div>
                        </div>

                        {/* Staggered Text Reveal */}
                        <div className="mt-12 text-center">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-6xl font-black text-white tracking-tight leading-tight"
                            >
                                AI RESEARCHER
                            </motion.h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mx-auto"
                            />
                        </div>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="roadmap"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        exit={{ opacity: 0, rotateX: -90 }}
                        transition={{ type: "spring", damping: 20 }}
                    >
                        {/* 3D Tilted Card */}
                        <div className="relative animate-float-medium perspective-1000">
                            <div className="w-80 h-96 light-card flex flex-col items-center justify-center p-8 transform rotate-y-12 rotate-z-2 hover:rotate-0 transition-transform duration-500">
                                <div className="w-24 h-24 bg-blue-100/50 rounded-2xl flex items-center justify-center mb-6">
                                    <Map size={48} className="text-blue-600" />
                                </div>
                                <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center leading-tight">
                                    THE<br />ROADMAP
                                </h1>
                                <div className="mt-6 flex items-center gap-2 text-gray-400 font-mono text-sm py-2 px-4 bg-gray-100 rounded-full">
                                    <div className="mt-6 flex items-center gap-2 text-gray-200 font-mono text-sm py-2 px-4 bg-gray-800 rounded-full">
                                        <Star size={14} fill="currentColor" />
                                        <span>SECRET METHOD</span>
                                    </div>
                                </div>

                                {/* Floating Elements behind */}
                                <motion.div
                                    animate={{ x: [-20, 20, -20] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="nophd"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 1.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", bounce: 0.4 }}
                    >
                        <div className="relative">
                            <div className="w-64 h-64 bg-green-50 rounded-full border-4 border-green-200 flex items-center justify-center shadow-inner animate-pulse-slow">
                                <GraduationCap size={100} className="text-gray-300 opacity-50" />
                            </div>

                            {/* Violent X animation */}
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <svg width="200" height="200" viewBox="0 0 100 100">
                                    <line x1="20" y1="20" x2="80" y2="80" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
                                    <line x1="80" y1="20" x2="20" y2="80" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
                                </svg>
                            </motion.div>
                        </div>

                        <motion.h1
                            className="text-6xl font-black text-white mt-8 shimmer-text"
                        >
                            NO PhD
                        </motion.h1>
                        <p className="text-2xl text-gray-500 font-medium tracking-widest mt-2 uppercase">Required</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HookScene;
