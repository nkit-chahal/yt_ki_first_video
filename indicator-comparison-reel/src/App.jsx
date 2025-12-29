import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import scenes
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import Scene6 from './scenes/Scene6';

// Scene configuration
const SCENES = [
    { component: Scene1, title: 'Hook', segments: ['1_1', '1_2'] },
    { component: Scene2, title: 'Trending', segments: ['2_1', '2_2'] },
    { component: Scene3, title: 'Ranging', segments: ['3_1', '3_2'] },
    { component: Scene4, title: 'Breakout', segments: ['4_1', '4_2'] },
    { component: Scene5, title: 'Reversal', segments: ['5_1'] },
    { component: Scene6, title: 'CTA', segments: ['6_1', '6_2'] },
];

// Fallback durations
const SEGMENT_DURATIONS = {
    '1_1': 3000, '1_2': 4000,
    '2_1': 5000, '2_2': 4000,
    '3_1': 5000, '3_2': 4000,
    '4_1': 5000, '4_2': 4000,
    '5_1': 6000,
    '6_1': 5000, '6_2': 4000,
};

function App() {
    const [hasStarted, setHasStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [currentScene, setCurrentScene] = useState(0);
    const [currentSegment, setCurrentSegment] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const timerRef = useRef(null);

    const getCurrentSegmentId = () => {
        const scene = SCENES[currentScene];
        return scene?.segments[currentSegment] || null;
    };

    // Start on space
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space' && !hasStarted && countdown === null) {
                e.preventDefault();
                setCountdown(3);
                const interval = setInterval(() => {
                    setCountdown(prev => {
                        if (prev === 1) {
                            clearInterval(interval);
                            setTimeout(() => {
                                setCountdown(null);
                                setHasStarted(true);
                                setIsPlaying(true);
                            }, 500);
                            return prev;
                        }
                        return prev - 1;
                    });
                }, 1000);
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [hasStarted, countdown]);

    const clearTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const advanceSegment = () => {
        const scene = SCENES[currentScene];
        if (currentSegment < scene.segments.length - 1) {
            setCurrentSegment(s => s + 1);
        } else if (currentScene < SCENES.length - 1) {
            setCurrentScene(s => s + 1);
            setCurrentSegment(0);
        } else {
            setIsPlaying(false);
        }
    };

    // Audio playback
    useEffect(() => {
        if (!hasStarted || !isPlaying) return;

        const segmentId = getCurrentSegmentId();
        if (!segmentId) return;

        clearTimer();

        const audio = audioRef.current;
        audio.src = `/audio/${segmentId}.mp3`;
        audio.load();

        const playPromise = audio.play();
        if (playPromise) {
            playPromise.catch(() => {
                timerRef.current = setTimeout(advanceSegment, SEGMENT_DURATIONS[segmentId] || 4000);
            });
        }

        const handleEnded = () => advanceSegment();
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            clearTimer();
        };
    }, [hasStarted, isPlaying, currentScene, currentSegment]);

    // Click to advance
    const handleClick = () => {
        if (hasStarted && isPlaying) {
            audioRef.current?.pause();
            clearTimer();
            advanceSegment();
        }
    };

    const CurrentScene = SCENES[currentScene]?.component;
    const totalSegments = SCENES.reduce((acc, s) => acc + s.segments.length, 0);
    const completedSegments = SCENES.slice(0, currentScene).reduce((acc, s) => acc + s.segments.length, 0) + currentSegment;

    return (
        <div className="video-container cursor-pointer" onClick={handleClick}>
            {/* Start screen */}
            {!hasStarted && countdown === null && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-stone-900">
                    <div className="text-4xl font-bold text-stone-200 mb-4 text-center px-8">
                        Indicator Comparison Reel
                    </div>
                    <div className="text-xl text-stone-500 font-mono">
                        Press SPACE to start
                    </div>
                </div>
            )}

            {/* Countdown */}
            {countdown !== null && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-stone-900">
                    <motion.div
                        key={countdown}
                        className="text-[12rem] font-black text-amber-400"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.3 }}
                    >
                        {countdown}
                    </motion.div>
                </div>
            )}

            {/* Main content */}
            {hasStarted && CurrentScene && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentScene}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                    >
                        <CurrentScene currentSegment={currentSegment} />
                    </motion.div>
                </AnimatePresence>
            )}

            {/* Progress bar */}
            {hasStarted && (
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-stone-800 z-40">
                    <motion.div
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((completedSegments + 1) / totalSegments) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            )}

            <audio ref={audioRef} />
        </div>
    );
}

export default App;
