import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Brain, Cpu, Rocket, Youtube, Twitter, Github } from 'lucide-react';

// Scene 5: Conclusion (Mobile-Optimized)
const Scene5 = () => {
    const points = [
        { icon: Cpu, title: "Memory Wall", desc: "GPUs wait for data", color: "text-gray-400", border: "border-gray-500" },
        { icon: Layers, title: "KV Cache", desc: "Don't re-compute", color: "text-primary", border: "border-primary" },
        { icon: Zap, title: "Batching", desc: "Fill every cycle", color: "text-yellow-400", border: "border-yellow-500" },
        { icon: Brain, title: "Speculation", desc: "Draft & verify", color: "text-blue-400", border: "border-blue-500" },
    ];

    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-start pt-6 p-8 relative overflow-hidden text-white font-sans">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />

            {/* Title */}
            <motion.h1
                className="text-6xl font-black mb-2 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                How <span className="text-primary glow-primary">ChatGPT</span> Scales
            </motion.h1>

            <motion.p
                className="text-3xl text-gray-400 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                The bottleneck isn't math. It's memory.
            </motion.p>

            {/* Recap Cards */}
            <div className="flex gap-8 w-full max-w-6xl mb-12">
                {points.map((point, i) => (
                    <motion.div
                        key={point.title}
                        className={`flex-1 bg-gray-900 border-2 ${point.border} p-8 rounded-3xl flex flex-col items-center gap-6 text-center`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.15 }}
                    >
                        <div className="p-6 bg-white/5 rounded-full">
                            <point.icon size={64} className={point.color} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-bold">{point.title}</h3>
                        <p className="text-xl text-gray-400">{point.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Impact Statement */}
            <motion.div
                className="bg-primary/20 border-2 border-primary px-16 py-8 rounded-3xl text-center mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="text-5xl font-black mb-3">
                    <span className="text-primary">10x</span> Throughput, <span className="text-primary">1/10th</span> Cost
                </div>
                <p className="text-2xl text-gray-400">These optimizations make AI economically viable.</p>
            </motion.div>

            {/* CTA */}
            <motion.div
                className="flex flex-col items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <p className="text-2xl text-gray-400">Want more System Design deep dives?</p>

                <motion.button
                    className="bg-white text-black px-16 py-6 rounded-full font-black text-3xl flex items-center gap-5"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Rocket size={40} />
                    SUBSCRIBE
                </motion.button>

                <div className="flex gap-12 mt-4">
                    <motion.div className="flex items-center gap-3 text-gray-500 hover:text-red-500 cursor-pointer text-xl" whileHover={{ scale: 1.1 }}>
                        <Youtube size={36} /><span>YouTube</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-3 text-gray-500 hover:text-blue-400 cursor-pointer text-xl" whileHover={{ scale: 1.1 }}>
                        <Twitter size={36} /><span>Twitter</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-3 text-gray-500 hover:text-white cursor-pointer text-xl" whileHover={{ scale: 1.1 }}>
                        <Github size={36} /><span>GitHub</span>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
};

export default Scene5;
