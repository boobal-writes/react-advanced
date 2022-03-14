import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("user in context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ currentUser }) => (
          <div>
            Movie List {currentUser ? currentUser.name : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext;

export default MovieList;
