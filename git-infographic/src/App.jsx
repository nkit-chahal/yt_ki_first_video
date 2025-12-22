import React, { useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import IntroScene from './components/IntroScene';
import SnapshotScene from './components/SnapshotScene';
import narrationData from './data/narration.json';

import DagScene from './components/DagScene';

gsap.registerPlugin(useGSAP, TextPlugin);

import BranchesScene from './components/BranchesScene';
import HeadScene from './components/HeadScene';
import ThreeAreasScene from './components/ThreeAreasScene';
import UndoScene from './components/UndoScene';
import RebaseScene from './components/RebaseScene';

import ReflogScene from './components/ReflogScene';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start at Intro
  const stepsData = Array.isArray(narrationData) ? narrationData : narrationData.steps;

  // Scene Configuration
  const SCENES = [
    { component: IntroScene, id: 'intro' },
    { component: SnapshotScene, id: 'snapshot' },
    { component: DagScene, id: 'dag' },
    { component: BranchesScene, id: 'branches_1' },
    { component: BranchesScene, id: 'branches_2' },
    { component: HeadScene, id: 'head' },
    { component: ThreeAreasScene, id: 'three_areas' },
    { component: UndoScene, id: 'undo_intro' },
    { component: UndoScene, id: 'undo_checkout' },
    { component: UndoScene, id: 'undo_reset_intro' },
    { component: UndoScene, id: 'undo_reset_soft' },
    { component: UndoScene, id: 'undo_reset_mixed' },
    { component: UndoScene, id: 'undo_reset_hard' },
    { component: UndoScene, id: 'undo_revert' },
    { component: RebaseScene, id: 'rebase_1' },
    { component: RebaseScene, id: 'rebase_2' },
    { component: ReflogScene, id: 'reflog' }
  ];

  const CurrentScene = SCENES[currentIndex].component;
  const currentData = stepsData.find(s => s.id === SCENES[currentIndex].id);

  const handleSceneComplete = () => {
    if (currentIndex < SCENES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* SCENE RENDER */}
      <CurrentScene data={currentData} onComplete={handleSceneComplete} />

      {/* NAVIGATION CONTROLS (Hidden for "Movie Mode" as requested) */}
      {/* 
      <div className="absolute bottom-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2 bg-white rounded shadow text-sm font-mono flex items-center">
          Scene {currentIndex + 1}/{SCENES.length}
        </span>
        <button
          onClick={() => setCurrentIndex(Math.min(SCENES.length - 1, currentIndex + 1))}
          disabled={currentIndex === SCENES.length - 1}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      */}
    </div>
  );
};

export default App;
