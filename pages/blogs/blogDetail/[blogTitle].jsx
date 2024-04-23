/* eslint-disable react/no-danger */
/* eslint-disable react/no-danger-with-children */
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Button, Grid } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import bannerTestPic from '@/assets/images/bannerTestPic.png';
import axiosInstance from '@/configs/axiosInstance';

// Components
import BlogCart from '@/components/pages/blogs/blog-cart/blog-cart';
import BlogDetailStyle from './blogDetail.style';

function BlogTitle({ blogDetail, blogsList }) {
   const { locale } = useRouter();
   const t = useTranslations('blogs');

   return (
      <BlogDetailStyle>
         <div className="relative mx-auto mt-[110px] max-w-[1440px] px-5 customMd:mt-[237px] customMd:px-[60px]">
            <div className="flex items-center gap-[10px]">
               <p className="font-almaraiBold text-sm uppercase text-[#333333]">{blogDetail?.category}</p>
               <p className="text-sm text-[#999999]">{blogDetail?.created_at}</p>
            </div>
            <p className="mt-[30px] font-almaraiBold text-[24px] leading-[38px] text-[#333333] customMd:text-[40px] customMd:leading-[64px]">
               {blogDetail?.title}
            </p>
            <div className="relative mt-7 aspect-[1.5/1] w-full customMd:mt-[51px] customMd:aspect-[2/1]">
               <Image src={bannerTestPic} alt="banner" fill className="rounded-[20px] object-cover" />
            </div>
            <div
               className="mt-5 text-base customMd:mt-[70px]"
               dangerouslySetInnerHTML={{ __html: blogDetail?.description }}
               id="content"
            />
         </div>
         <div className="mt-10 bg-[#F5F8FC] customMd:mt-[76px]">
            <div className="relative mx-auto max-w-[1440px] px-5 py-[30px] customMd:p-[60px]">
               <div className="flex items-center justify-center customMd:justify-between">
                  <p className="font-almaraiBold text-2xl leading-[64px] text-[#333333] customMd:text-[48px]">
                     {t('Popular posts')}
                  </p>
                  <Link href="/blogs" className="hidden customMd:block">
                     <Button
                        variant="contained"
                        sx={{
                           height: 52,
                           width: 222,
                           borderRadius: 57,
                           fontFamily: 'almaraiBold',
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
                     {blogsList?.result?.map(item => (
                        <Grid item xs={12} sm={6} md={4} key={item?.id}>
                           <BlogCart detail={item} />
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
                        fontFamily: 'almaraiBold',
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

export async function getStaticPaths() {
   return {
      paths: [{ params: { blogTitle: '' } }],
      fallback: 'blocking',
   };
}

export async function getStaticProps(context) {
   const blogDetail = await axiosInstance(
      `get-article/?lang=${context.locale}&title=${context?.params?.blogTitle}`
   ).then(res => res.data);

   const blogsList = await axiosInstance(`list-article/?lang=${context.locale}&ordering=-views&page_size=3`).then(
      res => res.data
   );

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         blogDetail,
         blogsList,
      },
      revalidate: 3600,
   };
}
