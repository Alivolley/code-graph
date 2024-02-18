import { useState } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Eye, EyeSlash, Google } from 'iconsax-react';

function SignUpTemplate({ setChosenMethod, translator }) {
   const [showPassword, setShowPassword] = useState(false);

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm({
      defaultValues: {
         username: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
      mode: 'onSubmit',
   });

   const passwordValue = watch('password');

   const formSubmit = data => {
      console.log(data);
   };

   return (
      <div className="mt-4 customMd:mt-[50px] customMd:pb-16">
         <h2 className="text-4xl font-extrabold">ثبت نام</h2>
         <p className="mt-4 text-[20px] leading-[30px] text-[#626E94]">
            بیایید حساب شما را راه اندازی کنیم تا بتوانید به حساب شخصی خود دسترسی داشته باشید.
         </p>

         <form onSubmit={handleSubmit(formSubmit)} className="mt-10 space-y-[25px]">
            <TextField
               fullWidth
               size="small"
               label="نام کاربری"
               {...register('username', {
                  required: {
                     value: true,
                     message: translator('This filed is required'),
                  },
               })}
               InputLabelProps={{ sx: { fontSize: 14 } }}
               error={!!errors?.username}
               helperText={errors?.username?.message}
            />
            <TextField
               fullWidth
               size="small"
               label="ایمیل"
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
            />

            <TextField
               label="پسورد"
               fullWidth
               size="small"
               type={showPassword ? 'text' : 'password'}
               {...register('password', {
                  required: {
                     value: true,
                     message: 'این فیلد اجباری است',
                  },

                  minLength: {
                     value: 8,
                     message: 'رمز عبور باید حداقل ۸ حرف باشد',
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
            />

            <TextField
               label="تکرار پسورد"
               fullWidth
               size="small"
               type={showPassword ? 'text' : 'password'}
               {...register('confirmPassword', {
                  required: {
                     value: true,
                     message: 'این فیلد اجباری است',
                  },
                  validate: value => value === passwordValue || 'پسورد ها با یکدیگر همخوانی ندارند',
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
            />

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
            >
               ساخت حساب
            </LoadingButton>
         </form>

         <p className="mt-4 flex items-center justify-center gap-1 text-xs text-[#313131]">
            از قبل حساب کاربری دارید ؟
            <Button
               sx={{ color: '#FD8266', fontWeight: 'bold', fontSize: 12, ':hover': { color: '#B46451' } }}
               onClick={() => setChosenMethod('login')}
            >
               ورود
            </Button>
         </p>

         <div className="my-[25px] flex items-center justify-center gap-2">
            <div className="h-px grow bg-[#31313134]" />
            <p className="text-10 text-[#31313180]">یا ورود با</p>
            <div className="h-px grow bg-[#31313134]" />
         </div>

         <LoadingButton
            fullWidth
            sx={{
               height: 45,
               borderRadius: 47,
               color: '#1976D2',
               border: '1px solid #3868eb7a',
               ':hover': {
                  backgroundColor: '#ced2de81',
               },
            }}
         >
            <Google size="21" variant="Bold" />
         </LoadingButton>
      </div>
   );
}

export default SignUpTemplate;
