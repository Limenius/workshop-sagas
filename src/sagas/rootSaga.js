import * as effects from "redux-saga/effects";
import * as constants from "../actions/constants";

//function* processTaskTimeConsuming() {
//  if (Math.random() > 0.5) {
//    return yield effects.delay(1000 + 1000 * Math.random());
//  } else {
//    throw new Error("Something is not right!");
//  }
//}

//function processTaskTimeConsumingReal() {
//  return fetch("https://swapi.co/api/people/1/")
//    .then(response => response)
//    .catch(e => {
//      throw new Error("error in request");
//    });
//}

export function* rootSaga() {
  console.log("hi from sagas");
}
