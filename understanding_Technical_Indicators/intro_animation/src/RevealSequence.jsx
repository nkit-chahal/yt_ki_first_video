import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

import { useSoundEffects } from './hooks/useSoundEffects';

gsap.registerPlugin(useGSAP, TextPlugin);

const RevealSequence = () => {
    const containerRef = useRef(null);
    const { playSound } = useSoundEffects();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        // --- PHASE 1: THE FLAT LINE ---
        tl.set("#result-view", { opacity: 1, display: "flex" });

        // "THE RESULT?"
        tl.call(() => playSound('pop', 0.4), null, 0.5);
        tl.fromTo("#text-result", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.5 });
        tl.to("#text-result", { y: -100, scale: 0.8, duration: 0.5, delay: 0.5 });

        // Flat Line Graph
        tl.call(() => playSound('whoosh', 0.3), null, ">-0.5");
        tl.fromTo("#flat-line-container", { width: 0 }, { width: "100%", duration: 1, ease: "power2.out" });

        tl.call(() => playSound('thud', 0.8), null, "<");
        tl.fromTo("#text-nothing",
            { opacity: 0, letterSpacing: "0em" },
            { opacity: 1, letterSpacing: "0.5em", duration: 1 },
            "<"
        );

        // --- PHASE 2: 50/50 COIN FLIP ---
        tl.to(["#text-result", "#flat-line-container", "#text-nothing"], { opacity: 0, duration: 0.5, delay: 1.5 });
        tl.set("#coin-view", { display: "flex", opacity: 1 });

        // Coin Flip Animation
        tl.call(() => playSound('coin', 0.8), null, "<"); // Ringing sound
        tl.fromTo("#coin",
            { rotationY: 0, y: 100, opacity: 0 },
            { rotationY: 1800, y: 0, opacity: 1, duration: 2, ease: "circ.out" }
        );

        // "50/50" Text Split
        tl.call(() => playSound('pop', 0.4), null, ">-0.5");
        tl.fromTo("#text-50-left", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.5");
        tl.call(() => playSound('pop', 0.4), null, "<0.2");
        tl.fromTo("#text-50-right", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.5");

        // "Coin Flip wrapped in Math"
        tl.call(() => playSound('magic', 0.4), null, ">");
        tl.fromTo("#text-wrapper", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.2 });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center p-10 font-sans text-gray-800">

            {/* PHASE 1: RESULT */}
            <div id="result-view" className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 id="text-result" className="text-6xl font-bold text-gray-400">THE RESULT?</h1>

                <h2 id="text-nothing" className="text-9xl font-black text-gray-900 mt-8 mb-8">NOTHING.</h2>

                <div className="w-[800px] h-[4px] bg-gray-200 relative rounded-full overflow-hidden">
                    <div id="flat-line-container" className="absolute top-0 left-0 bottom-0 bg-red-500 w-full"></div>
                </div>
                <p className="mt-4 text-gray-500 font-mono">PROBABILITY SLOPE: 0.00</p>
            </div>

            {/* PHASE 2: COIN FLIP View */}
            <div id="coin-view" className="absolute inset-0 flex flex-col items-center justify-center hidden opacity-0 z-20">
                {/* 50 / 50 */}
                <div className="flex items-center justify-center space-x-8 mb-8 relative z-20">
                    <span id="text-50-left" className="text-9xl font-black text-gray-800">50</span>
                    <div className="w-[4px] h-[100px] bg-gray-300"></div>
                    <span id="text-50-right" className="text-9xl font-black text-gray-800">50</span>
                </div>

                {/* Coin Visual */}
                <div id="coin" className="w-32 h-32 bg-yellow-400 rounded-full border-4 border-yellow-500 shadow-xl flex items-center justify-center mb-8">
                    <span className="text-4xl font-serif font-bold text-yellow-700">$</span>
                </div>

                <p id="text-wrapper" className="text-3xl text-gray-600 font-serif italic">
                    "A coin flip wrapped in math."
                </p>
            </div>

        </div>
    );
};

export default RevealSequence;
