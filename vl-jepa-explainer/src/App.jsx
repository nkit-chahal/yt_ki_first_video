import SceneManager from './components/SceneManager';


function App() {
    return (
        <div className="w-screen h-screen bg-neutral-900 flex items-center justify-center">
            <div className="aspect-video w-full max-w-[1920px] bg-black relative overflow-hidden shadow-2xl">
                <SceneManager />
                {/* <Thumbnail /> */}
            </div>
        </div>
    );
}

export default App;
