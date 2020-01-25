import React from "react";
import { OPTIONS } from "../../constants/options";
import "./Hand.scss";
export default props => {
  const { option } = props;
  console.log("option", option);
  const style = {
    backgroundImage: `url('${option.img}')`
  };
  return <div className="hand" style={style}></div>;
};
