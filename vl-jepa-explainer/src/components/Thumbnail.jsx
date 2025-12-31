import React from 'react';

const Thumbnail = () => {
    return (
        <div className="w-full h-full bg-black flex relative overflow-hidden">
            {/* Background elements for depth (subtle) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-gray-900" />

            {/* Left Side: Yann LeCun */}
            <div className="relative w-1/2 h-full z-10">
                <div className="absolute inset-0 flex items-end justify-center">
                    <img
                        src="/yann-lecun.png"
                        alt="Yann LeCun"
                        className="h-[110%] object-cover object-center -mb-8 scale-110"
                        style={{ filter: 'contrast(1.1) brightness(1.1)' }}
                    />
                </div>
                {/* Gradient fade to integrate with black background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
            </div>

            {/* Right Side: Text */}
            <div className="relative w-1/2 h-full z-20 flex flex-col justify-center items-start pl-4 font-black leading-none">
                <h1 className="text-[280px] text-[#FF0000] tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
                    LEFT
                </h1>
                <h1 className="text-[200px] text-white tracking-tighter -mt-12" style={{ fontFamily: 'Inter, sans-serif' }}>
                    FACEBOOK
                </h1>
            </div>
        </div>
    );
};

export default Thumbnail;
