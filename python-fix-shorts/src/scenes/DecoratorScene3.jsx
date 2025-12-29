import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';
import { Box, Package, ArrowRight } from 'lucide-react';

const DecoratorScene3 = () => {
    return (
        <SceneWrapper>
            <Title color="text-yellow-400">The Wrapper 🎁</Title>

            <div className="relative w-72 h-72 flex items-center justify-center">

                {/* Data Flow Animation */}
                <motion.div
                    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent z-0"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 200, opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Function */}
                <motion.div
                    className="absolute w-32 h-32 bg-blue-500 rounded-2xl flex flex-col items-center justify-center z-10 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                >
                    <Box className="text-white w-10 h-10 mb-2" />
                    <span className="text-xl font-mono font-bold text-white">Func</span>
                </motion.div>

                {/* Outer Wrapper (Decorator) */}
                <motion.div
                    className="absolute w-64 h-64 border-4 border-yellow-400 rounded-3xl flex items-center justify-center border-dashed"
                    initial={{ scale: 1.5, opacity: 0, rotate: 0 }}
                    animate={{ scale: 1, opacity: 1, rotate: 360 }}
                    transition={{ delay: 0.8, duration: 10, ease: "linear", repeat: Infinity }}
                >
                    <div className="absolute -top-5 bg-yellow-400 text-black font-bold px-4 py-1 rounded-full flex items-center gap-2 shadow-lg">
                        <Package className="w-4 h-4" /> Logging
                    </div>
                </motion.div>

                {/* Orbiting Particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-full h-full rounded-full border border-blue-400/20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-0 left-1/2 -ml-1 shadow-[0_0_10px_#60A5FA]" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-12 text-2xl font-bold text-white flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <Box className="w-6 h-6 text-blue-400" />
                <span>inside</span>
                <Package className="w-6 h-6 text-yellow-400" />
            </motion.div>
        </SceneWrapper>
    );
};

export default DecoratorScene3;
