import React from 'react';
import { motion } from 'framer-motion';
import { LayoutList, Server, Smartphone, ArrowRight, Zap } from 'lucide-react';

// Scene 5: READ PATH - How timeline is generated
const Scene5 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-12">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <motion.div
                className="flex items-center gap-3 z-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="icon-wrapper bg-primary/10">
                    <LayoutList size={40} className="text-primary" strokeWidth={1.8} />
                </div>
                <h2 className="text-4xl font-bold text-text-dark">
                    The <span className="text-primary glow-primary">Read Path</span>
                </h2>
            </motion.div>

            <motion.p
                className="text-xl text-text-muted text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 / speed }}
            >
                How you get your timeline instantly
            </motion.p>

            {/* Flow Diagram - Horizontal */}
            <motion.div
                className="flex items-center gap-3 z-10 mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 / speed }}
            >
                <div className="stat-card flex flex-col items-center px-6 py-5">
                    <Smartphone size={40} className="text-primary mb-2" strokeWidth={1.5} />
                    <span className="font-semibold text-text-dark">You</span>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.6 / speed }}
                >
                    <ArrowRight size={28} className="text-primary" />
                </motion.div>

                <motion.div
                    className="arch-box-accent flex flex-col items-center px-6 py-5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 / speed, type: "spring" }}
                >
                    <Server size={40} className="mb-2" strokeWidth={1.5} />
                    <span className="font-semibold">Redis</span>
                    <span className="text-sm opacity-70">Cache</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.9 / speed }}
                >
                    <ArrowRight size={28} className="text-accent" />
                </motion.div>

                <div className="stat-card flex flex-col items-center px-6 py-5">
                    <LayoutList size={40} className="text-accent mb-2" strokeWidth={1.5} />
                    <span className="font-semibold text-accent">Timeline</span>
                </div>
            </motion.div>

            {/* Key Point */}
            <motion.div
                className="stat-card mt-6 z-10 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 / speed }}
            >
                <div className="flex items-center gap-3">
                    <Zap size={32} className="text-accent" strokeWidth={1.8} />
                    <div>
                        <p className="text-xl font-bold text-text-dark">Cache Hit = No DB Query</p>
                        <p className="text-text-muted">Your feed is already pre-built!</p>
                    </div>
                </div>
            </motion.div>

            {/* Latency */}
            <motion.p
                className="text-3xl font-bold text-primary z-10 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 / speed }}
            >
                &lt; 50ms response time 🚀
            </motion.p>
        </div>
    );
};

export default Scene5;
