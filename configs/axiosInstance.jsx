/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
   baseURL: `${baseURL}api/`,
});

axiosInstance.interceptors.request.use(
   config => {
      const accessToken = Cookies.get('roadGraph_accessToken');
      const lang = Cookies.get('NEXT_LOCALE');

      if (accessToken) {
         config.headers.Authorization = `Bearer ${accessToken}`;
      }

      config.params = { ...config.params, lang };

      return config;
   },
   error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
   res => {
      if (res?.data?.detail) {
         toast.success(res?.data?.detail);
      }

      return res;
   },
   async error => {
      console.log(error);
      const refreshToken = Cookies.get('roadGraph_refreshToken');
      const originalReq = error.config;

      if (error?.response?.status === 401) {
         // access expired
         if (refreshToken) {
            const res = await axiosInstance.post('accounts/token/refresh/', {
               refresh: refreshToken,
            });
            Cookies.set('roadGraph_accessToken', res.data.access, { expires: 365 });
            originalReq.headers.Authorization = `Bearer ${res.data.access}`;
            return axiosInstance(originalReq);
         }
         Cookies.remove('roadGraph_accessToken');
         Cookies.remove('roadGraph_refreshToken');
         Cookies.remove('roadGraph_isLogin');
         location.href = '/login';
      } else if (error?.response?.status === 410) {
         // refresh expired
         Cookies.remove('roadGraph_accessToken');
         Cookies.remove('roadGraph_refreshToken');
         Cookies.remove('roadGraph_isLogin');
         location.href = '/login';
      } else if (error?.response?.data?.detail) {
         toast.error(error?.response?.data?.detail);
      }

      return Promise.reject(error);
   }
);

export default axiosInstance;
