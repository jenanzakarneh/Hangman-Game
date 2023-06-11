import { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import EndOfGame from "./pages/EndOfGame";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [won, setWon] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const customTheme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: "serief",
          backgroundColor: "rgb(240, 240, 240)",
          color: "gray",
          textAlign: "center",
        },
      },
    },
  });
  return authorized ? (
    <ChakraProvider theme={customTheme}>
      <Routes>
        <Route
          path="/home"
          element={<Home setWon={setWon} setAuthorized={setAuthorized} />}
        />
        <Route
          path="/endOfGame"
          element={<EndOfGame won={won} setAuthorized={setAuthorized} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login setAuthorized={setAuthorized} />}
        />
        <Route path="/" element={<Login setAuthorized={setAuthorized} />} />
        <Route path="*" element={<Login setAuthorized={setAuthorized} />} />
      </Routes>
    </ChakraProvider>
  ) : (
    <ChakraProvider theme={customTheme}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login setAuthorized={setAuthorized} />}
        />
        <Route path="/" element={<Login setAuthorized={setAuthorized} />} />
        <Route path="*" element={<Login setAuthorized={setAuthorized} />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
