import React from "react";
import "./ComputerAndComputer.scss";

export default () => {
  const handlePlay = () => {};
  return (
    <div className="cnc_parent_wrapper">
      <div className="game_card">
        <h1 className="title">Computer vs Computer Mode</h1>
        <div className="hands_wrapper">
          <div className="left_hand_wrapper"></div>
          <div className="right_hand_wrapper"></div>
        </div>
        <button className="start_btn" onClick={handlePlay}>
          Start
        </button>
      </div>
    </div>
  );
};
