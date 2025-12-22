import React, { forwardRef } from 'react';

const SpeechBubble = forwardRef(({ text, direction = "left", className = "" }, ref) => {
    return (
        <div ref={ref} className={`absolute flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg border-2 border-gray-100 max-w-[250px] z-50 ${className}`}>
            <span className="text-sm font-semibold text-gray-700 text-center leading-tight">{text}</span>

            {/* Tail */}
            {direction === "left" && (
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[12px] border-r-white border-b-[10px] border-b-transparent drop-shadow-sm filter"></div>
            )}
            {direction === "right" && (
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-l-[12px] border-l-white border-b-[10px] border-b-transparent drop-shadow-sm filter"></div>
            )}
        </div>
    );
});

export default SpeechBubble;
