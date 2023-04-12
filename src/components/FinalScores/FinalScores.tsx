import { useContext } from "react";
import { User } from "../../types/types";
import { GameContext } from "../context/GameContext";

export const FinalScores = () => {
  const { users } = useContext(GameContext);
  return (
    <div>
      <h1>Final scores</h1>
      {users
        .sort((a: User, b: User) => {
          return a.totalRating - b.totalRating;
        })
        .map((user) => {
          return (
            <div className="final-score-container">
              <h1>{user.name}</h1>
              <h2 className="score-number">{user.totalRating}</h2>
            </div>
          );
        })}
    </div>
  );
};
