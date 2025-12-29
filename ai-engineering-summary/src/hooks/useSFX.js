import { useCallback } from 'react';

const SFX = {
    pop: '/sfx/pop.mp3',
    click: '/sfx/click.mp3',
    ding: '/sfx/ding.mp3',
    whoosh: '/sfx/swoosh.mp3',
    typing: '/sfx/typing.mp3',
    success: '/sfx/success.mp3',
    glitch: '/sfx/glitch.mp3',
    error: '/sfx/error.mp3',
    impact: '/sfx/impact.mp3',
};

export const useSFX = () => {
    const play = useCallback((name, volume = 0.5) => {
        const file = SFX[name];
        if (!file) {
            console.warn(`SFX not found: ${name}`);
            return;
        }

        const audio = new Audio(file);
        audio.volume = volume;
        audio.play().catch(e => console.log("SFX play failed:", e));
    }, []);

    return { play };
};

export default useSFX;
