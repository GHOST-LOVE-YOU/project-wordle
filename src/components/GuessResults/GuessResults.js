import React from "react";
import { range } from "../../utils";

import Guess from "../Guess";

function GuessResults({ guessResults, answer }) {
  const VoidCell = () => (
    <>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </>
  );
  return (
    <div className="guess-results">
      {range(6).map((index) => (
        <p className="guess" key={index}>
          {guessResults[index] ? (
            <Guess data={guessResults[index].data} answer={answer} />
          ) : (
            <VoidCell />
          )}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
