import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { Eye, EyeSlash } from 'iconsax-react';

// Apis
import useSendCode from '@/apis/auth/useSendCode';
import useResetPassword from '@/apis/auth/useResetPassword';

function ForgotPasswordTemplate({ setChosenMethod, translator }) {
   const [showPassword, setShowPassword] = useState(false);
   const [recoveryStep, setRecoveryStep] = useState(1);
   const { back } = useRouter();

   const { trigger: sendCodeTrigger, isMutating: sendCodeIsMutating } = useSendCode();
   const { trigger: resetPasswordTrigger, isMutating: resetPasswordIsMutating } = useResetPassword();

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm({
      defaultValues: {
         email: '',
         code: '',
         password: '',
         confirmPassword: '',
      },
      mode: 'onSubmit',
   });

   const passwordValue = watch('password');

   const formSubmit = data => {
      if (recoveryStep === 1) {
         const newData = {
            email: data?.email,
         };
         sendCodeTrigger(newData, {
            onSuccess: () => {
               setRecoveryStep(2);
            },
         });
      } else if (recoveryStep === 2) {
         const newData = {
            email: data?.email,
            code: data?.code,
            password: data?.password,
         };

         resetPasswordTrigger(newData, {
            onSuccess: () => {
               back();
            },
         });
      }
   };

   return (
      <div data-aos="fade-left" className="mt-4 customMd:mt-[50px]">
         <h2 className="text-center font-almaraiExtraBold800 text-2xl customMd:text-start customMd:text-4xl">
            {translator('Recover password')}
         </h2>
         <p className="mt-4 text-center text-base leading-[30px] text-[#626E94] customMd:text-start customMd:text-[20px]">
            {translator('An authentication code will be sent to your email')}
         </p>

         <form onSubmit={handleSubmit(formSubmit)} className="mt-5 space-y-[25px] customMd:mt-10">
            <TextField
               fullWidth
               size="small"
               label={translator('Email')}
               {...register('email', {
                  required: {
                     value: true,
                     message: translator('This filed is required'),
                  },
                  pattern: {
                     value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
                     message: translator('Please enter a valid email'),
                  },
               })}
               InputLabelProps={{ sx: { fontSize: 14 } }}
               error={!!errors?.email}
               helperText={errors?.email?.message}
               disabled={sendCodeIsMutating || resetPasswordIsMutating || recoveryStep === 2}
            />

            {recoveryStep === 2 && (
               <>
                  <TextField
                     fullWidth
                     size="small"
                     label={translator('Code')}
                     type="number"
                     sx={{
                        input: {
                           MozAppearance: 'textfield',
                           appearance: 'textfield',
                           '&::-webkit-inner-spin-button': {
                              WebkitAppearance: 'none',
                              appearance: 'none',
                           },
                        },
                     }}
                     {...register('code', {
                        required: {
                           value: true,
                           message: translator('This filed is required'),
                        },
                     })}
                     InputLabelProps={{ sx: { fontSize: 14 } }}
                     error={!!errors?.code}
                     helperText={errors?.code?.message}
                     disabled={resetPasswordIsMutating}
                  />

                  <TextField
                     label={translator('New password')}
                     fullWidth
                     size="small"
                     type={showPassword ? 'text' : 'password'}
                     {...register('password', {
                        required: {
                           value: true,
                           message: translator('This filed is required'),
                        },

                        minLength: {
                           value: 8,
                           message: translator('Password must be greater than 8 character'),
                        },
                     })}
                     InputLabelProps={{ sx: { fontSize: 14 } }}
                     error={!!errors?.password}
                     helperText={errors?.password?.message}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton onClick={() => setShowPassword(prev => !prev)}>
                                 {showPassword ? (
                                    <EyeSlash size="20" color="#292D32" variant="Broken" />
                                 ) : (
                                    <Eye size="20" color="#292D32" variant="Broken" />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                     disabled={resetPasswordIsMutating}
                  />

                  <TextField
                     label={translator('Confirm new password')}
                     fullWidth
                     size="small"
                     type={showPassword ? 'text' : 'password'}
                     {...register('confirmPassword', {
                        required: {
                           value: true,
                           message: translator('This filed is required'),
                        },
                        validate: value => value === passwordValue || translator('Passwords are not match'),
                     })}
                     InputLabelProps={{ sx: { fontSize: 14 } }}
                     error={!!errors?.confirmPassword}
                     helperText={errors?.confirmPassword?.message}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton onClick={() => setShowPassword(prev => !prev)}>
                                 {showPassword ? (
                                    <EyeSlash size="20" color="#292D32" variant="Broken" />
                                 ) : (
                                    <Eye size="20" color="#292D32" variant="Broken" />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                     disabled={resetPasswordIsMutating}
                  />
               </>
            )}

            <LoadingButton
               variant="contained"
               fullWidth
               type="submit"
               color="customPink"
               sx={{
                  height: 45,
                  borderRadius: 47,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: '#FD8266',
                  ':hover': {
                     backgroundColor: '#B46451',
                  },
               }}
               loading={sendCodeIsMutating || resetPasswordIsMutating}
            >
               {recoveryStep === 1 ? translator('Send code') : recoveryStep === 2 ? translator('Set password') : null}
            </LoadingButton>
         </form>

         <p className="mt-4 flex items-center justify-center gap-1 text-xs text-[#313131]">
            {translator('Remember your password ?')}
            <Button
               sx={{ color: '#FD8266', fontWeight: 'bold', fontSize: 12, ':hover': { color: '#B46451' } }}
               onClick={() => setChosenMethod('login')}
            >
               {translator('Login')}
            </Button>
         </p>
      </div>
   );
}

export default ForgotPasswordTemplate;
