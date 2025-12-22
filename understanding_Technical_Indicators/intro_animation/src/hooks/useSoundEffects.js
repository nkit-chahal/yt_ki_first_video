import { useRef, useEffect } from 'react';

const SOUNDS = {
    'pop': '/sfx/pop.mp3',
    'click': '/sfx/computer-mouse-click.mp3',
    'whoosh': '/sfx/whoosh-end.mp3',
    'thud': '/sfx/thud-291047.mp3',
    'ding': '/sfx/ding-402325.mp3',
    'typewriter': '/sfx/typing-keyboard-asmr.mp3',
    'buzzer': '/sfx/error-09-206494.mp3',
    'magic': '/sfx/magical-twinkle.mp3',
    'scribble': '/sfx/pencil-scribbles.mp3',
    'coin': '/sfx/cash-register-kaching-376867.mp3',
    'glitch': '/sfx/static-noise-437703.mp3',
};

export const useSoundEffects = () => {
    const audioCache = useRef({});

    useEffect(() => {
        // Preload sounds
        Object.entries(SOUNDS).forEach(([key, src]) => {
            const audio = new Audio(src);
            audio.volume = 0.5; // Default volume
            audioCache.current[key] = audio;
        });
    }, []);

    const playSound = (name, volume = 0.5) => {
        const audio = audioCache.current[name];
        if (audio) {
            audio.currentTime = 0; // Rewind
            audio.volume = volume;
            audio.play().catch(e => console.warn(`Sound ${name} failed to play:`, e));
        } else {
            console.warn(`Sound effect '${name}' not found.`);
        }
    };

    return { playSound };
};
