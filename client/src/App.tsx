import React, { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Game from "./pages/Game";
import EndOfGame from "./pages/EndOfGame";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const autherized = localStorage.getItem("token");
  return (
    <Routes>
      {autherized && <Route path="/home" element={<Home />} />}

      {autherized && (
        <Route
          path="/game/:gameLength"
          element={<Game setWon={setWon} setLost={setLost} />}
        />
      )}
      {autherized && (
        <Route
          path="/endOfGame"
          element={<EndOfGame won={won} lost={lost} />}
        />
      )}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
