# react-tour

Product tours help with onboarding users to new and complex UX and helps to get users familiar with UI functionalities. They’re also useful for showcasing new updates on product UI, and they can save time for the customer success team. It has very nice UI if you need a simple product tour without much customization. If this is the case, React Tour UI will be good enough.You can view the demo for React Tour here.

## How it work.

With React Tour, you pass the classname or id selector and content for each step to the component.
It will render the tour UI based on a button click, or after mounting the component. It’s simple for static pages and UI:

```
const steps = [
  {
    selector: '.tour-first-step',
    content: 'This is the first Step',
  },
  {
    selector: '.tour-second-step',
    content: 'This is the second Step',
  }
  // ...
]
```

## Let’s create the simple product tour component:

create a common component for react tour to use dynamically in your project. `common/ReactTour/ReactTour.jsx`

```
import React, { useState } from "react";
import Tour from "reactour";
import PropTypes from "prop-types";

function ReactTour({ steps }) {
  // Default open
  const [visible, setVisible] = useState(true);
  // Close React Tour
  const onClose = async () => {
    setVisible(false);
  };
  return <Tour steps={steps} isOpen={visible} onRequestClose={onClose} />;
}

ReactTour.propTypes = {
  steps: PropTypes.object,
};

export default ReactTour;
```

Now, import this common ReactTour component into the `App.js`

```
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
```

## Output:

![](https://miro.medium.com/max/700/1*aj2ctUFZtd8XKly25VRASA.png)

## Conclusion

I hope this article helped you learn the tricks of creating product tour components in your React application. You can customized as per your requirement here I’m just created a simple example of React Tour.
Let me know your experience on tour UX in the comments 🤗
