import { MOVIES } from "../constants";

const moviesReducer = (state = [], action) => {
  if (action.type === MOVIES.LOAD_SUCCESS) {
    return [...state, ...action.movies];
  }
  return state;
};

export default moviesReducer;
