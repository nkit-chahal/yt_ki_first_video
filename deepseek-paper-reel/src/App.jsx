import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, Play, Pause, Volume2, VolumeX, Video } from 'lucide-react';

import Scene0 from './scenes/Scene0';
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import Scene6 from './scenes/Scene6';
import Scene7 from './scenes/Scene7';

const SCENES = [
    { component: Scene0, title: "Hook", audio: "scene0.mp3" },
    { component: Scene1, title: "The Fix", audio: "scene1.mp3" },
    { component: Scene2, title: "Dataset", audio: "scene2.mp3" },
    { component: Scene3, title: "Pipeline", audio: "scene3.mp3" },
    { component: Scene4, title: "Coherence", audio: "scene4.mp3" },
    { component: Scene5, title: "Results", audio: "scene5.mp3" },
    { component: Scene6, title: "Cheat Test", audio: "scene6.mp3" },
    { component: Scene7, title: "CTA", audio: "scene7.mp3" },
];

function App() {
    const [currentScene, setCurrentScene] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(() => {
        const saved = localStorage.getItem('playbackSpeed');
        return saved ? parseFloat(saved) : 1;
    });
    const [showControls, setShowControls] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);

    // Audio object
    const audioRef = useRef(new Audio());
    const CurrentSceneComponent = SCENES[currentScene].component;

    // Handle Audio Playback
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const audioPath = `/audio/${SCENES[currentScene].audio}`;
        audio.src = audioPath;
        audio.volume = isMuted ? 0 : 1;

        if (isPlaying) {
            audio.playbackRate = playbackSpeed;
            audio.play().catch(err => console.error("Audio play failed:", err));
        }

        const handleEnded = () => {
            if (currentScene < SCENES.length - 1) {
                setCurrentScene(curr => curr + 1);
            } else {
                setIsPlaying(false);
                // Stop recording if active
                if (isRecording && mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
                    mediaRecorderRef.current.stop();
                    setIsRecording(false);
                }
            }
        };

        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.pause();
        };
    }, [currentScene, isRecording]);

    // Watch isPlaying to toggle play/pause on current audio
    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.playbackRate = playbackSpeed;
            audioRef.current.play().catch(e => {
                // Ignore error if src is empty
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, playbackSpeed]);

    // Volume control
    useEffect(() => {
        audioRef.current.volume = isMuted ? 0 : 1;
    }, [isMuted]);

    // Save speed preference
    useEffect(() => {
        localStorage.setItem('playbackSpeed', playbackSpeed);
    }, [playbackSpeed]);

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

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: { frameRate: 30 },
                audio: true, // Capture system audio
                preferCurrentTab: true
            });

            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = '2.5-years-in-class-reel.webm';
                a.click();
                URL.revokeObjectURL(url);
                stream.getTracks().forEach(track => track.stop()); // Stop sharing
            };

            mediaRecorder.start();
            setIsRecording(true);

            // Reset to start and play
            setCurrentScene(0);
            setIsPlaying(true);

        } catch (err) {
            console.error("Error starting recording:", err);
        }
    };

    return (
        <div className="w-screen h-screen bg-black overflow-hidden relative font-sans">
            {/* Top Right Playback Control */}
            <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
                <button
                    onClick={startRecording}
                    className={`p-3 ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-black/40'} backdrop-blur-md text-white rounded-full hover:bg-red-600 transition-colors`}
                    title="Record Reel"
                >
                    <Video size={24} />
                </button>

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

                {/* Speed Control Slider */}
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <span className="text-white text-xs font-bold w-8 text-right">{playbackSpeed}x</span>
                    <input
                        type="range"
                        min="0.1"
                        max="2"
                        step="0.1"
                        value={playbackSpeed}
                        onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                        className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                    />
                </div>
            </div>

            {/* Start Overlay */}
            {!isPlaying && !isRecording && (
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
                    <CurrentSceneComponent playbackSpeed={playbackSpeed} />
                </motion.div>
            </AnimatePresence>

            {/* Scene Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                {SCENES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentScene(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === currentScene
                            ? 'bg-yellow-400 w-6'
                            : 'bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
