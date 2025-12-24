import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

// Scene 2: THE QUESTION - The Tuple Gotcha (With Progress Circle)
const Scene2 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-12 relative">

            {/* Reading Timer Progress Circle */}
            <div className="absolute top-12 left-12 flex items-center gap-4">
                <div className="relative w-16 h-16">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                        {/* Background Circle */}
                        <circle
                            cx="30"
                            cy="30"
                            r="26"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            className="text-gray-300 opacity-20"
                        />
                        {/* Progress Circle */}
                        <motion.circle
                            cx="30"
                            cy="30"
                            r="26"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            className="text-primary"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 12 / speed, ease: "linear" }}
                        />
                    </svg>
                    {/* Icon inside */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl">⏱️</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <motion.div
                className="flex items-center gap-4"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <Code size={64} className="text-primary" strokeWidth={2.5} />
                <h2 className="text-5xl font-bold text-text-dark">What does this print?</h2>
            </motion.div>

            {/* Code Block */}
            <motion.div
                className="code-block w-full max-w-2xl text-5xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 / speed, type: "spring" }}
            >
                {/* Line Numbers */}
                <div className="flex">
                    <div className="text-gray-500 pr-8 select-none">
                        1<br />2<br />3
                    </div>
                    <div>
                        {/* Line 1: t = (1, 2, [3, 4]) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 / speed }}
                        >
                            <span className="text-purple-400">t</span>
                            <span className="text-white"> = </span>
                            <span className="text-yellow-300">(</span>
                            <span className="text-orange-400">1</span>
                            <span className="text-white">, </span>
                            <span className="text-orange-400">2</span>
                            <span className="text-white">, </span>
                            <span className="text-cyan-400">[</span>
                            <span className="text-orange-400">3</span>
                            <span className="text-white">, </span>
                            <span className="text-orange-400">4</span>
                            <span className="text-cyan-400">]</span>
                            <span className="text-yellow-300">)</span>
                        </motion.div>

                        {/* Line 2: t[2].append(5) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 / speed }}
                        >
                            <span className="text-purple-400">t</span>
                            <span className="text-white">[</span>
                            <span className="text-orange-400">2</span>
                            <span className="text-white">].</span>
                            <span className="text-blue-400">append</span>
                            <span className="text-white">(</span>
                            <span className="text-orange-400">5</span>
                            <span className="text-white">)</span>
                        </motion.div>

                        {/* Line 3: print(t) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1 / speed }}
                        >
                            <span className="text-green-400">print</span>
                            <span className="text-white">(</span>
                            <span className="text-purple-400">t</span>
                            <span className="text-white">)</span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Question Prompt */}
            <motion.div
                className="text-6xl font-black text-accent glow-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 / speed }}
            >
                ???
            </motion.div>
        </div>
    );
};

export default Scene2;
