/* eslint-disable no-console */
import axios from 'axios';
import { devBaseUrl } from '../config/config';
export default class Axios {
  static getInstance(token = null) {
    const contentType = 'application/json;charset=UTF-8';
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
    };

    if (token) {
      headers['Authorization'] = token;
    }

    return axios.create({
      baseURL: devBaseUrl,
      timeout: 10000,
      headers,
    });
  }
}
