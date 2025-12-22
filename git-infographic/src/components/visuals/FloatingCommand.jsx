import React, { forwardRef } from 'react';
import { AlertTriangle } from 'lucide-react';

const FloatingCommand = forwardRef(({ command, hasWarning = false, className = "" }, ref) => {
    return (
        <div
            ref={ref}
            className={`
                inline-flex items-center gap-2 
                bg-slate-800 text-slate-100 
                px-4 py-2.5 
                rounded-lg 
                shadow-xl 
                font-mono text-sm
                border border-slate-700
                transform transition-transform
                ${className}
            `}
        >
            <span className="text-green-400">$</span>
            <span>{command}</span>
            {hasWarning && (
                <AlertTriangle size={14} className="text-amber-400 ml-1" />
            )}
        </div>
    );
});

export default FloatingCommand;
