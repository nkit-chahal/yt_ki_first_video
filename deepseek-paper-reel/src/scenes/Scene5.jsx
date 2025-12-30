import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Award } from 'lucide-react';

// Scene 5: Results - "Reasoning Unlocked"
// Visual: Warm theme with animated bar graphs
const Scene5 = ({ animSpeed = 1 }) => {

    // Helper to scale time
    const t = (val) => val / animSpeed;
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), t(500));
        return () => clearTimeout(timer);
    }, [animSpeed]);

    // SFX: Success sound
    useEffect(() => {
        const sfx = new Audio('/sfx/success.mp3');
        sfx.volume = 0.3;
        // Adjust rate?
        const timer = setTimeout(() => sfx.play().catch(() => { }), t(1500));
        return () => clearTimeout(timer);
    }, [animSpeed]);

    const benchmarks = [
        { name: "MathVista", gain: "+6%", value: 75, color: "#C4A77D" },
        { name: "ScienceQA", gain: "+20%", value: 92, color: "#D94A38" },
        { name: "AI2D", gain: "+12%", value: 84, color: "#8B7355" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DA 50%, #E8DFD0 100%)' }}>

            {/* Title */}
            <motion.div
                className="flex items-center gap-3 mb-10 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: t(0.5), type: "spring" }}
            >
                <Zap size={32} className="text-[#D94A38]" />
                <h2 className="text-3xl font-black text-[#D94A38]">
                    Reasoning Unlocked
                </h2>
            </motion.div>

            {/* Bar Graph Container */}
            <div className="flex items-end gap-8 h-64 z-10 mb-6">
                {benchmarks.map((bench, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: t(i * 0.2), duration: t(0.5) }}
                    >
                        {/* Gain Label */}
                        <motion.div
                            className="text-2xl font-black text-gray-800 mb-2"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: t(1.5 + i * 0.2), type: "spring" }}
                        >
                            {bench.gain}
                        </motion.div>

                        {/* Bar */}
                        <div className="w-20 h-48 bg-white rounded-t-lg relative overflow-hidden shadow-md border border-gray-200">
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 rounded-t-lg"
                                style={{ background: bench.color }}
                                initial={{ height: 0 }}
                                animate={{ height: animate ? `${bench.value}%` : 0 }}
                                transition={{ delay: t(0.5 + i * 0.2), duration: t(1), ease: "easeOut" }}
                            />
                        </div>

                        {/* Label */}
                        <div className="mt-3 text-gray-600 text-sm font-medium">{bench.name}</div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Tagline */}
            <motion.div
                className="flex items-center gap-2 bg-green-50 border border-green-300 px-5 py-3 rounded-full z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: t(2.5), duration: t(0.5) }}
            >
                <Award size={20} className="text-green-600" />
                <span className="text-green-700 text-sm">
                    <span className="font-bold">Quality</span> beats <span className="font-bold">Scale</span>
                </span>
            </motion.div>

        </div>
    );
};

export default Scene5;
