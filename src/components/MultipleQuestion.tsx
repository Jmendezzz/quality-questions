import { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { motion } from 'framer-motion';
import { Question } from '../models/Question';
import { Color } from '../models/Color';

function MultipleQuestion({ question }: { question: Question }) {
  const { answerQuestion } = useGame();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      const correct = selectedOption === question.correctAnswer;
      setIsCorrect(correct);
      setShowFeedback(true);
    }
  };

  const handleContinue = () => {
    if (isCorrect !== null) {
      answerQuestion(isCorrect);
      setShowFeedback(false);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const getSelectedOptionClass = (color: Color) => {
    switch (color) {
      case Color.RED:
        return 'bg-red-500';
      case Color.BLUE:
        return 'bg-blue-500';
      case Color.GREEN:
        return 'bg-green-500';
      case Color.YELLOW:
        return 'bg-yellow-500';
      default:
        return 'bg-gray-700';
    }
  };

  return (
    <motion.div
      className="p-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <h2 className="text-3xl text-center text-white font-extralight mb-4">{question.question}</h2>
      <div className="space-y-2">
        {question.options?.map((option) => (
          <motion.button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`w-full text-2xl font-extralight px-6 py-3 rounded-lg text-left text-white ${
              selectedOption === option
                ? `${getSelectedOptionClass(Color.RED)}`
                : 'bg-zinc-900 hover:bg-zinc-600'
            } transform transition-transform duration-200 ease-in-out ${
              showFeedback ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            disabled={showFeedback}
          >
            {option}
          </motion.button>
        ))}
      </div>
      <div className="flex justify-center">
        {!showFeedback ? (
          <motion.button
            onClick={handleSubmit}
            className="mt-6 text-4xl m px-8 py-3 bg-gradient-to-r from-blue-950 to-black text-white rounded-lg hover:bg-gradient-to-r duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            Confirmar
          </motion.button>
        ) : (
          <div className="mt-6 text-center">
            <p className={`text-2xl ${isCorrect ? 'text-green-500' : 'text-white'}`}>
              {isCorrect ? 'Correcto!' : `Incorrecto! La respuesta correcta es: ${question.correctAnswer}`}
            </p>
            <motion.button
              onClick={handleContinue}
              className="mt-4 text-4xl px-8 py-3 bg-gradient-to-r from-blue-950 to-black text-white rounded-lg hover:bg-gradient-to-r duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              Continuar
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default MultipleQuestion;