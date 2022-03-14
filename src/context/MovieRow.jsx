import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

const MovieRow = () => {
  const { currentUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  console.log("cart in cart context", cart);
  return <div>Movie Row {currentUser ? currentUser.name : ""}</div>;
};

export default MovieRow;
