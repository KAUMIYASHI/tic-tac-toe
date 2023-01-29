import React from "react";
import "./Play.css";
const Play = ({ onPlayerClick, ...props }) => {
  return (
    <svg
      fill={props.lightMode ? "#f6f1eb" : "#202124;"}
      space="preserve"
      className="play-pause-button"
      viewBox="0 0 60 60"
      display="block"
      onClick={onPlayerClick}
    >
      <polygon points="0,0 50,30 0,60" />
    </svg>
  );
};

export default Play;
