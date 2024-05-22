import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft, DocumentText } from 'iconsax-react';

// Assets
import bannerPic from '@/assets/images/bannerPic.png';
import noImage from '@/assets/images/noImage.jpg';

function HomeBanner({ categories }) {
   const { locale } = useRouter();
   const t = useTranslations('home');

   return (
      <div style={{ background: 'linear-gradient(80.33deg, #E6EBFA 7.96%, #F2F5FC 43.29%, #FFFFFF 98.56%)' }}>
         <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-[91px] customMd:px-[60px] customMd:pt-[100px]">
            <div className="flex flex-col lg:flex-row" dir="rtl">
               <div className="grow" data-aos="zoom-in" data-aos-duration="650">
                  <Image src={bannerPic} alt="banner" className="size-full" />
               </div>
               <div className="lg:mt-[70px] lg:w-[450px]" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                  <div
                     className="text-center font-almaraiBold700 leading-[44px] lg:text-start lg:leading-[73px]"
                     data-aos="fade-right"
                     data-aos-duration="650"
                  >
                     <h1 className="font-almaraiExtraBold800 text-[28px] text-customPink lg:text-5xl">
                        {t('home banner title line 1')}
                     </h1>
                     <h1 className="text-[28px] lg:mt-4 lg:text-[37px] lg:leading-[48px]">
                        {t('home banner title line 2')}
                     </h1>
                  </div>
                  <p
                     className="mt-6 text-center text-base leading-[26px] text-[#576071] lg:text-start lg:leading-[34px]"
                     data-aos="fade-right"
                     data-aos-delay="150"
                     data-aos-duration="650"
                  >
                     {t('home banner 1')}
                  </p>
                  <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-[10px]">
                     <Link href="/contactUs" data-aos="zoom-in" data-aos-delay="350">
                        <Button
                           color="customPink"
                           variant="contained"
                           className="!w-full lg:!w-[174px]"
                           sx={{
                              height: 52,
                              borderRadius: 57,
                              fontSize: 16,
                              ':hover': {
                                 backgroundColor: '#B46451',
                              },
                           }}
                           endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                        >
                           {t('Order project')}
                        </Button>
                     </Link>

                     <Link href="/aboutUs" data-aos="zoom-in" data-aos-delay="550">
                        <Button
                           variant="contained"
                           className="!w-full lg:!w-[153px]"
                           sx={{
                              height: 52,
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
            </div>

            <div
               className="mt-3 flex flex-nowrap justify-between overflow-auto rounded-3xl
                border border-solid border-[#AAAEB280] px-[18px] py-7 xl:overflow-visible"
               data-aos="zoom-in"
               data-aos-duration="650"
            >
               {categories?.map((item, index) => (
                  <Link
                     href={`/services/${item?.title}`}
                     className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-2 xl:px-[18px]"
                     key={item?.id}
                     data-aos="fade-right"
                     data-aos-duration="650"
                     data-aos-delay={(index + 1) * 200}
                  >
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src={item?.cover || noImage} alt={item?.title} className="h-16" />
                     <h3 className="text-center font-almaraiBold700 text-lg">{item?.title}</h3>
                     <p className="text-center text-xs text-[#6F778A]">{item?.description}</p>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}

export default HomeBanner;
