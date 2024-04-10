import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Button, IconButton, Pagination } from '@mui/material';

// Icons
import { ArrowLeft, DiscountShape, SearchNormal1, ShoppingCart, Truck, User } from 'iconsax-react';

// Assets
import wheelFirst from '@/assets/icons/wheel3.svg';
import bannerPic from '@/assets/images/allProductsPic.png';

// Components
import ProductCart from '@/components/templates/product-cart/product-cart';
import Faqs from '@/components/templates/faqs/faqs';

const categoryButtonStyle = {
   display: 'flex',
   flexDirection: 'column',
   gap: '8px',
   ':hover': {
      backgroundColor: 'white',
      boxShadow: '0px 11px 44px 23px #7E8AAB29',
   },
};

function AllProducts() {
   const [chosenCategory, setChosenCategory] = useState('');
   const t = useTranslations('allProducts');
   const { locale, push, query } = useRouter();

   const { register, handleSubmit, setValue } = useForm({
      defaultValues: {
         searchValue: '',
      },
      mode: 'onSubmit',
   });

   const searchHandler = data => {
      if (data?.searchValue !== query?.projectName) {
         push(`/allProducts?projectName=${data.searchValue}&page=1`, undefined, { scroll: false });
      }
   };

   useEffect(() => {
      if (query?.projectName) {
         setValue('searchValue', query?.projectName);
      } else {
         setValue('searchValue', '');
      }
   }, [query]);

   const changeCategoryHandler = cat => {
      if (cat !== chosenCategory) {
         setChosenCategory(cat);
         if (cat === '') {
            push(`/allProducts`, undefined, { scroll: false });
         } else if (cat) {
            push(`/allProducts?category=${cat}&page=1`, undefined, { scroll: false });
         }
      }
   };

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
         <div className="relative bg-[#F8F9FE]">
            <div className="absolute bottom-0 left-0 z-[0] hidden xl:block">
               <Image src={wheelFirst} alt="wheel" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-5 pb-[67px] pt-[100px] customMd:px-[60px] customMd:pb-0 customMd:pt-[146px]">
               <div className="flex flex-col gap-[31px] lg:flex-row lg:gap-[51px]" dir="rtl">
                  <div className="flex-1">
                     <Image src={bannerPic} alt="banner" className="size-full" />
                  </div>
                  <div className="flex-1 lg:mt-[45px]" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                     <div className="text-center font-almaraiExtraBold lg:text-start">
                        <h1 className="text-[22px] text-[#FD8266] lg:text-[24px]">{t('Letter1')}</h1>
                        <h1 className="mt-4 text-[28px] leading-[45px] lg:text-[36px]">{t('Letter2')}</h1>
                     </div>
                     <p className="mt-6 text-center text-sm leading-[27px] text-[#576071] lg:text-start lg:text-base lg:leading-[40px]">
                        {t('lorem')}
                     </p>
                     <Link href="/" className="mt-6 block lg:w-fit">
                        <Button
                           color="customPink"
                           variant="contained"
                           className="!w-full lg:!w-[222px]"
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
                           {t('Get free advice')}
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         <div className="mx-auto max-w-[1440px] px-5 pb-[59px] pt-[53px] customMd:px-[60px]">
            <p className="text-center text-[18px] text-[#050F2C]">{t('What is the subject of your search?')}</p>
            <p className="mb-[20px] mt-[18px] text-center text-xs leading-[22px] text-[#626E94] customMd:text-sm">
               {t('Search for the topic you want or choose from the categories below')}
            </p>
            <form
               className="mx-auto flex h-[50px] max-w-[534px] items-center rounded-[60px] border border-solid border-[#E4EAF0] bg-[#F5F8FC] px-5"
               onSubmit={handleSubmit(searchHandler)}
            >
               <IconButton className="!shrink-0" type="submit">
                  <SearchNormal1 size="20" color="#7E8AAB" />
               </IconButton>
               <input
                  type="text"
                  className="h-full grow border-none bg-transparent font-almaraiRegular outline-none placeholder:text-[#7E8AAB]"
                  placeholder={t('Search topic')}
                  {...register('searchValue', { required: { value: true } })}
               />
            </form>

            <p className="mt-[47px] flex h-12 items-center rounded-[47px] bg-[#FD8266] px-8 font-almaraiBold text-base text-white customMd:h-16 customMd:text-[20px]">
               {t('Category of projects')}
            </p>
            <div className="mt-6 flex flex-wrap items-center border-b border-solid border-[#E4EAF0]">
               <Button
                  sx={{
                     ...categoryButtonStyle,
                     ...(chosenCategory === '' && {
                        backgroundColor: 'white',
                        boxShadow: '0px 11px 44px 23px #7E8AAB29',
                     }),
                  }}
                  className="!h-[85px] !w-1/2 !border-e !border-solid !border-[#E4EAF0] customSm:!h-[113px] customSm:!flex-1"
                  onClick={() => changeCategoryHandler('')}
               >
                  <Truck size="28" color="#d14d72" variant="TwoTone" />
                  <p className="leading-[18px] text-[#050F2C]">{t('All')}</p>
               </Button>
               <Button
                  sx={{
                     ...categoryButtonStyle,
                     ...(chosenCategory === 'website' && {
                        backgroundColor: 'white',
                        boxShadow: '0px 11px 44px 23px #7E8AAB29',
                     }),
                  }}
                  className="!h-[85px] !w-1/2 !border-e !border-solid !border-[#E4EAF0] customSm:!h-[113px] customSm:!flex-1"
                  onClick={() => changeCategoryHandler('website')}
               >
                  <User size="28" color="#d14d72" variant="TwoTone" />
                  <p className="leading-[18px] text-[#050F2C]">{t('Website')}</p>
               </Button>
               <Button
                  sx={{
                     ...categoryButtonStyle,
                     ...(chosenCategory === 'uiux' && {
                        backgroundColor: 'white',
                        boxShadow: '0px 11px 44px 23px #7E8AAB29',
                     }),
                  }}
                  className="!h-[85px] !w-1/2 !border-e !border-solid !border-[#E4EAF0] customSm:!h-[113px] customSm:!flex-1"
                  onClick={() => changeCategoryHandler('uiux')}
               >
                  <ShoppingCart size="28" color="#d14d72" variant="TwoTone" />
                  <p className="leading-[18px] text-[#050F2C]">{t('UiUx')}</p>
               </Button>
               <Button
                  sx={{
                     ...categoryButtonStyle,
                     ...(chosenCategory === 'graphic' && {
                        backgroundColor: 'white',
                        boxShadow: '0px 11px 44px 23px #7E8AAB29',
                     }),
                  }}
                  className="!h-[85px] !w-1/2 customSm:!h-[113px] customSm:!flex-1"
                  onClick={() => changeCategoryHandler('graphic')}
               >
                  <DiscountShape size="28" color="#d14d72" variant="TwoTone" />
                  <p className="leading-[18px] text-[#050F2C]">{t('Graphic')}</p>
               </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-[20px] gap-y-[30px] customMd:mt-[74px] customMd:gap-x-[32px] customMd:gap-y-[45px] customMd:px-[43px]">
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
               <ProductCart className="w-[240px] border border-solid border-[#E4EAF0] !bg-[#F5F8FC] customMd:w-[284px]" />
            </div>

            <div className="mt-10 flex items-center justify-center">
               <Pagination
                  count={4}
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
         </div>

         <Faqs />
      </div>
   );
}

export default AllProducts;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
      revalidate: 3600,
   };
}
