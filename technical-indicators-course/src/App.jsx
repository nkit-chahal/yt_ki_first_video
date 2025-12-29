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
import Chapter8 from './chapters/Chapter8';
import Chapter9 from './chapters/Chapter9';
import Chapter10 from './chapters/Chapter10';

// Chapter configuration with segment counts
const CHAPTERS = [
    { component: Chapter1, title: 'Introduction', segments: ['1_1', '1_2', '1_3', '1_4', '1_5', '1_6', '1_7'] },
    { component: Chapter2, title: 'Simple Moving Average', segments: ['2_1', '2_2', '2_3', '2_4', '2_5', '2_6', '2_7'] },
    { component: Chapter3, title: 'Exponential Moving Average', segments: ['3_1', '3_2', '3_3', '3_4', '3_5'] },
    { component: Chapter4, title: 'MACD', segments: ['4_1', '4_2', '4_3', '4_4', '4_5', '4_6'] },
    { component: Chapter5, title: 'RSI', segments: ['5_1', '5_2', '5_3', '5_4', '5_5'] },
    { component: Chapter6, title: 'Stochastic Oscillator', segments: ['6_1', '6_2', '6_3', '6_4', '6_5'] },
    { component: Chapter7, title: 'On-Balance Volume', segments: ['7_1', '7_2', '7_3', '7_4'] },
    { component: Chapter8, title: 'VWAP', segments: ['8_1', '8_2', '8_3', '8_4', '8_5'] },
    { component: Chapter9, title: 'Volume Profile', segments: ['9_1', '9_2', '9_3', '9_4'] },
    { component: Chapter10, title: 'Conclusion', segments: ['10_1', '10_2', '10_3', '10_4', '10_5'] },
];

// Fallback durations per segment (ms)
const SEGMENT_DURATIONS = {
    '1_1': 4000, '1_2': 6000, '1_3': 3000, '1_4': 4000, '1_5': 3000, '1_6': 4000, '1_7': 4000,
    '2_1': 5000, '2_2': 5000, '2_3': 3000, '2_4': 4000, '2_5': 5000, '2_6': 5000, '2_7': 3000,
    '3_1': 4000, '3_2': 4000, '3_3': 3000, '3_4': 4000, '3_5': 4000,
    '4_1': 4000, '4_2': 6000, '4_3': 5000, '4_4': 4000, '4_5': 4000, '4_6': 5000,
    '5_1': 4000, '5_2': 5000, '5_3': 4000, '5_4': 5000, '5_5': 6000,
    '6_1': 4000, '6_2': 5000, '6_3': 4000, '6_4': 4000, '6_5': 5000,
    '7_1': 4000, '7_2': 4000, '7_3': 5000, '7_4': 5000,
    '8_1': 4000, '8_2': 5000, '8_3': 5000, '8_4': 4000, '8_5': 5000,
    '9_1': 4000, '9_2': 5000, '9_3': 5000, '9_4': 5000,
    '10_1': 3000, '10_2': 4000, '10_3': 5000, '10_4': 6000, '10_5': 5000,
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
            // Next segment in this chapter
            setCurrentSegment(s => s + 1);
        } else if (currentChapter < CHAPTERS.length - 1) {
            // Next chapter
            setCurrentChapter(c => c + 1);
            setCurrentSegment(0);
        } else {
            // End of course
            setIsPlaying(false);
        }
    };

    // Start fallback timer
    const startFallbackTimer = () => {
        clearTimer();
        const segmentId = getCurrentSegmentId();
        if (segmentId && isPlaying) {
            const duration = SEGMENT_DURATIONS[segmentId] || 4000;
            timerRef.current = setTimeout(advanceSegment, duration);
        }
    };

    // Play audio when segment changes
    useEffect(() => {
        clearTimer();
        const segmentId = getCurrentSegmentId();

        if (audioRef.current && isPlaying && segmentId) {
            const audioPath = `/audio/${segmentId}.mp3`;
            audioRef.current.src = `${audioPath}?t=${Date.now()}`;
            audioRef.current.play()
                .then(() => console.log('Playing:', audioPath))
                .catch((err) => {
                    console.warn('Audio failed, using fallback:', err);
                    startFallbackTimer();
                });
        }

        return () => clearTimer();
    }, [currentChapter, currentSegment, isPlaying]);

    // Auto-advance when audio ends
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => advanceSegment();
        const handleError = () => startFallbackTimer();

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('error', handleError);
        };
    }, [currentChapter, currentSegment, isPlaying]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') {
                if (audioRef.current) audioRef.current.pause();
                clearTimer();
                advanceSegment();
            }
            if (e.key === 'ArrowLeft') {
                if (audioRef.current) audioRef.current.pause();
                clearTimer();
                if (currentSegment > 0) {
                    setCurrentSegment(s => s - 1);
                } else if (currentChapter > 0) {
                    setCurrentChapter(c => c - 1);
                    setCurrentSegment(CHAPTERS[currentChapter - 1].segments.length - 1);
                }
            }
            if (e.key === 'p' || e.key === 'P') {
                if (isPlaying && audioRef.current) audioRef.current.pause();
                setIsPlaying(p => !p);
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [currentChapter, currentSegment, isPlaying]);

    // Handle click to restart audio
    const handleClick = () => {
        if (audioRef.current && audioRef.current.paused && isPlaying) {
            const segmentId = getCurrentSegmentId();
            if (segmentId) {
                audioRef.current.src = `/audio/${segmentId}.mp3?t=${Date.now()}`;
                audioRef.current.play().catch(() => startFallbackTimer());
            }
        }
    };

    const CurrentChapter = CHAPTERS[currentChapter]?.component;
    const totalSegments = CHAPTERS.reduce((acc, ch) => acc + ch.segments.length, 0);
    const completedSegments = CHAPTERS.slice(0, currentChapter).reduce((acc, ch) => acc + ch.segments.length, 0) + currentSegment;

    return (
        <div
            className="w-screen h-screen flex items-center justify-center bg-stone-900 overflow-hidden cursor-pointer"
            onClick={handleClick}
        >
            {/* Start screen */}
            {!hasStarted && countdown === null && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-stone-900">
                    <div className="text-5xl font-bold text-stone-200 mb-4">
                        Technical Indicators Course
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
                            {/* Background ring */}
                            <circle
                                cx="32"
                                cy="32"
                                r="28"
                                fill="none"
                                stroke="#44403B"
                                strokeWidth="4"
                            />
                            {/* Progress ring */}
                            <motion.circle
                                cx="32"
                                cy="32"
                                r="28"
                                fill="none"
                                stroke="url(#progressGradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
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
                        {/* Chapter icon in center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl">
                                {currentChapter <= 0 ? '📚' :
                                    currentChapter <= 3 ? '📈' :
                                        currentChapter <= 5 ? '⚡' :
                                            currentChapter <= 8 ? '📊' : '🎯'}
                            </span>
                        </div>
                    </div>

                    {/* Chapter title */}
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
