import { useState } from 'react';
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

const categoryButtonStyle = {
   display: 'flex',
   flexDirection: 'column',
   gap: '8px',
   ':hover': {
      backgroundColor: 'white',
      boxShadow: '0px 11px 44px 23px #7E8AAB29',
   },
};

function Faqs() {
   const [chosenCategory, setChosenCategory] = useState('');

   const t = useTranslations('faqs');
   const { locale } = useRouter();

   const changeCategoryHandler = cat => {
      if (cat !== chosenCategory) {
         setChosenCategory(cat);
      }
   };

   return (
      <div>
         <div className="relative bg-[#F8F9FE]">
            <div className="absolute left-0 top-[180px] z-[0] hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>
            <div className="absolute bottom-0 right-0 z-[0] hidden xl:block">
               <Image src={wheelSecond} alt="wheel" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-5 pb-[67px] pt-[100px] customMd:px-[60px] customMd:pb-0 customMd:pt-[146px]">
               <div className="flex flex-col gap-[31px] lg:flex-row lg:gap-[51px]" dir="rtl">
                  <div className="flex-1">
                     <Image src={bannerPic} alt="banner" className="size-full" />
                  </div>
                  <div className="flex-1 lg:mt-[45px]" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                     <div className="relative ps-[30px]">
                        <p className="text-xs text-[#626E94] customMd:text-sm">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                        </p>
                        <p className="flex flex-wrap items-center gap-1 font-almaraiExtraBold text-2xl leading-[46px] customMd:mt-4 customMd:text-[40px] customMd:leading-[75px]">
                           <span className="whitespace-nowrap text-[#65A5FC]">{t('Answer to')}</span>
                           <span className="text-[#FD8266]">{t('Your asked questions')}</span>
                        </p>

                        <p className="absolute -top-1 bottom-2 start-0 w-2 bg-[#65A5FC]" />
                     </div>
                     <p className="mt-6 text-center text-sm leading-[27px] text-[#576071] lg:text-start lg:text-base lg:leading-[40px]">
                        {t('lorem1')}
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className="mx-auto max-w-[1440px] px-5 pb-[70px] pt-10 customMd:px-[60px]">
            <p className="flex h-12 items-center rounded-[47px] bg-[#FD8266] px-8 font-almaraiBold text-base text-white customMd:h-16 customMd:text-[20px]">
               {t('Category of Faqs')}
            </p>
            <div className="mt-6 flex flex-wrap items-center border-b border-solid border-[#E4EAF0]">
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
                  <Truck size="28" color="#d14d72" variant="TwoTone" />
                  <p className="leading-[18px] text-[#050F2C]">{t('All')}</p>
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
                  <User size="28" color="#d14d72" variant="TwoTone" />
                  <p className="leading-[18px] text-[#050F2C]">{t('Website')}</p>
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
                  <ShoppingCart size="28" color="#d14d72" variant="TwoTone" />
                  <p className="leading-[18px] text-[#050F2C]">{t('UiUx')}</p>
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
                  <DiscountShape size="28" color="#d14d72" variant="TwoTone" />
                  <p className="leading-[18px] text-[#050F2C]">{t('Graphic')}</p>
               </Button>
            </div>
         </div>

         <div className="mx-auto max-w-[1440px] px-5 pb-[70px] customMd:px-[60px] customMd:pb-[83px]">
            <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
               <AccordionSummary
                  expandIcon={
                     <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-[#F5F8FC] p-1 customMd:p-3" />
                  }
               >
                  <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                     <span className="absolute start-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                  </p>
               </AccordionSummary>
               <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
               </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
               <AccordionSummary
                  expandIcon={
                     <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-[#F5F8FC] p-1 customMd:p-3" />
                  }
               >
                  <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                     <span className="absolute start-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                  </p>
               </AccordionSummary>
               <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
               </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
               <AccordionSummary
                  expandIcon={
                     <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-[#F5F8FC] p-1 customMd:p-3" />
                  }
               >
                  <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                     <span className="absolute start-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                  </p>
               </AccordionSummary>
               <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
               </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
               <AccordionSummary
                  expandIcon={
                     <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-[#F5F8FC] p-1 customMd:p-3" />
                  }
               >
                  <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                     <span className="absolute start-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                  </p>
               </AccordionSummary>
               <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
               </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
               <AccordionSummary
                  expandIcon={
                     <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-[#F5F8FC] p-1 customMd:p-3" />
                  }
               >
                  <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                     <span className="absolute start-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                  </p>
               </AccordionSummary>
               <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
               </AccordionDetails>
            </Accordion>
         </div>

         <Request />
      </div>
   );
}

export default Faqs;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
      revalidate: 3600,
   };
}
