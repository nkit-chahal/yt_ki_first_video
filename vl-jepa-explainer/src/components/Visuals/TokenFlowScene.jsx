import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, Clock, AlertCircle } from 'lucide-react';

// Token Flow Scene - Steps 15-21: Generative system explanation, token-by-token generation
const TokenFlowScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 15: Generative system intro */}
                {step === 15 && (
                    <motion.div
                        key="generative-intro"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-orange-500/10 border-2 border-orange-500 rounded-2xl px-12 py-8"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? 1 : 0.8,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.h1
                                className="text-5xl font-black text-orange-400 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                GENERATIVE SYSTEM
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-400 text-center mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                            >
                                The Traditional Approach
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 16: ChatGPT, GPT-4, Gemini */}
                {step === 16 && (
                    <motion.div
                        key="model-examples"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.p
                            className="text-2xl text-gray-400 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            Models like...
                        </motion.p>

                        <div className="flex gap-8">
                            {[
                                { name: 'ChatGPT', color: 'bg-green-500' },
                                { name: 'GPT-4', color: 'bg-purple-500' },
                                { name: 'Gemini', color: 'bg-blue-500' },
                            ].map((model, i) => (
                                <motion.div
                                    key={model.name}
                                    className={`${model.color} px-8 py-4 rounded-2xl shadow-lg`}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{
                                        y: progress > (0.25 + i * 0.2) ? 0 : 30,
                                        opacity: progress > (0.25 + i * 0.2) ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-white text-2xl font-bold">{model.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 17: Produces tokens one at a time */}
                {step === 17 && (
                    <motion.div
                        key="tokens-one-by-one"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-gray-400 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            Produces tokens...
                        </motion.h2>

                        <div className="flex gap-4">
                            {['TOKEN', 'TOKEN', 'TOKEN', '...'].map((token, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-orange-500/20 border border-orange-500 px-6 py-4 rounded-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: progress > (0.2 + i * 0.15) ? 1 : 0,
                                        y: progress > (0.2 + i * 0.15) ? 0 : 20
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-orange-400 font-mono text-2xl">{token}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-2xl text-white mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.8 ? 1 : 0 }}
                        >
                            <span className="text-orange-400 font-bold">ONE</span> at a time
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 18: Left to right generation */}
                {step === 18 && (
                    <motion.div
                        key="left-to-right"
                        className="flex flex-col items-center z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex items-center gap-4">
                            {['The', 'quick', 'brown', 'fox', 'jumps', '...'].map((word, i) => (
                                <motion.div
                                    key={i}
                                    className="relative"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: progress > (0.1 + i * 0.12) ? 1 : 0,
                                        x: progress > (0.1 + i * 0.12) ? 0 : -20
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-lg">
                                        <span className="text-white font-bold text-xl">{word}</span>
                                    </div>
                                    {i < 5 && progress > (0.15 + i * 0.12) && (
                                        <motion.div
                                            className="absolute -right-4 top-1/2 -translate-y-1/2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <ArrowRight size={16} className="text-gray-500" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-xl text-gray-400 mt-8"
                            animate={{ opacity: progress > 0.85 ? 1 : 0 }}
                        >
                            Word by word, <span className="text-orange-400">left to right</span>
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 19: Every output must be certain */}
                {step === 19 && (
                    <motion.div
                        key="certain-output"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <AlertCircle size={80} className="text-yellow-500 mb-6" />
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-bold text-white text-center"
                            animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                        >
                            Every output must be
                        </motion.h1>
                        <motion.h1
                            className="text-6xl font-black text-yellow-400 mt-2"
                            animate={{
                                opacity: progress > 0.5 ? 1 : 0,
                                scale: progress > 0.5 ? [1, 1.05, 1] : 1
                            }}
                            transition={{ scale: { duration: 1, repeat: Infinity } }}
                        >
                            FULLY CERTAIN
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-500 mt-4"
                            animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                        >
                            to exist
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 20: Can't know final answer until finished */}
                {step === 20 && (
                    <motion.div
                        key="cant-know"
                        className="flex flex-col items-center z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-gray-400 mb-8"
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            To answer a question...
                        </motion.h2>

                        <div className="flex items-center gap-4">
                            <motion.div
                                className="bg-gray-800 border border-gray-700 px-8 py-6 rounded-2xl"
                                animate={{
                                    opacity: progress > 0.2 ? [0.5, 1, 0.5] : 0
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-gray-400 text-2xl font-mono">Generating...</span>
                            </motion.div>

                            <motion.div
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                <ArrowRight size={40} className="text-gray-600" />
                            </motion.div>

                            <motion.div
                                className="bg-green-500/20 border border-green-500 px-8 py-6 rounded-2xl"
                                animate={{ opacity: progress > 0.55 ? [0.3, 0.6, 0.3] : 0 }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-green-400/50 text-2xl">Final Answer?</span>
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-xl text-red-400 mt-8"
                            animate={{ opacity: progress > 0.75 ? 1 : 0 }}
                        >
                            ❌ Can't know until the <span className="font-bold">entire sentence</span> is finished
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 21: Very slow and painful */}
                {step === 21 && (
                    <motion.div
                        key="slow-painful"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <div className="flex items-center gap-8">
                            <motion.div
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: progress > 0.1 ? 1 : 0,
                                    scale: progress > 0.1 ? [1, 0.95, 1] : 0
                                }}
                                transition={{ scale: { duration: 1, repeat: Infinity } }}
                            >
                                <Clock size={60} className="text-red-500" />
                                <span className="text-5xl font-black text-red-400">SLOW</span>
                            </motion.div>

                            <motion.span
                                className="text-4xl text-gray-600"
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                &
                            </motion.span>

                            <motion.span
                                className="text-5xl font-black text-red-400"
                                animate={{
                                    opacity: progress > 0.6 ? [0.5, 1, 0.5] : 0
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                PAINFUL
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TokenFlowScene;

