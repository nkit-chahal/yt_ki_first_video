import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Play, Square, Bot, Watch, Cpu, Sparkles } from 'lucide-react';

// Temporal Meaning Scene - Steps 47-53: Time awareness, action detection
const TemporalScene = ({ step, progress = 0 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 47: Cheap model says "I see bottle" */}
                {step === 47 && (
                    <motion.div
                        key="cheap-bottle"
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
                            Cheap model says:
                        </motion.p>

                        <div className="flex gap-4">
                            {['"I see a bottle"', '"I see a bottle"', '"I see a bottle"'].map((text, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-gray-800 border border-gray-600 px-6 py-4 rounded-xl"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{
                                        opacity: progress > (0.25 + i * 0.2) ? 0.6 : 0,
                                        y: progress > (0.25 + i * 0.2) ? 0 : 20
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-gray-400">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 48: VL-JEPA understands the action */}
                {step === 48 && (
                    <motion.div
                        key="understand-action"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.p
                            className="text-2xl text-gray-400 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            VL-JEPA understands:
                        </motion.p>

                        <motion.div
                            className="bg-purple-500/20 border-2 border-purple-500 px-12 py-6 rounded-2xl"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: progress > 0.3 ? [1, 1.03, 1] : 0,
                                opacity: progress > 0.3 ? 1 : 0
                            }}
                            transition={{ scale: { duration: 2, repeat: Infinity } }}
                        >
                            <motion.span
                                className="text-3xl font-bold text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.5 ? 1 : 0 }}
                            >
                                "The action is <span className="text-purple-400">picking up a canister</span>"
                            </motion.span>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 49: The killer difference is TIME */}
                {step === 49 && (
                    <motion.div
                        key="time-difference"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: progress > 0.1 ? 1 : 0,
                                scale: progress > 0.1 ? 1 : 0,
                                rotate: progress > 0.2 ? 360 : 0
                            }}
                            transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
                        >
                            <Clock size={100} className="text-blue-500" />
                        </motion.div>

                        <motion.h1
                            className="text-5xl font-black text-white mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.4 ? 1 : 0 }}
                        >
                            The Killer Difference?
                        </motion.h1>
                        <motion.h2
                            className="text-7xl font-black text-blue-400 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: progress > 0.6 ? 1 : 0,
                                scale: progress > 0.6 ? [1, 1.1, 1] : 1
                            }}
                            transition={{ scale: { duration: 1, repeat: Infinity } }}
                        >
                            TIME
                        </motion.h2>
                    </motion.div>
                )}

                {/* Step 50: Single frames, no before/after */}
                {step === 50 && (
                    <motion.div
                        key="single-frames"
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
                            Cheap models think in:
                        </motion.p>

                        <div className="flex items-center gap-8">
                            <motion.div
                                className="w-32 h-24 bg-gray-700 border-2 border-gray-600 rounded-xl flex items-center justify-center"
                                animate={{
                                    opacity: progress > 0.3 ? [0.5, 1, 0.5] : 0
                                }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <span className="text-gray-400">Single Frame</span>
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-xl text-red-400 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.7 ? 1 : 0 }}
                        >
                            ❌ No sense of before and after
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 51: Temporal meaning - starts, continues, ends */}
                {step === 51 && (
                    <motion.div
                        key="temporal-meaning"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.p
                            className="text-2xl text-gray-400 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.05 ? 1 : 0 }}
                        >
                            VL-JEPA thinks in <span className="text-purple-400">temporal meaning</span>
                        </motion.p>

                        {/* Timeline */}
                        <div className="flex items-center gap-4">
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{
                                    opacity: progress > 0.15 ? 1 : 0,
                                    x: progress > 0.15 ? 0 : -20
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Play size={40} className="text-green-400" />
                                <span className="text-green-400 font-bold mt-2">Starts</span>
                            </motion.div>

                            <motion.div
                                className="w-48 h-2 bg-gradient-to-r from-green-500 via-blue-500 to-red-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: progress > 0.3 ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                            />

                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: progress > 0.45 ? 1 : 0 }}
                            >
                                <Clock size={40} className="text-blue-400" />
                                <span className="text-blue-400 font-bold mt-2">Continues</span>
                            </motion.div>

                            <motion.div
                                className="w-48 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: progress > 0.6 ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                            />

                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{
                                    opacity: progress > 0.75 ? 1 : 0,
                                    x: progress > 0.75 ? 0 : 20
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Square size={40} className="text-red-400" />
                                <span className="text-red-400 font-bold mt-2">Ends</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* Step 52: Useful for robotics, wearables, agents */}
                {step === 52 && (
                    <motion.div
                        key="useful-for"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-gray-400 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.05 ? 1 : 0 }}
                        >
                            Extremely useful for...
                        </motion.h2>

                        <div className="flex gap-12">
                            {[
                                { icon: Bot, label: 'Robotics', color: 'text-blue-400' },
                                { icon: Watch, label: 'Wearables', color: 'text-purple-400' },
                                { icon: Cpu, label: 'Agents', color: 'text-orange-400' },
                                { icon: Sparkles, label: 'Real-world Planning', color: 'text-green-400' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    className="flex flex-col items-center"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{
                                        y: progress > (0.15 + i * 0.15) ? 0 : 30,
                                        opacity: progress > (0.15 + i * 0.15) ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <item.icon size={50} className={item.color} />
                                    <span className={`${item.color} font-bold mt-2`}>{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 53: Why dot cloud matters */}
                {step === 53 && (
                    <motion.div
                        key="dot-cloud-matters"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-white mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.1 ? 1 : 0 }}
                        >
                            Why the Dot Cloud Matters
                        </motion.h2>

                        {/* Mini dot cloud */}
                        <motion.div
                            className="relative w-64 h-32 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.25 ? 1 : 0 }}
                        >
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-4 h-4 rounded-full ${i === 14 ? 'bg-blue-500' : 'bg-red-400'}`}
                                    style={{
                                        left: `${10 + i * 6}%`,
                                        top: `${40 + Math.sin(i) * 20}%`,
                                    }}
                                    animate={{
                                        y: progress > 0.3 ? (i === 14 ? 0 : [0, -5, 0]) : 0,
                                        scale: progress > 0.3 ? (i === 14 ? [1, 1.3, 1] : 1) : 0,
                                        opacity: progress > 0.3 ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.03,
                                    }}
                                />
                            ))}
                        </motion.div>

                        <motion.p
                            className="text-xl text-gray-400 text-center max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.65 ? 1 : 0 }}
                        >
                            Shows <span className="text-purple-400">meaning over time</span>, drifting frame to frame,
                            then <span className="text-blue-400">locking in</span> once enough evidence exists.
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TemporalScene;

