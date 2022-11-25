import { useState } from "react"

export default function Chute(props){
    const [word, setWord] = useState('')

    function guessWord(guess){
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
    }

    function handleChange(event){
        let newWord = event.target.value
        setWord(newWord)
    }

    return(
        <div className="guess">
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
        </div>
    )
}