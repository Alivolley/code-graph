import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, IconButton } from '@mui/material';

// Icons
import { ArrowDown2, Calculator, ProfileCircle } from 'iconsax-react';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';
import menuSvg from '@/assets/icons/menu.svg';

// Components
import MobileMenu from '../mobile-menu/mobile-menu';

// Styles
import HeaderStyle from './header.style';

function Header() {
   const [showMobileMenu, setShowMobileMenu] = useState(false);
   const [hasBackGround, setHasBackGround] = useState(false);

   const t = useTranslations('header');
   const { locale, push, query, pathname, asPath } = useRouter();

   const changeLanguage = () => {
      push({ pathname, query }, asPath, { locale: locale === 'en' ? 'fa' : 'en' });
   };

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
         className={`fixed inset-x-0 top-0 z-10 p-5 transition-all duration-100 customMd:py-10 ${
            hasBackGround ? 'bg-white customMd:py-3' : 'customMd:py-10'
         }`}
      >
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
                        className="flex w-[263px] items-center justify-between rounded-lg border-t-4 border-solid border-[#65A5FC] bg-white px-5 py-7"
                     >
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Graphic')}
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Redesign')}
                           </Link>
                        </div>
                        <div className="h-[73px] w-px bg-[#E4EAF0]" />
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('UiUx')}
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Website')}
                           </Link>
                        </div>
                     </div>
                  </div>

                  <div id="dropdownWrapper">
                     <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                        <p className="text-xs customLg:text-sm">{t('Projects')}</p>
                        <ArrowDown2 size="15" id="dropdownArrow" />
                     </div>

                     <div
                        id="dropdownBox"
                        className="flex w-[263px] items-center justify-between rounded-lg border-t-4 border-solid border-[#65A5FC] bg-white px-5 py-7"
                     >
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Graphic')}
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Redesign')}
                           </Link>
                        </div>
                        <div className="h-[73px] w-px bg-[#E4EAF0]" />
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('UiUx')}
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Website')}
                           </Link>
                        </div>
                     </div>
                  </div>

                  <div id="dropdownWrapper">
                     <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                        <p className="text-xs customLg:text-sm">{t('Blogs')}</p>
                        <ArrowDown2 size="15" id="dropdownArrow" />
                     </div>

                     <div
                        id="dropdownBox"
                        className="flex w-[263px] items-center justify-between rounded-lg border-t-4 border-solid border-[#65A5FC] bg-white px-5 py-7"
                     >
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Graphic')}
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Redesign')}
                           </Link>
                        </div>
                        <div className="h-[73px] w-px bg-[#E4EAF0]" />
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('UiUx')}
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Website')}
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                     <p className="text-xs customLg:text-sm">{t('Prices')}</p>
                  </div>

                  <div id="dropdownWrapper">
                     <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                        <p className="text-xs customLg:text-sm">{t('About us')}</p>
                        <ArrowDown2 size="15" id="dropdownArrow" />
                     </div>

                     <div
                        id="dropdownBox"
                        className="flex w-[263px] items-center justify-between rounded-lg border-t-4 border-solid border-[#65A5FC] bg-white px-5 py-7"
                     >
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Graphic')}
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Redesign')}
                           </Link>
                        </div>
                        <div className="h-[73px] w-px bg-[#E4EAF0]" />
                        <div className="flex flex-col gap-6 text-xs text-[#626E94]">
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('UiUx')}
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-2 transition-all duration-200 hover:text-[#FD8266]"
                           >
                              <Calculator size="18" /> {t('Website')}
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                     <p className="text-xs customLg:text-sm">{t('Contact us')}</p>
                  </div>
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
                     ':hover': {
                        color: '#65A5FC',
                        borderColor: '#65A5FC',
                     },
                  }}
                  onClick={changeLanguage}
               >
                  {locale.toLocaleUpperCase()}
               </IconButton>
               <Link href="/">
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
            </div>
         </HeaderStyle>

         <div className="flex items-center justify-between customMd:hidden">
            <div className="flex items-center gap-2">
               <IconButton
                  sx={{
                     fontSize: 12,
                     border: '2px solid #FD8266',
                     color: '#FD8266',
                     width: 33,
                     height: 33,
                  }}
                  onClick={changeLanguage}
               >
                  {locale.toLocaleUpperCase()}
               </IconButton>
               <div className="h-6 w-px bg-[#DEDEDE]" />
               <Link href="/" className="flex items-center justify-center">
                  <ProfileCircle size="35" color="#FD8266" />
               </Link>
            </div>

            <div className="flex items-center gap-3">
               <div className="h-[35px] w-[76px]">
                  <Image src={headerLogo} alt="header logo" className="size-full" />
               </div>

               <IconButton onClick={() => setShowMobileMenu(true)}>
                  <Image src={menuSvg} alt="menu" />
               </IconButton>
            </div>
         </div>

         <MobileMenu open={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
      </header>
   );
}

export default Header;
