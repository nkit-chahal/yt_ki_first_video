import React from 'react';

// Simplified CRT Overlay - no blend modes that cause issues
const CRTOverlay = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
            {/* Dark Vignette ONLY - no white, no blend modes */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.9) 100%)'
                }}
            ></div>

            {/* Subtle scanlines using pure CSS - no blend modes */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                    backgroundSize: '100% 4px'
                }}
            ></div>
        </div>
    );
};

export default CRTOverlay;
