import React from "react";
import "./Pause.css";
const Pause = ({ onPlayerClick, ...props }) => {
  return (
    <svg
      space="preserve"
      fill={props.lightMode ? "#f6f1eb" : "#202124;"}
      className="play-pause-button"
      viewBox="0 0 60 60"
      onClick={onPlayerClick}
    >
      <polygon points="0,0 15,0 15,60 0,60" />
      <polygon points="25,0 40,0 40,60 25,60" />
    </svg>
  );
};

export default Pause;
