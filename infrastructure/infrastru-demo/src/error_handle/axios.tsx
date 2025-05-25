import axios from "axios";

enum HttpStatusCode {
    NO_LOGIN = 200005,
    NO_USER = 200004,
    NO_PERMISSION = 200003,
}
const axiosInstance = axios.create({
    baseURL: './',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

  axiosInstance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {

    const statusCode = error.response.status;
    switch (statusCode) {
        case HttpStatusCode.NO_LOGIN:
          alert('登录失败');
          break;
        case HttpStatusCode.NO_PERMISSION:
          alert('用户无权限');
          break;
        case HttpStatusCode.NO_USER:
        alert('用户不存在');
          break;
        default:
          console.log('请求失败');
          // alert('请求失败');
      }
    return error;
  });
export default axiosInstance;