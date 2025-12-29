import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const DecoratorScene5 = () => {
    return (
        <SceneWrapper>
            <div className="flex flex-col items-center gap-2 mb-8">
                <Title>Not Magic. 🪄</Title>
                <Title>Just Code. <Search className="inline w-8 h-8 ml-2 text-blue-400" /></Title>
            </div>

            <div className="flex flex-col items-center gap-12 w-full max-w-2xl">
                <motion.div
                    className="bg-gray-800 p-6 rounded-xl w-full border border-yellow-500/50"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.4, scale: 0.9 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <span className="text-yellow-400 font-mono text-2xl block mb-2">@logger</span>
                    <span className="text-blue-300 font-mono text-2xl">def hello(): ...</span>
                </motion.div>

                <motion.div
                    className="text-4xl text-gray-400"
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 100 }}
                    transition={{ delay: 1.3 }}
                >
                    EQUALS
                </motion.div>

                <motion.div
                    className="bg-gray-800 p-8 rounded-xl w-full border-2 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                >
                    <div className="font-mono text-xl sm:text-2xl text-center">
                        <span className="text-blue-300">hello</span>
                        <span className="text-white"> = </span>
                        <span className="text-yellow-400 font-bold">logger</span>
                        <span className="text-white">(</span>
                        <span className="text-blue-300">hello</span>
                        <span className="text-white">)</span>
                    </div>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default DecoratorScene5;
