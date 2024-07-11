import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// MUI
import { Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { ArrowLeft, HeartAdd, HeartRemove } from 'iconsax-react';

// Context
import { useGlobalContext } from '@/context/store';

// Assets
import axiosInstance from '@/configs/axiosInstance';

// Components
import BlogCart from '@/components/pages/blogs/blog-cart/blog-cart';
import BlogDetailStyle from './blogDetail.style';

// Apis
import useToggleFavorites from '@/apis/favorites/useToggleFavorites';
import useGetFavorites from '@/apis/favorites/useGetFavorites';

function BlogTitle({ blogDetail, blogsList }) {
   const { locale } = useRouter();
   const t = useTranslations('blogs');
   const { isLogin } = useGlobalContext();

   const { trigger: toggleFavoriteTrigger, isMutating: toggleFavoriteIsMutating } = useToggleFavorites();
   const { data: favoritesData } = useGetFavorites(isLogin);

   const isLiked = favoritesData?.find(item => item?.id === blogDetail?.id);

   const toggleLike = () => {
      if (isLogin) {
         toggleFavoriteTrigger(blogDetail?.id);
      } else {
         toast.error(t('To add to favorites, first log in to your account'));
      }
   };

   return (
      <BlogDetailStyle data-aos="fade-up">
         <Head>
            <title>{locale === 'fa' ? 'رودگراف - مقاله' : 'RoadGraph-blog'}</title>
         </Head>
         <div className="relative mx-auto mt-[110px] max-w-[1440px] px-5 customMd:mt-[148px] customMd:px-[60px]">
            <div className="flex flex-col max-customMd:gap-4 customMd:flex-row customMd:items-center customMd:justify-between">
               <div className="flex items-center gap-[10px]">
                  <div className="flex items-center gap-1 font-almaraiBold700 text-xs uppercase text-[#333333] customMd:text-sm">
                     {blogDetail?.categories?.map((item, itemIndex) => (
                        <p key={item}>
                           {item}
                           {itemIndex + 1 !== blogDetail?.categories?.length && '،'}
                        </p>
                     ))}
                  </div>
                  <p className="text-xs text-[#999999] customMd:text-sm">{blogDetail?.created_at}</p>
               </div>

               <LoadingButton
                  sx={{
                     width: 'fit-content',
                     color: '#626E94',
                     fontSize: 14,
                     borderRadius: 2,
                     paddingX: '5px',
                  }}
                  onClick={toggleLike}
                  loading={toggleFavoriteIsMutating}
                  startIcon={
                     <div
                        className={`flex size-10 items-center justify-center rounded-full border border-solid ${
                           toggleFavoriteIsMutating ? '' : 'border-[#E4EAF0] bg-[#F5F8FC]'
                        }`}
                     >
                        {isLiked ? (
                           <HeartRemove size={20} color={!toggleFavoriteIsMutating && '#f47373'} variant="Bold" />
                        ) : (
                           <HeartAdd size={20} color={!toggleFavoriteIsMutating && '#A9AFBB'} />
                        )}
                     </div>
                  }
               >
                  {isLiked ? t('Remove from favorites') : t('Add to favorites')}
               </LoadingButton>
            </div>
            <p className="mt-[30px] font-almaraiBold700 text-[24px] leading-[38px] text-[#333333] customMd:text-[40px] customMd:leading-[64px]">
               {blogDetail?.title}
            </p>
            <div className="relative mt-[26px] aspect-[2.17/1] w-full overflow-hidden rounded-[20px] customMd:mt-[51px]">
               <Image src={blogDetail?.cover} alt={blogDetail?.title} fill objectFit="cover" />
            </div>

            <div
               className="mt-5 text-base leading-7 text-[#666666] customMd:mt-[69px]"
               dangerouslySetInnerHTML={{ __html: blogDetail?.description }}
               id="content"
            />
         </div>
         <div className="mt-10 bg-[#F5F8FC] customMd:mt-[76px]">
            <div className="relative mx-auto max-w-[1440px] px-5 py-[30px] customMd:p-[60px]">
               <div className="flex items-center justify-center customMd:justify-between">
                  <p className="font-almaraiBold700 text-2xl leading-[64px] text-[#333333] customMd:text-[36px]">
                     {t('Popular posts')}
                  </p>
                  <Link href="/blogs" className="hidden customMd:block">
                     <Button
                        variant="contained"
                        sx={{
                           height: 52,
                           width: 222,
                           borderRadius: 57,
                           fontFamily: 'almaraiBold700',
                           fontSize: 16,
                           color: 'white',
                           backgroundColor: '#65A5FC',
                           ':hover': {
                              backgroundColor: 'white',
                              color: '#65A5FC',
                           },
                        }}
                        endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                     >
                        {t('See all')}
                     </Button>
                  </Link>
               </div>

               <div className="mt-5 customMd:mt-[58px]">
                  <Grid container rowSpacing={{ xs: '15px', md: '20px' }} columnSpacing="5px">
                     {blogsList?.result?.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={item?.id}>
                           <BlogCart detail={item} index={index} />
                        </Grid>
                     ))}
                  </Grid>
               </div>

               <Link href="/blogs" className="mt-10 block customMd:hidden">
                  <Button
                     variant="contained"
                     fullWidth
                     sx={{
                        height: 52,
                        borderRadius: 57,
                        fontFamily: 'almaraiBold700',
                        fontSize: 14,
                        color: 'white',
                        backgroundColor: '#65A5FC',
                        ':hover': {
                           backgroundColor: 'white',
                           color: '#65A5FC',
                        },
                     }}
                     endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                  >
                     {t('See all')}
                  </Button>
               </Link>
            </div>
         </div>
      </BlogDetailStyle>
   );
}

export default BlogTitle;

export async function getServerSideProps(context) {
   const { query, req } = context;

   const accessToken = req?.cookies?.roadGraph_accessToken;

   const blogDetail = await axiosInstance(`get-article/?lang=${context.locale}&title=${query?.blogTitle}`, {
      ...(accessToken && {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      }),
   }).then(res => res.data);

   const blogsList = await axiosInstance(`list-article/?lang=${context.locale}&ordering=-views&page_size=3`, {
      ...(accessToken && {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      }),
   }).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         blogDetail,
         blogsList,
      },
   };
}
