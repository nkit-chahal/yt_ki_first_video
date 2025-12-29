import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Reel from './Reel2';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Reel />
    </StrictMode>,
)
