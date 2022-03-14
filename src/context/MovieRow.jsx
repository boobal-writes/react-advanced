import React, { useContext } from "react";
import UserContext from "./UserContext";

const MovieRow = () => {
  const user = useContext(UserContext);
  return <div>Movie Row {user.name}</div>;
};

export default MovieRow;
