import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Clock, Globe } from 'lucide-react';

// Scene 2: THE CHALLENGE - Refined Visual
const Scene2 = ({ speed = 1 }) => {
    const challenges = [
        { icon: Gauge, label: "Read-Heavy", desc: "100x more reads than writes", color: "primary" },
        { icon: Clock, label: "< 200ms", desc: "Timeline must be instant", color: "accent" },
        { icon: Globe, label: "Global Scale", desc: "Users everywhere, 24/7", color: "secondary" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-12">

            {/* Subtle background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            {/* Header */}
            <motion.h2
                className="text-5xl font-bold text-text-dark text-center z-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                The <span className="text-secondary glow-secondary">Challenge</span>
            </motion.h2>

            {/* Challenge Cards */}
            <motion.div
                className="flex flex-col gap-5 w-full max-w-lg z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 / speed }}
            >
                {challenges.map((item, i) => (
                    <motion.div
                        key={i}
                        className="stat-card flex items-center gap-5"
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (0.4 + i * 0.25) / speed }}
                    >
                        <div className={`icon-wrapper ${item.color === 'primary' ? 'bg-primary/10' : item.color === 'accent' ? 'bg-accent/10' : 'bg-secondary/10'}`}>
                            <item.icon
                                size={40}
                                className={item.color === 'primary' ? 'text-primary' : item.color === 'accent' ? 'text-accent' : 'text-secondary'}
                                strokeWidth={1.8}
                            />
                        </div>
                        <div>
                            <p className={`text-2xl font-bold ${item.color === 'primary' ? 'text-primary' : item.color === 'accent' ? 'text-accent' : 'text-secondary'}`}>
                                {item.label}
                            </p>
                            <p className="text-lg text-text-muted">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Question */}
            <motion.p
                className="text-3xl font-semibold text-text-muted text-center mt-4 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 / speed }}
            >
                How do they solve this? 🤔
            </motion.p>
        </div>
    );
};

export default Scene2;
