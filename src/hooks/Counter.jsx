import React, { Fragment, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times.`);

  return (
    <Fragment>
      <input
        type={"text"}
        onChange={(e) => setName(e.currentTarget.value)}
      ></input>
      <div>
        {name} has clicked {count} times.
      </div>
      <button type={"button"} onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </Fragment>
  );
};

export default Counter;
