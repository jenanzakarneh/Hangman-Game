
export const checkLetterIndex=(game:any,letter:string):number=>{
    let word =game.word;
    game.correctGuesses.forEach((g:any) => {
        word = word.replace(g, "0");
      });
      return word.indexOf(letter);
}