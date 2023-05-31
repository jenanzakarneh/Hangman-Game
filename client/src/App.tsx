import React, { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Game from "./pages/Game";
import EndOfGame from "./pages/EndOfGame";

function App() {
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {won === false && lost === false && (
        <Route
          path="/game/:gameLength"
          element={<Game setWon={setWon} setLost={setLost} />}
        />
      )}
      <Route path="/endOfGame" element={<EndOfGame won={won} lost={lost} />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
