import React from 'react';
import { motion } from 'framer-motion';
import AICharacter from '../../components/AICharacter';

// Scene 1: Transformers Intro
export const Scene1 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h1
            className="text-6xl font-black text-zinc-800 uppercase tracking-tighter"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }} // Sync: "model architecture..."
        >
            Transformers
        </motion.h1>
        <motion.div
            className="flex items-center gap-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
        >
            <div className="text-6xl">🤖</div>
            <div className="text-6xl text-zinc-300">+</div>
            <div className="text-6xl">🧠</div>
        </motion.div>
        <motion.div
            className="bg-gradient-to-r from-indigo-100 to-purple-100 border-4 border-indigo-500 px-8 py-3 rounded-full text-5xl font-hand font-bold text-indigo-800 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, type: "spring" }} // Sync: "attention mechanism"
        >
            The Attention Mechanism
        </motion.div>
    </div>
);

// Scene 2: History Flashback
export const Scene2 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.div
            className="text-8xl font-hand text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            Before Transformers...
        </motion.div>
        <motion.div
            className="flex items-center gap-12"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.0, type: "spring" }} // Sync: "what came before" / "RNNs" context
        >
            <div className="w-72 h-56 bg-zinc-200 border-4 border-zinc-400 rounded-2xl flex flex-col items-center justify-center">
                <div className="text-9xl">📜</div>
                <div className="text-5xl font-bold mt-4">RNNs</div>
                <div className="text-2xl text-zinc-500">Recurrent Neural Networks</div>
            </div>
            <AICharacter mood="thinking" label="Old school..." />
        </motion.div>
    </div>
);

// Scene 3: Seq2Seq RNN
export const Scene3 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <motion.h2
            className="text-7xl font-black text-zinc-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }} // Sync: "sequence-to-sequence"
        >
            Sequence-to-Sequence
        </motion.h2>
        <div className="flex items-center gap-12">
            {/* Input Sequence */}
            <div className="flex flex-col items-center gap-4">
                <div className="text-4xl font-hand text-zinc-500">Input</div>
                <div className="flex gap-3">
                    {["Hello", "World", "!"].map((word, i) => (
                        <motion.div
                            key={word}
                            className="w-28 h-20 bg-blue-100 border-4 border-blue-400 rounded-xl flex items-center justify-center font-bold text-3xl shadow-lg"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.0 + i * 0.5 }} // Sync: "used recurrent neural networks..."
                        >
                            {word}
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                className="text-8xl text-zinc-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
            >
                ➜
            </motion.div>

            {/* Output Sequence */}
            <div className="flex flex-col items-center gap-4">
                <div className="text-4xl font-hand text-zinc-500">Output</div>
                <div className="flex gap-3">
                    {["Hola", "Mundo", "!"].map((word, i) => (
                        <motion.div
                            key={word}
                            className="w-28 h-20 bg-green-100 border-4 border-green-400 rounded-xl flex items-center justify-center font-bold text-3xl shadow-lg"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 4.0 + i * 0.5 }} // Sync: "tasks like translation"
                        >
                            {word}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        <div className="text-5xl font-hand text-zinc-400 mt-4">Translation Task (RNN Era)</div>
    </div>
);

// Scene 4: Encoder Decoder
export const Scene4 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        {/* Encoder */}
        <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 }} // Sync: "encoder"
        >
            <div className="w-56 h-72 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                <div className="text-9xl mb-4">📥</div>
                <div className="text-5xl font-bold">Encoder</div>
                <div className="text-2xl mt-2 opacity-80">Process Input</div>
            </div>
            <div className="text-3xl font-hand text-zinc-500">Token by Token</div>
        </motion.div>

        {/* Arrow */}
        <motion.div
            className="text-8xl text-zinc-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.5 }}
        >
            ➜
        </motion.div>

        {/* Decoder */}
        <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3.5 }} // Sync: "decoder"
        >
            <div className="w-56 h-72 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                <div className="text-9xl mb-4">📤</div>
                <div className="text-5xl font-bold">Decoder</div>
                <div className="text-2xl mt-2 opacity-80">Generate Output</div>
            </div>
            <div className="text-3xl font-hand text-zinc-500">Token by Token</div>
        </motion.div>
    </div>
);

