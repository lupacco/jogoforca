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
  const [userWin, setUserWin] = useState(undefined)
  const [revealedLettersColor, setRevealedLettersColor] = useState('')
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
        setTestedLetters={setTestedLetters}
        gameStep={gameStep}
        setGameStep={setGameStep}
        userWin={userWin}
        setUserWin={setUserWin}
        revealedLettersColor={revealedLettersColor}
        setRevealedLettersColor={setRevealedLettersColor}
        />
      <Letras
        word={word}
        wordToBeFilled={wordToBeFilled}
        setWordToBeFilled={setWordToBeFilled}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        gameStep={gameStep}
        setGameStep={setGameStep}
        userWin={userWin}
        setUserWin={setUserWin}
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
        userWin={userWin}
        setUserWin={setUserWin}
      />
    </>
  );
}

