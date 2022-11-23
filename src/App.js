import palavras from "./palavras"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import {gameSteps} from "./gameSteps"

import { useState, useEffect } from "react"

export default function App() {
  const [word, setWord] = useState('')
  const [wordToBeFilled, setWordToBeFilled] = useState('')
  // const [gameStep, setGameStep] = useState(gameSteps[0])
  // console.log(gameSteps)

  useEffect(() => {
    console.log(word)
    console.log(wordToBeFilled)
  },[word,wordToBeFilled])

  return (
    <>
      <Jogo 
        word={word}
        setWord={setWord}
        wordToBeFilled={wordToBeFilled}
        setWordToBeFilled={setWordToBeFilled}
        palavras={palavras}
        />
      <Letras
        word={word}
        wordToBeFilled={wordToBeFilled}
        setWordToBeFilled={setWordToBeFilled}
      />
      <Chute/>
    </>
  );
}

