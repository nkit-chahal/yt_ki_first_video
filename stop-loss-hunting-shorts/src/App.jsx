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
import Scene10 from './scenes/Scene10';

const SCENES = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10];

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
    '/audio/scene_9.mp3',
    '/audio/scene_10.mp3'
];

// Fallback durations in milliseconds
const SCENE_DURATIONS = [
    5000, 3000, 5000, 4000, 4000, 4000, 4000, 4000, 4000, 4000
];

function App() {
    const [hasStarted, setHasStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [currentScene, setCurrentScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const fallbackTimerRef = useRef(null);

    // Keyboard trigger to start
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
            setTimeout(() => window.location.reload(), 2000);
        }
    }, [currentScene, isPlaying, hasStarted]);

    const advanceScene = () => {
        if (currentScene < SCENES.length - 1) {
            setCurrentScene(s => s + 1);
        } else {
            setIsPlaying(false);
        }
    };

    const clearFallbackTimer = () => {
        if (fallbackTimerRef.current) {
            clearTimeout(fallbackTimerRef.current);
            fallbackTimerRef.current = null;
        }
    };

    const startFallbackTimer = () => {
        clearFallbackTimer();
        if (isPlaying && currentScene < SCENES.length) {
            fallbackTimerRef.current = setTimeout(advanceScene, SCENE_DURATIONS[currentScene]);
        }
    };

    // Play audio when scene changes
    useEffect(() => {
        clearFallbackTimer();
        if (audioRef.current && isPlaying) {
            audioRef.current.src = `${AUDIO_FILES[currentScene]}?t=${Date.now()}`;
            audioRef.current.play()
                .then(() => console.log('Playing:', AUDIO_FILES[currentScene]))
                .catch(() => startFallbackTimer());
        }
        return () => clearFallbackTimer();
    }, [currentScene, isPlaying]);

    // Auto-advance when audio ends
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const handleEnded = () => advanceScene();
        const handleError = () => startFallbackTimer();
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);
        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('error', handleError);
        };
    }, [currentScene, isPlaying]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') {
                if (audioRef.current) audioRef.current.pause();
                clearFallbackTimer();
                if (currentScene < SCENES.length - 1) setCurrentScene(s => s + 1);
            }
            if (e.key === 'ArrowLeft') {
                if (audioRef.current) audioRef.current.pause();
                clearFallbackTimer();
                if (currentScene > 0) setCurrentScene(s => s - 1);
            }
            if (e.key === 'p' || e.key === 'P') {
                if (isPlaying && audioRef.current) audioRef.current.pause();
                setIsPlaying(p => !p);
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [currentScene, isPlaying]);

    const handleFirstClick = () => {
        if (audioRef.current && audioRef.current.paused && isPlaying) {
            audioRef.current.src = `${AUDIO_FILES[currentScene]}?t=${Date.now()}`;
            audioRef.current.play().catch(() => startFallbackTimer());
        }
    };

    const CurrentSceneComponent = SCENES[currentScene];

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden cursor-pointer" onClick={handleFirstClick}>
            {!hasStarted && countdown === null && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900">
                    <div className="text-3xl text-gray-500 font-mono">Press SPACE to start</div>
                </div>
            )}

            {countdown !== null && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
                    <motion.div key={countdown} className="text-[15rem] font-black text-white"
                        initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.3 }}>{countdown}</motion.div>
                </div>
            )}

            <div className="shorts-container">
                <motion.div key={currentScene} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }} className="absolute inset-0">
                    <CurrentSceneComponent />
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 z-30">
                    <div className="h-full bg-blue-500 transition-all duration-300"
                        style={{ width: `${((currentScene + 1) / SCENES.length) * 100}%` }} />
                </div>

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

            <audio ref={audioRef} />
        </div>
    );
}

export default App;
