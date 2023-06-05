import React, { ChangeEvent, useState } from "react";
import "../styles/home.css";
import { fetchLastGame, fetchNewGame } from "../network/api";
import { useNavigate } from "react-router";
const Home = () => {
  const [wordLength, setWordLength] = useState<string>("5");
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWordLength(event.target.value);
  };

  return (
    <div className="felx">
      <div className="title">
        <h1> Let's Play Hangman</h1>
      </div>
      <div className="start home">
        <button
          onClick={async () => {
            console.log('clicked')
            const lastGameLength = await fetchLastGame(setError);
            if (lastGameLength) {
              setWordLength(lastGameLength);
              navigate(`/game/${wordLength}`);
            }
          }}
        >
          Your Last Game
        </button>
        <button
          onClick={async () => {
            await fetchNewGame(parseInt(wordLength));
            navigate(`/game/${wordLength}`);
          }}
        >
          Start New Game
        </button>
        <div>
          <label htmlFor="number-of-letters">Sellect Word Length</label>
          <input
            type="number"
            name="number-of-letters"
            min="3"
            max="7"
            onChange={handleChange}
          />
        </div>
      </div>
      <div>{error}</div>
    </div>
  );
};

export default Home;
