import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

const App = () => <div className="test">Hello</div>;

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
