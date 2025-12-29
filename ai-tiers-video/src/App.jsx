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

// Chapter configuration - EXPANDED VERSION
const CHAPTERS = [
    { component: Chapter1, title: 'The AI Gold Rush', segments: ['1_1', '1_2', '1_3', '1_4'] },
    { component: Chapter2, title: 'Tier 0: Energy', segments: ['2_1', '2_2', '2_3', '2_4', '2_5'] },
    { component: Chapter3, title: 'Tier 1: Chips', segments: ['3_1', '3_2', '3_3', '3_4', '3_5'] },
    { component: Chapter4, title: 'Tier 2: Data Centers', segments: ['4_1', '4_2', '4_3', '4_4', '4_5'] },
    { component: Chapter5, title: 'Tier 3: Foundation Models', segments: ['5_1', '5_2', '5_3', '5_4', '5_5'] },
    { component: Chapter6, title: 'Tier 4: Infrastructure', segments: ['6_1', '6_2', '6_3', '6_4', '6_5'] },
    { component: Chapter7, title: 'Tier 5: Apps', segments: ['7_1', '7_2', '7_3', '7_4', '7_5'] },
    { component: Chapter8, title: 'The Real Opportunity', segments: ['8_1', '8_2', '8_3', '8_4', '8_5', '8_6'] },
    { component: Chapter9, title: 'CTA', segments: ['9_1', '9_2', '9_3'] },
];

// Fallback durations
const SEGMENT_DURATIONS = {
    '1_1': 6000, '1_2': 5000, '1_3': 5000, '1_4': 6000,
    '2_1': 6000, '2_2': 6000, '2_3': 5000, '2_4': 7000, '2_5': 8000,
    '3_1': 6000, '3_2': 6000, '3_3': 7000, '3_4': 7000, '3_5': 6000,
    '4_1': 6000, '4_2': 5000, '4_3': 5000, '4_4': 6000, '4_5': 8000,
    '5_1': 6000, '5_2': 7000, '5_3': 6000, '5_4': 6000, '5_5': 7000,
    '6_1': 6000, '6_2': 7000, '6_3': 6000, '6_4': 6000, '6_5': 7000,
    '7_1': 6000, '7_2': 6000, '7_3': 5000, '7_4': 6000, '7_5': 7000,
    '8_1': 5000, '8_2': 7000, '8_3': 8000, '8_4': 6000, '8_5': 6000, '8_6': 7000,
    '9_1': 8000, '9_2': 8000, '9_3': 7000,
};

function App() {
    const [hasStarted, setHasStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [currentChapter, setCurrentChapter] = useState(0);
    const [currentSegment, setCurrentSegment] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const timerRef = useRef(null);

    const getCurrentSegmentId = () => {
        const chapter = CHAPTERS[currentChapter];
        return chapter?.segments[currentSegment] || null;
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
                timerRef.current = setTimeout(advanceSegment, SEGMENT_DURATIONS[segmentId] || 5000);
            });
        }

        const handleEnded = () => advanceSegment();
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            clearTimer();
        };
    }, [hasStarted, isPlaying, currentChapter, currentSegment]);

    // Click to advance
    const handleClick = () => {
        if (hasStarted && isPlaying) {
            audioRef.current?.pause();
            clearTimer();
            advanceSegment();
        }
    };

    const CurrentChapter = CHAPTERS[currentChapter]?.component;
    const totalSegments = CHAPTERS.reduce((acc, ch) => acc + ch.segments.length, 0);
    const completedSegments = CHAPTERS.slice(0, currentChapter).reduce((acc, ch) => acc + ch.segments.length, 0) + currentSegment;

    // Get tier color
    const getTierColor = () => {
        const colors = ['#3B82F6', '#10B981', '#8B5CF6', '#EC4899', '#EF4444', '#F59E0B', '#3B82F6', '#10B981', '#F59E0B'];
        return colors[currentChapter] || '#3B82F6';
    };

    return (
        <div className="video-container cursor-pointer" onClick={handleClick}>
            {/* Start screen */}
            {!hasStarted && countdown === null && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
                    <h1 className="text-6xl font-black text-white mb-4">The 6 Tiers of AI</h1>
                    <p className="text-2xl text-gray-500">Your 5-Minute MBA in AI Economics</p>
                    <div className="text-xl text-gray-600 font-mono mt-8">Press SPACE to start</div>
                </div>
            )}

            {/* Countdown */}
            {countdown !== null && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
                    <motion.div
                        key={countdown}
                        className="text-[12rem] font-black gradient-text"
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
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-40">
                    <motion.div
                        className="h-full"
                        style={{ background: `linear-gradient(90deg, ${getTierColor()}, ${getTierColor()}aa)` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${((completedSegments + 1) / totalSegments) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            )}

            {/* Chapter indicator */}
            {hasStarted && (
                <div className="absolute top-6 left-6 z-40 flex items-center gap-4">
                    <div
                        className="tier-badge text-2xl"
                        style={{ color: getTierColor(), borderColor: getTierColor() }}
                    >
                        {currentChapter === 0 ? '💰' : currentChapter - 1}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm uppercase tracking-wider">Chapter {currentChapter + 1}</span>
                        <span className="text-white text-lg font-semibold">{CHAPTERS[currentChapter]?.title}</span>
                    </div>
                </div>
            )}

            <audio ref={audioRef} />
        </div>
    );
}

export default App;
