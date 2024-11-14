import { useGame } from "../contexts/GameContext"
import Section from "./Section"
import GradualSpacing from "./ui/gradual-spacing";

function StartGame() {
  const {startGame} = useGame();
  return (
    <Section>
      <div className="flex flex-col h-full justify-center gap-8">
        <GradualSpacing className="text-8xl" text="BIENVENIDO AL JUEGO DE LA RULETA" />
        <div className="flex justify-center gap-4">
          <button
          onClick={startGame}
            className="relative px-8 py-4 rounded-full text-2xl text-white transition-transform transform hover:scale-105 bg-blue-500 shadow-[0_0_20px_10px_rgba(59,130,246,0.7)] hover:shadow-[0_0_30px_15px_rgba(59,130,246,1)] before:absolute before:inset-0 before:rounded-full before:blur-xl before:opacity-50 before:bg-current"
          >
            Empezar
          </button>
          </div>
      </div>

    </Section>
  )
}

export default StartGame