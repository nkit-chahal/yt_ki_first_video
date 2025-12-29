import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reel2Intro, Reel2Hook, Reel2Mechanism, Reel2Compression, Reel2Forgetting, Reel2Reversal, Reel2RAG, Reel2Pattern, Reel2Verdict, Reel2CTA } from './chapters/Reel2Scenes';

const Reel2 = () => {
    const [sceneIndex, setSceneIndex] = useState(0);
    const audioRef = useRef(new Audio());

    // topic: 'ft' = Fine-Tuning (🧠), 'rag' = RAG (📚), 'neutral' = Both (⚔️), 'cta' = Subscribe (🔔)
    const sequence = [
        { component: Reel2Intro, audioId: "reel2_v_0_intro", label: "Fine-Tuning vs RAG ⚔️", topic: "neutral" },
        { component: Reel2Hook, audioId: "reel2_v_1_hook", label: "The Misconception ❌", topic: "ft" },
        { component: Reel2Mechanism, audioId: "reel2_v_2_mechanism", label: "Parametric Memory 🧠", topic: "ft" },
        { component: Reel2Compression, audioId: "reel2_v_3_compression", label: "The 'JPEG' Problem 📉", topic: "ft" },
        { component: Reel2Forgetting, audioId: "reel2_v_4_forgetting", label: "Catastrophic Forgetting 🤯", topic: "ft" },
        { component: Reel2Reversal, audioId: "reel2_v_5_reversal", label: "The Reversal Curse ↩️", topic: "ft" },
        { component: Reel2RAG, audioId: "reel2_v_6_rag", label: "Non-Parametric (RAG) 📂", topic: "rag" },
        { component: Reel2Pattern, audioId: "reel2_v_7_pattern", label: "Teach Patterns, Not Facts 📜", topic: "ft" },
        { component: Reel2Verdict, audioId: "reel2_v_8_verdict", label: "The Verdict ⚖️", topic: "neutral" },
        { component: Reel2CTA, audioId: "reel2_v_9_cta", label: "Subscribe! 🔔", topic: "cta" }
    ];

    const getTopicIcon = (topic) => {
        switch (topic) {
            case 'ft': return '🧠';
            case 'rag': return '📚';
            case 'cta': return '🔔';
            default: return '⚔️';
        }
    };

    useEffect(() => {
        let mounted = true;
        const audio = audioRef.current;
        const currentItem = sequence[sceneIndex];
        const audioPath = `/audio/reel/${currentItem.audioId}.mp3`;

        const playAudio = async () => {
            try {
                audio.src = audioPath;
                audio.load();

                audio.onended = () => {
                    if (mounted && sceneIndex < sequence.length - 1) {
                        setSceneIndex(prev => prev + 1);
                    }
                };

                await new Promise(resolve => setTimeout(resolve, 100));

                if (mounted) {
                    await audio.play();
                }
            } catch (err) {
                console.warn("Audio playback warning:", err.name);
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
                background: 'radial-gradient(circle at center, #0a1f16 0%, #000000 70%)',
                fontFamily: "'Inter', sans-serif",
                color: '#ffffff'
            }}
        >
            {/* Header */}
            <motion.div
                className="text-center z-20 w-full flex flex-col items-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="text-2xl font-bold text-[#10a37f] uppercase tracking-widest mb-2">AI Engineering</div>
                <div className="text-5xl font-black text-white text-center leading-tight max-w-[90%] drop-shadow-lg">
                    {sequence[sceneIndex].label}
                </div>
            </motion.div>

            {/* Main Visual Area */}
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

                {/* Side Progress Indicator */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
                    {sequence.map((scene, i) => (
                        <motion.div
                            key={i}
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl
                                ${i === sceneIndex
                                    ? 'bg-[#10a37f] border-4 border-white shadow-[0_0_20px_rgba(16,163,127,0.6)]'
                                    : i < sceneIndex
                                        ? 'bg-zinc-700 opacity-50'
                                        : 'bg-zinc-800 opacity-30'
                                }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            {getTopicIcon(scene.topic)}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reel2;
