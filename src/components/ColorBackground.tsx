import { useGame } from '../contexts/GameContext';
import { motion } from 'framer-motion';
import { Color } from '../models/Color';

function ColorBackground() {
  const { selectedColor } = useGame();

  if (!selectedColor) {
    return null;
  }

  const getGradientClass = (color: Color) => {
    switch (color) {
      case Color.BLUE:
        return 'from-blue-500/100 via-blue-500/50 to-transparent';
      case Color.RED:
        return 'from-red-500/100 via-red-500/50 to-transparent';
      case Color.GREEN:
        return 'from-green-500/100 via-green-500/50 to-transparent';
      case Color.YELLOW:
        return 'from-yellow-500/100 via-yellow-500/50 to-transparent';
      default:
        return '';
    }
  };

  return (
    <>
      <motion.div
        className={`fixed bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t ${getGradientClass(selectedColor)} `}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </>
  );
}

export default ColorBackground;
