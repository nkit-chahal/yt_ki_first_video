import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Caption from './Caption';
import StickFigure from './visuals/StickFigure';
import CommitNode from './visuals/CommitNode';
import StickyNote from './visuals/StickyNote';

const HeavyAnvil = React.forwardRef((props, ref) => (
    <div ref={ref} className="w-48 h-32 bg-gray-800 rounded-lg flex items-center justify-center text-white relative shadow-2xl">
        <span className="font-black text-2xl tracking-widest">BRANCH</span>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/20 rounded-full blur-sm"></div>
    </div>
));

const CAPTIONS = {
    branches_1: [
        { text: "How do we navigate? Branches.", duration: 3 },
        { text: "People assume branches are heavy copies.", duration: 3 },
        { text: "Wrong.", duration: 1 },
        { text: "A branch is just a sticky note.", duration: 2.5 },
        { text: "A tiny text file pointing to a hash.", duration: 3 },
        { text: "It doesn't contain commits. It points at them.", duration: 4 }
    ],
    branches_2: [
        { text: "Make a new commit on a branch?", duration: 2.5 },
        { text: "Git creates the commit pointing back...", duration: 2.5 },
        { text: "...and moves the sticky note forward.", duration: 2.5 },
        { text: "This is why branching is instant.", duration: 2.5 },
        { text: "You're just moving a sticky note.", duration: 3 }
    ]
};

