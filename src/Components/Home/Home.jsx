import React from "react";
import "./Home.css";

const Home = ({ lightMode, setIsStart }) => {
  return (
    <div className="home-element">
      <h1 className={`tic-tac-toe ${lightMode ? "light" : "dark"}`}>
        Tic Tac Toe
      </h1>
      <h1 className={`play-with-friends ${lightMode ? "light" : "dark"}`}>
        Play with your friends, higher score wins!
      </h1>
      <button
        className={`play-button ${!lightMode ? "light" : "dark"}`}
        onClick={() => setIsStart(true)}
      >
        Play Now
      </button>
    </div>
  );
};

export default Home;
