import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Landing.scss";
import { ROUTES } from "../../util/routes";

export default () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handlePlay = () => {
    dispatch({ type: "USER_LOGIN", payload: name });
    history.push(ROUTES.game_options);
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
