import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';
import axiosInstance from '@/configs/axiosInstance';

const useToggleFavorites = () => {
   const { mutate } = useSWRConfig();

   return useSWRMutation('accounts/favorites/', (url, data) =>
      axiosInstance
         .post(
            url,
            {},
            {
               params: {
                  pk: data.arg,
               },
            }
         )
         .then(res => {
            mutate('accounts/favorites/', res.data?.data);
            return res.data;
         })
   );
};

export default useToggleFavorites;
