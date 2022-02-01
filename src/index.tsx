import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./assets/style/main.scss";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import postReducer from "./store/reducers/postReducer";
import App from "./containers/App/App";
import userRegistrationReducer from "./store/reducers/userRegistrationReducer";

const rootReducer = combineReducers({ postReducer, userRegistrationReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
