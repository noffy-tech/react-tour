import React, { useState } from "react";
import ReactTour from "./common/ReactTour";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // To check visibility
  const [reactTour, setReactTour] = useState(true);
  // This are the steps
  const steps = [
    {
      selector: ".App-logo", // This is selector. It can be Id or class.
      content: function Component() {
        return (
          <div>
            <h3>
              <strong>Logo</strong>
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </p>
          </div>
        ); // In the return() you can create user interface.
      },
    },
    {
      selector: ".App-link",
      content: function Component() {
        return (
          <div>
            <h3>
              <strong>Learn React</strong>
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </p>
          </div>
        );
      },
    },
  ];
  function closeReactTour() {
    setReactTour(false);
  }
  return (
    <div className="App">
      {reactTour ? (
        <ReactTour steps={steps} successFunc={closeReactTour} />
      ) : null}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
