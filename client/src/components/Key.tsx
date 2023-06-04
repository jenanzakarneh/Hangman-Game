import { keyInput } from "../types/types";
import "../styles/key.css";
const Key = ({ letter, onClickKey }: keyInput) => {
  const clicked = () => {
    onClickKey(letter.toLowerCase());
  };
  return (
    <button className="key" onClick={clicked}>
      {letter}
    </button>
  );
};

export default Key;
