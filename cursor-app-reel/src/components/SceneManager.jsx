import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Narrator from './Narrator';
import HookScene from './Visuals/HookScene';
import ProblemScene from './Visuals/ProblemScene';
import RevealScene from './Visuals/RevealScene';
import DemoScene from './Visuals/DemoScene';
import FeaturesScene from './Visuals/FeaturesScene';
import CTAScene from './Visuals/CTAScene';

import { NARRATION_STEPS } from '../data/narration';

const SceneManager = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(() => {
        const saved = localStorage.getItem('playbackSpeed');
        return saved ? parseFloat(saved) : 1;
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Save speed preference
    useEffect(() => {
        localStorage.setItem('playbackSpeed', playbackSpeed);
    }, [playbackSpeed]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') setCurrentStepIndex((prev) => Math.min(prev + 1, NARRATION_STEPS.length - 1));
            if (e.key === 'ArrowLeft') setCurrentStepIndex((prev) => Math.max(0, prev - 1));
            if (e.key === ' ') {
                e.preventDefault();
                setIsPlaying(p => !p);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Audio Playback
    useEffect(() => {
        if (!isPlaying) return;

        const audioPath = `/audio/narration_${currentStepIndex}.mp3`;
        const audio = new Audio(audioPath);
        audioRef.current = audio;

        const playAudio = async () => {
            try {
                audio.volume = 1.0;
                audio.playbackRate = playbackSpeed;
                await audio.play();
            } catch (err) {
                console.warn("Audio playback failed:", err);
            }
        };

        const handleAudioEnd = () => {
            setCurrentStepIndex((prev) => {
                if (prev < NARRATION_STEPS.length - 1) {
                    return prev + 1;
                }
                setIsPlaying(false);
                return prev;
            });
        };

        audio.addEventListener('ended', handleAudioEnd);
        playAudio();

        return () => {
            audio.removeEventListener('ended', handleAudioEnd);
            audio.pause();
            audio.currentTime = 0;
        };
    }, [currentStepIndex, isPlaying, playbackSpeed]);

    const currentData = NARRATION_STEPS[currentStepIndex];
    const progress = ((currentStepIndex + 1) / NARRATION_STEPS.length) * 100;

    const renderScene = () => {
        const { scene, visualStep } = currentData;

        switch (scene) {
            case 'hook': return <HookScene step={visualStep} />;
            case 'problem': return <ProblemScene step={visualStep} />;
            case 'reveal': return <RevealScene step={visualStep} />;
            case 'demo': return <DemoScene step={visualStep} />;
            case 'features': return <FeaturesScene step={visualStep} />;
            case 'cta': return <CTAScene step={visualStep} />;
            default: return <div className="w-full h-full bg-black flex items-center justify-center text-white">Unknown Scene</div>;
        }
    };

    return (
        <div className="w-full h-full relative font-sans overflow-hidden bg-black">
            {/* Scene Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentData.scene}
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderScene()}
                </motion.div>
            </AnimatePresence>

            {/* Narrator Caption */}
            <Narrator text={currentData.text} isVisible={true} />

            {/* Top Right Controls */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
                {/* Speed Slider */}
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full border border-white/20">
                    <span className="text-white text-xs font-bold w-8">{playbackSpeed}x</span>
                    <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={playbackSpeed}
                        onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                        className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>

                {/* Play/Pause */}
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors"
                >
                    {isPlaying ? '⏸' : '▶'}
                </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Step Indicator */}
            <div className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs border border-white/20">
                {currentStepIndex + 1} / {NARRATION_STEPS.length}
            </div>

            {/* Start Overlay */}
            {!isPlaying && currentStepIndex === 0 && (
                <div
                    className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                >
                    <motion.div
                        className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-4xl text-white shadow-lg shadow-blue-500/50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ▶
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default SceneManager;
