import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StepTracker from './StepTracker';

import HookScene from './Visuals/HookScene';
import WhyScene from './Visuals/WhyScene';
import Step1Scene from './Visuals/Step1Scene';
import Step2Scene from './Visuals/Step2Scene';
import Step3Scene from './Visuals/Step3Scene';
import Step4Scene from './Visuals/Step4Scene';
import Step5Scene from './Visuals/Step5Scene';
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

    useEffect(() => {
        localStorage.setItem('playbackSpeed', playbackSpeed);
    }, [playbackSpeed]);

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
            case 'why': return <WhyScene step={visualStep} />;
            case 'step1': return <Step1Scene step={visualStep} />;
            case 'step2': return <Step2Scene step={visualStep} />;
            case 'step3': return <Step3Scene step={visualStep} />;
            case 'step4': return <Step4Scene step={visualStep} />;
            case 'step5': return <Step5Scene step={visualStep} />;
            case 'cta': return <CTAScene step={visualStep} />;
            default: return <div className="w-full h-full bg-black flex items-center justify-center text-white">Unknown Scene</div>;
        }
    };

    return (
        <div className="w-full h-full relative font-sans overflow-hidden bg-black">
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







            <StepTracker currentScene={currentData.scene} />

            {!isPlaying && currentStepIndex === 0 && (
                <div
                    className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                >
                    <motion.div
                        className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-4xl text-white shadow-lg"
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
