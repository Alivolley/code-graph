import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, Drawer, IconButton } from '@mui/material';

// Icons
import { ArrowDown2, HeartAdd } from 'iconsax-react';
import { BiSolidMessageRoundedCheck } from 'react-icons/bi';

// Apis
import useGetCategories from '@/apis/categories/useGetCategories';

const iconButtonSx = {
   width: 50,
   height: 50,
   backgroundColor: 'white',
   color: '#C3CAD9',
   boxShadow: '0px 2px 5px 0px #26334D08',
   border: '2px solid #C3CAD9',
   ':hover': { color: '#65A5FC', backgroundColor: '#e6e6e6' },
};

function DashboardMenuModal({ setShowDashboardMenuModal, showDashboardMenuModal }) {
   const [servicesExpand, setServicesExpand] = useState(false);

   const { data: categoryData, isLoading: categoryIsLoading } = useGetCategories();

   const { locale, pathname } = useRouter();
   const t = useTranslations('userDashboard');

   return (
      <Drawer
         anchor="left"
         dir={locale === 'en' ? 'ltr' : 'rtl'}
         open={showDashboardMenuModal}
         onClose={() => setShowDashboardMenuModal(false)}
         sx={{
            '&>.MuiPaper-root': { width: '100%', marginTop: '100px', boxShadow: 'none' },
            '&>.MuiBackdrop-root': { backgroundColor: 'rgba(0, 0, 0, 0)' },
         }}
      >
         <div className="px-[30px] pb-[30px] pt-3">
            <Accordion sx={{ boxShadow: 'none' }} expanded={servicesExpand}>
               <AccordionSummary
                  expandIcon={<ArrowDown2 size="18" {...(servicesExpand && { color: '#FD8266' })} />}
                  sx={{ padding: '0 !important', fontSize: '14px' }}
                  onClick={() => setServicesExpand(prev => !prev)}
               >
                  <p {...(servicesExpand && { className: 'text-customPink' })}>{t('Services')}</p>
               </AccordionSummary>
               <AccordionDetails>
                  <div className="-mt-4 flex flex-col items-start">
                     {categoryIsLoading ? (
                        <div className="space-y-2">
                           <div className="h-5 w-[150px] animate-pulse rounded bg-[#626e9441]" />
                           <div className="h-5 w-[150px] animate-pulse rounded bg-[#626e9441]" />
                           <div className="h-5 w-[150px] animate-pulse rounded bg-[#626e9441]" />
                           <div className="h-5 w-[150px] animate-pulse rounded bg-[#626e9441]" />
                        </div>
                     ) : (
                        categoryData?.map(item => (
                           <Link
                              href={`/services/${item?.title}`}
                              className="flex w-full items-center gap-2 border-b border-solid border-[#E4EAF0] py-3 text-xs"
                              key={item?.id}
                           >
                              <div
                                 dangerouslySetInnerHTML={{ __html: item?.icon }}
                                 className="flex items-center justify-center [&>svg]:size-[18px]"
                              />
                              <p>{item?.title}</p>
                           </Link>
                        ))
                     )}
                  </div>
               </AccordionDetails>
            </Accordion>

            <Link href="/allProducts" className="block w-full py-3 text-sm">
               {t('Projects')}
            </Link>

            <Link href="/blogs" className="block w-full py-3 text-sm">
               {t('Blogs')}
            </Link>

            <Link href="/prices" className="block w-full py-3 text-sm">
               {t('Prices')}
            </Link>

            <Link href="/aboutUs" className="block w-full py-3 text-sm">
               {t('About us')}
            </Link>

            <Link href="/contactUs" className="block w-full py-3 text-sm">
               {t('Contact us')}
            </Link>

            <Link href="/faqs" className="block w-full py-3 text-sm">
               {t('Faqs')}
            </Link>

            <div className="mt-3 flex flex-col gap-5 border-t border-solid border-[#C3CAD9] pt-5">
               <Link href="/profile/favorites" className="flex items-center gap-3 hover:[&>p]:text-[#65A5FC]">
                  <IconButton
                     sx={{
                        ...iconButtonSx,
                        ...(pathname.startsWith('/profile/favorites') && {
                           color: '#FD8266',
                           borderColor: '#FD8266',
                        }),
                     }}
                  >
                     <HeartAdd variant="Bold" />
                  </IconButton>

                  <p className="text-nowrap font-almaraiBold700 text-base text-[#6B7A99] transition-all duration-200">
                     {t('Favorites')}
                  </p>
               </Link>

               <Link href="/profile/tickets" className="relative flex items-center gap-3 hover:[&>p]:text-[#65A5FC]">
                  <IconButton
                     sx={{
                        ...iconButtonSx,
                        ...(pathname.startsWith('/profile/tickets') && {
                           color: '#FD8266',
                           borderColor: '#FD8266',
                        }),
                     }}
                  >
                     <BiSolidMessageRoundedCheck />
                  </IconButton>

                  <p className="text-nowrap font-almaraiBold700 text-base text-[#6B7A99] transition-all duration-200">
                     {t('Tickets')}
                  </p>

                  <div className="absolute start-0 top-0.5 size-[10px] rounded-full bg-[#E62E7B]" />
               </Link>
            </div>
         </div>
      </Drawer>
   );
}

export default DashboardMenuModal;
