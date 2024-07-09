import Cookies from 'js-cookie';
import axiosInstance from '@/configs/axiosInstance';

const logoutHandler = () => {
   axiosInstance
      .post('accounts/logout/', {
         refresh: Cookies.get('roadGraph_refreshToken'),
      })
      .then(() => {
         Cookies.remove('roadGraph_accessToken');
         Cookies.remove('roadGraph_refreshToken');
         Cookies.remove('roadGraph_isLogin');
         window.location.reload();
      });
};

export default logoutHandler;
