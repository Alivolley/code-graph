import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, IconButton } from '@mui/material';

// Icons
import { ArrowDown2, ProfileCircle } from 'iconsax-react';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';
import menuSvg from '@/assets/icons/menu.svg';

function Header() {
   const t = useTranslations('header');
   const { locale, push, query, pathname, asPath } = useRouter();

   const changeLanguage = () => {
      push({ pathname, query }, asPath, { locale: locale === 'en' ? 'fa' : 'en' });
   };

   return (
      <header className="mx-auto max-w-[1440px] p-5 customMd:px-[60px] customMd:py-10">
         <div className="hidden items-center justify-between customMd:flex">
            <div className="flex items-center gap-4 customLg:gap-9">
               <Link href="/">
                  <Image src={headerLogo} alt="header logo" />
               </Link>
               <div className="flex items-center gap-3 customLg:gap-6">
                  <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                     <p className="text-xs customLg:text-sm">{t('Services')}</p>
                     <ArrowDown2 size="15" />
                  </div>
                  <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                     <p className="text-xs customLg:text-sm">{t('Projects')}</p>
                     <ArrowDown2 size="15" />
                  </div>
                  <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                     <p className="text-xs customLg:text-sm">{t('Blogs')}</p>
                     <ArrowDown2 size="15" />
                  </div>
                  <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                     <p className="text-xs customLg:text-sm">{t('Prices')}</p>
                  </div>
                  <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]">
                     <p className="text-xs customLg:text-sm">{t('About us')}</p>
                     <ArrowDown2 size="15" />
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
         </div>

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

               <IconButton>
                  <Image src={menuSvg} alt="menu" />
               </IconButton>
            </div>
         </div>
      </header>
   );
}

export default Header;
