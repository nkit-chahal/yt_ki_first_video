import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Newspaper, Zap, BookOpen } from 'lucide-react';

// Step 2: Papers - Steps 10-13 (KINETIC REDESIGN)
const Step2Scene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">

            <div className="noise-overlay" />

            {/* Infinite Scrolling Papers Background */}
            <div className="absolute inset-0 opacity-10 flex flex-col gap-4 transform -rotate-12 scale-110 pointer-events-none">
                {[...Array(5)].map((_, rowI) => (
                    <motion.div
                        key={rowI}
                        className="flex gap-4 whitespace-nowrap"
                        animate={{ x: rowI % 2 === 0 ? [0, -1000] : [-1000, 0] }}
                        transition={{ duration: 20 + rowI * 5, repeat: Infinity, ease: "linear" }}
                    >
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="bg-white/5 p-4 rounded-xl w-64 h-32 flex flex-col gap-2 border border-white/5">
                                <div className="h-4 bg-white/10 rounded w-3/4" />
                                <div className="h-2 bg-white/5 rounded w-full" />
                                <div className="h-2 bg-white/5 rounded w-full" />
                                <div className="h-2 bg-white/5 rounded w-1/2" />
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {step === 10 && (
                    <motion.div
                        key="title"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                    >
                        {/* Book that opens/floats */}
                        <div className="relative mb-8 animate-float-slow">
                            <BookOpen size={100} className="text-blue-600 drop-shadow-2xl" />
                            <motion.div
                                className="absolute -top-4 -right-4 text-4xl"
                                animate={{ rotate: [0, 20, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🧐
                            </motion.div>
                        </div>

                        <h1 className="text-7xl font-black text-white tracking-tight text-center">
                            READ PAPERS
                        </h1>
                        <h2 className="text-4xl font-bold text-blue-400 tracking-widest uppercase mt-2">
                            OBSESSIVELY
                        </h2>
                    </motion.div>
                )}

                {step === 11 && (
                    <motion.div
                        key="classics"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, rotateX: 45 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Holographic Paper Card */}
                        <motion.div
                            className="bg-black/60 backdrop-blur-xl border border-orange-500/30 p-8 rounded-2xl shadow-[0_20px_50px_rgba(234,88,12,0.1)] max-w-lg text-center animate-float-medium"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-900/50 p-3 rounded-full">
                                    <FileText size={32} className="text-orange-400" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-serif italic text-white mb-2">
                                "Attention Is All You Need"
                            </h2>
                            <p className="text-gray-400 text-sm">Vaswani et al., 2017</p>

                            {/* Glowing edge */}
                            <div className="absolute inset-0 border-2 border-orange-400/30 rounded-2xl animate-pulse" />
                        </motion.div>
                    </motion.div>
                )}

                {step === 12 && (
                    <motion.div
                        key="arxiv"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative"
                            animate={{ rotateY: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-48 h-48 bg-red-600 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                                <span className="text-white font-black text-4xl tracking-tighter">arXiv</span>
                            </div>
                            {/* Orbiting particles */}
                            <div className="absolute inset-0 rounded-full border border-red-300 scale-150 opacity-50" />
                        </motion.div>

                        <h1 className="text-5xl font-black text-white mt-12 bg-black/50 border border-white/10 px-8 py-2 rounded-full">
                            DAILY HABIT
                        </h1>
                    </motion.div>
                )}

                {step === 13 && (
                    <motion.div
                        key="superpower"
                        className="flex flex-col items-center z-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl"
                            />
                            <div className="relative z-10 animate-float-fast">
                                <Zap size={120} className="text-yellow-500 fill-yellow-400 drop-shadow-lg" />
                            </div>
                        </div>

                        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 mt-8 shimmer-text">
                            SUPERPOWER
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Step2Scene;
