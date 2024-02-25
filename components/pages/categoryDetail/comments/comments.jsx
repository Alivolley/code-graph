import { useRouter } from 'next/router';
import { useRef } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// MUI
import { IconButton } from '@mui/material';

// Icons
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

// Components
import Image from 'next/image';
import CommentsStyle from './comments.style';

// Assets
import userPic from '@/assets/images/userPic.jpg';

const navigationStyle = {
   width: '50px',
   height: '50px',
   backgroundColor: '#65A5FC',
   color: 'white',
   border: '1px solid #65A5FC',
   transition: 'all 0.2s',
   ':hover': { backgroundColor: '#F5F8FC', color: 'black', borderColor: '#F3F3F3' },
};

function Comments() {
   const array = [0, 1, 2, 3, 4, 5, 6, 7];
   const swiperRef = useRef(null);
   const { locale } = useRouter();

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
            <p className="font-almaraiExtraBold text-[28px] customMd:text-[32px]">نظرات مشتریان</p>
            <div className="hidden items-center gap-5 customMd:flex">
               <IconButton sx={navigationStyle} onClick={navigatePrev}>
                  <ArrowRight2 size="30" {...(locale === 'en' && { className: 'rotate-180' })} />
               </IconButton>
               <IconButton sx={navigationStyle} onClick={navigateNext}>
                  <ArrowLeft2 size="30" {...(locale === 'en' && { className: 'rotate-180' })} />
               </IconButton>
            </div>
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
            {array?.map(item => (
               <SwiperSlide key={item}>
                  <div className="rounded-[20px] border border-solid border-[#E4EAF0] p-4 customMd:p-8">
                     <div className="flex items-center gap-4 customMd:gap-7">
                        <div className="size-[90px] shrink-0">
                           <Image src={userPic} alt="user" className="size-full rounded-full" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                           <p className="font-almaraiExtraBold text-[20px] leading-[32px] customMd:text-[22px]">
                              شایان ازقندی
                           </p>
                           <p className="text-xs text-[#626E94]">مدیر تولیدی یلفان</p>
                        </div>
                     </div>
                     <p className="mt-[21px] font-almaraiBold text-xs leading-[27px] text-[#576071]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردهای
                     </p>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </CommentsStyle>
   );
}

export default Comments;
