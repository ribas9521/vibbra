import {
  LOAD_DETAILS_START,
  LOAD_DETAILS_SUCCESS,
  LOAD_DETAILS_FAIL,
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAIL,
} from './actions';
const INITIAL_STATE = {
  details: {
    photos: [],
    value: 0,
    description: '',
  },
  comments: [],
  loading: false,
  commentsLoading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_DETAILS_START:
      return { ...state, loading: true };
    case LOAD_DETAILS_SUCCESS:
      return { ...state, details: action.payload, loading: false };
    case LOAD_DETAILS_FAIL:
      return { ...state, loading: false };

    case LOAD_COMMENTS_START:
      return { ...state, commentsLoading: true };
    case LOAD_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload, loading: false };
    case LOAD_COMMENTS_FAIL:
      return { ...state, commentsLoading: false };
    default:
      return state;
  }
};
