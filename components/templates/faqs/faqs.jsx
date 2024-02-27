import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

// Icons
import { ArrowDown2 } from 'iconsax-react';

// Assets
import faqPic from '@/assets/images/faqPic.png';

function Faqs() {
   const { locale } = useRouter();
   const t = useTranslations('categoryDetail');

   return (
      <div
         className="mx-auto max-w-[1440px] bg-[#F8F9FE] px-5 pb-[70px] pt-[24px] customMd:px-[60px] customMd:pb-[38px]"
         dir="rtl"
      >
         <div className="flex flex-col gap-[50px] customMd:flex-row customMd:gap-[83px]">
            <div dir={locale === 'en' ? 'ltr' : 'rtl'} className="order-2 flex-1 customMd:order-1 customMd:mt-[36px]">
               <div className="relative ps-[30px] font-almaraiExtraBold text-2xl leading-[46px] text-[#EF6D33] customMd:text-[32px] customMd:leading-[60px]">
                  <p className="text-[#65A5FC]">{t('Answer to')}</p>
                  <p>{t('Your frequently asked questions')}</p>
                  <p className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]" />
               </div>

               <div className="mt-[43px]">
                  <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                     <AccordionSummary
                        expandIcon={
                           <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-white p-1 customMd:p-3" />
                        }
                     >
                        <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                           <span className="absolute right-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                        </p>
                     </AccordionSummary>
                     <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                     </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                     <AccordionSummary
                        expandIcon={
                           <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-white p-1 customMd:p-3" />
                        }
                     >
                        <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                           <span className="absolute right-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                        </p>
                     </AccordionSummary>
                     <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                     </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                     <AccordionSummary
                        expandIcon={
                           <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-white p-1 customMd:p-3" />
                        }
                     >
                        <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                           <span className="absolute right-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                        </p>
                     </AccordionSummary>
                     <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                     </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                     <AccordionSummary
                        expandIcon={
                           <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-white p-1 customMd:p-3" />
                        }
                     >
                        <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                           <span className="absolute right-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                        </p>
                     </AccordionSummary>
                     <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                     </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                     <AccordionSummary
                        expandIcon={
                           <ArrowDown2 size="19" color="#d14d72" className="rounded-sm bg-white p-1 customMd:p-3" />
                        }
                     >
                        <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                           <span className="absolute right-[-21px] top-[15px] size-3 rounded-full bg-[#FD8266]" />
                        </p>
                     </AccordionSummary>
                     <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                     </AccordionDetails>
                  </Accordion>
               </div>
            </div>
            <div className="order-1 flex-1 customMd:order-2">
               <Image src={faqPic} alt="faq" className="size-full customMd:h-auto customMd:w-full" />
            </div>
         </div>
      </div>
   );
}

export default Faqs;
