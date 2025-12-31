import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Gift, Target, Megaphone, Globe } from 'lucide-react';

// CTA Scene - Steps 25-28 (KINETIC REDESIGN)
const CTAScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">

            <div className="noise-overlay" />

            {/* Hypnotic Background Spirals */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(234,88,12,0.1)_0deg,transparent_60deg,rgba(239,68,68,0.1)_120deg,transparent_180deg,rgba(234,88,12,0.1)_240deg,transparent_300deg,rgba(239,68,68,0.1)_360deg)]" />
            </motion.div>

            <AnimatePresence mode="wait">
                {step === 25 && (
                    <motion.div
                        key="year"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
                        transition={{ type: "spring" }}
                    >
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Rocket size={100} className="text-purple-600 mb-6 drop-shadow-xl" />
                        </motion.div>

                        <div className="relative">
                            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 leading-none">
                                2026
                            </h1>
                            <motion.div
                                className="absolute -right-12 -top-12 text-6xl"
                                animate={{ rotate: [0, 20, -20, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🚀
                            </motion.div>
                        </div>

                        <h2 className="text-5xl font-bold text-white mt-4 tracking-tighter">
                            IS <span className="text-purple-400 underline decoration-wavy">THE</span> YEAR
                        </h2>
                    </motion.div>
                )}

                {step === 26 && (
                    <motion.div
                        key="free"
                        className="flex flex-col items-center z-10 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex flex-col gap-8 w-full px-8">
                            <motion.div
                                className="bg-green-900/30 border-l-8 border-green-500 p-8 rounded-r-2xl shadow-xl w-full"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <h1 className="text-4xl font-black text-green-400 flex items-center gap-4">
                                    <Gift size={40} /> TOOLS ARE FREE
                                </h1>
                            </motion.div>

                            <motion.div
                                className="bg-blue-900/30 border-r-8 border-blue-500 p-8 rounded-l-2xl shadow-xl w-full text-right"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h1 className="text-4xl font-black text-blue-400 flex items-center justify-end gap-4">
                                    RESOURCES ONLINE <Globe size={40} />
                                </h1>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {step === 27 && (
                    <motion.div
                        key="consistency"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative animate-float-medium">
                            <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-30" />
                            <div className="w-64 h-64 bg-black rounded-full flex items-center justify-center border-[12px] border-orange-500 shadow-2xl relative z-10">
                                <Target size={120} className="text-orange-500" />
                            </div>
                        </div>

                        <h1 className="text-6xl font-black text-white mt-12 bg-black/50 px-8 py-4 rounded-3xl border border-white/20 backdrop-blur-sm">
                            JUST SHOW UP
                        </h1>
                    </motion.div>
                )}

                {step === 28 && (
                    <motion.div
                        key="subscribe"
                        className="flex flex-col items-center z-10 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {/* 3D Subscribe Button */}
                        <motion.button
                            className="bg-[#CC0000] px-16 py-8 rounded-3xl flex items-center gap-6 mb-12 shadow-[0_10px_0_#990000] active:shadow-none active:translate-y-[10px] transition-all"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-16 h-16 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            <span className="text-white text-5xl font-black tracking-wider">SUBSCRIBE</span>
                        </motion.button>

                        {/* Engagement Row */}
                        <div className="flex flex-col gap-6 w-full px-8">
                            <motion.div
                                className="bg-black/50 px-8 py-4 rounded-xl shadow-lg border border-white/10 flex items-center gap-3 backdrop-blur-md"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="text-4xl">👍</span>
                                <span className="font-bold text-gray-300 text-xl">Like this?</span>
                            </motion.div>

                            <motion.div
                                className="bg-black/50 px-8 py-4 rounded-xl shadow-lg border border-white/10 flex items-center gap-3 backdrop-blur-md"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="text-4xl">💬</span>
                                <span className="font-bold text-gray-300 text-xl">Comment below</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CTAScene;
