import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Terminal, Code } from 'lucide-react';

// Reveal Scene - Steps 8-10
// Step 8: "Meet Cursor"
// Step 9: "An AI-first code editor"
// Step 10: "built on VS Code"
const RevealScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative"
            style={{ background: 'linear-gradient(180deg, #FFFBF0 0%, #FDF4E3 100%)' }}>

            <AnimatePresence mode="wait">
                {/* Step 8: "Meet Cursor" - Logo reveal */}
                {step === 8 && (
                    <motion.div
                        key="meet"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 150 }}
                    >
                        <motion.div
                            className="w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center border-8 border-orange-400 shadow-2xl relative overflow-hidden"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-orange-400/30"
                            />
                            <MousePointer2 size={140} className="text-orange-600 z-10" fill="#EA580C" />
                        </motion.div>
                        <motion.h1
                            className="text-7xl font-black text-orange-600 mt-8"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            CURSOR
                        </motion.h1>
                    </motion.div>
                )}

                {/* Step 9: "AI-first code editor" */}
                {step === 9 && (
                    <motion.div
                        key="ai-first"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center border-4 border-blue-400 shadow-xl">
                                <span className="text-5xl">🤖</span>
                            </div>
                            <motion.span
                                className="text-6xl font-black text-gray-400"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                +
                            </motion.span>
                            <div className="w-24 h-24 bg-purple-100 rounded-2xl flex items-center justify-center border-4 border-purple-400 shadow-xl">
                                <Code size={48} className="text-purple-600" />
                            </div>
                        </div>
                        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            AI-FIRST
                        </h1>
                        <p className="text-3xl text-gray-600 mt-2">Code Editor</p>
                    </motion.div>
                )}

                {/* Step 10: "built on VS Code" */}
                {step === 10 && (
                    <motion.div
                        key="vscode"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-32 h-32 bg-orange-100 rounded-3xl flex items-center justify-center border-4 border-orange-400 shadow-xl">
                                <MousePointer2 size={64} className="text-orange-600" fill="#EA580C" />
                            </div>
                            <motion.div
                                className="text-4xl"
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                →
                            </motion.div>
                            <div className="w-32 h-32 bg-blue-100 rounded-3xl flex items-center justify-center border-4 border-blue-400 shadow-xl">
                                <Terminal size={64} className="text-blue-600" />
                            </div>
                        </div>
                        <div className="bg-black p-6 rounded-2xl shadow-2xl">
                            <div className="flex items-center gap-3">
                                <Terminal size={28} className="text-blue-400" />
                                <span className="text-xl text-white font-medium">Built on VS Code</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default RevealScene;
