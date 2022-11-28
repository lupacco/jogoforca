import { useState } from "react"
import styled from 'styled-components';

export default function Chute(props){
    const [word, setWord] = useState('')

    function guessWord(guess){
        if(!props.gameStarted){
            return
        }
        if(guess === props.word){
            let filledDots = ""
            for(let i in props.word){
                if(i === props.word.length-1){
                    filledDots += props.word[i]
                } else{
                    filledDots += `${props.word[i]} `
                }
            }
            props.setWordToBeFilled(filledDots)
        }else{
            props.setGameStep(6)
        }
        setWord('')
    }

    function handleChange(event){
        let newWord = event.target.value
        setWord(newWord)
    }

    return(
        <ChuteContainer className="guess">
            <p>Já sei a palavra!</p>
            <input
            data-test="guess-input"
            value={word} 
            onChange={handleChange}
            >

            </input>
            <button
            data-test="guess-button" 
            onClick={() => {
                guessWord(word)
            }}
            >Chutar
            </button>
        </ChuteContainer>
    )
}

const ChuteContainer = styled.div`
    display: flex;
    margin-top: 16px;
    align-items: center;
    justify-content: center;

    p{
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    }
    input{
        width: 353px;
        height: 30px;
        margin: 0 8px;
    }
    button{
        background-color: #E1ECF4;
        border: solid 1px #7AA7C7;
        border-radius: 4px;
        color: #3C76A1;
        width: 100px;
        height: 40px;
    }
    button:hover{
        cursor: pointer;
    }
`