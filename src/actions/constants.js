export const TASK_CREATE = "TASK_CREATE";

// ** Template of 4 actions for a request:
// A command (to be processed by sagas)
export const TASK_PROCESS = "TASK_PROCESS";
// A regular action (to be processed by the reducer)
export const TASK_PROCESS_START = "TASK_PROCESS_START";
// A regular action (to be processed by the reducer)
export const TASK_PROCESS_DONE = "TASK_PROCESS_DONE";
// A regular action (to be processed by the reducer)
export const TASK_PROCESS_ERROR = "TASK_PROCESS_ERROR";

export const TASK_PROCESS_RESET = "TASK_PROCESS_RESET";
export const TASK_PROCESS_CANCEL_ALL = "TASK_CANCEL_ALL";
export const TASK_PROCESS_ALL = "TASK_PROCESS_ALL";

export const statuses = {
  IDLE: "IDLE",
  STARTED: "STARTED",
  DONE: "DONE",
  FAILED: "FAILED"
};
