import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

import { useSoundEffects } from './hooks/useSoundEffects';

gsap.registerPlugin(useGSAP, TextPlugin);

const ConclusionSequence = () => {
    const containerRef = useRef(null);
    const { playSound } = useSoundEffects();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        // --- PHASE 1: ALGO DEAD? ---
        tl.set("#conclusion-view", { opacity: 1, display: "flex" });
        tl.fromTo("#text-dead", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8 });

        // "NO."
        tl.call(() => playSound('thud', 0.8), null, "+=0.5");
        tl.fromTo("#text-no",
            { opacity: 0, scale: 5, color: "#fff" },
            { opacity: 1, scale: 1, color: "#DC2626", duration: 0.4, ease: "power4.in" },
            "<"
        );

        // --- PHASE 2: FOUND NOISE -> BUILD FILTER ---
        tl.to(["#text-dead", "#text-no"], { opacity: 0, y: -20, duration: 0.5, delay: 1 });

        // "WE FOUND THE NOISE"
        tl.call(() => playSound('whoosh', 0.3), null, "<");
        tl.fromTo("#text-found", { opacity: 0 }, { opacity: 1, duration: 0.5 });
        tl.to("#text-found", { color: "#9CA3AF", duration: 0.5, delay: 1 }); // fade to gray

        // "NEXT VIDEO" Card
        tl.call(() => playSound('whoosh', 0.5), null, "-=0.2");
        tl.fromTo("#next-card",
            { y: "100%" },
            { y: "0%", duration: 0.8, ease: "expo.out" },
            "-=0.2"
        );

        // "WE BUILD THE FILTER"
        tl.call(() => playSound('magic', 0.6), null, ">0.2");
        tl.fromTo("#text-filter",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center p-10 font-sans text-gray-800 bg-cream">

            <div id="conclusion-view" className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h2 id="text-dead" className="text-5xl font-bold text-gray-800 mb-8">
                    Is Algo Trading Dead?
                </h2>
                <h1 id="text-no" className="text-[12rem] font-black text-red-600 leading-none">
                    NO.
                </h1>

                <h3 id="text-found" className="text-3xl text-gray-800 font-mono mt-12 absolute bottom-32">
                    WE FOUND THE NOISE.
                </h3>
            </div>

            {/* NEXT CARD Overlay */}
            <div id="next-card" className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center z-20 text-white">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                <p className="text-gray-400 font-mono tracking-widest uppercase mb-4">In The Next Video</p>
                <h1 id="text-filter" className="text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    WE BUILD THE FILTER.
                </h1>

                {/* Python Logo small */}
                <div className="mt-12 w-16 h-16 opacity-50">
                    <img src="/python-logo.png" alt="Python" className="w-full h-full object-contain filter grayscale invert" />
                </div>
            </div>

        </div>
    );
};

export default ConclusionSequence;
