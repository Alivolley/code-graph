import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetBlogs = () => useSWR('list-article/?page_size=2', url => axiosInstance(url).then(res => res.data));

export default useGetBlogs;
