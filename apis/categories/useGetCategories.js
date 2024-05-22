import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetCategories = () => useSWR('list-category/', url => axiosInstance(url).then(res => res.data));

export default useGetCategories;
