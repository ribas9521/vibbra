import {
  LOAD_PRODUCTS_START,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
} from './actions';
const INITIAL_STATE = {
  products: [],
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_START:
      return { ...state, loading: true };
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case LOAD_PRODUCTS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
