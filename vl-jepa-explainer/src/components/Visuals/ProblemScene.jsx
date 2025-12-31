import { motion, AnimatePresence } from 'framer-motion';
import { Code, Clock, X, AlertTriangle } from 'lucide-react';

// Problem Scene - Steps 4-7
// Step 4: "Copilot gives you line-by-line suggestions"
// Step 5: "One line at a time"
// Step 6: "It's helpful..."
// Step 7: "but it doesn't really understand your whole project"
const ProblemScene = ({ step }) => {

    const codeLines = ['const x = 1;', 'const y = 2;', 'const z = 3;'];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative"
            style={{ background: 'linear-gradient(180deg, #FFFBF0 0%, #FDF4E3 100%)' }}>

            <AnimatePresence mode="wait">
                {/* Step 4: Code editor appears */}
                {step === 4 && (
                    <motion.div
                        key="editor"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-40 h-40 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-2xl mb-6">
                            <Code size={80} className="text-yellow-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Line-by-Line</h1>
                        <div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-gray-100 w-80">
                            <div className="font-mono text-lg text-gray-300 py-2">// waiting...</div>
                        </div>
                    </motion.div>
                )}

                {/* Step 5: Lines appear one by one */}
                {step === 5 && (
                    <motion.div
                        key="lines"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">One Line at a Time</h1>
                        <div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-yellow-200 w-80">
                            {codeLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    className="font-mono text-lg text-gray-700 py-2 border-b border-gray-100 last:border-0"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.5 }}
                                >
                                    {line}
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            className="mt-6 flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            <Clock size={24} className="text-yellow-600" />
                            <span className="text-yellow-600 font-mono">slow...</span>
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 6: "It's helpful" - brief positive */}
                {step === 6 && (
                    <motion.div
                        key="helpful"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-400 shadow-xl mb-6">
                            <span className="text-6xl">👍</span>
                        </div>
                        <h1 className="text-5xl font-bold text-green-600">Helpful...</h1>
                    </motion.div>
                )}

                {/* Step 7: "But doesn't understand" - negative reveal */}
                {step === 7 && (
                    <motion.div
                        key="no-context"
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="relative mb-6">
                            <div className="w-40 h-40 bg-red-100 rounded-full flex items-center justify-center border-4 border-red-300 shadow-2xl">
                                <Code size={80} className="text-red-400" />
                            </div>
                            <motion.div
                                className="absolute -top-3 -right-3 w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring" }}
                            >
                                <X size={32} className="text-white" strokeWidth={3} />
                            </motion.div>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">No Project Context</h1>
                        <div className="bg-black p-6 rounded-2xl max-w-md">
                            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 text-center">
                                Doesn't understand your whole project
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default ProblemScene;
