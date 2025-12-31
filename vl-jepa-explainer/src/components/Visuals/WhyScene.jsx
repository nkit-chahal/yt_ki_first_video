import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Building2, DoorOpen, Globe } from 'lucide-react';

// Why Scene - Steps 3-5 (KINETIC REDESIGN)
const WhyScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">

            {/* 1. Kinetic Background */}
            <div className="noise-overlay" />
            <div className="grid-background" />

            {/* Background Chaos */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [Math.random() * 100, Math.random() * -100],
                        y: [Math.random() * 100, Math.random() * -100],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 10 + i * 2, repeat: Infinity, repeatType: "mirror" }}
                    className="absolute w-32 h-32 bg-red-200/20 rounded-full blur-2xl"
                    style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                />
            ))}

            <AnimatePresence mode="wait">
                {step === 3 && (
                    <motion.div
                        key="exploding"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5 }}
                    >
                        <div className="relative">
                            {/* Explosion Affect */}
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="absolute inset-0 bg-red-500 rounded-full blur-xl"
                            />

                            <motion.div
                                className="w-48 h-48 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-red-500/30 shadow-2xl relative z-10 animate-float-fast"
                            >
                                <TrendingUp size={80} className="text-red-600" />
                            </motion.div>
                        </div>

                        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 mt-8 shimmer-text">
                            EXPLODING
                        </h1>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="companies"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Floating Cloud Layout */}
                        <div className="relative w-full max-w-lg h-64">
                            {[
                                { name: 'OpenAI', x: -100, y: -20, delay: 0, color: 'text-purple-600' },
                                { name: 'Google', x: 100, y: 0, delay: 1, color: 'text-blue-600' },
                                { name: 'Meta', x: 0, y: 80, delay: 2, color: 'text-blue-400' },
                            ].map((company, i) => (
                                <motion.div
                                    key={company.name}
                                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    animate={{
                                        x: company.x,
                                        y: company.y,
                                        opacity: 1,
                                    }}
                                    transition={{ type: "spring", stiffness: 100, delay: i * 0.2 }}
                                >
                                    <motion.div
                                        className="bg-black/40 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl animate-float-slow"
                                        style={{ animationDelay: `${i * 1.5}s` }}
                                    >
                                        <span className={`text-3xl font-black ${company.color}`}>{company.name}</span>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                        <h1 className="text-4xl font-black text-white mt-8 bg-black/50 border border-white/10 px-6 py-2 rounded-full backdrop-blur-sm">
                            Hiring <span className="text-green-400">NOW</span>
                        </h1>
                    </motion.div>
                )}

                {step === 5 && (
                    <motion.div
                        key="barrier"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {/* Interactive Door/Portal */}
                        <div className="relative group">
                            <motion.div
                                className="w-64 h-80 bg-green-900/30 rounded-t-full border-4 border-green-500/50 shadow-[0_0_50px_rgba(74,222,128,0.2)] overflow-hidden relative"
                                initial={{ height: 0 }}
                                animate={{ height: 320 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <DoorOpen size={100} className="text-white drop-shadow-lg" />
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold whitespace-nowrap shadow-lg"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                LOW BARRIER
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WhyScene;
