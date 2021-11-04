import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppOnePage from "./AppOne";
import AppTwoPage from "./AppTwo";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-211919696-1");
    // To Report Page View
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    console.log(window.location.pathname);
  });

  const ClickHandler = () => {
    ReactGA.event({
      category: "Button",
      action: "Se apreto el boton de",
    });
    alert(
      "Send the information to google analystic that I touched the click button"
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ClickHandler}>Click</button>
        <Router>
          <a href="/appOne">AppOne</a>
          <br />
          <a href="/appTwo">AppTwo</a>
          <br />
          <br />

          <Routes>
            <Route exact path="/appOne">
              <AppOnePage />{" "}
            </Route>
            <Route exact path="/appTwo">
              <AppTwoPage />{" "}
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
