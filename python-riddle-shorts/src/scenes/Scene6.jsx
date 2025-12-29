import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Users, AlertTriangle, GitBranch } from 'lucide-react';

// Scene 6: THE CELEBRITY PROBLEM
const Scene6 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-12">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            {/* Header */}
            <motion.div
                className="flex items-center gap-3 z-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="icon-wrapper bg-accent/10">
                    <Crown size={40} className="text-accent" strokeWidth={1.8} />
                </div>
                <h2 className="text-4xl font-bold text-text-dark">
                    The <span className="text-accent glow-accent">Celebrity</span> Problem
                </h2>
            </motion.div>

            {/* Problem Statement */}
            <motion.div
                className="stat-card max-w-lg z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 / speed }}
            >
                <div className="flex items-center gap-4">
                    <AlertTriangle size={36} className="text-accent" strokeWidth={1.8} />
                    <div>
                        <p className="text-xl font-bold text-accent">Elon Musk tweets...</p>
                        <p className="text-text-muted">Fan-out to 100M+ followers?</p>
                    </div>
                </div>
            </motion.div>

            {/* The Math */}
            <motion.div
                className="flex items-center gap-4 z-10 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 / speed }}
            >
                <div className="arch-box text-center px-6 py-4">
                    <Users size={32} className="mx-auto mb-2" strokeWidth={1.5} />
                    <p className="text-2xl font-bold">100M</p>
                    <p className="text-sm opacity-70">followers</p>
                </div>
                <span className="text-3xl text-text-muted">×</span>
                <div className="arch-box-secondary text-center px-6 py-4">
                    <p className="text-2xl font-bold">1 tweet</p>
                    <p className="text-sm opacity-70">per post</p>
                </div>
                <span className="text-3xl text-text-muted">=</span>
                <div className="arch-box-accent text-center px-6 py-4">
                    <p className="text-2xl font-bold">100M</p>
                    <p className="text-sm opacity-70">writes! 💀</p>
                </div>
            </motion.div>

            {/* Solution */}
            <motion.div
                className="stat-card max-w-lg z-10 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 / speed }}
            >
                <div className="flex items-center gap-4">
                    <div className="icon-wrapper bg-primary/10">
                        <GitBranch size={32} className="text-primary" strokeWidth={1.8} />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-primary">Solution: Hybrid Approach</p>
                        <p className="text-text-muted">Pull celebrity tweets on-demand</p>
                    </div>
                </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
                className="text-xl text-text-muted z-10 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 / speed }}
            >
                Push for normal users, Pull for celebrities 🎯
            </motion.p>
        </div>
    );
};

export default Scene6;
