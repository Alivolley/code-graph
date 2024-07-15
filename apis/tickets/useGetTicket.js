import useSWR from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useGetTicket = ticketId =>
   useSWR(`accounts/tickets/get/?id=${ticketId}`, url => axiosInstance(url).then(res => res.data));

export default useGetTicket;
