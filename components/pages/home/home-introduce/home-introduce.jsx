import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft, Driver } from 'iconsax-react';

// Assets
import introducePic from '@/assets/images/introducePic.png';

// Styles
import HomeIntroduceStyle from './home-introduce.style';

function HomeIntroduce() {
   const { locale } = useRouter();
   const t = useTranslations('home');

   return (
      <HomeIntroduceStyle data-aos="zoom-in" data-aos-duration="650">
         <div className="mx-auto max-w-[1440px] px-5 pb-10 customMd:px-[60px] customMd:pb-[65px] customMd:pt-[53px]">
            <div className="mt-3 flex flex-col-reverse gap-10 lg:flex-row lg:gap-0" dir="rtl">
               <div className="lg:mt-[130px] lg:w-[637px] lg:px-[26px]" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                  <div className="font-bold leading-[46px] lg:leading-[66px]">
                     <h3 className="relative ps-5 text-[24px] lg:ps-0 lg:text-[34px]">
                        <p data-aos="fade-left" data-aos-delay="350" data-aos-duration="650">
                           <span>{t('Why')} </span>
                           <span className="font-almaraiExtraBold text-[28px] text-[#65A5FC] lg:text-[48px]">
                              {t('RoadGraph')}
                           </span>
                           <span> {t('is the first choice of online businesses')}</span>
                        </p>
                        <p
                           className="absolute inset-y-2 start-0 w-2 bg-customPink lg:start-[-30px]"
                           data-aos="fade-left"
                           data-aos-duration="650"
                           data-aos-delay="150"
                        />
                     </h3>
                  </div>
                  <p
                     className="mt-6 text-base leading-[30px] text-[#626E94] lg:leading-[34px]"
                     data-aos="fade-left"
                     data-aos-delay="450"
                     data-aos-duration="650"
                  >
                     {t('why roadGraph explain')}
                  </p>
                  <div className="mt-7 flex flex-col gap-5 lg:mt-5 lg:flex-row lg:items-center lg:gap-[10px]">
                     <Link href="/contactUs" data-aos="zoom-in" data-aos-delay="750" data-aos-offset="-100">
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

                     <Link href="/aboutUs" data-aos="zoom-in" data-aos-delay="950" data-aos-offset="-100">
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
                           startIcon={<Driver size="20" />}
                        >
                           {t('Projects')}
                        </Button>
                     </Link>
                  </div>
               </div>

               <div className="h-full grow" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="850">
                  <Image src={introducePic} alt="banner" className="size-full" />
               </div>
            </div>
         </div>
      </HomeIntroduceStyle>
   );
}

export default HomeIntroduce;
