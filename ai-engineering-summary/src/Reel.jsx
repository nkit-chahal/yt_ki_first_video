
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene2 as IntroSalary } from './chapters/Chapter1';
import { Scene2 as ExplosionScene } from './chapters/Chapter2'; // Explosion
import { Scene1 as TransformerIntro } from './chapters/Chapter5'; // Architecture
import { Scene3 as AgentsScene } from './chapters/Chapter11'; // Agents
import { Scene4 as OutroScene } from './chapters/Chapter12'; // CTA

const Reel = () => {
    const [sceneIndex, setSceneIndex] = useState(0);

    // 2 Minute Sequence Configuration
    const sequence = [
        { component: IntroSalary, duration: 10000, label: "High Demand Skills 💰" },
        { component: ExplosionScene, duration: 15000, label: "The AI Explosion 💥" },
        { component: TransformerIntro, duration: 20000, label: "The Architecture 🧠" },
        { component: AgentsScene, duration: 20000, label: "Autonomous Agents 🤖" },
        { component: OutroScene, duration: 10000, label: "Learn More! 📚" }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (sceneIndex < sequence.length - 1) {
                setSceneIndex(prev => prev + 1);
            }
        }, sequence[sceneIndex].duration);

        return () => clearTimeout(timer);
    }, [sceneIndex]);

    const CurrentScene = sequence[sceneIndex].component;

    return (
        <div className="reel-container flex flex-col items-center justify-between p-12 bg-[#FDFBF7] h-full w-full relative overflow-hidden">

            {/* Top Bar / Progress */}
            <div className="w-full h-2 bg-zinc-200 rounded-full mb-8 relative overflow-hidden">
                <motion.div
                    className="h-full bg-red-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: sequence[sceneIndex].duration / 1000, ease: "linear" }}
                    key={sceneIndex}
                />
            </div>

            {/* Header */}
            <motion.div
                className="text-center z-20"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="text-4xl font-black text-zinc-400 uppercase tracking-widest mb-2">AI Engineering</div>
                <div className="text-6xl font-hand font-bold text-zinc-800">{sequence[sceneIndex].label}</div>
            </motion.div>

            {/* Main Visual Area (Vertical Centered) */}
            <div className="flex-1 w-full flex items-center justify-center relative my-8 scale-125 origin-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={sceneIndex}
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <CurrentScene />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer / Branding */}
            <div className="flex flex-col items-center gap-4 z-20">
                <div className="text-3xl font-hand text-zinc-500">Summary of "AI Engineering" by Chip Huyen</div>
                <div className="px-6 py-2 bg-black text-white rounded-full font-bold text-xl uppercase tracking-wider">
                    Link in Bio 🔗
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
};

export default Reel;
