import "../styles/endOfGame.css";
import { endOfGameInput } from "../types/types";

const EndOfGame = ({ won, setAuthorized }: endOfGameInput) => {
  return (
    <div className="result">
      <h1>{won ? "Congratulations you won the game" : "Game Over"}</h1>
      <button
        onClick={() => {
          setAuthorized(false);
          localStorage.clear();
        }}
      >
        {" "}
        Logout
      </button>
    </div>
  );
};

export default EndOfGame;
