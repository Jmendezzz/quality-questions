import { useGame } from '../contexts/GameContext';
import { motion } from 'framer-motion';
import { Color } from '../models/Color';
import { questions } from '../constants/questions';

function SelectColor() {
  const { selectColor } = useGame();

  const getColorClass = (color: Color) => {
    switch (color) {
      case Color.BLUE:
        return 'bg-blue-500';
      case Color.RED:
        return 'bg-red-500';
      case Color.GREEN:
        return 'bg-green-500';
      case Color.YELLOW:
        return 'bg-yellow-500';
      default:
        return '';
    }
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl text-center text-white">Selecciona un color</h2>
      <motion.div
        className="flex justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.values(Color).map((color) => (
          (questions.get(color)?.length ?? 0) > 0 && (
            <motion.button
              key={color}
              onClick={() => selectColor(color)}
              className={`relative px-8 py-4 rounded-full text-2xl text-white transition-transform transform hover:scale-105
                        ${getColorClass(color)}
                        before:absolute before:inset-0 before:rounded-full before:blur-xl before:opacity-50 before:bg-current`}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {color}
            </motion.button>
          )
        ))}
      </motion.div>
    </div>
  );
}

export default SelectColor;