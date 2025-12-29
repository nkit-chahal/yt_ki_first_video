import { motion } from 'framer-motion';

export const SceneWrapper = ({ children, bgColor = "bg-gray-900" }) => (
    <div className={`h-full w-full flex flex-col items-center justify-center p-8 relative overflow-hidden ${bgColor}`}>
        <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 z-0"
            animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                scale: [1, 1.2, 1]
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
            }}
        />
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            {children}
        </div>
    </div>
);

export const Title = ({ children, color = "text-white" }) => (
    <h1 className={`text-6xl font-black ${color} text-center mb-8 drop-shadow-lg`}>
        {children}
    </h1>
);
