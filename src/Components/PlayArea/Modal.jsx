import { useState, useEffect } from "react";
import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./Modal.css";

const Modal = (props) => {
  const [winnerName, setWinnerName] = useState("");
  useEffect(() => {
    if (props.winner === "X") {
      setWinnerName("Player1 wins the Round");
    } else if (props.winner === "0") {
      setWinnerName("Player1 wins the Round");
    } else {
      setWinnerName("Match is Tie");
      props.setPlayer1Score(props.player1Score + 0.5);
      props.setPlayer2Score(props.player2Score + 0.5);
    }
  }, [props.winner]);
  return (
    <div>
      <div className={"backdrop"} />
      <Card className={"modal"}>
        <div className={"content"}>
          <h1 className="winner-announcement">{winnerName}</h1>
          <h2>Choices will be switched Now</h2>
          <h2>Player1 Score - {props.player1Score}</h2>
          <h2>Player2 Score - {props.player2Score}</h2>
        </div>
        <footer className={"actions"}>
          <Button onClick={props.playAgain}>Continue</Button>
          <Button onClick={props.reset}>Restart</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
