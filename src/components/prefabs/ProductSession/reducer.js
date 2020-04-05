import {
  LOAD_PRODUCTS_START,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
} from './actions';
const INITIAL_STATE = {
  products: [],
  productsLoading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_START:
      return { ...state, productsLoading: true };
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, productsLoading: false };
    case LOAD_PRODUCTS_FAIL:
      return { ...state, productsLoading: false };
    default:
      return state;
  }
};
