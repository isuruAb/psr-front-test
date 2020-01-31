import React from "react";
import "./Hand.scss";
export default props => {
  const { option } = props;
  const style = {
    backgroundImage: `url('${option.img}')`
  };
  return <div className="hand" style={style}></div>;
};
