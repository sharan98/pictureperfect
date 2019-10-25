import { takeEvery, call, put } from "redux-saga/effects";

import { MOVIES } from "../constants";
import fetchMoies from "../api";
import { setMovies, setError } from "../actions";

function* handleMoviesLoad() {
  try {
    const details = yield call(fetchMoies);
    yield put(setMovies(details));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* watchMoviesLoad() {
  yield takeEvery(MOVIES.LOAD, handleMoviesLoad);
}

export default watchMoviesLoad;
