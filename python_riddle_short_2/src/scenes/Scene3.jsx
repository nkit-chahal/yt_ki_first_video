import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

// Scene 3: COUNTDOWN 3-2-1 + TIME'S UP (With Code Visible)
const Scene3 = ({ speed = 1 }) => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => setCount(c => c - 1), 1000 / speed);
            return () => clearTimeout(timer);
        }
    }, [count, speed]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-start pt-24 gap-12 p-8 relative">

            {/* PERSISTENT CODE BLOCK - scaled down slightly */}
            <motion.div
                className="code-block w-full max-w-2xl text-4xl"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 0.8, y: 0 }}
                transition={{ duration: 0.5 / speed }}
            >
                <div className="flex">
                    <div className="text-gray-500 pr-8 select-none">
                        1<br />2<br />3
                    </div>
                    <div>
                        {/* Line 1: t = (1, 2, [3, 4]) */}
                        <div>
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
                        </div>

                        {/* Line 2: t[2].append(5) */}
                        <div>
                            <span className="text-purple-400">t</span>
                            <span className="text-white">[</span>
                            <span className="text-orange-400">2</span>
                            <span className="text-white">].</span>
                            <span className="text-blue-400">append</span>
                            <span className="text-white">(</span>
                            <span className="text-orange-400">5</span>
                            <span className="text-white">)</span>
                        </div>

                        {/* Line 3: print(t) */}
                        <div>
                            <span className="text-green-400">print</span>
                            <span className="text-white">(</span>
                            <span className="text-purple-400">t</span>
                            <span className="text-white">)</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* COUNTDOWN SECTION */}
            <div className="flex flex-col items-center gap-8 mt-10">
                {/* Timer Icon */}
                <motion.div
                    animate={{ rotate: count > 0 ? [0, 10, -10, 0] : 0 }}
                    transition={{ duration: 0.5, repeat: count > 0 ? Infinity : 0 }}
                >
                    <Clock size={100} className="text-accent" strokeWidth={2.5} />
                </motion.div>

                {/* Countdown Number */}
                <AnimatePresence mode="wait">
                    {count > 0 ? (
                        <motion.div
                            key={count}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 2, opacity: 0 }}
                            className="text-[200px] font-black text-text-dark leading-none"
                            style={{ textShadow: '0 10px 40px rgba(0,0,0,0.15)' }}
                        >
                            {count}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="timesup"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-7xl font-black text-accent glow-accent"
                        >
                            TIME'S UP!
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Subtitle */}
                <motion.p
                    className="text-3xl text-text-muted font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {count > 0 ? "Last chance! 🫣" : "Here comes the answer..."}
                </motion.p>
            </div>
        </div>
    );
};

export default Scene3;
