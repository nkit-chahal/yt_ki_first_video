import { motion } from 'framer-motion';
import { Layers, Database, HardDrive } from 'lucide-react';

const Area = ({ title, icon: Icon, color, x }) => (
    <div style={{ position: 'absolute', left: x, top: 50, width: '120px', height: '300px', border: `2px dashed ${color}`, borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
        <Icon color={color} size={40} />
        <span style={{ color: color, fontWeight: 'bold', marginTop: '10px' }}>{title}</span>
    </div>
);

const FileIcon = ({ delay }) => (
    <motion.div
        initial={{ x: 35, y: 150, opacity: 0 }}
        animate={{
            x: [35, 175, 315], // Moves from col 1 center to col 2 center to col 3 center 
            opacity: [0, 1, 1, 1, 0]
        }}
        transition={{ duration: 4, times: [0, 0.1, 0.4, 0.8, 1], repeat: Infinity, repeatDelay: delay }}
        style={{ position: 'absolute', top: 0, width: '50px', height: '60px', background: '#c9d1d9', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}
    >
        <span style={{ fontSize: '0.6rem', color: '#000' }}>Inex.js</span>
    </motion.div>
);

const ThreeAreasVisual = () => {
    return (
        <div style={{ position: 'relative', width: '500px', height: '400px' }}>
            <Area title="Working" icon={HardDrive} color="#8b949e" x={0} />
            <Area title="Staging" icon={Layers} color="#d29922" x={140} />
            <Area title="Repo" icon={Database} color="#238636" x={280} />

            <FileIcon delay={0} />
            <FileIcon delay={2} />
        </div>
    );
};

export default ThreeAreasVisual;
