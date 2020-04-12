import { Axios } from '../../../helpers';
import { toastr } from 'react-redux-toastr';
import { loadState, saveState } from '../../../helpers';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const send = (entity) => {
  return async (dispatch) => {
    const axios = Axios.getInstance();
    try {
      dispatch(sendStart());
      const resp = await axios.post('authenticate', entity);
      dispatch([sendSuccess({ payload: resp.data })]);
      toastr.success('Bem vindo', resp.data.user.name);
      saveState('userData', resp.data);
    } catch (e) {
      console.log(e);
      dispatch(sendFail());
      toastr.error('Erro', 'Não foi possível autenticar');
    }
  };
};

export const sendSso = () => {
  const userdata = loadState('userData');

  return async (dispatch) => {
    const axios = Axios.getInstance();
    if (userdata) {
      try {
        dispatch(sendStart());
        const resp = await axios.post('authenticate/sso', {
          app_token: userdata.token,
        });
        dispatch([sendSuccess({ payload: resp.data })]);
        //toastr.success('Bem vindo', resp.data.user.name);
        saveState(resp.data);
        console.log(resp);
      } catch (e) {
        console.log(e);
        dispatch(sendFail());
        toastr.error('Erro', 'Não foi possível autenticar');
      }
    }
  };
};

const sendStart = () => ({
  type: LOGIN_START,
});
const sendSuccess = ({ payload }) => ({
  type: LOGIN_SUCCESS,
  payload,
});
const sendFail = () => ({
  type: LOGIN_FAIL,
});
