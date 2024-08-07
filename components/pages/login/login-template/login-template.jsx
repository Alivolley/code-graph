import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { Eye, EyeSlash } from 'iconsax-react';

// Apis
import useLogin from '@/apis/auth/useLogin';

function LoginTemplate({ setChosenMethod, translator }) {
   const [showPassword, setShowPassword] = useState(false);
   const { trigger: loginTrigger, isMutating: loginIsMutating } = useLogin();
   const { back } = useRouter();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         email: '',
         password: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      const newData = {
         email: data?.email,
         password: data?.password,
      };

      loginTrigger(newData, {
         onSuccess: () => {
            back();
         },
      });
   };

   return (
      <div className="mt-4 customMd:mt-[126px]" data-aos="fade-left">
         <h2 className="text-center font-almaraiExtraBold800 text-2xl customMd:text-start customMd:text-4xl">
            {translator('Login')}
         </h2>
         <p className="mt-4 text-center text-base leading-[30px] text-[#626E94] customMd:text-start customMd:text-[20px]">
            {translator('Login to access your account')}
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
               InputLabelProps={{ sx: { fontSize: 14, color: '#8A97BF' } }}
               error={!!errors?.email}
               helperText={errors?.email?.message}
               disabled={loginIsMutating}
               sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: '#BDCEDE' } }}
               inputProps={{ className: '!text-sm !text-[#8A97BF]' }}
            />

            <TextField
               label={translator('Password')}
               fullWidth
               size="small"
               type={showPassword ? 'text' : 'password'}
               {...register('password', {
                  required: {
                     value: true,
                     message: translator('This filed is required'),
                  },
               })}
               InputLabelProps={{ sx: { fontSize: 14, color: '#8A97BF' } }}
               error={!!errors?.password}
               helperText={errors?.password?.message}
               InputProps={{
                  className: '!text-sm !text-[#8A97BF]',
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
               disabled={loginIsMutating}
               sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: '#BDCEDE' } }}
            />

            <div className="!mt-4">
               <Button
                  sx={{ color: '#FD8266', fontSize: 11, ':hover': { color: '#B46451' } }}
                  onClick={() => setChosenMethod('password')}
               >
                  {translator('Forgot password')}
               </Button>
            </div>

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
               loading={loginIsMutating}
            >
               {translator('Login')}
            </LoadingButton>
         </form>

         <p className="mt-4 flex items-center justify-center gap-1 text-xs text-[#313131]">
            {translator("Don't have any account ?")}
            <Button
               sx={{ color: '#FD8266', fontWeight: 'bold', fontSize: 12, ':hover': { color: '#B46451' } }}
               onClick={() => setChosenMethod('signUp')}
            >
               {translator('Sign up')}
            </Button>
         </p>
      </div>
   );
}

export default LoginTemplate;
