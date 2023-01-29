import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { useEffect, useState } from "react";
import toonavatar from "cartoon-avatar";
import Board from "./Components/PlayArea/Board";

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
    <div className={`App ${lightMode ? "App_dark" : "App_light"}`}>
      <Header
        setIsStart={setIsStart}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
      {!isStart ? (
        <Home setIsStart={setIsStart} lightMode={lightMode} />
      ) : (
        <Board lightMode={lightMode} player1={player1} player2={player2} />
      )}
      <Footer lightMode={lightMode} />
    </div>
  );
}

export default App;
