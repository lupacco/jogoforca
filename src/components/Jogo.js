import palavras from "../palavras"
import { useState } from "react"

const gameSteps = [
    "assets/forca0.png",
    "assets/forca1.png",
    "assets/forca2.png",
    "assets/forca3.png",
    "assets/forca4.png",
    "assets/forca5.png",
    "assets/forca6.png"
]
export default function Jogo(){
    const [word, setWord] = useState('')
    const [wordToBeFilled, setWordToBeFilled] = useState('')

    function generateRandom(maxLimit=palavras.length-1){
        let rand = Math.random()*maxLimit
        rand = Math.floor(rand)
        
        return rand
    }

    function chooseWord(){
        let wordIndex = generateRandom()
        setWord(palavras[wordIndex])
        console.log(word)
        createEmptyWord(word)
    }

    function createEmptyWord(wordToGuess){
        let wordSize = wordToGuess.length
        let dots = ""
        for(let i=0;i<wordSize;i++){
            if(i === wordSize-1){
                dots += "_"
            }else{
                dots += "_ "
            }
        }
        setWordToBeFilled(dots)
    }

    return(
        <main>
            <div className="left">
                <img alt="" src={gameSteps[5]}></img>
            </div>
            <div className="right">
                <button onClick={chooseWord}>Escolher Palavra</button>
                <p>{wordToBeFilled}</p>
            </div>
        </main>
    )
}