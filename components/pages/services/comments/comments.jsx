import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// MUI
import { IconButton } from '@mui/material';

// Icons
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

// Assets
import noImage from '@/assets/images/noImage.jpg';

// Components
import CommentsStyle from './comments.style';

const navigationStyle = {
   width: '50px',
   height: '50px',
   backgroundColor: '#65A5FC',
   color: 'white',
   border: '1px solid #65A5FC',
   transition: 'all 0.2s',
   ':hover': { backgroundColor: '#F5F8FC', color: 'black', borderColor: '#F3F3F3' },
};

function Comments({ detail }) {
   const swiperRef = useRef(null);
   const { locale } = useRouter();
   const t = useTranslations('services');

   const navigatePrev = () => {
      if (swiperRef.current) {
         swiperRef.current.swiper.slidePrev();
      }
   };

   const navigateNext = () => {
      if (swiperRef.current) {
         swiperRef.current.swiper.slideNext();
      }
   };

   return (
      <CommentsStyle>
         <div className="mb-[44px] flex items-center justify-center customMd:justify-between">
            <p
               className="font-almaraiExtraBold800 text-[28px] customMd:text-[32px]"
               data-aos="zoom-in"
               data-aos-duration="650"
            >
               {t('Customers comments')}
            </p>
            {detail?.length ? (
               <div className="hidden items-center gap-5 customMd:flex">
                  <IconButton sx={navigationStyle} onClick={navigatePrev}>
                     <ArrowRight2 size="30" {...(locale === 'en' && { className: 'rotate-180' })} />
                  </IconButton>
                  <IconButton sx={navigationStyle} onClick={navigateNext}>
                     <ArrowLeft2 size="30" {...(locale === 'en' && { className: 'rotate-180' })} />
                  </IconButton>
               </div>
            ) : null}
         </div>
         <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="mySwiper"
            ref={swiperRef}
            loop
            breakpoints={{
               0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
               },
               600: {
                  slidesPerView: 2,
                  spaceBetween: 17,
               },
               900: {
                  slidesPerView: 3,
                  spaceBetween: 17,
               },
            }}
         >
            {detail?.length ? (
               detail?.map(item => (
                  <SwiperSlide key={item?.id}>
                     <div className="rounded-[20px] border border-solid border-[#E4EAF0] p-4 customMd:p-8">
                        <div className="flex items-center gap-4 customMd:gap-7">
                           <div className="relative size-[90px] shrink-0">
                              <Image src={item?.cover || noImage} alt="cover" className="rounded-full" fill />
                           </div>
                           <div className="flex flex-col gap-[10px]">
                              <p className="font-almaraiExtraBold800 text-[20px] leading-[32px] customMd:text-[22px]">
                                 {item?.customer_name}
                              </p>
                              <p className="text-xs text-[#626E94]">{item?.title}</p>
                           </div>
                        </div>
                        <p className="mt-[21px] line-clamp-6 h-[162px] font-almaraiBold700 text-xs leading-[27px] text-[#576071]">
                           {item?.text}
                        </p>
                     </div>
                  </SwiperSlide>
               ))
            ) : (
               <p className="text-center font-almaraiBold700 text-xl customMd:text-2xl">{t('No comments')}</p>
            )}
         </Swiper>
      </CommentsStyle>
   );
}

export default Comments;
