import qs from 'qs';
import request from '../utils/request';
/* eslint no-undef: 0 */
const baseURL = HOST;

export async function fetchInfo(id) {
  return request(`${baseURL}/swim/info`);
}


