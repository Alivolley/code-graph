import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, Button, Drawer, IconButton } from '@mui/material';

// Icons
import { Add, ArrowDown2, Profile, LogoutCurve, UserEdit } from 'iconsax-react';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';

// Components
import LogoutModal from '@/components/templates/logout-modal/logout-modal';
import MobileMenuStyle from './mobile-menu.style';

// Apis
import useGetCategories from '@/apis/categories/useGetCategories';

function MobileMenu({ open, onClose, isUserLogin }) {
   const [showLogoutModal, setShowLogoutModal] = useState(false);
   const [profileExpand, setProfileExpand] = useState(false);
   const [servicesExpand, setServicesExpand] = useState(false);

   const { data: categoryData, isLoading: categoryIsLoading } = useGetCategories();

   const { locale, pathname } = useRouter();

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
                              {/* <Link
                                 href="/"
                                 className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                              >
                                 <UserEdit size="18" color="#626E94" variant="Broken" />
                                 {t('Account info')}
                              </Link> */}

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
                           {categoryIsLoading ? (
                              <div className="space-y-2">
                                 <div className="h-5 w-[150px] animate-pulse rounded bg-[#626e9441]" />
                                 <div className="h-5 w-[150px] animate-pulse rounded bg-[#626e9441]" />
                                 <div className="h-5 w-[150px] animate-pulse rounded bg-[#626e9441]" />
                                 <div className="h-5 w-[150px] animate-pulse rounded bg-[#626e9441]" />
                              </div>
                           ) : (
                              categoryData?.map(item => (
                                 <Link
                                    href={`/services/${item?.title}`}
                                    className="flex w-full items-center gap-2 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                                    key={item?.id}
                                 >
                                    <div
                                       dangerouslySetInnerHTML={{ __html: item?.icon }}
                                       className="flex items-center justify-center [&>svg]:size-[18px]"
                                    />
                                    <p>{item?.title}</p>
                                 </Link>
                              ))
                           )}
                        </div>
                     </AccordionDetails>
                  </Accordion>

                  <Link
                     href="/allProducts"
                     className={`block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm  ${
                        pathname.startsWith('/allProducts') ? 'text-[#65A5FC]' : ''
                     }`}
                  >
                     {t('Projects')}
                  </Link>

                  <Link
                     href="/blogs"
                     className={`block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm  ${
                        pathname.startsWith('/blogs') ? 'text-[#65A5FC]' : ''
                     }`}
                  >
                     {t('Blogs')}
                  </Link>

                  <Link
                     href="/prices"
                     className={`block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm  ${
                        pathname.startsWith('/prices') ? 'text-[#65A5FC]' : ''
                     }`}
                  >
                     {t('Prices')}
                  </Link>

                  <Link
                     href="/aboutUs"
                     className={`block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm  ${
                        pathname.startsWith('/aboutUs') ? 'text-[#65A5FC]' : ''
                     }`}
                  >
                     {t('About us')}
                  </Link>

                  <Link
                     href="/contactUs"
                     className={`block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm  ${
                        pathname.startsWith('/contactUs') ? 'text-[#65A5FC]' : ''
                     }`}
                  >
                     {t('Contact us')}
                  </Link>

                  <Link
                     href="/faqs"
                     className={`block w-full border-t border-solid border-[#E4EAF0] py-3 text-sm  ${
                        pathname.startsWith('/faqs') ? 'text-[#65A5FC]' : ''
                     }`}
                  >
                     {t('Faqs')}
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
