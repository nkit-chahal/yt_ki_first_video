import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MessageSquare, ArrowRight, Layers, Zap, Brain } from 'lucide-react';

// Architecture Scene - Steps 54-64: X-Encoder, Y-Encoder, Predictor blocks
const ArchitectureScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 54: Architecture intro */}
                {step === 54 && (
                    <motion.div
                        key="arch-intro"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Layers size={80} className="text-purple-500 mb-6" />
                        <h1 className="text-5xl font-bold text-white">
                            Understanding the <span className="text-purple-400">Architecture</span>
                        </h1>
                    </motion.div>
                )}

                {/* Step 55: VL-JEPA model architecture */}
                {step === 55 && (
                    <motion.div
                        key="arch-title"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gradient-to-r from-purple-500 to-blue-500 px-12 py-8 rounded-3xl shadow-2xl"
                            animate={{ boxShadow: ['0 0 30px rgba(139,92,246,0.3)', '0 0 60px rgba(139,92,246,0.5)', '0 0 30px rgba(139,92,246,0.3)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <h1 className="text-5xl font-black text-white text-center">
                                VL-JEPA Architecture
                            </h1>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 56-57: Simpler description */}
                {(step === 56 || step === 57) && (
                    <motion.div
                        key="simpler"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p className="text-2xl text-gray-400 mb-6">
                            {step === 56 ? 'The paper diagram was confusing...' : 'Let me show you a simpler version:'}
                        </p>

                        {step === 57 && (
                            <motion.div
                                className="bg-white/5 border border-white/10 rounded-2xl p-8"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                            >
                                <p className="text-xl text-white text-center">🎨 Simplified Visualization</p>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {/* Step 58-59: Language optional, understanding is not */}
                {(step === 58 || step === 59) && (
                    <motion.div
                        key="language-optional"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex items-center gap-8">
                            <motion.div
                                className="flex flex-col items-center opacity-50"
                                initial={{ x: -30 }}
                                animate={{ x: 0 }}
                            >
                                <MessageSquare size={60} className="text-gray-500" />
                                <span className="text-gray-500 font-bold mt-2">Language</span>
                                <span className="text-gray-600">Optional</span>
                            </motion.div>

                            <span className="text-4xl text-gray-600">vs</span>

                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ x: 30 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Brain size={60} className="text-purple-500" />
                                <span className="text-purple-400 font-bold mt-2">Understanding</span>
                                <span className="text-white">NOT Optional</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* Step 60: X-Encoder - Visual input */}
                {step === 60 && (
                    <motion.div
                        key="x-encoder"
                        className="flex items-center gap-8 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-blue-500/20 border-2 border-blue-500 rounded-2xl p-8"
                            initial={{ x: -50 }}
                            animate={{ x: 0 }}
                        >
                            <Eye size={60} className="text-blue-400 mx-auto mb-4" />
                            <h2 className="text-3xl font-black text-blue-400">X-Encoder</h2>
                            <p className="text-gray-400 mt-2">Visual Input</p>
                            <p className="text-gray-500 text-sm">(Video Frames)</p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 61: Y-Encoder - Encoded meanings */}
                {step === 61 && (
                    <motion.div
                        key="y-encoder"
                        className="flex items-center gap-8 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-purple-500/20 border-2 border-purple-500 rounded-2xl p-8"
                            initial={{ x: 50 }}
                            animate={{ x: 0 }}
                        >
                            <MessageSquare size={60} className="text-purple-400 mx-auto mb-4" />
                            <h2 className="text-3xl font-black text-purple-400">Y-Encoder</h2>
                            <p className="text-gray-400 mt-2">Encoded Meanings</p>
                            <p className="text-gray-500 text-sm">(From Words)</p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 62-63: Full architecture flow */}
                {(step === 62 || step === 63) && (
                    <motion.div
                        key="full-arch"
                        className="flex items-center gap-6 z-10 px-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Visual Input */}
                        <motion.div
                            className="bg-blue-500/20 border border-blue-500 rounded-xl p-4 flex flex-col items-center"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <Eye size={40} className="text-blue-400" />
                            <span className="text-blue-400 text-sm mt-2">Visual Input</span>
                        </motion.div>

                        <ArrowRight size={24} className="text-gray-600" />

                        {/* X-Encoder */}
                        <motion.div
                            className="bg-blue-600 rounded-xl p-4 flex flex-col items-center"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="text-white font-bold">X-Encoder</span>
                        </motion.div>

                        <ArrowRight size={24} className="text-gray-600" />

                        {/* Predictor */}
                        <motion.div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 flex flex-col items-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Zap size={40} className="text-white" />
                            <span className="text-white font-bold mt-2">Predictor</span>
                        </motion.div>

                        {step === 63 && (
                            <>
                                <ArrowRight size={24} className="text-gray-600" />

                                {/* Comparator */}
                                <motion.div
                                    className="bg-green-500/20 border border-green-500 rounded-xl p-4 flex flex-col items-center"
                                    initial={{ x: 30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <span className="text-green-400 font-bold">Comparator</span>
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                )}

                {/* Step 64: No heavy decoder, half parameters */}
                {step === 64 && (
                    <motion.div
                        key="efficiency"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex gap-8 mb-8">
                            <motion.div
                                className="bg-green-500/10 border border-green-500/30 px-8 py-4 rounded-2xl"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <span className="text-green-400 font-bold text-xl">No Heavy Decoder</span>
                            </motion.div>

                            <motion.div
                                className="bg-green-500/10 border border-green-500/30 px-8 py-4 rounded-2xl"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15 }}
                            >
                                <span className="text-green-400 font-bold text-xl">Half the Parameters</span>
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-3xl font-bold text-white"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Learns <span className="text-green-400">Faster</span> with <span className="text-green-400">Better Results</span>
                        </motion.p>

                        <motion.span
                            className="text-xl text-gray-500 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Pretty insane in ML terms 🤯
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ArchitectureScene;
