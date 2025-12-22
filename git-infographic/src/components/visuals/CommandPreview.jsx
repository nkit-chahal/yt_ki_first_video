import React, { forwardRef } from 'react';
import { Terminal } from 'lucide-react';

const CommandPreview = forwardRef(({ command }, ref) => (
    <div
        ref={ref}
        className="flex items-center gap-3 bg-slate-900 text-slate-200 px-5 py-3 rounded-lg shadow-xl font-mono text-sm opacity-0 transform translate-y-4 border border-slate-700"
    >
        <Terminal size={16} className="text-slate-400" />
        <span className="text-green-400">$</span>
        <span>{command}</span>
    </div>
));

export default CommandPreview;
