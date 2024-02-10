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
import pic1 from '@/assets/icons/accounting.svg';
import pic2 from '@/assets/icons/CRM.svg';
import pic3 from '@/assets/icons/HR.svg';
import pic4 from '@/assets/icons/store.svg';

function HomeBanner() {
   const { locale } = useRouter();
   const t = useTranslations('home');

   return (
      <div style={{ background: 'linear-gradient(80.33deg, #E6EBFA 7.96%, #F2F5FC 43.29%, #FFFFFF 98.56%)' }}>
         <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-[91px] customMd:px-[60px] customMd:pt-[100px]">
            <div className="flex flex-col lg:flex-row" dir="rtl">
               <div className="grow">
                  <Image src={bannerPic} alt="banner" className="size-full" />
               </div>
               <div className="lg:mt-[70px] lg:w-[450px]" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                  <div className="text-center font-bold leading-[44px] lg:text-start lg:leading-[73px]">
                     <div className="flex items-center justify-center gap-3 lg:justify-start">
                        <h1 className="text-[28px] lg:text-[37px]">{t('Letter1')}</h1>
                        <h1 className="text-[28px] text-[#FD8266] lg:text-5xl">{t('Letter2')}</h1>
                        <h1 className="text-[28px] lg:text-[37px]">{t('Letter3')}</h1>
                        <h1 className="text-[28px] text-[#FD8266] lg:text-[37px]">{t('comma')}</h1>
                     </div>
                     <h1 className="text-[28px] lg:text-[37px]">{t("powered by our life's work")}</h1>
                  </div>
                  <p className="mt-6 text-center text-base leading-[26px] text-[#576071] lg:text-start lg:leading-[34px]">
                     {t('lorem')}
                  </p>
                  <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-[10px]">
                     <Link href="/">
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
                           {t('Get started')}
                        </Button>
                     </Link>

                     <Link href="/">
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

            <div className="mt-3 flex flex-nowrap items-center justify-between overflow-auto rounded-3xl border border-solid border-[#AAAEB280] px-[18px] py-7">
               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic4} alt="introduce" />
                  <h3 className="text-lg font-bold">Online shop</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic3} alt="introduce" />
                  <h3 className="text-lg font-bold">HRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic2} alt="introduce" />
                  <h3 className="text-lg font-bold">CRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic1} alt="introduce" />
                  <h3 className="text-lg font-bold">Accounting</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HomeBanner;
