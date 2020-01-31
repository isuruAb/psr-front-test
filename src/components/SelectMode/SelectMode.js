import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../util/routes";

import "./SelectMode.scss";
export default () => {
  return (
    <div className="game_options_parent_wrapper">
      <div className="options_card">
        <h1 className="title">Game Mode</h1>
        <Link className="option_btn" to={ROUTES.computer_and_computer}>
          Computer and Computer
        </Link>
        <Link className="option_btn" to={ROUTES.user_and_computer}>
          You and Computer
        </Link>
      </div>
    </div>
  );
};
