import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Assets
import yellowMedal from '@/assets/images/yellowMedal.png';
import checkGreen from '@/assets/icons/checkGreen.svg';

function PriceCart({ className }) {
   const { locale } = useRouter();
   const t = useTranslations('prices');

   return (
      <div
         style={{ boxShadow: '-4px 20px 36.8px 0px #6666660F' }}
         className={`shrink-0 rounded-10 bg-white p-[15px] customMd:px-[47px] customMd:py-[30px] ${className}`}
      >
         <p className="flex h-[51px] items-center justify-center rounded-2xl bg-[#F5F8FC] font-almaraiBold text-xl text-[#050F2C]">
            Ultimate
         </p>
         <div className="mt-[15px] flex flex-row items-center gap-3 customMd:mt-5 customMd:flex-col">
            <div className="h-[56px] w-[50px]">
               <Image src={yellowMedal} className="size-full" alt="medal" />
            </div>
            <div className="flex items-end gap-3 leading-[61px]">
               <p className="font-almaraiExtraBold text-[35px] customMd:text-[45px]">{(5200).toLocaleString()}</p>
               <p className="font-almaraiBold text-[28px] text-[#7E8AAB] customMd:text-[30px]">
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
               fontFamily: 'almaraiBold',
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
