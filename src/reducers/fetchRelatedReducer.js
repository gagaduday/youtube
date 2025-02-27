import { FETCH_RELATED } from "../actions/types";

const fetchRelatedReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RELATED:
      return action.payload;
    default:
      return state;
  }
};

export default fetchRelatedReducer;
