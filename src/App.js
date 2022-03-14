import React, { Component, Fragment } from "react";
import "./App.css";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/UserContext";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";

class App extends Component {
  state = {
    user: {
      name: "Boobalan",
    },
  };
  render() {
    return (
      <Fragment>
        <UserContext.Provider value={this.state.user}>
          <Movie id={1} />
          <Counter />
          <Users />
          <MoviePage />
        </UserContext.Provider>
      </Fragment>
    );
  }
}

export default App;
