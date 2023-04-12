import React, { useContext } from "react";
import { User } from "../../types/types";
import { GameContext } from "../context/GameContext";
import "./UserInput.css";
import Logo from "./logo.jpg";

export const UserInput = () => {
  const { setUsers, users, nextRound, setTargetGameCount } = useContext(GameContext);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempUsers: User[] = [];
    for (let i = 0; i < parseInt(e.target.value); i++) {
      tempUsers.push({
        name: "",
        currentAnswer: "",
        currentRating: 0,
        totalRating: 0,
      });
    }
    setUsers(tempUsers);
  };

  const changeName = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = e.target.value;
    const tempUsers = users;
    tempUsers[index].name = newValue;
    setUsers(tempUsers);
  };

  const changeNRounds = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetGameCount(parseInt(e.target.value));
  };

  return (
    <>
      <img src={Logo} />
      <h1 className="text">Number of players</h1>
      <input type="number" onChange={handleInput} className="n-input" />
      <h1 className="text">Number of rounds</h1>
      <input type="number" onChange={changeNRounds} className="n-input" />
      {users.map((_user, i) => {
        return (
          <>
            <label>name ({i + 1})</label>
            <input type="text" onChange={(event) => changeName(event, i)} />
          </>
        );
      })}
      <button className="next-button" onClick={nextRound}>
        NEXT
      </button>
    </>
  );
};
