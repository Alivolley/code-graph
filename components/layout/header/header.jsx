import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, Grow, IconButton, Paper, Popper } from '@mui/material';

// Icons
import { ArrowDown2, Calculator, LogoutCurve, Profile, ProfileCircle, UserEdit } from 'iconsax-react';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';
import menuSvg from '@/assets/icons/menu.svg';

// Components
import MobileMenu from '../mobile-menu/mobile-menu';
import LogoutModal from '@/components/templates/logout-modal/logout-modal';

// Styles
import HeaderStyle from './header.style';

// Context
import { useGlobalContext } from '@/context/store';

// Apis
import useGetUserInfo from '@/apis/userInfo/useGetUserInfo';

function Header() {
   const [showMobileMenu, setShowMobileMenu] = useState(false);
   const [hasBackGround, setHasBackGround] = useState(false);
   const [isUserLogin, setIsUserLogin] = useState();
   const [profileDropDown, setProfileDropDown] = useState(false);
   const [showLogoutModal, setShowLogoutModal] = useState(false);

   // eslint-disable-next-line no-unused-vars
   const getUserInfo = useGetUserInfo(isUserLogin);

   const profileRef = useRef();
   const { isLogin, userInfo } = useGlobalContext();
   const t = useTranslations('header');
   const { locale, push, query, pathname, asPath } = useRouter();

   const changeLanguage = () => {
      push({ pathname, query }, asPath, { locale: locale === 'en' ? 'fa' : 'en' });
   };

   useEffect(() => {
      setIsUserLogin(isLogin);
   }, [isLogin]);

   useEffect(() => {
      setShowMobileMenu(false);
   }, [pathname, query]);

   const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition === 0) {
         setHasBackGround(false);
      } else {
         setHasBackGround(true);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <header
         className={`fixed inset-x-0 top-0 z-10 px-5 py-3 transition-all duration-100 customMd:py-10 ${
            hasBackGround ? 'bg-white customMd:py-3' : 'customMd:py-10'
         }`}
      >
         <div
            className="absolute inset-x-0 -bottom-2 h-2 transition-all duration-200"
            style={{
               background: hasBackGround ? 'linear-gradient(90deg, #FD8266 21.5%, #65A5FC 78.5%)' : 'transparent',
            }}
         />

         <HeaderStyle className="mx-auto hidden max-w-[1440px] items-center justify-between customMd:flex customMd:px-[60px]">
            <div className="flex items-center gap-4 customLg:gap-9">
               <Link href="/">
                  <Image src={headerLogo} alt="header logo" />
               </Link>
               <div className="flex items-center gap-3 customLg:gap-6">
                  <div id="dropdownWrapper">
                     <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                        <p className="text-xs customLg:text-sm">{t('Services')}</p>
                        <ArrowDown2 size="15" id="dropdownArrow" />
                     </div>

                     <div
                        id="dropdownBox"
                        className="flex w-[263px] justify-between rounded-lg border-t-4 border-solid border-[#65A5FC] bg-white px-5 py-7"
                     >
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/categoryDetail/graphic"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-customPink"
                           >
                              <Calculator size="18" /> {t('Graphic')}
                           </Link>
                           <Link
                              href="/categoryDetail/uiux"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-customPink"
                           >
                              <Calculator size="18" /> {t('UiUx')}
                           </Link>
                        </div>
                        <div className="h-[73px] w-px bg-[#E4EAF0]" />
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/categoryDetail/website"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-customPink"
                           >
                              <Calculator size="18" /> {t('Website')}
                           </Link>
                           <Link
                              href="/categoryDetail/design"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-customPink"
                           >
                              <Calculator size="18" /> {t('Redesign')}
                           </Link>
                        </div>
                     </div>
                  </div>

                  <Link
                     href="/allProducts"
                     className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                  >
                     <p className="text-xs customLg:text-sm">{t('Projects')}</p>
                  </Link>

                  <Link
                     href="/blogs"
                     className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                  >
                     <p className="text-xs customLg:text-sm">{t('Blogs')}</p>
                  </Link>

                  <Link
                     href="/prices"
                     className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                  >
                     <p className="text-xs customLg:text-sm">{t('Prices')}</p>
                  </Link>

                  <Link
                     href="/aboutUs"
                     className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                  >
                     <p className="text-xs customLg:text-sm">{t('About us')}</p>
                  </Link>

                  <Link
                     href="/contactUs"
                     className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                  >
                     <p className="text-xs customLg:text-sm">{t('Contact us')}</p>
                  </Link>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <IconButton
                  sx={{
                     fontSize: 14,
                     border: '1px solid #FD8266',
                     color: '#FD8266',
                     width: 45,
                     height: 45,
                     fontFamily: 'almaraiBold',
                     ':hover': {
                        color: '#65A5FC',
                        borderColor: '#65A5FC',
                     },
                  }}
                  onClick={changeLanguage}
               >
                  {locale === 'en' ? 'فا' : 'EN'}
               </IconButton>
               {isUserLogin ? (
                  <>
                     <div
                        className="flex h-[45px] min-w-[184px] cursor-pointer items-center justify-center
                         gap-[5px] rounded-[57px] bg-customPink px-3 text-white transition-all duration-200"
                        ref={profileRef}
                        onMouseEnter={() => setProfileDropDown(true)}
                        onMouseLeave={() => setProfileDropDown(false)}
                     >
                        <Profile size="20" />
                        {userInfo?.name || userInfo?.email}
                        <ArrowDown2
                           size="18"
                           className={`!transition-all !duration-200 ${profileDropDown ? 'rotate-180' : ''}`}
                        />
                     </div>

                     <Popper
                        open={profileDropDown}
                        anchorEl={profileRef.current}
                        transition
                        disablePortal
                        onMouseEnter={() => setProfileDropDown(true)}
                        onMouseLeave={() => setProfileDropDown(false)}
                     >
                        {({ TransitionProps, placement }) => (
                           <Grow
                              {...TransitionProps}
                              style={{
                                 transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                              }}
                           >
                              <Paper
                                 sx={{
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    marginTop: '-2px',
                                    borderRadius: '0 0 10px 10px',
                                    overflow: 'hidden',
                                 }}
                              >
                                 <div className="flex min-w-[148px] flex-col">
                                    <Link
                                       href="/profile/information"
                                       className="flex h-10 items-center gap-3 bg-customPink px-3 text-xs text-white transition-all duration-150 hover:bg-[#B46451]"
                                       onClick={() => setProfileDropDown(false)}
                                    >
                                       <UserEdit size="15" variant="Broken" />
                                       {t('Account info')}
                                    </Link>

                                    <Button
                                       className="!flex !h-11 !items-center !justify-start !gap-3 !border-t !border-solid
                                        !border-[#E4EAF0] !bg-customPink !px-3 !text-xs !text-white hover:!bg-[#B46451]"
                                       onClick={() => setShowLogoutModal(true)}
                                    >
                                       <LogoutCurve size="15" variant="Broken" />
                                       {t('Logout')}
                                    </Button>
                                 </div>
                              </Paper>
                           </Grow>
                        )}
                     </Popper>
                  </>
               ) : (
                  <Link href="/login">
                     <Button
                        color="customPink"
                        variant="contained"
                        sx={{
                           height: 45,
                           width: 162,
                           borderRadius: 57,
                           fontSize: 16,
                           ':hover': {
                              backgroundColor: '#B46451',
                           },
                        }}
                     >
                        {t('Sign up / Login')}
                     </Button>
                  </Link>
               )}
            </div>
         </HeaderStyle>

         <div className="flex items-center justify-between customMd:hidden">
            <div className="flex items-center gap-2">
               <IconButton
                  sx={{
                     fontSize: 14,
                     border: '2px solid #FD8266',
                     color: '#FD8266',
                     width: 33,
                     height: 33,
                     fontFamily: 'almaraiBold',
                  }}
                  onClick={changeLanguage}
               >
                  {locale === 'en' ? 'فا' : 'EN'}
               </IconButton>
               <div className="h-6 w-px bg-[#DEDEDE]" />
               <Link href="/login" className="flex items-center justify-center">
                  <ProfileCircle size="35" color="#FD8266" />
               </Link>
            </div>

            <div className="flex items-center gap-3">
               <Link href="/" className="h-[35px] w-[76px]">
                  <Image src={headerLogo} alt="header logo" className="size-full" />
               </Link>

               <IconButton onClick={() => setShowMobileMenu(true)}>
                  <Image src={menuSvg} alt="menu" />
               </IconButton>
            </div>
         </div>

         <MobileMenu open={showMobileMenu} onClose={() => setShowMobileMenu(false)} isUserLogin={isUserLogin} />
         <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
      </header>
   );
}

export default Header;
