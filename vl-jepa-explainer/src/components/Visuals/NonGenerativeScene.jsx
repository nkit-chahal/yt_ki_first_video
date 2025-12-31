import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Brain, Eye, Video, Sparkles } from 'lucide-react';

// Non-Generative Scene - Steps 7-11: ChatGPT comparison, internal understanding
const NonGenerativeScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 7: Meta's FAIR lab */}
                {step === 7 && (
                    <motion.div
                        key="fair-lab"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="flex items-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                y: progress > 0.1 ? [0, -10, 0] : 20
                            }}
                            transition={{ duration: 0.5, y: { duration: 3, repeat: Infinity } }}
                        >
                            <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center">
                                <span className="text-white text-4xl font-black">M</span>
                            </div>
                            <div className="text-left">
                                <h2 className="text-4xl font-black text-white">FAIR Lab</h2>
                                <p className="text-xl text-gray-400">Fundamental AI Research</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-8 flex items-center gap-3 bg-purple-500/20 border border-purple-500/30 px-6 py-3 rounded-full"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                                y: progress > 0.5 ? 0 : 20,
                                opacity: progress > 0.5 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <Brain size={24} className="text-purple-400" />
                            <span className="text-purple-300 font-medium">Led by Yann LeCun</span>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 8: Unlike ChatGPT */}
                {step === 8 && (
                    <motion.div
                        key="unlike-chatgpt"
                        className="flex items-center gap-12 z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* ChatGPT side */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{
                                x: progress > 0.1 ? 0 : -50,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="w-32 h-32 bg-green-500/20 border-2 border-green-500 rounded-2xl flex items-center justify-center">
                                <MessageSquare size={64} className="text-green-400" />
                            </div>
                            <span className="text-green-400 font-bold mt-4 text-xl">ChatGPT</span>
                            <motion.p
                                className="text-gray-500 text-center mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                Generates words<br />one by one
                            </motion.p>

                            {/* Token animation */}
                            <motion.div className="flex gap-2 mt-4">
                                {['The', 'cat', 'sat', '...'].map((word, i) => (
                                    <motion.span
                                        key={word}
                                        className="bg-green-500/30 px-3 py-1 rounded text-green-300 text-sm"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: progress > (0.4 + i * 0.1) ? 1 : 0,
                                            y: progress > (0.4 + i * 0.1) ? 0 : 10
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* VS */}
                        <motion.div
                            className="text-4xl font-black text-gray-600"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.25 ? 1 : 0,
                                opacity: progress > 0.25 ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            VS
                        </motion.div>

                        {/* VL-JEPA side */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{
                                x: progress > 0.6 ? 0 : 50,
                                opacity: progress > 0.6 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="w-32 h-32 bg-purple-500/20 border-2 border-purple-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                <Brain size={64} className="text-purple-400" />
                                <motion.div
                                    className="absolute inset-0 bg-purple-500/30"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.6 ? [0.5, 0, 0.5] : 0 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <span className="text-purple-400 font-bold mt-4 text-xl">VL-JEPA</span>
                            <p className="text-gray-500 text-center mt-2">Something<br />completely different...</p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 9: Does something completely different */}
                {step === 9 && (
                    <motion.div
                        key="completely-different"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? 1 : 0,
                                rotate: progress > 0.1 ? 360 : 0
                            }}
                            transition={{
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.3 },
                                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                            }}
                        >
                            <Sparkles size={80} className="text-yellow-400" />
                        </motion.div>

                        <motion.h1
                            className="text-6xl font-black text-white mt-8 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                        >
                            Completely <span className="text-purple-400">Different</span>
                        </motion.h1>
                    </motion.div>
                )}

                {/* Step 10: Non-generative model */}
                {step === 10 && (
                    <motion.div
                        key="non-generative"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-red-500/10 border-2 border-red-500 rounded-full px-12 py-6"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? [1, 1.05, 1] : 0,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ scale: { duration: 2, repeat: Infinity } }}
                        >
                            <h1 className="text-5xl font-black text-red-400">
                                NON-GENERATIVE
                            </h1>
                        </motion.div>

                        <motion.p
                            className="text-2xl text-gray-400 mt-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                                y: progress > 0.5 ? 0 : 20,
                                opacity: progress > 0.5 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            Does NOT generate tokens
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 11: Builds internal understanding */}
                {step === 11 && (
                    <motion.div
                        key="internal-understanding"
                        className="flex items-center gap-8 z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Input: Images/Video */}
                        <motion.div
                            className="flex flex-col gap-4"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{
                                x: progress > 0.1 ? 0 : -50,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex gap-4">
                                <div className="w-24 h-24 bg-gray-700 rounded-xl flex items-center justify-center">
                                    <Eye size={40} className="text-gray-400" />
                                </div>
                                <div className="w-24 h-24 bg-gray-700 rounded-xl flex items-center justify-center">
                                    <Video size={40} className="text-gray-400" />
                                </div>
                            </div>
                            <span className="text-gray-500 text-center">Images & Video</span>
                        </motion.div>

                        {/* Arrow 1 */}
                        <motion.div
                            className="text-4xl text-purple-400"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.25 ? 1 : 0,
                                opacity: progress > 0.25 ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            →
                        </motion.div>

                        {/* Internal Understanding */}
                        <motion.div
                            className="relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: progress > 0.4 ? 1 : 0.8,
                                opacity: progress > 0.4 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="w-40 h-40 bg-purple-500/20 border-2 border-purple-500 rounded-full flex items-center justify-center">
                                <Brain size={60} className="text-purple-400" />
                            </div>
                            <motion.div
                                className="absolute inset-0 bg-purple-500/20 rounded-full"
                                initial={{ opacity: 0 }}
                                animate={{
                                    scale: progress > 0.4 ? [1, 1.3, 1] : 1,
                                    opacity: progress > 0.4 ? [0.5, 0, 0.5] : 0
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-purple-300 font-medium whitespace-nowrap">
                                Internal Understanding
                            </span>
                        </motion.div>

                        {/* Arrow 2 */}
                        <motion.div
                            className="text-4xl text-gray-500"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.6 ? 1 : 0,
                                opacity: progress > 0.6 ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            →
                        </motion.div>

                        {/* Output: Words (if needed) */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{
                                x: progress > 0.75 ? 0 : 50,
                                opacity: progress > 0.75 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="w-32 h-24 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
                                <MessageSquare size={40} className="text-gray-500" />
                            </div>
                            <span className="text-gray-600 text-center mt-2 text-sm">
                                Words<br /><span className="text-gray-500">(only if needed)</span>
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NonGenerativeScene;


