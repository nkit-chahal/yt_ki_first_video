import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Repeat, CheckCircle } from 'lucide-react';

// Scene 5: Continuous Batching - "No gaps. No wasted cycles."
const Scene5 = ({ speed = 1 }) => {
    useEffect(() => {
        const swoosh = new Audio('/sfx/swoosh.mp3');
        swoosh.volume = 0.2;

        // Play swoosh on block entry
        const timers = [500, 600, 800, 1000, 1200].map(t =>
            setTimeout(() => {
                swoosh.currentTime = 0;
                swoosh.play().catch(() => { });
            }, t / speed)
        );

        return () => timers.forEach(clearTimeout);
    }, [speed]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center uppercase leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Continuous <span className="text-primary glow-primary">Batching</span>
            </motion.h2>

            <motion.p
                className="text-2xl text-primary z-10 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 / speed }}
            >
                No gaps. No wasted cycles.
            </motion.p>

            {/* GPU Utilization Meter - 100% */}
            <motion.div
                className="w-full max-w-md bg-gray-900 rounded-full h-16 border-2 border-primary overflow-hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 / speed }}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-green-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8 / speed, duration: 1 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-black text-2xl">GPU: 100% 🔥</span>
                </div>
            </motion.div>

            <div className="w-full max-w-4xl z-10 flex flex-col gap-4 mt-4">

                {/* Lane 1 */}
                <div className="h-28 bg-gray-900 rounded-lg flex overflow-hidden border border-gray-700 relative">
                    <motion.div className="h-full bg-primary w-[30%] border-r border-black flex items-center"><span className="p-4 text-white font-bold text-xl">A</span></motion.div>
                    <motion.div className="h-full bg-blue-500 w-[50%] border-r border-black flex items-center" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ delay: 0.5 / speed }}><span className="p-4 text-white font-bold text-xl">D</span></motion.div>
                    <motion.div className="h-full bg-purple-500 w-[20%] flex items-center" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ delay: 1 / speed }}><span className="p-4 text-white font-bold text-xl">G</span></motion.div>
                </div>

                {/* Lane 2 */}
                <div className="h-28 bg-gray-900 rounded-lg flex overflow-hidden border border-gray-700 relative">
                    <motion.div className="h-full bg-red-400 w-[60%] border-r border-black flex items-center"><span className="p-4 text-white font-bold text-xl">B</span></motion.div>
                    <motion.div className="h-full bg-yellow-500 w-[40%] flex items-center" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ delay: 0.8 / speed }}><span className="p-4 text-white font-bold text-xl">E</span></motion.div>
                </div>

                {/* Lane 3 */}
                <div className="h-28 bg-gray-900 rounded-lg flex overflow-hidden border border-gray-700 relative">
                    <motion.div className="h-full bg-indigo-500 w-[40%] border-r border-black flex items-center"><span className="p-4 text-white font-bold text-xl">C</span></motion.div>
                    <motion.div className="h-full bg-pink-500 w-[30%] border-r border-black flex items-center" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ delay: 0.6 / speed }}><span className="p-4 text-white font-bold text-xl">F</span></motion.div>
                    <motion.div className="h-full bg-green-500 w-[30%] flex items-center" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ delay: 1.2 / speed }}><span className="p-4 text-white font-bold text-xl">H</span></motion.div>
                </div>

            </div>

            <motion.div
                className="mt-4 flex items-center gap-4 text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 / speed }}
            >
                <CheckCircle size={32} />
                <span className="text-xl font-bold">New request jumps in instantly!</span>
            </motion.div>

        </div>
    );
};

export default Scene5;
