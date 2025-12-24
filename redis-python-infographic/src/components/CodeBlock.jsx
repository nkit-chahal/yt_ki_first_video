import React from 'react';
import { motion } from 'framer-motion';

const CodeBlock = ({ code, language = 'python', filename = 'script.py', activeLines = [] }) => {
    return (
        <div className="font-mono text-sm bg-bg-card border border-gray-700 rounded-lg overflow-hidden shadow-xl w-full max-w-md my-4">
            {/* Window Header */}
            <div className="bg-bg-dark px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                <span className="text-text-muted text-xs">{filename}</span>
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-accent-red opacity-50"></div>
                    <div className="w-3 h-3 rounded-full bg-accent-orange opacity-50"></div>
                    <div className="w-3 h-3 rounded-full bg-accent-green opacity-50"></div>
                </div>
            </div>

            {/* Code Content */}
            <div className="p-4 text-text-main overflow-x-auto">
                <pre>
                    <code className={`language-${language}`}>
                        {code.split('\n').map((line, i) => {
                            const isActive = activeLines.includes(i + 1);
                            const isDimmed = activeLines.length > 0 && !isActive;

                            return (
                                <div
                                    key={i}
                                    className={`grid grid-cols-[2rem_1fr] items-start gap-2 min-w-0 transition-all duration-500 ease-out
                                        ${isActive ? 'bg-gradient-to-r from-accent-blue/20 to-transparent -mx-4 px-4 py-1 border-l-4 border-accent-blue scale-[1.02] origin-left shadow-lg' : 'py-0.5'}
                                        ${isDimmed ? 'opacity-30 blur-[0.3px]' : 'opacity-100'}
                                    `}
                                >
                                    <span className={`select-none text-right font-mono text-xs pt-[2px] transition-colors duration-300 ${isActive ? 'text-accent-blue font-bold' : 'text-text-muted opacity-30'}`}>
                                        {i + 1}
                                    </span>
                                    <span className={`whitespace-pre-wrap break-all font-mono text-sm transition-all duration-300 ${isActive ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : ''}`}>
                                        {line}
                                    </span>
                                </div>
                            );
                        })}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
