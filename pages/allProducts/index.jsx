import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import wheelFirst from '@/assets/icons/wheel3.svg';
import bannerPic from '@/assets/images/allProductsPic.png';

function AllProducts() {
   const t = useTranslations('allProducts');
   const { locale } = useRouter();

   return (
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
   );
}

export default AllProducts;

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
