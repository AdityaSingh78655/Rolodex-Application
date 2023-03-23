import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
  async (request: AxiosRequestConfig<any>) => {
    request.headers = {
      'X-CSCAPI-KEY':
        'SldwckZYOEZlSVl2VTNEZjNIbXl4ZWFoNjgzWWIweVZ3cWNHR2gycQ==',
    };
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
