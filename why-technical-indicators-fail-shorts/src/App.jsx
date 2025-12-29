import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import Scene6 from './scenes/Scene6';
import Scene7 from './scenes/Scene7';
import Scene8 from './scenes/Scene8';
import Scene9 from './scenes/Scene9';

const SCENES = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9];

// Audio files for each scene
const AUDIO_FILES = [
    '/audio/scene_1.mp3',
    '/audio/scene_2.mp3',
    '/audio/scene_3.mp3',
    '/audio/scene_4.mp3',
    '/audio/scene_5.mp3',
    '/audio/scene_6.mp3',
    '/audio/scene_7.mp3',
    '/audio/scene_8.mp3',
    '/audio/scene_9.mp3'
];

// Fallback durations in milliseconds (if audio fails)
const SCENE_DURATIONS = [
    5000,  // Scene 1: 5s
    4000,  // Scene 2: 4s
    4000,  // Scene 3: 4s
    5000,  // Scene 4: 5s
    4000,  // Scene 5: 4s
    5000,  // Scene 6: 5s
    4000,  // Scene 7: 4s
    4000,  // Scene 8: 4s
    3000   // Scene 9: 3s
];

// Load saved speed from localStorage
const getSavedSpeed = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? parseFloat(saved) : defaultValue;
};

function App() {
    const [hasStarted, setHasStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [currentScene, setCurrentScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [animSpeed, setAnimSpeed] = useState(() => getSavedSpeed('ti_anim_speed', 1.0));
    const [audioSpeed, setAudioSpeed] = useState(() => getSavedSpeed('ti_audio_speed', 1.0));
    const audioRef = useRef(null);
    const fallbackTimerRef = useRef(null);

    // Keyboard trigger to start (SPACE key)
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space' && !hasStarted && countdown === null) {
                e.preventDefault();
                setCountdown(4);

                const countdownInterval = setInterval(() => {
                    setCountdown(prev => {
                        if (prev === 1) {
                            clearInterval(countdownInterval);
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

    // Auto-refresh when reel completes
    useEffect(() => {
        if (hasStarted && currentScene === SCENES.length - 1 && !isPlaying) {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }, [currentScene, isPlaying, hasStarted]);

    // Advance to next scene
    const advanceScene = () => {
        if (currentScene < SCENES.length - 1) {
            setCurrentScene(s => s + 1);
        } else {
            setIsPlaying(false);
        }
    };

    // Clear fallback timer
    const clearFallbackTimer = () => {
        if (fallbackTimerRef.current) {
            clearTimeout(fallbackTimerRef.current);
            fallbackTimerRef.current = null;
        }
    };

    // Start fallback timer
    const startFallbackTimer = () => {
        clearFallbackTimer();
        if (isPlaying && currentScene < SCENES.length) {
            const duration = SCENE_DURATIONS[currentScene] / audioSpeed;
            fallbackTimerRef.current = setTimeout(advanceScene, duration);
        }
    };

    // Play audio when scene changes
    useEffect(() => {
        clearFallbackTimer();

        if (audioRef.current && isPlaying) {
            audioRef.current.src = `${AUDIO_FILES[currentScene]}?t=${Date.now()}`;
            audioRef.current.playbackRate = audioSpeed;

            const playPromise = audioRef.current.play();
            if (playPromise) {
                playPromise
                    .then(() => {
                        console.log('Audio playing:', AUDIO_FILES[currentScene]);
                    })
                    .catch((err) => {
                        console.warn('Audio failed, using fallback timer:', err);
                        startFallbackTimer();
                    });
            }
        }

        return () => clearFallbackTimer();
    }, [currentScene, isPlaying]);

    // Update playback rate when audioSpeed changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = audioSpeed;
        }
    }, [audioSpeed]);

    // Auto-advance when audio ends
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => {
            advanceScene();
        };

        const handleError = (e) => {
            console.warn('Audio error, using fallback:', e);
            startFallbackTimer();
        };

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('error', handleError);
        };
    }, [currentScene, isPlaying, audioSpeed]);

    // Manual navigation
    const goToNext = () => {
        if (audioRef.current) audioRef.current.pause();
        clearFallbackTimer();
        if (currentScene < SCENES.length - 1) {
            setCurrentScene(s => s + 1);
        }
    };

    const goToPrev = () => {
        if (audioRef.current) audioRef.current.pause();
        clearFallbackTimer();
        if (currentScene > 0) {
            setCurrentScene(s => s - 1);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrev();
            if (e.key === 'p' || e.key === 'P') {
                if (isPlaying) {
                    if (audioRef.current) audioRef.current.pause();
                    clearFallbackTimer();
                }
                setIsPlaying(p => !p);
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [currentScene, isPlaying]);

    // Handle click to start audio (for browsers that block autoplay)
    const handleFirstClick = () => {
        if (audioRef.current && audioRef.current.paused && isPlaying) {
            audioRef.current.src = `${AUDIO_FILES[currentScene]}?t=${Date.now()}`;
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(() => startFallbackTimer());
        }
    };

    const CurrentSceneComponent = SCENES[currentScene];

    return (
        <div
            className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden cursor-pointer"
            onClick={handleFirstClick}
        >
            {/* Waiting Screen */}
            {!hasStarted && countdown === null && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900">
                    <div className="text-3xl text-gray-500 font-mono">
                        Press SPACE to start
                    </div>
                </div>
            )}

            {/* Countdown Display */}
            {countdown !== null && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
                    <motion.div
                        key={countdown}
                        className="text-[15rem] font-black text-white"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.3 }}
                    >
                        {countdown}
                    </motion.div>
                </div>
            )}

            <div className="shorts-container">
                <motion.div
                    key={currentScene}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                >
                    <CurrentSceneComponent speed={animSpeed} />
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 z-30">
                    <div
                        className="h-full bg-blue-500 transition-all duration-300"
                        style={{ width: `${((currentScene + 1) / SCENES.length) * 100}%` }}
                    />
                </div>

                {/* Scene Counter */}
                <div className="absolute top-4 right-4 text-gray-500 text-xl font-mono z-30">
                    {currentScene + 1} / {SCENES.length}
                </div>

                {/* Vertical Progress Bar - Top Left */}
                {hasStarted && (
                    <div className="absolute top-4 left-4 w-2 h-48 bg-gray-800 rounded-full z-30 overflow-hidden">
                        <motion.div
                            className="w-full bg-blue-500 rounded-full"
                            initial={{ height: 0 }}
                            animate={{ height: `${((currentScene + 1) / SCENES.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                )}
            </div>

            {/* Per-Scene Audio */}
            <audio ref={audioRef} />
        </div>
    );
}

export default App;
