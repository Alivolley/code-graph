import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, Grid, IconButton, Tooltip } from '@mui/material';

// Icons
import { ArrowDown2, HeartAdd } from 'iconsax-react';
import { TfiArrowLeft } from 'react-icons/tfi';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BiSolidMessageRoundedCheck } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { FaCircleUser } from 'react-icons/fa6';
import { IoCloseOutline } from 'react-icons/io5';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';

// Styles
import HeaderStyle from '../header/header.style';

// Context
import { useGlobalContext } from '@/context/store';

// Components
import UserDashboardRightSide from '@/components/templates/user-dashboard-rightSide/user-dashboard-rightSide';
import DashboardMenuModal from '@/components/templates/dashboard-menu-modal/dashboard-menu-modal';
import DashboardProfileModal from '@/components/templates/dashboard-profile-modal/dashboard-profile-modal';

// Apis
import useGetCategories from '@/apis/categories/useGetCategories';
import useGetUserInfo from '@/apis/userInfo/useGetUserInfo';

const iconButtonSx = {
   width: 50,
   height: 50,
   backgroundColor: 'white',
   color: '#C3CAD9',
   boxShadow: '0px 2px 5px 0px #26334D08',
   ':hover': { color: '#65A5FC', backgroundColor: '#e6e6e6' },
};

