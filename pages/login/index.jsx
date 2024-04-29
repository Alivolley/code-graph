import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// MUI
import { Backdrop } from '@mui/material';

// Assets
import loginPic from '@/assets/images/loginPic.png';
import loginPicMobile from '@/assets/images/loginPicMobile.png';
import logo from '@/assets/images/headerLogo.png';

// Components
import LoginTemplate from '@/components/pages/login/login-template/login-template';
import SignUpTemplate from '@/components/pages/login/signUp-template/signUp-template';
import ForgotPasswordTemplate from '@/components/pages/login/forgot-password-template/forgot-password-template';
import LoadingComponent from '@/components/templates/loading-component/loading-component';

// Apis
import useLoginGoogle from '@/apis/auth/useLoginGoogle';

function Login() {
   const [chosenMethod, setChosenMethod] = useState('login');
   const t = useTranslations('login');
   const { back } = useRouter();

   const { trigger: loginTrigger, isMutating: loginIsMutating } = useLoginGoogle();

   useEffect(() => {
      // eslint-disable-next-line no-undef
      google.accounts.id.initialize({
         client_id: '113060534291-nq920eohccqijn0enuf0p20gjd0ao160.apps.googleusercontent.com',
         callback: res => {
            const newData = {
               token: res?.credential,
            };
            loginTrigger(newData, {
               onSuccess: () => {
                  back();
               },
            });
         },
      });
      // eslint-disable-next-line no-undef
      google.accounts.id.renderButton(document.querySelector('#googleBtn'), {
         theme: 'outline',
         size: 'large',
      });
   }, []);

   return (
      <div className="mx-auto flex max-w-[1440px] flex-col-reverse gap-4 px-5 py-[30px] customMd:max-h-screen customMd:flex-row customMd:p-[60px] customLg:gap-20">
         <div className="grow">
            <Link href="/" className="my-3 hidden w-fit items-end gap-2 customMd:flex">
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

               <div className="flex items-center justify-center">
                  <div id="googleBtn" />
               </div>
            </div>
         </div>
         <div
            className="shrink-0 overflow-hidden rounded-[25px] border border-solid border-[#E4EAF0] bg-[#f5f8fc] customMd:w-[500px] customLg:w-[740px]"
            data-aos="fade-right"
         >
            <Link href="/" className="mx-auto my-3 flex w-fit flex-col items-center gap-2 customMd:hidden">
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

         <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={loginIsMutating}>
            <LoadingComponent />
         </Backdrop>
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
