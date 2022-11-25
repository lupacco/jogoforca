import palavras from "./palavras"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"

import { useState } from "react"

export default function App() {
  const [word, setWord] = useState('x')
  const [wordToBeFilled, setWordToBeFilled] = useState('')
  const [gameStep, setGameStep] = useState(0)

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
      <Chute
        word={word}
        wordToBeFilled={wordToBeFilled}
        setWordToBeFilled={setWordToBeFilled}
        gameStep={gameStep}
        setGameStep={setGameStep}
      />
    </>
  );
}

