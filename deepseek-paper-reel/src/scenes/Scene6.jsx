import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Check, X, FileSpreadsheet } from 'lucide-react';

// Scene 6: Cheat Test - "100% Accuracy"
// Visual: Warm theme table showing cheat test results
const Scene6 = ({ animSpeed = 1 }) => {

    // Helper to scale time
    const t = (val) => val / animSpeed;

    // SFX: Ding for 100% highlight
    useEffect(() => {
        const sfx = new Audio('/sfx/ding.mp3');
        sfx.volume = 0.3;
        const timer = setTimeout(() => sfx.play().catch(() => { }), t(2000));
        return () => clearTimeout(timer);
    }, [animSpeed]);

    const testResults = [
        { model: "Web-Trained", accuracy: "12%", usedContext: false },
        { model: "2.5 Years", accuracy: "100%", usedContext: true },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DA 50%, #E8DFD0 100%)' }}>

            {/* Title */}
            <motion.div
                className="flex items-center gap-3 mb-8 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: t(0.5) }}
            >
                <Target size={28} className="text-[#D94A38]" />
                <h2 className="text-2xl font-bold text-gray-800">The Cheat Test</h2>
            </motion.div>

            {/* Explanation */}
            <motion.p
                className="text-gray-600 text-sm text-center max-w-md mb-8 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: t(0.3), duration: t(0.5) }}
            >
                They gave the <span className="text-[#D94A38] font-semibold">answer in the context window</span>.
                <br />
                Would the model actually use it?
            </motion.p>

            {/* Results Table */}
            <motion.div
                className="bg-white rounded-2xl overflow-hidden z-10 shadow-lg border border-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: t(0.5), duration: t(0.5) }}
            >
                {/* Header */}
                <div className="flex bg-gray-50 border-b border-gray-200">
                    <div className="px-6 py-3 text-gray-500 text-sm font-medium w-40">Model</div>
                    <div className="px-6 py-3 text-gray-500 text-sm font-medium w-32 text-center">Accuracy</div>
                    <div className="px-6 py-3 text-gray-500 text-sm font-medium w-36 text-center">Used Context?</div>
                </div>

                {/* Rows */}
                {testResults.map((result, i) => (
                    <motion.div
                        key={i}
                        className={`flex border-b border-gray-100 last:border-0 ${result.usedContext ? 'bg-green-50' : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: t(1 + i * 0.3), duration: t(0.5) }}
                    >
                        <div className="px-6 py-4 text-gray-800 font-medium w-40">{result.model}</div>
                        <motion.div
                            className={`px-6 py-4 w-32 text-center font-bold text-xl ${result.usedContext ? 'text-green-600' : 'text-[#D94A38]'}`}
                            initial={{ scale: 1 }}
                            animate={result.usedContext ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ delay: t(2), duration: t(0.5) }}
                        >
                            {result.accuracy}
                        </motion.div>
                        <div className="px-6 py-4 w-36 flex justify-center">
                            {result.usedContext ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: t(2), type: "spring" }}
                                >
                                    <Check size={24} className="text-green-600" />
                                </motion.div>
                            ) : (
                                <X size={24} className="text-[#D94A38]" />
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Highlight Box */}
            <motion.div
                className="mt-8 bg-green-50 border border-green-300 px-6 py-4 rounded-xl z-10 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: t(2.5), duration: t(0.5) }}
            >
                <Eye size={24} className="text-green-600" />
                <span className="text-green-700">
                    This model <span className="font-bold">actually pays attention</span>
                </span>
            </motion.div>

        </div>
    );
};

export default Scene6;
