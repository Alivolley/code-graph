import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useState } from 'react';

// MUI
import { LoadingButton } from '@mui/lab';
import { Button, Dialog } from '@mui/material';

// Utils
import logoutHandler from '@/utils/logoutHandler';

function LogoutModal({ show, onClose }) {
   const [loading, setLoading] = useState(false);
   const { locale } = useRouter();
   const t = useTranslations('header');

   const logoutFuncHandler = () => {
      setLoading(true);
      logoutHandler();
   };

   return (
      <Dialog open={show} onClose={onClose} dir={locale === 'en' ? 'ltr' : 'rtl'}>
         <div className="flex flex-col gap-3 bg-white px-10 py-5">
            <p className="text-center font-almaraiBold700 text-base">{t('Are you sure about logging out ?')}</p>

            <div className="mt-5 flex items-center gap-3">
               <Button
                  variant="contained"
                  fullWidth
                  color="customPink"
                  onClick={onClose}
                  sx={{ height: 40, borderRadius: '10px', ':hover': { backgroundColor: '#B46451' } }}
               >
                  {t('No')}
               </Button>
               <LoadingButton
                  variant="contained"
                  fullWidth
                  onClick={logoutFuncHandler}
                  loading={loading}
                  sx={{
                     height: 40,
                     borderRadius: '10px',
                     color: 'white',
                     ':hover': {
                        backgroundColor: '#E5EFFD',
                        color: '#626E94',
                     },
                  }}
               >
                  {t('Yes')}
               </LoadingButton>
            </div>
         </div>
      </Dialog>
   );
}

export default LogoutModal;
