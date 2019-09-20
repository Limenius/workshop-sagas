import * as effects from "redux-saga/effects";
import * as constants from "../actions/constants";

function* processTaskTimeConsuming() {
  return yield effects.delay(1000 + 1000 * Math.random());
}

//function processTaskTimeConsuming1() {
//  return fetch("https://swapi.co/api/people/1/")
//    .then(response => response)
//    .catch(e => {
//      throw new Error("error in request");
//    });
//}

function* processTask(action) {
  yield effects.call(doProcessTask, action.name);
}

function* doProcessTask(name) {
  try {
    yield effects.put({
      type: constants.TASK_PROCESS_START,
      name
    });
    const { request, timeout } = yield effects.race({
      request: effects.call(processTaskTimeConsuming),
      timeout: effects.delay(1500)
    });
    //console.log(request, timeout);
    if (request) {
      yield effects.put({
        type: constants.TASK_PROCESS_DONE,
        name
      });
    } else {
      yield effects.put({
        type: constants.TASK_PROCESS_ERROR,
        name
      });
    }
  } finally {
    if (yield effects.cancelled()) {
      yield effects.put({
        type: constants.TASK_PROCESS_RESET,
        name
      });
    }
  }
}

function* processAll() {
  const tasks = yield effects.select(state => state.tasks);
  const todo = tasks.map(task => effects.fork(doProcessTask, task.name));
  yield effects.all(todo);
}

function* watchCancel(allProccess) {
  yield effects.take(constants.TASK_PROCESS_CANCEL_ALL);
  yield effects.cancel(allProccess);
}

function* processAllController() {
  while (true) {
    yield effects.take(constants.TASK_PROCESS_ALL);
    const allProcess = yield effects.fork(processAll);
    yield effects.fork(watchCancel, allProcess);
  }
}

export function* rootSaga() {
  yield effects.takeEvery(constants.TASK_PROCESS, processTask);
  yield effects.fork(processAllController);
  //while (true) {
  //  const action = yield effects.take(constants.TASK_PROCESS);
  //  yield effects.fork(processTask, action);
  //  //yield effects.put({
  //  //  type: constants.TASK_PROCESS_START,
  //  //  name: action.name
  //  //});
  //  //yield effects.call(processTaskTimeConsuming);
  //  //yield effects.put({ type: constants.TASK_PROCESS_DONE, name: action.name });
  //}
}

// Finite state machine
// One or the other
