import { Axios } from '../../../helpers';
export const LOAD_DETAILS_START = 'LOAD_DETAILS_START';
export const LOAD_DETAILS_SUCCESS = 'LOAD_DETAILS_SUCCESS';
export const LOAD_DETAILS_FAIL = 'LOAD_DETAILS_FAIL';

export const LOAD_COMMENTS_START = 'LOAD_COMMENTS_START';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAIL = 'LOAD_COMMENTS_FAIL';

export const loadDetails = () => {
  return async (dispatch) => {
    const axios = Axios.getInstance();
    try {
      dispatch(loadDetailsStart());
      const resp = await axios.get('deal/1');
      dispatch(loadDetailsSuccess({ payload: resp.data }));
      console.log(resp);
    } catch (e) {
      console.log(e);
      dispatch(loadDetailsFail());
    }
  };
};

export const loadComments = () => {
  return async (dispatch) => {
    const axios = Axios.getInstance();
    try {
      dispatch(loadCommentsStart());
      console.log('#########');
      const resp = await axios.get('deal/1/message');
      dispatch(loadCommentsSuccess({ payload: resp.data }));
      console.log(resp);
    } catch (e) {
      console.log(e);
      dispatch(loadCommentsFail());
    }
  };
};

const loadDetailsStart = () => ({
  type: LOAD_DETAILS_START,
});
const loadDetailsSuccess = ({ payload }) => ({
  type: LOAD_DETAILS_SUCCESS,
  payload,
});
const loadDetailsFail = () => ({
  type: LOAD_DETAILS_FAIL,
});

const loadCommentsStart = () => ({
  type: LOAD_COMMENTS_START,
});
const loadCommentsSuccess = ({ payload }) => ({
  type: LOAD_COMMENTS_SUCCESS,
  payload,
});
const loadCommentsFail = () => ({
  type: LOAD_COMMENTS_FAIL,
});
