import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

import { useSoundEffects } from './hooks/useSoundEffects';

gsap.registerPlugin(useGSAP, TextPlugin);

const DataTrapSequence = () => {
    const containerRef = useRef(null);
    const { playSound } = useSoundEffects();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        // --- PHASE 1: Title ---
        tl.call(() => playSound('thud', 0.5), null, 0.2);
        tl.fromTo("#title-trap",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
        );
        tl.to("#title-trap", { opacity: 0, y: -50, duration: 0.5, delay: 1.5 });


        // --- PHASE 2: The Dirty CSV ---
        tl.set("#csv-grid", { opacity: 1, display: "flex" });

        // Scroll the rows
        tl.call(() => playSound('whoosh', 0.2), null, "<");
        tl.fromTo(".csv-row",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
        );

        // Highlight the "Glitch" Row (Price Drop / Zero Volume)
        tl.call(() => playSound('buzzer', 0.3), null, "+=0.5");
        tl.to("#row-glitch",
            { backgroundColor: "rgba(255, 0, 0, 0.1)", scale: 1.05, duration: 0.3 },
            "+=0.5"
        );
        tl.fromTo("#glitch-text",
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.3 },
            "<"
        );

        // --- PHASE 3: The Bad Trade (Graph) ---
        // Hide CSV
        tl.to("#csv-grid", { opacity: 0, scale: 0.9, duration: 0.5, delay: 1 });
        tl.set("#csv-grid", { display: "none" });
        tl.call(() => playSound('whoosh', 0.3), null, ">");
        tl.set("#graph-container", { display: "flex", opacity: 1 });

        // Draw Chart (Normal -> Glitch Drop -> Return)
        // Path: M0,50 L50,50 L100,50 L150,200 (Drop) L200,50 (Back)
        tl.fromTo("#chart-line",
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 2, ease: "none" }
        );

        // "BUY" Signal at the bottom of the dip
        tl.call(() => playSound('coin', 0.6), null, "-=1.0"); // KACHING! (Irony)
        tl.fromTo("#buy-signal",
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.3, ease: "back.out" },
            "-=1.0" // Trigger when line hits bottom
        );

        // Price returns, user realizes mistake
        tl.call(() => playSound('thud', 0.7), null, "-=0.2");
        tl.fromTo("#rekt-label",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" },
            "-=0.2"
        );


        // --- PHASE 4: Sanitization ---
        tl.to(["#graph-container", "#rekt-label", "#buy-signal"], { opacity: 0, duration: 0.5, delay: 1 });
        tl.set("#graph-container", { display: "none" });

        tl.set("#final-text", { display: "flex", opacity: 1 });

        tl.call(() => playSound('magic', 0.5), null, "<");
        tl.fromTo("#final-scan",
            { width: "0%" },
            { width: "100%", duration: 1.5, ease: "power2.inOut" }
        );

        tl.call(() => playSound('ding', 0.5), null, "-=0.75");
        tl.to("#text-sanitize", { color: "#059669", duration: 0.1 }, "-=0.75"); // Turn green as scan passes

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center p-10 font-sans text-gray-800">

            {/* PHASE 1: Title */}
            <div id="title-trap" className="absolute z-20 text-center">
                <h1 className="text-8xl font-black text-gray-900 mb-4 tracking-tighter">THE DATA TRAP</h1>
                <p className="text-2xl text-red-600 font-mono uppercase tracking-widest">Where Amateurs Die</p>
            </div>

            {/* PHASE 2: CSV Grid */}
            <div id="csv-grid" className="absolute inset-0 flex-col items-center justify-center hidden opacity-0 z-10 space-y-2 p-20 font-mono text-lg">
                <div className="flex w-full max-w-2xl border-b-2 border-gray-800 pb-2 mb-4 font-bold">
                    <div className="flex-1">TIMESTAMP</div>
                    <div className="flex-1">PRICE</div>
                    <div className="flex-1">VOLUME</div>
                </div>
                {/* Rows */}
                <div className="csv-row flex w-full max-w-2xl p-2 bg-white/50 border border-gray-200 rounded">
                    <div className="flex-1 text-gray-500">2023-10-01 09:00</div>
                    <div className="flex-1">$25,400.00</div>
                    <div className="flex-1">1,204</div>
                </div>
                <div id="row-glitch" className="csv-row flex w-full max-w-2xl p-2 bg-white/50 border border-gray-200 rounded relative overflow-visible">
                    <div className="flex-1 text-red-600 font-bold">2023-10-01 09:05</div>
                    <div className="flex-1 text-red-600 font-bold">$0.0001</div>
                    <div className="flex-1 text-red-600 font-bold">0</div>
                    <div id="glitch-text" className="absolute -right-32 top-1 text-red-600 font-bold bg-red-100 px-2 py-1 rounded text-xs border border-red-200 uppercase">
                        ⚠️ GLITCH
                    </div>
                </div>
                <div className="csv-row flex w-full max-w-2xl p-2 bg-white/50 border border-gray-200 rounded">
                    <div className="flex-1 text-gray-500">2023-10-01 09:10</div>
                    <div className="flex-1">$25,405.00</div>
                    <div className="flex-1">980</div>
                </div>
                <div className="csv-row flex w-full max-w-2xl p-2 bg-white/50 border border-gray-200 rounded">
                    <div className="flex-1 text-gray-500">2023-10-01 09:15</div>
                    <div className="flex-1">$25,390.00</div>
                    <div className="flex-1">1,450</div>
                </div>
            </div>

            {/* PHASE 3: Graph */}
            <div id="graph-container" className="absolute inset-0 items-center justify-center hidden opacity-0 z-10">
                <div className="relative w-[800px] h-[400px] bg-white border border-gray-200 shadow-xl rounded-xl p-8 overflow-visible">
                    <h3 className="absolute top-4 left-6 text-gray-400 font-mono text-sm">BAD_ALGO.PY EXECUTION...</h3>
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300">
                        {/* Grid */}
                        <line x1="0" y1="50" x2="800" y2="50" stroke="#eee" />
                        <line x1="0" y1="150" x2="800" y2="150" stroke="#eee" />
                        <line x1="0" y1="250" x2="800" y2="250" stroke="#eee" />

                        {/* The Glitch Path */}
                        <path
                            id="chart-line"
                            d="M0,100 L200,80 L300,90 L400,280 L450,85 L600,70 L800,90"
                            fill="none"
                            stroke="#374151"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Buy Signal Badge */}
                    <div id="buy-signal" className="absolute top-[280px] left-[380px] flex flex-col items-center">
                        <div className="bg-green-500 text-white font-bold px-3 py-1 rounded shadow-lg text-sm mb-2">BUY!</div>
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-green-500"></div>
                    </div>

                    {/* REKT result */}
                    <div id="rekt-label" className="absolute top-[100px] left-[500px] text-red-600 font-black text-4xl transform rotate-12 border-4 border-red-600 p-2 opacity-0">
                        BANKRUPT
                    </div>
                </div>
            </div>

            {/* PHASE 4: Santize */}
            <div id="final-text" className="absolute inset-0 flex-col items-center justify-center hidden opacity-0 z-10">
                <h2 id="text-sanitize" className="text-7xl font-bold text-gray-400 relative z-20 transition-colors">
                    WE SANITIZE.
                </h2>
                <div className="w-[600px] h-2 bg-gray-200 mt-8 rounded-full overflow-hidden relative">
                    <div id="final-scan" className="absolute left-0 top-0 bottom-0 bg-green-500 w-0"></div>
                </div>
            </div>

        </div>
    );
};

export default DataTrapSequence;
