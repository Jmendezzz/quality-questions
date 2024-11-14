import { useGame } from '../contexts/GameContext';
import Counter from './Counter';
import MultipleQuestion from './MultipleQuestion';
import OpenQuestion from './OpenQuestion';

function Question() {
  const { selectQuestion } = useGame();

  const question = selectQuestion();

  if (!question) {
    return null;
  }

  if (question.type == 'multiple') {
    return (
      <div className='flex flex-col gap-2'>
                <Counter />
                <MultipleQuestion question={question} />
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-2'>
            <Counter />
            <OpenQuestion question={question} />
    </div>  
  );
}

export default Question;
