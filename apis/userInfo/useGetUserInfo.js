import useSWR from 'swr';

// Context
import { useGlobalContext } from '@/context/store';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetUserInfo = isLogin => {
   const { setUserInfo } = useGlobalContext();

   return useSWR(isLogin ? 'accounts/panel/' : null, url =>
      axiosInstance(url).then(res => {
         setUserInfo(res.data);
      })
   );
};

export default useGetUserInfo;
