import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Dig Deeper Transition
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <AICharacter mood="thinking" label="Let's dig deeper..." />
        <motion.div
            className="flex items-center gap-6 bg-gradient-to-r from-zinc-800 to-zinc-900 text-white px-12 py-8 rounded-full shadow-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring" }} // Sync: "dig deeper"
        >
            <span className="text-8xl">⛏️</span>
            <span className="text-7xl font-hand font-bold">Training Data</span>
        </motion.div>
    </div>
);

// Scene 2: Model Brain Limitation
export const Scene2 = () => (
    <div className="flex items-center justify-center gap-24 h-full">
        <AICharacter mood="neutral" />
        <div className="relative">
            <motion.div
                className="w-96 h-72 bg-zinc-100 border-8 border-zinc-400 rounded-2xl flex items-center justify-center text-center p-8"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <div>
                    <div className="text-6xl font-bold text-zinc-600 font-hand mb-4">Training Set Boundary</div>
                    <div className="text-3xl text-zinc-400">(I only know what's in here)</div>
                </div>
            </motion.div>

            {/* Padlock Icon */}
            <motion.div
                className="absolute -top-12 -right-12 text-8xl"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, type: "spring" }} // Sync: "only know"
            >
                🔒
            </motion.div>
        </div>
    </div>
);

// Scene 3: Missing Knowledge
export const Scene3 = () => (
    <div className="flex flex-col items-center justify-center gap-16 h-full">
        <div className="flex items-center gap-20">
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ delay: 1.5 }} // Sync: "specific language"
            >
                <div className="w-24 h-24 bg-red-100 border-4 border-red-400 rounded-xl flex items-center justify-center text-8xl">🎌</div>
                <div className="text-4xl font-hand font-bold">Japanese?</div>
            </motion.div>
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ delay: 3.0 }} // Sync: "or concept"
            >
                <div className="w-24 h-24 bg-blue-100 border-4 border-blue-400 rounded-xl flex items-center justify-center text-8xl">⚛️</div>
                <div className="text-4xl font-hand font-bold">Quantum Physics?</div>
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5 }} // Sync: "won't have that knowledge"
        >
            <AICharacter mood="sad" label="I've never seen that!" />
        </motion.div>
    </div>
);

// Scene 4: Web Crawl Chaos
export const Scene4 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-8xl font-black text-zinc-800">Common Crawl</h2>
        <div className="relative w-full max-w-4xl h-80 border-b-8 border-zinc-800 flex items-end justify-center overflow-hidden">
            <div className="absolute left-10 z-10">
                <AICharacter mood="surprised" />
            </div>

            {/* Scrolling Web Pages */}
            <div className="flex gap-8 absolute bottom-0 animate-scroll">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-48 h-64 bg-[#FDFBF7] border-4 border-zinc-300 p-4 text-lg font-mono overflow-hidden shadow-lg rounded-lg"
                        initial={{ x: 1000 }}
                        animate={{ x: -1000 }}
                        transition={{ duration: 8, delay: 1.0 + i * 0.8, repeat: Infinity, ease: "linear" }} // Sync: Start scrolling after title (~1s)
                    >
                        {"<html>...</html>"}
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

// Scene 5: Toxic Content Trash
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <div className="flex items-end gap-8">
            <motion.div
                className="text-9xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, type: "tween" }}
            >
                🗑️
            </motion.div>
            <AICharacter mood="sad" label="So much junk!" />
        </div>

        {/* Sync List: Clickbait -> Misinformation -> Toxic -> Fake News */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
            {[
                { label: "Clickbait", color: "orange", delay: 0.5 },
                { label: "Misinformation", color: "zinc", delay: 1.5 }, // Was "Spam"
                { label: "Toxicity", color: "yellow", delay: 2.5 },    // "Toxic content"
                { label: "Fake News", color: "red", delay: 3.5 }       // "Fake news"
            ].map((item) => (
                <motion.div
                    key={item.label}
                    className={`bg-${item.color}-100 text-${item.color}-800 px-8 py-4 rounded-xl font-hand font-bold border-2 border-${item.color}-300 text-5xl text-center`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: item.delay, type: "spring" }}
                >
                    {item.label}
                </motion.div>
            ))}
        </div>
    </div>
);

