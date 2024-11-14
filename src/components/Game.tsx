import Section from './Section';
import { useGame } from '../contexts/GameContext';
import SelectColor from './SelectColor';
import StartGame from './StartGame';
import GameTitle from './GameTitle';
import Question from './Question';
import Score from './Score';
import Report from './Report';

function Game() {
  const { selectedColor, selectedQuestion, gameStarted, gameFinished } =
    useGame();
  if (!gameStarted) {
    return <StartGame />;
  }
  if(gameFinished) {
    return <Report />
  }
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <GameTitle />
        <Score />
        {!selectedColor && !selectedQuestion && <SelectColor />}
        {selectedColor && gameStarted && <Question />}
      </div>
    </Section>
  );
}

export default Game;
