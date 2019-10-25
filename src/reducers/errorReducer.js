import { MOVIES } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES.LOAD_FAIL:
      return action.error;
    case MOVIES.LOAD:
    case MOVIES.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
