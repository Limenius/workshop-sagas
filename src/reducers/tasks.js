import * as constants from "../actions/constants";
import { statuses } from "../actions/constants";

const initialState = [];

const newTask = name => ({
  name,
  status: statuses.IDLE
});

function updateInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      return item;
    }

    return {
      ...item,
      ...action.item
    };
  });
}

const updateStatus = (tasks, name, newStatus) => {
  const index = tasks.findIndex(task => task.name === name);
  if (index === -1) {
    return tasks;
  } else {
    const newTasks = updateInArray(tasks, {
      index: index,
      item: { ...tasks[index], status: newStatus }
    });
    return newTasks;
  }
};

const updateStatusIfCurrent = (
  tasks,
  name,
  newStatus,
  currentAccepableStatus
) => {
  const task = tasks.find(task => task.name === name);
  if (task && task.status === currentAccepableStatus) {
    return updateStatus(tasks, name, newStatus);
  }
  return tasks;
};

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case constants.TASK_CREATE:
      return [...state, newTask(action.name)];
    case constants.TASK_PROCESS_START: {
      return updateStatusIfCurrent(
        state,
        action.name,
        statuses.STARTED,
        statuses.IDLE
      );
    }
    case constants.TASK_PROCESS_DONE: {
      return updateStatusIfCurrent(
        state,
        action.name,
        statuses.DONE,
        statuses.STARTED
      );
    }
    case constants.TASK_PROCESS_ERROR: {
      return updateStatusIfCurrent(
        state,
        action.name,
        statuses.FAILED,
        statuses.STARTED
      );
    }
    case constants.TASK_PROCESS_RESET: {
      return updateStatus(state, action.name, statuses.IDLE);
    }
    default:
      return state;
  }
}
