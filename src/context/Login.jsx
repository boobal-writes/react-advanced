import React from "react";
import { useContext } from "react";
import UserContext from "./userContext";

const Login = () => {
  const { onLoggedIn } = useContext(UserContext);
  return (
    <div>
      <button type="button" onClick={() => onLoggedIn("boobalan")}>
        Login
      </button>
    </div>
  );
};

export default Login;
