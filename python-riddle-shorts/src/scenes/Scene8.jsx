import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Server, Database, Users } from 'lucide-react';

// Scene 8: SUMMARY - Key Takeaways
const Scene8 = ({ speed = 1 }) => {
    const takeaways = [
        { icon: Zap, text: "Fan-out on Write", color: "accent" },
        { icon: Server, text: "Redis Cache Layer", color: "primary" },
        { icon: Users, text: "Hybrid for Celebrities", color: "secondary" },
        { icon: Database, text: "Sharded Databases", color: "accent" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-12">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <motion.div
                className="flex items-center gap-3 z-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="icon-wrapper bg-primary/10">
                    <CheckCircle size={40} className="text-primary" strokeWidth={1.8} />
                </div>
                <h2 className="text-4xl font-bold text-text-dark">
                    Key <span className="text-primary glow-primary">Takeaways</span>
                </h2>
            </motion.div>

            {/* Takeaways Grid */}
            <motion.div
                className="grid grid-cols-2 gap-4 max-w-lg z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {takeaways.map((item, i) => {
                    const colorClass = item.color === 'primary' ? 'text-primary bg-primary/10' :
                        item.color === 'secondary' ? 'text-secondary bg-secondary/10' :
                            'text-accent bg-accent/10';
                    return (
                        <motion.div
                            key={i}
                            className="stat-card flex flex-col items-center text-center py-6"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: (0.3 + i * 0.15) / speed, type: "spring" }}
                        >
                            <div className={`icon-wrapper ${colorClass.split(' ')[1]} mb-3`}>
                                <item.icon size={32} className={colorClass.split(' ')[0]} strokeWidth={1.8} />
                            </div>
                            <p className={`font-bold ${colorClass.split(' ')[0]}`}>{item.text}</p>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Result */}
            <motion.div
                className="stat-card max-w-md z-10 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 / speed }}
            >
                <p className="text-center">
                    <span className="text-2xl font-bold text-text-dark">Result: </span>
                    <span className="text-2xl font-bold text-primary">&lt;200ms</span>
                    <span className="text-xl text-text-muted"> timeline loads</span>
                </p>
            </motion.div>

            {/* Final tagline */}
            <motion.p
                className="text-xl text-text-muted z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 / speed }}
            >
                That's Twitter at scale! 🐦
            </motion.p>
        </div>
    );
};

export default Scene8;
