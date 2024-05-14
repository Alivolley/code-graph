import { useTranslations } from 'next-intl';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Assets
import BlogCartStyle from './blog-cart.style';

function BlogCart({ detail }) {
   const t = useTranslations('blogs');

   return (
      <BlogCartStyle href={`/blogs/blogDetail/${detail?.title}`} className="block rounded-[20px] p-[15px]">
         <div className="relative aspect-[1.3/1] w-full overflow-hidden rounded-2xl">
            <Image src={detail?.cover} alt="cover" fill className="rounded-2xl object-cover" />
         </div>

         <div className="mt-5 customMd:mt-10">
            <div className="flex items-center gap-4">
               <p className="font-almaraiExtraBold800 text-xs text-[#333333]" id="text1">
                  {detail?.category}
               </p>
               <p className="text-xs text-[#999999]" id="text2">
                  {detail?.created_at}
               </p>
            </div>
            <p
               className="my-[10px] line-clamp-2 h-[56px] font-almaraiExtraBold800 text-[18px] leading-7
                text-[#333333] customMd:my-4 customMd:h-[64px] customMd:text-2xl"
               id="text3"
            >
               {detail?.title}
            </p>
            <p
               className="mb-4 line-clamp-3 h-[60px] text-sm text-[#666666] customMd:h-[72px] customMd:text-base"
               id="text4"
            >
               {detail?.short_description}
            </p>

            <Button
               className="text-base customMd:text-[18px]"
               sx={{ color: '#FD8266', fontFamily: 'almaraiExtraBold800' }}
            >
               {t('Read more')}...
            </Button>
         </div>
      </BlogCartStyle>
   );
}

export default BlogCart;
