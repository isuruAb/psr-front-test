import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import "./UserAndComputer.scss";
import Hand from "../Hand";
import { OPTIONS } from "../../../constants/options";
import Option from "../Option";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";
import { SaveUserScoreAction } from "../../../redux/actions/userActions";
export default () => {
  const [handOne, setHandOne] = useState(OPTIONS[1]);
  const [handTwo, setHandTwo] = useState(OPTIONS[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [points, setPoints] = useState(0);
  const [result, setResult] = useState("");
  const timeLeft = 5;
  const intervalRef = useRef(null);
  const userName = useSelector(state => state.name);
  const afterPlayBtn = useCallback(
    computer => {
      if (handOne.name === computer.name) {
        setResult("Draw");
      } else if (
        (handOne.name === "paper" && computer.name === "scissor") ||
        (handOne.name === "scissor" && computer.name === "rock") ||
        (handOne.name === "rock" && computer.name === "paper")
      ) {
        setResult("Computer won");
      } else {
        setPoints(points + 1);
        setResult("You won");
      }
    },
    [handOne, points]
  );
  useEffect(() => {
    let count = 0;

    if (isPlaying) {
      let secondChoice = 0;
      intervalRef.current = setInterval(() => {
        count++;
        secondChoice = Math.floor(Math.random() * Math.floor(3));
        setHandTwo(OPTIONS[secondChoice]);
        if (count > 10) {
          setIsPlaying(false);
          afterPlayBtn(OPTIONS[secondChoice]);
          return;
        }
      }, 100);
      return () => clearInterval(intervalRef.current);
    }
  }, [isPlaying, afterPlayBtn]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const selectOption = option => {
    setHandOne(option);
  };
  const countDownEnds = async status => {
    SaveUserScoreAction({ name: userName, score: points });
    setShowModal(!status);

    console.log(typeof res);
  };
  const modalClose = () => {
    window.location.reload();
  };
  return (
    <div className="unc_parent_wrapper">
      <div className="game_card">
        <h1 className="title">You vs Computer Mode</h1>
        <div className="hands_wrapper">
          <Hand option={handOne} />
          <Hand option={handTwo} />
        </div>
        <div className="parent_wrapper">
          <div className="timer_wrapper">
            <h1>
              <Timer countStart={timeLeft} countDownStatus={countDownEnds} />
            </h1>
          </div>
          <div className="result_wrapper">
            <h1>{result}</h1>
          </div>
          <div className="points_wrapper">
            <h1>{points}</h1>
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
      <Modal modalStatus={showModal} modalClose={modalClose} />
    </div>
  );
};
