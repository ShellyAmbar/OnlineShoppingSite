import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleWare from "redux-promise";
import reduxThunk from "redux-thunk";
import Reducers from "./storage/ReduxStore/Reducers/index";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleWare,
  reduxThunk
)(createStore);
ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
