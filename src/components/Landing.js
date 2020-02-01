import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "../assets/styles/scss/Landing.scss";
import { UserLoginAction } from "../redux/actions/userActions";
import { useHistory } from "react-router-dom";

export default () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handlePlay = () => {
    UserLoginAction(dispatch, history, name);
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
        <button
          className="play_btn"
          onClick={handlePlay}
          // to={ROUTES.game_options}
        >
          Play
        </button>
      </div>
    </div>
  );
};
