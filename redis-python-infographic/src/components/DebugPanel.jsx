import React from 'react';
import { Play, Pause, RotateCcw, Volume2, Zap } from 'lucide-react';

const DebugPanel = ({
    isPlaying, setIsPlaying,
    animSpeed, setAnimSpeed,
    audioSpeed, setAudioSpeed,
    scene, setScene,
    totalScenes, labels, handleReset
}) => {
    return (
        <>
            {/* Top Right Navigation */}
            <div className="absolute top-4 right-4 z-[999] flex shadow-lg rounded-md overflow-hidden ring-1 ring-black/5 bg-white/90 backdrop-blur">
                <button
                    onClick={() => setScene(Math.max(0, scene - 1))}
                    disabled={scene === 0}
                    className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 disabled:opacity-50 transition-colors"
                >
                    Prev
                </button>
                <div className="px-4 py-2 text-slate-800 text-sm font-bold border-l border-r border-gray-200 min-w-[150px] text-center flex flex-col justify-center leading-tight">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest truncate max-w-[140px]">
                        {labels[scene] || `Scene ${scene + 1}`}
                    </span>
                    <span>{scene + 1} / {totalScenes}</span>
                </div>
                <button
                    onClick={() => setScene(Math.min(totalScenes - 1, scene + 1))}
                    disabled={scene === totalScenes - 1}
                    className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 disabled:opacity-50 transition-colors"
                >
                    Next
                </button>
            </div>

            {/* Bottom Debug Panel (Speed Controls) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[999] bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-2xl border border-slate-200 flex items-center gap-6">

                {/* Playback Toggle */}
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`p-3 rounded-full ${isPlaying ? 'bg-accent-red text-white' : 'bg-accent-green text-white'} shadow-lg transition-transform hover:scale-105 active:scale-95`}
                >
                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                </button>

                <div className="h-10 w-px bg-slate-200"></div>

                {/* Animation Speed */}
                <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Zap size={12} className="text-amber-500" /> Animation
                    </label>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-lg font-bold text-slate-900 w-12 text-right">{animSpeed}x</span>
                        <input
                            type="range"
                            min="0.5"
                            max="3.0"
                            step="0.1"
                            value={animSpeed}
                            onChange={(e) => setAnimSpeed(parseFloat(e.target.value))}
                            className="w-24 h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />
                    </div>
                </div>

                <div className="h-10 w-px bg-slate-200"></div>

                {/* Audio Speed */}
                <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Volume2 size={12} className="text-blue-500" /> Audio
                    </label>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-lg font-bold text-slate-900 w-12 text-right">{audioSpeed}x</span>
                        <input
                            type="range"
                            min="0.5"
                            max="2.0"
                            step="0.1"
                            value={audioSpeed}
                            onChange={(e) => setAudioSpeed(parseFloat(e.target.value))}
                            className="w-24 h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>
                </div>

                <div className="h-10 w-px bg-slate-200"></div>

                {/* Actions */}
                <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Actions</label>
                    <button
                        onClick={handleReset}
                        className="text-xs bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-2 rounded font-mono transition-colors flex items-center gap-2"
                    >
                        <RotateCcw size={12} /> Reset
                    </button>
                </div>

            </div>
        </>
    );
};

export default DebugPanel;
