import React from 'react';
import { motion } from 'framer-motion';

const MemoryGrid = ({ highlightedKey = null, data = {} }) => {
    // Generate a 4x4 grid of "memory addresses"
    const slots = Array.from({ length: 16 }, (_, i) => {
        const key = Object.keys(data)[i] || null;
        const val = key ? data[key] : null;

        return { id: i, key, val };
    });

    return (
        <div className="grid grid-cols-4 gap-4 p-6 bg-bg-card border border-gray-700 rounded-xl shadow-2xl">
            {slots.map((slot) => {
                const isHighlighted = slot.key === highlightedKey;
                const isOccupied = !!slot.val;

                return (
                    <motion.div
                        key={slot.id}
                        className={`
                            relative w-16 h-16 rounded-lg border-2 flex items-center justify-center
                            ${isHighlighted ? 'border-accent-green bg-green-900/20 shadow-[0_0_15px_rgba(46,160,67,0.4)]' : 'border-gray-800 bg-bg-dark'}
                        `}
                        animate={{
                            scale: isHighlighted ? 1.1 : 1,
                        }}
                    >
                        {/* Memory Address Label (fake) */}
                        <span className="absolute top-1 left-1 text-[8px] text-gray-600 font-mono">
                            0x{slot.id.toString(16).toUpperCase().padStart(2, '0')}
                        </span>

                        {/* Content */}
                        {isOccupied && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-xs font-bold font-mono text-accent-blue truncate w-full text-center px-1"
                            >
                                {slot.val}
                            </motion.div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default MemoryGrid;
