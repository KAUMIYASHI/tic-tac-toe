import React from "react";
import { useState } from "react";
import Pause from "./Pause";
import Play from "./Play";
import Next from "./Next";
import "./Footer.css";

const Footer = (props) => {
  const [playing, setPlaying] = useState(false);

  const handlePlayerClick = () => {
    if (!playing) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  return (
    <div className="FooterContainer">
      <div className="player">
        {playing ? (
          <Pause
            onPlayerClick={handlePlayerClick}
            lightMode={props.lightMode}
          />
        ) : (
          <Play onPlayerClick={handlePlayerClick} lightMode={props.lightMode} />
        )}
        <Next lightMode={props.lightMode}></Next>
        {playing && (
          <p1
            className={`song-label ${
              props.lightMode ? " text_light" : " text_dark"
            }`}
          >
            Playing.mp3
          </p1>
        )}
      </div>
    </div>
  );
};

export default Footer;
