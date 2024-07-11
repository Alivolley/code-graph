import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, Grid } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import wheelFirst from '@/assets/icons/wheel1.svg';
import wheelSecond from '@/assets/icons/wheel2.svg';
import pic1 from '@/assets/icons/accounting.svg';
import pic2 from '@/assets/icons/CRM.svg';
import pic3 from '@/assets/icons/HR.svg';
import pic4 from '@/assets/icons/store.svg';

// Components
import ProductCart from '@/components/templates/product-cart/product-cart';
import ArticleCart from '@/components/templates/article-cart/article-cart';
import Comments from '@/components/pages/services/comments/comments';
import Faqs from '@/components/templates/faqs/faqs';
import axiosInstance from '@/configs/axiosInstance';

// Data
import selectCategory from '@/data/categories';

function CategoryTitle({ categoryData, projects, blogsList, comments, questions }) {
   const { locale } = useRouter();
   const t = useTranslations('services');

   return (
      <div>
         <Head>
            <title>{locale === 'fa' ? 'رودگراف - خدمات' : 'RoadGraph-services'}</title>
         </Head>
         <div className="relative bg-[#F8F9FE]">
            <div className="absolute left-0 top-[315px] z-0 hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>
            <div className="absolute bottom-0 right-0 z-0 hidden xl:block">
               <Image src={wheelSecond} alt="wheel" />
            </div>

            <div
               className="relative mx-auto max-w-[1440px] px-5 pb-[67px] pt-[60px] customMd:px-[60px] customMd:pt-[158px] lg:pb-0"
               data-aos="fade-up"
            >
               <div className="flex flex-col lg:flex-row">
                  <div
                     className="order-2 mt-9 grow lg:order-1 lg:mt-0 lg:min-w-[345px] customXl:shrink-0"
                     data-aos="fade-left"
                     data-aos-duration="650"
                  >
                     <p
                        className="text-center font-almaraiExtraBold800 text-2xl leading-[40px] lg:text-start lg:text-[36px]"
                        style={{ WebkitTextStroke: '1px' }}
                     >
                        {t(categoryData?.bannerFirstLetter)}
                     </p>
                     <p
                        className="mt-3 text-center font-almaraiExtraBold800 text-2xl text-customPink lg:text-start lg:text-[36px] lg:leading-[75px]"
                        style={{ WebkitTextStroke: '1px' }}
                     >
                        {t(categoryData?.bannerSecondLetter)}
                     </p>
                  </div>

                  <div
                     className="order-1 mt-[53px] px-5 customMd:w-full lg:order-2 lg:px-0 customXl:max-w-[620px] customXl:shrink-0"
                     data-aos="zoom-in"
                     data-aos-duration="650"
                  >
                     <Image src={categoryData?.bannerPic} alt="uiux" className="size-full" />
                  </div>

                  <div className={`order-3 mt-[30px] grow lg:mt-0 lg:max-w-[319px] ${locale === 'en' ? 'ps-4' : ''}`}>
                     <p
                        className="text-sm leading-[29px] text-[#576071] lg:text-black"
                        data-aos="fade-right"
                        data-aos-duration="650"
                     >
                        {t(categoryData?.bannerDescription)}
                     </p>

                     <Link href="/" className="mt-6 block" data-aos="zoom-in" data-aos-delay="350">
                        <Button
                           color="customPink"
                           variant="contained"
                           className="!w-full lg:!w-[174px]"
                           sx={{
                              height: 52,
                              borderRadius: 57,
                              fontSize: 16,
                              ':hover': {
                                 backgroundColor: '#B46451',
                              },
                           }}
                           endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                        >
                           {t('Get started')}
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div
            className="flex max-w-[1440px] items-center gap-5 overflow-auto whitespace-nowrap px-5 py-8
             customSm:gap-12 customMd:mx-auto customMd:justify-center customMd:p-[60px] xl:gap-28"
         >
            <div className="flex flex-col items-center gap-2.5" data-aos="fade-right" data-aos-duration="650">
               <p className="font-almaraiBold700 customMd:text-5xl">+1k</p>
               <p className="text-xs text-[#576071] customMd:text-sm">courses</p>
            </div>
            <div className="h-6 w-[2px] bg-[#ebdfc9]" />
            <div
               className="flex flex-col items-center gap-2.5"
               data-aos="fade-right"
               data-aos-duration="650"
               data-aos-delay="250"
            >
               <p className="font-almaraiBold700 customMd:text-5xl">+2M</p>
               <p className="text-xs text-[#576071] customMd:text-sm">Learners</p>
            </div>
            <div className="h-6 w-[2px] bg-[#ebdfc9]" />
            <div
               className="flex flex-col items-center gap-2.5"
               data-aos="fade-right"
               data-aos-duration="650"
               data-aos-delay="500"
            >
               <p className="font-almaraiBold700 customMd:text-5xl">30M</p>
               <p className="text-xs text-[#576071] customMd:text-sm">Enrollments</p>
            </div>
            <div className="h-6 w-[2px] bg-[#ebdfc9]" />
            <div
               className="flex flex-col items-center gap-2.5"
               data-aos="fade-right"
               data-aos-duration="650"
               data-aos-delay="750"
            >
               <p className="font-almaraiBold700 customMd:text-5xl">4.5</p>
               <p className="text-xs text-[#576071] customMd:text-sm">80K Reviews</p>
            </div>
         </div>

         <div className="bg-[#F5F8FC]" dir="rtl">
            <div className="mx-auto max-w-[1440px] px-5 pb-10 customMd:px-[60px] customMd:pb-0">
               <Grid container>
                  <Grid item xs={12} md={6}>
                     <div
                        className="mx-auto mt-7 max-w-[556px] customMd:mx-0 customMd:mt-14"
                        data-aos="zoom-in"
                        data-aos-offset="300"
                        data-aos-duration="850"
                     >
                        <Image src={categoryData?.introducePic} alt="uiux" className="size-full" />
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <div className="mt-7 customMd:mt-20" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                        <div
                           className="relative ps-[30px] font-almaraiExtraBold800 text-2xl leading-[46px] text-[#EF6D33] customMd:text-[40px] customMd:leading-[75px]"
                           data-aos="fade-right"
                           data-aos-delay="350"
                           data-aos-duration="650"
                        >
                           <p style={{ WebkitTextStroke: '1px' }}>{t(categoryData?.introduceFirstLetter)}</p>
                           <p style={{ WebkitTextStroke: '1px' }}>{t(categoryData?.introduceSecondLetter)}</p>
                           <p
                              className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]"
                              data-aos="fade-right"
                              data-aos-duration="650"
                              data-aos-delay="200"
                           />
                        </div>
                        <p
                           className="mt-[18px] text-sm leading-[32px] text-[#576071] customMd:text-base customMd:leading-[45px]"
                           data-aos="fade-right"
                           data-aos-delay="450"
                           data-aos-duration="650"
                        >
                           {t(categoryData?.introduceDescription)}
                        </p>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>

         <div className="mx-auto max-w-[1440px] px-5 py-[27px] customMd:px-[60px] customMd:py-[74px]">
            <div
               className="mt-3 flex flex-nowrap items-center justify-between overflow-auto rounded-3xl xl:overflow-visible"
               data-aos="zoom-in"
               data-aos-duration="650"
            >
               <div
                  className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]"
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay="200"
               >
                  <div className="size-16">
                     <Image src={pic4} alt="introduce" className="size-full" />
                  </div>
                  <h3 className="text-center font-almaraiBold700 text-lg">Online shop</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div
                  className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]"
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay="400"
               >
                  <div className="size-16">
                     <Image src={pic3} alt="introduce" className="size-full" />
                  </div>
                  <h3 className="text-center font-almaraiBold700 text-lg">HRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div
                  className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]"
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay="600"
               >
                  <div className="size-16">
                     <Image src={pic2} alt="introduce" className="size-full" />
                  </div>
                  <h3 className="text-center font-almaraiBold700 text-lg">CRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div
                  className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]"
                  data-aos="fade-right"
                  data-aos-duration="650"
                  data-aos-delay="800"
               >
                  <div className="size-16">
                     <Image src={pic1} alt="introduce" className="size-full" />
                  </div>
                  <h3 className="text-center font-almaraiBold700 text-lg">Accounting</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>
            </div>
         </div>

         <div className="bg-[#F5F8FC]">
            <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-[30px] customMd:px-[103px] customMd:py-[60px]">
               <p
                  className="text-center text-xs text-[#3C4252] customMd:text-base"
                  data-aos="zoom-in"
                  data-aos-duration="650"
               >
                  {t('We value strong relationships and have seen their benefits to our business')}
               </p>
               <h2
                  className="mx-auto mt-3 max-w-[830px] text-center font-almaraiExtraBold800 text-2xl leading-[42px]
                   text-[#050F2C] customMd:text-[32px] customMd:leading-[56px]"
                  data-aos="zoom-in"
                  data-aos-duration="650"
                  data-aos-delay="250"
               >
                  {t('Completed projects')}
               </h2>

               <div className="mt-[50px] flex flex-nowrap items-center gap-5 overflow-auto customMd:overflow-hidden">
                  {projects?.total_objects ? (
                     projects?.result?.map((item, index) => (
                        <ProductCart
                           className="w-[240px] customMd:max-w-[400px] customMd:flex-1"
                           key={item?.id}
                           detail={item}
                           index={index}
                        />
                     ))
                  ) : (
                     <p className="mx-auto py-20 text-center text-base customMd:text-2xl">{t('No projects yet !!!')}</p>
                  )}
               </div>

               <Link
                  href="/allProducts"
                  className="mt-[50px] flex justify-center lg:mx-auto lg:w-fit"
                  data-aos="zoom-in"
                  data-aos-duration="650"
               >
                  <Button
                     color="customPink"
                     variant="contained"
                     className="!w-full lg:!w-[174px]"
                     sx={{
                        height: 52,
                        borderRadius: 57,
                        fontSize: 16,
                        ':hover': {
                           backgroundColor: '#B46451',
                        },
                     }}
                     endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                  >
                     {t('Show all')}
                  </Button>
               </Link>
            </div>
         </div>

         <div className="bg-white" dir="rtl">
            <div className="mx-auto mt-[30px] max-w-[1440px] px-5 pb-10 customMd:mt-20 customMd:px-[60px] customMd:pb-0">
               <Grid container>
                  <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                     <div className="mt-10" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                        <div
                           className="relative ps-[30px] font-almaraiExtraBold800 text-2xl leading-[46px] text-[#EF6D33] customMd:text-[40px] customMd:leading-[75px]"
                           data-aos="fade-left"
                           data-aos-delay="350"
                           data-aos-duration="650"
                        >
                           <p className="text-[#65A5FC]" style={{ WebkitTextStroke: '1px' }}>
                              تفاوت
                           </p>
                           <p
                              className="text-xl leading-[46px] customMd:text-[34px] customMd:leading-[75px]"
                              style={{ WebkitTextStroke: '1px' }}
                           >
                              ما برای یک کسب و کار ایجاد می کنیم
                           </p>
                           <p
                              className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]"
                              data-aos="fade-left"
                              data-aos-duration="650"
                              data-aos-delay="200"
                           />
                        </div>
                        <p
                           className="mt-[18px] text-sm leading-[32px] text-[#576071] customMd:text-base customMd:leading-[45px]"
                           data-aos="fade-left"
                           data-aos-delay="400"
                           data-aos-duration="650"
                        >
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                           چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                           مورد نیاز و کاربردهای لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                           از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                           برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                        </p>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                     <div
                        className="mx-auto max-w-[530px]"
                        data-aos="zoom-in"
                        data-aos-offset="300"
                        data-aos-duration="850"
                     >
                        <Image src={categoryData?.introduce2Pic} alt="uiux" className="size-full" />
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>

         <div className="bg-[#F5F8FC]">
            <div className="mx-auto max-w-[1440px] px-5 py-[30px] customMd:px-[103px] customMd:py-[50px]">
               <h2
                  className="text-center font-almaraiExtraBold800 text-2xl leading-[42px] text-[#050F2C] customMd:text-[32px] customMd:leading-[56px]"
                  data-aos="zoom-in"
                  data-aos-duration="650"
               >
                  {t('Related articles')}
               </h2>

               <div className="mt-[30px] flex flex-nowrap items-center gap-5 overflow-auto customMd:overflow-hidden">
                  {blogsList?.total_objects ? (
                     blogsList?.result?.map((item, index) => <ArticleCart key={item?.id} detail={item} index={index} />)
                  ) : (
                     <p className="mx-auto py-20 text-center text-base customMd:text-2xl">{t('No blogs yet !!!')}</p>
                  )}
               </div>

               <Link
                  href="/blogs"
                  className="mt-[30px] flex justify-center lg:mx-auto lg:w-fit"
                  data-aos="zoom-in"
                  data-aos-duration="650"
               >
                  <Button
                     color="customPink"
                     variant="contained"
                     className="!w-full lg:!w-[174px]"
                     sx={{
                        height: 52,
                        borderRadius: 57,
                        fontSize: 16,
                        ':hover': {
                           backgroundColor: '#B46451',
                        },
                     }}
                     endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                  >
                     {t('Show all')}
                  </Button>
               </Link>
            </div>
         </div>

         <div className="bg-white">
            <div className="mx-auto max-w-[1440px] px-5 py-[46px] customMd:px-[60px]">
               <Comments detail={comments} />
            </div>
         </div>

         <Faqs detail={questions} />
      </div>
   );
}

