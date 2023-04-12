import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import { RateAnswer } from "../RateAnswer/RateAnswer";

export const RateResults = () => {
  const { currentQuestion, users, nextRound } = useContext(GameContext);
  const [pointCount, setPointCount] = useState(users.length);

  return (
    <>
      <h1 className="current-question">{currentQuestion}</h1>
      <hr style={{ marginTop: "10px" }} />
      <div className="rate-header">
        <h2 className="secondary-text">Rate the questions</h2>
        <label className="point-count">{pointCount}</label>
      </div>
      {users
        .slice(1)
        .sort(() => Math.random() - 0.5)
        .map((_user, i) => (
          <RateAnswer
            index={i + 1}
            pointCount={pointCount}
            setPointCount={setPointCount}
          />
        ))}
      <button className="next-button" onClick={nextRound}>
        NEXT
      </button>
    </>
  );
};
