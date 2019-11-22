import { take, all, call } from "redux-saga/effects";

import { MOVIES } from "../constants";
import watchMoviesLoad from "./moviesSaga";

// watcher saga
function* rootSaga() {
  // yield take(MOVIES.LOAD);
  yield all([call(watchMoviesLoad)]);
}

export default rootSaga;
