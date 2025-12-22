import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

import { useSoundEffects } from './hooks/useSoundEffects';

gsap.registerPlugin(useGSAP, TextPlugin);

const TheLieSequence = () => {
    const containerRef = useRef(null);
    const { playSound } = useSoundEffects();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        // --- PHASE 1: The Wrong Question ---
        tl.fromTo("#q1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });

        // "WRONG QUESTION" Stamp
        tl.call(() => playSound('thud', 0.6), null, ">1");
        tl.fromTo("#stamp-wrong",
            { opacity: 0, scale: 2, rotation: -20 },
            { opacity: 1, scale: 1, rotation: -5, duration: 0.3, ease: "back.out(2)", delay: 1 }
        );

        // Hide Q1
        tl.to(["#q1", "#stamp-wrong"], { opacity: 0, scale: 0.8, duration: 0.5, delay: 1 });

        // --- PHASE 2: The Real Question (Barriers) ---
        tl.set("#barrier-view", { opacity: 1, display: "flex" });
        tl.call(() => playSound('whoosh', 0.4), null, "<");
        tl.fromTo("#q2", { opacity: 0 }, { opacity: 1, duration: 0.8 });

        // Draw Barriers
        tl.call(() => playSound('scribble', 0.3), null, "+=0.5");
        tl.fromTo(".barrier-line", { scaleX: 0 }, { scaleX: 1, duration: 1, stagger: 0.2, ease: "power2.out" }, "+=0.5");
        tl.fromTo(".barrier-label", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "<0.5");

        // --- PHASE 3: Simulation (The Price Path) ---
        // Animate Price hitting the top barrier
        tl.fromTo("#price-path-main",
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 2, ease: "none" }
        );

        // Hit effect
        tl.call(() => playSound('coin', 0.5), null, "-=0.1"); // Target Hit = Money
        tl.to("#hit-marker", { opacity: 1, scale: 1.5, duration: 0.1 }, "-=0.1");
        tl.to("#hit-marker", { scale: 1, duration: 0.2 });
        tl.fromTo("#hit-label", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });

        // --- PHASE 4: Labeling the Past ---
        // Monte Carlo faint lines
        tl.to(".sim-line", { opacity: 0.3, duration: 1, stagger: { amount: 0.5, from: "random" } });

        // Text change
        tl.to("#q2", { opacity: 0, duration: 0.5 });
        tl.call(() => playSound('ding', 0.5), null, ">");
        tl.fromTo("#text-labeling", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center p-10 font-sans text-gray-800">

            {/* PHASE 1: WRONG QUESTION */}
            <div id="q1" className="absolute z-10 text-center">
                <h2 className="text-5xl font-serif italic text-gray-600 mb-4">"Will price go up?"</h2>
                <div id="stamp-wrong" className="text-8xl font-black text-red-600 border-8 border-red-600 p-4 inline-block transform -rotate-6 mask-grunge opacity-0">
                    IMPOSSIBLE
                </div>
            </div>

            {/* PHASE 2 & 3: BARRIERS VIEW */}
            <div id="barrier-view" className="absolute inset-0 flex-col items-center justify-center hidden opacity-0 z-20">
                <h2 id="q2" className="text-3xl font-bold text-gray-800 mb-8 max-w-2xl text-center leading-relaxed">
                    "Will price go <span className="text-green-600">UP (+2%)</span> before it goes <span className="text-red-600">DOWN (-1%)</span>?"
                </h2>

                <div className="relative w-[800px] h-[400px] bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden">
                    {/* Barriers */}
                    <div className="barrier-line absolute top-[50px] left-0 w-full h-1 bg-green-500/50 border-b border-green-500 border-dashed"></div>
                    <div className="barrier-label absolute top-[55px] right-4 text-green-600 font-mono text-xs font-bold">TARGET (+2%)</div>

                    <div className="barrier-line absolute top-[350px] left-0 w-full h-1 bg-red-500/50 border-t border-red-500 border-dashed"></div>
                    <div className="barrier-label absolute top-[330px] right-4 text-red-600 font-mono text-xs font-bold">STOP LOSS (-1%)</div>

                    {/* Start Line */}
                    <div className="absolute top-[200px] left-0 w-full h-[1px] bg-gray-300"></div>
                    <div className="absolute top-[200px] left-2 text-gray-400 font-mono text-xs">ENTRY</div>

                    <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 800 400">
                        {/* Faint Sim Lines (Monte Carlo) */}
                        <path className="sim-line opacity-0" d="M0,200 L100,180 L300,250 L800,100" fill="none" stroke="#ddd" strokeWidth="1" />
                        <path className="sim-line opacity-0" d="M0,200 L150,220 L400,150 L800,300" fill="none" stroke="#ddd" strokeWidth="1" />
                        <path className="sim-line opacity-0" d="M0,200 L120,190 L200,200 L800,380" fill="none" stroke="#ddd" strokeWidth="1" />
                        <path className="sim-line opacity-0" d="M0,200 L200,100 L500,120 L800,20" fill="none" stroke="#ddd" strokeWidth="1" />

                        {/* Main Path */}
                        <path
                            id="price-path-main"
                            d="M0,200 L50,190 L100,210 L150,180 L200,160 L250,190 L300,150 L400,120 L500,80 L600,50"
                            fill="none"
                            stroke="#374151"
                            strokeWidth="3"
                        />
                    </svg>

                    {/* Hit Marker */}
                    <div id="hit-marker" className="absolute top-[42px] left-[600px] w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg opacity-0"></div>
                    <div id="hit-label" className="absolute top-[20px] left-[580px] bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold opacity-0">
                        LABEL: 1
                    </div>
                </div>
            </div>

            {/* PHASE 4: LABELING */}
            <div id="text-labeling" className="absolute bottom-20 z-30 opacity-0 bg-white/90 px-8 py-4 rounded-full shadow-2xl border border-gray-100">
                <h1 className="text-4xl font-black text-blue-600 tracking-tight uppercase">
                    LABELING THE PAST
                </h1>
            </div>

        </div>
    );
};

export default TheLieSequence;
