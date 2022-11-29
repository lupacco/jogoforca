import styled from "styled-components"

import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"


export default function Jogo(props){
    const gameSteps = [
        forca0,
        forca1,
        forca2,
        forca3,
        forca4,
        forca5,
        forca6
    ]
    //Generate random number in range of number of word in the array
    function generateRandom(maxLimit=props.palavras.length-1){
        let rand = Math.random()*maxLimit
        rand = Math.floor(rand)
        
        return rand
    }
    //choose a random word from the array
    function chooseWord(){
        let wordIndex = generateRandom()
        let newWord = props.palavras[wordIndex]
        props.setWord(newWord)
        createEmptyWord(newWord)
        props.setGameStep(0)
        props.setGameStarted(true)
        props.setUserWin(undefined)
        props.setTestedLetters([])
    }
    //Create dots to fill with the word's letters
    function createEmptyWord(wordToGuess){
        let dots = ""
        let wordSize = wordToGuess.length
        for(let i=0;i<wordSize;i++){
            if(i === wordSize-1){
                dots += "_"
            }else{
                dots += "_ "
            }
        }
        props.setWordToBeFilled(dots)
    }

    function setColorOfWordRevealed(){
        if(props.userWin){
            props.setRevealedLettersColor("userWin")
        }
        else if(props.userWin === false){
            props.setRevealedLettersColor("userLose")
        }
        else{
            props.setRevealedLettersColor("")
        }
    }
    setColorOfWordRevealed()

    return(
        <JogoContainer>
            <div className="left">
                <img data-test="game-image" alt="" src={gameSteps[props.gameStep]}></img>
            </div>
            <div className="right">
                <button data-test="choose-word" onClick={chooseWord}>Escolher Palavra</button>
                <p data-test="word" data-answer={props.gameStarted ? props.word : ""} className={props.revealedLettersColor}>{props.wordToBeFilled}</p>
            </div>
        </JogoContainer>
    )
}

const JogoContainer = styled.main`
    padding: 64px 32px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    .left img{
    width: 400px;
    max-width: 100%;
    }

    .right{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        width: 50%;
    }

    .right button{
        font-weight: 700;
        font-size: 20px;
        margin-top: 24px;
        width: 200px;
        height: 60px;
        border-style: none;
        border-radius: 6px;
        background-color: #27AE60;
        color: #FFFFFF;
    }
    .right button:hover{
        cursor: pointer;
    }
    .right p{
        color: #000000;
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
    }
    .right .userWin{
        color: #27AE60;
    }
    .right .userLose{
        color: #FF0000;
    }
`