import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import IntroSequence from './IntroSequence';
import AudienceSequence from './AudienceSequence';
import DataTrapSequence from './DataTrapSequence';
import FeaturesVelocitySequence from './FeaturesVelocitySequence';
import TheLieSequence from './TheLieSequence';
import VisualizationChaosSequence from './VisualizationChaosSequence';
import RealityCheckSequence from './RealityCheckSequence';
import RevealSequence from './RevealSequence';
import ConclusionSequence from './ConclusionSequence';

const MODULES = [
  {
    id: 'intro',
    component: IntroSequence,
    label: 'Intro',
    audioFile: 'ElevenLabs_2025-12-22T11_29_12_Bradford - Expressive and Articulate_pvc_sp100_s50_sb75_v3.mp3'
  },
  {
    id: 'audience',
    component: AudienceSequence,
    label: 'Audience',
    audioFile: 'ElevenLabs_2025-12-22T11_47_35_Bradford - Expressive and Articulate_pvc_sp100_s50_sb75_v3.mp3'
  },
  {
    id: 'data_trap',
    component: DataTrapSequence,
    label: 'The Data Trap',
    audioFile: 'ElevenLabs_2025-12-22T11_47_59_Bradford - Expressive and Articulate_pvc_sp100_s50_sb75_v3.mp3',
    defaultRate: 1.2
  },
  {
    id: 'features_velocity',
    component: FeaturesVelocitySequence,
    label: 'Velocity',
    audioFile: 'ElevenLabs_2025-12-22T11_48_25_Bradford - Expressive and Articulate_pvc_sp100_s50_sb75_v3.mp3'
  },
  {
    id: 'the_lie',
    component: TheLieSequence,
    label: 'The Lie (Barriers)',
    audioFile: 'ElevenLabs_2025-12-22T11_48_54_Bradford - Expressive and Articulate_pvc_sp100_s50_sb75_v3.mp3'
  },
  {
    id: 'visualization_chaos',
    component: VisualizationChaosSequence,
    label: 'Chaos',
    audioFile: 'ElevenLabs_2025-12-22T11_49_27_Bradford - Expressive and Articulate_pvc_sp100_s50_sb75_v3.mp3'
  },
  {
    id: 'reality_check',
    component: RealityCheckSequence,
    label: 'RSI Check',
    audioFile: 'ElevenLabs_2025-12-22T11_49_54_Bradford - Expressive and Articulate_pvc_sp100_s50_sb75_v3.mp3'
  },
  {
    id: 'reveal',
    component: RevealSequence,
    label: 'The Reveal',
    audioFile: 'ElevenLabs_2025-12-22T11_50_20_Bradford - Expressive and Articulate_pvc_sp100_s50_sb75_v3.mp3'
  },
  {
    id: 'conclusion',
    component: ConclusionSequence,
    label: 'Conclusion',
    audioFile: 'ElevenLabs_2025-12-22T11_50_58_Bradford - Expressive and Articulate_pvc_sp100_s50_sb75_v3.mp3'
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState(null);

  // Persistent Settings
  const [playbackRates, setPlaybackRates] = useState(() => {
    try {
      const saved = localStorage.getItem('playbackRates');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });
  const [animationRates, setAnimationRates] = useState(() => {
    try {
      const saved = localStorage.getItem('animationRates');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  const audioRef = useRef(null);

  const CurrentModule = MODULES[currentIndex].component;

  // Audio Playback Effect
  useEffect(() => {
    if (!mode) return;

    // Stop previous audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.onended = null;
      audioRef.current.currentTime = 0;
    }

    const currentModule = MODULES[currentIndex];
    if (currentModule.audioFile) {
      const audioPath = `/audio/${currentModule.audioFile}`;
      const audio = new Audio(audioPath);

      // Determine Rate
      const rate = playbackRates[currentModule.id] || currentModule.defaultRate || 1.0;
      audio.playbackRate = rate;

      audioRef.current = audio;

      // Auto-Advance logic (Presentation Mode ONLY)
      if (mode === 'PRESENTATION') {
        audio.onended = () => {
          if (currentIndex < MODULES.length - 1) {
            setCurrentIndex(prev => prev + 1);
          }
        };
      } else {
        audio.onended = null;
      }

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Audio playback error:", error);
        });
      }
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.onended = null;
      }
    };
  }, [currentIndex, mode, playbackRates]);

  // Real-time Audio Rate Update for Debug Mode
  useEffect(() => {
    if (audioRef.current && mode === 'DEBUG') {
      const currentModule = MODULES[currentIndex];
      const rate = playbackRates[currentModule.id] || currentModule.defaultRate || 1.0;
      audioRef.current.playbackRate = rate;
      console.log(`[DEBUG] Narration playbackRate set to: ${rate}x`);
    }
  }, [playbackRates, mode, currentIndex]);

  // GSAP Animation Rate Update
  useEffect(() => {
    const currentModule = MODULES[currentIndex];
    const animRate = animationRates[currentModule.id] || 1.0;
    gsap.globalTimeline.timeScale(animRate);
    if (mode === 'DEBUG') {
      console.log(`[DEBUG] GSAP timeScale set to: ${animRate}x`);
    }
    return () => {
      // We generally leave the timeline scaled, or we could reset it. 
      // For consistent playback in Presentation mode, leaving it set by the persistence logic is correct.
    };
  }, [animationRates, currentIndex, mode]);


  const handleNext = () => {
    if (currentIndex < MODULES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleRateChange = (val) => {
    const newRates = {
      ...playbackRates,
      [MODULES[currentIndex].id]: parseFloat(val)
    };
    setPlaybackRates(newRates);
    localStorage.setItem('playbackRates', JSON.stringify(newRates));
  };

  const handleAnimRateChange = (val) => {
    const newRates = {
      ...animationRates,
      [MODULES[currentIndex].id]: parseFloat(val)
    };
    setAnimationRates(newRates);
    localStorage.setItem('animationRates', JSON.stringify(newRates));
  };

  const handleResetStorage = () => {
    if (confirm("Reset all speed settings to default?")) {
      localStorage.removeItem('playbackRates');
      localStorage.removeItem('animationRates');
      setPlaybackRates({});
      setAnimationRates({});
    }
  };

  const currentRate = playbackRates[MODULES[currentIndex].id] || MODULES[currentIndex].defaultRate || 1.0;
  const currentAnimRate = animationRates[MODULES[currentIndex].id] || 1.0;

  if (!mode) {
    return (
      <div className="w-screen h-screen bg-cream flex flex-col items-center justify-center gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

        <h1 className="text-4xl font-bold text-slate-800 z-10 mb-8">Select Mode</h1>

        <div className="flex gap-8 z-10">
          <button
            onClick={() => setMode('PRESENTATION')}
            className="group relative px-8 py-6 bg-slate-900 text-white rounded-2xl shadow-2xl hover:bg-slate-800 transition-all hover:-translate-y-1"
          >
            <div className="text-2xl font-bold mb-2">Presentation Mode</div>
            <div className="text-sm text-slate-400 font-normal">Auto-play & Auto-advance.<br />Hidden UI for recording.</div>
          </button>

          <button
            onClick={() => setMode('DEBUG')}
            className="group relative px-8 py-6 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl shadow-xl hover:border-slate-900 transition-all hover:-translate-y-1"
          >
            <div className="text-2xl font-bold mb-2">Debug Mode</div>
            <div className="text-sm text-slate-500 font-normal">Manual Controls.<br />Adjust Audio & Anim Speed.</div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-cream flex flex-col overflow-hidden m-0 p-0 relative">

      {/* Active Scene Container */}
      <div className="flex-1 w-full h-full relative">
        <CurrentModule />
      </div>

      {/* DEBUG UI OVERLAY */}
      {mode === 'DEBUG' && (
        <>
          {/* Top Right Navigation */}
          <div className="absolute top-4 right-4 z-[999] flex shadow-lg rounded-md overflow-hidden ring-1 ring-black/5 bg-white/90 backdrop-blur">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 disabled:opacity-50 transition-colors"
            >
              Prev
            </button>
            <div className="px-4 py-2 text-slate-800 text-sm font-bold border-l border-r border-gray-200 min-w-[150px] text-center flex flex-col justify-center leading-tight">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest truncate max-w-[140px]">{MODULES[currentIndex].label}</span>
              <span>{currentIndex + 1} / {MODULES.length}</span>
            </div>
            <button
              onClick={handleNext}
              disabled={currentIndex === MODULES.length - 1}
              className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 disabled:opacity-50 transition-colors"
            >
              Next
            </button>
          </div>

          {/* Bottom Debug Panel (Speed Controls) */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[999] bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-2xl border border-slate-200 flex items-center gap-6">

            {/* Audio Speed */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Narration Speed</label>
              <div className="flex items-center gap-3">
                <span className="font-mono text-lg font-bold text-slate-900 w-12 text-right">{currentRate}x</span>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={currentRate}
                  onChange={(e) => handleRateChange(e.target.value)}
                  className="w-32 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            <div className="h-10 w-px bg-slate-200"></div>

            {/* Animation Speed */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Anim Speed</label>
              <div className="flex items-center gap-3">
                <span className="font-mono text-lg font-bold text-slate-900 w-12 text-right">{currentAnimRate}x</span>
                <input
                  type="range"
                  min="0.1"
                  max="3.0"
                  step="0.1"
                  value={currentAnimRate}
                  onChange={(e) => handleAnimRateChange(e.target.value)}
                  className="w-32 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>
            </div>

            <div className="h-10 w-px bg-slate-200"></div>

            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Actions</label>
              <button
                onClick={handleResetStorage}
                className="text-xs bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-2 rounded font-mono transition-colors"
              >
                Reset Defaults
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
