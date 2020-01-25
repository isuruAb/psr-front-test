import React, { useState } from "react";

import "./ComputerAndComputer.scss";
import { options } from "../../../constants/options";
import Hand from "../Hand";
export default () => {
  const [handOne, setHandOne] = useState(options[1]);
  const [handTwo, setHandTwo] = useState(options[1]);

  const handlePlay = () => {
    const firstChoice = Math.floor(Math.random() * Math.floor(3));
    const secondChoice = Math.floor(Math.random() * Math.floor(3));
    setHandOne(options[firstChoice]);
    setHandTwo(options[secondChoice]);
    console.log(handOne, handTwo);
  };

  return (
    <div className="cnc_parent_wrapper">
      <div className="game_card">
        <h1 className="title">Computer vs Computer Mode</h1>
        <div className="hands_wrapper">
          <Hand image={handOne} />
          <Hand image={handTwo} />
        </div>
        <button className="start_btn" onClick={handlePlay}>
          Start
        </button>
      </div>
    </div>
  );
};
