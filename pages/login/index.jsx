import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

// Assets
import loginPic from '@/assets/images/loginPic.png';
import loginPicMobile from '@/assets/images/loginPicMobile.png';
import logo from '@/assets/images/headerLogo.png';

// Components
import LoginTemplate from '@/components/pages/login/login-template/login-template';
import SignUpTemplate from '@/components/pages/login/signUp-template/signUp-template';
import ForgotPasswordTemplate from '@/components/pages/login/forgot-password-template/forgot-password-template';

function Login() {
   const [chosenMethod, setChosenMethod] = useState(
      // 'login'
      'signUp'
   );
   const t = useTranslations('login');

   return (
      <div className="mx-auto flex max-w-[1440px] flex-col-reverse gap-4 px-5 py-[30px] customMd:max-h-screen customMd:flex-row customMd:p-[60px] customLg:gap-20">
         <div className="grow">
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
         </div>
         <div className="shrink-0 overflow-hidden rounded-[25px] border border-solid border-[#E4EAF0] bg-[#f5f8fc] customMd:w-[500px] customLg:w-[740px]">
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
   try {
      return {
         props: {
            messages: (await import(`@/messages/${context.locale}.json`)).default,
         },
         revalidate: 3600,
      };
   } catch (error) {
      return {
         props: {
            messages: (await import(`@/messages/${context.locale}.json`)).default,
            error: error?.message,
         },
      };
   }
}
