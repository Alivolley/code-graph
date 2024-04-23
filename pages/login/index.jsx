import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

// MUI
import { LoadingButton } from '@mui/lab';

// Icons
import { Google } from 'iconsax-react';

// Assets
import loginPic from '@/assets/images/loginPic.png';
import loginPicMobile from '@/assets/images/loginPicMobile.png';
import logo from '@/assets/images/headerLogo.png';

// Components
import LoginTemplate from '@/components/pages/login/login-template/login-template';
import SignUpTemplate from '@/components/pages/login/signUp-template/signUp-template';
import ForgotPasswordTemplate from '@/components/pages/login/forgot-password-template/forgot-password-template';

function Login() {
   const [chosenMethod, setChosenMethod] = useState('login');
   const t = useTranslations('login');

   return (
      <div className="mx-auto flex max-w-[1440px] flex-col-reverse gap-4 px-5 py-[30px] customMd:max-h-screen customMd:flex-row customMd:p-[60px] customLg:gap-20">
         <div className="grow" data-aos="fade-left">
            <Link href="/" className="my-3 hidden items-end gap-2 customMd:flex">
               <div className="h-[35px] w-[75px]">
                  <Image src={logo} alt="logo" className="size-full" />
               </div>
               <p className="text-[32px] font-extrabold">
                  <span className="text-[#fd8266]">{t('Road')}</span>
                  <span className="text-[#65a5fc]">{t('Graph')}</span>
               </p>
            </Link>
            {chosenMethod === 'login' ? (
               <LoginTemplate setChosenMethod={setChosenMethod} translator={t} />
            ) : chosenMethod === 'signUp' ? (
               <SignUpTemplate setChosenMethod={setChosenMethod} translator={t} />
            ) : chosenMethod === 'password' ? (
               <ForgotPasswordTemplate setChosenMethod={setChosenMethod} translator={t} />
            ) : null}

            <div className="mt-4 customMd:my-[25px] customMd:pb-16">
               <div className="mb-4 flex items-center justify-center gap-2">
                  <div className="h-px grow bg-[#31313134]" />
                  <p className="text-10 text-[#31313180]">{t('Or login with')}</p>
                  <div className="h-px grow bg-[#31313134]" />
               </div>

               <LoadingButton
                  fullWidth
                  sx={{
                     height: 45,
                     borderRadius: 47,
                     color: '#1976D2',
                     border: '1px solid #3868eb7a',
                     ':hover': {
                        backgroundColor: '#ced2de81',
                     },
                  }}
               >
                  <Google size="21" variant="Bold" />
               </LoadingButton>
            </div>
         </div>
         <div
            className="shrink-0 overflow-hidden rounded-[25px] border border-solid border-[#E4EAF0] bg-[#f5f8fc] customMd:w-[500px] customLg:w-[740px]"
            data-aos="fade-right"
         >
            <Link href="/" className="my-3 flex flex-col items-center gap-2 customMd:hidden">
               <div className="h-[23px] w-[49px]">
                  <Image src={logo} alt="logo" className="size-full" />
               </div>
               <p className="text-[23px] font-extrabold">
                  <span className="text-[#fd8266]">{t('Road')}</span>
                  <span className="text-[#65a5fc]">{t('Graph')}</span>
               </p>
            </Link>
            <div className="hidden size-full customMd:block">
               <Image src={loginPic} alt="login" className="size-full object-cover" />
            </div>
            <div className="mx-auto h-[132px] w-[167px] customMd:hidden">
               <Image src={loginPicMobile} alt="login" className="size-full" />
            </div>
         </div>
      </div>
   );
}

export default Login;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
