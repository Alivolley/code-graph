import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Assets
import yellowMedal from '@/assets/images/yellowMedal.png';
import checkGreen from '@/assets/icons/checkGreen.svg';

function PriceCart({ className, index }) {
   const { locale } = useRouter();
   const t = useTranslations('prices');

   return (
      <div
         style={{ boxShadow: '-4px 20px 36.8px 0px #6666660F' }}
         className={`shrink-0 rounded-10 bg-white p-7 customMd:px-[47px] customMd:py-[30px] ${className}`}
         data-aos="fade-right"
         data-aos-duration="650"
         data-aos-delay={(index + 1) * 200}
      >
         <p className="flex h-[51px] items-center justify-center rounded-2xl bg-[#F5F8FC] font-almaraiBold700 text-xl text-[#050F2C]">
            Ultimate
         </p>
         <div className="mt-[15px] flex flex-row items-center gap-2 max-customMd:justify-center customMd:mt-5 customMd:flex-col customMd:gap-3">
            <div className="h-[52px] w-[46px] shrink-0 customMd:h-[56px] customMd:w-[50px]">
               <Image src={yellowMedal} className="size-full" alt="medal" />
            </div>
            <div className="flex items-end gap-2 leading-[61px]">
               <p className="font-almaraiExtraBold800 text-[32px] customMd:text-[45px]">{(5200).toLocaleString()}</p>
               <p className="font-almaraiBold700 text-[24px] text-[#7E8AAB] customMd:text-[30px]">
                  {locale === 'en' ? 'US$' : 'تومان'}
               </p>
            </div>
         </div>
         <div className="mb-[19px] mt-[20px] space-y-[3px] customMd:mb-[33px] customMd:mt-[10px] customMd:space-y-[19px]">
            <div className="flex items-center justify-center gap-[10px]">
               <div>
                  <Image src={checkGreen} alt="check" />
               </div>
               <p className="text-sm text-[#050F2C]">لورم ایپسوم متن ساختگی با</p>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
               <div>
                  <Image src={checkGreen} alt="check" />
               </div>
               <p className="text-sm text-[#050F2C]">لورم ایپسوم متن ساختگی با</p>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
               <div>
                  <Image src={checkGreen} alt="check" />
               </div>
               <p className="text-sm text-[#050F2C]">لورم ایپسوم متن ساختگی با</p>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
               <div>
                  <Image src={checkGreen} alt="check" />
               </div>
               <p className="text-sm text-[#050F2C]">لورم ایپسوم متن ساختگی با</p>
            </div>
         </div>

         <Button
            fullWidth
            color="customPink"
            variant="contained"
            sx={{
               height: 48,
               borderRadius: 57,
               fontSize: 16,
               fontFamily: 'almaraiBold700',
               ':hover': {
                  backgroundColor: '#B46451',
               },
            }}
         >
            {t('Try it')}
         </Button>
      </div>
   );
}

export default PriceCart;
