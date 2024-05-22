import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';

// Icons
import { ArrowDown2, ArrowLeft } from 'iconsax-react';

// Assets
import faqPic from '@/assets/images/faqPic.png';

function Faqs({ detail }) {
   const { locale } = useRouter();
   const t = useTranslations('services');

   return (
      <div className="bg-[#F8F9FE]" dir="rtl">
         <div className="mx-auto max-w-[1440px] px-5 pb-[50px] pt-[24px] customMd:px-[60px] customMd:pb-[38px]">
            <div className="flex flex-col gap-10 customMd:flex-row customMd:gap-[83px]">
               <div
                  dir={locale === 'en' ? 'ltr' : 'rtl'}
                  className="order-2 flex-1 customMd:order-1 customMd:mt-[36px]"
               >
                  <div className="relative ps-[13px] customMd:ps-[30px]">
                     <p
                        className="text-xs text-[#626E94]"
                        data-aos="fade-left"
                        data-aos-delay="350"
                        data-aos-duration="650"
                     >
                        {t('faqs text 1')}
                     </p>
                     <div
                        className="mt-4 flex items-center gap-1 font-almaraiExtraBold800 text-2xl leading-[46px] customMd:text-[32px] customMd:leading-[60px]"
                        data-aos="fade-left"
                        data-aos-delay="350"
                        data-aos-duration="650"
                     >
                        <p className="whitespace-nowrap text-[#65A5FC]" style={{ WebkitTextStroke: '1px' }}>
                           {t('Answer to')}
                        </p>
                        <p className="whitespace-nowrap text-[#EF6D33]" style={{ WebkitTextStroke: '1px' }}>
                           {t('Your frequently asked questions')}
                        </p>
                     </div>
                     <p
                        className="absolute bottom-2 start-0 top-0 w-2 bg-[#65A5FC]"
                        data-aos="fade-left"
                        data-aos-duration="650"
                        data-aos-delay="200"
                     />
                  </div>

                  <div className="mt-10" data-aos="fade-left" data-aos-delay="400" data-aos-duration="650">
                     {detail?.map(item => (
                        <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} key={item?.id}>
                           <AccordionSummary
                              expandIcon={
                                 <ArrowDown2
                                    size="19"
                                    color="#d14d72"
                                    className="rounded-sm bg-white p-1 customMd:p-3"
                                 />
                              }
                           >
                              <p className="relative py-3 text-xs leading-6 text-[#050F2C] customMd:text-base">
                                 {item?.question}
                                 <span className="absolute start-[-21px] top-[15px] size-3 rounded-full bg-customPink" />
                              </p>
                           </AccordionSummary>
                           <AccordionDetails>{item?.answer}</AccordionDetails>
                        </Accordion>
                     ))}
                  </div>

                  <Link
                     href="/faqs"
                     className="mt-10 block w-full lg:w-[202px]"
                     data-aos="zoom-in"
                     data-aos-delay="750"
                     data-aos-offset="-100"
                  >
                     <Button
                        color="customPink"
                        variant="contained"
                        fullWidth
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
                        {t('See all')}
                     </Button>
                  </Link>
               </div>
               <div
                  className="order-1 flex-1 customMd:order-2"
                  data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-duration="850"
               >
                  <Image src={faqPic} alt="faq" className="size-full customMd:h-auto customMd:w-full" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Faqs;
