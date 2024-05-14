import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft, Calculator, CallCalling, Shop, UserOctagon } from 'iconsax-react';

// Components
import ProductCart from '@/components/templates/product-cart/product-cart';

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

function BoldProducts({ products }) {
   const [chosenCategory, setChosenCategory] = useState('graphic');

   const t = useTranslations('home');
   const { locale } = useRouter();

   return (
      <div className="bg-[#F5F8FC]">
         <div className="mx-auto max-w-[1196px] px-5 py-[30px] customMd:px-[60px] customMd:py-[50px]">
            <p
               className="text-center text-xs text-[#3C4252] customMd:text-base"
               data-aos="zoom-in"
               data-aos-duration="650"
            >
               {t('bold product title 1')}
            </p>
            <h2
               className="mx-auto mt-3 max-w-[830px] text-center font-almaraiExtraBold800 text-2xl leading-[42px]
                text-[#050F2C] customMd:text-[32px] customMd:leading-[56px]"
               data-aos="zoom-in"
               data-aos-duration="650"
               data-aos-delay="250"
            >
               {t('bold product title 2')}
            </h2>

            <div
               className="mt-9 flex h-[70px] flex-nowrap items-center gap-4 rounded-[100px] border-2
             border-solid border-white bg-white px-4 py-[10px] max-customMd:overflow-auto customMd:h-[102px] customMd:p-4"
               data-aos="zoom-in"
               data-aos-duration="650"
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

            <div className="mt-[30px] flex flex-nowrap items-center gap-5 overflow-auto customMd:overflow-hidden">
               {chosenCategory === 'graphic'
                  ? products?.graphic?.map((item, index) => (
                       <ProductCart key={item?.id} className="w-[240px] customMd:flex-1" detail={item} index={index} />
                    ))
                  : chosenCategory === 'webDevelop'
                    ? products?.website?.map((item, index) => (
                         <ProductCart
                            key={item?.id}
                            className="w-[240px] customMd:flex-1"
                            detail={item}
                            index={index}
                         />
                      ))
                    : chosenCategory === 'reDesign'
                      ? products?.redesign?.map((item, index) => (
                           <ProductCart
                              key={item?.id}
                              className="w-[240px] customMd:flex-1"
                              detail={item}
                              index={index}
                           />
                        ))
                      : chosenCategory === 'uiux'
                        ? products?.uiux?.map((item, index) => (
                             <ProductCart
                                key={item?.id}
                                className="w-[240px] customMd:flex-1"
                                detail={item}
                                index={index}
                             />
                          ))
                        : null}
            </div>

            <Link
               href="/allProducts"
               className="mt-[50px] flex justify-center lg:mx-auto lg:w-fit"
               data-aos="zoom-in"
               data-aos-duration="650"
            >
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
                  {t('All projects')}
               </Button>
            </Link>
         </div>
      </div>
   );
}

export default BoldProducts;
