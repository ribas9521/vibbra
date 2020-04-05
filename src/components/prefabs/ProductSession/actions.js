import { Axios } from '../../../helpers';
export const LOAD_PRODUCTS_START = 'LOAD_PRODUCTS_START';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_START';

export const loadProducts = () => {
  return async (dispatch) => {
    const axios = Axios.getInstance();
    try {
      dispatch(loadProductsStart());
      const resp = await axios.post('deal/search');
      dispatch(loadProductsSuccess({ payload: resp.data }));
      console.log(resp);
    } catch (e) {
      console.log(e);
      dispatch(loadProductsFail());
    }
  };
};

const loadProductsStart = () => ({
  type: LOAD_PRODUCTS_START,
});
const loadProductsSuccess = ({ payload }) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload,
});
const loadProductsFail = () => ({
  type: LOAD_PRODUCTS_FAIL,
});
