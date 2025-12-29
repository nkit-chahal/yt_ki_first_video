import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { DeepSeekVideo } from './DeepSeekVideo';
import '../index.css';

export const RemotionRoot = () => {
    return (
        <>
            <Composition
                id="DeepSeekReel"
                component={DeepSeekVideo}
                durationInFrames={2100} // ~70 seconds * 30fps
                fps={30}
                width={1080}
                height={1920}
                defaultProps={{}}
            />
        </>
    );
};

registerRoot(RemotionRoot);
