import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { ArrowLeft, Calendar, Eye, Hashtag, Profile, HeartAdd, HeartRemove } from 'iconsax-react';

// Context
import { useGlobalContext } from '@/context/store';

// Assets
import ArticleCartStyle from './article-cart.style';
import noImage from '@/assets/images/noImage.jpg';

// Apis
import useToggleFavorites from '@/apis/favorites/useToggleFavorites';
import useGetFavorites from '@/apis/favorites/useGetFavorites';

function ArticleCart({ detail, index }) {
   const { locale } = useRouter();
   const t = useTranslations('home');

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
         className="relative w-[325px] shrink-0 rounded-[20px] border border-solid
      border-[#E4EAF0] bg-white p-[14px] customMd:max-w-[500px] customMd:flex-1"
         data-aos="fade-right"
         data-aos-duration="650"
         data-aos-delay={(index + 1) * 200}
      >
         <div className="absolute bottom-[25px] end-[25px] z-[1] size-fit">
            <LoadingButton
               sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '100%',
                  backgroundColor: '#E7755A1C',
                  ':hover': { backgroundColor: '#e9eef5' },
               }}
               onClick={toggleLike}
               loading={toggleFavoriteIsMutating}
            >
               {isLiked ? (
                  <HeartRemove size={14} color={!toggleFavoriteIsMutating && '#f47373'} variant="Bold" />
               ) : (
                  <HeartAdd size={14} color={!toggleFavoriteIsMutating && '#EF6D33'} />
               )}
            </LoadingButton>
         </div>

         <ArticleCartStyle href={`/blogs/blogDetail/${detail?.title}`}>
            <div className="relative h-[200px] w-full">
               <Image src={detail?.cover || noImage} alt="product" className="rounded-[18px] object-cover" fill />
            </div>

            <div className="mt-4 flex items-center justify-between text-[8px] text-[#626E94]">
               <div className="flex items-center gap-[7px]">
                  <div className="flex items-center">
                     <p>
                        <Calendar size="10" />
                     </p>
                     <p>{detail?.created_at}</p>
                  </div>
                  <div className="flex items-center">
                     <p>
                        <Profile size="10" />
                     </p>
                     <p>{detail?.author}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[6px] customMd:text-[8px]">
                     {detail?.categories?.map(item => (
                        <div key={item} className="flex items-center">
                           <p>
                              <Hashtag size="10" />
                           </p>
                           <p>{item}</p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="flex items-center gap-1">
                  <p>
                     <Eye size="10" />
                  </p>
                  <p>{detail?.views}</p>
               </div>
            </div>

            <p className="my-[15px] line-clamp-1 font-almaraiBold700 text-base text-[#65A5FC]" id="text">
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
      </div>
   );
}

export default ArticleCart;
