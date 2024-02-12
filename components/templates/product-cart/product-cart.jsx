import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import picSample from '@/assets/images/productSample.png';
import ProductCartStyle from './product-cart.style';

function ProductCart() {
   const { locale } = useRouter();
   const t = useTranslations('home');

   return (
      <ProductCartStyle href="/" className="w-[240px] shrink-0 rounded-[20px] bg-white p-[14px] customMd:flex-1">
         <div className="h-[175px] rounded-[18px] bg-[#fdebeb] px-[10px] pt-[10px] md:h-[200px]">
            <p className="text-center text-xs font-bold text-[#284565]">فروشگاه کیف یلفان</p>
            <div className="mt-3 h-[110px] w-full md:h-[135px]">
               <Image src={picSample} alt="product" className="size-full" />
            </div>
         </div>
         <p
            className="my-[15px] overflow-hidden text-base font-bold text-[#EA8C90] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] [display:-webkit-box]"
            id="text"
         >
            تولیدی کیف یلفان
         </p>
         <p className="overflow-hidden text-xs leading-[20px] text-[#626E94] [-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:3]">
            آخرین روند مد را در وب سایت فروشگاه بج کشف کنید! لباس های شیک بخرید و بازی کمد لباس خود را ارتقا دهید!
         </p>
         <div className="mt-4">
            <Button
               id="btn"
               sx={{
                  backgroundColor: '#EA8C90',
                  color: '#fff',
                  borderRadius: 14,
                  width: 76,
                  height: 27,
                  fontSize: 12,
                  ':hover': {
                     backgroundColor: '#FD8266',
                  },
               }}
               endIcon={
                  <ArrowLeft
                     size="19"
                     className={`rounded-full bg-white text-[#EA8C90] ${locale === 'en' ? 'rotate-180' : ''}`}
                  />
               }
            >
               {t('More')}
            </Button>
         </div>
      </ProductCartStyle>
   );
}

export default ProductCart;
