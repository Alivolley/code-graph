import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import mainPic from '@/assets/images/uiuxPic.png';
import wheelFirst from '@/assets/icons/wheel1.svg';
import wheelSecond from '@/assets/icons/wheel2.svg';

function CategoryTitle() {
   const { locale } = useRouter();
   const t = useTranslations('categoryDetail');

   return (
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
