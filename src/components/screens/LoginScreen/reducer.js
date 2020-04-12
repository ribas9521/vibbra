import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './actions';
const INITIAL_STATE = {
  data: {},
  success: false,
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, data: action.payload, loading: false, success: true };
    case LOGIN_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
