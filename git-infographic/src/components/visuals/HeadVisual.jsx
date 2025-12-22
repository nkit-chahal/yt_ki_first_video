import { motion } from 'framer-motion';

const HeadVisual = () => {
    return (
        <div style={{ position: 'relative', width: '500px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {/* The Commit */}
            <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                border: '2px solid #30363d', background: '#0d1117',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                color: '#8b949e', position: 'absolute', top: '250px'
            }}>
                C1
            </div>

            {/* The Branch (Sticky Note) */}
            <div style={{
                position: 'absolute', top: '180px',
                background: '#238636', color: 'white',
                padding: '4px 10px', borderRadius: '4px',
                fontSize: '0.8rem'
            }}>
                main
            </div>

            {/* HEAD Pointer */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 80, 0] }} // Move down to commit (detach) and back up
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                style={{
                    position: 'absolute', top: '100px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}
            >
                <div style={{
                    background: '#1f6feb', color: 'white',
                    padding: '6px 14px', borderRadius: '20px',
                    fontWeight: 'bold', boxShadow: '0 4px 10px rgba(31, 111, 235, 0.4)'
                }}>
                    HEAD
                </div>
                <div style={{ width: '2px', height: '30px', background: '#1f6feb' }} />
                <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #1f6feb' }} />
            </motion.div>

            <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 4, times: [0.4, 0.5, 0.6], repeat: Infinity, repeatDelay: 1 }}
                style={{ position: 'absolute', top: '330px', color: '#ff7b72', fontWeight: 'bold' }}
            >
                DETACHED STATE
            </motion.div>
        </div>
    );
};

export default HeadVisual;
