import useSWR from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useGetFavorites = isLogin =>
   useSWR(isLogin ? 'accounts/favorites/' : null, url => axiosInstance(url).then(res => res.data));

export default useGetFavorites;
