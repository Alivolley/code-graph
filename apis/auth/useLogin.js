import useSWRMutation from 'swr/mutation';
import Cookies from 'js-cookie';
import axiosInstance from '@/configs/axiosInstance';

const useLogin = () =>
   useSWRMutation('accounts/login/', (url, data) =>
      axiosInstance.post(url, data.arg).then(res => {
         Cookies.set('roadGraph_accessToken', res?.data?.access, { expires: 365 });
         Cookies.set('roadGraph_refreshToken', res?.data?.refresh, { expires: 365 });
         Cookies.set('roadGraph_isLogin', true, { expires: 365 });
      })
   );

export default useLogin;
