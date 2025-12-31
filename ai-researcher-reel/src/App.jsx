import SceneManager from './components/SceneManager';

function App() {
    return (
        <div className="w-screen h-screen bg-neutral-900 flex items-center justify-center">
            <div className="aspect-[9/16] h-full max-h-screen bg-black relative overflow-hidden shadow-2xl">
                <SceneManager />
            </div>
        </div>
    );
}

export default App;
