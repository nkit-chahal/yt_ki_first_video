import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Caption = ({ text }) => {
    const textRef = useRef(null);

    useGSAP(() => {
        // Reset and Animate in
        gsap.fromTo(textRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
    }, [text]); // Re-run when text changes

    return (
        <p
            ref={textRef}
            className="bg-black/80 text-white px-4 py-2 rounded-sm text-base font-medium max-w-[600px] text-left leading-normal shadow-lg backdrop-blur-sm"
        >
            {text}
        </p>
    );
};

export default Caption;
