import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// MUI
import { Grid } from '@mui/material';

// Icons
import { PiInstagramLogo } from 'react-icons/pi';
import { FiPhoneCall } from 'react-icons/fi';
import { LiaTelegram } from 'react-icons/lia';
import { FaLinkedin } from 'react-icons/fa6';

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
         <Head>
            <title>{locale === 'fa' ? 'رودگراف - تماس با ما' : 'RoadGraph-contact us'}</title>
         </Head>
         <div className="relative bg-[#F5F8FC] pt-[91px] customMd:pt-[120px]" dir="rtl">
            <div className="absolute left-0 top-[315px] z-0 hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>
            <div className="absolute bottom-0 right-0 z-0 hidden xl:block">
               <Image src={wheelSecond} alt="wheel" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-5 pb-10 customMd:px-[60px] customMd:pb-0">
               <Grid container>
                  <Grid item xs={12} md={6}>
                     <div
                        className="mx-auto max-w-[556px] customMd:mx-0 customMd:mt-16"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                     >
                        <Image src={contactUsPic} alt="uiux" className="size-full" />
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <div className="mt-10 customMd:mt-10" dir={locale === 'en' ? 'ltr' : 'rtl'} data-aos="fade-right">
                        <div className="relative ps-[30px]">
                           <p
                              className="text-xs text-[#626E94] customMd:text-sm"
                              data-aos="fade-right"
                              data-aos-duration="650"
                           >
                              {t('contact us title 1')}
                           </p>

                           <div
                              className="mt-1 flex items-center gap-3 text-2xl leading-[46px] customMd:text-[40px] customMd:leading-[75px]"
                              data-aos="fade-right"
                              data-aos-duration="650"
                           >
                              <p
                                 className="whitespace-nowrap font-almaraiExtraBold800 text-[#65A5FC]"
                                 style={{ WebkitTextStroke: '1px' }}
                              >
                                 {t('Contact to')}
                              </p>
                              <p
                                 className="whitespace-nowrap font-almaraiBold700 text-[#EF6D33]"
                                 style={{ WebkitTextStroke: '1px' }}
                              >
                                 {t('RoadGraph')}
                              </p>
                           </div>
                           <p
                              className="absolute -top-2 bottom-1 start-0 w-2 bg-[#65A5FC]"
                              data-aos="fade-left"
                              data-aos-delay="150"
                              data-aos-duration="650"
                           />
                        </div>
                        <p
                           className="mt-[18px] text-sm leading-[32px] text-[#576071] customMd:text-base customMd:leading-[33px]"
                           data-aos="fade-right"
                           data-aos-delay="350"
                           data-aos-duration="650"
                        >
                           {t('contact us text 1')}
                        </p>
                        <div className="mt-[25px] space-y-[17px] customMd:space-y-[20px]">
                           <a href="tel:09383935719" className="flex w-fit items-center gap-5">
                              <div
                                 className="flex size-[50px] items-center justify-center rounded-full bg-white customMd:size-[68px]"
                                 data-aos="fade-left"
                                 data-aos-delay="500"
                                 data-aos-duration="650"
                              >
                                 <FiPhoneCall color="#65A5FC" className="text-[25px] customMd:text-[34px]" />
                              </div>
                              <div
                                 className="space-y-[10px]"
                                 data-aos="fade-right"
                                 data-aos-delay="500"
                                 data-aos-duration="650"
                              >
                                 <p className="font-almaraiBold700 text-[#626E94]">{t('Have a question ?')}</p>
                                 <p className="text-sm text-[#8F95AA]">09383935719</p>
                              </div>
                           </a>
                           <a
                              href="https://t.me/Roadgraph"
                              target="_blank"
                              rel="noreferrer"
                              className="flex w-fit items-center gap-5"
                           >
                              <div
                                 className="flex size-[50px] items-center justify-center rounded-full bg-white customMd:size-[68px]"
                                 data-aos="fade-left"
                                 data-aos-delay="650"
                                 data-aos-duration="650"
                              >
                                 <LiaTelegram color="#65A5FC" className="text-[25px] customMd:text-[34px]" />
                              </div>
                              <div
                                 className="space-y-[10px]"
                                 data-aos="fade-right"
                                 data-aos-delay="650"
                                 data-aos-duration="650"
                              >
                                 <p className="font-almaraiBold700 text-[#626E94]">{t('Join')}</p>
                                 <p className="text-sm text-[#8F95AA]">Telegram chanel</p>
                              </div>
                           </a>
                           <a
                              href="https://www.instagram.com/roadgraph_studio?igsh=ZGUzMzM3NWJiOQ=="
                              target="_blank"
                              rel="noreferrer"
                              className="flex w-fit items-center gap-5"
                           >
                              <div
                                 className="flex size-[50px] items-center justify-center rounded-full bg-white customMd:size-[68px]"
                                 data-aos="fade-left"
                                 data-aos-delay="800"
                                 data-aos-duration="650"
                              >
                                 <PiInstagramLogo color="#65A5FC" className="text-[25px] customMd:text-[34px]" />
                              </div>
                              <div
                                 className="space-y-[10px]"
                                 data-aos="fade-right"
                                 data-aos-delay="800"
                                 data-aos-duration="650"
                              >
                                 <p className="font-almaraiBold700 text-[#626E94]">{t('Follow us')}</p>
                                 <p className="text-sm text-[#8F95AA]">Instagram page</p>
                              </div>
                           </a>
                           <a
                              href="https://www.linkedin.com/in/roadgraph-studio-80526030a"
                              target="_blank"
                              rel="noreferrer"
                              className="flex w-fit items-center gap-5"
                           >
                              <div
                                 className="flex size-[50px] items-center justify-center rounded-full bg-white customMd:size-[68px]"
                                 data-aos="fade-left"
                                 data-aos-delay="950"
                                 data-aos-duration="650"
                                 data-aos-offset="0"
                              >
                                 <FaLinkedin color="#65A5FC" className="text-[25px] customMd:text-[34px]" />
                              </div>
                              <div
                                 className="space-y-[10px]"
                                 data-aos="fade-right"
                                 data-aos-delay="950"
                                 data-aos-duration="650"
                                 data-aos-offset="0"
                              >
                                 <p className="font-almaraiBold700 text-[#626E94]">{t('Join our network')}</p>
                                 <p className="text-sm text-[#8F95AA]">Linkedin page</p>
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
            data-aos="zoom-in"
            data-aos-duration="650"
         >
            <div
               className="mt-3 flex flex-nowrap items-center justify-between overflow-auto rounded-3xl border
                border-solid border-[#AAAEB280] px-[18px] py-7 xl:overflow-visible"
               style={{
                  background:
                     'linear-gradient(180deg, rgba(250, 254, 255, 0.3) 12%, rgba(213, 213, 213, 0.18) 66%, rgba(156, 156, 156, 0) 100%)',
               }}
            >
               <div
                  className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-2 xl:px-[18px]"
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay="200"
               >
                  <div className="size-16">
                     <Image src={pic4} alt="introduce" className="size-full" />
                  </div>
                  <h3 className="text-center font-almaraiBold700 text-lg">{t('box 1 title')}</h3>
                  <p className="text-center text-xs text-[#6F778A]">{t('box 1 text')}</p>
               </div>

               <div
                  className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-2 xl:px-[18px]"
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay="400"
               >
                  <div className="size-16">
                     <Image src={pic3} alt="introduce" className="size-full" />
                  </div>
                  <h3 className="text-center font-almaraiBold700 text-lg">{t('box 2 title')}</h3>
                  <p className="text-center text-xs text-[#6F778A]">{t('box 2 text')}</p>
               </div>

               <div
                  className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-2 xl:px-[18px]"
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay="600"
               >
                  <div className="size-16">
                     <Image src={pic3} alt="introduce" className="size-full" />
                  </div>
                  <h3 className="text-center font-almaraiBold700 text-lg">{t('box 3 title')}</h3>
                  <p className="text-center text-xs text-[#6F778A]">{t('box 3 text')}</p>
               </div>

               <div
                  className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-2 xl:px-[18px]"
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay="800"
               >
                  <div className="size-16">
                     <Image src={pic2} alt="introduce" className="size-full" />
                  </div>
                  <h3 className="text-center font-almaraiBold700 text-lg">{t('box 4 title')}</h3>
                  <p className="text-center text-xs text-[#6F778A]">{t('box 4 text')}</p>
               </div>

               <div
                  className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-2 xl:px-[18px]"
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay="1000"
               >
                  <div className="size-16">
                     <Image src={pic1} alt="introduce" className="size-full" />
                  </div>
                  <h3 className="text-center font-almaraiBold700 text-lg">{t('box 5 title')}</h3>
                  <p className="text-center text-xs text-[#6F778A]">{t('box 5 text')}</p>
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
