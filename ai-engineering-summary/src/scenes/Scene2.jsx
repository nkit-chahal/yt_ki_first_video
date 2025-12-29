import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrickWall, AlertTriangle } from 'lucide-react';

// Scene 2: The Wall
// Visual: Computational complexity exploding (Quadratic growth)
const Scene2 = () => {

    // SFX: Error beep
    useEffect(() => {
        const sfx = new Audio('/sfx/error.mp3');
        sfx.volume = 0.25;
        setTimeout(() => sfx.play().catch(() => { }), 2000);
    }, []);
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden p-6">

            <motion.h2
                className="text-3xl font-bold text-red-500 mb-8 z-10 flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <BrickWall /> THE COMPUTE WALL
            </motion.h2>

            {/* Visualizing N^2 Complexity */}
            <div className="relative w-64 h-64 bg-gray-900 rounded-xl border border-gray-800 p-4 overflow-hidden">
                <div className="absolute top-2 left-2 text-xs text-gray-500 font-mono">Vanilla Attention (N²)</div>

                {/* Tokens attempting to connect to all other tokens */}
                <div className="absolute inset-0 flex flex-wrap gap-1 p-4 content-start">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-gray-600 rounded-full"
                            initial={{ scale: 1 }}
                            animate={{
                                scale: [1, 1.5, 1],
                                backgroundColor: ["#4b5563", "#ef4444", "#4b5563"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.05
                            }}
                        />
                    ))}

                    {/* Connection Lines (Chaos) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                        {[...Array(10)].map((_, i) => (
                            <motion.line
                                key={i}
                                x1="50%" y1="50%"
                                x2={`${Math.random() * 100}%`} y2={`${Math.random() * 100}%`}
                                stroke="#ef4444"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() }}
                            />
                        ))}
                    </svg>
                </div>

                {/* Warning Overlay */}
                <motion.div
                    className="absolute inset-0 bg-red-900/40 flex items-center justify-center backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                >
                    <div className="bg-black/80 border border-red-500 text-red-500 px-4 py-2 rounded-lg flex items-col items-center gap-2">
                        <AlertTriangle size={24} />
                        <span className="font-bold">OOM ERROR</span>
                    </div>
                </motion.div>
            </div>

            <motion.p
                className="mt-6 text-xl text-white font-mono text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                More Context = <span className="text-red-500">Exponential Cost</span>
            </motion.p>
        </div>
    );
};

export default Scene2;
