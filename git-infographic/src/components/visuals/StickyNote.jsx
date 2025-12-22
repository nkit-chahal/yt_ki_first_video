import React from 'react';

const StickyNote = React.forwardRef(({ text, rotation = -5, className = "" }, ref) => (
    <div ref={ref} className={`w-24 h-24 bg-yellow-300 shadow-md flex items-center justify-center p-2 transform origin-top-center ${className}`} style={{ rotate: `${rotation}deg` }}>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400/50 rounded-full blur-sm"></div>
        <span className="font-comic text-black font-bold text-lg text-center leading-none">{text}</span>
    </div>
));

export default StickyNote;
