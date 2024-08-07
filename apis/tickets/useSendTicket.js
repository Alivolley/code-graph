import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useSendTicket = () =>
   useSWRMutation('accounts/tickets/list_create/', (url, data) =>
      axiosInstance.post(url, data.arg).then(res => res.data)
   );

export default useSendTicket;
