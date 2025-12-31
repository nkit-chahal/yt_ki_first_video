import { motion, AnimatePresence } from 'framer-motion';
import { Brain, MessageSquare, Lightbulb, Layers, Sparkles } from 'lucide-react';

// Semantic Thinking Scene - Steps 22-30: "Think without talking", abstract representation
const SemanticThinkingScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 22: Does not need to talk to think */}
                {step === 22 && (
                    <motion.div
                        key="no-talk"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative">
                            <motion.div
                                className="w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.5)]"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: progress > 0.1 ? 1 : 0,
                                    scale: progress > 0.1 ? [1, 1.05, 1] : 0
                                }}
                                transition={{ scale: { duration: 2, repeat: Infinity } }}
                            >
                                <Brain size={80} className="text-white" />
                            </motion.div>

                            {/* Crossed out speech bubble */}
                            <motion.div
                                className="absolute -right-16 -top-8"
                                initial={{ scale: 0, rotate: -20 }}
                                animate={{
                                    scale: progress > 0.4 ? 1 : 0,
                                    rotate: progress > 0.4 ? 0 : -20
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative">
                                    <MessageSquare size={60} className="text-gray-600" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-1 bg-red-500 rotate-45" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.h1
                            className="text-5xl font-black text-white mt-12 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                                y: progress > 0.6 ? 0 : 20,
                                opacity: progress > 0.6 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            Doesn't Need to <span className="text-red-400 line-through">Talk</span> to Think
                        </motion.h1>
                    </motion.div>
                )}

                {/* Step 23: Does not generate words by default */}
                {step === 23 && (
                    <motion.div
                        key="no-words"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex gap-4 mb-8">
                            {['word', 'word', 'word'].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-gray-700/50 border border-gray-600 px-6 py-3 rounded-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > (0.15 + i * 0.15) ? 0.3 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-gray-500 line-through text-xl">word</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.h1
                            className="text-4xl font-bold text-gray-400 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                        >
                            Does <span className="text-red-400 font-black">NOT</span> generate words by default
                        </motion.h1>
                    </motion.div>
                )}

                {/* Step 24: Predicts abstract representation */}
                {step === 24 && (
                    <motion.div
                        key="abstract-rep"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-64 h-64"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? 1 : 0.8,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Abstract representation visualization */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-8 h-8 bg-purple-500 rounded-full"
                                    style={{
                                        left: `${50 + 40 * Math.cos(i * Math.PI / 6)}%`,
                                        top: `${50 + 40 * Math.sin(i * Math.PI / 6)}%`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                    animate={{
                                        scale: progress > 0.2 ? [1, 1.3, 1] : 0,
                                        opacity: progress > 0.2 ? [0.5, 1, 0.5] : 0,
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.05,
                                        repeat: Infinity,
                                    }}
                                />
                            ))}

                            {/* Center */}
                            <motion.div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{
                                    rotate: progress > 0.3 ? 360 : 0,
                                    opacity: progress > 0.3 ? 1 : 0
                                }}
                                transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
                            >
                                <Layers size={40} className="text-white" />
                            </motion.div>
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-bold text-white mt-8 text-center"
                            animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                        >
                            Predicts <span className="text-purple-400">Abstract Representation</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-500 mt-2"
                            animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                        >
                            Meaning, directly
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 25: Not constrained by words */}
                {step === 25 && (
                    <motion.div
                        key="not-constrained"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="border-2 border-dashed border-gray-600 rounded-3xl px-16 py-8"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? 1 : 0.9,
                                borderColor: progress > 0.1 ? ['#4B5563', '#9333EA', '#4B5563'] : '#4B5563'
                            }}
                            transition={{ borderColor: { duration: 3, repeat: Infinity } }}
                        >
                            <motion.h1
                                className="text-4xl font-bold text-white text-center"
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                NOT Constrained by
                            </motion.h1>
                            <motion.p
                                className="text-2xl text-gray-500 text-center mt-2"
                                animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                            >
                                specific words or sentences
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="mt-8 text-5xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: progress > 0.7 ? 1 : 0 }}
                            transition={{ type: "spring" }}
                        >
                            🆓
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 26: Yann LeCun's belief */}
                {step === 26 && (
                    <motion.div
                        key="yann-belief"
                        className="flex items-center gap-12 z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Yann avatar */}
                        <motion.div
                            className="flex-shrink-0"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{
                                x: progress > 0.1 ? 0 : -50,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <Brain size={60} className="text-white" />
                            </div>
                            <motion.p
                                className="text-center text-gray-400 mt-2 font-medium"
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                Yann LeCun
                            </motion.p>
                        </motion.div>

                        {/* Quote */}
                        <motion.div
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{
                                x: progress > 0.4 ? 0 : 50,
                                opacity: progress > 0.4 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.p
                                className="text-3xl text-white font-medium italic"
                                animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                            >
                                "Intelligence = Understanding the World"
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 27: Language is output format */}
                {step === 27 && (
                    <motion.div
                        key="language-output"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex items-center gap-8">
                            {/* Thinking */}
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{
                                    y: progress > 0.1 ? 0 : -20,
                                    opacity: progress > 0.1 ? 1 : 0
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="w-32 h-32 bg-purple-500 rounded-full flex items-center justify-center">
                                    <Lightbulb size={60} className="text-white" />
                                </div>
                                <span className="text-purple-400 font-bold mt-4 text-xl">Thinking</span>
                                <span className="text-gray-500">via concepts</span>
                            </motion.div>

                            <motion.span
                                className="text-4xl text-gray-600"
                                animate={{
                                    scale: progress > 0.4 ? 1 : 0,
                                    opacity: progress > 0.4 ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                →
                            </motion.span>

                            {/* Language */}
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: progress > 0.6 ? 0 : 20,
                                    opacity: progress > 0.6 ? 0.6 : 0
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center border border-gray-600">
                                    <MessageSquare size={60} className="text-gray-400" />
                                </div>
                                <span className="text-gray-400 font-bold mt-4 text-xl">Language</span>
                                <span className="text-gray-600">just output format</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* Step 28: Builds internal understanding */}
                {step === 28 && (
                    <motion.div
                        key="internal-understanding"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? [1, 1.05, 1] : 0
                            }}
                            transition={{ scale: { duration: 3, repeat: Infinity } }}
                        >
                            <div className="w-56 h-56 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,0.4)]">
                                <Brain size={100} className="text-white" />
                            </div>

                            {/* Orbiting elements */}
                            {['🖼️', '🎥', '💭'].map((emoji, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-3xl"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                    }}
                                    animate={{
                                        x: progress > (0.3 + i * 0.1) ? [0, 120 * Math.cos(i * 2 * Math.PI / 3), 0] : 0,
                                        y: progress > (0.3 + i * 0.1) ? [0, 120 * Math.sin(i * 2 * Math.PI / 3), 0] : 0,
                                        opacity: progress > (0.3 + i * 0.1) ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                >
                                    {emoji}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-bold text-white mt-12 text-center"
                            animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                        >
                            Builds <span className="text-purple-400">Internal Understanding</span>
                        </motion.h1>
                    </motion.div>
                )}

                {/* Step 29: Thinking in latent space */}
                {step === 29 && (
                    <motion.div
                        key="latent-space"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex gap-6">
                            {[
                                { text: 'Thinking in Latent Space', icon: Layers },
                                { text: 'Reasoning in Meaning', icon: Lightbulb },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.text}
                                    className="bg-purple-500/10 border border-purple-500/30 px-8 py-6 rounded-2xl flex items-center gap-4"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{
                                        y: progress > (0.15 + i * 0.25) ? 0 : 30,
                                        opacity: progress > (0.15 + i * 0.25) ? 1 : 0
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <item.icon size={32} className="text-purple-400" />
                                    <span className="text-white font-bold text-xl">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="mt-8 bg-red-500/10 border border-red-500/30 px-8 py-4 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: progress > 0.7 ? 1 : 0 }}
                            transition={{ type: "spring" }}
                        >
                            <span className="text-red-400 font-bold text-xl">
                                NOT predicting next token
                            </span>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 30: Semantic space vs token space */}
                {step === 30 && (
                    <motion.div
                        key="semantic-vs-token"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-gray-400 mb-8"
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            Learns in...
                        </motion.h2>

                        <div className="flex items-center gap-12">
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ x: -30, opacity: 0 }}
                                animate={{
                                    x: progress > 0.25 ? 0 : -30,
                                    opacity: progress > 0.25 ? 1 : 0
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg">
                                    <Sparkles size={60} className="text-white" />
                                </div>
                                <span className="text-purple-400 font-black text-2xl mt-4">SEMANTIC</span>
                                <span className="text-gray-500">Space</span>
                            </motion.div>

                            <motion.span
                                className="text-4xl text-green-500 font-black"
                                initial={{ scale: 0 }}
                                animate={{ scale: progress > 0.7 ? 1 : 0 }}
                                transition={{ type: "spring" }}
                            >
                                ✓
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SemanticThinkingScene;

