import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, Play, Pause, Volume2, VolumeX } from 'lucide-react';

import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import Scene6 from './scenes/Scene6';

const SCENES = [
    { component: Scene1, title: "The Question", audio: "scene1.mp3" },
    { component: Scene2, title: "Contenders", audio: "scene2.mp3" },
    { component: Scene3, title: "The Race", audio: "scene3.mp3" },
    { component: Scene4, title: "Results", audio: "scene4.mp3" },
    { component: Scene5, title: "Plot Twist", audio: "scene5.mp3" },
    { component: Scene6, title: "Your Pick?", audio: "scene6.mp3" },
];

function App() {
    const [currentScene, setCurrentScene] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const audioRef = useRef(new Audio());
    const CurrentSceneComponent = SCENES[currentScene].component;

    // Handle Audio Playback
    useEffect(() => {
        const audio = audioRef.current;
        const audioPath = `/audio/${SCENES[currentScene].audio}`;

        // Only change src if it's different to avoid reloading same audio if we just paused
        // But here we switch scenes, so it is always different or we reset.
        // Actually, simple approach:
        audio.src = audioPath;
        audio.volume = isMuted ? 0 : 1;

        if (isPlaying) {
            audio.play().catch(err => console.error("Audio play failed:", err));
        }

        const handleEnded = () => {
            if (currentScene < SCENES.length - 1) {
                setCurrentScene(curr => curr + 1);
            } else {
                setIsPlaying(false);
            }
        };

        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.pause();
        };
    }, [currentScene]);

    // Watch isPlaying to toggle play/pause on current audio
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error("Play error", e));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // Volume control
    useEffect(() => {
        audioRef.current.volume = isMuted ? 0 : 1;
    }, [isMuted]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') setCurrentScene(s => Math.min(s + 1, SCENES.length - 1));
            if (e.key === 'ArrowLeft') setCurrentScene(s => Math.max(s - 1, 0));
            if (e.key === ' ') {
                setIsPlaying(p => !p);
                e.preventDefault();
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <div className="w-screen h-screen bg-black overflow-hidden relative font-sans">
            {/* Top Right Playback Control */}
            <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-3 bg-black/40 backdrop-blur-md text-white rounded-full hover:bg-black/60 transition-colors"
                >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>

                <button
                    onClick={togglePlay}
                    className="p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 shadow-lg shadow-yellow-400/20 transition-transform active:scale-95"
                >
                    {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" />}
                </button>
            </div>

            {/* Start Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={togglePlay}>
                    <motion.div
                        className="bg-yellow-400 text-black p-6 rounded-full cursor-pointer shadow-[0_0_30px_rgba(250,204,21,0.5)]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Play size={40} fill="black" />
                    </motion.div>
                </div>
            )}

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentScene}
                    className="w-full h-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    <CurrentSceneComponent />
                </motion.div>
            </AnimatePresence>

            {/* Bottom Playback Controls removed for clean recording */}
        </div>
    );
}

export default App;
