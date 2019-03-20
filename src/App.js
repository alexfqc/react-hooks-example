import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-counter-container">
          <button
            className="App-counter-button"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>
          <div className="App-counter-text">{counter}</div>
          <button
            className="App-counter-button"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            +
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
