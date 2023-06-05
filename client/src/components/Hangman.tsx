import React from "react";
//import "../styles/hangman.css";
import { Image } from "@chakra-ui/react";
import { hangmanInput } from "../types/types";
const Hangman = ({ currentImage }: hangmanInput) => {
  return (
    <Image
      rounded={"lg"}
      h={"550"}
      w={"350"}
      src={`../assets/hangman/${currentImage}.jpg`}
      alt="Loding"
    />
  );
};

export default Hangman;
