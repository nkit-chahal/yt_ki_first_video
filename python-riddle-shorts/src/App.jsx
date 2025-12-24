import React, { useState, useEffect, useRef } from 'react';
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import DebugPanel from './components/DebugPanel';

const SCENES = [Scene1, Scene2, Scene3, Scene4, Scene5];

// Audio files for each scene (scene5 uses scene4 audio or can be silent)
const AUDIO_FILES = [
    '/audio/scene1.mp3',  // "Wait. Before I show the answer..."
    '/audio/scene2.mp3',  // "What does this Python code print?"
    '/audio/scene3.mp3',  // "3... 2... 1... Time's up!"
    '/audio/scene4.mp3',  // "The answer is..." + "Were you right? Drop your answer..."
    '/audio/scene5.mp3',  // CTA scene audio
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
    const audioRef = useRef(null);

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
            // Ignore if typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            if (e.key === 'd' || e.key === 'D') {
                e.preventDefault();
                setDebugMode(prev => !prev);
            }
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    // Play audio when scene changes
    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.src = AUDIO_FILES[currentScene];
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(() => { });
        }
    }, [currentScene, isPlaying]);

    // Auto-play on first mount
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = AUDIO_FILES[0];
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(() => {
                // Browser blocked autoplay - need user click
            });
        }
    }, []);

    // Update playback rate when audioSpeed changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = audioSpeed;
        }
    }, [audioSpeed]);

    // Auto-advance to next scene when audio ends
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => {
            if (currentScene < SCENES.length - 1) {
                setCurrentScene(s => s + 1);
            }
        };

        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, [currentScene]);

    // Play/pause control
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(() => { });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    // Handle reset
    const handleReset = () => {
        setCurrentScene(0);
        setIsPlaying(true);
        if (audioRef.current) {
            audioRef.current.src = AUDIO_FILES[0];
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(() => { });
        }
    };

    // Handle first click to start audio (browser autoplay policy workaround)
    const handleFirstClick = () => {
        if (audioRef.current && audioRef.current.paused) {
            audioRef.current.src = AUDIO_FILES[currentScene];
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(() => { });
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

                {/* Scene Indicator */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {SCENES.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentScene ? 'bg-primary scale-150' :
                                i < currentScene ? 'bg-gray-500' : 'bg-gray-400'
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

            {/* Per-Scene Audio */}
            <audio ref={audioRef} />
        </div>
    );
}

export default App;