function ProfileLayout({ children }) {
   const [showDashboardProfileModal, setShowDashboardProfileModal] = useState(false);
   const [showDashboardMenuModal, setShowDashboardMenuModal] = useState(false);

   const { isDashboardMenuSideBarOpen, setIsDashboardMenuSideBarOpen } = useGlobalContext();
   const { data: categoryData, isLoading: categoryIsLoading } = useGetCategories();

   // eslint-disable-next-line no-unused-vars
   const getUserInfo = useGetUserInfo(true);

   const t = useTranslations('userDashboard');
   const { locale, push, query, pathname, asPath } = useRouter();

   const changeLanguage = () => {
      push({ pathname, query }, asPath, { locale: locale === 'en' ? 'fa' : 'en' });
   };

   return (
      <div>
         <header className="flex h-[100px] items-center border-b-2 border-solid border-[#EDEFF2] bg-[#f7f8fa] px-[25px]">
            <HeaderStyle className="hidden w-full items-center justify-between customMd:flex">
               <div className="flex items-center gap-[19px]">
                  <IconButton sx={iconButtonSx} onClick={() => setIsDashboardMenuSideBarOpen(prev => !prev)}>
                     {isDashboardMenuSideBarOpen ? (
                        <AiOutlineMenuUnfold {...(locale === 'en' && { className: 'rotate-180' })} />
                     ) : (
                        <AiOutlineMenuFold {...(locale === 'en' && { className: 'rotate-180' })} />
                     )}
                  </IconButton>

                  <div className="flex items-center gap-4 customLg:gap-9">
                     <Link href="/">
                        <Image src={headerLogo} alt="header logo" />
                     </Link>
                     <div className="flex items-center gap-3 customLg:gap-6">
                        <div id="dropdownWrapper">
                           <div
                              className="flex cursor-pointer items-center gap-2 transition-all duration-150"
                              id="dropdownTitle"
                           >
                              <p className="text-xs customLg:text-sm">{t('Services')}</p>
                              <ArrowDown2 size="15" id="dropdownArrow" />
                           </div>

                           <div
                              id="dropdownBox"
                              className="w-[340px] rounded-lg border-t-4 border-solid border-[#65A5FC] bg-white px-[22px] py-[26px]"
                           >
                              <Grid container rowSpacing="24px" columnSpacing="30px" position="relative">
                                 {categoryIsLoading ? (
                                    <>
                                       <Grid item md={6}>
                                          <div className="h-4 w-[120px] animate-pulse rounded bg-[#626e9441]" />
                                       </Grid>
                                       <Grid item md={6}>
                                          <div className="h-4 w-[120px] animate-pulse rounded bg-[#626e9441]" />
                                       </Grid>
                                       <Grid item md={6}>
                                          <div className="h-4 w-[120px] animate-pulse rounded bg-[#626e9441]" />
                                       </Grid>
                                       <Grid item md={6}>
                                          <div className="h-4 w-[120px] animate-pulse rounded bg-[#626e9441]" />
                                       </Grid>
                                    </>
                                 ) : (
                                    categoryData?.map(item => (
                                       <Grid item md={6} key={item?.id}>
                                          <Link
                                             href={`/services/${item?.title}`}
                                             className="flex items-center gap-2 text-[#626E94] transition-all duration-200 hover:text-customPink"
                                          >
                                             <div
                                                dangerouslySetInnerHTML={{ __html: item?.icon }}
                                                className="flex items-center justify-center [&>svg]:size-[18px]"
                                             />

                                             <p className="whitespace-nowrap text-xs">{item?.title}</p>
                                          </Link>
                                       </Grid>
                                    ))
                                 )}

                                 <div className="absolute bottom-0 start-[calc(50%+20px)] top-[24px] w-px translate-x-1/2 bg-[#E4EAF0]" />
                              </Grid>
                           </div>
                        </div>

                        <Link
                           href="/allProducts"
                           className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                        >
                           <p className="text-xs customLg:text-sm">{t('Projects')}</p>
                        </Link>

                        <Link
                           href="/blogs"
                           className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                        >
                           <p className="text-xs customLg:text-sm">{t('Blogs')}</p>
                        </Link>

                        <Link
                           href="/prices"
                           className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                        >
                           <p className="text-xs customLg:text-sm">{t('Prices')}</p>
                        </Link>

                        <Link
                           href="/aboutUs"
                           className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                        >
                           <p className="text-xs customLg:text-sm">{t('About us')}</p>
                        </Link>

                        <Link
                           href="/contactUs"
                           className="flex cursor-pointer items-center gap-2 text-[#3A3E4D] transition-all duration-150 hover:text-[#65A5FC]"
                        >
                           <p className="text-xs customLg:text-sm">{t('Contact us')}</p>
                        </Link>

                        <Link
                           href="/faqs"
                           className="flex cursor-pointer items-center gap-2 transition-all duration-150 hover:text-[#65A5FC]"
                        >
                           <p className="text-xs customLg:text-sm">{t('Faqs')}</p>
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <IconButton
                     sx={{
                        fontSize: 14,
                        backgroundColor: 'white',
                        color: '#C3CAD9',
                        width: 45,
                        height: 45,
                        fontFamily: 'almaraiBold700',
                        boxShadow: '0px 2px 5px 0px #26334D08',
                        ':hover': { color: '#65A5FC', backgroundColor: '#e6e6e6' },
                     }}
                     onClick={changeLanguage}
                  >
                     {locale === 'en' ? 'فا' : 'EN'}
                  </IconButton>

                  <Link href="/">
                     <Button
                        variant="contained"
                        sx={{
                           height: 45,
                           borderRadius: 57,
                           fontSize: 16,
                           paddingX: '20px',
                           backgroundColor: 'white',
                           boxShadow: '0px 2px 5px 0px #26334D08',
                           color: '#C3CAD9',
                           ':hover': { color: '#65A5FC', backgroundColor: '#e6e6e6' },
                        }}
                        startIcon={<TfiArrowLeft {...(locale === 'fa' && { className: 'rotate-180' })} />}
                     >
                        {t('Back to home page')}
                     </Button>
                  </Link>
               </div>
            </HeaderStyle>

            <div className="flex w-full items-center justify-between customMd:hidden">
               <div className="flex items-center gap-3">
                  <IconButton
                     sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'white',
                        color: '#C3CAD9',
                        boxShadow: '0px -1px 11px 0px #26334D12',
                        ...(showDashboardMenuModal && {
                           border: '2px solid #C3CAD9',
                        }),
                     }}
                     onClick={() => setShowDashboardMenuModal(true)}
                  >
                     {showDashboardMenuModal ? <IoCloseOutline className="size-10" /> : <FiMenu />}
                  </IconButton>

                  <Link href="/" className="h-[35px] w-[76px] customXs:h-[45px] customXs:w-[97px]">
                     <Image src={headerLogo} alt="header logo" className="size-full" />
                  </Link>
               </div>

               <div className="flex items-center gap-1 customXs:gap-5">
                  <IconButton
                     sx={{
                        fontSize: 14,
                        width: 50,
                        height: 50,
                        fontFamily: 'almaraiBold700',
                        backgroundColor: 'white',
                        color: '#C3CAD9',
                        boxShadow: '0px -1px 11px 0px #26334D12',
                     }}
                     onClick={changeLanguage}
                  >
                     {locale === 'en' ? 'فا' : 'EN'}
                  </IconButton>

                  <IconButton
                     sx={{
                        color: '#C3CAD9',
                        fontSize: 20,
                        width: 50,
                        height: 50,
                        fontFamily: 'almaraiBold700',
                        backgroundColor: 'white',
                        boxShadow: '0px -1px 11px 0px #26334D12',
                        ...(showDashboardProfileModal && {
                           border: '2px solid #C3CAD9',
                        }),
                     }}
                     onClick={() => setShowDashboardProfileModal(true)}
                  >
                     {showDashboardProfileModal ? <IoCloseOutline className="size-10" /> : <FaCircleUser />}
                  </IconButton>
               </div>
            </div>
         </header>

         <div className="customMd:flex">
            <aside
               className={`shrink-0 border-e-2 border-solid border-[#EDEFF2] bg-[#f7f8fa] px-[25px] py-[30px] transition-all duration-[400ms] max-customMd:hidden ${
                  isDashboardMenuSideBarOpen ? 'w-[193px]' : 'w-[100px]'
               }`}
            >
               <div className="flex flex-col gap-5">
                  <Link href="/profile/favorites" className="flex items-center gap-3 hover:[&>p]:text-[#65A5FC]">
                     <Tooltip
                        title={!isDashboardMenuSideBarOpen && <div className="text-base">{t('Favorites')}</div>}
                        placement="left"
                        arrow
                     >
                        <IconButton
                           sx={{
                              ...iconButtonSx,
                              ...(pathname.startsWith('/profile/favorites') && {
                                 color: '#FD8266',
                                 border: '1px solid #FD8266',
                              }),
                           }}
                        >
                           <HeartAdd variant="Bold" />
                        </IconButton>
                     </Tooltip>
                     <p
                        className={`font-almaraiBold700 text-base text-[#6B7A99] transition-all duration-200 text-nowrap
                               ${isDashboardMenuSideBarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
                     >
                        {t('Favorites')}
                     </p>
                  </Link>

                  <Link href="/profile/tickets" className="relative flex items-center gap-3 hover:[&>p]:text-[#65A5FC]">
                     <Tooltip
                        title={!isDashboardMenuSideBarOpen && <div className="text-base">{t('Tickets')}</div>}
                        placement="left"
                        arrow
                     >
                        <IconButton
                           sx={{
                              ...iconButtonSx,
                              ...(pathname.startsWith('/profile/tickets') && {
                                 color: '#FD8266',
                                 border: '1px solid #FD8266',
                              }),
                           }}
                        >
                           <BiSolidMessageRoundedCheck />
                        </IconButton>
                     </Tooltip>
                     <p
                        className={`font-almaraiBold700 text-base text-[#6B7A99] transition-all duration-200 text-nowrap
                               ${isDashboardMenuSideBarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
                     >
                        {t('Tickets')}
                     </p>

                     <div className="absolute start-0 top-0.5 size-[10px] rounded-full bg-[#E62E7B]" />
                  </Link>
               </div>
            </aside>
            <div className="p-5 max-customMd:w-full customMd:grow customMd:p-[15px] customMd:transition-all customMd:duration-[400ms]">
               {children}
            </div>
            <aside className="w-[300px] shrink-0 border-s-2 border-solid border-[#EDEFF2] bg-[#f7f8fa] p-[30px] max-customMd:hidden">
               <UserDashboardRightSide />
            </aside>
         </div>

         <DashboardMenuModal
            setShowDashboardMenuModal={setShowDashboardMenuModal}
            showDashboardMenuModal={showDashboardMenuModal}
         />

         <DashboardProfileModal
            setShowDashboardProfileModal={setShowDashboardProfileModal}
            showDashboardProfileModal={showDashboardProfileModal}
         />
      </div>
   );
}

export default ProfileLayout;
