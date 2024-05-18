import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';

// Icons
import { ArrowDown2, DiscountShape, ShoppingCart, Truck, User } from 'iconsax-react';

// Assets
import bannerPic from '@/assets/images/faqPagePic.png';
import wheelFirst from '@/assets/icons/wheel1.svg';
import wheelSecond from '@/assets/icons/wheel2.svg';

// Components
import Request from '@/components/templates/request/request';
import axiosInstance from '@/configs/axiosInstance';

const categoryButtonStyle = {
   display: 'flex',
   flexDirection: 'column',
   gap: '8px',
   transition: 'all 0.1s !important',
   '*': { transition: 'all 0.1s !important' },
   p: { color: '#050F2C' },
   '#icon': { color: '#d14d72' },
   ':hover': {
      p: { color: '#65A5FC' },
      '#icon': { color: '#65A5FC' },
   },
};

function Faqs({ questions }) {
   const [chosenCategory, setChosenCategory] = useState('');

   const t = useTranslations('faqs');
   const { locale, push, query } = useRouter();

   useEffect(() => {
      if (query?.category) {
         setChosenCategory(query?.category);
      } else {
         setChosenCategory('');
      }
   }, [query]);

   const changeCategoryHandler = cat => {
      if (cat !== chosenCategory) {
         setChosenCategory(cat);
         if (cat === '') {
            push(`/faqs`, undefined, { scroll: false });
         } else if (cat) {
            push(`/faqs?category=${cat}`, undefined, { scroll: false });
         }
      }
   };

   return (
      <div>
         <Head>
            <title>{locale === 'fa' ? 'رودگراف - سوالات پرتکرار' : 'RoadGraph-faqs'}</title>
         </Head>

         <div className="relative bg-[#F8F9FE]">
            <div className="absolute left-0 top-[180px] z-0 hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>
            <div className="absolute bottom-0 right-0 z-0 hidden xl:block">
               <Image src={wheelSecond} alt="wheel" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-5 pb-[67px] pt-[100px] customMd:px-[60px] customMd:pb-0 customMd:pt-[146px]">
               <div className="flex flex-col gap-[31px] lg:flex-row lg:gap-[51px]" dir="rtl">
                  <div className="flex-1" data-aos="zoom-in" data-aos-duration="650">
                     <Image src={bannerPic} alt="banner" className="size-full" />
                  </div>
                  <div className="flex-1 lg:mt-[45px]" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                     <div className="relative ps-[30px]">
                        <p
                           className="text-xs text-[#626E94] customMd:text-sm"
                           data-aos="fade-right"
                           data-aos-duration="650"
                        >
                           {t('text 1')}
                        </p>
                        <p
                           className="flex flex-wrap items-center gap-1 text-2xl leading-[46px] customMd:mt-4 customMd:text-[40px] customMd:leading-[75px]"
                           data-aos="fade-right"
                           data-aos-duration="650"
                        >
                           <span
                              className="whitespace-nowrap font-almaraiExtraBold800 text-[#65A5FC]"
                              style={{ WebkitTextStroke: '1px' }}
                           >
                              {t('Answer to')}
                           </span>
                           <span className="font-almaraiBold700 text-customPink" style={{ WebkitTextStroke: '1px' }}>
                              {t('Your asked questions')}
                           </span>
                        </p>

                        <p
                           className="absolute -top-1 bottom-2 start-0 w-2 bg-[#65A5FC]"
                           data-aos="fade-left"
                           data-aos-duration="650"
                           data-aos-delay="150"
                        />
                     </div>
                     <p
                        className="mt-6 text-center text-sm leading-[27px] text-[#576071] lg:text-start lg:text-base lg:leading-[40px]"
                        data-aos="fade-right"
                        data-aos-duration="650"
                        data-aos-delay="300"
                     >
                        {t('text 2')}
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className="mx-auto max-w-[1440px] px-5 pb-[70px] pt-10 customMd:px-[60px]">
            <p
               className="flex h-12 items-center rounded-sm bg-customPink px-8 font-almaraiBold700 text-base text-white customMd:h-16 customMd:text-[20px]"
               data-aos="fade-up"
               data-aos-duration="650"
               data-aos-offset="300"
            >
               {t('Category of Faqs')}
            </p>
            <div
               className="mt-6 flex flex-wrap items-center border-b border-solid border-[#E4EAF0]"
               data-aos="fade-up"
               data-aos-duration="650"
               data-aos-offset="300"
            >
               <Button
                  sx={{
                     ...categoryButtonStyle,
                     ...(chosenCategory === '' && {
                        backgroundColor: 'white',
                        boxShadow: '0px 11px 44px 23px #7E8AAB29',
                     }),
                  }}
                  className={`!h-[85px] !w-1/2 customSm:!h-[113px] customSm:!flex-1 ${
                     chosenCategory === ''
                        ? '!rounded-lg !border !border-solid !border-[#EF6D33]'
                        : '!border-e !border-solid !border-[#E4EAF0]'
                  }`}
                  onClick={() => changeCategoryHandler('')}
               >
                  <Truck size="28" id="icon" variant="TwoTone" />
                  <p className="leading-[18px]">{t('All')}</p>
               </Button>
               <Button
                  sx={{
                     ...categoryButtonStyle,
                     ...(chosenCategory === 'website' && {
                        backgroundColor: 'white',
                        boxShadow: '0px 11px 44px 23px #7E8AAB29',
                     }),
                  }}
                  className={`!h-[85px] !w-1/2 customSm:!h-[113px] customSm:!flex-1 ${
                     chosenCategory === 'website'
                        ? '!rounded-lg !border !border-solid !border-[#EF6D33]'
                        : '!border-e !border-solid !border-[#E4EAF0]'
                  }`}
                  onClick={() => changeCategoryHandler('website')}
               >
                  <User size="28" id="icon" variant="TwoTone" />
                  <p className="leading-[18px]">{t('Website')}</p>
               </Button>
               <Button
                  sx={{
                     ...categoryButtonStyle,
                     ...(chosenCategory === 'uiux' && {
                        backgroundColor: 'white',
                        boxShadow: '0px 11px 44px 23px #7E8AAB29',
                     }),
                  }}
                  className={`!h-[85px] !w-1/2 customSm:!h-[113px] customSm:!flex-1 ${
                     chosenCategory === 'uiux'
                        ? '!rounded-lg !border !border-solid !border-[#EF6D33]'
                        : '!border-e !border-solid !border-[#E4EAF0]'
                  }`}
                  onClick={() => changeCategoryHandler('uiux')}
               >
                  <ShoppingCart size="28" id="icon" variant="TwoTone" />
                  <p className="leading-[18px]">{t('UiUx')}</p>
               </Button>
               <Button
                  sx={{
                     ...categoryButtonStyle,
                     ...(chosenCategory === 'graphic' && {
                        backgroundColor: 'white',
                        boxShadow: '0px 11px 44px 23px #7E8AAB29',
                     }),
                  }}
                  className={`!h-[85px] !w-1/2 customSm:!h-[113px] customSm:!flex-1 ${
                     chosenCategory === 'graphic' ? '!rounded-lg !border !border-solid !border-[#EF6D33]' : ''
                  }`}
                  onClick={() => changeCategoryHandler('graphic')}
               >
                  <DiscountShape size="28" id="icon" variant="TwoTone" />
                  <p className="leading-[18px]">{t('Graphic')}</p>
               </Button>
            </div>
         </div>

         <div
            className="mx-auto max-w-[1440px] px-5 pb-[70px] customMd:px-[60px] customMd:pb-[83px]"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="650"
         >
            {questions?.length ? (
               questions?.map(item => (
                  <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} key={item?.id}>
                     <AccordionSummary
                        expandIcon={
                           <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-[#F5F8FC] p-1 customMd:p-3" />
                        }
                     >
                        <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                           {item?.question}
                           <span className="absolute start-[-21px] top-[15px] size-3 rounded-full bg-customPink" />
                        </p>
                     </AccordionSummary>
                     <AccordionDetails>{item?.answer}</AccordionDetails>
                  </Accordion>
               ))
            ) : (
               <p className="mx-auto py-20 text-center text-base customMd:text-2xl">{t('No question yet !!!')}</p>
            )}
         </div>

         <Request />
      </div>
   );
}

export default Faqs;

export async function getServerSideProps(context) {
   const { query } = context;

   let queryString = `accounts/questions/?lang=${context.locale}`;

   if (query?.category) {
      queryString += `&category=${query.category}`;
   }

   const questions = await axiosInstance(queryString).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         questions,
      },
   };
}
