import palavras from "./palavras"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import gameSteps from "./gameSteps"

import { useState } from "react"

export default function App() {
  const [word, setWord] = useState('')
  const [wordToBeFilled, setWordToBeFilled] = useState('')
  const [gameStep, setGameStep] = useState(0)
  // console.log('estados:')
  // console.log(gameStep)
  // console.log(wordToBeFilled)

  return (
    <>
      <Jogo 
        word={word}
        setWord={setWord}
        wordToBeFilled={wordToBeFilled}
        setWordToBeFilled={setWordToBeFilled}
        palavras={palavras}
        gameStep={gameStep}
        setGameStep={setGameStep}
        />
      <Letras
        word={word}
        wordToBeFilled={wordToBeFilled}
        setWordToBeFilled={setWordToBeFilled}
        gameStep={gameStep}
        setGameStep={setGameStep}
      />
      <Chute/>
    </>
  );
}

