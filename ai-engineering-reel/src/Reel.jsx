import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene2 as HookScene } from './chapters/Chapter1'; // Salary/Hook
import { Scene5 as ModelsScene } from './chapters/Chapter2'; // Foundation Models
import { Scene4 as RagScene } from './chapters/Chapter9'; // RAG
import { Scene3 as AgentsScene } from './chapters/Chapter10'; // Agents
import ReelCTA from './components/ReelCTA'; // New CTA

const Reel = () => {
    const [sceneIndex, setSceneIndex] = useState(0);
    const audioRef = useRef(new Audio());

    // Reel 2.0 Sequence
    const sequence = [
        { component: HookScene, audioId: "reel_1_hook", label: "The Hottest Career 🔥" },
        { component: ModelsScene, audioId: "reel_2_models", label: "Foundation Models 🧠" },
        { component: RagScene, audioId: "reel_3_rag", label: "RAG Systems 📂" },
        { component: AgentsScene, audioId: "reel_4_agents", label: "Autonomous Agents 🤖" },
        { component: ReelCTA, audioId: "reel_5_cta", label: "Watch Full Video! 📺" }
    ];

    useEffect(() => {
        let mounted = true;
        const audio = audioRef.current;
        const currentItem = sequence[sceneIndex];
        const isReelAudio = currentItem.audioId.startsWith('reel_');
        const audioPath = isReelAudio ? `/audio/reel/${currentItem.audioId}.mp3` : `/audio/${currentItem.audioId}.mp3`;

        const playAudio = async () => {
            try {
                audio.src = audioPath;
                audio.load(); // Explicitly load before playing

                audio.onended = () => {
                    if (mounted && sceneIndex < sequence.length - 1) {
                        setSceneIndex(prev => prev + 1);
                    }
                };

                // Small delay to let the audio load
                await new Promise(resolve => setTimeout(resolve, 100));

                if (mounted) {
                    await audio.play();
                }
            } catch (err) {
                console.warn("Audio playback warning:", err.name);
                // Fallback timer if audio fails
                if (mounted) {
                    setTimeout(() => {
                        if (mounted && sceneIndex < sequence.length - 1) {
                            setSceneIndex(prev => prev + 1);
                        }
                    }, 5000);
                }
            }
        };

        playAudio();

        return () => {
            mounted = false;
            audio.onended = null;
            // Don't call pause() here - let the audio complete or just abandon it
        };
    }, [sceneIndex]);

    const handleNext = () => {
        if (sceneIndex < sequence.length - 1) {
            setSceneIndex(prev => prev + 1);
        }
    };

    const CurrentScene = sequence[sceneIndex].component;

    return (
        <div
            onClick={handleNext}
            className="reel-container flex flex-col items-center justify-between p-12 h-full w-full relative overflow-hidden cursor-pointer"
            style={{
                background: 'rgba(180, 83, 9, 0.07)'
            }}
        >

            {/* Top Bar / Progress */}
            <div className="w-full h-2 bg-zinc-200 rounded-full mb-8 relative overflow-hidden">
                <motion.div
                    className="h-full bg-red-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 10, ease: "linear" }} // Approx duration visual
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
            <div className="flex-1 w-full flex items-center justify-center relative my-8 origin-center">
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
        </div>
    );
};

export default Reel;
