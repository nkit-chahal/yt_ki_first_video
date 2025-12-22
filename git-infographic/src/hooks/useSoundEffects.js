import { useRef, useEffect } from 'react';

const SOUNDS = {
    'pop': '/sfx/pop.mp3',
    'click': '/sfx/computer-mouse-click.mp3',
    'whoosh': '/sfx/whoosh-end.mp3',
    'thud': '/sfx/thud-sound-effect.mp3',
    'ding': '/sfx/ding-dong.mp3',
    'typewriter': '/sfx/typing-keyboard-asmr.mp3',
    'buzzer': '/sfx/incorrect-buzzer-sound.mp3', // Rebase conflict
    'magic': '/sfx/magical-twinkle.mp3',         // Recovery/Revert
    'scribble': '/sfx/pencil-scribbles.mp3',     // Strikethrough
};

export const useSoundEffects = () => {
    const audioCache = useRef({});

    useEffect(() => {
        // Preload sounds
        Object.entries(SOUNDS).forEach(([key, src]) => {
            const audio = new Audio(src);
            audio.volume = 0.5; // Default volume to avoid blasting ears
            audioCache.current[key] = audio;
        });
    }, []);

    const playSound = (name, volume = 0.5) => {
        const audio = audioCache.current[name];
        if (audio) {
            audio.currentTime = 0; // Rewind to start for rapid re-firing
            audio.volume = volume;
            audio.play().catch(e => console.warn(`Sound ${name} failed to play:`, e));
        } else {
            console.warn(`Sound effect '${name}' not found.`);
        }
    };

    return { playSound };
};
