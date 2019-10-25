import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import moviesReducer from "./moviesReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  movies: moviesReducer,
  error: errorReducer
});

export default rootReducer;
