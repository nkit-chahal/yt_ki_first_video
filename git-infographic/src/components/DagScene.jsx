import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Caption from './Caption';
import { ArrowLeft, X } from 'lucide-react';
import CommitNode from './visuals/CommitNode';
import StickFigure from './visuals/StickFigure';



const CAPTIONS = [
    { text: "When you make a new commit, Git links it back.", duration: 3 },
    { text: "Parents never know future children.", duration: 3 },
    { text: "Children point backwards to parents.", duration: 3 },
    { text: "This structure is a DAG (Directed Acyclic Graph).", duration: 4 },
    { text: "'Directed' means one way.", duration: 2 },
    { text: "'Acyclic' means no loops.", duration: 3 }
];

const DagScene = ({ data, onComplete }) => {
    const containerRef = useRef(null);
    const cameraRef = useRef(null); // CAMERA RIG
    const stickFigureRef = useRef(null); // FOR IDLE LOOP
    const audioRef = useRef(null);
    const [captionText, setCaptionText] = useState(CAPTIONS[0].text);
    const [pose, setPose] = useState('pointing_left');

    // Visual Elements
    const node1Ref = useRef(null);
    const node2Ref = useRef(null);
    const node3Ref = useRef(null);

    // Arrows
    const arrow1Ref = useRef(null);
    const arrow2Ref = useRef(null);
    const badArrowRef = useRef(null);
    const badCrossRef = useRef(null);

    // Text
    const titleRef = useRef(null);
    const labelParentRef = useRef(null);
    const labelChildRef = useRef(null);

    // 1. IDLE LOOP (Breathing)
    useGSAP(() => {
        gsap.to(stickFigureRef.current, {
            y: -5,
            scaleY: 1.02,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: containerRef });

    // 2. MAIN TIMELINE (Camera + Action)
    useGSAP(() => {
        if (audioRef.current) audioRef.current.play().catch(e => console.log("Autoplay blocked"));
        const tl = gsap.timeline();

        // INIT STATE
        tl.set([node1Ref.current, node2Ref.current, node3Ref.current], { scale: 0, opacity: 0 }); // Pop-in style
        tl.set([arrow1Ref.current, arrow2Ref.current, badArrowRef.current], {
            strokeDasharray: 400, strokeDashoffset: 400
        });

        // CAMERA START: Focused on StickFigure
        // Center of StickFigure zone is approx Left 25%
        tl.set(cameraRef.current, { scale: 2, x: 300, y: 150 });

        // --- 0s: "Git links it back" ---
        // Stick Figure Intro
        tl.fromTo("#dag-speech-bubble",
            { scale: 0, opacity: 0, rotation: 10 },
            { scale: 1, opacity: 1, rotation: 0, ease: "elastic.out(1, 0.5)" }, 0.5
        );

        // CAMERA MOVE: Reveal Graph (Wide Shot)
        tl.to(cameraRef.current, { scale: 1, x: 0, y: 0, duration: 1.5, ease: "power2.inOut" }, 1.5);

        // --- 1.5s: "Full State" / C1 Appears ---
        // Pop C1 *during* the camera move
        tl.to(node1Ref.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, 1.8);

        // --- C2 Appears + Links Back ---
        // C2 Pops
        tl.to(node2Ref.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
        // Arrow draws IMMEDIATELY as C2 lands
        tl.to(arrow1Ref.current, { strokeDashoffset: 0, duration: 0.4, ease: "power1.out" }, "<+=0.2");

        // --- 3s: "Parents never know" ---
        tl.call(() => setCaptionText(CAPTIONS[1].text), null, ">");
        tl.to("#dag-speech-bubble", { opacity: 0, scale: 0, duration: 0.3 }, "<");

        // Parent Label drops in
        tl.fromTo(labelParentRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.4, ease: "back.out" }, "<+=0.2"
        );

        // --- 6s: "Children point backwards" ---
        tl.call(() => setCaptionText(CAPTIONS[2].text), null, 6);

        // Note Box slides in
        tl.fromTo("#backward-note-box",
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "<"
        );

        // --- C3 Appears + Links Back ---
        tl.to(node3Ref.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, 6.5);
        tl.to(arrow2Ref.current, { strokeDashoffset: 0, duration: 0.4, ease: "power1.out" }, "<+=0.2");
        tl.fromTo(labelChildRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.4, ease: "back.out" }, "<+=0.2"
        );

        // --- 9s: DAG Title ---
        tl.call(() => setCaptionText(CAPTIONS[3].text), null, 9);

        // CAMERA ADJUST: Slight zoom out to fit Title
        tl.to(cameraRef.current, { scale: 0.9, y: 20, duration: 1 }, 9);
        tl.fromTo(titleRef.current,
            { opacity: 0, scale: 0.5, y: 50 },
            { opacity: 1, scale: 1, y: 0, ease: "back.out" }, "<"
        );

        // --- 13s: Directed ---
        tl.call(() => setCaptionText(CAPTIONS[4].text), null, 13);
        // Pulse Arrows with a "Squash" feel
        tl.to([arrow1Ref.current, arrow2Ref.current], {
            strokeWidth: 8,
            stroke: "#3e2723",
            duration: 0.1,
            yoyo: true,
            repeat: 3
        }, 13);

        // --- 15s: Acyclic (The Error) ---
        tl.call(() => {
            setCaptionText(CAPTIONS[5].text);
            setPose('blocking');
        }, null, 15);

        // Draw the Bad Arrow FAST
        tl.to(badArrowRef.current, { strokeDashoffset: 0, duration: 0.6, ease: "power1.in" }, 15.2);

        // IMPACT: Red Cross + Camera Shake
        tl.fromTo(badCrossRef.current,
            { scale: 0, rotation: -90, opacity: 0 },
            { scale: 1.5, rotation: 0, opacity: 1, duration: 0.4, ease: "elastic.out(1, 0.3)" },
            15.8
        );
        tl.to(badArrowRef.current, { opacity: 0.3 }, "<");

        // SCREEN SHAKE
        tl.to(cameraRef.current, { x: "+=15", duration: 0.05, yoyo: true, repeat: 5 }, "<");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center bg-cream px-4 font-sans overflow-hidden relative">
            <audio ref={audioRef} src={`/audio/${data.id}.mp3`} onEnded={onComplete} />

            {/* CAMERA RIG: Everything moves inside this */}
            <div ref={cameraRef} className="relative w-full h-full flex items-center justify-center origin-center will-change-transform">

                {/* STAGE AREA */}
                <div className="relative w-full max-w-6xl h-[600px] grid grid-cols-12 gap-8 items-center">

                    {/* 1. ACTOR ZONE (Left) */}
                    <div className="col-span-4 flex justify-end items-center relative pr-12 pb-20 z-20 h-full">
                        <div className="relative" ref={stickFigureRef}>
                            <StickFigure pose={pose} />
                            {/* Speech Bubble (Child of StickFigure for idle sync? No, keep independent for control) */}
                            <div id="dag-speech-bubble" className="absolute top-[-80px] right-[20px] bg-white border-2 border-[#5d4037] px-4 py-2 rounded-2xl opacity-0 w-32 origin-bottom-left">
                                <p className="font-comic text-sm text-[#5d4037] text-center leading-tight">Git saves the<br />full state!</p>
                                <div className="absolute bottom-[-8px] left-4 w-4 h-4 bg-white border-b-2 border-r-2 border-[#5d4037] transform rotate-45"></div>
                            </div>
                        </div>

                        {/* Black Box Note */}
                        <div id="backward-note-box" className="absolute bottom-[20%] right-[-80px] bg-[#3e2723] text-white p-4 rounded shadow-lg opacity-0 w-48 z-10 pointer-events-none">
                            <h3 className="font-bold text-sm mb-1">Children point backwards.</h3>
                            <p className="text-xs text-gray-300 flex items-center gap-2">
                                🌲 Project's history
                            </p>
                        </div>
                    </div>

                    {/* 2. DIAGRAM ZONE (Right) */}
                    <div className="col-span-8 flex flex-col items-center justify-center relative h-full">

                        {/* DAG Title */}
                        <div className="absolute top-[10%]">
                            <h1 ref={titleRef} className="text-6xl font-bold text-[#5d4037] opacity-0 text-center tracking-tight">
                                Directed Acyclic Graph
                            </h1>
                        </div>

                        {/* GRAPH CONTAINER - Fixed Size for Absolute Coordinate Precision */}
                        <div id="graph-container" className="relative w-[600px] h-[300px] origin-center">

                            {/* Connecting Lines Layer */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                                <defs>
                                    {/* RefX=10 means the TIP of the arrow (x=10) is anchored to the end of the path */}
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#5d4037" />
                                    </marker>
                                    <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
                                    </marker>
                                </defs>

                                {/* C2 (250) -> C1 (Right Edge ~96) */}
                                <path ref={arrow1Ref} d="M250 150 L102 150" fill="none" stroke="#5d4037" strokeWidth="4" markerEnd="url(#arrowhead)" />

                                {/* C3 (500) -> C2 (Right Edge ~346) */}
                                <path ref={arrow2Ref} d="M500 150 L352 150" fill="none" stroke="#5d4037" strokeWidth="4" markerEnd="url(#arrowhead)" />

                                {/* LOOP ATTEMPT (C3 Bottom -> C1 Bottom) */}
                                <path ref={badArrowRef} d="M520 180 Q 284 320 70 180" fill="none" stroke="#dc2626" strokeWidth="4" strokeDasharray="10,5" markerEnd="url(#arrowhead-red)" className="opacity-1" />
                            </svg>

                            {/* NODES (Absolute Positioning) */}

                            {/* C1: Left (0) */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2">
                                <CommitNode ref={node1Ref} label="a1" sub="Init" className="opacity-0 transform scale-0" />
                                <div ref={labelParentRef} className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#5d4037] font-bold opacity-0">Parent</div>
                            </div>

                            {/* C2: Center (250) */}
                            <div className="absolute left-[250px] top-1/2 -translate-y-1/2">
                                <CommitNode ref={node2Ref} label="b2" sub="Feat" className="opacity-0 transform scale-0" />
                            </div>

                            {/* C3: Right (500) */}
                            <div className="absolute left-[500px] top-1/2 -translate-y-1/2">
                                <CommitNode ref={node3Ref} label="c3" sub="Fix" className="opacity-0 transform scale-0" />
                                <div ref={labelChildRef} className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#5d4037] font-bold opacity-0">Child</div>
                            </div>

                            {/* FAIL CROSS */}
                            <div ref={badCrossRef} className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 opacity-0 z-50">
                                <X size={100} className="text-red-600 font-bold drop-shadow-lg" strokeWidth={5} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* CAPTION */}
            <div className="absolute bottom-16 left-24 z-50">

            </div>

        </div>
    );
};

export default DagScene;
