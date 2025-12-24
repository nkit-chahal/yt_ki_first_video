import React from 'react';
import { Play, Pause, RotateCcw, Volume2, Zap } from 'lucide-react';

const DebugPanel = ({
    isPlaying, setIsPlaying,
    animSpeed, setAnimSpeed,
    audioSpeed, setAudioSpeed,
    handleReset
}) => {
    return (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-[999] bg-white/95 backdrop-blur px-5 py-4 rounded-xl shadow-2xl border border-slate-200 flex items-center gap-5">

            {/* Playback Toggle */}
            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-3 rounded-full ${isPlaying ? 'bg-red-500 text-white' : 'bg-green-500 text-white'} shadow-lg transition-transform hover:scale-105`}
            >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
            </button>

            <div className="h-10 w-px bg-slate-200"></div>

            {/* Animation Speed */}
            <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Zap size={12} className="text-amber-500" /> Animation
                </label>
                <div className="flex items-center gap-2">
                    <span className="font-mono text-lg font-bold text-slate-900 w-12 text-right">{animSpeed}x</span>
                    <input
                        type="range"
                        min="0.25"
                        max="2.0"
                        step="0.05"
                        value={animSpeed}
                        onChange={(e) => setAnimSpeed(parseFloat(e.target.value))}
                        className="w-24 h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                </div>
            </div>

            <div className="h-10 w-px bg-slate-200"></div>

            {/* Audio Speed */}
            <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Volume2 size={12} className="text-blue-500" /> Audio
                </label>
                <div className="flex items-center gap-2">
                    <span className="font-mono text-lg font-bold text-slate-900 w-12 text-right">{audioSpeed}x</span>
                    <input
                        type="range"
                        min="0.5"
                        max="2.0"
                        step="0.05"
                        value={audioSpeed}
                        onChange={(e) => setAudioSpeed(parseFloat(e.target.value))}
                        className="w-24 h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>
            </div>

            <div className="h-10 w-px bg-slate-200"></div>

            {/* Reset */}
            <button
                onClick={handleReset}
                className="text-sm bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-2 rounded font-mono transition-colors flex items-center gap-2"
            >
                <RotateCcw size={14} /> Reset
            </button>

        </div>
    );
};

export default DebugPanel;
