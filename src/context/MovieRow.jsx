import React, { useContext } from "react";
import UserContext from "./UserContext";

const MovieRow = () => {
  const { currentUser } = useContext(UserContext);
  return <div>Movie Row {currentUser ? currentUser.name : ""}</div>;
};

export default MovieRow;
