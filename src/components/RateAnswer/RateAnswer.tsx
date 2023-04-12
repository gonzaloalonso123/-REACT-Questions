import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";

type RateAnswerProps = {
  index: number;
  pointCount: number;
  setPointCount: (n: number) => void;
};

export const RateAnswer = ({
  index,
  pointCount,
  setPointCount,
}: RateAnswerProps) => {
  const { users, setUsers } = useContext(GameContext);
  const handlePoints = (action: string) => {
    const usersTemp = users;
    switch (action) {
      case "-":
        if (users[index].currentRating > 0) {
          users[index].currentRating--;
          setPointCount(pointCount + 1);
        }
        break;
      case "+":
        if (pointCount > 0) {
          users[index].currentRating++;
          setPointCount(pointCount - 1);
        }
        break;
    }
    setUsers(usersTemp);
  };

  useEffect(() => {
    console.log(users);
  }, []);

  return (
    <div
      className="rate-answer-container"
      style={{ order: Math.random() * 10 + "" }}
    >
      {users[index].currentAnswer}
      <div className="score-container">
        <button
          onClick={() => handlePoints("-")}
          className="addsub-button minus"
        >
          -
        </button>
        {users[index].currentRating}
        <button
          onClick={() => handlePoints("+")}
          className="addsub-button plus"
        >
          +
        </button>
      </div>
    </div>
  );
};
