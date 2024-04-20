import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import ProductCartStyle from './product-cart.style';

function ProductCart({ className, detail }) {
   const { locale } = useRouter();
   const t = useTranslations('home');

   console.log(detail);

   return (
      <ProductCartStyle
         href={`/productDetail/${detail?.title}`}
         className={`shrink-0 rounded-[20px] bg-white p-[14px] ${className}`}
      >
         <div className="h-[175px] rounded-[18px] bg-[#fdebeb] px-[10px] pt-[10px] md:h-[200px]">
            <p className="text-center text-xs font-bold text-[#284565]">{detail?.title}</p>
            <div className="relative mt-3 h-[110px] w-full md:h-[135px]">
               <Image src={detail?.cover} alt="product" fill className="rounded-2xl object-cover" />
            </div>
         </div>
         <p
            className="my-[15px] overflow-hidden text-base font-bold text-[#EA8C90] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] [display:-webkit-box]"
            id="text"
         >
            {detail?.title}
         </p>
         <p className="min-h-[60px] overflow-hidden text-xs leading-[20px] text-[#626E94] [-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:3]">
            {detail?.short_description}
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
                     id="icon"
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
