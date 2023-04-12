import { useContext, useRef } from "react";
import { GameContext } from "../context/GameContext";

export const QuestionInput = () => {
  const { addQuestion, users, nextRound } = useContext(GameContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const set = () => {
    addQuestion(inputRef.current!.value);
    nextRound();
  };

  return (
    <>
      <h1>{users[0].name}, ask a question</h1>
      <input type="text" placeholder="Type your question" ref={inputRef} />
      <button onClick={set} className="next-button">
        Ask
      </button>
    </>
  );
};
