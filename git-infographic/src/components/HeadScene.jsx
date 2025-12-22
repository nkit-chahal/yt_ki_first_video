import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Caption from './Caption';
import StickFigure from './visuals/StickFigure';
import CommitNode from './visuals/CommitNode';
import StickyNote from './visuals/StickyNote';
import { Tag } from 'lucide-react';

const HeadTag = React.forwardRef((props, ref) => (
    <div ref={ref} className="absolute z-40 flex flex-col items-center">
        <div className="bg-red-600 text-white font-black px-4 py-1 rounded shadow-xl border-2 border-[#5d4037] flex items-center gap-2">
            <Tag size={16} />
            <span>HEAD</span>
        </div>
        <div className="w-1 h-8 bg-[#5d4037]"></div>
        <div className="w-3 h-3 rounded-full border-4 border-[#5d4037] bg-white -mt-1"></div>
    </div>
));

const CAPTIONS = [
    { text: "But how does Git know where YOU are?", duration: 3 },
    { text: "Meet HEAD. It's a pointer.", duration: 2.5 },
    { text: "Usually, HEAD points to a branch.", duration: 3 },
    { text: "But if you checkout a commit directly...", duration: 2.5 },
    { text: "HEAD detaches.", duration: 1.5 },
    { text: "If you commit now, no branch follows you.", duration: 3.5 },
    { text: "These commits are orphaned.", duration: 2.5 },
    { text: "Floating in space... lost.", duration: 3 }
];

