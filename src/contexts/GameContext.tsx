import React, { createContext, useContext, useRef, useState } from 'react';
import { Color } from '../models/Color';
import { Question } from '../models/Question';
import { questions, QUESTIONS_NUMBER } from '../constants/questions';

interface GameContextProps {
  selectQuestion: () => Question;
  selectedQuestion?: Question;
  answerQuestion: (isCorrect: boolean) => void;

  selectColor: (color: Color) => void;
  selectedColor?: Color;

  gameStarted: boolean;
  startGame: () => void;
  score: number;
  resetGame: () => void;
  gameFinished: boolean;

  correctAnswers: number;
  incorrectAnswers: number;
}
const questionsMap = questions;
const GameContext = createContext<GameContextProps | undefined>(undefined);

function GameProvider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState(0);
  const correctAnswers = useRef(0);
  const incorrectAnswers = useRef(0);
  const [selectedQuestion, setSelectedQuestion] = useState<
    Question | undefined
  >(undefined);

  const [selectedColor, setSelectedColor] = useState<Color | undefined>(
    undefined
  );

  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const selectQuestion = () => {
    const questions: Question[] = questionsMap.get(selectedColor!)!;

    const question = questions[Math.floor(Math.random() * questions.length)];
    questions.splice(questions.indexOf(question), 1);
    return question;
  };

  const answerQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      correctAnswers.current++;
      setScore((score) => score + 1);
    }
    if (!isCorrect) {
      incorrectAnswers.current++;
      setScore((score) => score - 1);
    }
    setSelectedColor(undefined);
    setSelectedQuestion(undefined);

    if (correctAnswers.current + incorrectAnswers.current ===  QUESTIONS_NUMBER) {
      setGameFinished(true);
    }
  };

  const selectColor = (color: Color) => {
    setSelectedColor(color);
  };

  const startGame = () => {
    setGameStarted(true);
  }

  const resetGame = () => {
    setScore(0);
    setSelectedQuestion(undefined);
    setSelectedColor(undefined);
    correctAnswers.current = 0;
    incorrectAnswers.current = 0;
  };

  return (
    <GameContext.Provider
      value={{
        selectQuestion,
        selectedQuestion,
        answerQuestion,
        selectColor,
        selectedColor,
        score,
        resetGame,
        startGame,
        gameStarted,
        correctAnswers: correctAnswers.current,
        incorrectAnswers: incorrectAnswers.current,
        gameFinished
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
};

export { GameProvider, useGame };
