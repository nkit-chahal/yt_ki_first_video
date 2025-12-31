import { motion, AnimatePresence } from 'framer-motion';

const Narrator = ({ text, isVisible = true }) => {
    return (
        <AnimatePresence>
            {isVisible && text && (
                <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute bottom-16 left-0 right-0 text-center z-50 pointer-events-none px-4"
                >
                    <div className="inline-block bg-black/70 backdrop-blur-md px-8 py-5 rounded-2xl shadow-2xl border border-white/10 max-w-2xl">
                        <p className="text-2xl font-medium text-white/95 tracking-wide leading-relaxed">
                            {text}
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Narrator;
