import toast from 'react-hot-toast';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

// MUI
import {
   Button,
   CircularProgress,
   FormControl,
   FormHelperText,
   Grid,
   MenuItem,
   Select,
   TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';

// Icons
import { Add } from 'iconsax-react';
import { IoIosClose } from 'react-icons/io';

// Apis
import useGetCategories from '@/apis/categories/useGetCategories';
import useSendTicket from '@/apis/tickets/useSendTicket';

const VisuallyHiddenInput = styled('input')({
   clip: 'rect(0 0 0 0)',
   clipPath: 'inset(50%)',
   height: 1,
   overflow: 'hidden',
   position: 'absolute',
   bottom: 0,
   left: 0,
   whiteSpace: 'nowrap',
   width: 1,
});

function WriteNewTicket({ ticketsMutate }) {
   const [pictures, setPictures] = useState([]);
   const [picturesURL, setPicturesURL] = useState([]);

   const t = useTranslations('userDashboard');
   const { locale, push } = useRouter();

   const { data: categoryData, isLoading: categoryIsLoading } = useGetCategories();
   const { trigger: sendTicketTrigger, isMutating: sendTicketIsMutating } = useSendTicket();

   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      reset,
   } = useForm({
      defaultValues: {
         service: '',
         importance: '',
         subject: '',
         message: '',
      },
      mode: 'onSubmit',
   });

   const returnHandler = () => {
      reset();
      setPictures([]);
      setPicturesURL([]);
      ticketsMutate();
      push('/profile/tickets');
   };

   const formSubmit = data => {
      let totalSize = 0;
      pictures.forEach(item => {
         totalSize += item.size;
      });

      const totalSizeInMB = totalSize / (1024 * 1024);

      if (totalSizeInMB > 2) {
         toast.error(t('The file size is more than 2 MB'));
      } else {
         const newData = new FormData();
         pictures.forEach(item => newData.append('files ', item));

         newData.append('service', data?.service);
         newData.append('importance', data?.importance);
         newData.append('message', data?.message);
         newData.append('subject', data?.subject);

         sendTicketTrigger(newData, {
            onSuccess: () => returnHandler(),
         });
      }
   };

   const changeImageHandler = e => {
      if (e?.target?.files[0]) {
         const files = Array.from(e?.target?.files);

         files?.forEach(item => {
            setPictures(prev => [...prev, item]);
            const itemURL = URL.createObjectURL(item);
            setPicturesURL(prev => [...prev, { source: itemURL, wholeItem: item }]);
         });
      }
   };

   const removePictureHandler = pic => {
      setPictures(prev => {
         const newPictures = prev?.filter(item => item !== pic?.wholeItem);
         return newPictures;
      });

      setPicturesURL(prev => {
         const newPicturesURL = prev.filter(item => item !== pic);
         return newPicturesURL;
      });
   };

   return (
      <div data-aos="fade-left" data-aos-duration="650">
         {categoryIsLoading ? (
            <div className="mt-20 flex items-center justify-center">
               <CircularProgress color="customPink" />
            </div>
         ) : (
            <form className="mt-8" onSubmit={handleSubmit(formSubmit)}>
               <Grid container columnSpacing={{ md: '30px' }} rowSpacing="35px">
                  <Grid item xs={12} md={7}>
                     <div className="space-y-[15px]">
                        <p className="text-[#626E94]">{t('Select the relevant service')}</p>

                        <Controller
                           control={control}
                           name="service"
                           rules={{ required: t('This filed is required') }}
                           render={({ field: { onChange, value }, fieldState }) => (
                              <FormControl fullWidth error={!!errors?.service} disabled={sendTicketIsMutating}>
                                 <Select
                                    value={value}
                                    onChange={onChange}
                                    sx={{
                                       backgroundColor: '#F5F8FC',
                                       borderRadius: '10px',
                                       '.MuiOutlinedInput-notchedOutline': {
                                          border: !errors?.service && 'none',
                                       },
                                    }}
                                 >
                                    {categoryData?.map(item => (
                                       <MenuItem value={item?.id} dir={locale === 'en' ? 'ltr' : 'rtl'} key={item?.id}>
                                          {item?.title}
                                       </MenuItem>
                                    ))}
                                 </Select>

                                 {fieldState.invalid
                                    ? errors?.service?.message && (
                                         <FormHelperText error>{errors?.service?.message}</FormHelperText>
                                      )
                                    : null}
                              </FormControl>
                           )}
                        />
                     </div>
                  </Grid>

                  <Grid item xs={12} md={5}>
                     <div className="space-y-[15px]">
                        <p className="text-[#626E94]">{t('The importance of your ticket')}</p>

                        <Controller
                           control={control}
                           name="importance"
                           rules={{ required: t('This filed is required') }}
                           render={({ field: { onChange, value }, fieldState }) => (
                              <FormControl fullWidth error={!!errors?.importance} disabled={sendTicketIsMutating}>
                                 <Select
                                    value={value}
                                    onChange={onChange}
                                    sx={{
                                       backgroundColor: '#F5F8FC',
                                       borderRadius: '10px',
                                       '.MuiOutlinedInput-notchedOutline': {
                                          border: !errors?.importance && 'none',
                                       },
                                    }}
                                 >
                                    <MenuItem value={1} dir={locale === 'en' ? 'ltr' : 'rtl'}>
                                       {t('Normal')}
                                    </MenuItem>
                                    <MenuItem value={2} dir={locale === 'en' ? 'ltr' : 'rtl'}>
                                       {t('Important')}
                                    </MenuItem>
                                    <MenuItem value={3} dir={locale === 'en' ? 'ltr' : 'rtl'}>
                                       {t('Too important')}
                                    </MenuItem>
                                 </Select>

                                 {fieldState.invalid
                                    ? errors?.importance?.message && (
                                         <FormHelperText error>{errors?.importance?.message}</FormHelperText>
                                      )
                                    : null}
                              </FormControl>
                           )}
                        />
                     </div>
                  </Grid>

                  <Grid item xs={12} md={7}>
                     <div className="space-y-[15px]">
                        <p className="text-[#626E94]">{t('Write the subject of the ticket')}</p>

                        <TextField
                           fullWidth
                           {...register('subject', {
                              required: {
                                 value: true,
                                 message: t('This filed is required'),
                              },
                           })}
                           sx={{
                              backgroundColor: '#F5F8FC',
                              borderRadius: '10px',
                              '.MuiOutlinedInput-notchedOutline': {
                                 border: !errors?.subject && 'none',
                                 borderRadius: '10px',
                              },
                           }}
                           error={!!errors?.subject}
                           helperText={errors?.subject?.message}
                           disabled={sendTicketIsMutating}
                        />
                     </div>
                  </Grid>

                  <Grid item xs={12}>
                     <div className="space-y-[15px]">
                        <p className="text-[#626E94]">{t('Write your message')}</p>

                        <TextField
                           fullWidth
                           multiline
                           minRows={10}
                           {...register('message', {
                              required: {
                                 value: true,
                                 message: t('This filed is required'),
                              },
                           })}
                           sx={{
                              backgroundColor: '#F5F8FC',
                              borderRadius: '10px',
                              '.MuiOutlinedInput-notchedOutline': {
                                 border: !errors?.message && 'none',
                                 borderRadius: '10px',
                              },
                           }}
                           error={!!errors?.message}
                           helperText={errors?.message?.message}
                           disabled={sendTicketIsMutating}
                        />
                     </div>
                  </Grid>
               </Grid>

               <div className="mt-[25px] customMd:mt-5">
                  <p className="text-[#0D0B1E]">{t('Appendices')}</p>
                  <div className="mt-[15px] flex h-[50px] items-center justify-between rounded-10 bg-[#F5F8FC] p-2 customMd:mt-[18px] customMd:h-[55px] customMd:px-3">
                     <p className="text-[8px] text-[#7E8AAB] customMd:text-xs">{t('Allowed format: jpg, png, jpeg')}</p>
                     <p className="text-[8px] text-[#7E8AAB] customMd:text-xs">
                        {t('The maximum size of all photos is 2 MB')}
                     </p>
                     <Button
                        sx={{
                           height: '100%',
                           borderRadius: 33,
                           backgroundColor: 'white',
                           color: '#336CA4',
                           ':hover': { backgroundColor: '#cdd3d8' },
                        }}
                        className="!px-3 !text-xs customMd:!px-[32px] customMd:!text-sm"
                        startIcon={<Add />}
                        component="label"
                        role={undefined}
                        tabIndex={-1}
                        disabled={sendTicketIsMutating}
                     >
                        {t('Attachment')}
                        <VisuallyHiddenInput
                           type="file"
                           onChange={changeImageHandler}
                           accept=".jpg,.jpeg,.png"
                           multiple
                        />
                     </Button>
                  </div>
               </div>

               <div className="mt-5 flex flex-wrap items-center gap-2">
                  {picturesURL?.map(item => (
                     <div
                        key={item?.source || item?.image}
                        className="relative flex aspect-square w-16 shrink-0 items-center justify-center rounded-2xl border border-solid border-[#9da8ba48]"
                     >
                        <Image src={item?.source || item?.image} alt="pic" className="rounded-md object-cover" fill />
                        <div className="absolute start-0 top-0">
                           <Button
                              onClick={() => removePictureHandler(item)}
                              sx={{
                                 backgroundColor: '#FB7185',
                                 color: 'black',
                                 borderRadius: '100%',
                                 transition: 'all 0.2s',
                                 width: 20,
                                 height: 20,
                                 fontSize: 18,
                                 ':hover': { backgroundColor: '#fb7186cc', color: 'white !important' },
                              }}
                              disabled={sendTicketIsMutating}
                           >
                              <IoIosClose />
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>

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
                     disabled={sendTicketIsMutating}
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
                     loading={sendTicketIsMutating}
                  >
                     {t('Register and send tickets')}
                  </LoadingButton>
               </div>
            </form>
         )}
      </div>
   );
}

export default WriteNewTicket;
