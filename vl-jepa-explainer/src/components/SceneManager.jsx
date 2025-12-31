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
    const [audioProgress, setAudioProgress] = useState(0);
    const audioRef = useRef(null);

    const currentData = NARRATION_STEPS[currentStepIndex];
    const progress = ((currentStepIndex + 1) / NARRATION_STEPS.length) * 100;

    // Audio playback and auto-advance
    useEffect(() => {
        setAudioProgress(0); // Prevent flash of previous step's progress
        if (!isPlaying) return;

        const audio = new Audio(`/audio/narration_${currentStepIndex}.mp3`);
        audioRef.current = audio;
        audio.playbackRate = playbackSpeed;

        // Track audio progress for animation sync
        audio.ontimeupdate = () => {
            if (audio.duration) {
                setAudioProgress(audio.currentTime / audio.duration);
            }
        };

        // Reset progress when audio starts
        audio.onloadedmetadata = () => setAudioProgress(0);

        audio.play().catch(console.error);

        audio.onended = () => {
            setAudioProgress(1); // Ensure we reach 100%
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
                return <HookScene step={step} progress={audioProgress} />;
            case 'jepaIntro':
                return <JEPAIntroScene step={step - 4} progress={audioProgress} />;
            case 'nonGenerative':
                return <NonGenerativeScene step={step} progress={audioProgress} />;
            case 'implications':
                return <ImplicationsScene step={step} progress={audioProgress} />;
            case 'tokenFlow':
                return <TokenFlowScene step={step} progress={audioProgress} />;
            case 'semanticThinking':
                return <SemanticThinkingScene step={step} progress={audioProgress} />;
            case 'dotCloud':
                return <DotCloudScene step={step} progress={audioProgress} />;
            case 'cctvComparison':
                return <CCTVComparisonScene step={step} progress={audioProgress} />;
            case 'temporal':
                return <TemporalScene step={step} progress={audioProgress} />;
            case 'architecture':
                return <ArchitectureScene step={step} progress={audioProgress} />;
            case 'benchmark':
                return <BenchmarkScene step={step} progress={audioProgress} />;
            case 'yannQuote':
                return <YannQuoteScene step={step} progress={audioProgress} />;
            case 'soniaQuote':
                return <SoniaQuoteScene step={step} progress={audioProgress} />;
            case 'reddit':
                return <RedditScene step={step} progress={audioProgress} />;
            default:
                return <HookScene step={0} progress={audioProgress} />;
        }
    };

    // Derived state for chapters
    const chapters = NARRATION_STEPS.reduce((acc, step, index) => {
        const lastChapter = acc[acc.length - 1];
        if (!lastChapter || lastChapter.id !== step.scene) {
            acc.push({
                id: step.scene,
                startIndex: index,
                count: 1
            });
        } else {
            lastChapter.count++;
        }
        return acc;
    }, []).map((chapter, i, arr) => {
        chapter.endIndex = chapter.startIndex + chapter.count - 1;
        return chapter;
    });

    // Helper for SVG Arcs
    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    const describeArc = (x, y, radius, startAngle, endAngle) => {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
    };

    // Calculate circular segments
    let currentAngle = 0;
    const radius = 32;
    const strokeWidth = 5;
    const center = 42; // Viewbox center (radius + stroke/2 + padding)
    const gap = 3; // Gap between segments in degrees

    const circularSegments = chapters.map((chapter) => {
        // Calculate segment size proportional to step count
        const totalSteps = NARRATION_STEPS.length;
        const sliceAngle = (chapter.count / totalSteps) * 360;

        const startAngle = currentAngle;
        const endAngle = currentAngle + sliceAngle - gap;

        // Save angles for this chapter
        const segment = {
            ...chapter,
            startAngle,
            endAngle,
            sliceAngle // Store original slice for progress calc
        };

        currentAngle += sliceAngle;
        return segment;
    });

    // Find current chapter index for center text
    const currentChapterIndex = chapters.findIndex(c =>
        currentStepIndex >= c.startIndex && currentStepIndex <= c.endIndex
    );

    return (
        <div className="w-full h-full relative bg-[#050505] overflow-hidden">
            {/* Circular Progress Widget (Top-Left) */}
            <div className="absolute top-6 left-6 z-50">
                <div className="relative w-20 h-20 flex items-center justify-center">
                    {/* Glass background for the circle */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-full border border-white/10" />

                    <svg width="84" height="84" viewBox="0 0 84 84" className="absolute rotate-0">
                        {circularSegments.map((chapter) => {
                            const isCompleted = currentStepIndex > chapter.endIndex;
                            const isCurrent = currentStepIndex >= chapter.startIndex && currentStepIndex <= chapter.endIndex;

                            // Draw the base track for this segment (faint)
                            const trackPath = describeArc(center, center, radius, chapter.startAngle, chapter.endAngle);

                            // Calculate progress overlay for current chapter
                            let progressPath = null;
                            if (isCurrent) {
                                const stepsInChapter = chapter.count;
                                const stepsCompletedInChapter = currentStepIndex - chapter.startIndex;
                                const progressRatio = (stepsCompletedInChapter + audioProgress) / stepsInChapter;

                                // Calculate angle span for progress
                                // Span should be proportional to the VISIBLE segment (subtracting gap)
                                const visibleSpan = chapter.endAngle - chapter.startAngle;
                                const progressSpan = visibleSpan * progressRatio;

                                if (progressSpan > 0.1) {
                                    progressPath = describeArc(center, center, radius, chapter.startAngle, chapter.startAngle + progressSpan);
                                }
                            }

                            return (
                                <g key={chapter.id}>
                                    {/* Base Segment */}
                                    <path
                                        d={trackPath}
                                        fill="none"
                                        stroke={isCompleted ? "#8B5CF6" : "rgba(255,255,255,0.15)"} // Completed gets solid purple, others faint white
                                        strokeWidth={strokeWidth}
                                        strokeLinecap="round"
                                        transition="all 0.3s ease"
                                        className="transition-colors duration-300"
                                    />

                                    {/* Animated Progress Overlay for Current Segment */}
                                    {isCurrent && progressPath && (
                                        <motion.path
                                            d={progressPath}
                                            fill="none"
                                            stroke="#8B5CF6" // Active color
                                            strokeWidth={strokeWidth}
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.1, ease: "linear" }}
                                        />
                                    )}
                                </g>
                            );
                        })}
                    </svg>

                    {/* Center Text */}
                    <div className="flex flex-col items-center justify-center z-10">
                        <span className="text-white text-lg font-bold">
                            {currentChapterIndex + 1}
                        </span>
                        <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider -mt-1">
                            Chap
                        </span>
                    </div>
                </div>
            </div>

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

            {/* Play Button Overlay */}
            {
                !isPlaying && currentStepIndex === 0 && (
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
                )
            }
        </div >
    );
};

export default SceneManager;
