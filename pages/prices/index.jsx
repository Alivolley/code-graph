import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { Calculator, CallCalling, Shop, UserOctagon } from 'iconsax-react';

// Assets
import wheelFirst from '@/assets/icons/wheel4.svg';
import wheelSecond from '@/assets/icons/wheel2.svg';
import greenMedal from '@/assets/images/greenMedal.png';
import grayMedal from '@/assets/images/grayMedal.png';
import purpleMedal from '@/assets/images/purpleMedal.png';
import yellowMedal from '@/assets/images/yellowMedal.png';

// Components
import PriceCart from '@/components/pages/prices/price-cart/price-cart';
import FeatureAccordion from '@/components/pages/prices/feature-accordion/feature-accordion';
import Faqs from '@/components/templates/faqs/faqs';
import axiosInstance from '@/configs/axiosInstance';

const categoryButtonStyle = {
   borderRadius: '100px',
   height: '100%',
   whiteSpace: 'nowrap',
   flexShrink: 0,
   ':hover': {
      backgroundColor: '#E5EFFD',
      color: '#626E94',
   },
};

const featureButtonStyle = {
   width: '105px',
   borderRadius: '51px',
   fontFamily: 'almaraiBold700',
   ':hover': {
      backgroundColor: '#E5EFFD',
   },
};