// Scene 6: Filtering Funnel
export const Scene6 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <div className="flex flex-col items-center">
            {/* Funnel Graphic */}
            <div className="relative flex flex-col items-center transform scale-150">
                <div className="w-48 h-12 bg-zinc-300 rounded-t-lg border-2 border-zinc-400 mb-1 flex items-center justify-center gap-2 text-4xl">
                    <span>🔗</span><span>🔗</span><span>🔗</span>
                </div>
                <div className="w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-t-[100px] border-t-zinc-300"></div>
            </div>
            <motion.div
                className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg text-4xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.5, type: "spring" }} // Sync: "three upvotes"
            >
                3+ Upvotes (Reddit)
            </motion.div>
        </div>
        <div className="text-8xl text-zinc-300">➜</div>

        <div className="flex flex-col items-center gap-8">
            <motion.div
                className="w-48 h-56 bg-zinc-800 rounded-xl shadow-xl flex items-center justify-center border-8 border-zinc-600"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5.0, type: "spring" }} // Sync: "GPT-2"
            >
                <span className="text-white font-bold text-6xl">GPT-2</span>
            </motion.div>
            <AICharacter mood="happy" label="Clean data!" />
        </div>
    </div>
);

// Scene 7: Language Skew Chart
export const Scene7 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <h2 className="text-7xl font-bold font-hand text-zinc-700">Language Bias</h2>
        <div className="flex items-center gap-20 transform scale-125">

            {/* Pie Chart Representation */}
            <div className="relative w-64 h-64 rounded-full border-4 border-zinc-800 overflow-hidden bg-zinc-100 shadow-xl">
                {/* 50% English Slice */}
                <motion.div
                    className="absolute top-0 right-0 w-full h-1/2 bg-blue-500 origin-bottom"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }} // Sync: "in English"
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
                />
                {/* Center Hole for Donut */}
                <div className="absolute inset-0 m-auto w-32 h-32 bg-[#FDFBF7] rounded-full flex items-center justify-center">
                    <motion.span
                        className="text-6xl font-black text-blue-600"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 4.0, type: "spring" }}
                    >
                        50%
                    </motion.span>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    <span className="font-hand font-bold text-4xl">English</span>
                </div>
                <div className="flex items-center gap-4 opacity-50">
                    <div className="w-8 h-8 bg-zinc-300 rounded"></div>
                    <span className="font-hand text-4xl">Everything Else</span>
                </div>
                <div className="text-2xl font-hand text-zinc-500 w-48 mt-2 leading-tight">
                    Billions of speakers under-represented!
                </div>
            </div>
        </div>
    </div>
);

// Scene 8: Specialized Models
export const Scene8 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <div className="flex items-end gap-24">
            <div className="flex flex-col items-center gap-8">
                <div className="w-24 h-24 bg-zinc-200 rounded-full flex items-center justify-center text-7xl">🤖</div>
                <div className="font-hand text-zinc-500 text-4xl">Generalist</div>
            </div>

            <div className="flex flex-col items-center gap-8">
                <motion.div
                    className="flex gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ staggerChildren: 0.5, delayChildren: 2.0 }} // Sync: Staggered start after intro
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="w-32 h-40 bg-red-100 border-4 border-red-500 rounded-xl flex flex-col items-center justify-center shadow-md p-4 text-center">
                        <span className="text-7xl">⚖️</span>
                        <span className="font-bold text-3xl mt-4 text-red-900">Legal</span>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="w-32 h-40 bg-green-100 border-4 border-green-500 rounded-xl flex flex-col items-center justify-center shadow-md p-4 text-center">
                        <span className="text-7xl">💊</span>
                        <span className="font-bold text-3xl mt-4 text-green-900">Medical</span>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="w-32 h-40 bg-yellow-100 border-4 border-yellow-500 rounded-xl flex flex-col items-center justify-center shadow-md p-4 text-center">
                        <span className="text-7xl">🇮🇳</span>
                        <span className="font-bold text-3xl mt-4 text-yellow-900">Hindi</span>
                    </motion.div>
                </motion.div>
                <div className="font-hand font-bold text-5xl bg-yellow-200 px-8 py-2 rounded-full border-2 border-yellow-400">Specialized Models</div>
            </div>
        </div>
        <AICharacter mood="happy" action="pointing" label="The Solution!" />
    </div>
);

const Chapter4Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
}

export default Chapter4Visualizer;
