import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, Button, Drawer, IconButton } from '@mui/material';

// Icons
import { Add, ArrowDown2, Calculator, Profile, LogoutCurve, UserEdit } from 'iconsax-react';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';

// Components
import LogoutModal from '@/components/templates/logout-modal/logout-modal';
import MobileMenuStyle from './mobile-menu.style';

function MobileMenu({ open, onClose, isUserLogin }) {
   const [showLogoutModal, setShowLogoutModal] = useState(false);

   const { locale } = useRouter();

   const t = useTranslations('header');

   return (
      <Drawer anchor="left" open={open} onClose={onClose} dir={locale === 'en' ? 'ltr' : 'rtl'}>
         <MobileMenuStyle className="w-[300px]">
            <div className="flex items-start justify-between">
               <Link href="/" className="p-5">
                  <div className="w-[80px] shrink-0">
                     <Image src={headerLogo} alt="logo" className="size-full" />
                  </div>
               </Link>
               <IconButton onClick={onClose}>
                  <Add className="rotate-45" size="32" />
               </IconButton>
            </div>
            <div className="px-5">
               <div className="border-t border-solid border-[#BFC4D5] pt-5">
                  {isUserLogin && (
                     <Accordion sx={{ boxShadow: 'none' }}>
                        <AccordionSummary
                           expandIcon={<ArrowDown2 size="18" />}
                           sx={{ padding: '0 !important', fontSize: '14px' }}
                        >
                           {t('Profile')}
                        </AccordionSummary>
                        <AccordionDetails>
                           <div className="-mt-4 flex flex-col items-start">
                              <Link
                                 href="/profile/information"
                                 className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                              >
                                 <UserEdit size="18" color="#626E94" />
                                 {t('Account info')}
                              </Link>

                              <Button
                                 startIcon={<LogoutCurve size="18" color="#626E94" />}
                                 onClick={() => setShowLogoutModal(true)}
                                 sx={{
                                    color: 'black',
                                    marginTop: '12px',
                                    paddingInlineStart: '4px',
                                    fontSize: '12px',
                                 }}
                              >
                                 {t('Logout')}
                              </Button>
                           </div>
                        </AccordionDetails>
                     </Accordion>
                  )}
                  <Accordion sx={{ boxShadow: 'none' }}>
                     <AccordionSummary
                        expandIcon={<ArrowDown2 size="18" />}
                        sx={{ padding: '0 !important', fontSize: '14px' }}
                     >
                        {t('Services')}
                     </AccordionSummary>
                     <AccordionDetails>
                        <div className="-mt-4 flex flex-col items-start">
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Graphic')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Redesign')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('UiUx')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Website')}
                           </Link>
                        </div>
                     </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ boxShadow: 'none' }}>
                     <AccordionSummary
                        expandIcon={<ArrowDown2 size="18" />}
                        sx={{ padding: '0 !important', fontSize: '14px' }}
                     >
                        {t('Projects')}
                     </AccordionSummary>
                     <AccordionDetails>
                        <div className="-mt-4 flex flex-col items-start">
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Graphic')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Redesign')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('UiUx')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Website')}
                           </Link>
                        </div>
                     </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ boxShadow: 'none' }}>
                     <AccordionSummary
                        expandIcon={<ArrowDown2 size="18" />}
                        sx={{ padding: '0 !important', fontSize: '14px' }}
                     >
                        {t('Blogs')}
                     </AccordionSummary>
                     <AccordionDetails>
                        <div className="-mt-4 flex flex-col items-start">
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Graphic')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Redesign')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('UiUx')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Website')}
                           </Link>
                        </div>
                     </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ boxShadow: 'none' }}>
                     <AccordionSummary
                        expandIcon={<ArrowDown2 size="18" />}
                        sx={{ padding: '0 !important', fontSize: '14px' }}
                     >
                        {t('About us')}
                     </AccordionSummary>
                     <AccordionDetails>
                        <div className="-mt-4 flex flex-col items-start">
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Graphic')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Redesign')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('UiUx')}
                           </Link>
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Website')}
                           </Link>
                        </div>
                     </AccordionDetails>
                  </Accordion>

                  <div className="mt-10">
                     {!isUserLogin && (
                        <Link href="/login">
                           <Button
                              startIcon={<Profile size="18" />}
                              variant="contained"
                              fullWidth
                              sx={{
                                 height: '47px',
                                 borderRadius: '10px',
                                 color: 'white',
                              }}
                           >
                              {t('Sign up / Login')}
                           </Button>
                        </Link>
                     )}
                  </div>
               </div>
            </div>
         </MobileMenuStyle>
         <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
      </Drawer>
   );
}

export default MobileMenu;
