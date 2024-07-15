import toast from 'react-hot-toast';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

// MUI
import { Button, CircularProgress, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';

// Icons
import { Clock, Add } from 'iconsax-react';
import { BiUser } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';

// Apis
import useGetTicket from '@/apis/tickets/useGetTicket';
import useSendReply from '@/apis/tickets/useSendReply';

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

function TicketDetail({ ticketsMutate }) {
   const [pictures, setPictures] = useState([]);
   const [picturesURL, setPicturesURL] = useState([]);

   const t = useTranslations('userDashboard');
   const { query, push } = useRouter();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: {
         message: '',
      },
      mode: 'onSubmit',
   });

   const { data: ticketData, isLoading: ticketIsLoading, mutate: ticketDataMutate } = useGetTicket(query?.ticketDetail);
   const { trigger: sendReplyTicketTrigger, isMutating: sendReplyTicketIsMutating } = useSendReply(query?.ticketDetail);

   const clearPageHandler = () => {
      ticketDataMutate();
      reset();
      setPictures([]);
      setPicturesURL([]);
      ticketsMutate();
   };

   const returnHandler = () => {
      clearPageHandler();
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
         newData.append('message', data?.message);

         sendReplyTicketTrigger(newData, {
            onSuccess: () => clearPageHandler(),
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
      <div>
         {ticketIsLoading ? (
            <div className="mt-20 flex items-center justify-center">
               <CircularProgress color="customPink" />
            </div>
         ) : (
            <>
               <div className="flex items-center justify-between" data-aos="fade-left" data-aos-duration="650">
                  <p className="font-almaraiBold700 text-[22px] leading-6 text-[#000B2C]">{ticketData?.subject}</p>

                  <div className="flex items-center gap-5">
                     <p className="font-almaraiExtraBold800 text-sm tracking-wide text-[#0451A4]">#{ticketData?.id}</p>

                     <p
                        className={`flex h-[25px] items-center rounded-10 px-[10px] text-xs ${
                           ticketData?.status === 'answered'
                              ? 'bg-[#B0FDD3] text-[#05B556]'
                              : ticketData?.status === 'pending'
                                ? 'bg-[#FFF2E2] text-[#FF9F1C]'
                                : ''
                        }`}
                     >
                        {ticketData?.status === 'answered'
                           ? t('Answered')
                           : ticketData?.status === 'pending'
                             ? t('Pending')
                             : ''}
                     </p>
                  </div>
               </div>

               <div className="mt-[30px] customMd:mt-[56px]">
                  {ticketData?.messages?.map((item, index) => (
                     <div
                        key={crypto.randomUUID()}
                        className={`mt-[25px] rounded-10 bg-[#F5F8FC] px-4 py-5 customMd:mt-[45px] customMd:max-w-[670px] customMd:p-[25px] ${
                           item?.is_admin ? 'ms-auto' : ''
                        }`}
                        data-aos="fade-right"
                        data-aos-duration="500"
                        data-aos-offset="0"
                        data-aos-delay={(index + 1) * 200}
                     >
                        {item?.is_admin && (
                           <div
                              className="mb-[5px] flex items-center gap-[5px] font-almaraiBold700 text-xs text-[#F37324]
                         customMd:mb-[10px] customMd:gap-[13px] customMd:text-sm"
                           >
                              <BiUser className="text-xl" />
                              <p>{t('RoadGraph answer :')}</p>
                           </div>
                        )}
                        <p className="text-xs leading-6 text-[#626E94] customMd:text-sm customMd:leading-7">
                           {item?.text}
                        </p>

                        {item?.files?.length ? (
                           <div className="my-2 flex items-center gap-2 customMd:my-3">
                              <p className="text-xs">{t('Attached photos :')}</p>
                              <div className="flex items-center gap-2">
                                 {item?.files?.map(innerItem => (
                                    <a
                                       href={innerItem}
                                       target="_blank"
                                       key={crypto.randomUUID()}
                                       rel="noreferrer"
                                       className="relative block size-10 rounded-lg border border-solid border-stone-400"
                                    >
                                       <Image
                                          src={innerItem}
                                          alt="sended file"
                                          fill
                                          className="rounded-lg object-cover"
                                       />
                                    </a>
                                 ))}
                              </div>
                           </div>
                        ) : null}

                        <div
                           className={`mt-[10px] flex h-[26px] w-fit items-center gap-[5px] rounded-md bg-white px-[5px] text-10 text-[#7E8AAB] ${
                              item?.is_admin ? 'ms-auto' : ''
                           }`}
                        >
                           <Clock className="size-4" />
                           <p dir="ltr">{item?.created}</p>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mb-[30px] mt-9 h-0.5 w-full bg-[#E4EAF0] customMd:mb-[25px] customMd:mt-[40px]" />

               <form
                  onSubmit={handleSubmit(formSubmit)}
                  data-aos="fade-left"
                  data-aos-duration="650"
                  data-aos-offset="0"
               >
                  <div className="space-y-[15px]">
                     <p className="text-[#626E94]">{t('Write your answer')}</p>

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
                        disabled={sendReplyTicketIsMutating}
                     />
                  </div>

                  <div className="mt-[25px] customMd:mt-5">
                     <p className="text-[#0D0B1E]">{t('Appendices')}</p>
                     <div className="mt-[15px] flex h-[50px] items-center justify-between rounded-10 bg-[#F5F8FC] p-2 customMd:mt-[18px] customMd:h-[55px] customMd:px-3">
                        <p className="text-[8px] text-[#7E8AAB] customMd:text-xs">
                           {t('Allowed format: jpg, png, jpeg')}
                        </p>
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
                           disabled={sendReplyTicketIsMutating}
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
                           <Image
                              src={item?.source || item?.image}
                              alt="pic"
                              className="rounded-md object-cover"
                              fill
                           />
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
                                 disabled={sendReplyTicketIsMutating}
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
                        disabled={sendReplyTicketIsMutating}
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
                        loading={sendReplyTicketIsMutating}
                     >
                        {t('Register and send answer')}
                     </LoadingButton>
                  </div>
               </form>
            </>
         )}
      </div>
   );
}

export default TicketDetail;
