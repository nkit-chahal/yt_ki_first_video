import React, { useState, useEffect, useRef } from 'react';
import Scene1 from './components/Scene1';
import Scene2 from './components/Scene2';
import Scene3 from './components/Scene3';
import Captions from './components/Captions';

function App() {
  const [activeScene, setActiveScene] = useState(0); // 0 = Ready/Start Screen
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startSequence = () => {
    setActiveScene(1);
    setIsPlaying(true);
  };

  const handleAudioEnded = () => {
    if (activeScene < 3) {
      setActiveScene(prev => prev + 1);
    } else {
      setIsPlaying(false); // Finished
    }
  };

  // Effect to manage audio source and play state
  useEffect(() => {
    if (activeScene > 0 && activeScene <= 3) {
      if (audioRef.current) {
        audioRef.current.src = `/audio/scene${activeScene}.mp3`;
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      }
    }
  }, [activeScene]);

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center font-comic">

      {/* Hidden Global Audio Element */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        className="hidden"
      />

      {/* 9:16 Container */}
      <div
        className="relative w-full max-w-md aspect-[9/16] overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
          boxShadow: '0 0 50px rgba(0,0,0,0.5)'
        }}
      >
        {/* Helper "Click to Start" Overlay (needed for Audio Autoplay policies) */}
        {activeScene === 0 && (
          <div
            onClick={startSequence}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 cursor-pointer hover:bg-black/70 transition-colors"
          >
            <div className="text-6xl mb-4 animate-bounce">▶️</div>
            <h1 className="text-2xl font-bold text-white text-center px-4">Click to Start<br /><span className="text-sm text-gray-400 font-normal">(Audio & SFX Animation)</span></h1>
          </div>
        )}

        {/* Captions Layer */}
        {activeScene > 0 && <Captions scene={activeScene} />}

        {/* Scene Container with Transition */}
        {activeScene > 0 && (
          <div key={activeScene} className="absolute inset-0 w-full h-full animate-slide-up">
            {activeScene === 1 && <Scene1 />}
            {activeScene === 2 && <Scene2 />}
            {activeScene === 3 && <Scene3 />}
          </div>
        )}

        {/* Progress Bar */}
        {activeScene > 0 && (
          <div className="absolute top-0 left-0 h-1 bg-yellow-400 z-50 transition-all duration-300"
            style={{ width: activeScene === 1 ? '33%' : activeScene === 2 ? '66%' : '100%' }}>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
