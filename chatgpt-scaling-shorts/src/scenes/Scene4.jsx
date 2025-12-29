import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';

// Scene 4: Naive Batching - "The GPU just sits there"
const Scene4 = ({ speed = 1 }) => {
    useEffect(() => {
        const clock = new Audio('/sfx/clock.mp3');
        clock.loop = true;
        clock.volume = 0.25;
        clock.play().catch(() => { });
        return () => clock.pause();
    }, []);

    const requests = [
        { id: 1, length: 30, color: "bg-red-500" },
        { id: 2, length: 100, color: "bg-blue-500" },
        { id: 3, length: 60, color: "bg-yellow-500" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-12 bg-bg-main relative">

            <motion.h2
                className="text-5xl font-black text-white z-10 text-center uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                The GPU Just <span className="text-red-500">Sits There</span>
            </motion.h2>

            <motion.p
                className="text-2xl text-gray-400 z-10 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 / speed }}
            >
                Waiting for the slowest request...
            </motion.p>

            {/* GPU Utilization Meter */}
            <motion.div
                className="w-full max-w-md bg-gray-900 rounded-full h-16 border-2 border-red-500/50 overflow-hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 / speed }}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-red-600 to-red-400"
                    initial={{ width: 0 }}
                    animate={{ width: "35%" }}
                    transition={{ delay: 0.8 / speed, duration: 1 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-black text-2xl">GPU: 35% 😴</span>
                </div>
            </motion.div>

            <div className="w-full max-w-4xl z-10 flex flex-col gap-6 mt-4">
                {requests.map((req, i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-800 rounded-r-2xl h-28 flex items-center relative overflow-hidden border border-gray-600"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (0.5 + i * 0.2) / speed }}
                    >
                        {/* Active Work */}
                        <motion.div className={`h-full ${req.color} absolute left-0`} style={{ width: `${req.length}%` }} />

                        {/* Waste Area (Blinking) */}
                        <motion.div
                            className="h-full bg-red-900/30 absolute right-0 flex items-center justify-center gap-4 border-l-2 border-dashed border-red-500/50"
                            style={{ width: `${100 - req.length}%` }}
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Clock size={32} className="text-red-400" />
                            <span className="text-red-400 font-mono text-lg">IDLE</span>
                        </motion.div>

                        <span className="z-10 ml-6 text-white font-bold text-2xl drop-shadow-md">User {req.id}</span>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="flex items-center gap-4 text-red-400 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 / speed }}
            >
                <AlertTriangle size={32} />
                <span className="text-xl font-bold">Doing nothing. Wasted cycles!</span>
            </motion.div>

        </div>
    );
};

export default Scene4;
