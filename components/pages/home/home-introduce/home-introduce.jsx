import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft, DocumentText } from 'iconsax-react';

// Assets
import introducePic from '@/assets/images/introducePic.png';

// Styles
import HomeIntroduceStyle from './home-introduce.style';

function HomeIntroduce() {
   const { locale } = useRouter();
   const t = useTranslations('home');

   return (
      <HomeIntroduceStyle>
         <div className="mx-auto max-w-[1440px] px-5 pb-10 customMd:px-[60px] customMd:pb-[65px] customMd:pt-[53px]">
            <div className="mt-3 flex flex-col-reverse gap-10 lg:flex-row lg:gap-[76px]" dir="rtl">
               <div className="lg:mt-[100px] lg:w-[637px] lg:px-[26px]" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                  <div className="font-bold leading-[46px] lg:leading-[66px]">
                     <h3 className="relative ps-5 text-[24px] lg:ps-0 lg:text-[34px]">
                        {t('Why')}{' '}
                        <span className="font-almaraiExtraBold text-[28px] text-[#65A5FC] lg:text-[48px]">
                           {t('RoadGraph')}
                        </span>{' '}
                        {t('is the first choice of online businesses')}
                        <p className="absolute inset-y-2 start-0 w-2 bg-[#FD8266] lg:start-[-30px]" />
                     </h3>
                  </div>
                  <p className="mt-6 text-base leading-[30px] text-[#626E94] lg:leading-[34px]">{t('lorem3')}</p>
                  <div className="mt-7 flex flex-col gap-5 lg:mt-[52px] lg:flex-row lg:items-center lg:gap-[10px]">
                     <Link href="/">
                        <Button
                           color="customPink"
                           variant="contained"
                           className="!w-full lg:!w-[202px]"
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

                     <Link href="/">
                        <Button
                           variant="contained"
                           className="!w-full lg:!w-[176px]"
                           sx={{
                              height: 50,
                              borderRadius: 57,
                              fontSize: 14,
                              backgroundColor: '#F1F3FB',
                              color: '#3A3E4D',
                              border: '1px solid #797C80',
                              ':hover': {
                                 color: '#626E94',
                                 backgroundColor: '#DDE4FB',
                              },
                           }}
                           startIcon={<DocumentText size="20" />}
                        >
                           {t('About us')}
                        </Button>
                     </Link>
                  </div>
               </div>

               <div className="h-full grow">
                  <Image src={introducePic} alt="banner" className="size-full" />
               </div>
            </div>
         </div>
      </HomeIntroduceStyle>
   );
}

export default HomeIntroduce;
