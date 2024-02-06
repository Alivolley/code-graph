import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

// MUI
import { Backdrop, IconButton, ThemeProvider, createTheme } from '@mui/material';

// Icons
import { Add } from 'iconsax-react';

// Components
import PagesLayout from '../pages-layout/pages-layout';
import LoadingComponent from '@/components/templates/loading-component/loading-component';

// Styles
import getDesignTokens from '@/configs/theme';

function Loading() {
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   useEffect(() => {
      router.events.on('routeChangeStart', url => url !== router.asPath && setLoading(true));
      router.events.on('routeChangeComplete', url => url !== router.asPath && setLoading(false));
      router.events.on('routeChangeError', url => url !== router.asPath && setLoading(false));

      return () => {
         router.events.off('routeChangeStart', url => url !== router.asPath && setLoading(true));
         router.events.off('routeChangeComplete', url => url !== router.asPath && setLoading(false));
         router.events.off('routeChangeError', url => url !== router.asPath && setLoading(false));
      };
   });

   return (
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
         <LoadingComponent />
      </Backdrop>
   );
}

function AppLayout({ children }) {
   const { mutate } = useSWRConfig();
   const { locale } = useRouter();
   const direction = locale === 'en' ? 'ltr' : 'rtl';
   const themeConfig = createTheme(getDesignTokens('light', direction, locale));

   useEffect(() => {
      Cookies.set('NEXT_LOCALE', locale, { expires: 365 });

      mutate(() => true);
   }, [locale]);

   return (
      <ThemeProvider theme={themeConfig}>
         <Toaster
            position={locale === 'en' ? 'top-left' : 'top-right'}
            toastOptions={{
               style: { fontFamily: 'almaraiRegular', fontSize: '14px', direction: locale === 'en' ? 'ltr' : 'rtl' },
               duration: 4000,
            }}
         >
            {t => (
               <ToastBar toast={t}>
                  {({ icon, message }) => (
                     <div className="flex items-center">
                        {icon}
                        {message}
                        {t.type !== 'loading' && (
                           <IconButton
                              onClick={() => toast.dismiss(t.id)}
                              className="!transition-all !duration-150 hover:!text-red-500"
                              size="small"
                           >
                              <Add className="rotate-45" size="28" />
                           </IconButton>
                        )}
                     </div>
                  )}
               </ToastBar>
            )}
         </Toaster>
         <Loading />
         <PagesLayout dir={direction} language={locale}>
            {children}
         </PagesLayout>
      </ThemeProvider>
   );
}

export default AppLayout;
