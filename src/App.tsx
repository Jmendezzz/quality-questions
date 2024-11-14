import ColorBackground from './components/ColorBackground';
import Game from './components/Game';
import Particles from './components/ui/particles';
import { GameProvider } from './contexts/GameContext';

function App() {

  return (
    <GameProvider>
      <Game />
      <Particles className='h-screen absolute top-0 right-0 left-0'  quantity={1800}/>
      <ColorBackground />
    </GameProvider>
  );
}

export default App;
