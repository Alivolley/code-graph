import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useSendReply = ticketId =>
   useSWRMutation(`accounts/tickets/list_create/?pk=${ticketId}`, (url, data) =>
      axiosInstance.post(url, data.arg).then(res => res.data)
   );

export default useSendReply;
