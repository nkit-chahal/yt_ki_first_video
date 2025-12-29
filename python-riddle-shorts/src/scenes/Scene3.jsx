import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Database, Cloud, ChevronDown } from 'lucide-react';

// Scene 3: HIGH-LEVEL ARCHITECTURE - Refined Visual
const Scene3 = ({ speed = 1 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-8">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <motion.h2
                className="text-4xl font-bold text-text-dark mb-2 z-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                The <span className="text-primary glow-primary">Architecture</span>
            </motion.h2>

            {/* Architecture Flow */}
            <div className="flex flex-col items-center gap-3 z-10 w-full max-w-md">

                {/* Client */}
                <motion.div
                    className="arch-box flex items-center gap-3 text-xl w-full justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 / speed, type: "spring" }}
                >
                    <Smartphone size={28} strokeWidth={1.5} />
                    <span>Mobile & Web Clients</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.4 / speed }}
                >
                    <ChevronDown size={32} className="text-primary" />
                </motion.div>

                {/* CDN + LB */}
                <motion.div
                    className="arch-box-secondary flex items-center gap-3 text-lg w-full justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 / speed, type: "spring" }}
                >
                    <Cloud size={24} strokeWidth={1.5} />
                    <span>CDN + Load Balancer</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.7 / speed }}
                >
                    <ChevronDown size={32} className="text-secondary" />
                </motion.div>

                {/* Services */}
                <motion.div
                    className="flex gap-3 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 / speed }}
                >
                    <div className="arch-box-accent flex-1 text-center py-4">
                        <p className="font-semibold">Tweet</p>
                        <p className="text-sm opacity-70">Service</p>
                    </div>
                    <div className="arch-box flex-1 text-center py-4">
                        <p className="font-semibold">Timeline</p>
                        <p className="text-sm opacity-70">Service</p>
                    </div>
                    <div className="arch-box-secondary flex-1 text-center py-4">
                        <p className="font-semibold">User</p>
                        <p className="text-sm opacity-70">Service</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 1.1 / speed }}
                >
                    <ChevronDown size={32} className="text-accent" />
                </motion.div>

                {/* Data Layer */}
                <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 / speed }}
                >
                    <div className="stat-card flex flex-col items-center px-8 py-5">
                        <div className="icon-wrapper bg-accent/10 mb-2">
                            <Server size={28} className="text-accent" strokeWidth={1.5} />
                        </div>
                        <span className="text-lg font-bold text-accent">Redis</span>
                        <span className="text-sm text-text-muted">Cache</span>
                    </div>
                    <div className="stat-card flex flex-col items-center px-8 py-5">
                        <div className="icon-wrapper bg-primary/10 mb-2">
                            <Database size={28} className="text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-lg font-bold text-primary">MySQL</span>
                        <span className="text-sm text-text-muted">Storage</span>
                    </div>
                </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
                className="text-xl text-text-muted mt-3 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 / speed }}
            >
                Microservices + Caching = ⚡
            </motion.p>
        </div>
    );
};

export default Scene3;
