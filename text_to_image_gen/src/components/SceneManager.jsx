import { useState, useEffect } from 'react';
import Narrator from './Narrator';
import IntroScene from './Visuals/IntroScene';
import Prologue from './Visuals/Prologue';
import GANBattle from './Visuals/GANBattle';
import DiffusionProcess from './Visuals/DiffusionProcess';
import PipelineFlow from './Visuals/PipelineFlow';
import ControlFuture from './Visuals/ControlFuture';
import InterviewQuestions from './Visuals/InterviewQuestions';

import { NARRATION_STEPS } from '../data/narration';

const SceneManager = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') setCurrentStepIndex((prev) => Math.min(prev + 1, NARRATION_STEPS.length - 1));
            if (e.key === 'ArrowLeft') setCurrentStepIndex((prev) => Math.max(0, prev - 1));
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

    // Chapter mapping
    const getChapter = (scene) => {
        switch (scene) {
            case 'intro': return 'INTRO';
            case 'prologue': return 'PROLOGUE';
            case 'gan': return 'I: GANs';
            case 'diffusion': return 'II: DIFFUSION';
            case 'pipeline': return 'III: PIPELINE';
            case 'control': return 'IV-V: CONTROL';
            case 'interview': return 'VI: Q&A';
            default: return '';
        }
    };

    const getChapterNumber = (scene) => {
        switch (scene) {
            case 'intro': return 0;
            case 'prologue': return 0;
            case 'gan': return 1;
            case 'diffusion': return 2;
            case 'pipeline': return 3;
            case 'control': return 4;
            case 'interview': return 5;
            default: return 0;
        }
    };

    const progress = ((currentStepIndex + 1) / NARRATION_STEPS.length) * 100;
    const circumference = 2 * Math.PI * 40;

    const renderScene = () => {
        const { scene, visualStep } = currentData;

        switch (scene) {
            case 'intro': return <IntroScene step={visualStep} />;
            case 'prologue': return <Prologue step={visualStep} />;
            case 'gan': return <GANBattle step={visualStep} />;
            case 'diffusion': return <DiffusionProcess step={visualStep} />;
            case 'pipeline': return <PipelineFlow step={visualStep} />;
            case 'control': return <ControlFuture step={visualStep} />;
            case 'interview': return <InterviewQuestions step={visualStep} />;
            default: return <div>Unknown Scene</div>;
        }
    };

    return (
        <div className="w-full h-full relative font-sans text-main">
            {renderScene()}
            <Narrator text={currentData.text} isVisible={true} />

            {/* Circular Progress Bar */}
            <div className="absolute top-6 left-6 flex items-center gap-4">
                <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 transform -rotate-90">
                        <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="rgba(255,255,255,0.15)"
                            strokeWidth="3"
                            fill="transparent"
                        />
                        <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#ec4899"
                            strokeWidth="3"
                            fill="transparent"
                            strokeDasharray={2 * Math.PI * 28}
                            strokeDashoffset={(2 * Math.PI * 28) * (1 - progress / 100)}
                            strokeLinecap="round"
                            className="transition-all duration-500"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{getChapterNumber(currentData.scene)}</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-white/50 text-xs font-semibold tracking-widest uppercase">
                        CHAPTER {getChapterNumber(currentData.scene)}
                    </span>
                    <span className="text-white font-medium text-sm">
                        {getChapter(currentData.scene)}
                    </span>
                </div>
            </div>

        </div>
    );
};

export default SceneManager;
