/* eslint-disable react/jsx-no-constructed-context-values */
import Cookies from 'js-cookie';
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
   const isDefaultLogin = Boolean(Cookies.get('roadGraph_isLogin'));

   const [isLogin, setIsLogin] = useState(isDefaultLogin || false);

   return <GlobalContext.Provider value={{ isLogin, setIsLogin }}>{children}</GlobalContext.Provider>;
}

export const useGlobalContext = () => useContext(GlobalContext);
