import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import valuePic from '@/assets/images/valuePic.png';

// Styles
import ValueDescriptionStyle from './value-description.style';

function ValueDescription() {
   const { locale } = useRouter();
   const t = useTranslations('home');

   return (
      <ValueDescriptionStyle>
         <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-[53px] customMd:px-[60px] customMd:pb-[65px]">
            <div className="mt-3 flex flex-col-reverse gap-10 lg:flex-row lg:gap-[76px]" dir="rtl">
               <div className="lg:mt-[100px] lg:w-[637px] lg:px-[26px]" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                  <div className="font-bold leading-[46px] lg:leading-[66px]">
                     <h3 className="relative ps-5 text-[24px] lg:ps-0 lg:text-[34px]">
                        {t('The')}{' '}
                        <span className="font-almaraiExtraBold text-[28px] text-[#65A5FC] lg:text-[48px]">
                           {t('Value')}
                        </span>{' '}
                        <p>{t('We create for a business')}</p>
                        <p className="absolute inset-y-2 start-0 w-2 bg-[#FD8266] lg:start-[-30px]" />
                     </h3>
                  </div>
                  <p className="mt-2 text-base font-bold leading-[30px] text-[#626E94] lg:text-[18px] lg:leading-[34px]">
                     {t('lorem4')}
                  </p>
                  <p className="mt-2 text-sm leading-[30px] text-[#626E94] lg:text-base lg:leading-[34px]">
                     {t('lorem')}
                  </p>
                  <div className="mt-10 flex flex-col gap-5 lg:mt-[27px] lg:flex-row lg:items-center lg:gap-[10px]">
                     <Link href="/">
                        <Button
                           color="customPink"
                           variant="contained"
                           className="!w-full lg:!w-[174px]"
                           sx={{
                              height: 50,
                              borderRadius: 57,
                              fontSize: 16,
                              ':hover': {
                                 backgroundColor: '#B46451',
                              },
                           }}
                           endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                        >
                           {t('Get started')}
                        </Button>
                     </Link>
                  </div>
               </div>

               <div className="h-full grow">
                  <Image src={valuePic} alt="banner" className="size-full" />
               </div>
            </div>
         </div>
      </ValueDescriptionStyle>
   );
}

export default ValueDescription;
