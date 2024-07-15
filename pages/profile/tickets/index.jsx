import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Button, CircularProgress, Pagination } from '@mui/material';

// Icons
import { IoMdAdd } from 'react-icons/io';

// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';
import WriteNewTicket from '@/components/pages/profile/tickets/write-new-ticket/write-new-ticket';
import TicketDetail from '@/components/pages/profile/tickets/ticket-detail/ticket-detail';

// Assets
import noTickets from '@/assets/images/noTickets.png';

// Apis
import useGetTickets from '@/apis/tickets/useGetTickets';

function Tickets() {
   const [pageStatus, setPageStatus] = useState(1);

   const t = useTranslations('userDashboard');
   const { push, query } = useRouter();

   const { data: ticketsData, isLoading: ticketsIsLoading, mutate: ticketsMutate } = useGetTickets(pageStatus);

   const goToTicketDetailPage = ticketId => {
      push(`?ticketDetail=${ticketId}`);
   };

   const changePageHandler = (e, newValue) => {
      setPageStatus(newValue);
   };

   console.log(ticketsData);

   return (
      <ProfileLayout>
         <div>
            {query?.ticketDetail ? (
               <div className="mt-5 customMd:mt-10">
                  <TicketDetail ticketsMutate={ticketsMutate} />
               </div>
            ) : query?.newTicket === 'true' ? (
               <>
                  <div className="rounded-10 bg-[#F5F8FC] p-[15px]">
                     <p className="font-almaraiExtraBold800 text-[#0F172A] customMd:text-xl">{t('Write new ticket')}</p>
                  </div>

                  <div className="mt-5">
                     <WriteNewTicket ticketsMutate={ticketsMutate} />
                  </div>
               </>
            ) : (
               <>
                  <div
                     className="flex flex-wrap items-center justify-between gap-5 rounded-10 bg-[#F5F8FC] p-[15px]"
                     data-aos="fade-left"
                     data-aos-duration="650"
                  >
                     <p className="font-almaraiExtraBold800 text-[#0F172A] customMd:text-xl">{t('Tickets list')}</p>
                     <Link href="?newTicket=true">
                        <Button
                           variant="contained"
                           sx={{
                              height: 46,
                              color: 'white',
                              borderRadius: 53,
                              paddingX: '24px',
                           }}
                           className="!text-10 customMd:!text-xs"
                           startIcon={<IoMdAdd />}
                        >
                           {t('Add new ticket')}
                        </Button>
                     </Link>
                  </div>

                  {ticketsIsLoading ? (
                     <div className="mt-20 flex items-center justify-center">
                        <CircularProgress color="customPink" />
                     </div>
                  ) : ticketsData?.total_objects > 0 ? (
                     <>
                        <div className="mt-5 max-customMd:overflow-auto">
                           <table className="w-full border-separate border-spacing-y-[15px]">
                              <tbody>
                                 {ticketsData?.result?.map((item, index) => (
                                    <tr
                                       className="h-[60px] cursor-pointer bg-[#F5F8FC] text-xs transition-all duration-150 hover:bg-[#dddfe3]"
                                       key={item?.id}
                                       onClick={() => goToTicketDetailPage(item?.id)}
                                       data-aos="fade-right"
                                       data-aos-duration="600"
                                       data-aos-delay={(index + 1) * 200}
                                    >
                                       <td
                                          className="rounded-s-10 ps-6 text-center align-middle font-almaraiExtraBold800 tracking-wide
                               text-[#0451A4] max-customMd:text-nowrap max-customMd:px-4"
                                       >
                                          #{item?.id}
                                       </td>
                                       <td className="text-center align-middle font-bold max-customMd:text-nowrap max-customMd:px-4">
                                          {item?.service}
                                       </td>
                                       <td className="text-center align-middle text-[#626E94] max-customMd:text-nowrap max-customMd:px-4">
                                          {item?.subject}
                                       </td>
                                       <td className="text-center align-middle font-almaraiBold700 max-customMd:text-nowrap max-customMd:px-4">
                                          {item?.messages?.[0]?.elapsed_time || ''}
                                       </td>
                                       <td className="text-center align-middle max-customMd:text-nowrap max-customMd:px-4">
                                          <div className="mx-auto flex w-fit items-center gap-1">
                                             <span
                                                className={`block size-[10px] rounded-full ${
                                                   item?.importance === '1'
                                                      ? 'bg-[#A0E6A5]'
                                                      : item?.importance === '2'
                                                        ? 'bg-[#388E3C]'
                                                        : item?.importance === '3'
                                                          ? 'bg-[#05B556]'
                                                          : ''
                                                }`}
                                             />
                                             <p
                                                className={`font-bold ${
                                                   item?.importance === '1'
                                                      ? 'text-[#A0E6A5]'
                                                      : item?.importance === '2'
                                                        ? 'text-[#388E3C]'
                                                        : item?.importance === '3'
                                                          ? 'text-[#05B556]'
                                                          : ''
                                                }`}
                                             >
                                                {item?.importance === '1'
                                                   ? t('Normal')
                                                   : item?.importance === '2'
                                                     ? t('Important')
                                                     : item?.importance === '3'
                                                       ? t('Too important')
                                                       : null}
                                             </p>
                                          </div>
                                       </td>
                                       <td className="rounded-e-10 pe-5 text-center align-middle max-customMd:text-nowrap max-customMd:px-4">
                                          <p
                                             className={`mx-auto flex h-[27px] w-fit items-center rounded-10 px-4 text-10 ${
                                                item?.status === 'answered'
                                                   ? 'bg-[#B0FDD3] text-[#05B556]'
                                                   : item?.status === 'pending'
                                                     ? 'bg-[#FFF2E2] text-[#FF9F1C]'
                                                     : ''
                                             }`}
                                          >
                                             {item?.status === 'answered'
                                                ? t('Answered')
                                                : item?.status === 'pending'
                                                  ? t('Pending')
                                                  : ''}
                                          </p>
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>

                        {ticketsData?.total_pages > 1 && (
                           <div className="mt-[55px] flex items-center justify-center">
                              <Pagination
                                 count={ticketsData?.total_pages}
                                 color="primary"
                                 onChange={changePageHandler}
                                 page={pageStatus}
                                 sx={{
                                    '& .MuiButtonBase-root': {
                                       border: '1px solid #E4EAF0',
                                       color: '#7E8AAB',
                                    },
                                    '& .Mui-selected': {
                                       color: 'white !important',
                                    },
                                 }}
                              />
                           </div>
                        )}
                     </>
                  ) : (
                     <div className="mt-[100px] flex flex-col items-center customMd:mt-[172px]">
                        <div className="relative h-[172px] w-[161px]">
                           <Image src={noTickets} alt="empty favorites" fill />
                        </div>
                        <p className="mt-7 text-center font-almaraiExtraBold800 text-[18px] leading-6 customMd:text-[22px]">
                           {t('Your Tickets list is empty')}
                        </p>
                        <p className="mt-2 text-center text-sm leading-6 text-[#626E94]">
                           {t('You have not received any tickets')}
                        </p>
                     </div>
                  )}
               </>
            )}
         </div>
      </ProfileLayout>
   );
}

export default Tickets;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
