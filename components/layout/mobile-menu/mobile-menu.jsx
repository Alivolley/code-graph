import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Button,
   CircularProgress,
   Drawer,
   FormControl,
   IconButton,
   InputAdornment,
   TextField,
} from '@mui/material';

// Icons
import { Add, ArrowDown2 } from 'iconsax-react';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';
// import searchIcon from '@/assets/icons/search-icon.svg';

// Components
// import LogoutModal from '@/components/templates/logout-modal/logout-modal';
import MobileMenuStyle from './mobile-menu.style';

// Apis
// import useCategories from '@/apis/categories/useCategories';
// import useGetProductsCategory from '@/apis/categories/useGetProductsCategory';

function MobileMenu({ open, onClose }) {
   const [showLogoutModal, setShowLogoutModal] = useState(false);
   const [expanded, setExpanded] = useState(false);

   const { push, locale, query } = useRouter();

   const t = useTranslations('header');

   const { register, handleSubmit, setValue } = useForm({
      defaultValues: {
         searchInput: '',
      },
   });

   const formSubmit = data => {
      push(`/search?productName=${data.searchInput}&page=1`);
      onClose();
   };

   useEffect(() => {
      if (query?.productName) {
         setValue('searchInput', query.productName);
      } else {
         setValue('searchInput', '');
      }
   }, [query]);

   const handleAccordionChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <Drawer anchor="left" open={open} onClose={onClose} dir={locale === 'en' ? 'ltr' : 'rtl'}>
         <MobileMenuStyle className="w-[300px]">
            <div className="flex items-start justify-between">
               <Link href="/" className="p-5">
                  <div className="w-[60px] shrink-0">
                     <Image src={headerLogo} alt="logo" className="size-full" />
                  </div>
               </Link>
               <IconButton onClick={onClose}>
                  <Add className="rotate-45" size="32" />
               </IconButton>
            </div>
            <div className="px-5">
               <div className="border-y border-solid border-[#BFC4D5] py-9">
                  <Accordion sx={{ boxShadow: 'none' }}>
                     <AccordionSummary expandIcon={<ArrowDown2 color="customPink" />} sx={{ padding: '0 !important' }}>
                        <div className="flex items-center gap-2 text-sm">
                           {/* <PersonOutlineOutlinedIcon /> */}
                           پروفایل
                        </div>
                     </AccordionSummary>
                     <AccordionDetails>
                        <div className="-mt-4 flex flex-col items-start">
                           <Link
                              href="/profile/information"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] p-3 text-sm"
                           >
                              {/* <PersonOutlinedIcon fontSize="small" /> */}
                              اطلاعات حساب
                           </Link>
                           <Link
                              href="/profile/address"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] p-3 text-sm"
                           >
                              {/* <LocationOnOutlinedIcon fontSize="small" /> */}
                              آدرس های من
                           </Link>
                           <Link
                              href="/profile/orders"
                              className="flex w-full items-center gap-1 border-b border-solid border-[#E4EAF0] p-3 text-sm"
                           >
                              {/* <AccountBalanceWalletOutlinedIcon fontSize="small" /> */}
                              سفارشات
                           </Link>
                           <Button
                              className="!p-3 text-sm"
                              color="customPink"
                              // startIcon={<LogoutOutlinedIcon fontSize="small" className="rotate-180" />}
                              onClick={() => setShowLogoutModal(true)}
                           >
                              خروج از حساب کاربری
                           </Button>
                        </div>
                     </AccordionDetails>
                  </Accordion>
                  {/* 
              

                  <div>
                     <Accordion sx={{ boxShadow: 'none' }}>
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon color="customBlue" />}
                           sx={{ padding: '0 !important' }}
                        >
                           <div className="flex items-center gap-2 text-sm text-customBlue">
                              <Image src={categoriesIcon} alt="categories" />
                              {t('categories')}
                           </div>
                        </AccordionSummary>
                        <AccordionDetails>
                           <div className="ms-[-15px] max-h-[300px] overflow-auto pe-8 ps-3" id="scroll">
                              {categoryList?.map(item => (
                                 <Accordion
                                    key={item.id}
                                    sx={{ boxShadow: 'none' }}
                                    expanded={expanded === item.title}
                                    onChange={handleAccordionChange(item.title)}
                                 >
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon color="customBlue" />}
                                       sx={{ padding: '0 !important' }}
                                    >
                                       <div className="flex items-center gap-2 text-sm text-customBlue">
                                          <div className="size-1 rounded-full bg-customBlue" />
                                          {item?.title}
                                       </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       {productsCategoryIsLoading ? (
                                          <div className="flex w-full items-center justify-center">
                                             <CircularProgress
                                                color="customPink"
                                                sx={{ width: '25px !important', height: '25px !important' }}
                                             />
                                          </div>
                                       ) : (
                                          productsCategoryList?.result?.map(innerItem => (
                                             <Link
                                                href={`/productDetail/${innerItem?.title}`}
                                                className="flex items-center gap-2 py-2 text-sm text-customBlue"
                                                id="arrowIcon"
                                                key={innerItem.id}
                                             >
                                                <div className="size-1 rounded-full bg-customBlue" />
                                                {innerItem?.title}
                                             </Link>
                                          ))
                                       )}
                                    </AccordionDetails>
                                 </Accordion>
                              ))}
                           </div>
                        </AccordionDetails>
                     </Accordion>

                     <div className="mt-1 flex flex-col items-start gap-3 text-sm">
                        {!isUserLogin && (
                           <Link href="/login">
                              <Button size="small" color="customBlue" startIcon={<PersonOutlineOutlinedIcon />}>
                                 {t('signup')}
                              </Button>
                           </Link>
                        )}
                        <Link href="/categoryDetail?ordering=sales">
                           <Button size="small" color="customBlue" startIcon={<WhatshotIcon />}>
                              {t('top sellers')}
                           </Button>
                        </Link>
                        <Link href="/categoryDetail?ordering=created">
                           <Button size="small" color="customBlue" startIcon={<FiberNewIcon />}>
                              {t('newest')}
                           </Button>
                        </Link>
                        <Link href="/categoryDetail?has_discount=true">
                           <Button
                              size="small"
                              color="customBlue"
                              startIcon={<Image src={discountIcon} alt="discount" />}
                           >
                              {t('discounts and offers')}
                           </Button>
                        </Link>
                     </div>
                  </div> */}
               </div>

               {/* <div className="mt-5 flex flex-col items-start gap-4 pb-5 text-sm">
                  <Link href="/faqs">{t('any question')}</Link>
                  <Link href="/aboutUs">{t('about us')}</Link>
                  <Link href="/contactUs">{t('contact us')}</Link>
               </div> */}
            </div>
         </MobileMenuStyle>
         {/* <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} /> */}
      </Drawer>
   );
}

export default MobileMenu;
