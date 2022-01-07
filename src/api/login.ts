import http from '../utils/axios';
import global from '../global/global';

export async function login(params: { username: string; password: string }) {
  return await http.post(global.defaultPath + '/login', params);
}
