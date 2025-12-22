import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

import { useSoundEffects } from './hooks/useSoundEffects';

gsap.registerPlugin(useGSAP, TextPlugin);

const AudienceSequence = () => {
    const containerRef = useRef(null);
    const { playSound } = useSoundEffects();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        // --- PART 1: The Hook (Existing) ---
        tl.call(() => playSound('pop', 0.4), null, 0.5);
        tl.from(".anim-text-1", { duration: 1, opacity: 0, y: 30, stagger: 0.2, delay: 0.5 })
            .to(".anim-text-1", { duration: 0.5, opacity: 0, y: -20, stagger: 0.1, delay: 2 }); // Fade out

        // --- PART 2: Signals vs Truth ---

        // "We aren't looking for 'signals'."
        tl.call(() => playSound('whoosh', 0.3), null, "-=0.2");
        tl.fromTo("#text-signals-container",
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.8 }
        );

        // Cross out "signals"
        tl.call(() => playSound('scribble', 0.5), null, "+=0.5");
        tl.to("#signals-word", { color: "#9CA3AF", duration: 0.3 }, "+=0.5"); // Gray out
        tl.fromTo("#cross-line", { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: "power4.out" }, "<");

        // Hide previous
        tl.to("#text-signals-container", { autoAlpha: 0, duration: 0.5, delay: 1 });

        // --- PART 3: The Truth in Noise ---

        // Show Noise Background
        tl.call(() => playSound('glitch', 0.15), null, "-=0.2");
        tl.fromTo("#noise-bg", { opacity: 0 }, { opacity: 0.1, duration: 1 });

        // "We are hunting for the truth hidden inside the noise."
        tl.fromTo("#text-truth-container", { opacity: 0 }, { opacity: 1, duration: 0.5 });

        // Animate "TRUTH" revealing
        tl.call(() => playSound('typewriter', 0.2), null, "<");
        tl.fromTo("#truth-word",
            { text: "01010101" },
            { text: "TRUTH", duration: 1.5, ease: "none", snap: "text" }
        );
        tl.call(() => playSound('magic', 0.4), null, ">-0.5");

        // Highlight "NOISE"
        tl.call(() => playSound('buzzer', 0.1), null, "-=0.5");
        tl.fromTo("#noise-word",
            { color: "#1F2937" },
            { color: "#DC2626", textShadow: "0px 0px 5px rgba(220, 38, 38, 0.5)", duration: 0.5, repeat: 3, yoyo: true },
            "-=1"
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center p-20 text-center font-sans">

            {/* Background Noise (Static characters) */}
            <div id="noise-bg" className="absolute inset-0 overflow-hidden font-mono text-xs leading-none text-black break-all pointer-events-none opacity-0 z-0">
                {Array(2000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>

            {/* PART 1 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                <h1 className="anim-text-1 text-6xl font-black text-gray-800 mb-8">
                    FORGET COMPLEX DEGREES.
                </h1>
                <p className="anim-text-1 text-4xl text-gray-600 font-serif leading-relaxed max-w-4xl">
                    If you understand basic logic, you can do this.
                </p>
                <p className="anim-text-1 text-xl text-red-600 font-mono mt-12 bg-red-50 p-4 border border-red-100 rounded">
                    WARNING: WE ARE GOING TO BREAK SOME GOLDEN RULES.
                </p>
            </div>

            {/* PART 2: SIGNALS */}
            <div id="text-signals-container" className="absolute z-20 opacity-0">
                <h2 className="text-5xl font-bold text-gray-800">
                    We aren't looking for <span className="relative inline-block mx-2 font-mono text-gray-900">
                        <span id="signals-word">'SIGNALS'</span>
                        <div id="cross-line" className="absolute top-1/2 left-0 w-full h-1 bg-red-600 transform -translate-y-1/2 origin-left"></div>
                    </span>
                </h2>
            </div>

            {/* PART 3: TRUTH */}
            <div id="text-truth-container" className="absolute z-20 opacity-0 flex flex-col items-center">
                <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                    We are hunting for the <br />
                    <span id="truth-word" className="text-7xl font-black text-blue-600 block mt-4 tracking-widest">TRUTH</span>
                </h2>
                <h3 className="text-3xl text-gray-500 mt-8 font-serif italic">
                    hidden inside the <span id="noise-word" className="font-mono font-bold not-italic">noise</span>.
                </h3>
            </div>
        </div>
    );
};

export default AudienceSequence;
