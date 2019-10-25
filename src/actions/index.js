import { MOVIES } from "../constants";

// these functions return action objects

const loadMovies = () => ({
  type: MOVIES.LOAD
});

const setMovies = movies => ({
  type: MOVIES.LOAD_SUCCESS,
  movies
});

const setError = error => ({
  type: MOVIES.LOAD_FAIL,
  error
});

export { loadMovies, setMovies, setError };