// Scene 5: Compression Problem
export const Scene5 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <div className="flex items-center gap-16">
            {/* Book */}
            <motion.div
                className="flex flex-col items-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
            >
                <div className="text-9xl">📚</div>
                <div className="text-4xl font-hand mt-4">Entire Book</div>
            </motion.div>

            {/* Compression Arrow */}
            <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="text-7xl">🗜️</div>
                <div className="text-8xl text-red-400">➜</div>
            </motion.div>

            {/* Tiny Summary */}
            <motion.div
                className="flex flex-col items-center"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.5 }} // Sync: "compressed representation"
            >
                <div className="w-36 h-24 bg-yellow-100 border-4 border-yellow-400 rounded-xl flex items-center justify-center">
                    <div className="text-5xl">📝</div>
                </div>
                <div className="text-4xl font-hand mt-4 text-red-600">Brief Summary</div>
            </motion.div>
        </div>
        <motion.div
            className="bg-red-100 border-4 border-red-400 px-10 py-6 rounded-2xl text-5xl font-hand text-red-800 text-center max-w-3xl flex items-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 6.0 }} // Sync: "brief summary" / "lost info"
        >
            <AICharacter mood="sad" />
            <span>❌ Lost Information!</span>
        </motion.div>
    </div>
);

// Scene 6: Sequential Slow
export const Scene6 = () => (
    <div className="flex flex-col items-center justify-center gap-12 h-full">
        <motion.h2
            className="text-8xl font-black text-red-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            🐢 Sequential = Slow
        </motion.h2>
        <div className="flex gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    className="w-24 h-24 bg-zinc-200 border-4 border-zinc-400 rounded-xl flex items-center justify-center text-6xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1], backgroundColor: ["#e4e4e7", "#a5f3fc", "#e4e4e7"] }}
                    transition={{ delay: 1.5 + i * 0.8, duration: 1, repeat: Infinity, repeatDelay: 2 }} // Sync: Slow reveal
                >
                    {i}
                </motion.div>
            ))}
        </div>
        <div className="text-5xl font-hand text-zinc-500">One token at a time...</div>
    </div>
);

// Scene 7: Attention Intro
export const Scene7 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <motion.h1
            className="text-8xl font-black text-indigo-700"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }} // Sync: "solved this with..."
        >
            ✨ The Attention Mechanism
        </motion.h1>
        <div className="flex items-center gap-12">
            {/* Input tokens */}
            <div className="flex flex-col gap-3">
                {["The", "cat", "sat"].map((word, i) => (
                    <motion.div
                        key={word}
                        className="w-32 h-16 bg-blue-100 border-2 border-blue-400 rounded-lg flex items-center justify-center font-bold text-3xl"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5 + i * 0.15 }}
                    >
                        {word}
                    </motion.div>
                ))}
            </div>

            {/* Attention Lines */}
            <motion.div
                className="text-9xl text-indigo-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }} // Sync: "weigh the importance"
            >
                ⚡
            </motion.div>

            {/* Output token */}
            <motion.div
                className="w-36 h-24 bg-green-200 border-4 border-green-500 rounded-xl flex items-center justify-center font-bold text-5xl shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 4.0, type: "spring" }} // Sync: "generating each output token"
            >
                on
            </motion.div>
        </div>
        <AICharacter mood="happy" action="pointing" label="This changed everything!" />
    </div>
);

// Scene 8: Book Reference Parallel
export const Scene8 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }} // Sync: "reference any page"
        >
            <div className="text-9xl">📖</div>
            <div className="text-5xl font-hand font-bold text-green-600">Reference Any Page!</div>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
            <AICharacter mood="happy" action="wave" label="So fast!" />
            <motion.div
                className="bg-gradient-to-r from-green-100 to-emerald-100 border-4 border-green-500 px-8 py-4 rounded-full text-4xl font-bold text-green-800"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.5 }} // Sync: "process input tokens in parallel"
            >
                ⚡ Parallel Processing
            </motion.div>
        </div>
    </div>
);

// Scene 9: Prefill and Decode
export const Scene9 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">Inference Steps</h2>
        <div className="flex items-center gap-20">
            {/* Prefill */}
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.0 }} // Sync: "Prefill"
            >
                <div className="w-64 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                    <div className="text-8xl mb-2">⚡</div>
                    <div className="text-5xl font-bold">Prefill</div>
                </div>
                <div className="text-3xl font-hand text-zinc-500">All tokens in parallel</div>
            </motion.div>

            <motion.div
                className="text-7xl text-zinc-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
            >
                ➜
            </motion.div>

            {/* Decode */}
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 4.5 }} // Sync: "Decode"
            >
                <div className="w-64 h-48 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl">
                    <div className="text-8xl mb-2">🔄</div>
                    <div className="text-5xl font-bold">Decode</div>
                </div>
                <div className="text-3xl font-hand text-zinc-500">One token at a time</div>
            </motion.div>
        </div>
    </div>
);

