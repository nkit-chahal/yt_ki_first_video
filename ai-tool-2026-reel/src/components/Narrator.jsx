import { motion } from 'framer-motion';

const Narrator = ({ text, isVisible }) => {
    if (!isVisible) return null;

    return (
        <motion.div
            key={text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-32 left-0 right-0 flex justify-center px-12 z-50"
        >
            <div className="bg-black/80 backdrop-blur-xl px-10 py-6 rounded-2xl max-w-[900px] border border-white/10">
                <p className="text-white text-4xl font-semibold text-center leading-relaxed">
                    {text}
                </p>
            </div>
        </motion.div>
    );
};

export default Narrator;
