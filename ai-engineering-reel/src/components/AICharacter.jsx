import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useSFX from '../hooks/useSFX';

const AICharacter = ({
    mood = "neutral",
    label = "",
    action = "idle",
    highlight = false,
    className = ""
}) => {
    // Eye styles based on mood
    const eyeStyles = {
        neutral: { leftEye: "●", rightEye: "●" },
        happy: { leftEye: "◠", rightEye: "◠" },
        thinking: { leftEye: "◉", rightEye: "◎" },
        surprised: { leftEye: "○", rightEye: "○" },
        wink: { leftEye: "◠", rightEye: "●" },
        sleepy: { leftEye: "−", rightEye: "−" }
    };

    const currentEyes = eyeStyles[mood] || eyeStyles.neutral;

    // Floating animation
    const floatAnimation = {
        y: [0, -8, 0],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    // Antenna bob animation
    const antennaAnimation = {
        rotate: [-5, 5, -5],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    // Glow pulse animation
    const glowColor = highlight ? "250, 204, 21" : "99, 102, 241"; // Yellow-400 vs Indigo-500

    const glowAnimation = {
        boxShadow: [
            `0 0 20px rgba(${glowColor}, 0.3)`,
            `0 0 40px rgba(${glowColor}, 0.6)`,
            `0 0 20px rgba(${glowColor}, 0.3)`
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    // Sound Effects
    const { play: playSFX } = useSFX();

    useEffect(() => {
        // Play pop sound on mount
        playSFX('pop', 0.2);
    }, []);

    useEffect(() => {
        if (mood === 'happy') playSFX('ding', 0.2);
        if (mood === 'thinking') playSFX('click', 0.1);
        if (mood === 'surprised') playSFX('glitch', 0.2);
    }, [mood]);

    // Dynamic Colors based on highlight
    // Reverted body color to original per user request, but keeping the yellow glow effect
    const bodyGradient = "from-indigo-500 to-purple-600";
    const antennaGradient = "from-indigo-400 to-purple-500";

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <motion.div
                className="relative"
                animate={floatAnimation}
            >
                {/* Antenna */}
                <motion.div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                    animate={antennaAnimation}
                    style={{ originY: 1 }}
                >
                    <motion.div
                        className={`w-4 h-4 rounded-full bg-gradient-to-br ${antennaGradient}`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <div className="w-1 h-6 bg-zinc-400" />
                </motion.div>

                {/* Main Head/Body */}
                <motion.div
                    className={`w-32 h-28 bg-gradient-to-br ${bodyGradient} rounded-3xl flex flex-col items-center justify-center relative overflow-hidden shadow-2xl`}
                    animate={glowAnimation}
                >
                    {/* Screen Face */}
                    <div className="w-24 h-16 bg-zinc-900 rounded-xl flex items-center justify-center gap-4 relative overflow-hidden">
                        {/* Scan line effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
                            animate={{ y: [-64, 64] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Eyes */}
                        <motion.span
                            className="text-3xl text-cyan-400 font-mono"
                            animate={mood === "thinking" ? { opacity: [1, 0.5, 1] } : {}}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        >
                            {currentEyes.leftEye}
                        </motion.span>
                        <motion.span
                            className="text-3xl text-cyan-400 font-mono"
                            animate={mood === "thinking" ? { opacity: [1, 0.5, 1] } : {}}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
                        >
                            {currentEyes.rightEye}
                        </motion.span>
                    </div>

                    {/* Decorative lights */}
                    <div className="flex gap-2 mt-2">
                        <motion.div
                            className="w-2 h-2 rounded-full bg-green-400"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        />
                        <motion.div
                            className="w-2 h-2 rounded-full bg-yellow-400"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                            className="w-2 h-2 rounded-full bg-red-400"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>

                {/* Arms (if action is pointing or waving) */}
                {action === "pointing" && (
                    <motion.div
                        className="absolute -right-12 top-1/2 -translate-y-1/2"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        <div className="flex items-center">
                            <div className="w-8 h-3 bg-indigo-400 rounded-full" />
                            <div className="text-2xl">👉</div>
                        </div>
                    </motion.div>
                )}

                {action === "wave" && (
                    <motion.div
                        className="absolute -right-10 top-1/3"
                        animate={{ rotate: [0, 20, 0, 20, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                        <div className="text-3xl">👋</div>
                    </motion.div>
                )}
            </motion.div>

            {/* Label */}
            {label && (
                <motion.div
                    className="mt-4 text-lg font-hand text-zinc-600 bg-white/80 px-4 py-1 rounded-full border border-zinc-200 shadow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {label}
                </motion.div>
            )}
        </div>
    );
};

export default AICharacter;
