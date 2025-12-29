import React from 'react';
import { Sequence, Audio, staticFile } from 'remotion';
import Scene0 from '../scenes/Scene0';
import Scene1 from '../scenes/Scene1';
import Scene2 from '../scenes/Scene2';
import Scene3 from '../scenes/Scene3';
import Scene4 from '../scenes/Scene4';
import Scene5 from '../scenes/Scene5';
import Scene6 from '../scenes/Scene6';

// Scene durations in frames (30fps)
// These are estimates - adjust after measuring actual audio files
const SCENES = [
    { component: Scene0, audio: 'scene0.mp3', duration: 90 },   // ~3s
    { component: Scene1, audio: 'scene1.mp3', duration: 180 },  // ~6s  
    { component: Scene2, audio: 'scene2.mp3', duration: 270 },  // ~9s
    { component: Scene3, audio: 'scene3.mp3', duration: 330 },  // ~11s
    { component: Scene4, audio: 'scene4.mp3', duration: 330 },  // ~11s
    { component: Scene5, audio: 'scene5.mp3', duration: 300 },  // ~10s
    { component: Scene6, audio: 'scene6.mp3', duration: 600 },  // ~20s
];

export const DeepSeekVideo = () => {
    let cumulativeFrames = 0;

    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            fontFamily: 'sans-serif'
        }}>
            {/* FORCE TAILWIND VIA CDN because local build is failing */}
            <script src="https://cdn.tailwindcss.com"></script>

            {SCENES.map((scene, index) => {
                const startFrame = cumulativeFrames;
                cumulativeFrames += scene.duration;
                const SceneComponent = scene.component;

                return (
                    <Sequence
                        key={index}
                        from={startFrame}
                        durationInFrames={scene.duration}
                    >
                        <SceneComponent />
                        <Audio src={staticFile(`audio/${scene.audio}`)} />
                    </Sequence>
                );
            })}
        </div>
    );
};
