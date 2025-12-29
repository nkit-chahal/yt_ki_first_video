import React, { useState, useEffect, useRef } from 'react';
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import Scene6 from './scenes/Scene6';
import Scene7 from './scenes/Scene7';
import DebugPanel from './components/DebugPanel';

const SCENES = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7];

// Add cache busting to prevent browser caching of audio files
const TIMESTAMP = Date.now();
const AUDIO_FILES = [
    `/audio/scene1.mp3?t=${TIMESTAMP}`,
    `/audio/scene2.mp3?t=${TIMESTAMP}`,
    `/audio/scene3.mp3?t=${TIMESTAMP}`,
    `/audio/scene4.mp3?t=${TIMESTAMP}`,
    `/audio/scene5.mp3?t=${TIMESTAMP}`,
    `/audio/scene6.mp3?t=${TIMESTAMP}`,
    `/audio/scene7.mp3?t=${TIMESTAMP}`,
];

// Fallback duration in seconds if audio fails to load
// Approx durations: 5s, 6s, 6s, 5s, 6s, 6s, 5s
const SCENE_DURATIONS = [5, 6, 6, 5, 6, 6, 5];

const App = () => {
    const [currentScene, setCurrentScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [animationSpeed, setAnimationSpeed] = useState(() => parseFloat(localStorage.getItem('chatgpt_anim_speed')) || 1);
    const [audioSpeed, setAudioSpeed] = useState(() => parseFloat(localStorage.getItem('chatgpt_audio_speed')) || 1);
    const [showDebug, setShowDebug] = useState(false);
    const [audioAvailable, setAudioAvailable] = useState(true);
    const audioRef = useRef(null);
    const fallbackTimerRef = useRef(null);

    const CurrentSceneComponent = SCENES[currentScene];

    // Initialize audio
    useEffect(() => {
        audioRef.current = new Audio(AUDIO_FILES[0]);
        audioRef.current.playbackRate = audioSpeed;

        // Error handling for audio
        audioRef.current.onerror = () => {
            console.warn(`Audio for scene ${currentScene + 1} not found. Using fallback timer.`);
            setAudioAvailable(false);
        };

        audioRef.current.oncanplaythrough = () => {
            setAudioAvailable(true);
        };

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // Update audio source when scene changes
    useEffect(() => {
        if (!audioRef.current) return;

        const loadAudio = async () => {
            try {
                audioRef.current.src = AUDIO_FILES[currentScene];
                audioRef.current.playbackRate = audioSpeed;

                if (isPlaying) {
                    const playPromise = audioRef.current.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.warn("Audio play failed:", error);
                            setAudioAvailable(false);
                        });
                    }
                }
            } catch (e) {
                console.warn("Audio setup failed:", e);
                setAudioAvailable(false);
            }
        };

        loadAudio();

        // Fallback timer logic
        if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);

        // If audio is missing or we want to force advance, use timeout
        const duration = SCENE_DURATIONS[currentScene] * 1000 / audioSpeed; // Adjust for speed
        const buffer = 1000; // Extra second buffer

        // Always set a "maximum" timer to prevent getting stuck
        fallbackTimerRef.current = setTimeout(() => {
            console.log(`Fallback timer triggered for Scene ${currentScene + 1}`);
            handleSceneComplete();
        }, duration + buffer + 2000); // Generous buffer

        return () => {
            if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
        };

    }, [currentScene]);

    // Update playback rate when speed changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = audioSpeed;
        }
        localStorage.setItem('chatgpt_audio_speed', audioSpeed);
        localStorage.setItem('chatgpt_anim_speed', animationSpeed);
    }, [audioSpeed, animationSpeed]);

    // Auto-advance logic
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => {
            console.log("Audio ended naturally");
            handleSceneComplete();
        };

        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, [currentScene]);

    const handleSceneComplete = () => {
        if (currentScene < SCENES.length - 1) {
            setCurrentScene(prev => prev + 1);
        } else {
            setIsPlaying(false); // Stop at end
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => {
                console.warn("Play failed (user interaction needed?):", e);
                setAudioAvailable(false); // Trigger fallback
            });
        }
        setIsPlaying(!isPlaying);
    };

    const reset = () => {
        setCurrentScene(0);
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const [hasStarted, setHasStarted] = useState(false);

    const handleStart = () => {
        setHasStarted(true);
        setIsPlaying(true);
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.error("Play failed", e));
        }
    };

    return (
        <div className="shorts-container bg-bg-main relative w-full h-full">
            {!hasStarted && (
                <div
                    className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
                    onClick={handleStart}
                >
                    <div className="text-center">
                        <h1 className="text-6xl mb-8">🚀</h1>
                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-2xl hover:scale-105 transition-transform">
                            Click to Start
                        </button>
                    </div>
                </div>
            )}

            {hasStarted && <CurrentSceneComponent speed={animationSpeed} />}

            {/* Controls Overlay (Hidden in recording if needed) */}
            <div className="absolute top-4 right-4 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={() => setShowDebug(!showDebug)}
                    className="bg-gray-800 text-white p-2 rounded-full text-xs"
                >
                    ⚙️
                </button>
            </div>

            {showDebug && (
                <DebugPanel
                    isPlaying={isPlaying}
                    togglePlay={togglePlay}
                    currentScene={currentScene}
                    totalScenes={SCENES.length}
                    reset={reset}
                    animationSpeed={animationSpeed}
                    setAnimationSpeed={setAnimationSpeed}
                    audioSpeed={audioSpeed}
                    setAudioSpeed={setAudioSpeed}
                    scenes={SCENES}
                    setCurrentScene={setCurrentScene}
                    audioAvailable={audioAvailable}
                />
            )}
        </div>
    );
};

export default App;
