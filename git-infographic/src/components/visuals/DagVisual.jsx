import { motion } from 'framer-motion';

const Node = ({ x, y, delay, label }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5, type: 'spring' }}
        style={{
            position: 'absolute',
            left: x,
            top: y,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#0d1117',
            border: '2px solid #58a6ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#c9d1d9',
            fontWeight: 'bold',
            fontSize: '0.8rem',
            zIndex: 2
        }}
    >
        {label}
    </motion.div>
);

const Link = ({ x1, y1, x2, y2, delay }) => (
    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', zIndex: 1 }}>
        <motion.line
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#30363d"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay, duration: 0.5 }}
        />
        {/* Child points to Parent */}
        <motion.polygon
            points={`${x1},${y1} ${x1 - 5},${y1 + 10} ${x1 + 5},${y1 + 10}`} // Rough arrow calculation
            fill="#30363d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
            transform={`rotate(${Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI + 90} ${x1} ${y1})`}
        />
    </svg>
);

const DagVisual = () => {
    return (
        <div style={{ position: 'relative', width: '500px', height: '400px' }}>
            {/* Nodes: Bottom-Up or Left-Right. Let's do Left-Right for timeline */}

            {/* Parent */}
            <Node x={50} y={170} delay={0} label="A (Init)" />

            {/* Links appear after nodes */}
            <Link x1={150} y1={200} x2={110} y2={200} delay={1} />

            {/* Child 1 */}
            <Node x={150} y={170} delay={0.8} label="B" />

            <Link x1={250} y1={200} x2={210} y2={200} delay={1.8} />

            {/* Child 2 */}
            <Node x={250} y={170} delay={1.6} label="C" />

            <Link x1={350} y1={200} x2={310} y2={200} delay={2.6} />

            {/* Child 3 */}
            <Node x={350} y={170} delay={2.4} label="D" />

            <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center', color: '#8b949e' }}>
                Children point to Parents
            </div>
        </div>
    );
};

export default DagVisual;
