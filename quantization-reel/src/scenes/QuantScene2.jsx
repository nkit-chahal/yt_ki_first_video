import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

const QuantScene2 = () => {
    const codeLines = [
        "0.98234761253421",
        "0.12847362519843",
        "0.74829103847261",
        "0.39281746382910",
        "0.85720394817263",
        "0.29384710293847",
    ];

    return (
        <SceneWrapper>
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-gray-900 px-4">

                {/* Title */}
                <motion.div
                    className="absolute top-12 w-full text-center z-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="text-4xl font-black text-white mb-2 drop-shadow-lg">32-bit Precision</div>
                    <div className="text-xl text-gray-300">Like writing an essay when a tweet would do</div>
                </motion.div>

                {/* CENTER CONTAINER FOR TRANSFORM */}
                <div className="relative w-full max-w-lg h-96 flex items-center justify-center">

                    {/* ESSAY BLOCK (Centers then shrinks) */}
                    <motion.div
                        className="absolute w-full h-full bg-blue-900/40 border-4 border-blue-500/60 rounded-3xl overflow-hidden"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{
                            scale: [1, 1, 0],
                            opacity: [1, 1, 0],
                        }}
                        transition={{ delay: 3.5, duration: 0.8, ease: "anticipate" }}
                    >
                        {/* Scrolling Code */}
                        <motion.div
                            className="absolute w-full p-6"
                            animate={{ y: [0, -400] }}
                            transition={{ duration: 3.5, ease: "linear" }}
                        >
                            {[...Array(6)].map((_, groupIdx) => (
                                <div key={groupIdx} className="space-y-4 mb-6">
                                    {codeLines.map((line, i) => (
                                        <div
                                            key={`${groupIdx}-${i}`}
                                            className="font-mono text-blue-200 text-lg"
                                        >
                                            <span className="text-purple-400">w</span>
                                            <span className="text-gray-400">[{i}]</span>
                                            <span className="text-white">=</span>
                                            <span className="text-green-400">{line.substring(0, 8)}...</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/90 pointer-events-none" />

                        {/* WAY TOO MUCH Badge */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center z-20"
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: -12 }}
                            transition={{ delay: 1.5, type: "spring" }}
                        >
                            <div className="bg-red-600 text-white px-8 py-4 rounded-xl font-black text-3xl shadow-2xl border-4 border-white rotate-[-5deg]">
                                WAY TOO MUCH!
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Implosion Particles */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-blue-400 rounded-full w-3 h-3"
                            initial={{ opacity: 0 }}
                            animate={{
                                x: [(Math.random() - 0.5) * 600, 0],
                                y: [(Math.random() - 0.5) * 600, 0],
                                opacity: [0, 1, 0],
                                scale: [2, 0]
                            }}
                            transition={{ delay: 3.5, duration: 0.6 }}
                        />
                    ))}

                    {/* TWEET Result (Appears in center) */}
                    <motion.div
                        className="absolute w-[90%]"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 4.3, type: "spring", stiffness: 200 }}
                    >
                        <div className="bg-green-900/80 border-4 border-green-500 p-8 rounded-3xl text-center shadow-[0_0_80px_rgba(34,197,94,0.6)] backdrop-blur-md">
                            <div className="text-green-300 text-lg mb-2 font-bold uppercase tracking-widest">4-bit Precision</div>
                            <div className="font-mono text-6xl font-black text-white mb-2">
                                <span className="text-green-400">7</span>
                            </div>
                            <div className="text-white text-xl font-bold">Same meaning.<br />8x smaller.</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </SceneWrapper>
    );
};

export default QuantScene2;
