import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layers, Hash, Server } from 'lucide-react';

// Scene 7: DATABASE SHARDING
const Scene7 = ({ speed = 1 }) => {
    const shards = [
        { label: "Shard 1", range: "User IDs 0-1M", color: "primary" },
        { label: "Shard 2", range: "User IDs 1M-2M", color: "secondary" },
        { label: "Shard 3", range: "User IDs 2M-3M", color: "accent" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-12">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            {/* Header */}
            <motion.div
                className="flex items-center gap-3 z-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="icon-wrapper bg-secondary/10">
                    <Database size={40} className="text-secondary" strokeWidth={1.8} />
                </div>
                <h2 className="text-4xl font-bold text-text-dark">
                    <span className="text-secondary glow-secondary">Database</span> Sharding
                </h2>
            </motion.div>

            <motion.p
                className="text-xl text-text-muted text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 / speed }}
            >
                Split data across multiple servers
            </motion.p>

            {/* Sharding Visual */}
            <motion.div
                className="flex flex-col gap-4 w-full max-w-md z-10 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {/* Hash Function */}
                <motion.div
                    className="stat-card flex items-center justify-center gap-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 / speed, type: "spring" }}
                >
                    <Hash size={28} className="text-primary" strokeWidth={1.8} />
                    <span className="text-xl font-bold text-text-dark">hash(user_id) % 3</span>
                </motion.div>

                {/* Shards */}
                <div className="flex gap-3 justify-center">
                    {shards.map((shard, i) => (
                        <motion.div
                            key={i}
                            className={`flex-1 ${shard.color === 'primary' ? 'arch-box' :
                                    shard.color === 'secondary' ? 'arch-box-secondary' : 'arch-box-accent'
                                } text-center py-4`}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: (0.5 + i * 0.15) / speed }}
                        >
                            <Server size={28} className="mx-auto mb-2" strokeWidth={1.5} />
                            <p className="font-bold">{shard.label}</p>
                            <p className="text-xs opacity-70">{shard.range}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
                className="stat-card max-w-lg z-10 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 / speed }}
            >
                <div className="flex items-center gap-4">
                    <Layers size={32} className="text-accent" strokeWidth={1.8} />
                    <div>
                        <p className="text-xl font-bold text-text-dark">Why Shard?</p>
                        <p className="text-text-muted">Horizontal scaling + faster queries</p>
                    </div>
                </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
                className="text-xl text-secondary font-semibold z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 / speed }}
            >
                No single database can handle Twitter! 🗄️
            </motion.p>
        </div>
    );
};

export default Scene7;
