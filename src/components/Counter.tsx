import { useEffect, useState } from "react";
import { useGame } from "../contexts/GameContext";
import { motion } from "framer-motion";

function Counter() {
  const { answerQuestion } = useGame();
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      answerQuestion(false);
    }
  }, [counter, answerQuestion]);

  return (
    <motion.div
      className="text-8xl text-white text-center"
      animate={{
        color: counter <= 5 ? "#ff0000" : "#ffffff",
        scale: counter <= 5 ? [1, 1.2, 1] : 1, 
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        repeat: counter <= 5 ? Infinity : 0, 
        repeatType: "loop",
      }}
    >
      {counter}
    </motion.div>
  );
}

export default Counter;
