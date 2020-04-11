import {
  LOAD_FEATURED_START,
  LOAD_FEATURED_SUCCESS,
  LOAD_FEATURED_FAIL,
} from './actions';
const INITIAL_STATE = {
  featured: [],
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FEATURED_START:
      return { ...state, loading: true };
    case LOAD_FEATURED_SUCCESS:
      return { ...state, featured: action.payload, loading: false };
    case LOAD_FEATURED_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
