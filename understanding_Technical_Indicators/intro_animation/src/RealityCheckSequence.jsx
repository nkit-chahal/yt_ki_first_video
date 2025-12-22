import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

import { useSoundEffects } from './hooks/useSoundEffects';

gsap.registerPlugin(useGSAP, TextPlugin);

const RealityCheckSequence = () => {
    const containerRef = useRef(null);
    const { playSound } = useSoundEffects();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        // --- PHASE 1: RSI CHART ---
        tl.set("#rsi-view", { opacity: 1, display: "flex" });

        // Draw RSI line
        tl.call(() => playSound('whoosh', 0.5), null, 0.5);
        tl.fromTo("#rsi-line",
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 2 }
        );

        // Show Zones
        tl.call(() => playSound('pop', 0.3), null, "<0.5");
        tl.fromTo(".rsi-zone-line", { scaleX: 0 }, { scaleX: 1, duration: 0.5, stagger: 0.2 }, "<");
        tl.fromTo(".rsi-label", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "<");

        // "RSI < 30 = BUY"
        tl.call(() => playSound('click', 0.5), null, ">");
        tl.fromTo("#rsi-rule",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
        );

        // --- PHASE 2: TESTING ---
        // Transition to Test Mode
        tl.call(() => playSound('glitch', 0.3), null, ">1");
        tl.to("#rsi-view", { opacity: 0.2, filter: "blur(4px)", duration: 0.5, delay: 1.5 });
        tl.set("#test-overlay", { opacity: 1, display: "flex" });

        // "TESTING 10 YEARS"
        tl.call(() => playSound('thud', 0.5), null, "<");
        tl.fromTo("#text-testing", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });

        // Counter
        tl.call(() => playSound('typewriter', 0.2), null, "<");
        tl.to("#year-counter", {
            innerText: 10,
            duration: 2,
            snap: { innerText: 1 },
            ease: "linear"
        });

        // Fast flickering data background
        tl.to("#data-stream", { opacity: 0.5, duration: 0.5 }, "<");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center p-10 font-sans text-gray-800">

            {/* PHASE 1: RSI View */}
            <div id="rsi-view" className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h2 className="text-4xl font-bold text-gray-400 mb-8 tracking-widest">REALITY CHECK: RSI</h2>

                <div className="relative w-[800px] h-[300px] border border-gray-200 bg-white rounded-lg p-4 shadow-lg">
                    {/* Zones */}
                    <div className="rsi-zone-line absolute top-[30%] left-0 w-full h-[1px] bg-red-400 border-t border-dashed border-red-400"></div>
                    <div className="rsi-label absolute top-[28%] right-2 text-red-400 text-xs font-bold">70 (SELL)</div>

                    <div className="rsi-zone-line absolute top-[70%] left-0 w-full h-[1px] bg-green-400 border-t border-dashed border-green-400"></div>
                    <div className="rsi-label absolute top-[68%] right-2 text-green-400 text-xs font-bold">30 (BUY)</div>

                    <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300">
                        <path
                            id="rsi-line"
                            d="M0,150 Q100,50 200,150 T400,150 T600,250 T800,100"
                            fill="none"
                            stroke="#8B5CF6"
                            strokeWidth="3"
                        />
                    </svg>

                    <div id="rsi-rule" className="absolute bottom-4 left-4 bg-gray-900 text-white px-4 py-2 rounded shadow font-mono">
                        IF RSI &lt; 30: BUY
                    </div>
                </div>
            </div>

            {/* PHASE 2: Testing Overlay */}
            <div id="test-overlay" className="absolute inset-0 flex-col items-center justify-center hidden opacity-0 z-20">
                <div id="data-stream" className="absolute inset-0 bg-black opacity-0 z-0 overflow-hidden font-mono text-[10px] text-green-500 leading-none break-all pointer-events-none">
                    {Array(5000).fill(0).map(() => Math.random() > 0.5 ? '1 ' : '0 ').join('')}
                </div>

                <div className="z-10 bg-white/90 p-12 rounded-xl shadow-2xl border-4 border-gray-900 text-center">
                    <h1 id="text-testing" className="text-6xl font-black text-gray-900 mb-4">
                        TESTING
                    </h1>
                    <div className="text-9xl font-mono font-bold text-blue-600">
                        <span id="year-counter">0</span> YEARS
                    </div>
                    <p className="mt-4 text-gray-500 tracking-widest font-bold">OF HISTORICAL DATA</p>
                </div>
            </div>

        </div>
    );
};

export default RealityCheckSequence;
