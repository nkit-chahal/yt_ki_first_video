import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, AlertTriangle } from 'lucide-react';

// Hook Scene - Steps 0-3: Meta logo, Yann LeCun intro, "End of LLMs?" hook
const HookScene = ({ step, progress = 0 }) => {
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
                        {/* Meta Logo - appears immediately */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, rotateY: -90 }}
                            animate={{
                                opacity: progress > 0.05 ? 1 : 0,
                                rotateY: progress > 0.05 ? 0 : -90
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                animate={{ rotateY: [0, 360] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.5)]">
                                    <span className="text-white text-6xl font-black">M</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Title - appears at 30% progress */}
                        <motion.h1
                            className="text-5xl font-bold text-white mt-8 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                                y: progress > 0.3 ? 0 : 20,
                                opacity: progress > 0.3 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            Meta's AI Chief
                        </motion.h1>

                        {/* Subtitle - appears at 60% progress */}
                        <motion.p
                            className="text-2xl text-blue-400 mt-2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                                y: progress > 0.6 ? 0 : 20,
                                opacity: progress > 0.6 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
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
                        {/* Warning Icon - appears at 10% */}
                        <motion.div
                            className="relative"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? [1, 1.05, 1] : 0,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <AlertTriangle size={120} className="text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]" />
                        </motion.div>

                        {/* Main Text - appears at 40% */}
                        <motion.h1
                            className="text-7xl font-black text-white mt-8 text-center"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{
                                y: progress > 0.4 ? 0 : 30,
                                opacity: progress > 0.4 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
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
                        {/* Microphone - appears at 10% */}
                        <motion.div
                            className="text-8xl"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? 1 : 0,
                                opacity: progress > 0.1 ? 1 : 0,
                                rotate: progress > 0.1 ? [0, 10, -10, 0] : 0
                            }}
                            transition={{
                                scale: { duration: 0.3 },
                                rotate: { duration: 1, repeat: Infinity }
                            }}
                        >
                            🎙️
                        </motion.div>

                        {/* Text - appears at 50% */}
                        <motion.h1
                            className="text-6xl font-bold text-white mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: progress > 0.5 ? 1 : 0,
                                y: progress > 0.5 ? 0 : 20
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            Let's Talk About It
                        </motion.h1>
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
                        {/* Yann LeCun placeholder - appears at 10% */}
                        <motion.div
                            className="relative"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{
                                x: progress > 0.1 ? 0 : -50,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500">
                                <img
                                    src="/yann-lecun.png"
                                    alt="Yann LeCun"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <motion.div
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-sm font-bold text-gray-800 whitespace-nowrap"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: progress > 0.25 ? 1 : 0,
                                    opacity: progress > 0.25 ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Yann LeCun
                            </motion.div>
                        </motion.div>

                        {/* Text - staggered appearance */}
                        <motion.div
                            className="flex-1"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{
                                x: progress > 0.2 ? 0 : 50,
                                opacity: progress > 0.2 ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h2
                                className="text-4xl font-bold text-white leading-tight"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                Meta's AI Chief Scientist
                            </motion.h2>
                            <motion.p
                                className="text-xl text-gray-400 mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                            >
                                Plans to leave to build his own startup...
                            </motion.p>
                            <motion.p
                                className="text-2xl text-blue-400 mt-4 font-medium"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.75 ? 1 : 0 }}
                            >
                                But first, he made an interesting paper.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HookScene;

