import Head from 'next/head';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button, Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Assets
import aboutUsPic from '@/assets/images/aboutUsPic.png';
import aboutUsServicePic from '@/assets/images/aboutUsServicePic.png';
import aboutUsLogo from '@/assets/images/aboutUsLogo.png';

// Components
import Comments from '@/components/pages/services/comments/comments';
import axiosInstance from '@/configs/axiosInstance';

// Apis
import useSendTicket from '@/apis/contactUs/useSendTicket';

function AboutUs({ comments }) {
   const { locale } = useRouter();
   const t = useTranslations('about us');

   const { trigger: sentTicketTrigger, isMutating: sendTicketIsMutating } = useSendTicket();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: {
         name: '',
         phoneNumber: '',
         email: '',
         text: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      const newData = {
         name: data?.name,
         phone_number: data?.phoneNumber,
         email: data?.email,
         message: data?.text,
      };

      sentTicketTrigger(newData, {
         onSuccess: () => {
            reset();
            toast.success(t('Message sent'));
         },
      });
   };

   return (
      <div>
         <Head>
            <title>{locale === 'fa' ? 'رودگراف - درباره ما' : 'RoadGraph-about us'}</title>
         </Head>
         <div style={{ background: 'linear-gradient(80.33deg, #E6EBFA 7.96%, #F2F5FC 43.29%, #FFFFFF 98.56%)' }}>
            <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-[130px] customMd:px-[60px] customMd:pt-[180px]">
               <Grid container rowSpacing={{ xs: '30px', md: 0 }}>
                  <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                     <div className="relative ps-[30px] font-almaraiExtraBold800">
                        <p
                           className="text-xl leading-[43px] text-[#626E94] customMd:text-[35px] customMd:leading-[40px]"
                           data-aos="fade-left"
                           data-aos-duration="650"
                        >
                           {t('About us')}
                        </p>

                        <p
                           className="text-[26px] leading-[43px] customMd:mt-4 customMd:text-[46px] customMd:leading-[77px]"
                           data-aos="fade-left"
                           data-aos-duration="650"
                        >
                           <span className="text-[#65A5FC]" style={{ WebkitTextStroke: '1px' }}>
                              {t('team')}{' '}
                           </span>
                           <span className="font-almaraiBold700 text-customPink" style={{ WebkitTextStroke: '1px' }}>
                              {t('RoadGraph')}
                           </span>
                        </p>
                        <p
                           className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]"
                           data-aos="fade-left"
                           data-aos-duration="650"
                           data-aos-delay="100"
                        />
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6} order={{ xs: 3, md: 2 }}>
                     <p
                        className="text-sm leading-[31px] text-[#434F74] customMd:text-[18px] customMd:leading-[43px]"
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="650"
                     >
                        {t('text 1')}
                     </p>
                  </Grid>
                  <Grid item xs={12} order={{ xs: 1, md: 3 }}>
                     <div
                        className="mx-auto max-w-[1089px] customMd:mt-3"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        data-aos-duration="650"
                     >
                        <Image src={aboutUsPic} alt="banner" className="size-full" />
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>

         <div
            className="mx-auto mt-5 flex max-w-[1440px] flex-col gap-3 px-5 pb-[10px] customMd:mt-[61px]
          customMd:flex-row customMd:items-start customMd:justify-between customMd:px-[60px] customMd:pb-[70px]"
         >
            <div>
               <p
                  className="mb-2 flex size-[34px] items-center justify-center rounded-full
                border-2 border-solid border-[#EF6D33] text-xl text-[#ef6e339c] customMd:mb-7 customMd:size-[49px] customMd:text-2xl"
                  data-aos="fade-left"
                  data-aos-duration="650"
               >
                  !
               </p>
               <div className="relative ps-[30px] font-almaraiExtraBold800">
                  <p
                     className="text-xl leading-[43px] text-[#626E94] customMd:text-[35px] customMd:leading-[40px]"
                     style={{ WebkitTextStroke: '1px' }}
                     data-aos="fade-left"
                     data-aos-delay="150"
                     data-aos-duration="650"
                  >
                     {t('Why')}
                  </p>

                  <p
                     className="flex flex-nowrap items-center gap-1 text-[26px] leading-[43px] customMd:mt-4 customMd:gap-4 customMd:text-[46px] customMd:leading-[77px]"
                     data-aos="fade-left"
                     data-aos-delay="300"
                     data-aos-duration="650"
                  >
                     <span className="text-[#65A5FC]" style={{ WebkitTextStroke: '1px' }}>
                        {t('team')}
                     </span>
                     <span
                        className="whitespace-nowrap font-almaraiBold700 text-customPink"
                        style={{ WebkitTextStroke: '1px' }}
                     >
                        {t('RoadGraph')}
                     </span>
                  </p>
                  <p
                     className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]"
                     data-aos="fade-left"
                     data-aos-delay="450"
                     data-aos-duration="650"
                  />
               </div>
            </div>

            <p
               className="max-w-[762px] text-sm leading-[31px] text-[#434F74] customMd:text-justify customMd:text-[18px] customMd:leading-[43px]"
               data-aos="fade-right"
               data-aos-delay="450"
               data-aos-duration="650"
            >
               {t('text 2')}
            </p>
         </div>

         <div className="border-y border-solid border-[#E4EAF0] bg-[#fbfbfb]">
            <div
               className="flex max-w-[1440px] items-center gap-5 overflow-auto whitespace-nowrap px-5
             py-8 customSm:gap-12 customMd:mx-auto customMd:justify-center customMd:px-[60px] customMd:py-20 xl:gap-28"
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
         </div>

         <div dir="rtl">
            <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-[18px] customMd:px-[60px] customMd:pb-[70px] customMd:pt-[50px]">
               <Grid container>
                  <Grid item xs={12} md={6}>
                     <div
                        className="mx-auto max-w-[650px] customMd:mx-0"
                        data-aos="zoom-in"
                        data-aos-duration="650"
                        data-aos-delay="200"
                     >
                        <Image src={aboutUsServicePic} alt="uiux" className="size-full" />
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <div className="mt-5" dir={locale === 'en' ? 'ltr' : 'rtl'}>
                        <div className="relative ps-[30px]">
                           <p
                              className="text-xs text-[#626E94] customMd:text-sm"
                              data-aos="fade-right"
                              data-aos-duration="650"
                           >
                              {t('text 3')}
                           </p>
                           <p
                              className="flex flex-nowrap items-center gap-1 font-almaraiExtraBold800 text-2xl leading-[46px]
                            customMd:text-[40px] customMd:leading-[75px]"
                              data-aos="fade-right"
                              data-aos-duration="650"
                           >
                              <span className="text-[#65A5FC]" style={{ WebkitTextStroke: '1px' }}>
                                 {t('services')}
                              </span>
                              <span
                                 className="whitespace-nowrap font-almaraiBold700 text-customPink"
                                 style={{ WebkitTextStroke: '1px' }}
                              >
                                 {t('RoadGraph')}
                              </span>
                           </p>

                           <p
                              className="absolute -top-1 bottom-4 start-0 w-2 bg-[#65A5FC]"
                              data-aos="fade-right"
                              data-aos-duration="650"
                              data-aos-delay="100"
                           />
                        </div>
                        <p
                           className="mt-3 text-sm leading-[32px] text-[#576071] customMd:text-base customMd:leading-[45px]"
                           data-aos="fade-right"
                           data-aos-duration="650"
                           data-aos-delay="300"
                        >
                           {t('text 4')}
                        </p>

                        <div className="mt-3 space-y-4">
                           <div
                              className="flex items-center gap-[11px] customMd:gap-6"
                              data-aos="fade-right"
                              data-aos-duration="650"
                              data-aos-delay="500"
                           >
                              <div className="size-[35px] shrink-0 rounded-full border-2 border-solid border-customPink bg-[#F1DEDA] customMd:size-[52px]" />
                              <p className="text-xs text-customPink customMd:text-sm">{t('text 5')}</p>
                           </div>
                           <div
                              className="flex items-center gap-[11px] customMd:gap-6"
                              data-aos="fade-right"
                              data-aos-duration="650"
                              data-aos-delay="600"
                           >
                              <div className="size-[35px] shrink-0 rounded-full border-2 border-solid border-[#65A5FC] bg-[#DAE3F1] customMd:size-[52px]" />
                              <p className="text-xs text-[#65A5FC] customMd:text-sm">{t('text 6')}</p>
                           </div>
                           <div
                              className="flex items-center gap-[11px] customMd:gap-6"
                              data-aos="fade-right"
                              data-aos-duration="650"
                              data-aos-delay="700"
                           >
                              <div className="size-[35px] shrink-0 rounded-full border-2 border-solid border-[#9DAF84] bg-[#E7F1DA] customMd:size-[52px]" />
                              <p className="text-xs text-[#9DAF84] customMd:text-sm">{t('text 7')}</p>
                           </div>
                        </div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>

         <div className="bg-[#F5F8FC]">
            <div
               className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-[34px]
          customMd:flex-row customMd:items-start customMd:justify-between customMd:px-[60px] customMd:py-[70px]"
            >
               <div>
                  <p
                     className="mb-2 flex size-[34px] items-center justify-center rounded-xl
                border-2 border-solid border-[#EF6D33] text-xl text-[#ef6e339c] customMd:mb-7 customMd:size-[49px] customMd:text-2xl"
                     data-aos="fade-left"
                     data-aos-duration="650"
                  >
                     24
                  </p>
                  <div className="relative ps-[30px] font-almaraiExtraBold800">
                     <p
                        className="text-xl leading-[43px] text-[#626E94] customMd:text-[35px] customMd:leading-[40px]"
                        style={{ WebkitTextStroke: '1px' }}
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="650"
                     >
                        {t('Counseling')}
                     </p>

                     <p
                        className="flex flex-nowrap items-center gap-1 text-[26px] leading-[43px] customMd:mt-4 customMd:text-[46px] customMd:leading-[77px]"
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="650"
                     >
                        <span className="text-[#65A5FC]" style={{ WebkitTextStroke: '1px' }}>
                           {t('Need')}
                        </span>
                        <span
                           className="whitespace-nowrap font-almaraiBold700 text-customPink"
                           style={{ WebkitTextStroke: '1px' }}
                        >
                           {t('guidance?')}
                        </span>
                     </p>
                     <p
                        className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]"
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="650"
                     />
                  </div>
               </div>

               <div className="max-w-[762px] space-y-5 customMd:space-y-[60px]">
                  <p
                     className="text-sm leading-[31px] text-[#434F74] customMd:text-[18px] customMd:leading-[43px]"
                     data-aos="fade-right"
                     data-aos-delay="400"
                     data-aos-duration="650"
                  >
                     {t('text 8')}
                  </p>
                  <a
                     href="#reqForm"
                     className="block customMd:w-fit"
                     data-aos="fade-up"
                     data-aos-delay="500"
                     data-aos-duration="650"
                  >
                     <Button
                        color="customPink"
                        variant="contained"
                        className="max-customMd:!w-full"
                        sx={{
                           height: 60,
                           borderRadius: 57,
                           fontSize: 18,
                           paddingX: '38px',
                           ':hover': {
                              backgroundColor: '#B46451',
                           },
                        }}
                     >
                        {t('Send counseling request')}
                     </Button>
                  </a>
               </div>
            </div>
         </div>

         <div className="mx-auto max-w-[1440px] px-5 py-[46px] customMd:px-[60px]">
            <Comments detail={comments} />
         </div>

         <div className="bg-[#F5F8FC]" id="reqForm">
            <div className="mx-auto max-w-[1440px] px-5 py-[48px] customMd:pb-[45px] customMd:pt-[60px]">
               <div className="flex flex-col items-center">
                  <div className="w-[310px] customMd:w-[413px]" data-aos="zoom-in" data-aos-duration="650">
                     <Image src={aboutUsLogo} alt="logo" className="size-full" />
                  </div>
                  <p
                     className="mt-[28px] text-center text-sm text-[#626E94] customMd:mt-[34px] customMd:text-base"
                     data-aos="fade-up"
                     data-aos-duration="650"
                  >
                     {t('text 9')}
                  </p>
                  <p
                     className="flex flex-nowrap items-center gap-1 font-almaraiExtraBold800 text-[26px] leading-[55px] customMd:mt-4 customMd:text-[32px]"
                     data-aos="fade-up"
                     data-aos-duration="650"
                  >
                     <span className="text-[#65A5FC]" style={{ WebkitTextStroke: '1px' }}>
                        {t('Request')}
                     </span>
                     <span
                        className="whitespace-nowrap font-almaraiBold700 text-customPink"
                        style={{ WebkitTextStroke: '1px' }}
                     >
                        {t('Counseling')}
                     </span>
                  </p>
               </div>

               <form className="mx-auto mt-[30px] max-w-[1213px]" onSubmit={handleSubmit(formSubmit)}>
                  <Grid container rowSpacing="25px" spacing={{ md: '25px' }}>
                     <Grid item xs={12} md={6} data-aos="fade-left" data-aos-offset="100" data-aos-duration="650">
                        <TextField
                           fullWidth
                           label={t('Full name')}
                           {...register('name', {
                              required: {
                                 value: true,
                                 message: t('This filed is required'),
                              },
                           })}
                           InputLabelProps={{ sx: { fontSize: 14, color: '#9CA0AE' } }}
                           error={!!errors?.name}
                           helperText={errors?.name?.message}
                           sx={{
                              backgroundColor: 'white',
                              '.MuiOutlinedInput-notchedOutline': { borderColor: '#BDCEDE' },
                           }}
                        />
                     </Grid>

                     <Grid item xs={12} md={6} data-aos="fade-right" data-aos-offset="100" data-aos-duration="650">
                        <TextField
                           type="number"
                           sx={{
                              '.MuiOutlinedInput-notchedOutline': { borderColor: '#BDCEDE' },
                              backgroundColor: 'white',
                              input: {
                                 MozAppearance: 'textfield',
                                 appearance: 'textfield',
                                 '&::-webkit-inner-spin-button': {
                                    WebkitAppearance: 'none',
                                    appearance: 'none',
                                 },
                              },
                           }}
                           fullWidth
                           label={t('Phone number')}
                           {...register('phoneNumber', {
                              required: {
                                 value: true,
                                 message: t('This filed is required'),
                              },
                           })}
                           InputLabelProps={{ sx: { fontSize: 14, color: '#9CA0AE' } }}
                           error={!!errors?.phoneNumber}
                           helperText={errors?.phoneNumber?.message}
                        />
                     </Grid>

                     <Grid item xs={12} md={6} data-aos="fade-left" data-aos-offset="100" data-aos-duration="650">
                        <TextField
                           fullWidth
                           label={t('Email')}
                           {...register('email', {
                              required: {
                                 value: true,
                                 message: t('This filed is required'),
                              },
                              pattern: {
                                 value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
                                 message: t('Please enter a valid email'),
                              },
                           })}
                           InputLabelProps={{ sx: { fontSize: 14, color: '#9CA0AE' } }}
                           sx={{
                              backgroundColor: 'white',
                              '.MuiOutlinedInput-notchedOutline': { borderColor: '#BDCEDE' },
                           }}
                           error={!!errors?.email}
                           helperText={errors?.email?.message}
                        />
                     </Grid>

                     <Grid item xs={12} md={6} data-aos="fade-right" data-aos-offset="100" data-aos-duration="650">
                        <TextField
                           fullWidth
                           multiline
                           label={t('Message')}
                           {...register('text', {
                              required: {
                                 value: true,
                                 message: t('This filed is required'),
                              },
                           })}
                           InputLabelProps={{ sx: { fontSize: 14, color: '#9CA0AE' } }}
                           sx={{
                              backgroundColor: 'white',
                              '.MuiOutlinedInput-notchedOutline': { borderColor: '#BDCEDE' },
                           }}
                           error={!!errors?.text}
                           helperText={errors?.text?.message}
                        />
                     </Grid>
                  </Grid>

                  <div
                     className="mt-[50px] flex justify-center"
                     data-aos="zoom-in"
                     data-aos-offset="100"
                     data-aos-duration="650"
                  >
                     <LoadingButton
                        variant="contained"
                        type="submit"
                        color="customPink"
                        className="w-full customMd:w-auto"
                        sx={{
                           height: 55,
                           borderRadius: 47,
                           fontSize: 16,
                           color: 'white',
                           fontFamily: 'almaraiBold700',
                           paddingX: '69px',
                           backgroundColor: '#FD8266',
                           ':hover': {
                              backgroundColor: '#B46451',
                           },
                        }}
                        loading={sendTicketIsMutating}
                     >
                        {t('Send request')}
                     </LoadingButton>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default AboutUs;

export async function getStaticProps(context) {
   const comments = await axiosInstance(`accounts/customer-comments/?random_comments=True&lang=${context.locale}`).then(
      res => res.data
   );

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         comments,
      },
      revalidate: 300,
   };
}
