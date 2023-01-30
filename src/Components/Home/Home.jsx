import React, { useContext } from "react";
import "./Home.css";
import LightMode from "../../context/light-mode-context";

const Home = ({ setIsStart }) => {
  const theme = useContext(LightMode);

  return (
    <div className="home-element">
      <h1 className={`tic-tac-toe ${theme.lightMode ? "light" : "dark"}`}>
        Tic Tac Toe
      </h1>
      <h1 className={`play-with-friends ${theme.lightMode ? "light" : "dark"}`}>
        Play with your friends, higher score wins!
      </h1>
      <button
        className={`play-button ${!theme.lightMode ? "light" : "dark"}`}
        onClick={() => setIsStart(true)}
      >
        Play Now
      </button>
    </div>
  );
};

export default Home;
