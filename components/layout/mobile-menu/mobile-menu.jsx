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
   const [profileExpand, setProfileExpand] = useState(false);
   const [servicesExpand, setServicesExpand] = useState(false);

   const { locale } = useRouter();

   const t = useTranslations('header');

   return (
      <Drawer anchor="right" open={open} onClose={onClose} dir={locale === 'en' ? 'ltr' : 'rtl'}>
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
                     <Accordion sx={{ boxShadow: 'none' }} expanded={profileExpand}>
                        <AccordionSummary
                           expandIcon={<ArrowDown2 size="18" {...(profileExpand && { color: '#FD8266' })} />}
                           sx={{ padding: '0 !important', fontSize: '14px' }}
                           onClick={() => setProfileExpand(prev => !prev)}
                        >
                           <p {...(profileExpand && { className: 'text-customPink' })}>{t('Profile')}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                           <div className="-mt-4 flex flex-col items-start">
                              <Link
                                 href="/"
                                 className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                              >
                                 <UserEdit size="18" color="#626E94" variant="Broken" />
                                 {t('Account info')}
                              </Link>

                              <Button
                                 startIcon={<LogoutCurve size="18" color="#626E94" variant="Broken" />}
                                 onClick={() => setShowLogoutModal(true)}
                                 sx={{ color: 'black', marginTop: '12px', paddingInlineStart: '4px', fontSize: '12px' }}
                              >
                                 {t('Logout')}
                              </Button>
                           </div>
                        </AccordionDetails>
                     </Accordion>
                  )}
                  <Accordion sx={{ boxShadow: 'none' }} expanded={servicesExpand}>
                     <AccordionSummary
                        expandIcon={<ArrowDown2 size="18" {...(servicesExpand && { color: '#FD8266' })} />}
                        sx={{ padding: '0 !important', fontSize: '14px' }}
                        onClick={() => setServicesExpand(prev => !prev)}
                     >
                        <p {...(servicesExpand && { className: 'text-customPink' })}>{t('Services')}</p>
                     </AccordionSummary>
                     <AccordionDetails>
                        <div className="-mt-4 flex flex-col items-start">
                           <Link
                              href="/categoryDetail/graphic"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Graphic')}
                           </Link>
                           <Link
                              href="/categoryDetail/uiux"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('UiUx')}
                           </Link>
                           <Link
                              href="/categoryDetail/website"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                           >
                              <Calculator size="16" color="#626E94" />
                              {t('Website')}
                           </Link>
                           <Link href="/categoryDetail/design" className="flex w-full items-center gap-1 py-3 text-xs">
                              <Calculator size="16" color="#626E94" />
                              {t('Redesign')}
                           </Link>
                        </div>
                     </AccordionDetails>
                  </Accordion>

                  <Link
                     href="/allProducts"
                     className="block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm"
                  >
                     {t('Projects')}
                  </Link>

                  <Link href="/blogs" className="block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm">
                     {t('Blogs')}
                  </Link>

                  <Link href="/prices" className="block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm">
                     {t('Prices')}
                  </Link>

                  <Link href="/aboutUs" className="block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm">
                     {t('About us')}
                  </Link>

                  <Link href="/contactUs" className="block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm">
                     {t('Contact us')}
                  </Link>

                  <div className="mt-10">
                     {!isUserLogin && (
                        <Link href="/login">
                           <Button
                              startIcon={<Profile size="18" />}
                              variant="contained"
                              fullWidth
                              sx={{ height: '47px', borderRadius: '10px', color: 'white' }}
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
