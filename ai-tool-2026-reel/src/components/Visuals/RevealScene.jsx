import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

const RevealScene = ({ step }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-amber-50 to-orange-200" />

            {/* Burst particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => {
                    const angle = (i / 20) * 360;
                    const distance = 400 + Math.random() * 300;
                    return (
                        <motion.div
                            key={i}
                            initial={{
                                x: 540,
                                y: 960,
                                scale: 0,
                                opacity: 0
                            }}
                            animate={{
                                x: 540 + Math.cos(angle * Math.PI / 180) * distance,
                                y: 960 + Math.sin(angle * Math.PI / 180) * distance,
                                scale: [0, 1.5, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeOut"
                            }}
                            className="absolute"
                        >
                            <Sparkles size={20} className="text-orange-500" />
                        </motion.div>
                    );
                })}
            </div>

            {/* Main reveal content */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative z-10 text-center"
            >
                {/* Logo container with glow */}
                <motion.div
                    animate={{
                        boxShadow: [
                            "0 0 40px rgba(234, 88, 12, 0.4)",
                            "0 0 100px rgba(234, 88, 12, 0.8)",
                            "0 0 40px rgba(234, 88, 12, 0.4)"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-80 h-80 rounded-[60px] bg-[#1a1a1a] flex items-center justify-center mb-16 mx-auto overflow-hidden"
                >
                    <motion.img
                        src="/antigravity-logo.png"
                        alt="Antigravity Logo"
                        className="w-64 h-64 object-contain"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </motion.div>

                {/* Brand name */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h1 className="text-8xl font-black text-gray-900 mb-4">
                        Antigravity
                    </h1>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-4xl text-gray-500 font-medium">by</span>
                        <span className="text-5xl font-bold text-orange-600">Google</span>
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-3xl text-gray-600 mt-12 font-medium"
                >
                    The AI coding assistant that <span className="text-orange-600 font-bold">defies limits</span>
                </motion.p>
            </motion.div>
        </div>
    );
};

export default RevealScene;