function Prices({ questions }) {
   const [chosenCategory, setChosenCategory] = useState('graphic');

   const t = useTranslations('prices');

   return (
      <div>
         <div className="relative max-h-[548px] bg-[#E7ECFF] customMd:max-h-[778px]">
            <div className="absolute left-0 top-[185px] z-0 hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>
            <div className="absolute bottom-0 right-0 z-0 hidden xl:block">
               <Image src={wheelSecond} alt="wheel" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-5 pb-[187px] pt-[100px] customMd:px-[60px] customMd:pt-[152px] lg:pb-[370px]">
               <p
                  className="text-center font-almaraiExtraBold800 text-[28px] leading-[47px] lg:text-[34px] lg:leading-[63px]"
                  data-aos="fade-up"
               >
                  {t('Happy customers - energetic employees')}
               </p>
               <p
                  className="mx-auto mt-[6px] max-w-[543px] text-center text-sm leading-[27px] lg:text-base lg:leading-[32px]"
                  data-aos="fade-up"
               >
                  {t('We have designed so many plans that you can boost your business by choosing a suitable plan')}
               </p>

               <div className="mt-5 lg:px-[43px]" data-aos="fade-up">
                  <div
                     className="flex h-[70px] flex-nowrap items-center gap-4 overflow-auto rounded-[100px]
             border-2 border-solid border-white bg-white px-4 py-[10px] customMd:h-[102px] customMd:p-4"
                  >
                     <Button
                        startIcon={<Calculator size="24" />}
                        variant="contained"
                        className="!px-[46px] !text-[16px] md:!flex-1 md:!px-0 md:!text-[20px]"
                        sx={{
                           ...categoryButtonStyle,
                           color: chosenCategory === 'graphic' ? '#fff' : '#626E94',
                           backgroundColor: chosenCategory === 'graphic' ? '#65A6FC' : '#F5F8FC',
                        }}
                        onClick={() => setChosenCategory('graphic')}
                     >
                        {t('Graphic')}
                     </Button>
                     <Button
                        startIcon={<UserOctagon size="24" />}
                        variant="contained"
                        className="!px-[46px] !text-[16px] md:!flex-1 md:!px-0 md:!text-[20px]"
                        sx={{
                           ...categoryButtonStyle,
                           color: chosenCategory === 'webDevelop' ? '#fff' : '#626E94',
                           backgroundColor: chosenCategory === 'webDevelop' ? '#65A6FC' : '#F5F8FC',
                        }}
                        onClick={() => setChosenCategory('webDevelop')}
                     >
                        {t('Web design')}
                     </Button>
                     <Button
                        startIcon={<CallCalling size="24" />}
                        variant="contained"
                        className="!px-[46px] !text-[16px] md:!flex-1 md:!px-0 md:!text-[20px]"
                        sx={{
                           ...categoryButtonStyle,
                           color: chosenCategory === 'reDesign' ? '#fff' : '#626E94',
                           backgroundColor: chosenCategory === 'reDesign' ? '#65A6FC' : '#F5F8FC',
                        }}
                        onClick={() => setChosenCategory('reDesign')}
                     >
                        {t('Redesign')}
                     </Button>
                     <Button
                        startIcon={<Shop size="24" />}
                        variant="contained"
                        className="!px-[46px] !text-[16px] md:!flex-1 md:!px-0 md:!text-[20px]"
                        sx={{
                           ...categoryButtonStyle,
                           color: chosenCategory === 'uiux' ? '#fff' : '#626E94',
                           backgroundColor: chosenCategory === 'uiux' ? '#65A6FC' : '#F5F8FC',
                        }}
                        onClick={() => setChosenCategory('uiux')}
                     >
                        {t('UiUx')}
                     </Button>
                  </div>
               </div>

               <div className="mt-[50px] flex flex-nowrap items-center gap-4 overflow-auto customMd:gap-6">
                  <PriceCart className="w-[268px] customLg:flex-1" index={0} />
                  <PriceCart className="w-[268px] customLg:flex-1" index={1} />
                  <PriceCart className="w-[268px] customLg:flex-1" index={2} />
                  <PriceCart className="w-[268px] customLg:flex-1" index={3} />
               </div>
            </div>
         </div>
         <div className="bg-[#f5f8fc] px-5 pb-[46px] pt-[331px] customMd:px-[60px] customMd:pb-[70px] customMd:pt-[302px]">
            <p className="mx-auto max-w-[1440px] text-center font-almaraiExtraBold800 text-[28px] leading-[40px] text-[#65A5FC] customMd:text-[32px]">
               {t('Explore the top features')}
            </p>
         </div>

         <div className="mx-auto mb-20 max-w-[1440px] px-5 customMd:px-[60px]">
            <div className="mt-[64px] flex flex-col rounded-t-10 border-solid border-[#E4EAF0] customMd:h-[276px] customMd:flex-row customMd:border">
               <div className="order-2 flex items-center justify-center py-10 font-almaraiBold700 text-[32px] text-[#050F2C] customMd:order-1 customMd:w-[250px] customLg:w-[520px]">
                  {t('Features')}
               </div>

               <div className="order-1 grid grow grid-cols-2 gap-x-5 gap-y-3 customMd:order-2 customMd:flex customMd:gap-0">
                  <div
                     className="flex flex-col items-center justify-center gap-4 rounded-10 border border-solid border-[#E4EAF0]
                   py-[18px] customMd:flex-1 customMd:gap-5 customMd:rounded-none customMd:border-y-0 customMd:border-e-0 customMd:border-s"
                     data-aos="zoom-out"
                     data-aos-offset="400"
                  >
                     <div className="w-[51px] customMd:w-[65px]">
                        <Image src={grayMedal} alt="medal" className="size-full" />
                     </div>
                     <p className="text-[#050F2C]">Standard</p>
                     <Button
                        sx={{ ...featureButtonStyle, border: '1px solid #050F2C', color: '#050F2C' }}
                        className="h-[35px] customMd:h-[41px]"
                     >
                        {t('Try free')}
                     </Button>
                  </div>
                  <div
                     className="flex flex-col items-center justify-center gap-4 rounded-10 border border-solid border-[#E4EAF0]
                   py-[18px] customMd:flex-1 customMd:gap-5 customMd:rounded-none customMd:border-y-0 customMd:border-e-0 customMd:border-s"
                     data-aos="zoom-out"
                     data-aos-delay="100"
                     data-aos-offset="400"
                  >
                     <div className="w-[51px] customMd:w-[65px]">
                        <Image src={greenMedal} alt="medal" className="size-full" />
                     </div>
                     <p className="text-[#050F2C]">Professional</p>
                     <Button
                        sx={{ ...featureButtonStyle, border: '1px solid #5A3AFF', color: '#5A3AFF' }}
                        className="h-[35px] customMd:h-[41px]"
                     >
                        {t('Try free')}
                     </Button>
                  </div>
                  <div
                     className="flex flex-col items-center justify-center gap-4 rounded-10 border border-solid border-[#E4EAF0]
                   py-[18px] customMd:flex-1 customMd:gap-5 customMd:rounded-none customMd:border-y-0 customMd:border-e-0 customMd:border-s"
                     data-aos="zoom-out"
                     data-aos-delay="200"
                     data-aos-offset="400"
                  >
                     <div className="w-[51px] customMd:w-[65px]">
                        <Image src={purpleMedal} alt="medal" className="size-full" />
                     </div>
                     <p className="text-[#050F2C]">Enterprise</p>
                     <Button
                        sx={{ ...featureButtonStyle, border: '1px solid #E71D36', color: '#E71D36' }}
                        className="h-[35px] customMd:h-[41px]"
                     >
                        {t('Try free')}
                     </Button>
                  </div>
                  <div
                     className="flex flex-col items-center justify-center gap-4 rounded-10 border border-solid border-[#E4EAF0]
                   py-[18px] customMd:flex-1 customMd:gap-5 customMd:rounded-none customMd:border-y-0 customMd:border-e-0 customMd:border-s"
                     data-aos="zoom-out"
                     data-aos-delay="300"
                     data-aos-offset="400"
                  >
                     <div className="w-[51px] customMd:w-[65px]">
                        <Image src={yellowMedal} alt="medal" className="size-full" />
                     </div>
                     <p className="text-[#050F2C]">Ultimate</p>
                     <Button
                        sx={{ ...featureButtonStyle, border: '1px solid #FC742B', color: '#FC742B' }}
                        className="h-[35px] customMd:h-[41px]"
                     >
                        {t('Try free')}
                     </Button>
                  </div>
               </div>
            </div>

            <div data-aos="fade-up" data-aos-offset="300">
               <FeatureAccordion />
               <FeatureAccordion />
               <FeatureAccordion />
               <FeatureAccordion />
               <FeatureAccordion />
               <FeatureAccordion />
            </div>
         </div>

         <Faqs detail={questions} />
      </div>
   );
}

export default Prices;

export async function getStaticProps(context) {
   const questions = await axiosInstance(`accounts/questions/?random_faq=true`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         questions,
      },
   };
}
