import React from 'react';

const CommitNode = React.forwardRef(({ label, sub, className = "" }, ref) => (
    <div ref={ref} className={`w-24 h-24 rounded-full bg-white border-4 border-[#5d4037] flex flex-col items-center justify-center shadow-lg z-10 ${className}`}>
        <span className="font-mono font-bold text-lg text-[#5d4037]">{label}</span>
        {sub && <span className="text-[10px] text-gray-500">{sub}</span>}
    </div>
));

export default CommitNode;
