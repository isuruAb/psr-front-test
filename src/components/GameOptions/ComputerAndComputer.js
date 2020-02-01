import React, { useState, useEffect, useRef, useCallback } from "react";
import Hand from "./Hand";
import { OPTIONS } from "../../constants/options";
import "../../assets/styles/scss/GameOptions/ComputerAndComputer.scss";

export default () => {
  const [handOne, setHandOne] = useState(OPTIONS[1]);
  const [handTwo, setHandTwo] = useState(OPTIONS[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [result, setResult] = useState("");
  const intervalRef = useRef(null);
  // Calculate result
  const afterPlayBtn = useCallback((firstChoice, secondChoice) => {
    if (firstChoice.name === secondChoice.name) {
      setResult("Draw");
    } else if (
      (firstChoice.name === "paper" && secondChoice.name === "scissor") ||
      (firstChoice.name === "scissor" && secondChoice.name === "rock") ||
      (firstChoice.name === "rock" && secondChoice.name === "paper")
    ) {
      setResult("Right side won");
    } else {
      setResult("Left side won");
    }
  }, []);
  // randomly choose two options
  useEffect(() => {
    let count = 0;
    let firstChoice = 0;
    let secondChoice = 0;
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        count++;
        firstChoice = Math.floor(Math.random() * Math.floor(3));
        setHandOne(OPTIONS[firstChoice]);
        secondChoice = Math.floor(Math.random() * Math.floor(3));
        setHandTwo(OPTIONS[secondChoice]);
        if (count > 3) {
          setIsPlaying(false);
          afterPlayBtn(OPTIONS[firstChoice], OPTIONS[secondChoice]);
          return;
        }
      }, 100);
      return () => clearInterval(intervalRef.current);
    }
  }, [isPlaying, afterPlayBtn]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="cnc_parent_wrapper">
      <div className="game_card">
        <h1 className="title">Computer vs Computer Mode</h1>
        <div className="hands_wrapper">
          <Hand option={handOne} />
          <Hand option={handTwo} />
        </div>
        <div className="parent_wrapper">
          <div className="result_wrapper">
            <h1>{result}</h1>
          </div>
        </div>
        <button
          className="start_btn"
          onClick={handlePlay}
          style={
            isPlaying
              ? {
                  backgroundColor: "#989898"
                }
              : null
          }
        >
          Start
        </button>
      </div>
    </div>
  );
};
