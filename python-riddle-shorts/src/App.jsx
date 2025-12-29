import React, { useState, useEffect, useRef } from 'react';
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import Scene6 from './scenes/Scene6';
import Scene7 from './scenes/Scene7';
import Scene8 from './scenes/Scene8';
import Scene9 from './scenes/Scene9';
import DebugPanel from './components/DebugPanel';

const SCENES = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9];

// Audio files for each scene
const AUDIO_FILES = [
    '/audio/scene1.mp3',
    '/audio/scene2.mp3',
    '/audio/scene3.mp3',
    '/audio/scene4.mp3',
    '/audio/scene5.mp3',
    '/audio/scene6.mp3',
    '/audio/scene7.mp3',
    '/audio/scene8.mp3',
    '/audio/scene9.mp3',
];

// Fallback durations - INCREASED to prevent early cutoff (15s safe default)
const SCENE_DURATIONS = [
    15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000
];

// Load saved speeds from localStorage
const getSavedSpeed = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? parseFloat(saved) : defaultValue;
};

function App() {
    const [currentScene, setCurrentScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [animSpeed, setAnimSpeed] = useState(() => getSavedSpeed('riddle_anim_speed', 1.0));
    const [audioSpeed, setAudioSpeed] = useState(() => getSavedSpeed('riddle_audio_speed', 1.0));
    const [debugMode, setDebugMode] = useState(true);
    const [audioAvailable, setAudioAvailable] = useState(true);
    const audioRef = useRef(null);
    const fallbackTimerRef = useRef(null);

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
            <div className="shorts-container">
                <CurrentSceneComponent speed={animSpeed} />

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
