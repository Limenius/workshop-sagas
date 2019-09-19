import * as effects from "redux-saga/effects";

export function* rootSaga() {
  yield effects.put({ type: "HI", payload: "there" });
  console.log("hi from sagas");
}
