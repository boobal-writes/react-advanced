import { Fragment } from "react";
import "./App.css";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";

function App() {
  return (
    <Fragment>
      <Movie id={1} />
      <Counter />
    </Fragment>
  );
}

export default App;
