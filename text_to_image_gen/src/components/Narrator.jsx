import { motion, AnimatePresence } from 'framer-motion';

const Narrator = ({ text, isVisible = true }) => {
    return (
        <AnimatePresence>
            {isVisible && text && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-24 left-0 right-0 text-center z-50 pointer-events-none"
                >
                    <div className="inline-block dark-card px-10 py-6 backdrop-blur-md rounded-3xl shadow-2xl">
                        <p className="text-3xl font-light text-white/95 tracking-wide drop-shadow-md leading-relaxed">
                            {text}
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Narrator;
