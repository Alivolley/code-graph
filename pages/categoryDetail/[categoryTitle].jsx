import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, Grid } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import mainPic from '@/assets/images/uiuxPic.png';
import mainPic2 from '@/assets/images/uiuxPic2.png';
import mainPic3 from '@/assets/images/uiuxPic3.png';
import wheelFirst from '@/assets/icons/wheel1.svg';
import wheelSecond from '@/assets/icons/wheel2.svg';
import pic1 from '@/assets/icons/accounting.svg';
import pic2 from '@/assets/icons/CRM.svg';
import pic3 from '@/assets/icons/HR.svg';
import pic4 from '@/assets/icons/store.svg';

// Components
import ProductCart from '@/components/templates/product-cart/product-cart';
import ArticleCart from '@/components/templates/article-cart/article-cart';

function CategoryTitle() {
   const { locale } = useRouter();
   const t = useTranslations('categoryDetail');

   return (
      <div>
         <div className="relative bg-[#F8F9FE]">
            <div className="absolute left-0 top-[315px] z-[0] hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>
            <div className="absolute bottom-0 right-0 z-[0] hidden xl:block">
               <Image src={wheelSecond} alt="wheel" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-5 pb-[67px] pt-[91px] customMd:px-[60px] customMd:pt-[158px] lg:pb-0">
               <div className="flex flex-col lg:flex-row">
                  <div className="order-2 mt-9 grow lg:order-1 lg:mt-0 lg:min-w-[345px] customXl:shrink-0">
                     <p className="text-center font-almaraiExtraBold text-2xl leading-[40px] lg:text-[36px]">
                        {t('User experience design')}
                     </p>
                     <p className="mt-3 text-center font-almaraiExtraBold text-2xl text-[#FD8266] lg:text-[36px] lg:leading-[75px]">
                        {t('User interface design')}
                     </p>
                  </div>

                  <div className="order-1 mt-[53px] px-5 lg:order-2 lg:px-0 customXl:shrink-0">
                     <Image src={mainPic} alt="uiux" className="size-full" />
                  </div>

                  <div className={`order-3 mt-[30px] grow lg:mt-0 lg:max-w-[319px] ${locale === 'en' ? 'ps-4' : ''}`}>
                     <p className="text-sm leading-[29px] text-[#576071] lg:text-black">{t('lorem')}</p>

                     <Link href="/" className="mt-6 block">
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
         <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-5 px-5 py-8 customSm:gap-12 customMd:px-[60px] customMd:py-20 xl:gap-28">
            <div className="flex flex-col items-center gap-2.5">
               <p className="font-almaraiBold customMd:text-5xl">+1k</p>
               <p className="text-xs text-[#576071] customMd:text-sm">courses</p>
            </div>
            <div className="h-6 w-[2px] bg-[#ebdfc9]" />
            <div className="flex flex-col items-center gap-2.5">
               <p className="font-almaraiBold customMd:text-5xl">+2M</p>
               <p className="text-xs text-[#576071] customMd:text-sm">Learners</p>
            </div>
            <div className="h-6 w-[2px] bg-[#ebdfc9]" />
            <div className="flex flex-col items-center gap-2.5">
               <p className="font-almaraiBold customMd:text-5xl">30M</p>
               <p className="text-xs text-[#576071] customMd:text-sm">Enrollments</p>
            </div>
            <div className="h-6 w-[2px] bg-[#ebdfc9]" />
            <div className="flex flex-col items-center gap-2.5">
               <p className="font-almaraiBold customMd:text-5xl">4.5</p>
               <p className="text-xs text-[#576071] customMd:text-sm">80K Reviews</p>
            </div>
         </div>

         <div className="bg-[#F5F8FC]" dir="rtl">
            <div className="mx-auto max-w-[1440px] px-5 pb-10 customMd:px-[60px] customMd:pb-0">
               <Grid container>
                  <Grid item xs={12} md={6}>
                     <div className="mx-auto max-w-[556px] customMd:mx-0">
                        <Image src={mainPic2} alt="uiux" className="size-full" />
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <div className="mt-10 customMd:mt-20" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                        <div className="relative ps-[30px] font-almaraiExtraBold text-2xl leading-[46px] text-[#EF6D33] customMd:text-[40px] customMd:leading-[75px]">
                           <p>طراحی و تجربه</p>
                           <p>رابط کاربــــــــــــــــــــــــری</p>
                           <p className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]" />
                        </div>
                        <p className="mt-[18px] text-sm leading-[32px] text-[#576071] customMd:text-base customMd:leading-[45px]">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                           چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                           مورد نیاز و کاربردهای لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                           از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                           برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                        </p>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>

         <div className="mx-auto max-w-[1440px] px-5 py-[27px] customMd:px-[60px] customMd:py-[74px]">
            <div className="mt-3 flex flex-nowrap items-center justify-between overflow-auto rounded-3xl">
               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic4} alt="introduce" />
                  <h3 className="font-almaraiBold text-lg">Online shop</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic3} alt="introduce" />
                  <h3 className="font-almaraiBold text-lg">HRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic2} alt="introduce" />
                  <h3 className="font-almaraiBold text-lg">CRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>

               <div className="flex min-w-[215px] max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic1} alt="introduce" />
                  <h3 className="font-almaraiBold text-lg">Accounting</h3>
                  <p className="text-center text-sm text-[#6F778A]">{t('lorem2')}</p>
               </div>
            </div>
         </div>

         <div className="bg-[#F5F8FC]">
            <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-[30px] customMd:px-[103px] customMd:py-[60px]">
               <p className="text-center text-xs text-[#3C4252] customMd:text-base">
                  ما برای روابط قوی ارزش زیادی قائل هستیم و مزایای آنها را برای کسب و کارمان دیده ایم
               </p>
               <h2 className="mx-auto mt-3 max-w-[830px] text-center font-almaraiExtraBold text-2xl leading-[42px] text-[#050F2C] customMd:text-[32px] customMd:leading-[56px]">
                  پروژه های انجام شده
               </h2>

               <div className="mt-[50px] flex flex-nowrap items-center gap-5 overflow-auto">
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
               </div>

               <Link href="/" className="mt-[50px] flex justify-center lg:mx-auto lg:w-fit">
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

         <div className="bg-white" dir="rtl">
            <div className="mx-auto mt-[30px] max-w-[1440px] px-5 pb-10 customMd:mt-20 customMd:px-[60px] customMd:pb-0">
               <Grid container>
                  <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                     <div className="mt-10" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                        <div className="relative ps-[30px] font-almaraiExtraBold text-2xl leading-[46px] text-[#EF6D33] customMd:text-[40px] customMd:leading-[75px]">
                           <p className="text-[#65A5FC]">تفاوت</p>
                           <p className="text-xl leading-[46px] customMd:text-[34px] customMd:leading-[75px]">
                              ما برای یک کسب و کار ایجاد می کنیم
                           </p>
                           <p className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]" />
                        </div>
                        <p className="mt-[18px] text-sm leading-[32px] text-[#576071] customMd:text-base customMd:leading-[45px]">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                           چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                           مورد نیاز و کاربردهای لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                           از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                           برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                        </p>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                     <div className="mx-auto max-w-[530px]">
                        <Image src={mainPic3} alt="uiux" className="size-full" />
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>

         <div className="bg-[#F5F8FC]">
            <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-[30px] customMd:px-[103px] customMd:py-[50px]">
               <h2 className="text-center font-almaraiExtraBold text-2xl leading-[42px] text-[#050F2C] customMd:text-[32px] customMd:leading-[56px]">
                  مقالات مرتبط
               </h2>

               <div className="mt-[30px] flex flex-nowrap items-center gap-5 overflow-auto">
                  <ArticleCart />
                  <ArticleCart />
                  <ArticleCart />
               </div>

               <Link href="/" className="mt-[30px] flex justify-center lg:mx-auto lg:w-fit">
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
   );
}

export default CategoryTitle;

export async function getStaticPaths() {
   return {
      paths: [
         { params: { categoryTitle: 'uiux' } },
         { params: { categoryTitle: 'website' } },
         { params: { categoryTitle: 'graphic' } },
         { params: { categoryTitle: 'design' } },
      ],
      fallback: 'blocking',
   };
}

export async function getStaticProps(context) {
   try {
      return {
         props: {
            messages: (await import(`@/messages/${context.locale}.json`)).default,
         },
         revalidate: 3600,
      };
   } catch (error) {
      return {
         props: {
            messages: (await import(`@/messages/${context.locale}.json`)).default,
            error: error?.message,
         },
      };
   }
}
