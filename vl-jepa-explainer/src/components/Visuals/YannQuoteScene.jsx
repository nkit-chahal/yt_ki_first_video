import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Brain, Cpu, Bot, Car, Home } from 'lucide-react';

// Yann LeCun Quote Scene - Steps 84-93: Yann's quotes about visual learning
const YannQuoteScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 84: Yann LeCun intro */}
                {step === 84 && (
                    <motion.div
                        key="yann-intro"
                        className="flex items-center gap-12 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? [1, 1.05, 1] : 0,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ scale: { duration: 3, repeat: Infinity } }}
                        >
                            <img
                                src="/yann-lecun.png"
                                alt="Yann LeCun"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.35 ? 1 : 0 }}
                        >
                            <motion.h1
                                className="text-5xl font-black text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.45 ? 1 : 0 }}
                            >
                                Yann LeCun
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-400 mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.65 ? 1 : 0 }}
                            >
                                on this stuff...
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 85-87: Visual data stats */}
                {(step >= 85 && step <= 87) && (
                    <motion.div
                        key="data-stats"
                        className="flex flex-col items-center z-10 px-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            <Quote size={40} className="text-blue-400 mb-6" />
                        </motion.div>

                        {step === 85 && (
                            <motion.p
                                className="text-3xl text-white text-center leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                "During 16,000 hours... it's about <span className="text-blue-400 font-bold">10¹⁴ bytes</span>"
                            </motion.p>
                        )}

                        {step === 86 && (
                            <motion.div
                                className="text-center"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: progress > 0.2 ? 0 : 20,
                                    opacity: progress > 0.2 ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.p
                                    className="text-3xl text-white leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.35 ? 1 : 0 }}
                                >
                                    "A <span className="text-purple-400 font-bold">four-year-old</span> has seen as much visual data"
                                </motion.p>
                                <motion.p
                                    className="text-2xl text-gray-400 mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                                >
                                    as the biggest LLM trained on ALL text ever produced
                                </motion.p>
                            </motion.div>
                        )}

                        {step === 87 && (
                            <motion.p
                                className="text-3xl text-white text-center leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                "There is <span className="text-yellow-400 font-bold">way more information</span> in the real world..."
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {/* Step 88-89: Real world complexity */}
                {(step === 88 || step === 89) && (
                    <motion.div
                        key="real-world"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: progress > 0.1 ? 1 : 0 }}>
                            <Quote size={40} className="text-blue-400 mb-6" />
                        </motion.div>

                        {step === 88 && (
                            <div className="flex gap-6">
                                {['Noisy', 'High Dimensional', 'Continuous'].map((word, i) => (
                                    <motion.div
                                        key={word}
                                        className="bg-red-500/20 border border-red-500/50 px-6 py-3 rounded-full"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                            scale: progress > (0.2 + i * 0.2) ? 1 : 0,
                                            opacity: progress > (0.2 + i * 0.2) ? 1 : 0
                                        }}
                                        transition={{ type: "spring" }}
                                    >
                                        <span className="text-red-400 font-bold">{word}</span>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {step === 89 && (
                            <motion.p
                                className="text-3xl text-white text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                "The methods used to train LLMs
                                <br />
                                <span className="text-red-400 font-bold">do NOT work</span> in the real world"
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {/* Step 90: LLMs can pass bar exam */}
                {step === 90 && (
                    <motion.div
                        key="llm-achievements"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.p
                            className="text-2xl text-gray-400 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            LLMs can...
                        </motion.p>

                        <div className="flex gap-4">
                            {['Pass Bar Exam', 'Solve Equations', 'Compute Integrals'].map((task, i) => (
                                <motion.div
                                    key={task}
                                    className="bg-green-500/20 border border-green-500 px-6 py-4 rounded-xl"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{
                                        y: progress > (0.2 + i * 0.2) ? 0 : 20,
                                        opacity: progress > (0.2 + i * 0.2) ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-green-400 font-medium">{task}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 91-92: But we don't have robots */}
                {(step === 91 || step === 92) && (
                    <motion.div
                        key="no-robots"
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
                            But we still don't have...
                        </motion.p>

                        <div className="flex gap-12">
                            {step === 91 && (
                                <motion.div
                                    className="flex flex-col items-center"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{
                                        y: progress > 0.3 ? 0 : 20,
                                        opacity: progress > 0.3 ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-32 h-32 bg-gray-800 border-2 border-dashed border-gray-600 rounded-2xl flex items-center justify-center">
                                        <Home size={50} className="text-gray-600" />
                                    </div>
                                    <motion.span
                                        className="text-red-400 mt-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: progress > 0.6 ? 1 : 0 }}
                                    >
                                        ❌ Domestic Robots
                                    </motion.span>
                                </motion.div>
                            )}

                            {step === 92 && (
                                <motion.div
                                    className="flex flex-col items-center"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{
                                        y: progress > 0.3 ? 0 : 20,
                                        opacity: progress > 0.3 ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-32 h-32 bg-gray-800 border-2 border-dashed border-gray-600 rounded-2xl flex items-center justify-center">
                                        <Car size={50} className="text-gray-600" />
                                    </div>
                                    <motion.span
                                        className="text-red-400 mt-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                                    >
                                        ❌ Level 5 Self-Driving
                                    </motion.span>
                                    <motion.span
                                        className="text-gray-500 text-sm mt-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                                    >
                                        "We have them, but we cheat"
                                    </motion.span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Step 93: Teenager learns in 20 hours */}
                {step === 93 && (
                    <motion.div
                        key="teenager"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: progress > 0.1 ? 1 : 0 }}>
                            <Quote size={40} className="text-blue-400 mb-6" />
                        </motion.div>

                        <motion.p
                            className="text-3xl text-white text-center leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                        >
                            "We don't have self-driving cars that can learn to drive
                            <br />
                            in <span className="text-yellow-400 font-bold">20 hours</span> of practice"
                        </motion.p>

                        <motion.p
                            className="text-xl text-gray-400 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                        >
                            ...like any teenager 🚗
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default YannQuoteScene;

