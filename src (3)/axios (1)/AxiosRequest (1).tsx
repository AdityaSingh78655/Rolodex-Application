import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const axiosInstanceAuth = axios.create({});

axiosInstanceAuth.interceptors.request.use(
  async (request: AxiosRequestConfig<any>) => {
    request.headers = {
      Authorization:
        'Bearer a4yG9k-5WNjwgchXKdmyyBy-KNT6_rpzoPNIo59ToKfg11ikyA',
    };
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);
axiosInstanceAuth.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstanceAuth;
