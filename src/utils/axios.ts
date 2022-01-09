import axios from 'axios';

const service = axios.create({
  timeout: 10000
});

// 请求拦截
service.interceptors.request.use(config => {
  console.log(config);
  // if (process.env.NODE_ENV === 'production') {
  //   const url = window.location.origin + ':9999';
  //   config.url = url + config.url;
  // }
  return config;
});

const http = {
  post: (path: string, params: { username: string; password: string }) => {
    return service.post(path, params);
  }
};

export default http;
