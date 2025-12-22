import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Caption from './Caption';
import StickFigure from './visuals/StickFigure';
import { useSoundEffects } from '../hooks/useSoundEffects';



const CAPTIONS = [
    { text: "Let's start from zero.", duration: 3 },
    { text: "Git is a database.", duration: 2.5 },
    { text: "So... what exactly IS a commit?", duration: 3 },
    { text: "Most people think it's just a diff.", duration: 3 },
    { text: "Changes?", duration: 2 },
    { text: "No. It's a snapshot.", duration: 2 },
    { text: "A complete photograph of your entire project.", duration: 3.5 },
    { text: "Each commit contains three things:", duration: 2.5 },
    { text: "1. A pointer to that complete snapshot.", duration: 3 },
    { text: "2. Metadata (who, when, why).", duration: 3 },
    { text: "3. A pointer to the parent commit.", duration: 3 }
];

const SnapshotScene = ({ data, onComplete }) => {
    const { playSound } = useSoundEffects();
    const containerRef = useRef(null);
    const cameraRef = useRef(null); // CAMERA RIG
    const audioRef = useRef(null);
    const stickFigureRef = useRef(null);

    const [captionText, setCaptionText] = useState(CAPTIONS[0].text);
    const [pose, setPose] = useState('presenting');

    // Refs
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const questionGroupRef = useRef(null);
    const changesGroupRef = useRef(null);
    const strikeLineRef = useRef(null);
    const commitCardRef = useRef(null);

    // Commit Parts Refs
    const partTreeRef = useRef(null);
    const partMetaRef = useRef(null);
    const partParentRef = useRef(null);
    const flashRef = useRef(null);

    // IDLE LOOP
    useGSAP(() => {
        gsap.to(stickFigureRef.current, {
            y: -5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: containerRef });

    useGSAP(() => {
        if (audioRef.current) audioRef.current.play().catch(e => console.log("Autoplay blocked"));
        const tl = gsap.timeline();

        // CAMERA START: Zoomed slightly on Actor
        tl.set(cameraRef.current, { scale: 1.2, x: 200, y: 50 });

        // --- 0s: INTRO ---
        tl.set(titleRef.current, { opacity: 0, y: 30 });
        tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1 }); // "Let's start from zero"

        // --- 3s: DATABASE ---
        tl.call(() => setCaptionText(CAPTIONS[1].text), null, 3);
        tl.to(titleRef.current, { text: "Git is a database.", duration: 0.5 }, 3);

        // CAMERA: Pan to center to show Text
        tl.call(() => playSound('whoosh', 0.2), null, 3);
        tl.to(cameraRef.current, { scale: 1, x: 0, y: 0, duration: 1 }, 3);

        // --- 5.5s: QUESTION ---
        tl.call(() => {
            setCaptionText(CAPTIONS[2].text);
            setPose('thinking');
        }, null, 5.5);

        tl.to(titleRef.current, { opacity: 0, duration: 0.5 }, 5.5);

        tl.call(() => playSound('pop', 0.5), null, 6);
        tl.fromTo(questionGroupRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out" }, 6);

        // CAMERA: Focus on Question
        tl.call(() => playSound('click', 0.2), null, 6);
        tl.to(cameraRef.current, { scale: 1.1, x: -100, y: 0, duration: 1 }, 6);


        // --- 8.5s: MYTH ("Changes?") ---
        tl.call(() => {
            setCaptionText(CAPTIONS[3].text);
        }, null, 8.5);

        tl.to(questionGroupRef.current, { opacity: 0, scale: 0.8, duration: 0.3 }, 10); // Hide Question

        // "Changes?" Text
        tl.call(() => setCaptionText(CAPTIONS[4].text), null, 11);

        tl.call(() => playSound('pop', 0.5), null, 11);
        tl.fromTo(changesGroupRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, ease: "bounce.out" }, 11);

        // --- 13s: BUSTED (Strikethrough) ---
        tl.call(() => setCaptionText(CAPTIONS[5].text), null, 13);

        tl.call(() => playSound('scribble', 0.6), null, 13.2);
        tl.to(strikeLineRef.current, { width: '100%', duration: 0.2 }, 13.2);
        tl.to(changesGroupRef.current, { rotation: 5, y: 10, opacity: 0, duration: 0.5, delay: 0.5 }, 13.5); // Fall away

        // --- 15s: SNAPSHOT REVEAL ---
        tl.call(() => {
            setCaptionText(CAPTIONS[6].text);
            setPose('presenting');
        }, null, 15);

        // FLASH!
        tl.call(() => playSound('click', 0.8), null, 15);
        tl.fromTo(flashRef.current, { opacity: 0 }, { opacity: 0.8, duration: 0.1, yoyo: true, repeat: 1 }, 15);

        // CAMERA SHAKE (Flash impact)
        tl.to(cameraRef.current, { x: "+=10", duration: 0.05, repeat: 4, yoyo: true }, 15);

        // CAMERA: Zoom out to show Card
        tl.to(cameraRef.current, { scale: 1, x: 0, y: 0, duration: 0.5 }, 15.2);

        // Show Card
        tl.call(() => playSound('thud', 0.6), null, 15.5);
        tl.fromTo(commitCardRef.current,
            { y: 50, opacity: 0, rotateX: 45 },
            { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power2.out" },
            15.2);

        // --- 18s+: THREE THINGS ---
        tl.call(() => setCaptionText(CAPTIONS[7].text), null, 18.5);

        // 1. Snapshot
        tl.call(() => setCaptionText(CAPTIONS[8].text), null, 21);
        tl.call(() => playSound('ding', 0.5), null, 21);
        tl.fromTo(partTreeRef.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, 21);

        // 2. Metadata
        tl.call(() => setCaptionText(CAPTIONS[9].text), null, 24);
        tl.call(() => playSound('ding', 0.5), null, 24);
        tl.fromTo(partMetaRef.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, 24);

        // 3. Parent
        tl.call(() => setCaptionText(CAPTIONS[10].text), null, 27);
        tl.call(() => playSound('ding', 0.5), null, 27);
        tl.fromTo(partParentRef.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, 27);

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center bg-cream px-4 font-sans overflow-hidden relative">
            <audio ref={audioRef} src={`/audio/${data.id}.mp3`} onEnded={onComplete} />

            {/* FLASH OVERLAY */}
            <div ref={flashRef} className="absolute inset-0 bg-white pointer-events-none z-50 opacity-0"></div>

            {/* CAMERA RIG */}
            <div ref={cameraRef} className="relative w-full h-full flex items-center justify-center origin-center will-change-transform">

                {/* STAGE AREA - ROBUST GRID */}
                <div className="relative w-full max-w-6xl h-[600px] grid grid-cols-12 gap-8 items-center">

                    {/* 1. ACTOR ZONE (Left) */}
                    <div className="col-span-5 flex justify-end items-end relative pr-12 pb-20">
                        <div ref={stickFigureRef}> {/* Wrapped for idle */}
                            <StickFigure pose={pose} />
                        </div>
                    </div>

                    {/* 2. CONTENT ZONE (Right) */}
                    <div className="col-span-7 flex flex-col justify-center pl-4 pb-24 relative h-full">

                        {/* A. Title (Dynamic) */}
                        <div className="absolute top-[30%] left-0 w-full">
                            <h1 ref={titleRef} className="text-5xl font-bold text-[#5d4037] mb-2 tracking-tight">Let's start from zero.</h1>
                        </div>

                        {/* B. Question */}
                        <div ref={questionGroupRef} className="absolute top-[40%] left-0 bg-[#FDFBF7] border-2 border-[#5d4037] px-8 py-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(93,64,55,1)] opacity-0">
                            <code className="text-2xl font-mono text-[#5d4037]">git commit...? 🤔</code>
                        </div>

                        {/* C. Misconception */}
                        <div ref={changesGroupRef} className="absolute top-[50%] left-0 opacity-0 origin-center">
                            <div className="relative">
                                <h2 className="text-7xl font-bold text-gray-400">Changes?</h2>
                                <div ref={strikeLineRef} className="absolute top-1/2 left-0 h-2 bg-red-800 w-0 -rotate-2 transform origin-left"></div>
                            </div>
                        </div>

                        {/* D. THE COMMIT CARD (The Reveal) */}
                        <div ref={commitCardRef} className="absolute top-[30%] left-0 bg-white border border-gray-200 p-6 rounded-lg shadow-xl w-[400px] opacity-0">
                            <div className="border-b border-gray-100 pb-2 mb-4 flex justify-between items-center">
                                <span className="font-mono text-xs text-gray-400">commit 8a2f9c...</span>
                                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                            </div>

                            <div className="space-y-4">
                                {/* Part 1: Tree */}
                                <div ref={partTreeRef} className="flex items-center gap-4 p-3 bg-blue-50/50 rounded-md opacity-0">
                                    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded text-blue-600">📁</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-700">Snapshot (Tree)</p>
                                        <p className="text-xs text-gray-500">Every single file.</p>
                                    </div>
                                </div>

                                {/* Part 2: Metadata */}
                                <div ref={partMetaRef} className="flex items-center gap-4 p-3 bg-orange-50/50 rounded-md opacity-0">
                                    <div className="w-8 h-8 flex items-center justify-center bg-orange-100 rounded text-orange-600">👤</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-700">Metadata</p>
                                        <p className="text-xs text-gray-500">Author, Time, Message.</p>
                                    </div>
                                </div>

                                {/* Part 3: Parent */}
                                <div ref={partParentRef} className="flex items-center gap-4 p-3 bg-purple-50/50 rounded-md opacity-0">
                                    <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded text-purple-600">⬆️</div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-700">Parent Pointer</p>
                                        <p className="text-xs text-gray-500">Link to previous.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* CAPTION */}
            <div className="absolute bottom-16 left-24">

            </div>

        </div>
    );
};
export default SnapshotScene;
