import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LifeBuoy, CheckCircle, ArrowRight } from 'lucide-react';
import StatusMessage from './visuals/StatusMessage';
import CommandPreview from './visuals/CommandPreview';
import CommitNode from './visuals/CommitNode';
import StickFigure from './visuals/StickFigure';
import StickyNote from './visuals/StickyNote';
import Caption from './Caption';
import { useSoundEffects } from '../hooks/useSoundEffects';

const ReflogScene = ({ data, onComplete }) => {
    if (!data) return null;

    const { playSound } = useSoundEffects();
    const containerRef = useRef(null);
    const audioRef = useRef(null);

    // Left Panel Refs
    const step1Ref = useRef(null);
    const step2Ref = useRef(null);
    const step3Ref = useRef(null);
    const successRef = useRef(null);

    // Right Panel Elements
    const graphContainerRef = useRef(null);
    const c1Ref = useRef(null);
    const c2Ref = useRef(null);
    const c3Ref = useRef(null); // The lost one
    const mainRef = useRef(null);
    const recoveryRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null); // The dashed one

    const [captionText, setCaptionText] = useState("");
    const [pose, setPose] = useState('idle');

    useGSAP(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Audio play prevented:", e));
        }

        const tl = gsap.timeline();
        setCaptionText("");
        setPose('idle');

        // Initial States
        gsap.set([step1Ref.current, step2Ref.current, step3Ref.current, successRef.current], { opacity: 0, x: -20 });
        gsap.set(c3Ref.current, { opacity: 0.3, filter: "grayscale(100%)" }); // Ghosted
        gsap.set(line2Ref.current, { strokeDasharray: "8 4", opacity: 0.5 }); // Dashed line
        gsap.set(recoveryRef.current, { scale: 0, opacity: 0, y: -20 });

        const CAPTIONS = [
            { text: "One last thing. You made a mistake. You reset hard.", duration: 4 },
            { text: "Run 'git reflog'. It shows everywhere HEAD has pointed recently.", duration: 5 },
            { text: "Those 'lost' commits are probably still there.", duration: 3 },
            { text: "Find the hash, point a branch to it, and you're saved.", duration: 4 }
        ];

        // 1. Scene Start (Panic)
        tl.call(() => { setCaptionText(CAPTIONS[0].text); setPose('panic'); });

        // 2. Step 1: Run Reflog
        tl.call(() => { setCaptionText(CAPTIONS[1].text); setPose('pointing_left'); }, null, 4);

        // Typewriter effect implied by box appearing
        tl.call(() => playSound('typewriter', 0.5), null, 4);
        tl.to(step1Ref.current, { opacity: 1, x: 0, duration: 0.5, ease: "back.out" }, 4);

        // 3. Step 2: Find Lost Commit
        tl.call(() => { setCaptionText(CAPTIONS[2].text); setPose('thinking'); }, null, 9);

        tl.call(() => playSound('pop', 0.5), null, 9);
        tl.to(step2Ref.current, { opacity: 1, x: 0, duration: 0.5, ease: "back.out" }, 9);
        // Highlight logic in graph
        tl.to(c3Ref.current, { opacity: 0.6, scale: 1.1, duration: 0.5, yoyo: true, repeat: 3 }, 9.5);

        // 4. Step 3: Restore It
        tl.call(() => { setCaptionText(CAPTIONS[3].text); setPose('magic'); }, null, 12);

        tl.call(() => playSound('typewriter', 0.5), null, 12);
        tl.to(step3Ref.current, { opacity: 1, x: 0, duration: 0.5, ease: "back.out" }, 12);

        // ANIMATION: Recovery Branch Appears
        tl.call(() => playSound('magic', 0.6), null, 13);
        tl.to(recoveryRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }, 13);

        // ANIMATION: Link Restored visually
        tl.to(c3Ref.current, { opacity: 1, filter: "none", duration: 0.5 }, 13.5);
        tl.to(line2Ref.current, { strokeDasharray: "0 0", opacity: 1, duration: 0.5 }, 13.5); // Solid line

        // 5. Success
        tl.call(() => playSound('ding', 0.7), null, 14);
        tl.to(successRef.current, { opacity: 1, x: 0, duration: 0.5, delay: 0.5 }, 14);
        tl.call(() => setPose('yay'), null, 14.5);

    }, [data.id]);


    return (
        <div ref={containerRef} className="w-full h-full flex flex-row bg-cream font-sans overflow-hidden relative">
            <audio ref={audioRef} src={`/audio/${data.id}.mp3`} onEnded={onComplete} />

            {/* --- LEFT PANEL: STEPS --- */}
            <div className="w-1/2 h-full p-16 flex flex-col justify-center relative z-20">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-2">
                        <LifeBuoy size={48} className="text-orange-500" />
                        <h1 className="text-6xl font-black text-orange-500 tracking-tight">Reflog</h1>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded border border-yellow-200 font-bold text-sm tracking-widest">SAFETY NET</span>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <LifeBuoy size={24} className="text-orange-500" />
                            Reflog is your safety net
                        </h2>
                        <p className="text-gray-500 mt-1">Find the hash → point a branch → you're saved</p>
                    </div>
                </div>

                {/* Steps Container */}
                <div className="flex flex-col gap-8">

                    {/* Step 1 */}
                    <div ref={step1Ref} className="flex gap-4 opacity-0">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-200 text-yellow-800 font-bold flex items-center justify-center text-lg">1</div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-700 mb-2">Run reflog</h3>
                            <div className="bg-slate-800 text-slate-200 p-4 rounded-lg font-mono text-sm shadow-lg border-l-4 border-slate-600">
                                <div className="opacity-50 mb-1">{">"} $ git reflog</div>
                                <div className="text-green-400 font-bold">$ git reflog</div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div ref={step2Ref} className="flex gap-4 opacity-0">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-200 text-yellow-800 font-bold flex items-center justify-center text-lg">2</div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-700 mb-2">Find lost commit</h3>
                            <div className="bg-slate-800 text-slate-200 p-4 rounded-lg font-mono text-sm shadow-lg">
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400 font-bold">7a8b9c</span>
                                    <span className="text-gray-400">C3</span>
                                    <ArrowRight size={14} className="text-gray-500" />
                                    <span className="text-red-400 font-bold">LOST</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div ref={step3Ref} className="flex gap-4 opacity-0">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-200 text-yellow-800 font-bold flex items-center justify-center text-lg">3</div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-700 mb-2">Restore it</h3>
                            <div className="bg-green-900/80 text-green-100 p-4 rounded-lg font-mono text-sm shadow-lg border border-green-700">
                                git checkout -b recovery 7a8b9c
                            </div>
                        </div>
                    </div>

                    {/* Success */}
                    <div ref={successRef} className="flex items-center gap-3 mt-4 opacity-0">
                        <CheckCircle size={32} className="text-green-500" />
                        <div>
                            <h3 className="text-xl font-bold text-green-700">Commit Found & Restored</h3>
                            <p className="text-sm text-gray-400">Git never forgets — reflog remembers</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- RIGHT PANEL: VISUALS --- */}
            <div className="w-1/2 h-full relative" ref={graphContainerRef}>
                <div className="absolute inset-0 flex items-center justify-center translate-y-[-10%]">
                    {/* Lines */}
                    <svg className="absolute w-full h-full pointer-events-none overflow-visible">
                        <defs>
                            <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L9,3 z" fill="#9ca3af" />
                            </marker>
                        </defs>
                        <g transform="translate(50%, 50%)"> {/* Relative to center of right panel */}
                            {/* C2 -> C1 (Left Arrow) */}
                            <line x1="-50" y1="0" x2="-150" y2="0" stroke="#9ca3af" strokeWidth="4" markerEnd="url(#arrow-gray)" />
                            {/* C3 -> C2 (Left Arrow) - Dashed initially */}
                            <line ref={line2Ref} x1="150" y1="0" x2="50" y2="0" stroke="#9ca3af" strokeWidth="4" markerEnd="url(#arrow-gray)" />
                        </g>
                    </svg>

                    {/* Nodes */}
                    <div className="flex items-center gap-24 relative z-10">
                        {/* C1 (Left) - Hidden or visually there? Reference image shows arrows pointing left implies C1 is further left. Let's just show Main -> [C2] <- [C3] */}

                        {/* C1 (Implicit or off-screen slightly? Let's show it to explain the 'history') */}
                        {/* Actually, let's match the ref exactly. It shows solid arrow left of Main, and dashed arrow right of Main. */}

                        {/* C2 (Main) */}
                        <div ref={c2Ref} className="relative">
                            {/* Main Sticky */}
                            <div ref={mainRef} className="absolute -top-24 left-1/2 -translate-x-1/2 z-20">
                                <StickyNote text="main" rotation={-5} color="bg-yellow-300" />
                            </div>
                            <CommitNode label="C2" />
                        </div>

                        {/* C3 (Lost/Recovery) */}
                        <div ref={c3Ref} className="relative opacity-50 filter grayscale">
                            {/* Recovery Sticky */}
                            <div ref={recoveryRef} className="absolute -top-32 left-1/2 -translate-x-1/2 z-20">
                                <StickyNote text="recovery" rotation={5} color="bg-yellow-300" />
                            </div>
                            <CommitNode label="C3" />
                        </div>
                    </div>

                </div>

                {/* Stick Figure (Bottom Right) */}
                <div className="absolute bottom-20 right-32 transform origin-bottom pointer-events-none z-30">
                    <StickFigure pose={pose} />
                </div>
            </div>

            {/* Bottom Navigation Space Buffer (Handled by Layout) */}
            <div className="absolute bottom-16 left-24 z-40">

            </div>

        </div>
    );
};

export default ReflogScene;
