/* eslint-disable react/jsx-no-constructed-context-values */
import Cookies from 'js-cookie';
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
   const isLoginDefault = Boolean(Cookies.get('roadGraph_isLogin'));

   const [isLogin, setIsLogin] = useState(isLoginDefault || false);
   const [userInfo, setUserInfo] = useState({});
   const [isDashboardMenuSideBarOpen, setIsDashboardMenuSideBarOpen] = useState(false);

   return (
      <GlobalContext.Provider
         value={{
            isLogin,
            setIsLogin,
            userInfo,
            setUserInfo,
            isDashboardMenuSideBarOpen,
            setIsDashboardMenuSideBarOpen,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
}

export const useGlobalContext = () => useContext(GlobalContext);
