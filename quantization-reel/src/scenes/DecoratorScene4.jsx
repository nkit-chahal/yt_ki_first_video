import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const DecoratorScene4 = () => {
    return (
        <SceneWrapper>
            <Title>The Syntax 🐍</Title>

            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="relative p-6">
                    {/* The "Wrapping" Glow Effect */}
                    <motion.div
                        className="absolute inset-0 border-4 border-yellow-400 rounded-xl z-30 pointer-events-none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                        style={{ borderStyle: 'solid' }}
                    >
                        <div className="absolute inset-0 bg-yellow-400/10" />
                    </motion.div>

                    <motion.div
                        className="absolute -top-6 left-6 text-3xl font-bold text-yellow-400 font-mono z-40 bg-gray-900 border-2 border-yellow-400 px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        @logger
                    </motion.div>

                    <CodeBlock
                        code={`def process_data(data):\n    # logic here\n    return result`}
                    />
                </div>

                <motion.div
                    className="mt-12"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                >
                    <Sparkles className="w-20 h-20 text-yellow-400 fill-yellow-400/20 animate-pulse" />
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default DecoratorScene4;
