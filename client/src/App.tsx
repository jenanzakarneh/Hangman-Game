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
  const [authorized, setAuthorized] = useState(false);
  return authorized ? (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route
        path="/game/:gameLength"
        element={<Game setWon={setWon} setAuthorized={setAuthorized} />}
      />
      <Route
        path="/endOfGame"
        element={<EndOfGame won={won} setAuthorized={setAuthorized} />}
      />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setAuthorized={setAuthorized} />} />

      <Route path="/" element={<Login setAuthorized={setAuthorized} />} />
      {/* <Route path="*" element={<Login setAuthorized={setAuthorized} />} /> */}
    </Routes>
  ) : (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setAuthorized={setAuthorized} />} />

      <Route path="/" element={<Login setAuthorized={setAuthorized} />} />
      {/* <Route path="*" element={<Login setAuthorized={setAuthorized} />} /> */}
    </Routes>
  );
}

export default App;
