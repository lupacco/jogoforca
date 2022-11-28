const alphabet = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z"];

export default function Letras(props){
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }

    function testLetter(event){
        let letter = event.target.textContent.toLowerCase()
        if(!props.gameStarted || props.testedLetters.includes(letter)){
            return
        }
        let progress = props.wordToBeFilled
        let word = String(props.word)
        if(word.includes(letter)){
            for(let i=0; i<word.length;i++){
                if(word[i] === letter){
                    progress = setCharAt(progress,i*2,word[i])
                    props.setWordToBeFilled(progress)
                }
            }    
        }else{
            props.setGameStep(props.gameStep + 1)
        }
        event.target.classList.remove('letter-enabled')
        event.target.classList.add('letter-disabled')
        const newTestedLetters = [...props.testedLetters, letter]
        props.setTestedLetters(newTestedLetters)
    }
    
    function checkEndGame(){
        if(!props.wordToBeFilled.includes('_') && props.wordToBeFilled){
            console.log('Parabéns, você vencêu!')
            setTimeout(() => props.setGameStarted(false), 500)
        }
        else if(props.gameStep === 6){
            console.log(`Você perdeu! a palavra correta era ${props.word}`)
            setTimeout(() => props.setGameStarted(false), 500)
        }
        console.log(props.gameStarted)
    }
    checkEndGame()

    return(
        <div className="letters">
            <section>
                {alphabet.map((letter, index) => {
                    return(
                        <div data-test="letter" key={index} onClick={testLetter} className={`letter ${props.gameStarted ? "letter-enabled" : "letter-disabled"}`}>
                            {letter}
                        </div>
                    )
                })}
            </section>
        </div>
    )
}