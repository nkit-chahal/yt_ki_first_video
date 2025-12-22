import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Caption from './Caption';
import StickFigure from './visuals/StickFigure';
import { FolderOpen, Package, Database, FileText } from 'lucide-react';

const CAPTIONS = [
    { text: "Before we undo anything...", duration: 2 },
    { text: "We must understand the Three Areas.", duration: 3 },
    { text: "1. Your Working Directory.", duration: 2.5 },
    { text: "Actual files on your disk.", duration: 2.5 },
    { text: "2. The Staging Area (The Index).", duration: 3 },
    { text: "The waiting room for the next commit.", duration: 3 },
    { text: "3. The Repository.", duration: 2 },
    { text: "Your project's permanent history.", duration: 3 },
    { text: "Git commands move data between these layers.", duration: 4 }
];

const AreaColumn = React.forwardRef(({ title, icon: Icon, color, children, className = "" }, ref) => (
    <div ref={ref} className={`h-full flex flex-col items-center pt-24 ${color} ${className} opacity-0 relative`}>
        <div className="absolute top-4 left-4 opacity-10">
            <Icon size={200} />
        </div>
        <div className="z-10 bg-white/80 backdrop-blur-sm p-4 rounded-xl border-2 border-dashed border-gray-400 mb-8 shadow-sm">
            <Icon size={48} className="text-gray-700 mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-gray-800 text-center">{title}</h2>
        </div>
        <div className="z-10 w-full px-8 flex flex-col items-center gap-4">
            {children}
        </div>
    </div>
));

const FileIcon = React.forwardRef(({ name }, ref) => (
    <div ref={ref} className="bg-white p-3 rounded shadow-md border border-gray-300 flex items-center gap-2 w-48">
        <FileText className="text-blue-500" />
        <span className="font-mono text-sm text-gray-700">{name}</span>
    </div>
));

const ThreeAreasScene = ({ data, onComplete }) => {
    const containerRef = useRef(null);
    const audioRef = useRef(null);
    const stickFigureRef = useRef(null);

    // Columns
    const workColRef = useRef(null);
    const stageColRef = useRef(null);
    const repoColRef = useRef(null);

    // Elements
    const fileRef = useRef(null); // The moving file

    const [captionText, setCaptionText] = useState("");
    const [pose, setPose] = useState('idle');

    // IDLE
    useGSAP(() => {
        if (!stickFigureRef.current) return;
        gsap.to(stickFigureRef.current, { y: -5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, { scope: containerRef });

    // MAIN
    useGSAP(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Autoplay blocked"));
        }

        const tl = gsap.timeline();
        setCaptionText("");
        setPose('idle');

        // SETUP
        tl.set([workColRef.current, stageColRef.current, repoColRef.current], { opacity: 0, y: 50 });
        // File starts in Working
        tl.set(fileRef.current, { opacity: 0, x: 0, y: 0 });

        // 0s: Intro
        tl.call(() => setCaptionText(CAPTIONS[0].text), null, 0);

        // 2s: Label
        tl.call(() => setCaptionText(CAPTIONS[1].text), null, 2);

        // 5s: Working Dir Reveal
        tl.call(() => {
            setCaptionText(CAPTIONS[2].text);
            setPose('pointing_left');
        }, null, 5);
        tl.to(workColRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "back.out" }, 5);

        // 7.5s: "Actual files"
        tl.call(() => setCaptionText(CAPTIONS[3].text), null, 7.5);
        // Show file
        tl.fromTo(fileRef.current,
            { opacity: 0, scale: 0, x: -300 }, // Position visually in left col
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out" },
            7.5
        );

        // 10s: Stage Reveal
        tl.call(() => {
            setCaptionText(CAPTIONS[4].text), null, 10
            setPose('thinking');
        });
        tl.to(stageColRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "back.out" }, 10);

        // 13s: "Waiting Room" (Move File)
        tl.call(() => setCaptionText(CAPTIONS[5].text), null, 13);
        // Move file to center
        tl.to(fileRef.current, { x: 0, duration: 1, ease: "power2.inOut" }, 13);
        tl.to(fileRef.current, { backgroundColor: "#ecfdf5", borderColor: "#34d399", duration: 0.5 }, 13.5); // Turn green

        // 16s: Repo Reveal
        tl.call(() => {
            setCaptionText(CAPTIONS[6].text);
            setPose('presenting');
        }, null, 16);
        tl.to(repoColRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "back.out" }, 16);

        // 18s: "Permanent History" (Move File to Repo)
        tl.call(() => setCaptionText(CAPTIONS[7].text), null, 18);
        tl.to(fileRef.current, { x: 300, duration: 1, ease: "power2.inOut" }, 18);
        tl.to(fileRef.current, { backgroundColor: "#fffbeb", borderColor: "#f59e0b", duration: 0.5 }, 18.5); // Turn amber

        // 21s: Summary
        tl.call(() => setCaptionText(CAPTIONS[8].text), null, 21);
        // File bounces
        tl.to(fileRef.current, { y: -10, duration: 0.5, yoyo: true, repeat: 3 }, 21);

    }, [data.id]);

    return (
        <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 font-sans overflow-hidden relative">
            <audio ref={audioRef} src={`/audio/${data.id}.mp3`} onEnded={onComplete} />

            {/* GRID LAYER */}
            <div className="w-full h-full max-w-6xl grid grid-cols-3 gap-0 divide-x-2 divide-dashed divide-gray-300 relative">

                {/* 1. WORKING */}
                <AreaColumn ref={workColRef} title="Working Directory" icon={FolderOpen} color="bg-gray-100/50">
                    {/* Placeholder for stability */}
                </AreaColumn>

                {/* 2. STAGING */}
                <AreaColumn ref={stageColRef} title="Staging Area" icon={Package} color="bg-green-50/50">
                </AreaColumn>

                {/* 3. REPO */}
                <AreaColumn ref={repoColRef} title="Repository" icon={Database} color="bg-amber-50/50">
                </AreaColumn>

                {/* ANIMATED FILE LAYER (Overlay) */}
                <div className="absolute top-[300px] w-full flex justify-center pointer-events-none z-20">
                    <div ref={fileRef}>
                        <FileIcon name="script.js" />
                    </div>
                </div>

            </div>

            {/* ACTOR LAYER */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
                <div ref={stickFigureRef}>
                    <StickFigure pose={pose} />
                </div>
            </div>

            <div className="absolute bottom-16 left-24 z-40">

            </div>
        </div>
    );
};

export default ThreeAreasScene;
