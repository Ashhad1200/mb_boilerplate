import React from "react";
import ReactDOM from "react-dom";
import NextApp from "./NextApp";
import * as serviceWorker from "./serviceWorker";
import "react-hot-loader/patch";
// Add this import:
import { AppContainer } from "react-hot-loader";
import './index.css';

// Wrap the rendering in a function:
const render = (Component) => {
  ReactDOM.render(
    // Wrap App inside QueryClientProvider and AppContainer
      <AppContainer>
        <Component />
      </AppContainer>,
    document.getElementById("root")
  );
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// Render once
render(NextApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./NextApp", () => {
    render(NextApp);
  });
}

// if (module.hot) {
//   module.hot.accept('./index', () => {
//     const NextApp = require('./index').default;
//     render(NextApp);
//   });
// }
