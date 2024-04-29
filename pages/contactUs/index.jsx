import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// MUI
import { Grid } from '@mui/material';

// Icons
import { PiInstagramLogo } from 'react-icons/pi';
import { FiPhoneCall } from 'react-icons/fi';
import { LiaTelegram } from 'react-icons/lia';

// Assets
import contactUsPic from '@/assets/images/contactUsPic.png';
import pic1 from '@/assets/icons/accounting.svg';
import pic2 from '@/assets/icons/CRM.svg';
import pic3 from '@/assets/icons/HR.svg';
import pic4 from '@/assets/icons/store.svg';
import wheelFirst from '@/assets/icons/wheel1.svg';
import wheelSecond from '@/assets/icons/wheel2.svg';

// Components
import Request from '@/components/templates/request/request';

function ContactUs() {
   const t = useTranslations('contact us');
   const { locale } = useRouter();

   return (
      <div>
         <div className="relative bg-[#F5F8FC] pt-[91px] customMd:pt-[158px]" dir="rtl">
            <div className="absolute left-0 top-[315px] z-0 hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>
            <div className="absolute bottom-0 right-0 z-0 hidden xl:block">
               <Image src={wheelSecond} alt="wheel" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-5 pb-10 customMd:px-[60px] customMd:pb-0">
               <Grid container>
                  <Grid item xs={12} md={6}>
                     <div className="mx-auto max-w-[556px] customMd:mx-0 customMd:mt-16" data-aos="fade-left">
                        <Image src={contactUsPic} alt="uiux" className="size-full" />
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <div className="mt-10 customMd:mt-10" dir={locale === 'en' ? 'ltr' : 'rtl'} data-aos="fade-right">
                        <div className="relative ps-[30px] font-almaraiExtraBold text-2xl leading-[46px] text-[#EF6D33] customMd:text-[40px] customMd:leading-[75px]">
                           <p className="text-[#65A5FC]">{t('Contact to')}</p>
                           <p>{t('RoadGraph')}</p>
                           <p className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]" />
                        </div>
                        <p className="mt-[18px] text-sm leading-[32px] text-[#576071] customMd:text-base customMd:leading-[45px]">
                           {t('contact us text 1')}
                        </p>
                        <div className="mt-[33px] space-y-[17px] customMd:space-y-[30px]">
                           <a href="tel:09383935719" className="flex w-fit items-center gap-5">
                              <div className="flex size-[50px] items-center justify-center rounded-full bg-white customMd:size-[68px]">
                                 <FiPhoneCall color="#65A5FC" className="text-[25px] customMd:text-[34px]" />
                              </div>
                              <div className="space-y-[10px]">
                                 <p className="font-almaraiBold text-[#626E94]">{t('Have a question ?')}</p>
                                 <p className="text-sm text-[#8F95AA]">09383935719</p>
                              </div>
                           </a>
                           <a
                              href="https://t.me/Roadgraph"
                              target="_blank"
                              rel="noreferrer"
                              className="flex w-fit items-center gap-5"
                           >
                              <div className="flex size-[50px] items-center justify-center rounded-full bg-white customMd:size-[68px]">
                                 <LiaTelegram color="#65A5FC" className="text-[25px] customMd:text-[34px]" />
                              </div>
                              <div className="space-y-[10px]">
                                 <p className="font-almaraiBold text-[#626E94]">{t('Join')}</p>
                                 <p className="text-sm text-[#8F95AA]">Telegram chanel</p>
                              </div>
                           </a>
                           <a
                              href="https://t.me/Roadgraph"
                              target="_blank"
                              rel="noreferrer"
                              className="flex w-fit items-center gap-5"
                           >
                              <div className="flex size-[50px] items-center justify-center rounded-full bg-white customMd:size-[68px]">
                                 <PiInstagramLogo color="#65A5FC" className="text-[25px] customMd:text-[34px]" />
                              </div>
                              <div className="space-y-[10px]">
                                 <p className="font-almaraiBold text-[#626E94]">{t('Follow us')}</p>
                                 <p className="text-sm text-[#8F95AA]">Instagram page</p>
                              </div>
                           </a>
                        </div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>

         <div
            className="mx-auto max-w-[1440px] px-5 py-[27px] customMd:px-[60px] customMd:py-[74px]"
            data-aos="fade-up"
         >
            <div
               className="mt-3 flex flex-nowrap items-center justify-between overflow-auto rounded-3xl border border-solid border-[#AAAEB280] px-[18px] py-7"
               style={{
                  background:
                     'linear-gradient(180deg, rgba(250, 254, 255, 0.3) 12%, rgba(213, 213, 213, 0.18) 66%, rgba(156, 156, 156, 0) 100%)',
               }}
            >
               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic4} alt="introduce" />
                  <h3 className="font-almaraiBold text-lg">Online shop</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic3} alt="introduce" />
                  <h3 className="font-almaraiBold text-lg">HRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic2} alt="introduce" />
                  <h3 className="font-almaraiBold text-lg">CRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic1} alt="introduce" />
                  <h3 className="font-almaraiBold text-lg">Accounting</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>
            </div>
         </div>

         <Request />
      </div>
   );
}

export default ContactUs;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
      revalidate: 300,
   };
}
