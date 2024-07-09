import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Backdrop, CircularProgress, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons
import { MdPerson } from 'react-icons/md';
import { LuMoreHorizontal } from 'react-icons/lu';
import { IoMdLock } from 'react-icons/io';

// Context
import { useGlobalContext } from '@/context/store';

// Assets
import noProfilePhoto from '@/assets/images/noProfile.png';
import dashboardFooterPic from '@/assets/images/dashboardFooter.png';

// Apis
import useChangeProfileImage from '@/apis/profile/useChangeProfileImage';

const VisuallyHiddenInput = styled('input')({
   clip: 'rect(0 0 0 0)',
   clipPath: 'inset(50%)',
   height: 1,
   overflow: 'hidden',
   position: 'absolute',
   bottom: 0,
   left: 0,
   whiteSpace: 'nowrap',
   width: 1,
});

const iconButtonSx = {
   backgroundColor: 'white',
   color: '#C3CAD9',
   boxShadow: '0px 2px 5px 0px #26334D08',
   ':hover': { color: '#65A5FC', backgroundColor: '#e6e6e6' },
};

function UserDashboardRightSide() {
   const { pathname } = useRouter();
   const t = useTranslations('userDashboard');

   const { trigger: changeProfileTrigger, isMutating: changeProfileIsMutating } = useChangeProfileImage();
   const { userInfo } = useGlobalContext();

   const changeProfileImageHandler = e => {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      changeProfileTrigger(formData);
   };

   return (
      <div className="max-customMd:mt-[25px]">
         <div className="flex items-center justify-between max-customMd:hidden">
            <Link href="/profile/information">
               <IconButton sx={{ padding: 0, color: '#C3CAD9', ':hover': { color: '#65A5FC' } }}>
                  <MdPerson />
               </IconButton>
            </Link>
            <p className="text-[24px] text-[#C3CAD9]">
               <LuMoreHorizontal />
            </p>
         </div>

         <div>
            <div
               className="relative mx-auto flex size-[160px] -rotate-45 items-center justify-center
             rounded-full border-2 border-solid border-[#65A5FC] border-r-[#F2F3F5] customMd:size-[130px]"
            >
               <div className="relative size-[136px]  rotate-45 rounded-full customMd:size-[110px]">
                  <Image
                     src={userInfo?.image || noProfilePhoto}
                     alt="profile"
                     fill
                     className="rounded-full object-cover"
                  />
               </div>

               <div className="absolute right-[-19px] translate-x-[-14px] translate-y-[42px] rotate-45">
                  <IconButton
                     sx={{
                        backgroundColor: '#fd8266',
                        width: 40,
                        height: 40,
                        ':hover': { backgroundColor: '#e6e6e6' },
                     }}
                     component="label"
                     role={undefined}
                     tabIndex={-1}
                  >
                     <p className="flex size-[19px] items-center justify-center rounded-full bg-white pb-1 text-[18px] font-bold text-customPink">
                        +
                     </p>
                     <VisuallyHiddenInput type="file" onChange={changeProfileImageHandler} accept="image/*" />
                  </IconButton>
               </div>
            </div>
         </div>

         <p className="mt-6 text-center font-almaraiBold700 text-xl leading-[37px] text-[#6B7A99] customMd:mt-5 customMd:text-base customMd:leading-[30px]">
            {userInfo?.name}
         </p>

         <div className="mt-[30px] flex items-center justify-between">
            <p className="font-almaraiBold700 text-sm text-[#6B7A99] customMd:text-xs">{t('Setting')}</p>
            <p className="text-[24px] text-[#C3CAD9]">
               <LuMoreHorizontal />
            </p>
         </div>

         <div className="mt-[25px] flex flex-col gap-3 customMd:mt-[30px] customMd:gap-5">
            <Link href="/profile/information" className="flex items-center gap-3 hover:[&>p]:text-[#65A5FC]">
               <IconButton
                  sx={{
                     ...iconButtonSx,
                     ...(pathname.startsWith('/profile/information') && {
                        color: '#FD8266',
                        border: '1px solid #FD8266',
                     }),
                  }}
                  className="size-[50px] customMd:size-10"
               >
                  <MdPerson />
               </IconButton>

               <p className="font-almaraiBold700 text-[15px] text-[#6B7A99] customMd:text-xs">
                  {t('Personal information')}
               </p>
            </Link>

            <Link href="/profile/security" className="relative flex items-center gap-3 hover:[&>p]:text-[#65A5FC]">
               <IconButton
                  sx={{
                     ...iconButtonSx,
                     ...(pathname.startsWith('/profile/security') && {
                        color: '#FD8266',
                        border: '1px solid #FD8266',
                     }),
                  }}
                  className="size-[50px] customMd:size-10"
               >
                  <IoMdLock />
               </IconButton>

               <p className="font-almaraiBold700 text-[15px] text-[#6B7A99] customMd:text-xs">
                  {t('Security & Codes')}
               </p>
            </Link>
         </div>

         <div className="mt-5 flex h-[200px] flex-col items-center justify-center gap-[17px] rounded-10 bg-[#FD82661A] text-center customMd:mt-12">
            <Image src={dashboardFooterPic} alt="icon" />
            <p className="font-almaraiBold700 text-[15px] leading-6 text-customPink">{t('Do you need help?')}</p>
            <Link href="/aboutUs" className="font-almaraiExtraBold800 text-xs text-[#65A5FC] hover:underline">
               {t('Contact with us')}
            </Link>
         </div>

         <Backdrop sx={{ zIndex: 2 }} open={changeProfileIsMutating}>
            <CircularProgress color="customPink" />
         </Backdrop>
      </div>
   );
}

export default UserDashboardRightSide;
