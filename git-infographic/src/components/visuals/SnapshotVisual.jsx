import { motion } from 'framer-motion';
import { FileText, Camera } from 'lucide-react';

const SnapshotVisual = () => {
    return (
        <div style={{ position: 'relative', width: '400px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {/* The File */}
            <motion.div
                initial={{ y: 0, opacity: 1, scale: 1 }}
                animate={{
                    y: [0, -50, 0],
                    scale: [1, 0.5, 0],
                    opacity: [1, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <FileText size={100} color="#c9d1d9" />
                <span style={{ marginTop: '10px', color: '#8b949e' }}>File State</span>
            </motion.div>

            {/* The Camera / Snapshot Box */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1.1, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1 }} // delayed to sync with file disappearing
                style={{
                    position: 'absolute',
                    width: '200px',
                    height: '240px',
                    background: '#fff',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    zIndex: 2
                }}
            >
                <div style={{ width: '100%', height: '180px', background: '#0d1117', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                    <FileText size={60} color="#58a6ff" />
                </div>
                <span style={{ color: '#000', fontWeight: 'bold' }}>COMMIT 4a3b1</span>
            </motion.div>

            {/* Flash Effect */}
            <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2.8, delay: 1.5 }}
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'white',
                    pointerEvents: 'none',
                    zIndex: 10
                }}
            />
        </div>
    );
};

export default SnapshotVisual;
