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
  setAuthorized(auth: boolean): any;
}

export interface endOfGameInput {
  won: boolean;
  setAuthorized(auth: boolean): any;
}
export interface hangmanInput {
  currentImage: number;
}
export interface formData {
  username?: string;
  email: string;
  password: string;
}
export interface loginInput {
  setAuthorized(auth: boolean): any;
}
