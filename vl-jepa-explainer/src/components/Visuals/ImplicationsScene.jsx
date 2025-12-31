import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Watch, Cpu, Zap, ArrowRight } from 'lucide-react';

// Implications Scene - Steps 12-14: Semantic space, robotics, wearables, agents
const ImplicationsScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="noise-overlay" />
            <div className="grid-background" />

            <AnimatePresence mode="wait">
                {/* Step 12: Semantic space efficiency */}
                {step === 12 && (
                    <motion.div
                        key="semantic-efficiency"
                        className="flex flex-col items-center z-10 px-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex items-center gap-8">
                            {/* Semantic Space */}
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                            >
                                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.4)]">
                                    <Cpu size={60} className="text-white" />
                                </div>
                                <span className="text-purple-400 font-bold mt-4 text-xl">Semantic Space</span>
                            </motion.div>

                            <motion.div
                                className="text-3xl text-gray-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                vs
                            </motion.div>

                            {/* Token Space */}
                            <motion.div
                                className="flex flex-col items-center opacity-50"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="w-40 h-40 bg-gray-700 rounded-full flex items-center justify-center border-2 border-gray-600">
                                    <span className="text-gray-400 text-4xl font-mono">T₁T₂T₃</span>
                                </div>
                                <span className="text-gray-500 font-bold mt-4 text-xl">Token Space</span>
                            </motion.div>
                        </div>

                        {/* Benefits */}
                        <motion.div
                            className="flex gap-6 mt-12"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {['⚡ Faster', '💡 Efficient', '📉 Half Parameters', '📈 Better Performance'].map((benefit, i) => (
                                <motion.div
                                    key={benefit}
                                    className="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                >
                                    <span className="text-green-400">{benefit}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 13: What this means for robotics */}
                {step === 13 && (
                    <motion.div
                        key="robotics-implications"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.h2
                            className="text-4xl font-bold text-white mb-12"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            What This Means For...
                        </motion.h2>

                        <div className="flex gap-16">
                            {[
                                { icon: Bot, label: 'Robotics', color: 'from-blue-500 to-cyan-500' },
                                { icon: Watch, label: 'Wearables', color: 'from-purple-500 to-pink-500' },
                                { icon: Cpu, label: 'AI Agents', color: 'from-orange-500 to-red-500' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    className="flex flex-col items-center"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <motion.div
                                        className={`w-32 h-32 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center shadow-lg`}
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                                    >
                                        <item.icon size={60} className="text-white" />
                                    </motion.div>
                                    <span className="text-white font-bold mt-4 text-xl">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mt-12"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                        >
                            🤯 Super Crazy!
                        </motion.p>
                    </motion.div>
                )}

                {/* Step 14: Let's get into this */}
                {step === 14 && (
                    <motion.div
                        key="lets-get-into"
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                    >
                        <motion.div
                            className="flex items-center gap-4"
                            animate={{ x: [0, 20, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Zap size={60} className="text-yellow-400" />
                            <h1 className="text-6xl font-black text-white">
                                Let's Get Into This
                            </h1>
                            <ArrowRight size={60} className="text-purple-400" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImplicationsScene;
