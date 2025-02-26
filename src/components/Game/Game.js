import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";

import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResult] = React.useState([]);
  const [gameState, setGameState] = React.useState("playing");

  const addGuessResult = (newData) => {
    const newResult = {
      data: newData,
      id: crypto.randomUUID(),
    };
    const nextGuessResults = [...guessResults, newResult];

    setGuessResult(nextGuessResults);

    console.log(nextGuessResults);
  };

  const updataGameState = (guess) => {
    const result = checkGuess(guess, answer);
    console.log(result);

    if (
      result.every((items) => items.status === "correct") &&
      result.length === 5
    ) {
      setGameState("win");
      return;
    }

    console.log(guessResults.length);
    if (guessResults.length > 4) {
      setGameState("lose");
    }
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        addGuessResult={addGuessResult}
        updataGameState={updataGameState}
        gameState={gameState}
      />
      {gameState === "win" && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessResults.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameState === "lose" && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
