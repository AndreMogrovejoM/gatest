import React, { useEffect } from "react";
import ReactGa from "react-ga";
import "./App.css";

function App() {
  useEffect(() => {
    ReactGa.initialize("G-K91CNEY18G");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
