import * as effects from "redux-saga/effects";
import * as constants from "../actions/constants";

//function* processTaskTimeConsuming() {
//  return yield effects.delay(1000 + 1000 * Math.random());
//}

//function processTaskTimeConsuming1() {
//  return fetch("https://swapi.co/api/people/1/")
//    .then(response => response)
//    .catch(e => {
//      throw new Error("error in request");
//    });
//}

export function* rootSaga() {
  console.log("hi from sagas");
}
