import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
import { ROUTES } from "../../util/routes";
export default () => {
  const handlePlay = () => {
    console.log("log");
  };
  return (
    <div className="landing_parent_wrapper">
      <div className="login_card">
        <h1 className="title">Let's Play Paper Scissor Rock</h1>
        <Link
          className="play_btn"
          onClick={handlePlay}
          to={ROUTES.game_options}
        >
          Play
        </Link>
      </div>
    </div>
  );
};
