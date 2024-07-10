import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useChangePassword = () =>
   useSWRMutation('accounts/change-password/', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useChangePassword;
