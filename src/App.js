import palavras from "./palavras"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"

import { useState } from "react"

export default function App() {
  const [word, setWord] = useState('x')
  const [wordToBeFilled, setWordToBeFilled] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  const [gameStep, setGameStep] = useState(0)
  const [testedLetters, setTestedLetters] = useState([])

  return (
    <>
      <Jogo 
        word={word}
        setWord={setWord}
        wordToBeFilled={wordToBeFilled}
        setWordToBeFilled={setWordToBeFilled}
        palavras={palavras}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        gameStep={gameStep}
        setGameStep={setGameStep}
        />
      <Letras
        word={word}
        wordToBeFilled={wordToBeFilled}
        setWordToBeFilled={setWordToBeFilled}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        gameStep={gameStep}
        setGameStep={setGameStep}
        testedLetters={testedLetters}
        setTestedLetters={setTestedLetters}
      />
      <Chute
        word={word}
        wordToBeFilled={wordToBeFilled}
        setWordToBeFilled={setWordToBeFilled}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        gameStep={gameStep}
        setGameStep={setGameStep}
      />
    </>
  );
}