const BranchesScene = ({ data, onComplete }) => {
    const containerRef = useRef(null);
    const cameraRef = useRef(null);
    const audioRef = useRef(null);
    const stickFigureRef = useRef(null);

    // Scene 1 Elements
    const anvilRef = useRef(null);
    const stampRef = useRef(null);
    const stickyRef = useRef(null);

    // Scene 2 Elements
    const node1Ref = useRef(null);
    const node2Ref = useRef(null);
    const node3Ref = useRef(null);
    const arrow1Ref = useRef(null);
    const arrow2Ref = useRef(null);
    const graphStickyRef = useRef(null);

    const [captionText, setCaptionText] = useState("");
    const [pose, setPose] = useState('idle');

    // IDLE LOOP
    useGSAP(() => {
        if (!stickFigureRef.current) return;
        gsap.to(stickFigureRef.current, { y: -5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, { scope: containerRef });

    useGSAP(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Autoplay blocked"));
        }

        const tl = gsap.timeline();
        tl.set(cameraRef.current, { x: 0, y: 0, scale: 1 });
        setCaptionText("");

        if (data.id === 'branches_1') {
            // --- PART 1: THE MYTH ---
            console.log("Init Part 1");
            setPose('lifting_heavy');

            // Safety check for refs
            if (!anvilRef.current || !stampRef.current || !stickyRef.current) {
                console.warn("Refs missing for Part 1");
                return;
            }

            // Setup: Anvil visible, Sticky hidden
            tl.set(anvilRef.current, { y: -50, scale: 1, opacity: 1 });
            tl.set(stickyRef.current, { opacity: 0 });
            tl.set(stampRef.current, { opacity: 0 });

            // 0s: Intro
            tl.call(() => setCaptionText(CAPTIONS.branches_1[0].text), null, 0);

            // 3s: Heavy Myth
            tl.call(() => setCaptionText(CAPTIONS.branches_1[1].text), null, 3);

            // Strain Shake
            if (stickFigureRef.current && anvilRef.current) {
                tl.to([stickFigureRef.current, anvilRef.current], { x: "+=2", duration: 0.05, repeat: 40, yoyo: true }, 3);
            }

            // 6s: WRONG
            tl.call(() => setCaptionText(CAPTIONS.branches_1[2].text), null, 6);

            // Stamp
            tl.fromTo(stampRef.current,
                { scale: 5, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.2, ease: "power4.in" },
                6);
            tl.to(cameraRef.current, { x: "+=10", duration: 0.05, repeat: 5, yoyo: true }, 6);

            // Poof
            tl.to(anvilRef.current, { scale: 0, opacity: 0, duration: 0.2 }, 6.5);
            tl.to(stampRef.current, { opacity: 0, duration: 0.5 }, 7);

            // 7s: Sticky Note
            tl.call(() => {
                setCaptionText(CAPTIONS.branches_1[3].text);
                setPose('finger_balance');
            }, null, 7);

            tl.fromTo(stickyRef.current,
                { y: -200, opacity: 0, rotation: 45 },
                { y: -80, opacity: 1, rotation: -5, duration: 2, ease: "elastic.out(1, 0.5)" },
                7);

            // 9.5s
            tl.call(() => setCaptionText(CAPTIONS.branches_1[4].text), null, 9.5);
            tl.to(cameraRef.current, { scale: 2, x: 0, y: 100, duration: 1 }, 9.5);

            // 12.5s
            tl.call(() => setCaptionText(CAPTIONS.branches_1[5].text), null, 12.5);

        } else if (data.id === 'branches_2') {
            // --- PART 2: MOVEMENT ---
            console.log("Init Part 2");
            setPose('pointing_left');

            if (!node1Ref.current || !node2Ref.current || !graphStickyRef.current) return;

            // Setup
            tl.set(node1Ref.current, { x: -150, opacity: 1 });
            tl.set(node2Ref.current, { x: 0, opacity: 1 });
            tl.set(node3Ref.current, { x: 150, opacity: 0, scale: 0 });
            tl.set(graphStickyRef.current, { x: 0, y: -80, rotation: -5, opacity: 1 });

            // Arrows - explicit visibility
            if (arrow1Ref.current) tl.set(arrow1Ref.current, { opacity: 1, strokeDashoffset: 0 });
            if (arrow2Ref.current) tl.set(arrow2Ref.current, { opacity: 1, strokeDashoffset: 100 }); // Hidden initially

            // 0s
            tl.call(() => setCaptionText(CAPTIONS.branches_2[0].text), null, 0);

            // 2.5s: New Commit
            tl.call(() => setCaptionText(CAPTIONS.branches_2[1].text), null, 2.5);
            tl.to(node3Ref.current, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out" }, 2.5);
            tl.to(arrow2Ref.current, { strokeDashoffset: 0, duration: 0.3 }, 3);

            // 5s: Move
            tl.call(() => setCaptionText(CAPTIONS.branches_2[2].text), null, 5);
            tl.to(graphStickyRef.current, { x: 150, y: -80, rotation: 5, duration: 0.5, ease: "back.inOut(1.2)" }, 5.2);
            tl.to(cameraRef.current, { x: -50, duration: 1 }, 5);

            // 7.5s
            tl.call(() => setCaptionText(CAPTIONS.branches_2[3].text), null, 7.5);

            // 10s
            tl.call(() => setCaptionText(CAPTIONS.branches_2[4].text), null, 10);
            tl.to(graphStickyRef.current, { scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 }, 10);
        }

    }, [data.id]);

    return (
        <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center bg-cream px-4 font-sans overflow-hidden relative">
            <audio ref={audioRef} src={`/audio/${data.id}.mp3`} onEnded={onComplete} />

            {/* CAMERA RIG */}
            <div ref={cameraRef} className="relative w-full h-full flex items-center justify-center origin-center will-change-transform">
                <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">

                    {/* === PART 1: MYTH === */}
                    {data.id === 'branches_1' && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {/* Anvil held by figure? No, let's float it just above for safety, or position relative to center */}
                            <div ref={anvilRef} className="absolute top-[100px] z-20">
                                <HeavyAnvil />
                            </div>
                            <div ref={stampRef} className="absolute top-[100px] z-30 opacity-0">
                                <span className="text-8xl font-black text-red-600 border-8 border-red-600 px-4 py-2 -rotate-12 inline-block">WRONG</span>
                            </div>
                            <div ref={stickyRef} className="absolute top-[150px] z-20 opacity-0">
                                <StickyNote text="main" />
                            </div>
                        </div>
                    )}

                    {/* === PART 2: GRAPH === */}
                    {data.id === 'branches_2' && (
                        <div className="absolute top-[50px] w-[600px] h-[300px] flex items-center justify-center z-20">
                            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#5d4037" />
                                    </marker>
                                </defs>
                                <line ref={arrow1Ref} x1="-55" y1="0" x2="-95" y2="0" stroke="#5d4037" strokeWidth="4" markerEnd="url(#arrowhead)" transform="translate(300, 150)" strokeDasharray="100" />
                                <line ref={arrow2Ref} x1="95" y1="0" x2="55" y2="0" stroke="#5d4037" strokeWidth="4" markerEnd="url(#arrowhead)" transform="translate(300, 150)" strokeDasharray="100" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div ref={node1Ref} className="absolute transform -translate-x-[150px]"><CommitNode label="C1" /></div>
                                <div ref={node2Ref} className="absolute transform translate-x-0"><CommitNode label="C2" /></div>
                                <div ref={node3Ref} className="absolute transform translate-x-[150px] opacity-0"><CommitNode label="C3" /></div>
                            </div>
                            <div ref={graphStickyRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <StickyNote text="main" />
                            </div>
                        </div>
                    )}

                    {/* === SHARED ACTOR (Always Visible, Bottom Layer) === */}
                    {/* Positioned absolute at bottom of stage */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center pointer-events-none">
                        <div ref={stickFigureRef}>
                            <StickFigure pose={pose} />
                        </div>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-16 left-24">

            </div>
        </div>
    );
};

export default BranchesScene;
