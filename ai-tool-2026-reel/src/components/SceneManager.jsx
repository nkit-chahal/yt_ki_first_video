import { useState, useEffect } from 'react';
import Narrator from './Narrator';
import HookScene from './Visuals/HookScene';
import ProblemScene from './Visuals/ProblemScene';
import RevealScene from './Visuals/RevealScene';
import DemoScene from './Visuals/DemoScene';
import StatsScene from './Visuals/StatsScene';
import CTAScene from './Visuals/CTAScene';

import { NARRATION_STEPS } from '../data/narration';

const SceneManager = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                setCurrentStepIndex((prev) => Math.min(prev + 1, NARRATION_STEPS.length - 1));
            }
            if (e.key === 'ArrowLeft') {
                setCurrentStepIndex((prev) => Math.max(0, prev - 1));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Audio Playback
    useEffect(() => {
        const audioPath = `/audio/narration_${currentStepIndex}.mp3`;
        const audio = new Audio(audioPath);

        const playAudio = async () => {
            try {
                audio.volume = 1.0;
                await audio.play();
            } catch (err) {
                console.warn("Audio playback failed (interaction required?):", err);
            }
        };

        const handleAudioEnd = () => {
            setCurrentStepIndex((prev) => {
                if (prev < NARRATION_STEPS.length - 1) {
                    return prev + 1;
                }
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
    }, [currentStepIndex]);

    const currentData = NARRATION_STEPS[currentStepIndex];

    const getSceneLabel = (scene) => {
        switch (scene) {
            case 'hook': return 'HOOK';
            case 'problem': return 'PROBLEM';
            case 'reveal': return 'REVEAL';
            case 'demo': return 'DEMO';
            case 'stats': return 'STATS';
            case 'cta': return 'SUBSCRIBE';
            default: return '';
        }
    };

    const progress = ((currentStepIndex + 1) / NARRATION_STEPS.length) * 100;

    const renderScene = () => {
        const { scene, visualStep } = currentData;

        switch (scene) {
            case 'hook': return <HookScene step={visualStep} />;
            case 'problem': return <ProblemScene step={visualStep} />;
            case 'reveal': return <RevealScene step={visualStep} />;
            case 'demo': return <DemoScene step={visualStep} />;
            case 'stats': return <StatsScene step={visualStep} />;
            case 'cta': return <CTAScene step={visualStep} />;
            default: return <div>Unknown Scene</div>;
        }
    };

    return (
        <div className="w-full h-full relative font-sans">
            {renderScene()}
            <Narrator text={currentData.text} isVisible={true} />

            {/* Progress bar at top */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-black/20">
                <div
                    className="h-full bg-orange-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Scene indicator */}
            <div className="absolute top-8 left-8 flex items-center gap-4">
                <div className="px-4 py-2 bg-black/60 backdrop-blur-xl rounded-full">
                    <span className="text-white text-lg font-semibold">
                        {getSceneLabel(currentData.scene)}
                    </span>
                </div>
                <span className="text-white/50 text-sm">
                    {currentStepIndex + 1} / {NARRATION_STEPS.length}
                </span>
            </div>

            {/* Navigation hint */}
            <div className="absolute top-8 right-8 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full">
                <span className="text-white/60 text-sm">← → to navigate</span>
            </div>
        </div>
    );
};

export default SceneManager;
