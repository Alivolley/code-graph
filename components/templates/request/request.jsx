import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

// MUI
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Assets
import requestPic from '@/assets/images/requestPic.png';

function Request() {
   const { locale } = useRouter();
   const t = useTranslations('blogs');

   const {
      register,
      handleSubmit,
      formState: { errors },
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
      console.log(data);
   };

   return (
      <div className="bg-[#F8F9FE]" dir="rtl">
         <div className="mx-auto max-w-[1440px] px-5 pb-[70px] pt-[24px] customMd:px-[60px] customMd:pb-[87px] customMd:pt-[83px]">
            <div className="flex flex-col gap-[50px] customMd:flex-row customMd:gap-[83px]">
               <div dir={locale === 'en' ? 'ltr' : 'rtl'} className="order-2 flex-1 customMd:order-1">
                  <div className="relative ps-[30px] font-almaraiExtraBold text-2xl leading-[46px] text-[#EF6D33] customMd:text-[32px] customMd:leading-[60px]">
                     <p className="text-[#65A5FC]">{t('Request')}</p>
                     <p>{t('Consultation')}</p>
                     <p className="absolute inset-y-2 start-0 w-2 bg-[#65A5FC]" />
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
                        InputLabelProps={{ sx: { fontSize: 14 } }}
                        error={!!errors?.name}
                        helperText={errors?.name?.message}
                        sx={{ backgroundColor: 'white' }}
                     />

                     <TextField
                        type="number"
                        sx={{
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
                        InputLabelProps={{ sx: { fontSize: 14 } }}
                        error={!!errors?.phoneNumber}
                        helperText={errors?.phoneNumber?.message}
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
                        InputLabelProps={{ sx: { fontSize: 14 } }}
                        sx={{ backgroundColor: 'white' }}
                        error={!!errors?.email}
                        helperText={errors?.email?.message}
                     />

                     <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        label={t('Message')}
                        {...register('text', {
                           required: {
                              value: true,
                              message: t('This filed is required'),
                           },
                        })}
                        InputLabelProps={{ sx: { fontSize: 14 } }}
                        sx={{ backgroundColor: 'white' }}
                        error={!!errors?.text}
                        helperText={errors?.text?.message}
                     />

                     <div className="!mt-[45px]">
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
                              fontFamily: 'almaraiBold',
                              paddingX: '69px',
                              backgroundColor: '#FD8266',
                              ':hover': {
                                 backgroundColor: '#B46451',
                              },
                           }}
                           //    loading={loginIsMutating}
                        >
                           {t('Submit request')}
                        </LoadingButton>
                     </div>
                  </form>
               </div>
               <div className="order-1 flex-1 customMd:order-2 customMd:mt-8">
                  <Image src={requestPic} alt="faq" className="size-full customMd:h-auto customMd:w-full" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Request;
