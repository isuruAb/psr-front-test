import React from "react";
import "./Option.scss";
export default props => {
  const { option, onClick, disabled } = props;
  const style = {
    backgroundImage: `url('${option.img}')`
  };
  return (
    <button
      className="option"
      style={style}
      onClick={onClick}
      disabled={disabled}
    ></button>
  );
};
