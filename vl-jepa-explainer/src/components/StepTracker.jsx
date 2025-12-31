import { motion } from 'framer-motion';
import { Check, Circle } from 'lucide-react';

const steps = [
    { id: 'step1', label: 'Foundations' },
    { id: 'step2', label: 'Read Papers' },
    { id: 'step3', label: 'Implement' },
    { id: 'step4', label: 'Publish' },
    { id: 'step5', label: 'Community' },
];

const sceneOrder = ['hook', 'why', 'step1', 'step2', 'step3', 'step4', 'step5', 'cta'];

const StepTracker = ({ currentScene }) => {
    // Determine the index of the current scene in our "logical" flow
    const currentSceneIndex = sceneOrder.indexOf(currentScene);

    return (
        <div className="absolute top-6 left-6 z-50 flex flex-col gap-3">
            {steps.map((step, index) => {
                const stepSceneIndex = sceneOrder.indexOf(step.id);

                // Status logic:
                // Completed: If current scene is AFTER this step
                const isCompleted = currentSceneIndex > stepSceneIndex;
                // Active: If current scene IS this step
                const isActive = currentSceneIndex === stepSceneIndex;

                return (
                    <motion.div
                        key={step.id}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                            opacity: (isActive || isCompleted) ? 1 : 0.4,
                            x: 0,
                            scale: isActive ? 1.05 : 1
                        }}
                    >
                        {/* Icon */}
                        <div className={`
                            w-6 h-6 rounded-full flex items-center justify-center border-2
                            ${isCompleted ? 'bg-green-500 border-green-500' : 'bg-transparent'}
                            ${isActive ? 'border-white animate-pulse' : 'border-gray-500'}
                            ${(!isActive && !isCompleted) ? 'border-gray-700' : ''}
                        `}>
                            {isCompleted && <Check size={14} className="text-black stroke-[4]" />}

                            {!isCompleted && isActive && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>

                        {/* Label */}
                        <span className={`
                            text-sm font-bold tracking-wider uppercase
                            ${isCompleted ? 'text-green-500 line-through decoration-green-500/50' : ''}
                            ${isActive ? 'text-white' : 'text-gray-500'}
                        `}>
                            {step.label}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default StepTracker;
