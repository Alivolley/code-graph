import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// MUI
import { IconButton, Tab, Tabs, Pagination, Grid } from '@mui/material';

// Icons
import { SearchNormal1 } from 'iconsax-react';

// Assets
import wheelFirst from '@/assets/icons/blogsWheel1.svg';
import wheelSecond from '@/assets/icons/wheel2.svg';

// Components
import BlogCart from '@/components/pages/blogs/blog-cart/blog-cart';
import Request from '@/components/templates/request/request';
import axiosInstance from '@/configs/axiosInstance';

function Blogs({ blogsList }) {
   const t = useTranslations('blogs');
   const [tabsValue, setTabsValue] = useState('');
   const { push, query } = useRouter();

   const searchHandler = e => {
      e.preventDefault();
      const inputValue = e?.target?.[1]?.value?.trim();

      if (inputValue && query?.search !== inputValue) {
         push(`/blogs?search=${inputValue}`, undefined, { scroll: false });
      }
   };

   const changeCategoryHandler = cat => {
      if (cat !== tabsValue) {
         setTabsValue(cat);
         if (cat === '') {
            push(`/blogs`, undefined, { scroll: false });
         } else if (cat) {
            push(`/blogs?category=${cat}`, undefined, { scroll: false });
         }
      }
   };

   useEffect(() => {
      if (query?.category) {
         setTabsValue(query?.category);
      }
   }, [query]);

   const changePageHandler = (e, newValue) => {
      push({
         query: {
            ...query,
            page: newValue,
         },
      });
   };

   return (
      <div>
         <div className="relative bg-[#E7ECFF]">
            <div className="absolute bottom-0 left-0 z-0 hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>
            <div className="absolute bottom-0 right-0 z-0 hidden xl:block">
               <Image src={wheelSecond} alt="wheel" />
            </div>

            <div
               className="relative mx-auto max-w-[1440px] px-5 pb-[50px] pt-[110px] customMd:px-[60px] customMd:pb-[70px] customMd:pt-[160px]"
               data-aos="fade-up"
            >
               <p className="text-center text-sm text-[#666666] customMd:text-base">{t('Our blogs')}</p>
               <p className="py-4 text-center font-almaraiExtraBold800 text-3xl text-[#333333] lg:py-0 lg:text-[40px] lg:leading-[64px]">
                  {t('Find our all blogs from here')}
               </p>
               <p className="mx-auto max-w-[756px] text-center text-sm text-[#666666] lg:mt-5 lg:text-base">
                  {t('blogs description')}
               </p>
            </div>
         </div>
         <div className="relative mx-auto mb-[45px] mt-[-34px] max-w-[1440px] px-5 customMd:mb-[52px] customMd:px-[60px]">
            <form
               onSubmit={searchHandler}
               className="mx-auto flex h-[68px] max-w-[916px] items-center rounded-[60px] border border-solid border-[#E4EAF0] bg-white px-3"
               data-aos="fade-up"
               data-aos-delay="150"
            >
               <IconButton type="submit">
                  <SearchNormal1 color="#7E8AAB" />
               </IconButton>
               <input
                  type="text"
                  className="grow border-none bg-transparent px-2 py-3 font-almaraiRegular400 text-base outline-none placeholder:text-sm placeholder:text-[#7E8AAB]"
                  placeholder={t('Search topic')}
               />
            </form>
            <div
               className="mt-[30px] flex items-center justify-center border-b border-solid border-[#E4EAF0]"
               data-aos="fade-up"
               data-aos-delay="300"
               data-aos-offset="300"
            >
               <Tabs value={tabsValue} onChange={(e, newValue) => changeCategoryHandler(newValue)} variant="scrollable">
                  <Tab label={t('All articles')} value="" />
                  <Tab label={t('Newest')} value="newest" />
                  <Tab label={t('Frontend blogs')} value="frontend" />
                  <Tab label={t('Backend blogs')} value="backend" />
                  <Tab label={t('UiUx blogs')} value="uiux" />
                  <Tab label={t('Graphic blogs')} value="graphic" />
               </Tabs>
            </div>

            <div className="mt-[30px]">
               <Grid container rowSpacing={{ xs: '15px', md: '20px' }} columnSpacing="5px">
                  {blogsList?.total_objects ? (
                     blogsList?.result?.map(item => (
                        <Grid item xs={12} sm={6} md={4} key={item?.id} data-aos="fade-up" data-aos-offset="300">
                           <BlogCart detail={item} />
                        </Grid>
                     ))
                  ) : (
                     <p
                        className="mx-auto py-20 text-center text-base customMd:text-2xl"
                        data-aos="fade-up"
                        data-aos-offset="300"
                     >
                        {t('No blogs yet !!!')}
                     </p>
                  )}
               </Grid>
            </div>

            {blogsList?.total_pages > 1 && (
               <div className="mt-[55px] flex items-center justify-center">
                  <Pagination
                     count={blogsList?.total_pages}
                     color="primary"
                     onChange={changePageHandler}
                     page={Number(query?.page) || 1}
                     sx={{
                        '& .MuiButtonBase-root': {
                           border: '1px solid #E4EAF0',
                           color: '#7E8AAB',
                        },
                        '& .Mui-selected': {
                           color: 'white !important',
                        },
                     }}
                  />
               </div>
            )}
         </div>
         <div>
            <Request />
         </div>
      </div>
   );
}

export default Blogs;

export async function getServerSideProps(context) {
   const { query, req } = context;

   const accessToken = req?.cookies?.roadGraph_accessToken;

   let queryString = `list-article/?lang=${context.locale}`;

   if (query?.category) {
      if (query?.category === 'newest') {
         queryString += `&ordering=-created_at`;
      } else {
         queryString += `&category=${query.category}`;
      }
   }
   if (query?.page) {
      queryString += `&page=${query.page}`;
   }
   if (query?.search) {
      queryString += `&search=${query.search}`;
   }

   const blogsList = await axiosInstance(queryString, {
      ...(accessToken && {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      }),
   }).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         blogsList,
      },
   };
}
