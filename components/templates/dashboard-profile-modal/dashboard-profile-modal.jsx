import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

// MUI
import { Drawer } from '@mui/material';

// Components
import UserDashboardRightSide from '../user-dashboard-rightSide/user-dashboard-rightSide';

function DashboardProfileModal({ showDashboardProfileModal, setShowDashboardProfileModal }) {
   const { locale } = useRouter();
   const t = useTranslations('userDashboard');

   return (
      <Drawer
         anchor="right"
         dir={locale === 'en' ? 'ltr' : 'rtl'}
         open={showDashboardProfileModal}
         onClose={() => setShowDashboardProfileModal(false)}
         sx={{
            '&>.MuiPaper-root': { width: '100%', marginTop: '100px', boxShadow: 'none' },
            '&>.MuiBackdrop-root': { backgroundColor: 'rgba(0, 0, 0, 0)' },
         }}
      >
         <div className="p-[25px]">
            <p className="border-b border-solid border-[#C3CAD9] pb-5 font-almaraiBold700 text-xl text-[#6B7A99]">
               {t('User profile')}
            </p>

            <UserDashboardRightSide />
         </div>
      </Drawer>
   );
}

export default DashboardProfileModal;
