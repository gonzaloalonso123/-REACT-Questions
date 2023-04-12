import { createContext, useState } from "react";
import { Question, User } from "../../types/types";

type GameContextType = {
  users: User[];
  setUsers: (users: User[]) => void;
  questions: Question[];
  setQuestions: (q: Question[]) => void;
  currentRound: number;
  setCurrentRound: (n: number) => void;
  addQuestion: (question: string) => void;
  nextRound: () => void;
  submitAnswer: (answer: string) => void;
  currentQuestion: string;
  setCurrentQuestion: (str: string) => void;
  currentGameCount: number;
  setCurrentGameCount: (n: number) => void;
  swapAsker: () => void;
  targetGameCount: number;
  setTargetGameCount: (n: number) => void;
};

const firstValue = {
  users: [],
  setUsers: () => {},
  questions: [],
  setQuestions: () => {},
  currentRound: 0,
  setCurrentRound: () => {},
  addQuestion: () => {},
  nextRound: () => {},
  submitAnswer: () => {},
  currentQuestion: "",
  currentGameCount: 0,
  setCurrentGameCount: () => {},
  setCurrentQuestion: () => {},
  swapAsker: () => {},
  targetGameCount: 0,
  setTargetGameCount: () => {},
};

export const GameContext = createContext<GameContextType>(firstValue);

export const GameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentGameCount, setCurrentGameCount] = useState(0);
  const [targetGameCount, setTargetGameCount] = useState(0);

  const addQuestion = (question: string) => {
    const newQuestion = {
      question: question,
      answers: [],
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion(newQuestion.question);
  };

  const swapAsker = () => {
    let usersTemp = users;
    const previousAsker = usersTemp.shift();
    usersTemp.push(previousAsker!);
    usersTemp = usersTemp.map((user) => {
      user = {
        ...user,
        totalRating: user.currentRating + user.totalRating,
        currentRating: 0,
        currentAnswer: "",
      };
      return user;
    });
    setCurrentQuestion("");
    setUsers(usersTemp);
    setCurrentRound(1);
    setCurrentGameCount(currentGameCount + 1);
  };

  const nextRound = () => {
    setCurrentRound((currentRound) => currentRound + 1);
  };

  const submitAnswer = (answer: string) => {
    const tempUsers = users;
    tempUsers[currentRound - 1].currentAnswer = answer;
    setUsers(tempUsers);
  };

  return (
    <GameContext.Provider
      value={{
        users: users,
        setUsers: setUsers,
        questions: questions,
        setQuestions: setQuestions,
        currentRound: currentRound,
        setCurrentRound: setCurrentRound,
        addQuestion: addQuestion,
        nextRound: nextRound,
        submitAnswer: submitAnswer,
        currentQuestion: currentQuestion,
        setCurrentQuestion: setCurrentQuestion,
        currentGameCount: currentGameCount,
        setCurrentGameCount: setCurrentGameCount,
        swapAsker: swapAsker,
        targetGameCount: targetGameCount,
        setTargetGameCount: setTargetGameCount,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
