import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const ResultsDisplay = () => {
  const { users, nextRound, currentQuestion } = useContext(GameContext);

  return (
    <div>
      <h1>{users[0].name} asked:</h1>
      <h2>{currentQuestion}</h2>
      {users.slice(1).map((user) => {
        return (
          <div className="one-user-display-container">
            <div className="h-flex">
              <h1>{user.name}</h1>
              <label>{user.currentRating}</label>
            </div>
            <p>{user.currentAnswer}</p>
          </div>
        );
      })}
      <button className="next-button" onClick={nextRound}>
        NEW ROUND
      </button>
    </div>
  );
};
