import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

import { useSoundEffects } from './hooks/useSoundEffects';

gsap.registerPlugin(useGSAP, TextPlugin);

const VisualizationChaosSequence = () => {
    const containerRef = useRef(null);
    const { playSound } = useSoundEffects();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        // --- PHASE 1: CHAOS ---
        tl.set("#chaos-view", { opacity: 1, display: "flex" });

        // Draw chaotic line
        tl.call(() => playSound('scribble', 0.5), null, 0.5);
        tl.fromTo("#chaos-line",
            { strokeDasharray: 2000, strokeDashoffset: 2000 },
            { strokeDashoffset: 0, duration: 2, ease: "rough({ template: none.out, strength: 2, points: 50, taper: 'none', randomize: true, clamp: false})" }
        );

        tl.call(() => playSound('thud', 0.7), null, "<1");
        tl.fromTo("#text-chaos",
            { opacity: 0, scale: 2 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" },
            "-=1"
        );

        // --- PHASE 2: UNCLEAR ZONE ---
        // Fade in the grey zone
        tl.call(() => playSound('whoosh', 0.3), null, ">-0.5");
        tl.fromTo("#unclear-zone",
            { opacity: 0, scaleY: 0 },
            { opacity: 1, scaleY: 1, duration: 1, transformOrigin: "center" }
        );
        tl.fromTo("#text-unclear", { opacity: 0 }, { opacity: 1, duration: 0.5 });

        // Dim the line inside the zone
        tl.to("#chaos-line", { opacity: 0.3, duration: 0.5 }, "<");

        // --- PHASE 3: BREATHING ---
        // Transition to Breathing View
        tl.to("#chaos-view", { opacity: 0, duration: 0.5, delay: 1.5 });
        tl.set("#chaos-view", { display: "none" });
        tl.set("#breathing-view", { display: "flex", opacity: 1 });

        // Breathing Animation (Sine wave expansion)
        tl.call(() => playSound('magic', 0.4), null, "<");
        tl.fromTo("#breath-circle",
            { scale: 0.8, opacity: 0.5 },
            { scale: 1.2, opacity: 0.2, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" }
        );

        tl.fromTo("#text-breathing", { opacity: 0 }, { opacity: 1, duration: 1 });

        // --- PHASE 4: SCREAMING BUY ---
        // Show false signals on the "Exhale" (contraction)
        tl.call(() => playSound('pop', 0.3), null, ">1");
        tl.to("#signal-1", { opacity: 1, scale: 1.2, duration: 0.2, delay: 1 });

        tl.call(() => playSound('buzzer', 0.2), null, ">");
        tl.to("#signal-1", { backgroundColor: "#EF4444", innerText: "FAIL", duration: 0.1, delay: 0.5 }); // Turn Red

        tl.call(() => playSound('pop', 0.3), null, ">0.5");
        tl.to("#signal-2", { opacity: 1, scale: 1.2, duration: 0.2, delay: 0.5 });

        tl.call(() => playSound('buzzer', 0.2), null, ">");
        tl.to("#signal-2", { backgroundColor: "#EF4444", innerText: "FAIL", duration: 0.1, delay: 0.5 });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center p-10 font-sans text-gray-800">

            {/* PHASE 1 & 2: CHAOS & UNCLEAR ZONE */}
            <div id="chaos-view" className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 id="text-chaos" className="text-9xl font-black text-gray-200 absolute z-0 tracking-tighter">
                    CHAOS
                </h1>

                <div className="relative w-[800px] h-[400px]">
                    {/* Unclear Zone Overlay */}
                    <div id="unclear-zone" className="absolute top-[100px] bottom-[100px] left-0 right-0 bg-gray-200/80 border-y-2 border-gray-300 border-dashed flex items-center justify-center z-10 backdrop-blur-sm">
                        <span id="text-unclear" className="text-gray-500 font-mono text-xl font-bold tracking-widest bg-white px-2 py-1">
                            UNCLEAR ZONE (80%)
                        </span>
                    </div>

                    <svg className="w-full h-full overflow-visible z-20 relative" viewBox="0 0 800 400">
                        <path
                            id="chaos-line"
                            d="M0,200 L50,150 L100,250 L150,180 L200,220 L250,100 L300,300 L350,150 L400,250 L450,200 L500,280 L550,120 L600,220 L650,180 L700,350 L750,50 L800,200"
                            fill="none"
                            stroke="#1F2937"
                            strokeWidth="3"
                        />
                    </svg>
                </div>
            </div>

            {/* PHASE 3 & 4: BREATHING */}
            <div id="breathing-view" className="absolute inset-0 flex flex-col items-center justify-center hidden opacity-0 z-20">
                <div id="breath-circle" className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl z-0"></div>

                <h2 id="text-breathing" className="text-5xl font-serif italic text-gray-600 mb-12 z-10 relative">
                    The market is just <span className="text-blue-600">breathing</span>...
                </h2>

                <div className="relative w-[600px] h-[200px] flex items-center justify-center">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200">
                        {/* Smooth Sine Wave */}
                        <path
                            d="M0,100 Q150,0 300,100 T600,100"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="4"
                            strokeOpacity="0.5"
                        />
                        {/* Exhale part (Down) */}
                        <path
                            d="M300,100 Q450,200 600,100"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="4"
                        />
                    </svg>

                    {/* False Signals */}
                    <div id="signal-1" className="absolute top-[120px] left-[350px] bg-green-500 text-white font-bold px-3 py-1 rounded shadow-lg opacity-0 transform rotate-12 text-sm">
                        BUY!
                    </div>
                    <div id="signal-2" className="absolute top-[150px] left-[450px] bg-green-500 text-white font-bold px-3 py-1 rounded shadow-lg opacity-0 transform -rotate-12 text-sm">
                        BUY!
                    </div>
                </div>

                <p className="mt-8 text-gray-400 font-mono text-sm uppercase tracking-widest">
                    (Exhale Phase: Indicators Fail)
                </p>
            </div>
        </div>
    );
};

export default VisualizationChaosSequence;
