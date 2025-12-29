import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Part 1 Scenes
import Part1_Scene1 from './scenes/Part1_Scene1';
import Part1_Scene2 from './scenes/Part1_Scene2';
import Part1_Scene3 from './scenes/Part1_Scene3';
import Part1_Scene4 from './scenes/Part1_Scene4';
import Part1_Scene5 from './scenes/Part1_Scene5';
import Part1_Scene6 from './scenes/Part1_Scene6';
import Part1_Scene7 from './scenes/Part1_Scene7';
import Part1_Scene8 from './scenes/Part1_Scene8';

// Part 2 Scenes
import Part2_Scene1 from './scenes/Part2_Scene1';
import Part2_Scene2 from './scenes/Part2_Scene2';
import Part2_Scene3 from './scenes/Part2_Scene3';
import Part2_Scene4 from './scenes/Part2_Scene4';
import Part2_Scene5 from './scenes/Part2_Scene5';
import Part2_Scene6 from './scenes/Part2_Scene6';
import Part2_Scene7 from './scenes/Part2_Scene7';
import Part2_Scene8 from './scenes/Part2_Scene8';
import Part2_Scene9 from './scenes/Part2_Scene9';
import Part2_Scene10 from './scenes/Part2_Scene10';

// Part 3 Scenes
import Part3_Scene1 from './scenes/Part3_Scene1';
import Part3_Scene2 from './scenes/Part3_Scene2';
import Part3_Scene3 from './scenes/Part3_Scene3';
import Part3_Scene4 from './scenes/Part3_Scene4';
import Part3_Scene5 from './scenes/Part3_Scene5';
import Part3_Scene6 from './scenes/Part3_Scene6';
import Part3_Scene7 from './scenes/Part3_Scene7';
import Part3_Scene8 from './scenes/Part3_Scene8';
import Part3_Scene9 from './scenes/Part3_Scene9';

// Part 4 Scenes
import Part4_Scene1 from './scenes/Part4_Scene1';
import Part4_Scene2 from './scenes/Part4_Scene2';
import Part4_Scene3 from './scenes/Part4_Scene3';
import Part4_Scene4 from './scenes/Part4_Scene4';
import Part4_Scene5 from './scenes/Part4_Scene5';
import Part4_Scene6 from './scenes/Part4_Scene6';
import Part4_Scene7 from './scenes/Part4_Scene7';
import Part4_Scene8 from './scenes/Part4_Scene8';
import Part4_Scene9 from './scenes/Part4_Scene9';
import Part4_Scene10 from './scenes/Part4_Scene10';
import Part4_Scene11 from './scenes/Part4_Scene11';

// Part 5 Scenes
import Part5_Scene1 from './scenes/Part5_Scene1';
import Part5_Scene2 from './scenes/Part5_Scene2';
import Part5_Scene3 from './scenes/Part5_Scene3';
import Part5_Scene4 from './scenes/Part5_Scene4';

const SCENES = [
  // Part 1: Memory Wall (8)
  { component: Part1_Scene1, title: "The Luxury Car", part: 1, audio: "part1-scene1.mp3" },
  { component: Part1_Scene2, title: "The Wait", part: 1, audio: "part1-scene2.mp3" },
  { component: Part1_Scene3, title: "Doing Nothing", part: 1, audio: "part1-scene3.mp3" },
  { component: Part1_Scene4, title: "The Flaw", part: 1, audio: "part1-scene4.mp3" },
  { component: Part1_Scene5, title: "Ferrari vs Stirrer", part: 1, audio: "part1-scene5.mp3" },
  { component: Part1_Scene6, title: "Physics", part: 1, audio: "part1-scene6.mp3" },
  { component: Part1_Scene7, title: "The Problem", part: 1, audio: "part1-scene7.mp3" },
  { component: Part1_Scene8, title: "The Cheat", part: 1, audio: "part1-scene8.mp3" },
  // Part 2: KV Caching (10)
  { component: Part2_Scene1, title: "The Tragedy", part: 2, audio: "part2-scene1.mp3" },
  { component: Part2_Scene2, title: "Reading the Book", part: 2, audio: "part2-scene2.mp3" },
  { component: Part2_Scene3, title: "Naive Transformer", part: 2, audio: "part2-scene3.mp3" },
  { component: Part2_Scene4, title: "Redundancy", part: 2, audio: "part2-scene4.mp3" },
  { component: Part2_Scene5, title: "The Realization", part: 2, audio: "part2-scene5.mp3" },
  { component: Part2_Scene6, title: "KV Caching", part: 2, audio: "part2-scene6.mp3" },
  { component: Part2_Scene7, title: "Freezing", part: 2, audio: "part2-scene7.mp3" },
  { component: Part2_Scene8, title: "Glancing", part: 2, audio: "part2-scene8.mp3" },
  { component: Part2_Scene9, title: "Linear Breeze", part: 2, audio: "part2-scene9.mp3" },
  { component: Part2_Scene10, title: "New Problem", part: 2, audio: "part2-scene10.mp3" },
  // Part 3: Continuous Batching (9)
  { component: Part3_Scene1, title: "Traffic Jam", part: 3, audio: "part3-scene1.mp3" },
  { component: Part3_Scene2, title: "Static Batching", part: 3, audio: "part3-scene2.mp3" },
  { component: Part3_Scene3, title: "The Disparity", part: 3, audio: "part3-scene3.mp3" },
  { component: Part3_Scene4, title: "Wasted Cycles", part: 3, audio: "part3-scene4.mp3" },
  { component: Part3_Scene5, title: "Orca", part: 3, audio: "part3-scene5.mp3" },
  { component: Part3_Scene6, title: "Continuous Batching", part: 3, audio: "part3-scene6.mp3" },
  { component: Part3_Scene7, title: "The Slot In", part: 3, audio: "part3-scene7.mp3" },
  { component: Part3_Scene8, title: "The Result", part: 3, audio: "part3-scene8.mp3" },
  { component: Part3_Scene9, title: "Final Trick", part: 3, audio: "part3-scene9.mp3" },
  // Part 4: Speculative Decoding (11)
  { component: Part4_Scene1, title: "Still Limited", part: 4, audio: "part4-scene1.mp3" },
  { component: Part4_Scene2, title: "Heavy Model", part: 4, audio: "part4-scene2.mp3" },
  { component: Part4_Scene3, title: "Counterintuitive", part: 4, audio: "part4-scene3.mp3" },
  { component: Part4_Scene4, title: "Parallelism", part: 4, audio: "part4-scene4.mp3" },
  { component: Part4_Scene5, title: "The Gamble", part: 4, audio: "part4-scene5.mp3" },
  { component: Part4_Scene6, title: "The Intern", part: 4, audio: "part4-scene6.mp3" },
  { component: Part4_Scene7, title: "The Sprint", part: 4, audio: "part4-scene7.mp3" },
  { component: Part4_Scene8, title: "The Proofread", part: 4, audio: "part4-scene8.mp3" },
  { component: Part4_Scene9, title: "Approval", part: 4, audio: "part4-scene9.mp3" },
  { component: Part4_Scene10, title: "Ghostwriter", part: 4, audio: "part4-scene10.mp3" },
  { component: Part4_Scene11, title: "Doubled Speed", part: 4, audio: "part4-scene11.mp3" },
  // Part 5: Conclusion (4)
  { component: Part5_Scene1, title: "Recap", part: 5, audio: "part5-scene1.mp3" },
  { component: Part5_Scene2, title: "Architecture", part: 5, audio: "part5-scene2.mp3" },
  { component: Part5_Scene3, title: "Survival", part: 5, audio: "part5-scene3.mp3" },
  { component: Part5_Scene4, title: "Shattering", part: 5, audio: "part5-scene4.mp3" },
];

