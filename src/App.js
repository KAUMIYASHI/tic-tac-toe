import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { useEffect, useState } from "react";
import toonavatar from "cartoon-avatar";
import Board from "./Components/PlayArea/Board";
import LightMode from "./context/light-mode-context";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  useEffect(() => {
    setPlayer1(toonavatar.generate_avatar({ gender: "female" }));
    setPlayer2(toonavatar.generate_avatar({ gender: "female" }));
  }, []);

  return (
    <LightMode.Provider
      value={{
        lightMode: lightMode,
        setLightMode: setLightMode,
      }}
    >
      <div className={`App ${lightMode ? "App_dark" : "App_light"}`}>
        <Header setIsStart={setIsStart} />
        {!isStart ? (
          <Home setIsStart={setIsStart} />
        ) : (
          <Board player1={player1} player2={player2} />
        )}
        <Footer />
      </div>
    </LightMode.Provider>
  );
}

export default App;
