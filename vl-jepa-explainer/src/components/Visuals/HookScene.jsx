import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, AlertTriangle } from 'lucide-react';

// Hook Scene - Steps 0-3: Meta logo, Yann LeCun intro, "End of LLMs?" hook
const HookScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            {/* Kinetic Background */}
            <div className="noise-overlay" />
            <div className="grid-background" />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <AnimatePresence mode="wait">
                {/* Step 0: Meta's AI Chief released a new paper */}
                {step === 0 && (
                    <motion.div
                        key="meta-logo"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    >
                        {/* Meta Logo */}
                        <motion.div
                            className="relative"
                            animate={{ rotateY: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.5)]">
                                <span className="text-white text-6xl font-black">M</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            className="text-5xl font-bold text-white mt-8 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Meta's AI Chief
                        </motion.h1>
                        <motion.p
                            className="text-2xl text-blue-400 mt-2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Released a New Paper
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 1: End of LLMs? */}
                {step === 1 && (
                    <motion.div
                        key="end-llms"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 1.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", damping: 20 }}
                    >
                        <motion.div
                            className="relative"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <AlertTriangle size={120} className="text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]" />
                        </motion.div>

                        <motion.h1
                            className="text-7xl font-black text-white mt-8 text-center"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            The <span className="text-red-500">END</span> of LLMs?
                        </motion.h1>
                    </motion.div>
                )}

                {/* Step 2: Let's talk about it */}
                {step === 2 && (
                    <motion.div
                        key="lets-talk"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="text-8xl"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            🎙️
                        </motion.div>
                        <h1 className="text-6xl font-bold text-white mt-6">
                            Let's Talk About It
                        </h1>
                    </motion.div>
                )}

                {/* Step 3: Yann LeCun intro */}
                {step === 3 && (
                    <motion.div
                        key="yann-intro"
                        className="flex items-center gap-12 z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -100 }}
                    >
                        {/* Yann LeCun placeholder */}
                        <motion.div
                            className="relative"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                                <Brain size={80} className="text-white" />
                            </div>
                            <motion.div
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-sm font-bold text-gray-800 whitespace-nowrap"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Yann LeCun
                            </motion.div>
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            className="flex-1"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-4xl font-bold text-white leading-tight">
                                Meta's AI Chief Scientist
                            </h2>
                            <p className="text-xl text-gray-400 mt-2">
                                Plans to leave to build his own startup...
                            </p>
                            <p className="text-2xl text-blue-400 mt-4 font-medium">
                                But first, he made an interesting paper.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HookScene;
