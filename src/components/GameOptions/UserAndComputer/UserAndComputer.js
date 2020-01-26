import React, { useState, useEffect, useCallback, useRef } from "react";
import "./UserAndComputer.scss";
import Hand from "../Hand";
import { OPTIONS } from "../../../constants/options";
import Option from "../Option";
export default () => {
  const [handOne, setHandOne] = useState(OPTIONS[1]);
  const [handTwo, setHandTwo] = useState(OPTIONS[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      let count = 0;
      let secondChoice = 0;
      intervalRef.current = setInterval(() => {
        count++;
        if (count > 30) {
          setIsPlaying(false);
          return;
        }
        secondChoice = Math.floor(Math.random() * Math.floor(3));
        setHandTwo(OPTIONS[secondChoice]);
      }, 100);
      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [isPlaying]);
  const handlePlay = () => {
    setIsPlaying(true);
  };

  const selectOption = option => {
    setHandOne(option);
  };
  return (
    <div className="unc_parent_wrapper">
      <div className="game_card">
        <h1 className="title">You vs Computer Mode</h1>
        <div className="hands_wrapper">
          <Hand option={handOne} />
          <Hand option={handTwo} />
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
          disabled={isPlaying}
        >
          Start
        </button>
        <div className="options_wrapper">
          <Option
            option={OPTIONS[0]}
            onClick={() => selectOption(OPTIONS[0])}
            disabled={isPlaying}
          />
          <Option
            option={OPTIONS[1]}
            onClick={() => selectOption(OPTIONS[1])}
            disabled={isPlaying}
          />
          <Option
            option={OPTIONS[2]}
            onClick={() => selectOption(OPTIONS[2])}
            disabled={isPlaying}
          />
        </div>
      </div>
    </div>
  );
};
