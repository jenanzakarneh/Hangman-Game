import React, { ChangeEvent, useState } from "react";
import "../styles/home.css";
import { fetchNewGame } from "../network/game.api";
import { useNavigate } from "react-router";
const Home = () => {
  const [wordLength, setWordLength] = useState<string>("5");
  const navigate = useNavigate();
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
            const response = await fetchNewGame(parseInt(wordLength));
            console.log("game id = ", response.gameId);
            localStorage.setItem("activeGame", response.gameId);
            navigate(`/game/${wordLength}`);
          }}
        >
          {" "}
          start the game
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
    </div>
  );
};

export default Home;
