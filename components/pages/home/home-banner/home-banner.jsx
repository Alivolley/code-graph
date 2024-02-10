import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { ArrowLeft, DocumentText } from 'iconsax-react';

// Assets
import bannerPic from '@/assets/images/bannerPic.png';
import pic1 from '@/assets/icons/accounting.svg';
import pic2 from '@/assets/icons/CRM.svg';
import pic3 from '@/assets/icons/HR.svg';
import pic4 from '@/assets/icons/store.svg';

function HomeBanner() {
   return (
      <div style={{ background: 'linear-gradient(80.33deg, #E6EBFA 7.96%, #F2F5FC 43.29%, #FFFFFF 98.56%)' }}>
         <div className="mx-auto max-w-[1440px] p-5 pt-[91px] customMd:px-[60px] customMd:pt-[100px]">
            <div className="flex">
               <div className="grow">
                  <Image src={bannerPic} alt="banner" className="size-full" />
               </div>
               <div className="mt-[70px] w-[450px]">
                  <div className="font-bold leading-[73px]">
                     <div className="flex items-center gap-3">
                        <h1 className="text-5xl text-[#FD8266]">زندگی کاری</h1>
                        <h1 className="text-[37px]">تو</h1>
                        <h1 className="text-[37px] text-[#FD8266]">،</h1>
                     </div>
                     <h1 className="text-[37px]">با پشتوانه تـلاش مـــــــا</h1>
                  </div>
                  <p className="mt-6 text-base leading-[34px] text-[#576071]">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                     و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                     کاربردهای
                  </p>
                  <div className="mt-6 flex items-center gap-[10px]">
                     <Link href="/">
                        <Button
                           color="customPink"
                           variant="contained"
                           sx={{
                              height: 52,
                              width: 174,
                              borderRadius: 57,
                              fontSize: 16,
                              ':hover': {
                                 backgroundColor: '#B46451',
                              },
                           }}
                           endIcon={<ArrowLeft size="20" />}
                        >
                           شروع کنید
                        </Button>
                     </Link>

                     <Link href="/">
                        <Button
                           variant="contained"
                           sx={{
                              height: 52,
                              width: 153,
                              borderRadius: 57,
                              fontSize: 14,
                              backgroundColor: '#F1F3FB',
                              color: '#3A3E4D',
                              border: '1px solid #797C80',
                              ':hover': {
                                 color: '#626E94',
                                 backgroundColor: '#DDE4FB',
                              },
                           }}
                           startIcon={<DocumentText size="20" />}
                        >
                           درباره ما
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-3xl border border-solid border-[#AAAEB280] px-[18px] py-7">
               <div className="flex max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic4} alt="introduce" />
                  <h3 className="text-lg font-bold">Online shop</h3>
                  <p className="text-center text-sm text-[#6F778A]">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  </p>
               </div>

               <div className="flex max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic3} alt="introduce" />
                  <h3 className="text-lg font-bold">HRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  </p>
               </div>

               <div className="flex max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic2} alt="introduce" />
                  <h3 className="text-lg font-bold">CRM</h3>
                  <p className="text-center text-sm text-[#6F778A]">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  </p>
               </div>

               <div className="flex max-w-[288px] flex-col items-center gap-[10px] px-[18px]">
                  <Image src={pic1} alt="introduce" />
                  <h3 className="text-lg font-bold">Accounting</h3>
                  <p className="text-center text-sm text-[#6F778A]">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HomeBanner;
