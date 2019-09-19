import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "./makeStore";
import "./App.css";

const store = makeStore();

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
