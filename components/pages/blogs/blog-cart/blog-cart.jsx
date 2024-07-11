import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { HeartAdd, HeartRemove } from 'iconsax-react';

// Context
import { useGlobalContext } from '@/context/store';

// Assets
import BlogCartStyle from './blog-cart.style';
import noImage from '@/assets/images/noImage.jpg';

// Apis
import useToggleFavorites from '@/apis/favorites/useToggleFavorites';
import useGetFavorites from '@/apis/favorites/useGetFavorites';

function BlogCart({ detail, index }) {
   const t = useTranslations('blogs');

   const { isLogin } = useGlobalContext();

   const { trigger: toggleFavoriteTrigger, isMutating: toggleFavoriteIsMutating } = useToggleFavorites();
   const { data: favoritesData } = useGetFavorites(isLogin);

   const isLiked = favoritesData?.find(item => item?.id === detail?.id);

   const toggleLike = () => {
      if (isLogin) {
         toggleFavoriteTrigger(detail?.id);
      } else {
         toast.error(t('To add to favorites, first log in to your account'));
      }
   };

   return (
      <div
         className="relative size-fit"
         data-aos="fade-right"
         data-aos-duration="650"
         data-aos-delay={(index + 1) * 200}
      >
         <div className="absolute start-[25px] top-[25px] z-[1] size-fit">
            <LoadingButton
               sx={{
                  width: 26,
                  height: 26,
                  borderRadius: '100%',
                  backgroundColor: 'white',
                  ':hover': { backgroundColor: '#e9eef5' },
               }}
               onClick={toggleLike}
               loading={toggleFavoriteIsMutating}
            >
               {isLiked ? (
                  <HeartRemove size={14} color={!toggleFavoriteIsMutating && '#f47373'} variant="Bold" />
               ) : (
                  <HeartAdd size={14} color={!toggleFavoriteIsMutating && '#A9AFBB'} />
               )}
            </LoadingButton>
         </div>

         <BlogCartStyle href={`/blogs/blogDetail/${detail?.title}`} className="block rounded-[20px] p-[15px]">
            <div className="relative aspect-[2.2/1] w-full overflow-hidden rounded-2xl">
               <Image src={detail?.cover || noImage} alt="cover" fill className="rounded-2xl object-cover" />
            </div>

            <div className="mt-5 customMd:mt-10">
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 font-almaraiExtraBold800 text-10 text-[#333333]">
                     {detail?.categories?.map((item, itemIndex) => (
                        <p id="text1" key={item} className="text-nowrap">
                           {item}
                           {itemIndex + 1 !== detail?.categories?.length && '،'}
                        </p>
                     ))}
                  </div>
                  <p className="text-nowrap text-10 text-[#999999]" id="text2">
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
      </div>
   );
}

export default BlogCart;
