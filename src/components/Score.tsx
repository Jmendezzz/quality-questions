import { useGame } from '../contexts/GameContext';

function Score() {
  const { score } = useGame();
  return <h2 className='text-4xl text-center'>Puntuación: {score}</h2>;
}

export default Score;
