import React, { useState } from "react";

import "./ComputerAndComputer.scss";
import { OPTIONS } from "../../../constants/options";
import Hand from "../Hand";
export default () => {
  const [handOne, setHandOne] = useState(OPTIONS[1]);
  const [handTwo, setHandTwo] = useState(OPTIONS[1]);

  const handlePlay = () => {
    const firstChoice = Math.floor(Math.random() * Math.floor(3));
    const secondChoice = Math.floor(Math.random() * Math.floor(3));
    setHandOne(OPTIONS[firstChoice]);
    setHandTwo(OPTIONS[secondChoice]);
  };

  return (
    <div className="cnc_parent_wrapper">
      <div className="game_card">
        <h1 className="title">Computer vs Computer Mode</h1>
        <div className="hands_wrapper">
          <Hand option={handOne} />
          <Hand option={handTwo} />
        </div>
        <button className="start_btn" onClick={handlePlay}>
          Start
        </button>
      </div>
    </div>
  );
};
