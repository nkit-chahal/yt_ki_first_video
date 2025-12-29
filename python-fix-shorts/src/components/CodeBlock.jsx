import React from 'react';
import { motion } from 'framer-motion';

const CodeBlock = ({ code, highlightedLines = [], showLineNumbers = true, fontSize = "text-xl" }) => {
    // Simple Python syntax highlighter (improved to avoid collisions)
    const highlightSyntax = (line) => {
        // 1. HIDDEN STAGE: Extract strings and comments to placeholders
        // This prevents keywords inside strings/comments from being highlighted
        // AND prevents regex from matching the HTML tags we are about to generate
        const tokens = [];
        const saveToken = (content, type) => {
            const id = `__TOKEN_${tokens.length}__`;
            let color = "text-gray-300";
            if (type === 'string') color = "text-green-400";
            if (type === 'comment') color = "text-gray-500 italic";

            tokens.push({ id, content, color });
            return id;
        };

        let temp = line
            // Save Comments first (greedy until end of line)
            .replace(/(#.*)/g, (match) => saveToken(match, 'comment'))
            // Save Strings
            .replace(/(['"].*?['"])/g, (match) => saveToken(match, 'string'));

        // 2. HIGHLIGHTING STAGE: Highlight keywords in the remaining safe text
        temp = temp
            // Function definitions (def func_name)
            .replace(/\bdef\s+(\w+)/g, 'def <span class="text-yellow-300">$1</span>')
            // Keywords
            .replace(/\b(def|return|if|else|is|None|print)\b/g, '<span class="text-purple-400 font-bold">$1</span>')
            // Booleans/Constants
            .replace(/\b(True|False)\b/g, '<span class="text-orange-400">$1</span>');

        // 3. RESTORE STAGE: Put tokens back (wrapping them in spans)
        tokens.forEach(token => {
            const span = `<span class="${token.color}">${token.content}</span>`;
            temp = temp.replace(token.id, span);
        });

        return temp;
    };

    return (
        <div className="w-full max-w-2xl bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-700 font-mono text-left">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-gray-400">script.py</div>
            </div>
            <div className={`p-6 ${fontSize} text-gray-300 leading-relaxed overflow-x-auto whitespace-pre font-mono`}>
                {code.split('\n').map((line, i) => (
                    <motion.div
                        key={i}
                        className={`flex ${highlightedLines.includes(i) ? 'bg-yellow-500/10 -mx-6 px-6 border-l-4 border-yellow-500' : ''}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        {showLineNumbers && <span className="text-gray-600 mr-4 select-none w-6 text-right inline-block">{i + 1}</span>}
                        <span dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CodeBlock;
