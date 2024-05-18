import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

// MUI
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Assets
import requestPic from '@/assets/images/requestPic.png';

// Apis
import useSendTicket from '@/apis/contactUs/useSendTicket';

function Request() {
   const { locale } = useRouter();
   const t = useTranslations('blogs');

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
      <div className="bg-[#F8F9FE]" dir="rtl">
         <div className="mx-auto max-w-[1440px] px-5 pb-[70px] pt-[24px] customMd:px-[60px] customMd:pb-[87px] customMd:pt-[83px]">
            <div className="flex flex-col gap-10 customMd:flex-row customMd:gap-5">
               <div dir={locale === 'en' ? 'ltr' : 'rtl'} className="order-2 flex-1 customMd:order-1">
                  <div className="relative ps-[13px] customMd:ps-[30px]">
                     <p
                        className="text-xs text-[#626E94]"
                        data-aos="fade-left"
                        data-aos-delay="350"
                        data-aos-duration="650"
                     >
                        {t('request text 1')}
                     </p>
                     <div
                        className="mt-4 flex items-center gap-1 font-almaraiExtraBold800 text-2xl leading-[46px] customMd:text-[32px] customMd:leading-[60px]"
                        data-aos="fade-left"
                        data-aos-delay="350"
                        data-aos-duration="650"
                     >
                        <p className="whitespace-nowrap text-[#65A5FC]" style={{ WebkitTextStroke: '1px' }}>
                           {t('Request')}
                        </p>
                        <p className="whitespace-nowrap text-[#EF6D33]" style={{ WebkitTextStroke: '1px' }}>
                           {t('Consultation')}
                        </p>
                     </div>
                     <p
                        className="absolute bottom-2 start-0 top-0 w-2 bg-[#65A5FC]"
                        data-aos="fade-left"
                        data-aos-duration="650"
                        data-aos-delay="200"
                     />
                  </div>

                  <form className="mt-[30px] space-y-6" onSubmit={handleSubmit(formSubmit)}>
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
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="650"
                     />

                     <TextField
                        type="number"
                        sx={{
                           backgroundColor: 'white',
                           '.MuiOutlinedInput-notchedOutline': { borderColor: '#BDCEDE' },
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
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="650"
                     />

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
                        data-aos="fade-left"
                        data-aos-delay="600"
                        data-aos-duration="650"
                     />

                     <TextField
                        fullWidth
                        multiline
                        minRows={3}
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
                        data-aos="fade-left"
                        data-aos-delay="700"
                        data-aos-duration="650"
                     />

                     <div
                        className="!mt-[45px]"
                        data-aos="fade-left"
                        data-aos-delay="800"
                        data-aos-duration="650"
                        data-aos-offset="-100"
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
                           {t('Submit request')}
                        </LoadingButton>
                     </div>
                  </form>
               </div>
               <div
                  className="order-1 flex-1 customMd:order-2 customMd:mt-8"
                  data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-duration="750"
                  data-aos-delay="200"
               >
                  <Image src={requestPic} alt="faq" className="size-full customMd:h-auto customMd:w-full" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Request;
