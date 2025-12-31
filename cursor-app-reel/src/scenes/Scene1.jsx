import React from 'react';
import { motion } from 'framer-motion';
import { Code, AlertCircle, Clock } from 'lucide-react';

// Scene 1: Problem - "Line-by-Line is Slow"
const Scene1 = ({ playbackSpeed = 1 }) => {
    const t = (val) => val / playbackSpeed;

    // Fake code lines
    const codeLines = [
        "function calculateTotal(items) {",
        "  // Copilot suggesting...",
        "  let total = 0;",
        "  for(let item of items) {",
        "    total += item.price;",
        "  }",
        "  return total;",
        "}"
    ];

    return (
        <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Title */}
            <motion.div
                className="absolute top-16 flex items-center gap-2 text-gray-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: t(0.5) }}
            >
                <Code size={20} />
                <span className="font-mono text-sm">Legacy Editor</span>
            </motion.div>

            {/* Editor Window */}
            <motion.div
                className="w-3/4 max-w-md bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: t(0.5) }}
            >
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="p-6 font-mono text-sm text-gray-800 space-y-2">
                    {codeLines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: t(0.5 + i * 0.4), duration: t(0.2) }} // Slow typing
                            className={line.includes("//") ? "text-gray-400 italic" : ""}
                        >
                            {line}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Frustration Overlay */}
            <motion.div
                className="absolute bottom-20 flex items-center gap-3 bg-red-100 border border-red-200 px-6 py-3 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: t(2.5), type: "spring" }}
            >
                <Clock size={24} className="text-red-500" />
                <span className="text-red-600 font-bold">TOO SLOW</span>
            </motion.div>

            <motion.div
                className="absolute top-1/2 right-10 rotate-12"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: t(1.5), duration: t(0.5) }}
            >
                <AlertCircle size={60} className="text-gray-300" />
            </motion.div>

        </div>
    );
};

export default Scene1;
