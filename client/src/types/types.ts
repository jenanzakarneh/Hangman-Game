export interface keyInput {
  letter: string;
  onClickKey(letter: string): any;
}

export interface wordInput {
  length: number;
  word: string[];
}
export interface letterInput {
  value: string;
}
export interface guessInput {
  guess: string;
}
export interface keypadInput {
  onClickKey(letter: string): any;
}
export interface gameInput {
  setWon(won: boolean): any;
  setLost(lost: boolean): any;
}

export interface endOfGameInput {
  won: boolean;
  lost: boolean;
}
export interface hangmanInput{
  currentImage:number
}