function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Audio Ref
  const audioRef = useRef(new Audio());

  const CurrentSceneComponent = SCENES[currentScene].component;

  // Handle Audio Playback
  useEffect(() => {
    const audio = audioRef.current;
    const audioPath = `/audio/${SCENES[currentScene].audio}`;

    audio.src = audioPath;
    audio.volume = isMuted ? 0 : 1;

    if (isPlaying) {
      audio.play().catch(err => console.error("Audio play failed:", err));
    }

    const handleEnded = () => {
      // Auto-advance
      if (currentScene < SCENES.length - 1) {
        setCurrentScene(curr => curr + 1);
      } else {
        setIsPlaying(false); // Stop at end
      }
    };

    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [currentScene, isPlaying]); // Re-run when scene changes or play state changes

  // Handle Mute Toggle
  useEffect(() => {
    audioRef.current.volume = isMuted ? 0 : 1;
  }, [isMuted]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') setCurrentScene(s => Math.min(s + 1, SCENES.length - 1));
      if (e.key === 'ArrowLeft') setCurrentScene(s => Math.max(s - 1, 0));
      if (e.key === ' ') {
        setIsPlaying(p => !p); // Toggle play/pause
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Auto-hide controls
  useEffect(() => {
    let timer;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowControls(false), 3000);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => { window.removeEventListener('mousemove', handleMouseMove); clearTimeout(timer); };
  }, []);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="w-screen h-screen bg-bg-main overflow-hidden relative">

      {/* Start Button Overlay (if not playing) */}
      {!isPlaying && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={togglePlay}>
          <motion.div
            className="bg-primary text-black p-8 rounded-full cursor-pointer shadow-[0_0_50px_rgba(16,163,127,0.5)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play size={48} fill="black" />
          </motion.div>
          <div className="absolute mt-32 text-white font-bold text-xl animate-pulse">
            Click or Press Space to Start
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={currentScene} className="w-full h-full"
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
          <CurrentSceneComponent />
        </motion.div>
      </AnimatePresence>

      {/* Controls Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-auto"
        animate={{ opacity: showControls || !isPlaying ? 1 : 0 }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Progress Segment Bar */}
          <div className="flex gap-0.5 mb-4">
            {SCENES.map((_, i) => (
              <button key={i} onClick={() => setCurrentScene(i)}
                className={`flex-1 h-1.5 rounded-full transition-all ${i === currentScene ? 'bg-primary' : i < currentScene ? 'bg-primary/40' : 'bg-gray-700'}`} />
            ))}
          </div>

          <div className="flex justify-between items-center text-white">
            <div>
              <span className="text-primary font-mono text-sm uppercase">Part {SCENES[currentScene].part}</span>
              <span className="text-gray-500 mx-2">|</span>
              <span className="font-bold">{SCENES[currentScene].title}</span>
              <span className="text-gray-500 ml-4">{currentScene + 1}/{SCENES.length}</span>
            </div>

            <div className="flex gap-3 items-center">
              {/* Mute Toggle */}
              <button onClick={toggleMute} className="p-3 hover:text-primary transition-colors">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              {/* Nav Controls */}
              <button onClick={() => setCurrentScene(s => Math.max(s - 1, 0))} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700"><ChevronLeft size={24} /></button>

              <button onClick={togglePlay} className="p-3 bg-primary rounded-full hover:bg-primary/80 mx-1">
                {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" />}
              </button>

              <button onClick={() => setCurrentScene(s => Math.min(s + 1, SCENES.length - 1))} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700"><ChevronRight size={24} /></button>

              <button onClick={() => setCurrentScene(0)} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 ml-4"><RotateCcw size={20} /></button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
