import React from 'react';
import { motion } from 'framer-motion';

// Reusable Stick Figure Component
export const StickFigure = ({ expression = 'neutral', label = '', className = '' }) => {
    const expressions = {
        neutral: '😐',
        thinking: '🤔',
        surprised: '😮',
        happy: '😊',
        sad: '😢',
        confused: '😕',
        shocked: '🤯',
    };

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <svg width="80" height="120" viewBox="0 0 80 120" className="overflow-visible">
                {/* Head */}
                <motion.circle
                    cx="40"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                />

                {/* Body */}
                <motion.line
                    x1="40" y1="38"
                    x2="40" y2="75"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.2 }}
                />

                {/* Left Arm */}
                <motion.line
                    x1="40" y1="50"
                    x2="15" y2="65"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.3 }}
                />

                {/* Right Arm */}
                <motion.line
                    x1="40" y1="50"
                    x2="65" y2="65"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.3 }}
                />

                {/* Left Leg */}
                <motion.line
                    x1="40" y1="75"
                    x2="20" y2="115"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4 }}
                />

                {/* Right Leg */}
                <motion.line
                    x1="40" y1="75"
                    x2="60" y2="115"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4 }}
                />
            </svg>

            {/* Expression overlay */}
            <motion.div
                className="absolute text-2xl"
                style={{ marginTop: '-95px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {expressions[expression]}
            </motion.div>

            {/* Label */}
            {label && (
                <motion.p
                    className="text-sm text-gray-400 mt-2 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {label}
                </motion.p>
            )}
        </div>
    );
};

export default StickFigure;
