import React from 'react';
import { motion } from 'framer-motion';

const StickFigure = ({
    pose = "standing",
    expression = "neutral",
    label = "",
    className = "",
    animate = true
}) => {
    // Enhanced SVG paths for different poses
    const poses = {
        standing: {
            body: "M 50 70 L 50 140",
            legs: "M 50 140 L 25 200 M 50 140 L 75 200",
            arms: "M 50 95 L 20 115 M 50 95 L 80 115"
        },
        thinking: {
            body: "M 50 70 L 50 140",
            legs: "M 50 140 L 30 200 M 50 140 L 70 200",
            arms: "M 50 95 L 75 70 M 50 95 L 20 120" // Hand to chin
        },
        explaining: {
            body: "M 50 70 L 50 140",
            legs: "M 50 140 L 30 200 M 50 140 L 70 200",
            arms: "M 50 95 L 10 75 M 50 95 L 95 85" // Arms out gesturing
        },
        happy: {
            body: "M 50 70 L 50 140",
            legs: "M 50 140 L 30 200 M 50 140 L 70 200",
            arms: "M 50 95 L 15 60 M 50 95 L 85 60" // Arms up celebrating
        },
        pointing: {
            body: "M 50 70 L 50 140",
            legs: "M 50 140 L 30 200 M 50 140 L 70 200",
            arms: "M 50 95 L 20 120 M 50 95 L 100 70" // Pointing right
        },
        confused: {
            body: "M 50 70 L 50 140",
            legs: "M 50 140 L 30 200 M 50 140 L 70 200",
            arms: "M 50 95 L 10 90 M 50 95 L 90 90" // Arms out shrug
        }
    };

    const currentPose = poses[pose] || poses.standing;

    // Animation variants for subtle movement
    const bodyVariants = animate ? {
        animate: {
            y: [0, -2, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    } : {};

    const armVariants = animate ? {
        animate: {
            rotate: [-2, 2, -2],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    } : {};

    return (
        <div className={`relative flex flex-col items-center ${className}`}>
            <motion.svg
                viewBox="0 0 100 210"
                className="w-28 h-48 overflow-visible"
                variants={bodyVariants}
                animate="animate"
            >
                <g
                    stroke="#2C2C2C"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Head */}
                    <circle cx="50" cy="35" r="28" />

                    {/* Face Expressions */}
                    {(expression === "neutral" || expression === "thinking") && (
                        <>
                            <circle cx="40" cy="32" r="3" fill="#2C2C2C" />
                            <circle cx="60" cy="32" r="3" fill="#2C2C2C" />
                            <path d="M 38 45 L 62 45" strokeWidth="3" />
                        </>
                    )}
                    {(expression === "happy" || pose === "happy") && (
                        <>
                            <circle cx="40" cy="30" r="3" fill="#2C2C2C" />
                            <circle cx="60" cy="30" r="3" fill="#2C2C2C" />
                            <path d="M 38 45 Q 50 55 62 45" strokeWidth="3" />
                        </>
                    )}
                    {expression === "sad" && (
                        <>
                            <circle cx="40" cy="32" r="3" fill="#2C2C2C" />
                            <circle cx="60" cy="32" r="3" fill="#2C2C2C" />
                            <path d="M 38 50 Q 50 42 62 50" strokeWidth="3" />
                        </>
                    )}
                    {expression === "surprised" && (
                        <>
                            <circle cx="40" cy="30" r="4" fill="#2C2C2C" />
                            <circle cx="60" cy="30" r="4" fill="#2C2C2C" />
                            <circle cx="50" cy="48" r="6" />
                        </>
                    )}

                    {/* Body */}
                    <path d={currentPose.body} />

                    {/* Legs */}
                    <path d={currentPose.legs} />

                    {/* Arms with subtle animation */}
                    <motion.g variants={armVariants} animate="animate" style={{ originX: 0.5, originY: 0.45 }}>
                        <path d={currentPose.arms} />
                    </motion.g>
                </g>
            </motion.svg>

            {/* Optional Label */}
            {label && (
                <motion.div
                    className="text-center font-hand text-lg text-zinc-600 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {label}
                </motion.div>
            )}
        </div>
    );
};

export default StickFigure;
