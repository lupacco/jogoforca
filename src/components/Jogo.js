export default function Jogo(props){
    const gameSteps = [
        "assets/forca0.png",
        "assets/forca1.png",
        "assets/forca2.png",
        "assets/forca3.png",
        "assets/forca4.png",
        "assets/forca5.png",
        "assets/forca6.png"
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
        console.log(newWord)
        createEmptyWord(newWord)
        props.setGameStep(0)
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


    return(
        <main>
            <div className="left">
                <img alt="" src={gameSteps[props.gameStep]}></img>
            </div>
            <div className="right">
                <button onClick={chooseWord}>Escolher Palavra</button>
                <p>{props.wordToBeFilled}</p>
            </div>
        </main>
    )
}