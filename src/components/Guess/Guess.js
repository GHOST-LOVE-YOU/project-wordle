import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ data = "", answer = "HELLO" }) => {
  const result = checkGuess(data, answer);
  console.log(result);

  return (
    <>
      {range(5).map((index) => {
        const cellStatus = result?.[index]?.status || "";
        return (
          <span className={`cell ${cellStatus}`} key={index}>
            {data[index]}
          </span>
        );
      })}
    </>
  );
};

export default Guess;
