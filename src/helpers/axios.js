/* eslint-disable no-console */
import axios from 'axios';
import { devBaseUrl } from '../config/config';
import { loadState } from './';
export default class Axios {
  static getInstance() {
    const contentType = 'application/json;charset=UTF-8';
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
    };
    const userdata = loadState('userData');

    if (userdata && userdata.token) {
      headers['Authorization'] = userdata.token;
    }

    return axios.create({
      baseURL: devBaseUrl,
      timeout: 10000,
      headers,
    });
  }
}
