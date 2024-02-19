import useSWRMutation from 'swr/mutation';
import Cookies from 'js-cookie';
import axiosInstance from '@/configs/axiosInstance';

// Context
import { useGlobalContext } from '@/context/store';

const useSignUp = () => {
   const { setIsLogin } = useGlobalContext();

   return useSWRMutation('accounts/registration/', (url, data) =>
      axiosInstance.post(url, data.arg).then(res => {
         Cookies.set('roadGraph_accessToken', res?.data?.access, { expires: 365 });
         Cookies.set('roadGraph_refreshToken', res?.data?.refresh, { expires: 365 });
         Cookies.set('roadGraph_isLogin', true, { expires: 365 });
         setIsLogin(true);
      })
   );
};

export default useSignUp;
