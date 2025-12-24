import React from 'react';

// Simplified GlitchText - no blend modes
const GlitchText = ({ text, color = "text-white", size = "text-4xl", className = "" }) => {
    return (
        <div className={`relative inline-block ${className}`}>
            {/* Base text */}
            <span className={`relative z-10 ${size} ${color} font-black tracking-tighter`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{text}</span>

            {/* Glitch Layer 1 - Red Offset - NO mix-blend-screen */}
            <span
                className={`absolute top-0 left-0 ${size} text-red-500 opacity-50 animate-glitch-1 pointer-events-none`}
                style={{ transform: 'translateX(2px)' }}
            >
                {text}
            </span>

            {/* Glitch Layer 2 - Cyan Offset */}
            <span
                className={`absolute top-0 left-0 ${size} text-cyan-400 opacity-50 animate-glitch-2 pointer-events-none`}
                style={{ transform: 'translateX(-2px)' }}
            >
                {text}
            </span>
        </div>
    );
};

export default GlitchText;
