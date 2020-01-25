import React from "react";
import "./UserAndComputer.scss";
export default () => {
  const handleStart = () => {};
  return (
    <div className="unc_parent_wrapper">
      <div className="game_card">
        <h1 className="title">Computer vs Computer Mode</h1>
        <div className="hands_wrapper">
          <div className="left_hand_wrapper"></div>
          <div className="right_hand_wrapper"></div>
        </div>
        <button className="start_btn" onClick={handleStart}>
          Start
        </button>
      </div>
    </div>
  );
};
