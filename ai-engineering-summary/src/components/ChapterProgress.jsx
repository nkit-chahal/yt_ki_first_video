import React from 'react';
import { motion } from 'framer-motion';

// Icons for each chapter
const CHAPTER_ICONS = {
    0: "📖", // Intro (Book)
    1: "🤖", // What is AI (Robot)
    2: "🏗️", // Foundation Models (Building)
    3: "💾", // Training Data (Disk/Data)
    4: "⚡", // Transformers (Energy)
    5: "⚖️", // Evaluation (Scale)
    6: "🧠", // Model Selection (Brain)
    7: "💬", // Prompt Engineering (Chat)
    8: "🔎", // RAG (Search)
    9: "🕵️", // Agents (Detective)
    10: "🚀", // Optimization (Rocket)
    11: "🏁", // Conclusion (Flag)
};

const ChapterProgress = ({
    currentScene,
    totalScenes,
    chapterIndex,
    className = ""
}) => {
    // Calculate progress percentage (ensure at least a small slice is visible)
    const progress = Math.min(100, Math.max(5, ((currentScene + 1) / totalScenes) * 100));

    // SVG Circle properties
    const size = 120;
    const strokeWidth = 8;
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    const icon = CHAPTER_ICONS[chapterIndex] || "📄";

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* SVG Progress Circle */}
            <svg
                className="transform -rotate-90 w-32 h-32" // Rotated so start is at top
                viewBox={`0 0 ${size} ${size}`}
            >
                {/* Background Track */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="transparent"
                    stroke="rgba(180, 83, 9, 0.2)" // amber-700 fade
                    strokeWidth={strokeWidth}
                />

                {/* Progress Indicator */}
                <motion.circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="transparent"
                    stroke="#B45309" // amber-700
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    strokeLinecap="round"
                />
            </svg>

            {/* Icon in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Inner Drop Shadow/Glow Background similar to reference */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-600 to-yellow-800 shadow-inner flex items-center justify-center border-4 border-yellow-900/30">
                    <span className="text-6xl filter drop-shadow-md pb-2">
                        {icon}
                    </span>
                </div>
            </div>

            {/* Chapter Label (Optional, floating below) */}
            <div className="absolute -bottom-10 bg-black/50 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-bold opacity-80">
                {currentScene + 1}/{totalScenes}
            </div>
        </div>
    );
};

export default ChapterProgress;
