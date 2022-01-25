import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import type { Action } from 'element-plus';
import { getToken } from './getToken';

const service = axios.create({
  timeout: 10000
});

// 请求拦截
service.interceptors.request.use(config => {
  // console.log(config);
  // if (process.env.NODE_ENV === 'production') {
  //   const url = window.location.origin + ':9999';
  //   config.url = url + config.url;
  // }
  // 设置请求头token
  if (config.url !== 'api/login') {
    config.headers!.authorization = 'Bearer ' + getToken();
  }

  return config;
});

service.interceptors.response.use(res => {
  if (res.data.code !== 200) {
    ElMessageBox.alert(res.data.msg, '温馨提示：', {
      confirmButtonText: 'OK',
      callback: (action: Action) => {
        ElMessage({
          type: 'info',
          message: `关闭: ${action}`
        });
      }
    });
  }
  return res;
});

const http = {
  post: (path: string, params: { username: string; password: string }) => {
    return service.post(path, params);
  },

  get: (path: string, params: { [prototy: string]: any } | undefined) => {
    return service.get(path, { params: params });
  }
};

export default http;
