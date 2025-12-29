import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHAPTERS } from './constants';
import Chapter1Visualizer from './chapters/Chapter1';
import Chapter2Visualizer from './chapters/Chapter2';
import Chapter3Visualizer from './chapters/Chapter3';
import Chapter4Visualizer from './chapters/Chapter4';
import Chapter5Visualizer from './chapters/Chapter5';
import Chapter6Visualizer from './chapters/Chapter6';
import Chapter7Visualizer from './chapters/Chapter7';
import Chapter8Visualizer from './chapters/Chapter8';
import Chapter9Visualizer from './chapters/Chapter9';
import Chapter10Visualizer from './chapters/Chapter10';
import Chapter11Visualizer from './chapters/Chapter11';
import Chapter12Visualizer from './chapters/Chapter12';
import { CHAPTER_1_SCENES } from './chapters/Chapter1/scenes';
import { CHAPTER_2_SCENES } from './chapters/Chapter2/scenes';
import { CHAPTER_3_SCENES } from './chapters/Chapter3/scenes';
import { CHAPTER_4_SCENES } from './chapters/Chapter4/scenes';
import { CHAPTER_5_SCENES } from './chapters/Chapter5/scenes';
import { CHAPTER_6_SCENES } from './chapters/Chapter6/scenes';
import { CHAPTER_7_SCENES } from './chapters/Chapter7/scenes';
import { CHAPTER_8_SCENES } from './chapters/Chapter8/scenes';
import { CHAPTER_9_SCENES } from './chapters/Chapter9/scenes';
import { CHAPTER_10_SCENES } from './chapters/Chapter10/scenes';
import { CHAPTER_11_SCENES } from './chapters/Chapter11/scenes';
import { CHAPTER_12_SCENES } from './chapters/Chapter12/scenes';

import useSFX from './hooks/useSFX';
import ChapterProgress from './components/ChapterProgress';

