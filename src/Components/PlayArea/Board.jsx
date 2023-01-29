import React, { useState, useEffect } from "react";
import Square from "./Square";
import { calculateWinner } from "../../utils/calculateWinner";
import Modal from "./Modal";
import "../PlayArea/styles.css";

const Board = ({ lightMode, ...props }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winnerLines, setWinnerLines] = useState([]);
  const [p1greyScale, p1setGreyScale] = useState(false);
  const [p2greyScale, p2setGreyScale] = useState(true);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (history?.length < 4) return;

    const [winner, winnerLines] = calculateWinner(squares);
    if (winner) {
      setTimeout(() => {
        handleWin(winner);
        !!winner && setWinner(winner);
      }, 800);
      !!winnerLines && setWinnerLines(winnerLines);
    }
  }, [history, squares]);

  const squareHandler = (index) => {
    p1setGreyScale(!p1greyScale);
    p2setGreyScale(!p2greyScale);
    const _squares = [...squares];
    _squares[index] = player;
    setSquares(_squares);
    setPlayer(player === "X" ? "0" : "X");
    setHistory([...history, { player, square: index }]);
  };

  const handleWin = (winnerParty) => {
    if (winnerParty === "X") {
      const currScore = player1Score;
      setPlayer1Score(currScore + 1);
    } else if (winnerParty === "0") {
      const currScore = player2Score;
      setPlayer2Score(currScore + 1);
    } else if (winnerParty === null) {
      let currScore = player1Score + 0.5;
      setPlayer1Score(currScore);
      currScore = player2Score + 0.5;
      setPlayer2Score(currScore);
    }
  };
  const reset = () => {
    setPlayer("X");
    setWinner(null);
    setWinnerLines([]);
    setSquares(Array(9).fill(null));
    setHistory([]);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setShowModal(false);
  };
  const playAgain = () => {
    setPlayer("X");
    setWinner(null);
    setWinnerLines([]);
    setSquares(Array(9).fill(null));
    setHistory([]);
    setShowModal(false);
  };

  return (
    <>
      {winner && (
        <Modal
          winner={winner}
          playAgain={playAgain}
          reset={reset}
          player1Score={player1Score}
          player2Score={player2Score}
          setPlayer1Score={setPlayer1Score}
          setPlayer2Score={setPlayer2Score}
        />
      )}

      {!winner && history.length === squares.length && (
        <Modal
          winner={winner}
          playAgain={playAgain}
          reset={reset}
          player1Score={player1Score}
          player2Score={player2Score}
          setPlayer1Score={setPlayer1Score}
          setPlayer2Score={setPlayer2Score}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={props.player1}
            width="200"
            height="200"
            alt="test"
            className={
              p1greyScale
                ? "player-profile greyScale"
                : "player-profile greyScale_not"
            }
          />
          <h2 className={lightMode ? "text-light" : "text-dark"}>
            Player 1 (X)
          </h2>
          <h2 className={lightMode ? "text-light" : "text-dark"}>
            {player1Score}
          </h2>
        </div>
        <main className="scene">
          <section className="board-section">
            <div className="board">
              {squares?.length &&
                squares.map((square, index) => {
                  return (
                    <Square
                      lightMode={lightMode}
                      value={square}
                      onClick={() => squareHandler(index, square)}
                      disabled={winner}
                      style={{
                        backgroundColor: winnerLines.includes(index)
                          ? "#f9c811"
                          : "",
                      }}
                      key={index}
                    />
                  );
                })}
            </div>
          </section>
        </main>
        <div>
          <img
            src={props.player2}
            width="200"
            height="200"
            alt="test"
            className={
              p2greyScale
                ? "player-profile greyScale"
                : "player-profile greyScale_not"
            }
          />
          <h2 className={lightMode ? "text-light" : "text-dark"}>
            Player 2 (O)
          </h2>
          <h2 className={lightMode ? "text-light" : "text-dark"}>
            {player2Score}
          </h2>
        </div>
      </div>

      {(winner || history.length === 9) && (
        <div>
          <button onClick={reset}>Play Again</button>
          <button onClick={playAgain}>Continue</button>
        </div>
      )}
    </>
  );
};

export default Board;
