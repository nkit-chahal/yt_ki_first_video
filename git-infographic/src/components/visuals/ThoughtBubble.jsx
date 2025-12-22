import React, { forwardRef } from 'react';

const ThoughtBubble = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="opacity-0 origin-bottom-left z-20">
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" stroke="#5d4037" strokeWidth="2">
                <path d="M60 90 Q30 90 20 70 Q0 60 10 40 Q20 10 60 10 Q100 10 110 40 Q120 70 90 80 Q80 90 60 90 Z" fill="#FDFBF7" />
                <circle cx="20" cy="95" r="4" fill="#FDFBF7" stroke="#5d4037" strokeWidth="2" />
                <circle cx="10" cy="105" r="2" fill="#FDFBF7" stroke="#5d4037" strokeWidth="2" />
                <text x="60" y="60" textAnchor="middle" fontSize="40" fill="#5d4037" fontFamily="sans-serif" fontWeight="bold">?</text>
            </svg>
        </div>
    );
});

export default ThoughtBubble;
