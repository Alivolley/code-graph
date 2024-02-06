import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, IconButton } from '@mui/material';

// Icons
import { ArrowDown2 } from 'iconsax-react';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';

function Header() {
   const { locale, push, query, pathname, asPath } = useRouter();

   const changeLanguage = () => {
      push({ pathname, query }, asPath, { locale: locale === 'en' ? 'fa' : 'en' });
   };

   return (
      <header className="mx-auto flex max-w-[1320px] items-center justify-between py-10">
         <div className="flex items-center gap-4">
            <div>
               <Image src={headerLogo} alt="header logo" />
            </div>
            <div className="flex items-center gap-6">
               <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D]">
                  <p className="text-sm">سرویس ها</p>
                  <ArrowDown2 size="15" />
               </div>
               <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D]">
                  <p className="text-sm">پروژه ها</p>
                  <ArrowDown2 size="15" />
               </div>
               <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D]">
                  <p className="text-sm">بلاگ ها</p>
                  <ArrowDown2 size="15" />
               </div>
               <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D]">
                  <p className="text-sm">قیمت ها</p>
               </div>
               <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D]">
                  <p className="text-sm">درباره ی ما</p>
                  <ArrowDown2 size="15" />
               </div>
               <div className="flex cursor-pointer items-center gap-2 text-[#3A3E4D]">
                  <p className="text-sm">تماس با ما</p>
               </div>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <IconButton
               sx={{ fontSize: 14, border: '1px solid #FD8266', color: '#FD8266', width: 45, height: 45 }}
               onClick={changeLanguage}
            >
               {locale.toLocaleUpperCase()}
            </IconButton>
            <Link href="/">
               <Button
                  color="customPink"
                  variant="contained"
                  sx={{ height: 45, width: 162, borderRadius: 57, fontSize: 16 }}
               >
                  ورود / ثبت نام
               </Button>
            </Link>
         </div>
      </header>
   );
}

export default Header;
