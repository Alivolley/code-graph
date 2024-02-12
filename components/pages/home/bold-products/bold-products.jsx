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

function BoldProducts() {
   const [chosenCategory, setChosenCategory] = useState('graphic');

   const t = useTranslations('home');
   const { locale } = useRouter();

   return (
      <div className="bg-[#F5F8FC]">
         <div className="mx-auto max-w-[1196px] px-5 pb-16 pt-[30px] customMd:px-[60px] customMd:py-[50px]">
            <p className="text-center text-xs text-[#3C4252] customMd:text-base">
               {t('Our goal at codegeraph is to meet the basic needs of any business that loves to grow')}
            </p>
            <h2 className="mx-auto mt-6 max-w-[830px] text-center text-2xl font-extrabold leading-[42px] text-[#050F2C] customMd:text-[32px] customMd:leading-[56px]">
               {t('Every need you have for a business, codegeraph will take it')}
            </h2>

            <div className="mt-9 flex h-[102px] flex-nowrap items-center gap-4 overflow-auto rounded-[100px] border-2 border-solid border-white bg-white p-4">
               <Button
                  startIcon={<Calculator size="24" />}
                  variant="contained"
                  className="!px-10 !text-[18px] md:!flex-1 md:!px-0 md:!text-[20px]"
                  sx={{
                     borderRadius: '100px',
                     height: '100%',
                     whiteSpace: 'nowrap',
                     flexShrink: 0,
                     ':hover': {
                        backgroundColor: '#E5EFFD',
                        color: '#626E94',
                     },
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
                  className="!px-10 !text-[18px] md:!flex-1 md:!px-0 md:!text-[20px]"
                  sx={{
                     borderRadius: '100px',
                     height: '100%',
                     whiteSpace: 'nowrap',
                     flexShrink: 0,
                     ':hover': {
                        backgroundColor: '#E5EFFD',
                        color: '#626E94',
                     },
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
                  className="!px-10 !text-[18px] md:!flex-1 md:!px-0 md:!text-[20px]"
                  sx={{
                     borderRadius: '100px',
                     height: '100%',
                     whiteSpace: 'nowrap',
                     flexShrink: 0,
                     ':hover': {
                        backgroundColor: '#E5EFFD',
                        color: '#626E94',
                     },
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
                  className="!px-10 !text-[18px] md:!flex-1 md:!px-0 md:!text-[20px]"
                  sx={{
                     borderRadius: '100px',
                     height: '100%',
                     whiteSpace: 'nowrap',
                     flexShrink: 0,
                     ':hover': {
                        backgroundColor: '#E5EFFD',
                        color: '#626E94',
                     },
                     color: chosenCategory === 'uiux' ? '#fff' : '#626E94',
                     backgroundColor: chosenCategory === 'uiux' ? '#65A6FC' : '#F5F8FC',
                  }}
                  onClick={() => setChosenCategory('uiux')}
               >
                  {t('UiUx')}
               </Button>
            </div>

            <div className="mt-[30px] flex flex-nowrap items-center gap-5 overflow-auto">
               <ProductCart />
               <ProductCart />
               <ProductCart />
               <ProductCart />
            </div>

            <Link href="/" className="mt-[50px] flex justify-center">
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
                  {t('Get started')}
               </Button>
            </Link>
         </div>
      </div>
   );
}

export default BoldProducts;