export default CategoryTitle;

export async function getStaticPaths() {
   return {
      paths: [
         { params: { categoryTitle: 'Providing a platform' } },
         { params: { categoryTitle: 'Branding' } },
         { params: { categoryTitle: 'Design 2d & 3d' } },
         { params: { categoryTitle: 'UIUX design' } },
         { params: { categoryTitle: 'Web development' } },
         { params: { categoryTitle: 'ارائه پلتفرم آماده' } },
         { params: { categoryTitle: 'برند سازی' } },
         { params: { categoryTitle: 'طراحی ۲بعدی و ۳ بعدی' } },
         { params: { categoryTitle: 'طراحی UIUX' } },
         { params: { categoryTitle: 'طراحی و توسعه سایت' } },
      ],
      fallback: 'blocking',
   };
}

export async function getStaticProps(context) {
   const categoryName = context?.params?.categoryTitle;

   const categoryData = selectCategory(categoryName);

   if (!categoryData) {
      return {
         notFound: true,
      };
   }

   const projects = await axiosInstance(
      `list-project/?lang=${context.locale}&category=${categoryName}&page_size=4`
   ).then(res => res.data);

   const blogsList = await axiosInstance(
      `list-article/?lang=${context.locale}&category=${categoryName}&page_size=3`
   ).then(res => res.data);

   const comments = await axiosInstance(
      `accounts/customer-comments/?category=${categoryName}&lang=${context.locale}`
   ).then(res => res.data);

   const questions = await axiosInstance(`accounts/questions/?random_faq=true&lang=${context.locale}`).then(
      res => res.data
   );

   return {
      props: {
         categoryData,
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         projects,
         blogsList,
         comments,
         questions,
      },
      revalidate: 300,
   };
}
