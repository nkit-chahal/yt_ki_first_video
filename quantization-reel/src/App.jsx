import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ResearchScene1 from './scenes/ResearchScene1';
import ResearchScene2 from './scenes/ResearchScene2';
import ResearchScene3 from './scenes/ResearchScene3';
import ResearchScene4 from './scenes/ResearchScene4';
import ResearchScene5 from './scenes/ResearchScene5';
import ResearchScene6 from './scenes/ResearchScene6';
import DebugPanel from './components/DebugPanel';

const SCENES = [ResearchScene1, ResearchScene2, ResearchScene3, ResearchScene4, ResearchScene5, ResearchScene6];

// Audio files for each scene
const AUDIO_FILES = [
    '/audio/research1_hook.mp3',
    '/audio/research2_math.mp3',
    '/audio/research3_code.mp3',
    '/audio/research4_papers.mp3',
    '/audio/research5_build.mp3',
    '/audio/research6_cta.mp3'
];

// Fallback durations (seconds * 1000)
const SCENE_DURATIONS = [
    7000, 8000, 8000, 8000, 8000, 5000
];

// Load saved speeds from localStorage
const getSavedSpeed = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? parseFloat(saved) : defaultValue;
};

function App() {
    const [hasStarted, setHasStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [currentScene, setCurrentScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [animSpeed, setAnimSpeed] = useState(() => getSavedSpeed('riddle_anim_speed', 1.0));
    const [audioSpeed, setAudioSpeed] = useState(() => getSavedSpeed('riddle_audio_speed', 1.0));
    const [debugMode, setDebugMode] = useState(false);
    const [audioAvailable, setAudioAvailable] = useState(true);
    const audioRef = useRef(null);
    const fallbackTimerRef = useRef(null);

    // Keyboard trigger to start (SPACE key)
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space' && !hasStarted && countdown === null) {
                e.preventDefault();
                setCountdown(4);

                // Countdown: 4, 3, 2, 1
                const countdownInterval = setInterval(() => {
                    setCountdown(prev => {
                        if (prev === 1) {
                            clearInterval(countdownInterval);
                            // Extra 0.5s delay after showing "1"
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
            // Wait a bit after last scene, then refresh
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }, [currentScene, isPlaying, hasStarted]);

    // Save speeds to localStorage
    const handleAnimSpeedChange = (speed) => {
        setAnimSpeed(speed);
        localStorage.setItem('riddle_anim_speed', speed.toString());
    };

    const handleAudioSpeedChange = (speed) => {
        setAudioSpeed(speed);
        localStorage.setItem('riddle_audio_speed', speed.toString());
    };

    // Toggle debug mode with 'D' key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.key === 'd' || e.key === 'D') {
                e.preventDefault();
                setDebugMode(prev => !prev);
            }
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    // Advance to next scene
    const advanceScene = () => {
        console.log('Advancing scene from:', currentScene);
        if (currentScene < SCENES.length - 1) {
            setCurrentScene(s => s + 1);
        }
    };

    // Clear fallback timer
    const clearFallbackTimer = () => {
        if (fallbackTimerRef.current) {
            clearTimeout(fallbackTimerRef.current);
            fallbackTimerRef.current = null;
        }
    };

    // Start fallback timer for auto-advance
    const startFallbackTimer = () => {
        clearFallbackTimer();
        if (isPlaying && currentScene < SCENES.length - 1) {
            console.warn('Starting fallback timer for scene:', currentScene);
            const duration = SCENE_DURATIONS[currentScene] / audioSpeed;
            fallbackTimerRef.current = setTimeout(advanceScene, duration);
        }
    };

    // Play audio when scene changes
    useEffect(() => {
        clearFallbackTimer();

        if (audioRef.current && isPlaying) {
            // Add timestamp to bust cache
            audioRef.current.src = `${AUDIO_FILES[currentScene]}?t=${Date.now()}`;
            audioRef.current.playbackRate = audioSpeed;

            console.log('Attempting to play:', audioRef.current.src);

            const playPromise = audioRef.current.play();
            if (playPromise) {
                playPromise
                    .then(() => {
                        console.log('Audio playing successfully');
                        setAudioAvailable(true);
                    })
                    .catch((err) => {
                        console.error('Audio play failed:', err);
                        // Audio failed to play, use fallback timer
                        setAudioAvailable(false);
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
            console.log('Audio ended event fired');
            advanceScene();
        };

        const handleError = (e) => {
            console.error('Audio error event:', e);
            setAudioAvailable(false);
            startFallbackTimer();
        };

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('error', handleError);
        };
    }, [currentScene, isPlaying, audioSpeed]);

    // Play/pause control
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(() => {
                    startFallbackTimer();
                });
            } else {
                audioRef.current.pause();
                clearFallbackTimer();
            }
        }
    }, [isPlaying]);

    // Handle reset
    const handleReset = () => {
        clearFallbackTimer();
        setCurrentScene(0);
        setIsPlaying(true);
        if (audioRef.current) {
            // Add timestamp to bust cache
            audioRef.current.src = `${AUDIO_FILES[0]}?t=${Date.now()}`;
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(() => {
                startFallbackTimer();
            });
        }
    };

    // Handle first click to start audio
    const handleFirstClick = () => {
        if (audioRef.current && audioRef.current.paused) {
            // Add timestamp to bust cache
            audioRef.current.src = `${AUDIO_FILES[currentScene]}?t=${Date.now()}`;
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(() => {
                startFallbackTimer();
            });
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
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <CurrentSceneComponent speed={animSpeed} />
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 z-30">
                    <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${((currentScene + 1) / SCENES.length) * 100}%` }}
                    />
                </div>

                {/* Debug Panel */}
                {debugMode && (
                    <DebugPanel
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        animSpeed={animSpeed}
                        setAnimSpeed={handleAnimSpeedChange}
                        audioSpeed={audioSpeed}
                        setAudioSpeed={handleAudioSpeedChange}
                        handleReset={handleReset}
                    />
                )}
            </div>

            {/* Per-Scene Audio */}
            <audio ref={audioRef} />
        </div>
    );
}

export default App;