function App() {
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio());
    const { play: playSFX } = useSFX();

    const currentChapter = CHAPTERS[currentChapterIndex];

    // Get sub-scenes for current chapter
    const getScenesForChapter = (index) => {
        if (index === 0) return CHAPTER_1_SCENES;
        if (index === 1) return CHAPTER_2_SCENES;
        if (index === 2) return CHAPTER_3_SCENES;
        if (index === 3) return CHAPTER_4_SCENES;
        if (index === 4) return CHAPTER_5_SCENES;
        if (index === 5) return CHAPTER_6_SCENES;
        if (index === 6) return CHAPTER_7_SCENES;
        if (index === 7) return CHAPTER_8_SCENES;
        if (index === 8) return CHAPTER_9_SCENES;
        if (index === 9) return CHAPTER_10_SCENES;
        if (index === 10) return CHAPTER_11_SCENES;
        if (index === 11) return CHAPTER_12_SCENES;
        return [{ id: 'default', narration: 'Coming soon...' }];
    };

    const currentScenes = getScenesForChapter(currentChapterIndex);
    const currentScene = currentScenes[currentSceneIndex] || currentScenes[0]; // Fallback
    const totalScenes = currentScenes.length;

    // Navigation Functions
    const goToNextScene = () => {
        if (currentSceneIndex < totalScenes - 1) {
            setCurrentSceneIndex(prev => prev + 1);
            playSFX('click', 0.3); // Subtle click for scene change
        } else if (currentChapterIndex < CHAPTERS.length - 1) {
            // Move to next chapter
            setCurrentChapterIndex(prev => prev + 1);
            setCurrentSceneIndex(0);
            playSFX('whoosh', 0.4); // Whoosh for chapter change
        }
    };

    const goToPrevScene = () => {
        if (currentSceneIndex > 0) {
            setCurrentSceneIndex(prev => prev - 1);
            playSFX('click', 0.3);
        } else if (currentChapterIndex > 0) {
            // Move to previous chapter's last scene
            const prevChapterScenes = getScenesForChapter(currentChapterIndex - 1);
            setCurrentChapterIndex(prev => prev - 1);
            setCurrentSceneIndex(prevChapterScenes.length - 1);
            playSFX('whoosh', 0.4);
        }
    };

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case "ArrowRight":
                    goToNextScene();
                    break;
                case "ArrowLeft":
                    goToPrevScene();
                    break;
                case " ":
                case "Space":
                    e.preventDefault(); // Prevent scrolling
                    setIsPlaying(prev => !prev);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentChapterIndex, currentSceneIndex, isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;

        // Universal audio loading using scene ID
        const audioPath = `/audio/${currentScene.id}.mp3`;

        const loadAndPlay = async () => {
            try {
                console.log("Loading audio:", audioPath);

                // Reset handlers to prevent race conditions
                audio.onended = null;
                audio.onerror = null;

                audio.src = audioPath;
                await audio.load();

                // Set handler BEFORE playing
                audio.onended = () => {
                    console.log("Audio ended naturally -> Advancing");
                    goToNextScene();
                };

                audio.onerror = (e) => {
                    console.error("Audio failed to load:", audioPath, e);
                    // Optional: Auto-advance on error fallback? 
                    // For now, let's just log it so it doesn't skip rapidly if files are missing.
                };

                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            setIsPlaying(true); // Sync state to TRUE on successful auto-play
                        })
                        .catch(e => {
                            console.log("Autoplay blocked or file missing:", e);
                            setIsPlaying(false);
                        });
                }
            } catch (err) {
                console.error("Audio setup error:", err);
            }
        };

        loadAndPlay();

        return () => {
            audio.pause();
            audio.onended = null;
            audio.onerror = null;
        };
    }, [currentChapterIndex, currentSceneIndex]);

    // Manual play/pause toggle (Only responds to user toggles or end of scene)
    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            // Only play if not already playing to avoid promise interruption
            if (audio.paused) {
                audio.play().catch(() => { });
            }
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    // Render the correct visualizer based on chapter
    const renderVisualizer = () => {
        if (currentChapterIndex === 0) {
            return <Chapter1Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 1) {
            return <Chapter2Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 2) {
            return <Chapter3Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 3) {
            return <Chapter4Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 4) {
            return <Chapter5Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 5) {
            return <Chapter6Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 6) {
            return <Chapter7Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 7) {
            return <Chapter8Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 8) {
            return <Chapter9Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 9) {
            return <Chapter10Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 10) {
            return <Chapter11Visualizer sceneIndex={currentSceneIndex} />;
        }
        if (currentChapterIndex === 11) {
            return <Chapter12Visualizer sceneIndex={currentSceneIndex} />;
        }
        // Fallback for other chapters (placeholder)
        return (
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-6xl font-bold text-zinc-800 uppercase">{currentChapter.title}</h2>
                <p className="text-xl text-zinc-500 mt-4 font-hand">Coming Soon...</p>
            </div>
        );
    };

    return (
        <div className="video-container flex flex-col items-center justify-center relative select-none">
            {/* Visual Content Layer */}
            <div className="z-10 w-full h-full p-12 flex flex-col relative">

                {/* Header / Chapter & Scene Title (Top Left - Bigger) */}
                <motion.div
                    key={`title-${currentChapterIndex}-${currentSceneIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-12 left-12 font-hand text-4xl tracking-wide text-zinc-600 flex flex-col gap-2"
                >
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-zinc-800">Chapter {currentChapterIndex + 1}</span>
                        {/* <span className="text-zinc-400">|</span>
                        <span className="text-zinc-500">Scene {currentSceneIndex + 1}/{totalScenes}</span> */}
                    </div>
                </motion.div>

                {/* Top Right - Book Badge / Title (New useful element) */}
                <motion.div
                    className="absolute top-12 right-12 bg-white/40 backdrop-blur-sm border-2 border-zinc-200/50 px-8 py-4 rounded-2xl shadow-lg flex items-center gap-5"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <div className="text-5xl filter drop-shadow-sm">📚</div>
                    <div className="flex flex-col">
                        <span className="font-bold text-3xl text-zinc-800 leading-none tracking-tight">{currentChapter.title}</span>
                        <span className="text-xl text-zinc-600 font-hand leading-none mt-1">AI Engineering Summary</span>
                    </div>
                </motion.div>

                {/* Main Visualizer Area */}
                <div className="flex-1 flex items-center justify-center pb-32">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${currentChapterIndex}-${currentSceneIndex}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full flex items-center justify-center"
                        >
                            {renderVisualizer()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Narration Subtitle (Clean & Readable) */}
                {currentScene?.narration && (
                    <motion.div
                        key={`narration-${currentSceneIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md border-2 border-zinc-200 px-12 py-8 rounded-2xl max-w-6xl text-center shadow-xl z-40"
                    >
                        <motion.p
                            className="text-4xl font-hand font-bold text-zinc-800 leading-snug tracking-wide"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: (currentScene.duration || 5) / (currentScene.narration.split(" ").length || 1)
                                    }
                                }
                            }}
                            initial="hidden"
                            animate="visible"
                        >
                            {currentScene.narration.split(" ").map((word, i) => {
                                const cleanWord = word.replace(/\*/g, ""); // Remove markers for display if just simple bolding
                                const isHighlighted = word.includes("*");

                                return (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0.3, color: "#a1a1aa" }, // Zinc-400
                                            visible: { opacity: 1, color: isHighlighted ? "#d97706" : "#27272a" } // Zinc-800 or Amber-600
                                        }}
                                        className={`inline-block mr-2 ${isHighlighted ? "font-black" : ""}`}
                                    >
                                        {cleanWord}
                                    </motion.span>
                                );
                            })}
                        </motion.p>
                    </motion.div>
                )}

                {/* Progress Bar (Bottom Left - Moved & Scaled) */}
                <div className="absolute bottom-12 left-12 z-50 transform scale-110 origin-bottom-left">
                    <ChapterProgress
                        currentScene={currentSceneIndex}
                        totalScenes={totalScenes}
                        chapterIndex={currentChapterIndex}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
