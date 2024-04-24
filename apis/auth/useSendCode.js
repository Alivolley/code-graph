import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useSendCode = () =>
   useSWRMutation('accounts/forgot-password/', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useSendCode;
