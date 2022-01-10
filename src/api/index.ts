import http from '@/utils/axios';
import global from '../global/global';

export async function getMenu(params: { [prototy: string]: any } | undefined) {
  return await http.get(global.defaultPath + '/menu', params);
}
