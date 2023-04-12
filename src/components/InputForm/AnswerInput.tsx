import { useContext, useRef } from "react";
import { GameContext } from "../context/GameContext";

export const AnswerInput = () => {
  const { users, submitAnswer, currentRound, currentQuestion, nextRound } =
    useContext(GameContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const answer = inputRef.current!.value;
    submitAnswer(answer);
    nextRound();
    inputRef.current!.value = "";
  };

  return (
    <>
      <h1>
        {users[currentRound - 1] && users[currentRound - 1].name},{" "}
        {currentQuestion}
      </h1>
      <input type="text" placeholder="Type your answer" ref={inputRef} />
      <button onClick={handleSubmit} className="next-button">
        Answer
      </button>
    </>
  );
};
