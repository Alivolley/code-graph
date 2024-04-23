import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft, Calendar, Eye, Hashtag, Profile } from 'iconsax-react';

// Assets
import ArticleCartStyle from './article-cart.style';

function ArticleCart({ detail }) {
   const { locale } = useRouter();
   const t = useTranslations('home');

   return (
      <ArticleCartStyle
         href={`/blogs/blogDetail/${detail?.title}`}
         className="w-[325px] shrink-0 rounded-[20px] border border-solid border-[#E4EAF0] bg-white p-[14px] customMd:flex-1"
         data-aos="fade-up"
         data-aos-offset="300"
      >
         <div className="relative h-[200px] w-full">
            <Image src={detail?.cover} alt="product" className="rounded-[18px] object-cover" fill />
         </div>

         <div className="mt-4 flex items-center justify-between text-[8.5px] text-[#626E94]">
            <div className="flex items-center gap-[7px]">
               <div className="flex items-center gap-1">
                  <p>
                     <Calendar size="10" />
                  </p>
                  <p>{detail?.created_at}</p>
               </div>
               <div className="flex items-center gap-1">
                  <p>
                     <Profile size="10" />
                  </p>
                  <p>{detail?.author}</p>
               </div>
               <div className="flex items-center gap-1">
                  <p>
                     <Hashtag size="10" />
                  </p>
                  <p>{detail?.category}</p>
               </div>
            </div>

            <div className="flex items-center gap-1">
               <p>
                  <Eye size="10" />
               </p>
               <p>{detail?.views}</p>
            </div>
         </div>

         <p className="my-[15px] line-clamp-1 text-base font-bold text-[#65A5FC]" id="text">
            {detail?.title}
         </p>
         <p className="line-clamp-3 h-[60px] text-xs leading-[20px] text-[#626E94]">{detail?.short_description}</p>
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
