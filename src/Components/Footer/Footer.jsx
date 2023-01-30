import React, { useContext } from "react";
import { useState } from "react";
import Pause from "./Pause";
import Play from "./Play";
import Next from "./Next";
import "./Footer.css";
import LightMode from "../../context/light-mode-context";

const Footer = (props) => {
  const [playing, setPlaying] = useState(false);
  const handlePlayerClick = () => {
    if (!playing) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };
  const theme = useContext(LightMode);

  return (
    <div className="FooterContainer">
      <div className="player">
        {playing ? (
          <Pause onPlayerClick={handlePlayerClick} />
        ) : (
          <Play onPlayerClick={handlePlayerClick} />
        )}
        <Next></Next>
        {playing && (
          <p1
            className={`song-label ${
              theme.lightMode ? " text_light" : " text_dark"
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
