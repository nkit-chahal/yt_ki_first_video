import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video, AlertTriangle, Brain, Check } from 'lucide-react';

// CCTV Comparison Scene - Steps 37-46: Cheap model vs VL-JEPA side-by-side
const CCTVComparisonScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 37: Frame-by-frame guessing */}
                {step === 37 && (
                    <motion.div
                        key="frame-guess"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex gap-4 mb-8">
                            {['Frame 1', 'Frame 2', 'Frame 3'].map((frame, i) => (
                                <motion.div
                                    key={frame}
                                    className="w-32 h-24 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{
                                        opacity: progress > (0.1 + i * 0.15) ? 1 : 0,
                                        y: progress > (0.1 + i * 0.15) ? 0 : 20
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-gray-500 text-sm">{frame}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.h2
                            className="text-3xl font-bold text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.55 ? 1 : 0 }}
                        >
                            Looks at each frame
                        </motion.h2>
                        <motion.p
                            className="text-xl text-orange-400 mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.75 ? 1 : 0 }}
                        >
                            Guesses → Spits out text immediately
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 38-39: CCTV Motion Detector comparison */}
                {(step === 38 || step === 39) && (
                    <motion.div
                        key="cctv-detector"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="flex items-center gap-4 mb-8"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.1 ? [0.7, 1, 0.7] : 0,
                                scale: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ opacity: { duration: 1, repeat: Infinity } }}
                        >
                            <Camera size={60} className="text-red-500" />
                            <span className="text-4xl font-black text-red-400">CCTV</span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-bold text-white text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                        >
                            Like a <span className="text-red-400">Motion Detector</span>
                        </motion.h1>

                        {step === 39 && (
                            <motion.p
                                className="text-xl text-gray-500 mt-4 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                            >
                                Just shouts out guesses...
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {/* Step 40: Jumpy guesses */}
                {step === 40 && (
                    <motion.div
                        key="jumpy-guesses"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex gap-4 flex-wrap justify-center max-w-2xl">
                            {['Movement!', 'Hand!', 'Bottle!', 'Making up canister!'].map((guess, i) => (
                                <motion.div
                                    key={guess}
                                    className="bg-red-500/20 border border-red-500 px-6 py-3 rounded-full"
                                    initial={{ scale: 0, rotate: -10 }}
                                    animate={{
                                        scale: progress > (0.1 + i * 0.2) ? 1 : 0,
                                        rotate: progress > (0.1 + i * 0.2) ? 0 : -10
                                    }}
                                    transition={{ type: "spring" }}
                                >
                                    <span className="text-red-400 font-bold text-xl">{guess}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 41: Jumpy, inconsistent */}
                {step === 41 && (
                    <motion.div
                        key="inconsistent"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex gap-8">
                            {[
                                { text: 'Jumpy', icon: '🦘' },
                                { text: 'Inconsistent', icon: '❌' },
                                { text: 'No Memory', icon: '🧠' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.text}
                                    className="flex flex-col items-center"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{
                                        y: progress > (0.1 + i * 0.2) ? 0 : 20,
                                        opacity: progress > (0.1 + i * 0.2) ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-4xl mb-2">{item.icon}</span>
                                    <span className="text-red-400 font-bold text-xl">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-2xl text-gray-400 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.75 ? 1 : 0 }}
                        >
                            <span className="text-red-400">Reacting</span>, not <span className="text-green-400">Understanding</span>
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 42-43: VL-JEPA approach */}
                {(step === 42 || step === 43) && (
                    <motion.div
                        key="vljepa-approach"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="flex items-center gap-4 mb-8"
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Brain size={60} className="text-purple-500" />
                            <span className="text-4xl font-black text-purple-400">VL-JEPA</span>
                        </motion.div>

                        {step === 42 && (
                            <motion.p
                                className="text-2xl text-gray-400"
                                animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                            >
                                Video stream + Something else...
                            </motion.p>
                        )}

                        {step === 43 && (
                            <motion.div
                                className="flex flex-col items-center"
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                <motion.p
                                    className="text-2xl text-white"
                                    animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                                >
                                    <span className="text-purple-400">Continuous meaning</span> over time
                                </motion.p>
                                <motion.p
                                    className="text-xl text-gray-500 mt-2"
                                    animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                                >
                                    Building a stable understanding
                                </motion.p>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {/* Step 44: Labels only when confident */}
                {step === 44 && (
                    <motion.div
                        key="confident-label"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-green-500/20 border-2 border-green-500 rounded-full px-12 py-6"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.1 ? [1, 1.05, 1] : 0,
                                opacity: progress > 0.1 ? 1 : 0
                            }}
                            transition={{ scale: { duration: 2, repeat: Infinity } }}
                        >
                            <motion.div
                                className="flex items-center gap-4"
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                <Check size={40} className="text-green-400" />
                                <span className="text-3xl font-bold text-green-400">
                                    Labels only when CONFIDENT
                                </span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 45: Red dot might be wrong */}
                {step === 45 && (
                    <motion.div
                        key="red-wrong"
                        className="flex items-center gap-12 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? 1 : 0,
                                x: progress > 0.2 ? [-5, 5, -5] : 0
                            }}
                            transition={{ x: { duration: 0.5, repeat: Infinity } }}
                        >
                            <div className="w-24 h-24 bg-red-500 rounded-full shadow-lg" />
                            <motion.span
                                className="text-red-400 font-bold mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                Red Dot
                            </motion.span>
                            <motion.span
                                className="text-gray-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                "Maybe bottle?"
                            </motion.span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.55 ? 1 : 0,
                                scale: progress > 0.55 ? 1 : 0
                            }}
                        >
                            <AlertTriangle size={40} className="text-yellow-500" />
                        </motion.div>

                        <motion.p
                            className="text-xl text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                        >
                            Instant guess — <span className="text-red-400">might be wrong</span>
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 46: Blue dot is confident */}
                {step === 46 && (
                    <motion.div
                        key="blue-confident"
                        className="flex items-center gap-12 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? [1, 1.1, 1] : 0
                            }}
                            transition={{ scale: { duration: 2, repeat: Infinity } }}
                        >
                            <div className="w-24 h-24 bg-blue-500 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.5)]" />
                            <motion.span
                                className="text-blue-400 font-bold mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                            >
                                Blue Dot
                            </motion.span>
                            <motion.span
                                className="text-green-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                            >
                                "It's a canister"
                            </motion.span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.55 ? 1 : 0,
                                scale: progress > 0.55 ? 1 : 0
                            }}
                        >
                            <Check size={40} className="text-green-500" />
                        </motion.div>

                        <motion.p
                            className="text-xl text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                        >
                            Stabilized meaning — <span className="text-green-400">Confident!</span>
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CCTVComparisonScene;

