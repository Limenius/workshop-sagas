import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "./makeStore";
import "./App.css";
import { TaskViewer } from "./components/TaskViewer";

const store = makeStore();

function App() {
  return (
    <Provider store={store}>
      <TaskViewer></TaskViewer>
    </Provider>
  );
}

export default App;
