import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';

// MUI
import { Button, Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Context
import { useGlobalContext } from '@/context/store';

// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';

// Apis
import useChangeProfileInfo from '@/apis/profile/useChangeProfileInfo';

function Information() {
   const t = useTranslations('userDashboard');
   const { query, push } = useRouter();

   const { userInfo } = useGlobalContext();
   const { trigger: changeProfileInfoTrigger, isMutating: changeProfileInfoIsMutating } = useChangeProfileInfo();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      setValue,
   } = useForm({
      defaultValues: {
         name: '',
         email: '',
         phoneNumber: '',
      },
      mode: 'onSubmit',
   });

   useEffect(() => {
      if (userInfo) {
         setValue('name', userInfo?.name || '');
         setValue('phoneNumber', userInfo?.phone_number || '');
         setValue('email', userInfo?.email || '');
      }
   }, [userInfo]);

   const formSubmit = data => {
      const newData = {
         name: data?.name,
         phone_number: data?.phoneNumber,
      };

      changeProfileInfoTrigger(newData);
   };

   const returnHandler = () => {
      reset();
      push('/profile/information');
   };

   return (
      <ProfileLayout>
         <div>
            {query?.editInfo ? (
               <>
                  <div className="rounded-10 bg-[#F5F8FC] px-[15px] py-[27px] font-almaraiExtraBold800 text-[#0F172A] customMd:text-xl">
                     {t('Account information')}
                  </div>

                  <form className="mt-8" onSubmit={handleSubmit(formSubmit)}>
                     <Grid container columnSpacing={{ md: '15px' }} rowSpacing="25px">
                        <Grid item xs={12} md={6}>
                           <div className="space-y-2">
                              <p className="text-xs text-[#626E94]">{t('FullName')}</p>
                              <TextField
                                 fullWidth
                                 color="secondaryBlue"
                                 placeholder={t('Enter your fullName')}
                                 error={!!errors?.name}
                                 helperText={errors?.name?.message}
                                 {...register('name')}
                                 disabled={changeProfileInfoIsMutating}
                                 sx={{
                                    '.MuiOutlinedInput-notchedOutline': { borderColor: '#E4EAF0', borderRadius: '8px' },
                                 }}
                                 inputProps={{ className: '!text-sm !text-[#011627]' }}
                              />
                           </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                           <div className="space-y-2">
                              <p className="text-xs text-[#626E94]">{t('Phone number')}</p>
                              <TextField
                                 fullWidth
                                 type="number"
                                 color="secondaryBlue"
                                 placeholder={t('Enter your phone number')}
                                 error={!!errors?.phoneNumber}
                                 helperText={errors?.phoneNumber?.message}
                                 {...register('phoneNumber', {
                                    pattern: {
                                       value: /^09\d{9}$/,
                                       message: t('Please enter a valid 11-digit phone number'),
                                    },
                                 })}
                                 disabled={changeProfileInfoIsMutating}
                                 sx={{
                                    '.MuiOutlinedInput-notchedOutline': { borderColor: '#E4EAF0', borderRadius: '8px' },
                                    input: {
                                       MozAppearance: 'textfield',
                                       appearance: 'textfield',
                                       '&::-webkit-inner-spin-button': {
                                          WebkitAppearance: 'none',
                                          appearance: 'none',
                                       },
                                    },
                                 }}
                                 inputProps={{ className: '!text-sm !text-[#011627]' }}
                              />
                           </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                           <div className="space-y-2">
                              <p className="text-xs text-[#626E94]">{t('Email')}</p>
                              <TextField
                                 fullWidth
                                 color="secondaryBlue"
                                 {...register('email')}
                                 inputProps={{ className: '!text-sm' }}
                                 sx={{ '.MuiOutlinedInput-notchedOutline': { borderRadius: '8px' } }}
                                 disabled
                              />
                           </div>
                        </Grid>
                     </Grid>

                     <div className="mt-[90px] flex items-center justify-center gap-[15px] max-customMd:flex-col-reverse customMd:mt-[44px] customMd:gap-[21px]">
                        <Button
                           sx={{
                              height: 45,
                              borderRadius: 33,
                              backgroundColor: '#E4EAF0',
                              fontSize: '14px',
                              color: '#626E94',
                              ':hover': { backgroundColor: '#cdd3d8' },
                           }}
                           className="w-full customMd:w-[154px]"
                           onClick={returnHandler}
                        >
                           {t('Return')}
                        </Button>
                        <LoadingButton
                           variant="contained"
                           color="customPink"
                           type="submit"
                           sx={{
                              height: 45,
                              borderRadius: 33,
                              fontSize: '14px',
                              ':hover': { backgroundColor: '#B46451' },
                           }}
                           className="w-full customMd:w-[273px]"
                           loading={changeProfileInfoIsMutating}
                        >
                           {t('Edit information')}
                        </LoadingButton>
                     </div>
                  </form>
               </>
            ) : (
               <>
                  <div className="flex flex-wrap items-center justify-between gap-5 rounded-10 bg-[#F5F8FC] p-[15px]">
                     <p className="font-almaraiExtraBold800 text-[#0F172A] customMd:text-xl">
                        {t('Account information')}
                     </p>
                     <Link href="?editInfo=true">
                        <Button
                           variant="contained"
                           sx={{
                              height: 46,
                              color: 'white',
                              borderRadius: 53,
                              paddingX: '24px',
                           }}
                           className="!text-10 customMd:!text-xs"
                           startIcon={<BiEditAlt />}
                        >
                           {t('Edit information')}
                        </Button>
                     </Link>
                  </div>

                  <div className="mt-[30px] flex flex-col gap-[30px]">
                     <div className="flex flex-col gap-[15px]">
                        <p className="font-almaraiBold700 text-[#626E94]">{t('FullName')}</p>
                        <p className="text-sm text-[#7E8AAB]">{userInfo?.name || '-'}</p>
                     </div>
                     <div className="flex flex-col gap-[15px]">
                        <p className="font-almaraiBold700 text-[#626E94]">{t('Phone number')}</p>
                        <p className="text-sm text-[#7E8AAB]">{userInfo?.phone_number || '-'}</p>
                     </div>
                     <div className="flex flex-col gap-[15px]">
                        <p className="font-almaraiBold700 text-[#626E94]">{t('Email')}</p>
                        <p className="text-sm text-[#7E8AAB]">{userInfo?.email || '-'}</p>
                     </div>
                  </div>
               </>
            )}
         </div>
      </ProfileLayout>
   );
}

export default Information;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
