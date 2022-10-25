import React from "react";
import ReactDOM from "react-dom";
// import FizzBuzz from "./fizz-buzz.js";

function App() {
  // let array = new FizzBuzz().generate(1, 100);

  return (
    <div>{/* {array.map((item) => (
        <div>{item}</div>
      ))} */}</div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
