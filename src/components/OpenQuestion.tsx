import { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Question } from '../models/Question';

function OpenQuestion({ question }: { question: Question }) {
  const { answerQuestion } = useGame();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (isCorrectAnswer: boolean) => {
    setIsCorrect(isCorrectAnswer);

    setTimeout(() => {
        answerQuestion(isCorrectAnswer);
      }, 400);

  };
  const flashbangEffect = isCorrect !== null && (
    <motion.div
      className={`fixed inset-0 bg-${isCorrect ? 'green' : 'red'}-500 opacity-50 z-50`}
      animate={{
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        repeat: 1,
      }}
    />
  );
  return (
    <motion.div
      className="p-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <h2 className="text-3xl text-center text-white font-extralight mb-4">{question.question}</h2>

      <div className="flex justify-center space-x-4">
        <motion.button
          onClick={() => handleAnswer(true)}
          className="w-32 text-2xl px-6 py-3 rounded-lg bg-green-500 text-white font-extralight transition-transform duration-200 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Correcto
        </motion.button>

        <motion.button
          onClick={() => handleAnswer(false)}
          className="w-32 text-2xl px-6 py-3 rounded-lg bg-red-500 text-white font-extralight transition-transform duration-200 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Incorrecto
        </motion.button>
      </div>

      {createPortal(flashbangEffect, document.body)}

    </motion.div>
  );
}

export default OpenQuestion;
