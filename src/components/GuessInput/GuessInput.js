import React from "react";

function GuessInput({ addGuessResult, updataGameState, gameState }) {
  const [guessInput, setGuessInput] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        addGuessResult(guessInput.toUpperCase());
        console.info({ guessInput });

        updataGameState(guessInput);

        setGuessInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        disabled={gameState !== "playing"}
        onChange={(event) => {
          setGuessInput(event.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
