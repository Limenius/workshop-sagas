import { combineReducers } from "redux";
import { userAccess } from "./userAccess";
import { tasksReducer as tasks } from "./tasks";

export default combineReducers({
  userAccess,
  tasks
});
