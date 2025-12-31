import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Layers, GitBranch } from 'lucide-react';

// JEPA Intro Scene - Steps 4-6: VL-JEPA title reveal, architecture teaser
const JEPAIntroScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 0 (visualStep 4): VL-JEPA title */}
                {step === 0 && (
                    <motion.div
                        key="vl-jepa-title"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        {/* Paper Card - appears at 10% */}
                        <motion.div
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl"
                            initial={{ rotateX: 45, opacity: 0 }}
                            animate={{
                                rotateX: progress > 0.1 ? 0 : 45,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ type: "spring", damping: 20 }}
                        >
                            {/* Meta Badge - appears at 20% */}
                            <motion.div
                                className="flex items-center gap-4 mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.2 ? 1 : 0 }}
                            >
                                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-black text-xl">M</span>
                                </div>
                                <span className="text-gray-400 text-sm">Meta AI Research</span>
                            </motion.div>

                            {/* VL-JEPA Title - appears at 40% */}
                            <motion.h1
                                className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                VL-JEPA
                            </motion.h1>

                            {/* Progress bar - grows with audio progress */}
                            <motion.div
                                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"
                                animate={{ width: `${Math.min(progress * 150, 100)}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 1 (visualStep 5): Joint Embedding Predictive Architecture */}
                {step === 1 && (
                    <motion.div
                        key="joint-embedding"
                        className="flex flex-col items-center z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Subtitle - appears at 10% */}
                        <motion.h2
                            className="text-3xl font-bold text-gray-400 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            Vision-Language Model
                        </motion.h2>

                        {/* JEPA letters - appear progressively */}
                        <div className="flex items-center gap-6">
                            {['Joint', 'Embedding', 'Predictive', 'Architecture'].map((word, i) => (
                                <motion.div
                                    key={word}
                                    className="flex flex-col items-center"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{
                                        y: progress > (0.2 + i * 0.15) ? 0 : 30,
                                        opacity: progress > (0.2 + i * 0.15) ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg">
                                        {word[0]}
                                    </div>
                                    <span className="text-white font-medium mt-2">{word}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* = JEPA - appears at 85% */}
                        <motion.p
                            className="text-xl text-gray-500 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.85 ? 1 : 0 }}
                        >
                            = <span className="text-blue-400 font-bold">JEPA</span>
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 2 (visualStep 6): Extension of I-JEPA */}
                {step === 2 && (
                    <motion.div
                        key="i-jepa-extension"
                        className="flex items-center gap-16 z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* I-JEPA - appears at 10% */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{
                                x: progress > 0.1 ? 0 : -50,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="w-32 h-32 bg-gray-700 rounded-2xl flex items-center justify-center border-2 border-gray-600">
                                <span className="text-3xl font-black text-gray-400">I-JEPA</span>
                            </div>
                            <span className="text-gray-500 mt-2">Image Only</span>
                        </motion.div>

                        {/* Arrow - appears at 40% */}
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.4 ? 1 : 0,
                                opacity: progress > 0.4 ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <GitBranch size={40} className="text-purple-500" />
                            <span className="text-2xl text-purple-400 font-bold">Extension</span>
                        </motion.div>

                        {/* VL-JEPA - appears at 70% */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{
                                x: progress > 0.7 ? 0 : 50,
                                opacity: progress > 0.7 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                                <span className="text-3xl font-black text-white">VL-JEPA</span>
                            </div>
                            <span className="text-blue-400 font-medium mt-2">Vision + Language</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default JEPAIntroScene;

