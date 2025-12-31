import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Files, Bot, Unlock, Check, Zap } from 'lucide-react';

// Features Scene - Steps 18-23
// Step 18: "Full project context"
// Step 19: "Multi-file edits"
// Step 20: "Built-in agents"
// Step 21: "Unlimited free tier"
// Step 22: "Faster and smarter than Copilot"
// Step 23: "Completely free to start"
const FeaturesScene = ({ step }) => {

    const features = [
        { icon: Brain, title: "Full Context", emoji: '🧠', bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-600' },
        { icon: Files, title: "Multi-File", emoji: '📁', bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-600' },
        { icon: Bot, title: "AI Agents", emoji: '🤖', bg: 'bg-green-100', border: 'border-green-400', text: 'text-green-600' },
        { icon: Unlock, title: "Free Tier", emoji: '🔓', bg: 'bg-yellow-100', border: 'border-yellow-400', text: 'text-yellow-600' },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative p-8"
            style={{ background: 'linear-gradient(180deg, #FFFBF0 0%, #FDF4E3 100%)' }}>

            <AnimatePresence mode="wait">
                {/* Step 18: Full Context */}
                {step === 18 && (
                    <motion.div
                        key="context"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className={`${features[0].bg} ${features[0].border} border-4 rounded-full w-48 h-48 flex items-center justify-center shadow-2xl mb-6`}>
                            <span className="text-8xl">{features[0].emoji}</span>
                        </div>
                        <h1 className="text-5xl font-black text-purple-600">{features[0].title}</h1>
                        <p className="text-xl text-gray-500 mt-2">Understands your entire codebase</p>
                    </motion.div>
                )}

                {/* Step 19: Multi-File */}
                {step === 19 && (
                    <motion.div
                        key="multifile"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className={`${features[1].bg} ${features[1].border} border-4 rounded-full w-48 h-48 flex items-center justify-center shadow-2xl mb-6`}>
                            <span className="text-8xl">{features[1].emoji}</span>
                        </div>
                        <h1 className="text-5xl font-black text-blue-600">{features[1].title}</h1>
                        <p className="text-xl text-gray-500 mt-2">Edit across multiple files at once</p>
                    </motion.div>
                )}

                {/* Step 20: AI Agents */}
                {step === 20 && (
                    <motion.div
                        key="agents"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className={`${features[2].bg} ${features[2].border} border-4 rounded-full w-48 h-48 flex items-center justify-center shadow-2xl mb-6`}
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="text-8xl">{features[2].emoji}</span>
                        </motion.div>
                        <h1 className="text-5xl font-black text-green-600">{features[2].title}</h1>
                        <p className="text-xl text-gray-500 mt-2">Autonomous task execution</p>
                    </motion.div>
                )}

                {/* Step 21: Free Tier */}
                {step === 21 && (
                    <motion.div
                        key="free"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className={`${features[3].bg} ${features[3].border} border-4 rounded-full w-48 h-48 flex items-center justify-center shadow-2xl mb-6 relative overflow-hidden`}>
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-0 bg-yellow-400/30"
                            />
                            <span className="text-8xl z-10">{features[3].emoji}</span>
                        </div>
                        <h1 className="text-5xl font-black text-yellow-600">{features[3].title}</h1>
                        <p className="text-xl text-gray-500 mt-2">Unlimited access to start</p>
                    </motion.div>
                )}

                {/* Step 22: Faster + Smarter */}
                {step === 22 && (
                    <motion.div
                        key="faster"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <Zap size={64} className="text-yellow-500" fill="#EAB308" />
                        </div>
                        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-3">
                            FASTER
                        </h1>
                        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                            SMARTER
                        </h1>
                        <p className="text-2xl text-gray-500 mt-6">than Copilot</p>
                    </motion.div>
                )}

                {/* Step 23: 100% Free */}
                {step === 23 && (
                    <motion.div
                        key="free-badge"
                        className="flex flex-col items-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <div className="w-40 h-40 bg-green-100 rounded-full flex items-center justify-center border-8 border-green-400 shadow-2xl mb-8 relative overflow-hidden">
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-green-400/30"
                            />
                            <Check size={80} className="text-green-600 z-10" strokeWidth={3} />
                        </div>
                        <motion.div
                            className="bg-gradient-to-r from-green-500 to-emerald-600 px-14 py-6 rounded-2xl shadow-2xl"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-white text-4xl font-black">100% FREE</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default FeaturesScene;
