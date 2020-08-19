import React from "react";
import "./App.css";
import HomepageContainer from "../src/container/homepagecont";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {rootReducer} from "./reducer/index"
import {composeWithDevTools} from "redux-devtools-extension"
import logger from "redux-logger";


let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <HomepageContainer />
      </div>
    </Provider>
  );
}

export default App;
