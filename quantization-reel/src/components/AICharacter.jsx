import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
        sleepy: { leftEye: "−", rightEye: "−" },
        determined: { leftEye: "Ò", rightEye: "Ó" } // Added determined
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

    // Dynamic Colors based on highlight
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
                    className={`w-24 h-20 rounded-2xl bg-gradient-to-b ${bodyGradient} flex items-center justify-center relative overflow-hidden border-2 border-indigo-400/50`}
                    animate={glowAnimation}
                >
                    {/* Screen Gloss */}
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-white/10 rounded-t-lg" />

                    {/* Face Container */}
                    <div className="flex items-center gap-3 relative z-10">
                        {/* Eyes */}
                        <div className="text-white font-black text-2xl flex gap-4">
                            <motion.span
                                key={mood + "left"}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                            >
                                {currentEyes.leftEye}
                            </motion.span>
                            <motion.span
                                key={mood + "right"}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                            >
                                {currentEyes.rightEye}
                            </motion.span>
                        </div>
                    </div>

                    {/* Mouth (Simple Line) */}
                    {mood === 'happy' && (
                        <div className="absolute bottom-4 w-4 h-2 border-b-2 border-white/80 rounded-full" />
                    )}
                    {mood === 'surprised' && (
                        <div className="absolute bottom-3 w-3 h-3 border-2 border-white/80 rounded-full bg-black/20" />
                    )}
                </motion.div>

                {/* Label */}
                {label && (
                    <motion.div
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800/80 text-white text-xs px-3 py-1 rounded-full border border-gray-600"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {label}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default AICharacter;
