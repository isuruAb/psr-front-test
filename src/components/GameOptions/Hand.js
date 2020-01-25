import React from "react";

export default image => {
  const style = {
    backgroundImage: `url('${image.img}')`
  };
  return <div className="hand" style={style}></div>;
};
