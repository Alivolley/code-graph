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

function Prices() {
   const [chosenCategory, setChosenCategory] = useState('graphic');

   const t = useTranslations('home');

   return (
      <div>
         <div className="relative max-h-[548px] bg-[#E7ECFF] customMd:max-h-[778px]">
            <div className="absolute left-0 top-[185px] z-[0] hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>
            <div className="absolute bottom-0 right-0 z-[0] hidden xl:block">
               <Image src={wheelSecond} alt="wheel" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-5 pb-[187px] pt-[100px] customMd:px-[60px] customMd:pt-[152px] lg:pb-[370px]">
               <p className="text-center font-almaraiExtraBold text-[28px] leading-[47px] lg:text-[34px] lg:leading-[63px]">
                  مشتریان خوشحال - کارمند پر انرژی
               </p>
               <p className="mx-auto mt-[6px] max-w-[543px] text-center text-sm leading-[27px] lg:text-base lg:leading-[32px]">
                  ما طرح‌های زیادی طراحی کرده‌ایم که می‌توانید با انتخاب یک طرح مناسب، کسب‌وکار خود را تقویت کنید
               </p>

               <div className="mt-5 lg:px-[43px]">
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
                  <PriceCart className="w-[290px] customLg:flex-1" />
                  <PriceCart className="w-[290px] customLg:flex-1" />
                  <PriceCart className="w-[290px] customLg:flex-1" />
                  <PriceCart className="w-[290px] customLg:flex-1" />
               </div>
            </div>
         </div>
         <p
            className="mx-auto max-w-[1440px] bg-[#f5f8fc] px-5 pb-[46px] pt-[331px] text-center
          font-almaraiExtraBold text-[28px] leading-[40px] text-[#65A5FC] customMd:px-[60px] customMd:pb-[70px] customMd:pt-[302px] customMd:text-[32px]"
         >
            ویژگی های برتر را کاوش کنید
         </p>
      </div>
   );
}

export default Prices;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
