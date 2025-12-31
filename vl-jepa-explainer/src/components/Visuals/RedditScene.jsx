import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

// Reddit Reaction Scene - Steps 104-109: Reddit comments scroll
const RedditScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 104: Reddit intro */}
                {step === 104 && (
                    <motion.div
                        key="reddit-intro"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? 1 : 0,
                                opacity: progress > 0.1 ? 1 : 0,
                                rotate: progress > 0.2 ? [0, -10, 10, 0] : 0
                            }}
                            transition={{ rotate: { duration: 2, repeat: Infinity } }}
                        >
                            <MessageCircle size={40} className="text-white" />
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-bold text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                        >
                            Reddit Comments
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-400 mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.65 ? 1 : 0 }}
                        >
                            Some reactions...
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 105: First comment - "really bad" */}
                {step === 105 && (
                    <motion.div
                        key="comment-1"
                        className="flex flex-col gap-4 z-10 px-16 max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                    >
                        <motion.div
                            className="bg-gray-900 border border-gray-700 rounded-xl p-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            <motion.div
                                className="flex items-center gap-3 mb-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.2 ? 1 : 0 }}
                            >
                                <div className="w-8 h-8 bg-gray-700 rounded-full" />
                                <span className="text-gray-500 text-sm">u/skeptical_user</span>
                            </motion.div>
                            <motion.p
                                className="text-white text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                "Try to stop the video at any time to actually read what it says.
                                <br />
                                <span className="text-red-400 font-bold">It's really bad.</span>"
                            </motion.p>
                            <motion.div
                                className="flex gap-4 mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                            >
                                <ThumbsDown size={18} className="text-gray-500" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 106: Second comment - defending */}
                {step === 106 && (
                    <motion.div
                        key="comment-2"
                        className="flex flex-col gap-4 z-10 px-16 max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                    >
                        <motion.div
                            className="bg-gray-900 border border-gray-700 rounded-xl p-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            <motion.div
                                className="flex items-center gap-3 mb-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.2 ? 1 : 0 }}
                            >
                                <div className="w-8 h-8 bg-blue-700 rounded-full" />
                                <span className="text-gray-500 text-sm">u/defender123</span>
                            </motion.div>
                            <motion.p
                                className="text-white text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                "Wait, what? It's <span className="text-green-400">nowhere near 'most'</span>.
                                <br />
                                Most of the actions were <span className="text-green-400 font-bold">dead on</span>."
                            </motion.p>
                            <motion.div
                                className="flex gap-4 mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                            >
                                <ThumbsUp size={18} className="text-green-500" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 107: Third comment - all wrong */}
                {step === 107 && (
                    <motion.div
                        key="comment-3"
                        className="flex flex-col gap-4 z-10 px-16 max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                    >
                        <motion.div
                            className="bg-gray-900 border border-gray-700 rounded-xl p-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            <motion.div
                                className="flex items-center gap-3 mb-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.2 ? 1 : 0 }}
                            >
                                <div className="w-8 h-8 bg-red-700 rounded-full" />
                                <span className="text-gray-500 text-sm">u/tested_it</span>
                            </motion.div>
                            <motion.p
                                className="text-white text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                "I stopped at like 5 times and
                                <br />
                                <span className="text-red-400 font-bold">they were all wrong</span>."
                            </motion.p>
                            <motion.div
                                className="flex gap-4 mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                            >
                                <ThumbsDown size={18} className="text-gray-500" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 108: Examples of errors */}
                {step === 108 && (
                    <motion.div
                        key="comment-4"
                        className="flex flex-col gap-4 z-10 px-16 max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                    >
                        <motion.div
                            className="bg-gray-900 border border-gray-700 rounded-xl p-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            <motion.p
                                className="text-gray-400 text-lg mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.2 ? 1 : 0 }}
                            >
                                Errors mentioned:
                            </motion.p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    '"Made up a slice of pizza"',
                                    '"Putting cucumber on table"',
                                    '"Nowhere near the table..."'
                                ].map((error, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-red-500/20 border border-red-500/50 px-4 py-2 rounded-lg"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: progress > (0.3 + i * 0.2) ? 1 : 0,
                                            scale: progress > (0.3 + i * 0.2) ? 1 : 0
                                        }}
                                        transition={{ type: "spring" }}
                                    >
                                        <span className="text-red-400">{error}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 109: Distracted by dot cloud */}
                {step === 109 && (
                    <motion.div
                        key="dot-cloud-distraction"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="text-6xl mb-8"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? 1 : 0,
                                rotate: progress > 0.2 ? [0, 10, -10, 0] : 0
                            }}
                            transition={{ rotate: { duration: 2, repeat: Infinity } }}
                        >
                            🤷
                        </motion.div>

                        <motion.p
                            className="text-3xl text-white text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                        >
                            "Maybe just maybe..."
                        </motion.p>
                        <motion.p
                            className="text-2xl text-gray-400 mt-4 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                        >
                            I was completely distracted by
                        </motion.p>
                        <motion.p
                            className="text-3xl text-purple-400 font-bold mt-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: progress > 0.65 ? 1 : 0,
                                scale: progress > 0.65 ? 1 : 0.8
                            }}
                            transition={{ type: "spring" }}
                        >
                            how cool the dot cloud looked ✨
                        </motion.p>

                        {/* Mini dot cloud */}
                        <motion.div
                            className="relative w-48 h-24 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.8 ? 1 : 0 }}
                        >
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-4 h-4 rounded-full ${i === 9 ? 'bg-blue-500' : 'bg-red-400'}`}
                                    style={{
                                        left: `${10 + i * 8}%`,
                                        top: `${40 + Math.sin(i) * 15}%`,
                                    }}
                                    animate={{
                                        y: progress > 0.85 ? [0, -5, 0] : 0,
                                        scale: progress > 0.85 ? (i === 9 ? [1, 1.3, 1] : 1) : 0,
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RedditScene;

