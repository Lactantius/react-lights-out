import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Lights Out</h1>
      <p className="App-instructions">
        Click on the boxes to switch them all off.
      </p>
      <Board nrows={5} ncols={5} chanceCellClicked={0.5} />
      <p className="App-source-link"><a href="https://github.com/Lactantius/react-lights-out">See the source code</a></p>
    </div>
  );
}

export default App;
