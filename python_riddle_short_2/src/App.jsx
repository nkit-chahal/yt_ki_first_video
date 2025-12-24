import React, { useState, useEffect, useRef } from 'react';
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import DebugPanel from './components/DebugPanel';
import { Play, Settings, Video } from 'lucide-react';

const SCENES = [Scene1, Scene2, Scene3, Scene4, Scene5];

// Audio files for each scene
const AUDIO_FILES = [
    '/audio/ElevenLabs_2025-12-24T08_05_32_Mark - Casual and Conversational_pvc_sp102_s37_sb75_se0_b_m2.mp3',
    '/audio/ElevenLabs_2025-12-24T08_05_51_Mark - Casual and Conversational_pvc_sp102_s37_sb75_se0_b_m2.mp3',
    '/audio/ElevenLabs_2025-12-24T08_06_09_Mark - Casual and Conversational_pvc_sp102_s37_sb75_se0_b_m2.mp3',
    '/audio/ElevenLabs_2025-12-24T08_07_10_Mark - Casual and Conversational_pvc_sp102_s37_sb75_se0_b_m2.mp3',
    '/audio/ElevenLabs_2025-12-24T08_07_27_Mark - Casual and Conversational_pvc_sp102_s37_sb75_se0_b_m2.mp3',
];

// Load saved speeds from localStorage
const getSavedSpeed = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? parseFloat(saved) : defaultValue;
};

function App() {
    // App States
    const [hasStarted, setHasStarted] = useState(false); // New start screen state
    const [currentScene, setCurrentScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false); // Start paused until user clicks Start
    const [animSpeed, setAnimSpeed] = useState(() => getSavedSpeed('riddle_anim_speed', 1.0));
    const [audioSpeed, setAudioSpeed] = useState(() => getSavedSpeed('riddle_audio_speed', 1.0));
    const [debugMode, setDebugMode] = useState(true);
    const audioRef = useRef(null);
    const sfxRef = useRef(null);

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

    // Scene Transition Logic
    useEffect(() => {
        // Only run transitions if started and playing
        if (!hasStarted || !isPlaying) return;

        if (audioRef.current) {
            audioRef.current.src = AUDIO_FILES[currentScene];
            audioRef.current.playbackRate = audioSpeed;
            audioRef.current.play().catch(console.error);
        }
    }, [currentScene, hasStarted, isPlaying]); // Removed audioSpeed dependency to avoid seeking restart

    // Audio Speed Updates
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = audioSpeed;
        }
    }, [audioSpeed]);

    // SFX Logic (Clock Ticking for Scene 2)
    useEffect(() => {
        const sfx = sfxRef.current;
        if (!sfx) return;

        if (currentScene === 1 && isPlaying && hasStarted) {
            sfx.currentTime = 0;
            sfx.volume = 0.5;
            sfx.loop = true;
            sfx.play().catch(() => { });
        } else {
            sfx.pause();
            sfx.currentTime = 0;
        }
    }, [currentScene, isPlaying, hasStarted]);

    // Auto-advance Logic
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Special case: Scene 2 (index 1) needs fixed 12s duration for reading time
        if (currentScene === 1) {
            const timer = setTimeout(() => {
                if (isPlaying && hasStarted) {
                    setCurrentScene(s => s + 1);
                }
            }, 12000); // 12 seconds
            return () => clearTimeout(timer);
        }

        // Standard behavior: Advance when audio ends
        const handleEnded = () => {
            if (currentScene < SCENES.length - 1) {
                setCurrentScene(s => s + 1);
            }
        };

        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, [currentScene, isPlaying, hasStarted]);

    // Play/Pause Control handled by isPlaying state mainly via Start Screen

    // Handle Reset
    const handleReset = () => {
        setCurrentScene(0);
        setIsPlaying(true);
    };

    // Start Screen Logic
    const handleStart = (mode) => {
        if (mode === 'debug') {
            setDebugMode(true);
        } else {
            setDebugMode(false);
        }
        setHasStarted(true);
        setIsPlaying(true);
    };

    if (!hasStarted) {
        return (
            <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-white">
                <div className="flex flex-col gap-8 items-center p-12 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Python Riddle Short #2
                    </h1>

                    <div className="flex gap-6">
                        {/* Recording Mode Button */}
                        <button
                            onClick={() => handleStart('record')}
                            className="flex flex-col items-center gap-3 bg-red-500 hover:bg-red-600 transition-all p-6 rounded-2xl w-48 group"
                        >
                            <Video size={48} className="group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-xl">Recording</span>
                            <span className="text-xs opacity-70">Clean UI • Auto-play</span>
                        </button>

                        {/* Debug Mode Button */}
                        <button
                            onClick={() => handleStart('debug')}
                            className="flex flex-col items-center gap-3 bg-gray-700 hover:bg-gray-600 transition-all p-6 rounded-2xl w-48 group border-2 border-gray-600"
                        >
                            <Settings size={48} className="group-hover:rotate-90 transition-transform duration-500" />
                            <span className="font-bold text-xl">Debug</span>
                            <span className="text-xs opacity-70">Controls • Speed UI</span>
                        </button>
                    </div>

                    <p className="text-gray-400 text-sm max-w-xs text-center">
                        Clicking start ensures audio sync.
                    </p>
                </div>
            </div>
        );
    }

    const CurrentSceneComponent = SCENES[currentScene];

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden relative">
            <div className="shorts-container relative">
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

                {/* Debug Panel - Only visible in Debug Mode */}
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
            {/* SFX Audio */}
            <audio ref={sfxRef} src="/sfx/clock-ticking-down-376897.mp3" />
        </div>
    );
}

export default App;
