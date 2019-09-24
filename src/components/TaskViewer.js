import React from "react";
import { connect } from "react-redux";
import * as constants from "../actions/constants";
import randomName from "../utils/nameGen";
import { Task } from "./Task";
import { statuses } from "../actions/constants";
import posed, { PoseGroup } from "react-pose";

const Item = posed.li();

const TaskViewerComponent = ({
  tasks,
  createTask,
  processTask,
  processAll,
  cancelAll
}) => {
  return (
    <div className="taskviewer">
      <button onClick={createTask}>Create a task!</button>
      <button onClick={processAll}>Process all tasks!</button>
      <button onClick={cancelAll}>Cancel all tasks!</button>
      <ul>
        <PoseGroup>
          {tasks
            .sort((a, b) => {
              if (a.status === b.status) {
                return 0;
              }
              if (a.status === statuses.IDLE) {
                return -1;
              }
              if (b.status === statuses.IDLE) {
                return +1;
              }
              if (a.status === statuses.STARTED) {
                return -1;
              }
              if (b.status === statuses.STARTED) {
                return +1;
              } else return 0;
            })
            .map(task => (
              <Item key={task.name}>
                <Task task={task} start={() => processTask(task.name)} />
              </Item>
            ))}
        </PoseGroup>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  createTask: () =>
    dispatch({ type: constants.TASK_CREATE, name: randomName() }),
  processTask: name => dispatch({ type: constants.TASK_PROCESS, name }),
  processAll: () => dispatch({ type: constants.TASK_PROCESS_ALL }),
  cancelAll: () => dispatch({ type: constants.TASK_PROCESS_CANCEL_ALL })
});

export const TaskViewer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskViewerComponent);
