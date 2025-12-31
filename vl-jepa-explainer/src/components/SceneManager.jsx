import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import HookScene from './Visuals/HookScene';
import JEPAIntroScene from './Visuals/JEPAIntroScene';
import NonGenerativeScene from './Visuals/NonGenerativeScene';
import ImplicationsScene from './Visuals/ImplicationsScene';
import TokenFlowScene from './Visuals/TokenFlowScene';
import SemanticThinkingScene from './Visuals/SemanticThinkingScene';
import DotCloudScene from './Visuals/DotCloudScene';
import CCTVComparisonScene from './Visuals/CCTVComparisonScene';
import TemporalScene from './Visuals/TemporalScene';
import ArchitectureScene from './Visuals/ArchitectureScene';
import BenchmarkScene from './Visuals/BenchmarkScene';
import YannQuoteScene from './Visuals/YannQuoteScene';
import SoniaQuoteScene from './Visuals/SoniaQuoteScene';
import RedditScene from './Visuals/RedditScene';

import { NARRATION_STEPS } from '../data/narration';

const SceneManager = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const audioRef = useRef(null);

    const currentData = NARRATION_STEPS[currentStepIndex];
    const progress = ((currentStepIndex + 1) / NARRATION_STEPS.length) * 100;

    // Audio playback and auto-advance
    useEffect(() => {
        if (!isPlaying) return;

        const audio = new Audio(`/audio/narration_${currentStepIndex}.mp3`);
        audioRef.current = audio;
        audio.playbackRate = playbackSpeed;

        audio.play().catch(console.error);

        audio.onended = () => {
            if (currentStepIndex < NARRATION_STEPS.length - 1) {
                setCurrentStepIndex(prev => prev + 1);
            } else {
                setIsPlaying(false);
            }
        };

        return () => {
            audio.pause();
            audio.src = '';
        };
    }, [currentStepIndex, isPlaying, playbackSpeed]);

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                setIsPlaying(prev => !prev);
            } else if (e.code === 'ArrowRight') {
                setCurrentStepIndex(prev => Math.min(prev + 1, NARRATION_STEPS.length - 1));
            } else if (e.code === 'ArrowLeft') {
                setCurrentStepIndex(prev => Math.max(prev - 1, 0));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Scene router
    const renderScene = () => {
        const step = currentData.visualStep;

        switch (currentData.scene) {
            case 'hook':
                return <HookScene step={step} />;
            case 'jepaIntro':
                return <JEPAIntroScene step={step - 4} />;
            case 'nonGenerative':
                return <NonGenerativeScene step={step} />;
            case 'implications':
                return <ImplicationsScene step={step} />;
            case 'tokenFlow':
                return <TokenFlowScene step={step} />;
            case 'semanticThinking':
                return <SemanticThinkingScene step={step} />;
            case 'dotCloud':
                return <DotCloudScene step={step} />;
            case 'cctvComparison':
                return <CCTVComparisonScene step={step} />;
            case 'temporal':
                return <TemporalScene step={step} />;
            case 'architecture':
                return <ArchitectureScene step={step} />;
            case 'benchmark':
                return <BenchmarkScene step={step} />;
            case 'yannQuote':
                return <YannQuoteScene step={step} />;
            case 'soniaQuote':
                return <SoniaQuoteScene step={step} />;
            case 'reddit':
                return <RedditScene step={step} />;
            default:
                return <HookScene step={0} />;
        }
    };

    return (
        <div className="w-full h-full relative bg-[#050505] overflow-hidden">
            {/* Scene Container */}
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

            {/* Step Counter (top-left) */}
            <div className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm border border-white/20">
                {currentStepIndex + 1} / {NARRATION_STEPS.length}
            </div>

            {/* Caption (bottom center) */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 max-w-4xl px-8">
                <motion.div
                    key={currentStepIndex}
                    className="bg-black/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <p className="text-white text-lg text-center font-medium">
                        {currentData.text}
                    </p>
                </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Play Button Overlay */}
            {!isPlaying && currentStepIndex === 0 && (
                <div
                    className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                >
                    <motion.div
                        className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-5xl text-white shadow-2xl"
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
