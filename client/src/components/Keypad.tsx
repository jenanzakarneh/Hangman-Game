import React from "react";
import Key from "./Key";
import { keypadInput } from "../types/types";
import "../styles/keypad.css";
const Keybad = ({ onClickKey }: keypadInput) => {
  return (
    <div className="keypad">
      <Key letter="A" onClickKey={onClickKey} />
      <Key letter="B" onClickKey={onClickKey} />
      <Key letter="C" onClickKey={onClickKey} />
      <Key letter="D" onClickKey={onClickKey} />
      <Key letter="E" onClickKey={onClickKey} />
      <Key letter="F" onClickKey={onClickKey} />
      <Key letter="G" onClickKey={onClickKey} />
      <Key letter="H" onClickKey={onClickKey} />
      <Key letter="I" onClickKey={onClickKey} />
      <Key letter="J" onClickKey={onClickKey} />
      <Key letter="K" onClickKey={onClickKey} />
      <Key letter="L" onClickKey={onClickKey} />
      <Key letter="M" onClickKey={onClickKey} />
      <Key letter="N" onClickKey={onClickKey} />
      <Key letter="O" onClickKey={onClickKey} />
      <Key letter="P" onClickKey={onClickKey} />
      <Key letter="Q" onClickKey={onClickKey} />
      <Key letter="R" onClickKey={onClickKey} />
      <Key letter="S" onClickKey={onClickKey} />
      <Key letter="T" onClickKey={onClickKey} />
      <Key letter="U" onClickKey={onClickKey} />
      <Key letter="V" onClickKey={onClickKey} />
      <Key letter="W" onClickKey={onClickKey} />
      <Key letter="X" onClickKey={onClickKey} />
      <Key letter="Y" onClickKey={onClickKey} />
      <Key letter="Z" onClickKey={onClickKey} />
    </div>
  );
};

export default Keybad;
