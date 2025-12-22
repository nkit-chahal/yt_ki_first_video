import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

import { useSoundEffects } from './hooks/useSoundEffects';

gsap.registerPlugin(useGSAP, TextPlugin);

const FeaturesVelocitySequence = () => {
    const containerRef = useRef(null);
    const { playSound } = useSoundEffects();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        // --- PHASE 1: traders see PRICE ---
        tl.set("#price-view", { opacity: 1 });
        tl.fromTo("#price-chart-line", { drawSVG: "0%" }, { duration: 1, strokeDashoffset: 0 }); // handled via css setup below
        tl.call(() => playSound('pop', 0.4), null, 0.5);
        tl.fromTo("#price-label", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.5 });

        // --- PHASE 2: Morph to Velocity ---
        // Fade out Price view
        tl.to("#price-view", { opacity: 0.2, filter: "blur(5px)", duration: 1, delay: 1 });

        // Show Velocity View
        tl.call(() => playSound('whoosh', 0.5), null, ">-0.5");
        tl.set("#velocity-view", { opacity: 1, display: "flex" });
        tl.fromTo("#text-velocity",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5 }
        );

        // --- PHASE 3: Accelerating/Exhausted ---

        // Animate the Derivative Curve
        tl.fromTo("#velocity-curve",
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 1.5, ease: "power2.out" }
        );

        // Labels pop up
        tl.call(() => playSound('pop', 0.3), null, "-=1");
        tl.fromTo("#label-accel", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4 }, "-=1");
        tl.call(() => playSound('pop', 0.3), null, "-=0.5");
        tl.fromTo("#label-exhaust", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4 }, "-=0.5");

        // --- PHASE 4: Physics/Math ---
        tl.to(["#velocity-view", "#price-view"], { opacity: 0, duration: 0.5, delay: 1 });
        tl.set("#physics-view", { opacity: 1, display: "flex" });

        // "Lines into Physics"
        tl.call(() => playSound('scribble', 0.4), null, "<");
        tl.fromTo(".physics-symbol",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "back.out" }
        );

        tl.call(() => playSound('thud', 0.5), null, "-=0.2");
        tl.fromTo("#text-physics",
            { opacity: 0, scale: 1.2 },
            { opacity: 1, scale: 1, duration: 0.5 }
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center p-10 font-sans text-gray-800">

            {/* PHASE 1: PRICE VIEW */}
            <div id="price-view" className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-all">
                <h2 className="text-4xl text-gray-400 font-bold mb-4 uppercase tracking-widest">Traders See</h2>
                <div className="relative w-[600px] h-[300px] border-l-2 border-b-2 border-gray-300 p-4">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 600 300">
                        <path
                            id="price-chart"
                            d="M0,280 C150,250 200,200 300,150 S500,50 600,20"
                            fill="none"
                            stroke="#111827"
                            strokeWidth="4"
                        />
                    </svg>
                    <div id="price-label" className="absolute top-0 right-0 bg-gray-900 text-white font-mono px-3 py-1 rounded">
                        PRICE: $250
                    </div>
                </div>
            </div>

            {/* PHASE 2 & 3: VELOCITY VIEW */}
            <div id="velocity-view" className="absolute inset-0 flex-col items-center justify-center hidden z-20">
                <h1 id="text-velocity" className="text-8xl font-black text-blue-600 mb-8 uppercase tracking-tighter mix-blend-multiply">
                    VELOCITY
                </h1>

                <div className="relative w-[800px] h-[300px]">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300">
                        {/* Baseline */}
                        <line x1="0" y1="150" x2="800" y2="150" stroke="#ccc" strokeDasharray="5,5" />

                        {/* Derivative Curve (Velocity) */}
                        {/* Starts high (fast rise), drops to 0 (top of peak), goes negative (drop) */}
                        <path
                            id="velocity-curve"
                            d="M0,150 Q200,0 400,150 T800,150"
                            fill="none"
                            stroke="#DC2626"
                            strokeWidth="6"
                        />
                    </svg>

                    {/* Annotations */}
                    <div id="label-accel" className="absolute top-10 left-1/4 text-green-600 font-bold font-mono">
                        ▲ ACCELERATING
                    </div>
                    <div id="label-exhaust" className="absolute top-40 right-1/4 text-orange-500 font-bold font-mono">
                        ▼ EXHAUSTED
                    </div>
                </div>
            </div>

            {/* PHASE 4: PHYSICS VIEW */}
            <div id="physics-view" className="absolute inset-0 flex-col items-center justify-center hidden z-30 bg-cream/90 backdrop-blur-sm">
                <div className="flex space-x-12 mb-12">
                    <div className="physics-symbol text-7xl font-serif italic text-gray-800">
                        ∂P/∂t
                    </div>
                    <div className="physics-symbol text-7xl font-serif italic text-gray-800">
                        v = Δx/Δt
                    </div>
                </div>
                <h2 id="text-physics" className="text-6xl font-bold text-gray-900 tracking-wide uppercase border-4 border-gray-900 p-8">
                    PHYSICS
                </h2>
            </div>

        </div>
    );
};

export default FeaturesVelocitySequence;
