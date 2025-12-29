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

// Audio files (will be generated later)
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

// Fallback durations based on new narration script
const SCENE_DURATIONS = [
    5000,  // Scene 1: Hook
    6000,  // Scene 2: Scale
    6000,  // Scene 3: Data
    6000,  // Scene 4: Funnel
    6000,  // Scene 5: Collab Filtering
    6000,  // Scene 6: Ranking
    6000,  // Scene 7: Artwork
    7000,  // Scene 8: Summary
    4000,  // Scene 9: CTA
];

// Load saved speeds from localStorage
const getSavedSpeed = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? parseFloat(saved) : defaultValue;
};

function App() {
    const [currentScene, setCurrentScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [animSpeed, setAnimSpeed] = useState(() => getSavedSpeed('netflix_anim_speed', 1.0));
    const [audioSpeed, setAudioSpeed] = useState(() => getSavedSpeed('netflix_audio_speed', 1.0));
    const [debugMode, setDebugMode] = useState(true);
    const [audioAvailable, setAudioAvailable] = useState(false); // Default to false until audio exists
    const audioRef = useRef(null);
    const fallbackTimerRef = useRef(null);

    // Save speeds to localStorage
    const handleAnimSpeedChange = (speed) => {
        setAnimSpeed(speed);
        localStorage.setItem('netflix_anim_speed', speed.toString());
    };

    const handleAudioSpeedChange = (speed) => {
        setAudioSpeed(speed);
        localStorage.setItem('netflix_audio_speed', speed.toString());
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
            const duration = SCENE_DURATIONS[currentScene] / audioSpeed;
            fallbackTimerRef.current = setTimeout(advanceScene, duration);
        }
    };

    // Play audio when scene changes
    useEffect(() => {
        clearFallbackTimer();

        if (audioRef.current && isPlaying) {
            // Bust cache
            audioRef.current.src = `${AUDIO_FILES[currentScene]}?t=${Date.now()}`;
            audioRef.current.playbackRate = audioSpeed;

            const playPromise = audioRef.current.play();
            if (playPromise) {
                playPromise
                    .then(() => {
                        setAudioAvailable(true);
                    })
                    .catch(() => {
                        // Audio failed (normal for new project), use fallback
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
            advanceScene();
        };

        const handleError = () => {
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

                {/* Progress Bar - Netflix Red */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-900 z-30">
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

            <audio ref={audioRef} />
        </div>
    );
}

export default App;