const HeadScene = ({ data, onComplete }) => {
    const containerRef = useRef(null);
    const cameraRef = useRef(null);
    const audioRef = useRef(null);
    const stickFigureRef = useRef(null);

    const headTagRef = useRef(null);
    const branchStickyRef = useRef(null);
    const c1Ref = useRef(null);
    const c2Ref = useRef(null);
    const orphanRef = useRef(null);
    const arrowRef = useRef(null);
    const orphanArrowRef = useRef(null);

    const [captionText, setCaptionText] = useState("");
    const [pose, setPose] = useState('idle');

    // IDLE
    useGSAP(() => {
        if (!stickFigureRef.current) return;
        gsap.to(stickFigureRef.current, { y: -5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, { scope: containerRef });

    // MAIN
    useGSAP(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Autoplay blocked"));
        }

        const tl = gsap.timeline();
        tl.set(cameraRef.current, { x: 0, y: 0, scale: 1 });
        setCaptionText("");
        setPose('idle');

        // SETUP: Positions relative to graph container center
        // C1 is left (-100), C2 is right (+100)
        tl.set(c1Ref.current, { x: -100, y: 0, opacity: 1 });
        tl.set(c2Ref.current, { x: 100, y: 0, opacity: 1 });
        // Sticky Note above C2
        tl.set(branchStickyRef.current, { x: 100, y: -70, rotation: -2, opacity: 1 });
        // HEAD above Sticky Note (chain hangs down ~50px from tag)
        tl.set(headTagRef.current, { x: 100, y: -130, opacity: 1 });
        // Orphan below C1
        tl.set(orphanRef.current, { x: -100, y: 120, scale: 0, opacity: 0 });

        // 0s: Intro
        tl.call(() => setCaptionText(CAPTIONS[0].text), null, 0);

        // 3s: Meet HEAD
        tl.call(() => setCaptionText(CAPTIONS[1].text), null, 3);
        tl.from(headTagRef.current, { scale: 0, opacity: 0, ease: "back.out" }, 3);

        // 5.5s: Points to branch
        tl.call(() => setCaptionText(CAPTIONS[2].text), null, 5.5);
        tl.to(headTagRef.current, { y: "-=10", duration: 0.2, yoyo: true, repeat: 3 }, 5.5);

        // 8.5s: Checkout commit
        tl.call(() => {
            setCaptionText(CAPTIONS[3].text);
            setPose('pointing_left');
        }, null, 8.5);

        // 11s: Detaches
        tl.call(() => setCaptionText(CAPTIONS[4].text), null, 11);
        tl.to(headTagRef.current, { y: -200, duration: 0.5, ease: "power2.in" }, 11);
        tl.to(headTagRef.current, { x: -100, duration: 0.5, ease: "power1.inOut" }, 11.5);
        tl.to(headTagRef.current, { y: -80, duration: 0.5, ease: "bounce.out" }, 12);
        tl.to(cameraRef.current, { x: 50, duration: 1.5 }, 11);

        // 12.5s: Commit now
        tl.call(() => {
            setCaptionText(CAPTIONS[5].text);
            setPose('typing');
        }, null, 12.5);

        // 14s: Orphan Appears
        tl.to(orphanRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out" }, 14);
        tl.fromTo(orphanArrowRef.current, { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 0.5 }, 14.5);
        tl.to(headTagRef.current, { y: 40, duration: 0.5 }, 14.5);

        // 16s: Orphaned
        tl.call(() => {
            setCaptionText(CAPTIONS[6].text);
            setPose('panic');
        }, null, 16);

        // 18.5s: Floating
        tl.call(() => setCaptionText(CAPTIONS[7].text), null, 18.5);
        tl.to([orphanRef.current, headTagRef.current], {
            x: "+=300", y: "+=50", rotation: 10, opacity: 0, duration: 4, ease: "power1.in"
        }, 18.5);
        tl.to(orphanArrowRef.current, { opacity: 0, duration: 1 }, 18.5);

    }, [data.id]);

    return (
        <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center bg-cream px-4 font-sans overflow-hidden relative">
            <audio ref={audioRef} src={`/audio/${data.id}.mp3`} onEnded={onComplete} />

            <div ref={cameraRef} className="relative w-full h-full flex items-center justify-center origin-center will-change-transform">

                {/* STAGE: 1200x700 */}
                <div className="relative w-full max-w-6xl h-[700px]">

                    {/* =============== TOP ZONE: GRAPH (0px - 350px) =============== */}
                    <div className="absolute top-0 left-0 right-0 h-[350px] flex items-center justify-center">

                        {/* Graph Container: 600x300, centered */}
                        <div className="relative w-[600px] h-[300px]">

                            {/* SVG Arrows Layer */}
                            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                                <defs>
                                    <marker id="arrowhead-head" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#5d4037" />
                                    </marker>
                                </defs>
                                {/* Arrow: C2 -> C1. Local coords: C2(100,0), C1(-100,0). Center (300, 150). */}
                                {/* From: 300+100-50=350. To: 300-100+50=250. Y=150 */}
                                <line x1="350" y1="150" x2="260" y2="150" stroke="#5d4037" strokeWidth="4" markerEnd="url(#arrowhead-head)" />

                                {/* Arrow: Orphan -> C1. Orphan(-100, 120), C1(-100, 0). */}
                                {/* Both at X=300-100=200. Y_orphan=150+120-50=220. Y_c1=150+50=200. */}
                                <line ref={orphanArrowRef} x1="200" y1="220" x2="200" y2="210" stroke="#5d4037" strokeWidth="4" markerEnd="url(#arrowhead-head)" strokeDasharray="100" />
                            </svg>

                            {/* Nodes Layer */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div ref={c1Ref} className="absolute"><CommitNode label="C1" /></div>
                                <div ref={c2Ref} className="absolute"><CommitNode label="C2" /></div>
                                <div ref={orphanRef} className="absolute opacity-0"><CommitNode label="??" className="bg-gray-200 border-gray-400 text-gray-400" /></div>
                            </div>

                            {/* Tags Layer */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div ref={branchStickyRef} className="absolute" style={{ transform: 'translate(-50%, -50%)' }}><StickyNote text="main" /></div>
                                <div ref={headTagRef} className="absolute" style={{ transform: 'translate(-50%, 0)' }}><HeadTag /></div>
                            </div>
                        </div>
                    </div>

                    {/* =============== BOTTOM ZONE: ACTOR (400px - 700px) =============== */}
                    <div className="absolute bottom-20 left-0 right-0 h-[300px] flex items-center justify-center pointer-events-none">
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

export default HeadScene;
