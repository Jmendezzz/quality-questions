import { QUESTIONS_NUMBER } from '../constants/questions';
import { useGame } from '../contexts/GameContext';
import GradualSpacing from './ui/gradual-spacing';
import NumberTicker from './ui/number-ticker';
import { motion } from 'framer-motion';

function Report() {
  const { correctAnswers, incorrectAnswers } = useGame();

  const correctPercentage = (correctAnswers / QUESTIONS_NUMBER) * 100;
  const incorrectPercentage = (incorrectAnswers / QUESTIONS_NUMBER) * 100;

  const handleSubmit = () => {
    window.location.reload();
  };

  let performanceMessage = '';
  if (correctPercentage === 100) {
    performanceMessage =
      '¡Excelente! Respondiste todas las preguntas correctamente.';
  } else if (correctPercentage >= 75) {
    performanceMessage =
      'Muy bien, respondiste la mayoría de las preguntas correctamente.';
  } else if (correctPercentage >= 50) {
    performanceMessage = 'Bien hecho, pero hay espacio para mejorar.';
  } else {
    performanceMessage = 'Sigue practicando, necesitas mejorar tus respuestas.';
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center p-6 ">
      <GradualSpacing
        text="Reporte de resultados"
        className="text-6xl text-white font-bold mb-6"
      />
      <div className="mb-4">
        <p className="text-2xl text-white">
          <span className="font-semibold text-green-400">
            Respuestas Correctas:{' '}
          </span>
          {correctPercentage !== 0 ? (
            <>
            <NumberTicker
              value={correctPercentage}
              className="text-white"
              decimalPlaces={2}
            />
            <span>%</span>
            </>
          ) : (
            <span className="text-white">0.00%</span>
          )}
        </p>
      </div>
      <div className="mb-6">
        <p className="text-2xl text-white">
          <span className="font-semibold text-red-400">
            Respuestas Incorrectas:{' '}
          </span>
          {incorrectPercentage !== 0 ? (
            <>
              <NumberTicker
                value={incorrectPercentage}
                className="text-white"
                decimalPlaces={2}
              />
              <span>%</span>
            </>
          ) : (
            <span className="text-white">0.00%</span>
          )}
        </p>
      </div>
      <p className="text-xl text-white italic">{performanceMessage}</p>
      <motion.button
        onClick={handleSubmit}
        className="mt-6 text-4xl m px-8 py-3 bg-gradient-to-r from-blue-950 to-black text-white rounded-lg hover:bg-gradient-to-r duration-200"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
      >
        Volver a jugar
      </motion.button>
    </div>
  );
}

export default Report;
