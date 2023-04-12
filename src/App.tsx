import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import {
  GameContext,
} from "./components/context/GameContext";
import { FinalScores } from "./components/FinalScores/FinalScores";
import { AnswerInput } from "./components/InputForm/AnswerInput";
import { QuestionInput } from "./components/InputForm/QuestionInput";
import { RateResults } from "./components/RateResults/RateResults";
import { ResultsDisplay } from "./components/ResultsDisplay/ResultsDisplay";
import { UserInput } from "./components/UserInput/UserInput";

function App() {
  const {
    currentGameCount,
    users,
    currentRound,
    swapAsker,
    targetGameCount,
    setCurrentGameCount,
  } = useContext(GameContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentRound === 0) {
      navigate("/");
    } else if (currentRound === 1) {
      navigate("/question");
    } else if (currentRound <= users.length) {
      navigate("answers");
    } else if (currentRound === users.length + 1) {
      navigate("rate");
    } else if (currentRound === users.length + 2) {
      navigate("results");
    } else if (currentGameCount !== targetGameCount - 1) {
      setCurrentGameCount(currentGameCount + 1);
      swapAsker();
    } else {
      navigate("finalresults");
    }
  }, [currentGameCount, currentRound]);

  return (
    <div className="App">
      <div className="game-container">
        <Routes>
          <Route path="" element={<UserInput />} />
          <Route path="question" element={<QuestionInput />} />
          <Route path="answers" element={<AnswerInput />} />
          <Route path="rate" element={<RateResults />} />
          <Route path="results" element={<ResultsDisplay />} />
          <Route path="finalresults" element={<FinalScores />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
