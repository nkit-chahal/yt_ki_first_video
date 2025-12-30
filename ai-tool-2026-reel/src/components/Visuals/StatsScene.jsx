import { motion } from 'framer-motion';
import { Zap, Globe, Cpu } from 'lucide-react';

const StatsScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-orange-900/20 to-gray-900" />

            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full"
                        style={{ top: `${10 + i * 10}%` }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-12">
                {/* Google DeepMind badge */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="inline-flex items-center gap-4 px-10 py-5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                        <Cpu size={32} className="text-orange-400" />
                        <span className="text-3xl font-bold text-white">Powered by Google DeepMind</span>
                    </div>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 gap-12">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                        className="bg-gradient-to-br from-orange-500 to-amber-500 p-12 rounded-[40px] shadow-2xl"
                    >
                        <motion.span
                            className="text-[140px] font-black text-white block leading-none"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ∞
                        </motion.span>
                        <p className="text-3xl text-white/90 font-medium mt-4">
                            Possibilities Unlocked
                        </p>
                    </motion.div>

                    <div className="flex gap-8 justify-center">
                        {[
                            { icon: Zap, value: "10x", label: "Faster Coding" },
                            { icon: Globe, value: "24/7", label: "Always Ready" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 + i * 0.2 }}
                                className="bg-gray-800/80 backdrop-blur-xl p-10 rounded-3xl border border-gray-700 flex-1"
                            >
                                <stat.icon size={48} className="text-orange-400 mx-auto mb-4" />
                                <span className="text-6xl font-bold text-white block">{stat.value}</span>
                                <p className="text-xl text-gray-400 mt-2">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Built for developers */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-4xl text-gray-400 mt-16 font-medium"
                >
                    Built for <span className="text-orange-400 font-bold">developers</span>
                </motion.p>
            </div>
        </div>
    );
};

export default StatsScene;
