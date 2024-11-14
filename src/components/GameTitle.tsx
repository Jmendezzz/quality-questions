import { useGame } from "../contexts/GameContext";
import { getColorClass  } from "../lib/utils";
import GradualSpacing from "./ui/gradual-spacing";

function GameTitle() {
  const { selectedColor } = useGame();
  
  return (
    <GradualSpacing
      className={`text-8xl ${getColorClass(selectedColor)}`}
      text="LA RULETA"
    />
  );
}

export default GameTitle;