import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Layers, GitBranch } from 'lucide-react';

// JEPA Intro Scene - Steps 4-6: VL-JEPA title reveal, architecture teaser
const JEPAIntroScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 4: VL-JEPA title */}
                {step === 4 && (
                    <motion.div
                        key="vl-jepa-title"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        {/* Paper Card */}
                        <motion.div
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl"
                            initial={{ rotateX: 45 }}
                            animate={{ rotateX: 0 }}
                            transition={{ type: "spring", damping: 20 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-black text-xl">M</span>
                                </div>
                                <span className="text-gray-400 text-sm">Meta AI Research</span>
                            </div>

                            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                VL-JEPA
                            </h1>

                            <motion.div
                                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 5: Joint Embedding Predictive Architecture */}
                {step === 5 && (
                    <motion.div
                        key="joint-embedding"
                        className="flex flex-col items-center z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-400 mb-4">Vision-Language Model</h2>

                        <div className="flex items-center gap-6">
                            {['Joint', 'Embedding', 'Predictive', 'Architecture'].map((word, i) => (
                                <motion.div
                                    key={word}
                                    className="flex flex-col items-center"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg">
                                        {word[0]}
                                    </div>
                                    <span className="text-white font-medium mt-2">{word}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-xl text-gray-500 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            = <span className="text-blue-400 font-bold">JEPA</span>
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 6: Extension of I-JEPA */}
                {step === 6 && (
                    <motion.div
                        key="i-jepa-extension"
                        className="flex items-center gap-16 z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* I-JEPA */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <div className="w-32 h-32 bg-gray-700 rounded-2xl flex items-center justify-center border-2 border-gray-600">
                                <span className="text-3xl font-black text-gray-400">I-JEPA</span>
                            </div>
                            <span className="text-gray-500 mt-2">Image Only</span>
                        </motion.div>

                        {/* Arrow */}
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <GitBranch size={40} className="text-purple-500" />
                            <span className="text-2xl text-purple-400 font-bold">Extension</span>
                        </motion.div>

                        {/* VL-JEPA */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
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
