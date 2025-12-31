import { motion, AnimatePresence } from 'framer-motion';
import { Github, PenTool, Globe, FileText, ArrowUpRight } from 'lucide-react';

// Step 4: Publish - Steps 18-21 (KINETIC REDESIGN)
const Step4Scene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">

            <div className="noise-overlay" />
            <div className="grid-background" />

            {/* Orbiting Background Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[500, 700, 900].map((size, i) => (
                    <motion.div
                        key={i}
                        className="absolute border border-white/5 rounded-full"
                        style={{ width: size, height: size }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute top-0 left-1/2 w-4 h-4 bg-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {step === 18 && (
                    <motion.div
                        key="title"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                    >
                        <motion.div
                            className="relative"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <div className="w-32 h-32 bg-orange-500 rounded-3xl rotate-12 absolute inset-0 opacity-50 blur-xl" />
                            <div className="w-32 h-32 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-6xl font-black shadow-2xl relative z-10">
                                4
                            </div>
                        </motion.div>

                        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mt-8 text-center leading-tight">
                            PUBLISH<br />EVERYTHING
                        </h1>
                    </motion.div>
                )}

                {step === 19 && (
                    <motion.div
                        key="platforms"
                        className="flex flex-col items-center z-10 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* 3D Floating Platform Cards */}
                        <div className="flex flex-col gap-6 perspective-1000">
                            {[
                                { icon: Github, name: 'GitHub', bg: 'bg-gray-900', text: 'text-white', delay: 0 },
                                { icon: PenTool, name: 'Blog', bg: 'bg-green-100', text: 'text-green-700', delay: 0.2 },
                                { icon: Globe, name: 'Twitter', bg: 'bg-blue-100', text: 'text-blue-600', delay: 0.4 },
                            ].map((platform, i) => (
                                <motion.div
                                    key={platform.name}
                                    className={`${platform.bg} w-64 h-24 rounded-3xl shadow-xl flex flex-row items-center justify-start px-6 gap-6 border border-white/10`}
                                    initial={{ y: 100, opacity: 0, rotateX: 45 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    transition={{ type: "spring", delay: platform.delay }}
                                    whileHover={{ y: -20, rotateX: -10 }}
                                >
                                    <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                                        <platform.icon size={40} className={platform.text} />
                                    </div>
                                    <span className={`${platform.text} font-bold text-xl`}>{platform.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 20 && (
                    <motion.div
                        key="public"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 border-4 border-purple-500 rounded-full"
                                animate={{ scale: [1, 2], opacity: [1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <div className="w-56 h-56 bg-black rounded-full flex items-center justify-center border-4 border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.5)] relative z-10">
                                <span className="text-8xl">🏗️</span>
                            </div>
                        </div>

                        <h1 className="text-5xl font-black text-white mt-8 bg-black/50 px-8 py-2 rounded-full border border-white/10">
                            Build in <span className="text-purple-400">PUBLIC</span>
                        </h1>
                    </motion.div>
                )}

                {step === 21 && (
                    <motion.div
                        key="portfolio"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.div
                            className="bg-black p-10 rounded-[40px] shadow-2xl overflow-hidden relative"
                            initial={{ width: 100 }}
                            animate={{ width: "auto" }}
                        >
                            <div className="flex items-center gap-6 relative z-10">
                                <FileText size={48} className="text-green-500" />
                                <div className="h-12 w-[2px] bg-gray-700" />
                                <div>
                                    <h2 className="text-4xl font-bold text-white">
                                        Portfolio
                                    </h2>
                                    <p className="text-gray-400 text-xl font-mono">is_your_resume = True</p>
                                </div>
                            </div>

                            {/* Scanning Line Effect */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-[2px] bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]"
                                animate={{ top: ["0%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Step4Scene;
