import { motion, AnimatePresence } from 'framer-motion';
import { Circle, HelpCircle, Eye } from 'lucide-react';

// Dot Cloud Scene - Steps 31-36: Red/Blue dot visualization
const DotCloudScene = ({ step }) => {
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
                        <h2 className="text-3xl font-bold text-gray-400 mb-8">What you're looking at...</h2>

                        <motion.div
                            className="relative w-96 h-64 bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
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
                                        x: [0, Math.random() * 20 - 10, 0],
                                        y: [0, Math.random() * 20 - 10, 0],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2 + Math.random(),
                                        repeat: Infinity,
                                        delay: Math.random(),
                                    }}
                                />
                            ))}
                        </motion.div>

                        <motion.p
                            className="text-xl text-white mt-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
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
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <div className="w-24 h-24 bg-red-500 rounded-full shadow-[0_0_40px_rgba(239,68,68,0.5)]" />
                            <motion.div
                                className="absolute inset-0 bg-red-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        <div>
                            <h1 className="text-4xl font-bold text-white">Each Dot =</h1>
                            <p className="text-2xl text-gray-400 mt-2">
                                What the AI <span className="text-purple-400">thinks</span> is happening
                            </p>
                            <p className="text-xl text-gray-500 mt-1">at that moment</p>
                        </div>
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
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                />
                            ))}
                        </div>

                        <h1 className="text-5xl font-black text-red-400">RED DOTS</h1>
                        <p className="text-2xl text-gray-400 mt-4">= Instant Guesses</p>
                        <p className="text-xl text-gray-500 mt-2">(might be wrong)</p>
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
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="w-32 h-32 bg-blue-500 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.6)]" />
                            <motion.div
                                className="absolute inset-0 bg-blue-400 rounded-full"
                                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        <h1 className="text-5xl font-black text-blue-400">BLUE DOT</h1>
                        <p className="text-2xl text-gray-400 mt-4">= Stabilized Understanding</p>
                        <p className="text-xl text-green-400 mt-2">✓ Confident Answer</p>
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
                        <HelpCircle size={80} className="text-yellow-400 mb-6" />

                        <h1 className="text-4xl font-bold text-white text-center">
                            But wait... How is this different from
                        </h1>
                        <p className="text-3xl text-gray-400 mt-4 text-center">
                            a cheap vision model just describing what it sees?
                        </p>
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
                        <p className="text-2xl text-gray-400 mb-8">Cheap models are like...</p>

                        <div className="flex gap-4">
                            {['"I see a hand"', '"I see a bottle"', '"Then second..."', '"Then third..."'].map((text, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-xl"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <span className="text-gray-400">{text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-xl text-gray-500 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
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
