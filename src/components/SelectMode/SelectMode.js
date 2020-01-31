import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../util/routes";
import { useSelector } from "react-redux";

import "./SelectMode.scss";
export default () => {
  const handlePlay = () => {
    console.log("log");
  };
  const data = useSelector(state => state.name);
  return (
    <div className="game_options_parent_wrapper">
      <div className="options_card">
        <h1 className="title">Game Mode</h1>
        <Link
          className="option_btn"
          onClick={handlePlay}
          to={ROUTES.computer_and_computer}
        >
          Computer and Computer
        </Link>
        <Link
          className="option_btn"
          onClick={handlePlay}
          to={ROUTES.user_and_computer}
        >
          You and Computer
        </Link>
      </div>
    </div>
  );
};
