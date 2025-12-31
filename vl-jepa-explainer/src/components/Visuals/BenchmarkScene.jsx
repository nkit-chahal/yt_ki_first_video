import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, TrendingUp, Zap, BarChart3 } from 'lucide-react';

// Benchmark Scene - Steps 65-83: Scoreboard, charts, efficiency comparisons
const BenchmarkScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 65-66: Scoreboard intro */}
                {(step === 65 || step === 66) && (
                    <motion.div
                        key="scoreboard-intro"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Trophy size={80} className="text-yellow-400 mb-6" />
                        <h1 className="text-5xl font-black text-white">
                            {step === 65 ? 'Currently the BEST' : 'The Scoreboard'}
                        </h1>
                    </motion.div>
                )}

                {/* Step 67: VL-JEPA is the best */}
                {step === 67 && (
                    <motion.div
                        key="vljepa-best"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gradient-to-r from-purple-500 to-blue-500 px-16 py-8 rounded-3xl shadow-2xl"
                            animate={{ boxShadow: ['0 0 40px rgba(139,92,246,0.4)', '0 0 80px rgba(139,92,246,0.6)', '0 0 40px rgba(139,92,246,0.4)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <h1 className="text-6xl font-black text-white">VL-JEPA</h1>
                            <p className="text-2xl text-white/80 text-center mt-2">🏆 #1</p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 68-70: Parameter comparison */}
                {(step >= 68 && step <= 70) && (
                    <motion.div
                        key="params-compare"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-400 mb-8">Parameters</h2>

                        <div className="flex gap-6">
                            {[
                                { name: 'Others', params: '3.8B', color: 'bg-gray-700', textColor: 'text-gray-400' },
                                { name: 'Others', params: '3.7B', color: 'bg-gray-700', textColor: 'text-gray-400' },
                                { name: 'VL-JEPA', params: '1.6B', color: 'bg-purple-500', textColor: 'text-white', highlight: true },
                            ].map((model, i) => (
                                <motion.div
                                    key={i}
                                    className={`${model.color} px-8 py-6 rounded-2xl ${model.highlight ? 'shadow-[0_0_30px_rgba(139,92,246,0.4)]' : ''}`}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    <p className={`${model.textColor} font-bold text-xl`}>{model.name}</p>
                                    <p className={`${model.textColor} text-3xl font-black mt-2`}>{model.params}</p>
                                </motion.div>
                            ))}
                        </div>

                        {step === 70 && (
                            <motion.p
                                className="text-xl text-green-400 mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                ✓ Less than half!
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {/* Step 71-73: Compared to CLIP, SigLIP */}
                {(step >= 71 && step <= 73) && (
                    <motion.div
                        key="vs-clip"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p className="text-2xl text-gray-400 mb-8">Compared to older models...</p>

                        <div className="flex gap-12">
                            <motion.div
                                className="flex flex-col items-center opacity-50"
                                initial={{ x: -30 }}
                                animate={{ x: 0 }}
                            >
                                <div className="w-24 h-24 bg-gray-700 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-400 font-bold">CLIP</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex flex-col items-center opacity-50"
                                initial={{ x: -20 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="w-24 h-24 bg-gray-700 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-400 font-bold">SigLIP</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ x: 20 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="w-24 h-24 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold">VL-JEPA</span>
                                </div>
                                <span className="text-green-400 mt-2">More Efficient</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* Step 74-76: Learning efficiency chart */}
                {(step >= 74 && step <= 76) && (
                    <motion.div
                        key="learning-chart"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-400 mb-8">Samples Seen vs Performance</h2>

                        <div className="relative w-96 h-64 bg-gray-900/50 border border-gray-700 rounded-xl p-4">
                            {/* Axes */}
                            <div className="absolute left-4 bottom-4 w-80 h-1 bg-gray-600" />
                            <div className="absolute left-4 bottom-4 h-48 w-1 bg-gray-600" />

                            {/* VL-JEPA line (steeper) */}
                            <motion.div
                                className="absolute left-8 bottom-8 w-72 h-1 bg-gradient-to-r from-purple-500 to-blue-500 origin-left"
                                style={{ transform: 'rotate(-25deg)' }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1 }}
                            />

                            {/* Other models line (flatter) */}
                            <motion.div
                                className="absolute left-8 bottom-8 w-72 h-1 bg-gray-500 origin-left"
                                style={{ transform: 'rotate(-10deg)' }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            />

                            {/* Labels */}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-500 text-sm">Samples</span>
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-gray-500 text-sm">Accuracy</span>
                        </div>

                        {step >= 75 && (
                            <motion.p
                                className="text-xl text-purple-400 mt-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                VL-JEPA learns faster with less data
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {/* Step 77-78: Predicting meaning > predicting words */}
                {(step === 77 || step === 78) && (
                    <motion.div
                        key="meaning-vs-words"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {step === 77 && (
                            <h1 className="text-4xl font-bold text-white text-center">
                                This kills the idea that you need <span className="text-red-400 line-through">token generation</span>
                                <br />to understand things
                            </h1>
                        )}

                        {step === 78 && (
                            <div className="flex items-center gap-8">
                                <motion.div
                                    className="bg-purple-500 px-8 py-4 rounded-2xl"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <span className="text-white font-bold text-2xl">Predicting Meaning</span>
                                </motion.div>

                                <span className="text-4xl text-green-400">{'>'}</span>

                                <div className="bg-gray-700 px-8 py-4 rounded-2xl opacity-60">
                                    <span className="text-gray-400 font-bold text-2xl">Predicting Words</span>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Step 79-80: Zero-shot classification */}
                {(step === 79 || step === 80) && (
                    <motion.div
                        key="zero-shot"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-400 mb-8">Zero-Shot Video Classification</h2>

                        <div className="flex items-center gap-8">
                            <BarChart3 size={60} className="text-blue-400" />
                            <motion.div
                                className="bg-purple-500/20 border border-purple-500 px-12 py-6 rounded-2xl"
                                animate={{ boxShadow: ['0 0 20px rgba(139,92,246,0.2)', '0 0 40px rgba(139,92,246,0.4)', '0 0 20px rgba(139,92,246,0.2)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-purple-400 font-bold text-3xl">VL-JEPA Leads</span>
                            </motion.div>
                        </div>

                        {step === 80 && (
                            <motion.p
                                className="text-xl text-green-400 mt-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                Beats the competition 🏆
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {/* Step 81-83: Model size comparison */}
                {(step >= 81 && step <= 83) && (
                    <motion.div
                        key="size-compare"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-400 mb-8">Model Size</h2>

                        <div className="flex items-end gap-8">
                            {/* Big model */}
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.5 }}
                            >
                                <div className="w-32 h-48 bg-gray-700 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-400">BIG</span>
                                </div>
                                <span className="text-gray-500 mt-2">Generative</span>
                            </motion.div>

                            {/* VL-JEPA (small) */}
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="w-20 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white text-sm font-bold">VL-JEPA</span>
                                </div>
                                <span className="text-green-400 mt-2">Efficient!</span>
                            </motion.div>
                        </div>

                        {step === 83 && (
                            <motion.p
                                className="text-2xl text-white mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                Reasons like a human. Learns faster. More efficient.
                            </motion.p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BenchmarkScene;
