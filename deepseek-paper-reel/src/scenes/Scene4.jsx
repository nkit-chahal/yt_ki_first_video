import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shuffle, Check, X, Brain, Globe, BookOpen } from 'lucide-react';

// Scene 4: Coherence Test - "Logic Matters"
// Visual: Warm theme split screen comparison
const Scene4 = ({ playbackSpeed = 1 }) => {

    // Helper to scale time
    const t = (val) => val / playbackSpeed;

    // SFX: Error for the right side
    useEffect(() => {
        const sfx = new Audio('/sfx/error.mp3');
        sfx.volume = 0.2;
        // SFX timing needs to adjust, but delay is tricky if speed changes. 
        // We set timeout based on current speed.
        const timer = setTimeout(() => sfx.play().catch(() => { }), t(2500));
        return () => clearTimeout(timer);
    }, [playbackSpeed]);

    const ImageBlock = ({ delay, shuffle }) => (
        <motion.div
            className="w-10 h-10 bg-[#C4A77D]/30 rounded-md border border-[#C4A77D]/50"
            initial={{ opacity: 0 }}
            animate={shuffle ? {
                opacity: 1,
                x: [0, 20, -15, 10, 0],
                y: [0, -10, 15, -5, 0],
                rotate: [0, 10, -10, 5, 0]
            } : { opacity: 1 }}
            transition={{ delay: t(delay), duration: t(1.5), ease: "easeInOut" }}
        />
    );

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DA 50%, #E8DFD0 100%)' }}>

            {/* Title */}
            <motion.div
                className="flex items-center gap-2 text-gray-800 mb-8 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: t(0.5) }}
            >
                <Brain size={28} className="text-[#8B7355]" />
                <h2 className="text-2xl font-bold">Logic Matters 🧠</h2>
            </motion.div>

            {/* Split Screen Container */}
            <div className="flex gap-8 z-10">

                {/* Left Side: Web Data */}
                <motion.div
                    className="bg-white border-2 border-[#C4A77D] rounded-2xl p-6 w-64 shadow-md"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: t(0.3), duration: t(0.5) }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Globe size={20} className="text-gray-500" />
                        <span className="text-gray-700 font-medium">Web Data</span>
                    </div>

                    {/* Shuffling Images */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        {[...Array(9)].map((_, i) => (
                            <ImageBlock key={i} delay={1 + i * 0.1} shuffle={true} />
                        ))}
                    </div>

                    {/* Result */}
                    <motion.div
                        className="flex items-center justify-center gap-2 bg-green-50 border border-green-300 px-4 py-2 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: t(2.5), duration: t(0.5) }}
                    >
                        <Check size={18} className="text-green-600" />
                        <span className="text-green-700 text-sm font-medium">No Change</span>
                    </motion.div>

                    <motion.p
                        className="text-xs text-gray-400 text-center mt-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: t(2.8), duration: t(0.5) }}
                    >
                        Model doesn't care
                    </motion.p>
                </motion.div>

                {/* Right Side: Textbook Data */}
                <motion.div
                    className="bg-white border-2 border-[#D94A38] rounded-2xl p-6 w-64 shadow-md"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: t(0.5), duration: t(0.5) }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen size={20} className="text-[#D94A38]" />
                        <span className="text-gray-700 font-medium">Textbook Data</span>
                    </div>

                    {/* Shuffling Images */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        {[...Array(9)].map((_, i) => (
                            <ImageBlock key={i} delay={1.2 + i * 0.1} shuffle={true} />
                        ))}
                    </div>

                    {/* Result */}
                    <motion.div
                        className="flex items-center justify-center gap-2 bg-red-50 border border-red-300 px-4 py-2 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: t(2.5), duration: t(0.5) }}
                    >
                        <X size={18} className="text-[#D94A38]" />
                        <span className="text-[#D94A38] text-sm font-medium">Performance Tanks</span>
                    </motion.div>

                    <motion.p
                        className="text-xs text-gray-400 text-center mt-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: t(2.8), duration: t(0.5) }}
                    >
                        Model learns sequence
                    </motion.p>
                </motion.div>
            </div>

            {/* Bottom Insight */}
            <motion.div
                className="absolute bottom-10 bg-[#8B7355]/10 border border-[#8B7355]/30 px-6 py-3 rounded-full z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: t(3.2), duration: t(0.5) }}
            >
                <span className="text-[#8B7355] text-sm">
                    Proof: Model learns <span className="text-gray-800 font-bold">logic & reasoning</span>
                </span>
            </motion.div>

        </div>
    );
};

export default Scene4;
