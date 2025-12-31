import { motion, AnimatePresence } from 'framer-motion';
import { Github, MousePointer2, ArrowRight } from 'lucide-react';

// Hook Scene - Steps 0-3
// Step 0: "Most developers stuck with Copilot"
// Step 1: "It was revolutionary... back then"
// Step 2: "Everyone is switching to one free AI tool"
// Step 3: "That writes entire features like a pro"
const HookScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative"
            style={{ background: 'linear-gradient(180deg, #FFFBF0 0%, #FDF4E3 100%)' }}>

            <AnimatePresence mode="wait">
                {/* Step 0: GitHub Copilot appears */}
                {step === 0 && (
                    <motion.div
                        key="copilot-intro"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center border-4 border-gray-300 shadow-2xl mb-6">
                            <Github size={80} className="text-gray-400" />
                        </div>
                        <h1 className="text-5xl font-bold text-gray-500">GitHub Copilot</h1>
                        <p className="text-3xl text-gray-400 mt-4">2025</p>
                    </motion.div>
                )}

                {/* Step 1: "Revolutionary... back then" - fading/aging effect */}
                {step === 1 && (
                    <motion.div
                        key="copilot-old"
                        className="flex flex-col items-center"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-300 shadow-lg mb-6 grayscale">
                            <Github size={80} className="text-gray-400" />
                        </div>
                        <h1 className="text-5xl font-bold text-gray-400">GitHub Copilot</h1>
                        <div className="mt-6 bg-gray-300 px-8 py-3 rounded-2xl">
                            <span className="text-gray-500 text-xl font-bold">OUTDATED</span>
                        </div>
                    </motion.div>
                )}

                {/* Step 2: Cursor teaser - blur reveal */}
                {step === 2 && (
                    <motion.div
                        key="cursor-teaser"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, filter: "blur(20px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-48 h-48 bg-orange-100 rounded-full flex items-center justify-center border-4 border-orange-400 shadow-2xl mb-6 relative overflow-hidden">
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-orange-400/20"
                            />
                            <MousePointer2 size={100} className="text-orange-600 z-10" fill="#EA580C" />
                        </div>
                        <h1 className="text-6xl font-black text-gray-800">ONE TOOL</h1>
                    </motion.div>
                )}

                {/* Step 3: Full Cursor reveal */}
                {step === 3 && (
                    <motion.div
                        key="cursor-full"
                        className="flex flex-col items-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <div className="w-56 h-56 bg-orange-100 rounded-full flex items-center justify-center border-8 border-orange-400 shadow-2xl mb-6 relative overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-400/20"
                            />
                            <MousePointer2 size={120} className="text-orange-600 z-10" fill="#EA580C" />
                        </div>
                        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                            CURSOR
                        </h1>
                        <motion.div
                            className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 px-10 py-4 rounded-2xl shadow-xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                        >
                            <span className="text-white text-2xl font-black">#1 AI TOOL 2026</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default HookScene;
