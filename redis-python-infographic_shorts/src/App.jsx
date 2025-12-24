import React, { useState, useEffect, useRef } from 'react';
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import Scene6 from './scenes/Scene6';
import DebugPanel from './components/DebugPanel';

const SCENES = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6];

// Base scene durations in ms
const BASE_DURATIONS = [8000, 7000, 9000, 10000, 8000, 8000];

// Load saved speeds from localStorage
const getSavedSpeed = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? parseFloat(saved) : defaultValue;
};

function App() {
    const [currentScene, setCurrentScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true); // Auto-play on load
    const [animSpeed, setAnimSpeed] = useState(() => getSavedSpeed('shorts_anim_speed', 0.75));
    const [audioSpeed, setAudioSpeed] = useState(() => getSavedSpeed('shorts_audio_speed', 0.75));
    const [debugMode, setDebugMode] = useState(true);
    const audioRef = useRef(null);

    // Save animSpeed to localStorage
    const handleAnimSpeedChange = (speed) => {
        setAnimSpeed(speed);
        localStorage.setItem('shorts_anim_speed', speed.toString());
    };

    // Save audioSpeed to localStorage
    const handleAudioSpeedChange = (speed) => {
        setAudioSpeed(speed);
        localStorage.setItem('shorts_audio_speed', speed.toString());
    };

    // Keyboard shortcut for debug mode
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'd' || e.key === 'D') {
                setDebugMode(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    // Auto-play audio on mount
    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(() => {
                // Browser blocked autoplay, user needs to interact
            });
        }
    }, []);

    // Update audio playback rate when audioSpeed changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = audioSpeed;
        }
    }, [audioSpeed]);

    // Sync play/pause state with audio
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.playbackRate = audioSpeed;
                audioRef.current.play().catch(() => { });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    // Auto-advance scenes (duration scaled by animation speed)
    useEffect(() => {
        if (!isPlaying) return;

        const duration = BASE_DURATIONS[currentScene] / animSpeed;
        const timer = setTimeout(() => {
            if (currentScene < SCENES.length - 1) {
                setCurrentScene(s => s + 1);
            }
        }, duration);

        return () => clearTimeout(timer);
    }, [currentScene, isPlaying, animSpeed]);

    // Handle reset
    const handleReset = () => {
        setCurrentScene(0);
        setIsPlaying(true);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(() => { });
        }
    };

    const CurrentSceneComponent = SCENES[currentScene];

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
            <div className="shorts-container">
                <CurrentSceneComponent speed={animSpeed} />

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 z-30">
                    <div
                        className="h-full bg-white transition-all duration-300"
                        style={{ width: `${((currentScene + 1) / SCENES.length) * 100}%` }}
                    />
                </div>

                {/* Scene Indicator */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {SCENES.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentScene ? 'bg-white scale-150' :
                                    i < currentScene ? 'bg-gray-500' : 'bg-gray-700'
                                }`}
                        />
                    ))}
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

            {/* Single Audio File */}
            <audio ref={audioRef} src="/audio/narration.mp3" />
        </div>
    );
}

export default App;
