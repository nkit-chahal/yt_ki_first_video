import React, { forwardRef } from 'react';

const Annotation = forwardRef(({ text, className = "", style = {} }, ref) => (
    <div
        ref={ref}
        className={`bg-white px-3 py-1 rounded shadow-sm border border-gray-200 text-xs font-medium text-gray-500 flex items-center gap-2 pointer-events-none opacity-0 ${className}`}
        style={style}
    >
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        {text}
    </div>
));

export default Annotation;
