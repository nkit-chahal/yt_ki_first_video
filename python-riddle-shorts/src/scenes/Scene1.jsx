import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, TrendingUp, Users } from 'lucide-react';

// Scene 1: THE HOOK - Snappy animations (Reverted)
const Scene1 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-12">

            {/* Subtle background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Twitter Icon */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4, duration: 1 / speed }}
            >
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <motion.div
                    className="icon-wrapper p-6"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Twitter size={140} className="text-primary" strokeWidth={1.5} />
                </motion.div>
            </motion.div>

            {/* Hook Text */}
            <motion.h1
                className="text-5xl font-bold text-text-dark text-center leading-tight z-10"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 / speed, duration: 0.6 }}
            >
                How does{' '}
                <span className="text-primary glow-primary">Twitter</span>
                <br />
                handle this?
            </motion.h1>

            {/* Stats */}
            <motion.div
                className="flex flex-col gap-5 mt-4 w-full max-w-md z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 / speed }}
            >
                <motion.div
                    className="stat-card flex items-center gap-5"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 / speed, duration: 0.5 }}
                >
                    <div className="icon-wrapper bg-accent/10">
                        <TrendingUp size={36} className="text-accent" strokeWidth={2} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-accent">500M+</p>
                        <p className="text-lg text-text-muted">tweets per day</p>
                    </div>
                </motion.div>

                <motion.div
                    className="stat-card flex items-center gap-5"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5 / speed, duration: 0.5 }}
                >
                    <div className="icon-wrapper bg-primary/10">
                        <Users size={36} className="text-primary" strokeWidth={2} />
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-primary">300M+</p>
                        <p className="text-lg text-text-muted">active users</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Scene1;
