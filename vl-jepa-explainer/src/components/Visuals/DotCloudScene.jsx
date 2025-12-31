import { motion, AnimatePresence } from 'framer-motion';
import { Circle, HelpCircle, Eye } from 'lucide-react';

// Dot Cloud Scene - Steps 31-36: Red/Blue dot visualization
const DotCloudScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 31: Map of internal understanding */}
                {step === 31 && (
                    <motion.div
                        key="dot-intro"
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
                            What you're looking at...
                        </motion.h2>

                        <motion.div
                            className="relative w-96 h-64 bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{
                                scale: progress > 0.2 ? 1 : 0.9,
                                opacity: progress > 0.2 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Animated dots */}
                            {[...Array(30)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-3 h-3 rounded-full ${i % 5 === 0 ? 'bg-blue-500' : 'bg-red-400'}`}
                                    style={{
                                        left: `${10 + Math.random() * 80}%`,
                                        top: `${10 + Math.random() * 80}%`,
                                    }}
                                    animate={{
                                        x: progress > 0.3 ? [0, Math.random() * 20 - 10, 0] : 0,
                                        y: progress > 0.3 ? [0, Math.random() * 20 - 10, 0] : 0,
                                        opacity: progress > 0.3 ? [0.5, 1, 0.5] : 0,
                                    }}
                                    transition={{
                                        duration: 2 + Math.random(),
                                        repeat: Infinity,
                                        delay: Math.random() * 0.5,
                                    }}
                                />
                            ))}
                        </motion.div>

                        <motion.p
                            className="text-xl text-white mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                y: progress > 0.6 ? 0 : 20,
                                opacity: progress > 0.6 ? 1 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            A <span className="text-purple-400">Map</span> of Internal Understanding Over Time
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 32: Each dot is what AI thinks */}
                {step === 32 && (
                    <motion.div
                        key="dot-meaning"
                        className="flex items-center gap-12 z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Single dot highlight */}
                        <motion.div
                            className="relative"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? [1, 1.1, 1] : 0,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ scale: { duration: 1.5, repeat: Infinity } }}
                        >
                            <div className="w-24 h-24 bg-red-500 rounded-full shadow-[0_0_40px_rgba(239,68,68,0.5)]" />
                            <motion.div
                                className="absolute inset-0 bg-red-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                        >
                            <motion.h1
                                className="text-4xl font-bold text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                Each Dot =
                            </motion.h1>
                            <motion.p
                                className="text-2xl text-gray-400 mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.55 ? 1 : 0 }}
                            >
                                What the AI <span className="text-purple-400">thinks</span> is happening
                            </motion.p>
                            <motion.p
                                className="text-xl text-gray-500 mt-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                            >
                                at that moment
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 33: Red dots = instant guesses */}
                {step === 33 && (
                    <motion.div
                        key="red-dots"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex gap-6 mb-8">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-12 h-12 bg-red-500 rounded-full shadow-lg"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: progress > (0.1 + i * 0.1) ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            ))}
                        </div>

                        <motion.h1
                            className="text-5xl font-black text-red-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                        >
                            RED DOTS
                        </motion.h1>
                        <motion.p
                            className="text-2xl text-gray-400 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.75 ? 1 : 0 }}
                        >
                            = Instant Guesses
                        </motion.p>
                        <motion.p
                            className="text-xl text-gray-500 mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.85 ? 1 : 0 }}
                        >
                            (might be wrong)
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 34: Blue dot = stabilized understanding */}
                {step === 34 && (
                    <motion.div
                        key="blue-dot"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative mb-8"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? [1, 1.1, 1] : 0,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ scale: { duration: 2, repeat: Infinity } }}
                        >
                            <div className="w-32 h-32 bg-blue-500 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.6)]" />
                            <motion.div
                                className="absolute inset-0 bg-blue-400 rounded-full"
                                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        <motion.h1
                            className="text-5xl font-black text-blue-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                        >
                            BLUE DOT
                        </motion.h1>
                        <motion.p
                            className="text-2xl text-gray-400 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                        >
                            = Stabilized Understanding
                        </motion.p>
                        <motion.p
                            className="text-xl text-green-400 mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.8 ? 1 : 0 }}
                        >
                            ✓ Confident Answer
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 35: How is this different? */}
                {step === 35 && (
                    <motion.div
                        key="how-different"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <HelpCircle size={80} className="text-yellow-400 mb-6" />
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-bold text-white text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                        >
                            But wait... How is this different from
                        </motion.h1>
                        <motion.p
                            className="text-3xl text-gray-400 mt-4 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                        >
                            a cheap vision model just describing what it sees?
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 36: Cheap models description */}
                {step === 36 && (
                    <motion.div
                        key="cheap-models"
                        className="flex flex-col items-center z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.p
                            className="text-2xl text-gray-400 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            Cheap models are like...
                        </motion.p>

                        <div className="flex gap-4">
                            {['"I see a hand"', '"I see a bottle"', '"Then second..."', '"Then third..."'].map((text, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-xl"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{
                                        x: progress > (0.2 + i * 0.15) ? 0 : -20,
                                        opacity: progress > (0.2 + i * 0.15) ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-gray-400">{text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-xl text-gray-500 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.85 ? 1 : 0 }}
                        >
                            Until it finishes the entire sentence...
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DotCloudScene;

