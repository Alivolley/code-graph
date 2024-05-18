import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import ProductCartStyle from './product-cart.style';
import noImage from '@/assets/images/noImage.jpg';

function ProductCart({ className, detail, index }) {
   const { locale } = useRouter();
   const t = useTranslations('home');

   return (
      <ProductCartStyle
         href={`/productDetail/${detail?.title}`}
         className={`shrink-0 rounded-[20px] bg-white p-[14px] ${className}`}
         data-aos="fade-right"
         data-aos-duration="650"
         data-aos-delay={(index + 1) * 200}
      >
         <div className="relative h-[175px] w-full md:h-[200px]">
            <Image src={detail?.cover || noImage} alt="product" fill className="rounded-[18px] object-cover" />
         </div>
         <p className="my-[15px] line-clamp-1 text-base font-bold text-[#EA8C90]" id="text">
            {detail?.title}
         </p>
         <p className="line-clamp-3 min-h-[60px] text-xs leading-[20px] text-[#626E94]">{detail?.short_description}</p>
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
