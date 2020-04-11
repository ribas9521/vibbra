import { Axios } from '../../../helpers';
export const LOAD_FEATURED_START = 'LOAD_FEATURED_START';
export const LOAD_FEATURED_SUCCESS = 'LOAD_FEATURED_SUCCESS';
export const LOAD_FEATURED_FAIL = 'LOAD_FEATURED_FAIL';

export const load = () => {
  return async (dispatch) => {
    const axios = Axios.getInstance();
    try {
      dispatch(loadStart());
      const resp = await axios.get('deal/featured');
      dispatch(loadSuccess({ payload: resp.data }));
      console.log(resp);
    } catch (e) {
      console.log(e);
      dispatch(loadFail());
    }
  };
};

const loadStart = () => ({
  type: LOAD_FEATURED_START,
});
const loadSuccess = ({ payload }) => ({
  type: LOAD_FEATURED_SUCCESS,
  payload,
});
const loadFail = () => ({
  type: LOAD_FEATURED_FAIL,
});
