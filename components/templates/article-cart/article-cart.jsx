import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft, Calendar, Eye, Hashtag, Profile, Share } from 'iconsax-react';

// Assets
import picSample from '@/assets/images/articlePicSample.png';
import ArticleCartStyle from './article-cart.style';

function ArticleCart() {
   const { locale } = useRouter();
   const t = useTranslations('home');

   return (
      <ArticleCartStyle
         href="/"
         className="w-[325px] shrink-0 rounded-[20px] border border-solid border-[#E4EAF0] bg-white p-[14px] customMd:flex-1"
      >
         <div className="h-[200px] w-full rounded-[18px]">
            <Image src={picSample} alt="product" className="size-full" />
         </div>

         <div className="mt-4 flex items-center justify-between text-[8.5px] text-[#626E94]">
            <div className="flex items-center gap-[7px]">
               <div className="flex items-center gap-1">
                  <p>
                     <Calendar size="10" />
                  </p>
                  <p>11/02/1402</p>
               </div>
               <div className="flex items-center gap-1">
                  <p>
                     <Profile size="10" />
                  </p>
                  <p>جازمین دهقان</p>
               </div>
               <div className="flex items-center gap-1">
                  <p>
                     <Hashtag size="10" />
                  </p>
                  <p>راهنمای مشتری</p>
               </div>
            </div>

            <div className="flex items-center gap-[7px]">
               <div className="flex items-center gap-1">
                  <p>
                     <Eye size="10" />
                  </p>
                  <p>302</p>
               </div>
               <div className="flex items-center gap-1">
                  <p>
                     <Share size="10" />
                  </p>
                  <p>12</p>
               </div>
            </div>
         </div>

         <p
            className="my-[15px] overflow-hidden text-base font-bold text-[#65A5FC] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] [display:-webkit-box]"
            id="text"
         >
            یک سایت چگونه طراحی میشود
         </p>
         <p className="overflow-hidden text-xs leading-[20px] text-[#626E94] [-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:3]">
            آخرین روند مد را در وب سایت فروشگاه بج کشف کنید! لباس های شیک بخرید و بازی کمد لباس خود را ارتقا دهید!
         </p>
         <div className="mt-4">
            <Button
               id="btn"
               sx={{
                  backgroundColor: '#65A5FC',
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
                     id="icon"
                     size="19"
                     className={`rounded-full bg-white text-[#65A5FC] ${locale === 'en' ? 'rotate-180' : ''}`}
                  />
               }
            >
               {t('More')}
            </Button>
         </div>
      </ArticleCartStyle>
   );
}

export default ArticleCart;
