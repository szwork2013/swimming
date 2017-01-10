/**
 * Created by ryan on 2017/1/10.
 */
import qs from 'qs';
import request from '../utils/request';
const baseURL = HOST;

export async function fetchCoach(id) {
  return request(`${baseURL}/swim/pools/public/${id}`);
}
export async function fetchTrainList(id) {
  return request(`${baseURL}/swim/pools/public/trains/${id}`);
}
