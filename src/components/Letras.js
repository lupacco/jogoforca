export default function Letras(){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z"];
    return(
        <div className="letters">
            <section>
                {alphabet.map(letter => {
                    return(
                        <div className="letter">
                            <p>
                            {letter}
                            </p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}