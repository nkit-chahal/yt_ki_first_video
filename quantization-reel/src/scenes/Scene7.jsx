import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import { motion } from 'framer-motion';

// Scene 7: The Code - Metaclass Implementation
const Scene7 = () => {
    return (
        <SceneWrapper>
            <Title color="text-purple-400">The Implementation 🧙‍♂️</Title>

            <div className="relative z-10 w-full flex flex-col items-center">
                <CodeBlock
                    fontSize="text-base"
                    code={`class Singleton(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]`}
                    highlightedLines={[3, 4, 5, 6]}
                />
            </div>

            <motion.div
                className="mt-6 text-xl text-center text-gray-400 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Intercepts object creation
            </motion.div>
        </SceneWrapper>
    );
};

export default Scene7;
