import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
import { ROUTES } from "../../util/routes";
export default () => {
  const [name, setName] = useState("");
  const handlePlay = () => {
    console.log("log");
  };
  const handleName = e => {
    setName(e.target.value);
  };
  return (
    <div className="landing_parent_wrapper">
      <div className="login_card">
        <h1 className="title">Let's Play Paper Scissor Rock</h1>
        <input
          type="text"
          onChange={handleName}
          value={name}
          className="name_field"
        />
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
