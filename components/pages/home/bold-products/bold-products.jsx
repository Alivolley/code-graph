import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useState } from 'react';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

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

function BoldProducts({ products, categories }) {
   const [chosenCategory, setChosenCategory] = useState(categories?.[0]?.title || '');

   const t = useTranslations('home');
   const { locale } = useRouter();

   return (
      <div className="bg-[#F5F8FC]">
         <div className="mx-auto max-w-[1320px] px-5 py-[30px] customMd:px-[60px] customMd:py-[50px]">
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
               {categories?.map(item => (
                  <Button
                     key={item?.id}
                     startIcon={
                        <div
                           dangerouslySetInnerHTML={{ __html: item?.icon }}
                           className="flex items-center justify-center [&>svg]:size-[20px]"
                        />
                     }
                     variant="contained"
                     className="!px-[46px] !text-[16px] md:!flex-1 md:!px-0"
                     sx={{
                        ...categoryButtonStyle,
                        color: chosenCategory === item?.title ? '#fff' : '#626E94',
                        backgroundColor: chosenCategory === item?.title ? '#65A6FC' : '#F5F8FC',
                        ...(chosenCategory === item?.title && {
                           ':hover': { color: '#fff', backgroundColor: '#65A6FC' },
                        }),
                     }}
                     onClick={() => setChosenCategory(item?.title)}
                  >
                     {item?.title}
                  </Button>
               ))}
            </div>

            <div className="mt-[30px] flex flex-nowrap items-center gap-5 overflow-auto customMd:overflow-hidden">
               {products?.[chosenCategory]?.map((item, index) => (
                  <ProductCart
                     key={item?.id}
                     className="w-[240px] customMd:max-w-[400px] customMd:flex-1"
                     detail={item}
                     index={index}
                  />
               ))}
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
