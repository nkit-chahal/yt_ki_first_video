import React from 'react';
import { SceneWrapper } from '../components/Layout';
import { motion } from 'framer-motion';

const QuantScene3 = () => {
    const decimals = ['2', '3', '4', '1', '8'];

    return (
        <SceneWrapper>
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">

                {/* Title */}
                <motion.div
                    className="absolute top-20 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="text-2xl text-gray-400">Think of it like rounding...</div>
                </motion.div>

                {/* The Number with Crumbling Decimals */}
                <div className="relative flex items-baseline text-7xl font-mono font-bold">

                    {/* Stable Part */}
                    <motion.span
                        className="text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        0.98
                    </motion.span>

                    {/* Crumbling Decimals (Falling Down) */}
                    {decimals.map((digit, i) => (
                        <motion.span
                            key={i}
                            className="text-red-400 inline-block origin-top"
                            initial={{ opacity: 1, y: 0, rotate: 0 }}
                            animate={{
                                opacity: [1, 0.5, 0],
                                y: [0, 200 + Math.random() * 100], // Fall down (Gravity)
                                rotate: [0, (Math.random() - 0.5) * 90],
                                filter: ["blur(0px)", "blur(4px)"]
                            }}
                            transition={{
                                delay: 1.5 + i * 0.15,
                                duration: 1.2,
                                ease: "easeIn"
                            }}
                        >
                            {digit}
                        </motion.span>
                    ))}
                </div>

                {/* Dust Particles (Gravity) */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-500 rounded-full"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{
                            opacity: [1, 0],
                            y: [0, 300], // Fall down
                            x: (Math.random() - 0.5) * 100
                        }}
                        transition={{
                            delay: 1.8 + Math.random() * 0.5,
                            duration: 1.5,
                            ease: "easeIn"
                        }}
                        style={{
                            left: `${60 + Math.random() * 10}%`,
                            top: '45%'
                        }}
                    />
                ))}

                {/* Pulsing Arrow */}
                <motion.div
                    className="absolute text-5xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: [1, 1.2, 1],
                        y: [0, 10, 0]
                    }}
                    transition={{
                        delay: 3,
                        scale: { repeat: Infinity, duration: 1 },
                        y: { repeat: Infinity, duration: 1 }
                    }}
                    style={{ top: '55%' }}
                >
                    ⬇️
                </motion.div>

                {/* The Clean Result */}
                <motion.div
                    className="absolute bottom-32"
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 3.5, type: "spring", stiffness: 300 }}
                >
                    <div className="relative">
                        <div className="w-40 h-40 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-[0_0_80px_rgba(34,197,94,0.5)]">
                            <span className="text-8xl font-black text-white">1</span>
                        </div>

                        {/* Glow Ring */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl border-4 border-green-400"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>

                {/* Bottom Text */}
                <motion.div
                    className="absolute bottom-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                >
                    <div className="text-2xl font-bold text-green-300">Keep the meaning. Drop the noise.</div>
                </motion.div>

            </div>
        </SceneWrapper>
    );
};

export default QuantScene3;
