import React from 'react';
import { SceneWrapper, Title } from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import { motion } from 'framer-motion';

// Scene 8: Usage - Applying to Database
const Scene8 = () => {
    return (
        <SceneWrapper>
            <Title>Apply to Database 🗄️</Title>

            <div className="relative z-10 w-full flex flex-col items-center gap-6">
                <CodeBlock
                    fontSize="text-xl"
                    code={`class Database(metaclass=Singleton):
    def __init__(self):
        print("Connecting to DB...")
        self.connection = create_connection()`}
                    highlightedLines={[0]}
                />

                <motion.div
                    className="flex items-center gap-4 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span className="text-3xl">👆</span>
                    <span className="text-2xl text-green-400 font-bold">Just add metaclass=Singleton</span>
                </motion.div>
            </div>
        </SceneWrapper>
    );
};

export default Scene8;
