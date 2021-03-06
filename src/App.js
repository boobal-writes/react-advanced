import React, { Component, Fragment } from "react";
import "./App.css";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
import Login from "./context/Login";
import CartContext from "./context/cartContext";

class App extends Component {
  state = {
    user: null,
  };

  handleLoggedIn = (username) => {
    console.log("Getting user details");
    const user = { name: "Boobalan" };
    this.setState({ user });
  };

  render() {
    return (
      <Fragment>
        <CartContext.Provider value={{ cart: [] }}>
          <UserContext.Provider
            value={{
              currentUser: this.state.user,
              onLoggedIn: this.handleLoggedIn,
            }}
          >
            {/* <Movie id={1} />
          <Counter />
          <Users /> */}
            <MoviePage />
            <Login />
          </UserContext.Provider>
        </CartContext.Provider>
      </Fragment>
    );
  }
}

export default App;
