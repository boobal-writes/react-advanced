import React, { Component } from "react";
import UserContext from "./UserContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("user in context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(user) => <div>{user.name}</div>}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext;

export default MovieList;
