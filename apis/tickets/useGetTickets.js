import useSWR from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useGetTickets = pageStatus =>
   useSWR(`accounts/tickets/list_create/?page=${pageStatus}&page_size=6`, url =>
      axiosInstance(url).then(res => res.data)
   );

export default useGetTickets;
