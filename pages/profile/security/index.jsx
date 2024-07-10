import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

// MUI
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { Eye, EyeSlash } from 'iconsax-react';

// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';

// Apis
import useChangePassword from '@/apis/profile/useChangePassword';

function Security() {
   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
   const [showNewPassword, setShowNewPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const t = useTranslations('userDashboard');

   const { trigger: changePasswordTrigger, isMutating: changePasswordIsMutating } = useChangePassword();

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      reset,
   } = useForm({
      defaultValues: {
         currentPassword: '',
         newPassword: '',
         confirmPassword: '',
      },
      mode: 'onSubmit',
   });

   const newPasswordValue = watch('newPassword');

   const formSubmit = data => {
      const newData = {
         old_password: data?.currentPassword,
         password_1: data?.newPassword,
         password_2: data?.confirmPassword,
      };

      changePasswordTrigger(newData, {
         onSuccess: () => reset(),
      });
   };

   return (
      <ProfileLayout>
         <div>
            <div className="rounded-10 bg-[#F5F8FC] px-[15px] py-[27px] font-almaraiExtraBold800 text-[#0F172A] customMd:text-xl">
               {t('Change password')}
            </div>

            <form className="mt-8" onSubmit={handleSubmit(formSubmit)}>
               <Grid container columnSpacing={{ md: '15px' }} rowSpacing="25px">
                  <Grid item xs={12} md={6}>
                     <div className="space-y-2">
                        <p className="text-xs text-[#626E94]">{t('Current password')}</p>
                        <TextField
                           fullWidth
                           type={showCurrentPassword ? 'text' : 'password'}
                           color="secondaryBlue"
                           placeholder={t('Enter your Current password')}
                           error={!!errors?.currentPassword}
                           helperText={errors?.currentPassword?.message}
                           {...register('currentPassword', {
                              required: {
                                 value: true,
                                 message: t('This filed is required'),
                              },
                              minLength: {
                                 value: 8,
                                 message: t('Password must be greater than 8 character'),
                              },
                           })}
                           disabled={changePasswordIsMutating}
                           sx={{
                              '.MuiOutlinedInput-notchedOutline': { borderColor: '#E4EAF0', borderRadius: '8px' },
                           }}
                           InputProps={{
                              className: '!text-sm !text-[#011627]',
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <IconButton onClick={() => setShowCurrentPassword(prev => !prev)}>
                                       {showCurrentPassword ? (
                                          <EyeSlash size="20" color="#292D32" variant="Broken" />
                                       ) : (
                                          <Eye size="20" color="#292D32" variant="Broken" />
                                       )}
                                    </IconButton>
                                 </InputAdornment>
                              ),
                           }}
                        />
                     </div>
                  </Grid>

                  <Grid item xs={12} md={6} />

                  <Grid item xs={12} md={6}>
                     <div className="space-y-2">
                        <p className="text-xs text-[#626E94]">{t('New password')}</p>
                        <TextField
                           fullWidth
                           type={showNewPassword ? 'text' : 'password'}
                           color="secondaryBlue"
                           placeholder={t('Enter your new password')}
                           error={!!errors?.newPassword}
                           helperText={errors?.newPassword?.message}
                           {...register('newPassword', {
                              required: {
                                 value: true,
                                 message: t('This filed is required'),
                              },
                              minLength: {
                                 value: 8,
                                 message: t('Password must be greater than 8 character'),
                              },
                           })}
                           disabled={changePasswordIsMutating}
                           InputProps={{
                              className: '!text-sm !text-[#011627]',
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <IconButton onClick={() => setShowNewPassword(prev => !prev)}>
                                       {showNewPassword ? (
                                          <EyeSlash size="20" color="#292D32" variant="Broken" />
                                       ) : (
                                          <Eye size="20" color="#292D32" variant="Broken" />
                                       )}
                                    </IconButton>
                                 </InputAdornment>
                              ),
                           }}
                           sx={{ '.MuiOutlinedInput-notchedOutline': { borderRadius: '8px', borderColor: '#E4EAF0' } }}
                        />
                     </div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                     <div className="space-y-2">
                        <p className="text-xs text-[#626E94]">{t('Confirm new password')}</p>
                        <TextField
                           fullWidth
                           type={showConfirmPassword ? 'text' : 'password'}
                           color="secondaryBlue"
                           placeholder={t('Confirm your new password')}
                           error={!!errors?.confirmPassword}
                           helperText={errors?.confirmPassword?.message}
                           disabled={changePasswordIsMutating}
                           {...register('confirmPassword', {
                              required: {
                                 value: true,
                                 message: t('This filed is required'),
                              },
                              validate: value => value === newPasswordValue || t('Passwords are not match'),
                           })}
                           InputProps={{
                              className: '!text-sm !text-[#011627]',
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <IconButton onClick={() => setShowConfirmPassword(prev => !prev)}>
                                       {showConfirmPassword ? (
                                          <EyeSlash size="20" color="#292D32" variant="Broken" />
                                       ) : (
                                          <Eye size="20" color="#292D32" variant="Broken" />
                                       )}
                                    </IconButton>
                                 </InputAdornment>
                              ),
                           }}
                           sx={{ '.MuiOutlinedInput-notchedOutline': { borderRadius: '8px', borderColor: '#E4EAF0' } }}
                        />
                     </div>
                  </Grid>
               </Grid>

               <div className="mt-[90px] flex items-center justify-center gap-[15px] max-customMd:flex-col-reverse customMd:mt-[44px] customMd:gap-[21px]">
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
                     loading={changePasswordIsMutating}
                  >
                     {t('Change password')}
                  </LoadingButton>
               </div>
            </form>
         </div>
      </ProfileLayout>
   );
}

export default Security;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
