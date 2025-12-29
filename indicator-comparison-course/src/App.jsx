import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import chapters
import Chapter1 from './chapters/Chapter1';
import Chapter2 from './chapters/Chapter2';
import Chapter3 from './chapters/Chapter3';
import Chapter4 from './chapters/Chapter4';
import Chapter5 from './chapters/Chapter5';
import Chapter6 from './chapters/Chapter6';
import Chapter7 from './chapters/Chapter7';

// Chapter configuration with segment counts
const CHAPTERS = [
    { component: Chapter1, title: 'Introduction', segments: ['1_1', '1_2', '1_3'] },
    { component: Chapter2, title: 'Trending Markets', segments: ['2_1', '2_2', '2_3', '2_4', '2_5'] },
    { component: Chapter3, title: 'Ranging Markets', segments: ['3_1', '3_2', '3_3', '3_4', '3_5'] },
    { component: Chapter4, title: 'Breakout Trading', segments: ['4_1', '4_2', '4_3', '4_4', '4_5'] },
    { component: Chapter5, title: 'Reversal Trading', segments: ['5_1', '5_2', '5_3', '5_4', '5_5'] },
    { component: Chapter6, title: 'Quick Reference', segments: ['6_1', '6_2', '6_3'] },
    { component: Chapter7, title: 'Conclusion', segments: ['7_1', '7_2', '7_3', '7_4', '7_5'] },
];

// Fallback durations per segment (ms)
const SEGMENT_DURATIONS = {
    '1_1': 4000, '1_2': 5000, '1_3': 4000,
    '2_1': 4000, '2_2': 3000, '2_3': 5000, '2_4': 5000, '2_5': 5000,
    '3_1': 4000, '3_2': 3000, '3_3': 5000, '3_4': 5000, '3_5': 5000,
    '4_1': 4000, '4_2': 4000, '4_3': 5000, '4_4': 5000, '4_5': 5000,
    '5_1': 4000, '5_2': 4000, '5_3': 5000, '5_4': 5000, '5_5': 5000,
    '6_1': 3000, '6_2': 6000, '6_3': 4000,
    '7_1': 3000, '7_2': 4000, '7_3': 4000, '7_4': 4000, '7_5': 5000,
};

function App() {
    const [hasStarted, setHasStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [currentChapter, setCurrentChapter] = useState(0);
    const [currentSegment, setCurrentSegment] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const timerRef = useRef(null);

    // Get current segment ID
    const getCurrentSegmentId = () => {
        const chapter = CHAPTERS[currentChapter];
        return chapter?.segments[currentSegment] || null;
    };

    // Keyboard to start
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

    // Clear timer
    const clearTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    // Advance to next segment or chapter
    const advanceSegment = () => {
        const chapter = CHAPTERS[currentChapter];
        if (currentSegment < chapter.segments.length - 1) {
            setCurrentSegment(s => s + 1);
        } else if (currentChapter < CHAPTERS.length - 1) {
            setCurrentChapter(c => c + 1);
            setCurrentSegment(0);
        } else {
            setIsPlaying(false);
        }
    };

    // Play audio for current segment
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
    }, [hasStarted, isPlaying, currentChapter, currentSegment]);

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!hasStarted) return;

            if (e.code === 'ArrowRight') {
                e.preventDefault();
                audioRef.current?.pause();
                clearTimer();
                advanceSegment();
            } else if (e.code === 'ArrowLeft') {
                e.preventDefault();
                audioRef.current?.pause();
                clearTimer();
                if (currentSegment > 0) {
                    setCurrentSegment(s => s - 1);
                } else if (currentChapter > 0) {
                    const prevChapter = currentChapter - 1;
                    setCurrentChapter(prevChapter);
                    setCurrentSegment(CHAPTERS[prevChapter].segments.length - 1);
                }
            } else if (e.code === 'KeyP') {
                e.preventDefault();
                if (isPlaying) {
                    audioRef.current?.pause();
                    clearTimer();
                    setIsPlaying(false);
                } else {
                    setIsPlaying(true);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [hasStarted, currentChapter, currentSegment, isPlaying]);

    // Click to advance
    const handleClick = () => {
        if (hasStarted && isPlaying) {
            audioRef.current?.pause();
            clearTimer();
            advanceSegment();
        }
    };

    const CurrentChapter = CHAPTERS[currentChapter]?.component;

    // Progress calculation
    const totalSegments = CHAPTERS.reduce((acc, ch) => acc + ch.segments.length, 0);
    const completedSegments = CHAPTERS.slice(0, currentChapter).reduce((acc, ch) => acc + ch.segments.length, 0) + currentSegment;

    return (
        <div
            className="video-container cursor-pointer"
            onClick={handleClick}
        >
            {/* Start screen */}
            {!hasStarted && countdown === null && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-stone-900">
                    <div className="text-5xl font-bold text-stone-200 mb-4">
                        When to Use Which Indicator?
                    </div>
                    <div className="text-2xl text-stone-500 font-mono">
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
            {hasStarted && CurrentChapter && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentChapter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                    >
                        <CurrentChapter currentSegment={currentSegment} />
                    </motion.div>
                </AnimatePresence>
            )}

            {/* Progress bar */}
            {hasStarted && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-800 z-40">
                    <motion.div
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((completedSegments + 1) / totalSegments) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            )}

            {/* Chapter Progress - Top Left */}
            {hasStarted && (
                <div className="absolute top-6 left-6 z-40 flex items-center gap-4">
                    {/* Circular Progress Ring */}
                    <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 -rotate-90">
                            <circle cx="32" cy="32" r="28" fill="none" stroke="#44403B" strokeWidth="4" />
                            <motion.circle
                                cx="32" cy="32" r="28" fill="none"
                                stroke="url(#progressGradient)" strokeWidth="4" strokeLinecap="round"
                                strokeDasharray={2 * Math.PI * 28}
                                initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                                animate={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - (completedSegments + 1) / totalSegments) }}
                                transition={{ duration: 0.3 }}
                            />
                            <defs>
                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#F59E0B" />
                                    <stop offset="100%" stopColor="#FB923C" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl">
                                {currentChapter === 0 ? '❓' :
                                    currentChapter === 1 ? '📈' :
                                        currentChapter === 2 ? '↔️' :
                                            currentChapter === 3 ? '⚡' :
                                                currentChapter === 4 ? '🔄' :
                                                    currentChapter === 5 ? '📋' : '🎯'}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-stone-500 text-sm uppercase tracking-wider">Chapter {currentChapter + 1}</span>
                        <span className="text-stone-300 text-lg font-semibold">{CHAPTERS[currentChapter]?.title}</span>
                    </div>
                </div>
            )}

            <audio ref={audioRef} />
        </div>
    );
}

export default App;