// Scene 10: QKV Vectors
export const Scene10 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-zinc-700">The QKV Trio</h2>
        <div className="flex items-center gap-12">
            <motion.div
                className="w-44 h-52 bg-gradient-to-br from-red-100 to-red-200 border-4 border-red-500 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.5, type: "spring" }} // Sync: "Query vectors"
            >
                <div className="text-9xl font-black text-red-600">Q</div>
                <div className="text-3xl font-hand mt-4">Query</div>
                <div className="text-lg text-zinc-500 mt-1">"What am I looking for?"</div>
            </motion.div>

            <motion.div
                className="w-44 h-52 bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-yellow-500 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 4.5, type: "spring" }} // Sync: "Key vectors"
            >
                <div className="text-9xl font-black text-yellow-600">K</div>
                <div className="text-3xl font-hand mt-4">Key</div>
                <div className="text-lg text-zinc-500 mt-1">"What do I have?"</div>
            </motion.div>

            <motion.div
                className="w-44 h-52 bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-500 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 5.5, type: "spring" }} // Sync: "Value vectors"
            >
                <div className="text-9xl font-black text-green-600">V</div>
                <div className="text-3xl font-hand mt-4">Value</div>
                <div className="text-lg text-zinc-500 mt-1">"The actual content"</div>
            </motion.div>
        </div>
    </div>
);

// Scene 11: QK Similarity
export const Scene11 = () => (
    <div className="flex flex-col items-center justify-center gap-8 h-full">
        <div className="flex items-center gap-8">
            <motion.div
                className="w-28 h-28 bg-red-500 rounded-full flex items-center justify-center text-white text-8xl font-black shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ delay: 0.5, repeat: Infinity, duration: 1.5, type: "tween" }} // Sync: "comparing Q and K"
            >
                Q
            </motion.div>
            <div className="text-8xl">×</div>
            <motion.div
                className="w-28 h-28 bg-yellow-500 rounded-full flex items-center justify-center text-white text-8xl font-black shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ delay: 0.5, repeat: Infinity, duration: 1.5, type: "tween" }}
            >
                K
            </motion.div>
            <div className="text-8xl">=</div>
            <motion.div
                className="px-10 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white text-6xl font-bold shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 4.0, type: "spring" }} // Sync: "high similarity score"
            >
                Attention Score
            </motion.div>
        </div>
        <motion.div
            className="text-5xl font-hand text-zinc-600 max-w-3xl text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.0 }}
        >
            High score = V content heavily influences output
        </motion.div>
        <AICharacter mood="happy" label="Simple but powerful!" />
    </div>
);

// Scene 12: Context Window Cost
export const Scene12 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-red-600">⚠️ Context Window Cost</h2>
        <div className="flex items-end gap-6">
            {[4, 8, 16, 32, 128].map((size, i) => (
                <motion.div
                    key={size}
                    className="flex flex-col items-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.0 + i * 0.2 }} // Sync: "computing more tokens..."
                >
                    <div
                        className="w-24 bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg shadow-lg"
                        style={{ height: `${size * 2}px` }}
                    />
                    <div className="text-3xl font-bold mt-3">{size}K</div>
                </motion.div>
            ))}
        </div>
        <div className="text-5xl font-hand text-zinc-500">More tokens = More K/V to compute & store</div>
    </div>
);

// Scene 13: Multi-Head Attention
export const Scene13 = () => (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
        <h2 className="text-7xl font-black text-indigo-700">Multi-Head Attention</h2>
        <div className="flex gap-5">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-20 h-28 bg-gradient-to-br from-indigo-100 to-purple-100 border-4 border-indigo-400 rounded-xl flex items-center justify-center shadow-lg"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.0 + i * 0.1 }}
                >
                    <div className="text-6xl">👁️</div>
                </motion.div>
            ))}
        </div>
        <motion.div
            className="bg-gradient-to-r from-indigo-100 to-purple-100 border-4 border-indigo-500 px-10 py-4 rounded-full text-4xl font-bold text-indigo-800"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 5.0, type: "spring" }} // Sync: "32 attention heads"
        >
            Llama-2-70B: 32 Heads!
        </motion.div>
        <div className="text-4xl font-hand text-zinc-500">Focus on different token groups simultaneously</div>
    </div>
);

// Scene 14: Transformer Block Stack
export const Scene14 = () => (
    <div className="flex items-center justify-center gap-20 h-full">
        <AICharacter mood="happy" action="pointing" label="Building blocks!" />
        <div className="flex flex-col items-center gap-4">
            {[3, 2, 1].map((i) => (
                <motion.div
                    key={i}
                    className="w-72 h-32 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center text-white shadow-2xl border-4 border-zinc-600"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5 + (4 - i) * 0.3 }} // Sync: "multiple transformer blocks"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-3xl font-bold">Block {i}</div>
                        <div className="flex gap-3 mt-3">
                            <span className="bg-indigo-500 px-3 py-1 rounded-lg text-lg">Attention</span>
                            <span className="bg-green-500 px-3 py-1 rounded-lg text-lg">FFN</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const Chapter5Visualizer = ({ sceneIndex }) => {
    const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11, Scene12, Scene13, Scene14];
    const SceneComponent = scenes[sceneIndex] || Scene1;
    return <SceneComponent />;
};

export default Chapter5Visualizer;
