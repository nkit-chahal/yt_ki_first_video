import React, { useState, useEffect, useRef } from 'react';
import Intro from './components/scenes/Intro';
import BasicOps from './components/scenes/BasicOps';
import Structures from './components/scenes/Structures';
import Caching from './components/scenes/Caching';
import Outro from './components/scenes/Outro';
import PubSub from './components/scenes/PubSub';
import DebugPanel from './components/DebugPanel';

// Audio files mapped to scenes
const AUDIO_FILES = [
  '/audio/scene1_intro.mp3',
  '/audio/scene2_basicops.mp3',
  '/audio/scene3_structures.mp3',
  '/audio/scene4_caching.mp3',
  '/audio/scene5_pubsub.mp3',
  '/audio/scene6_outro.mp3',
];

// Default speeds for each scene { animSpeed, audioSpeed }
const DEFAULT_SPEEDS = {
  0: { anim: 1, audio: 1 },
  1: { anim: 1, audio: 1 },
  2: { anim: 1, audio: 1 },
  3: { anim: 1, audio: 1 },
  4: { anim: 1, audio: 1 },
  5: { anim: 1, audio: 1 },
};

function App() {
  const [mode, setMode] = useState(null);
  const [scene, setScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Per-scene speed settings { sceneIndex: { anim: number, audio: number } }
  const [sceneSpeeds, setSceneSpeeds] = useState(() => {
    try {
      const saved = localStorage.getItem('redis_scene_speeds');
      return saved ? JSON.parse(saved) : { ...DEFAULT_SPEEDS };
    } catch { return { ...DEFAULT_SPEEDS }; }
  });

  // Get current scene's speeds
  const currentAnimSpeed = sceneSpeeds[scene]?.anim || 1;
  const currentAudioSpeed = sceneSpeeds[scene]?.audio || 1;

  const handleAnimSpeedChange = (newSpeed) => {
    const updated = {
      ...sceneSpeeds,
      [scene]: { ...sceneSpeeds[scene], anim: newSpeed }
    };
    setSceneSpeeds(updated);
    localStorage.setItem('redis_scene_speeds', JSON.stringify(updated));
  };

  const handleAudioSpeedChange = (newSpeed) => {
    const updated = {
      ...sceneSpeeds,
      [scene]: { ...sceneSpeeds[scene], audio: newSpeed }
    };
    setSceneSpeeds(updated);
    localStorage.setItem('redis_scene_speeds', JSON.stringify(updated));
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
  };

  const handleResetSpeeds = () => {
    setSceneSpeeds({ ...DEFAULT_SPEEDS });
    localStorage.removeItem('redis_scene_speeds');
    setIsPlaying(false);
    setScene(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Audio playback effect - plays when scene changes
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = AUDIO_FILES[scene];
    audioRef.current.playbackRate = currentAudioSpeed;

    if (mode === 'PRESENTATION' || (mode === 'DEBUG' && isPlaying)) {
      audioRef.current.play().catch(err => {
        console.log('Audio autoplay blocked:', err);
      });
    }
  }, [scene, mode]);

  // Update audio playback rate when scene changes or audioSpeed changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = currentAudioSpeed;
    }
  }, [currentAudioSpeed, scene]);

  // Handle play/pause in debug mode
  useEffect(() => {
    if (!audioRef.current || mode !== 'DEBUG') return;

    if (isPlaying) {
      audioRef.current.play().catch(err => console.log('Audio play blocked:', err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, mode]);

  // Auto-advance when audio ends
  const handleAudioEnd = () => {
    if (scene < 5) {
      setScene(s => s + 1);
    } else {
      if (mode === 'DEBUG') setIsPlaying(false);
    }
  };

  const scenes = [
    <Intro key="intro" speed={currentAnimSpeed} />,
    <BasicOps key="basic" speed={currentAnimSpeed} />,
    <Structures key="struct" speed={currentAnimSpeed} />,
    <Caching key="cache" speed={currentAnimSpeed} />,
    <PubSub key="pubsub" speed={currentAnimSpeed} />,
    <Outro key="outro" speed={currentAnimSpeed} />,
  ];

  const sceneLabels = [
    "Intro (Bottleneck)",
    "Basic Ops (Set/Get)",
    "Data Structures",
    "Caching & TTL",
    "Pub/Sub (Messaging)",
    "Outro & Summary"
  ];

  // Mode Selection Screen
  if (!mode) {
    return (
      <div className="w-screen h-screen bg-bg-main flex flex-col items-center justify-center gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

        <h1 className="text-4xl font-bold text-white z-10 mb-8 font-mono">Select Mode</h1>

        <div className="flex gap-8 z-10">
          <button
            onClick={() => { setMode('PRESENTATION'); setIsPlaying(true); }}
            className="group relative px-8 py-6 bg-accent-blue text-white rounded-2xl shadow-2xl hover:bg-blue-600 transition-all hover:-translate-y-1 transform"
          >
            <div className="text-2xl font-bold mb-2">Presentation Mode</div>
            <div className="text-sm text-blue-100 font-normal font-mono">Auto-play & Auto-advance.<br />With Audio Narration.</div>
          </button>

          <button
            onClick={() => { setMode('DEBUG'); setIsPlaying(false); }}
            className="group relative px-8 py-6 bg-transparent text-white border-2 border-gray-700 rounded-2xl shadow-xl hover:border-white transition-all hover:-translate-y-1 transform"
          >
            <div className="text-2xl font-bold mb-2">Debug Mode</div>
            <div className="text-sm text-gray-400 font-normal font-mono">Manual Controls.<br />Per-Scene Speed Adjust.</div>
          </button>
        </div>

        <audio ref={audioRef} preload="auto" />
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-bg-main text-text-main flex flex-col relative">
      <audio
        ref={audioRef}
        preload="auto"
        onEnded={handleAudioEnd}
      />

      <header className="h-16 border-b border-gray-800 flex items-center justify-between px-8 bg-bg-card z-10">
        <h1 className="text-xl font-bold font-mono tracking-tight flex items-center gap-2">
          <span className="text-accent-red">redis</span>
          <span className="text-text-muted">x</span>
          <span className="text-accent-blue">python</span>
        </h1>
        <div className="flex gap-2">
          {scenes.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === scene ? 'bg-accent-blue' : 'bg-gray-700'}`} />
          ))}
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden flex items-center justify-center">
        {scenes[scene]}
      </main>

      {mode === 'DEBUG' && (
        <DebugPanel
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          animSpeed={currentAnimSpeed}
          setAnimSpeed={handleAnimSpeedChange}
          audioSpeed={currentAudioSpeed}
          setAudioSpeed={handleAudioSpeedChange}
          scene={scene}
          setScene={setScene}
          totalScenes={scenes.length}
          labels={sceneLabels}
          handleReset={handleResetSpeeds}
        />
      )}
    </div>
  );
}

export default App;
