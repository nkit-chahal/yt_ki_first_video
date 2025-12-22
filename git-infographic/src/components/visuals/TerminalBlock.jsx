import React, { forwardRef } from 'react';

const TerminalBlock = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="w-96 bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden font-mono text-xs p-4 leading-relaxed z-20 origin-center opacity-0">
            {/* Window Controls */}
            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Content */}
            <div className="text-gray-300">
                <p className="mb-2">
                    <span className="text-green-400">$ git push</span>
                </p>
                <p className="text-red-400 opacity-80">error: failed to push some refs to 'origin/main'</p>
                <p className="text-red-400 opacity-80">hint: Updates were rejected because the remote contains work</p>
                <p className="text-red-400 opacity-80">hint: that you do not have locally.</p>
                <br />
                <p className="text-red-500 font-bold">fatal: refusing to merge unrelated histories</p>
            </div>
        </div>
    );
});

export default TerminalBlock;
