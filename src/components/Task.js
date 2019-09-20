import React from "react";
import { statuses } from "../actions/constants";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Task = ({ task, start }) => {
  return (
    <div className={`task ${task.status}`}>
      <div>{task.name}</div>
      <div className="taskbutton">
        {task.status === statuses.IDLE && (
          <button onClick={start}>Start</button>
        )}
        {task.status === statuses.STARTED && (
          <Loader type="Grid" color="white" height={25} width={25} />
        )}
      </div>
      <div>{task.status}</div>
    </div>
  );
};
