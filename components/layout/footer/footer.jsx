/* eslint-disable jsx-a11y/control-has-associated-label */
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Button, Grid, IconButton } from '@mui/material';

// Icons
import { ArrowLeft, Instagram } from 'iconsax-react';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';
import emailIcon from '@/assets/icons/emailIconFooter.svg';
import footerLine from '@/assets/icons/footerLine.svg';
import footerArrow from '@/assets/icons/footerArrow.svg';
import FooterStyle from './footer.style';

// Apis
import useGetBlogs from '@/apis/footer/useGetBlogs';

const socialButtonsStyles = {
   color: 'white',
   width: 45,
   height: 45,
   backgroundColor: '#65A5FC',
   border: '1px solid',
   transition: 'all 0.2s',
   ':hover': {
      backgroundColor: '#E5EFFD',
      color: '#626E94',
      borderColor: '#626E94',
   },
};

function Footer() {
   const { locale } = useRouter();
   const t = useTranslations('footer');

   const { data: blogsData } = useGetBlogs();

   const sendEmail = e => {
      e?.preventDefault();
      console.log(e?.target?.[0]?.value);
   };

   return (
      <FooterStyle>
         <div id="back">
            <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-9 px-5 py-12 customMd:flex-row customMd:items-center customMd:px-[60px] customMd:py-6">
               <p
                  className="max-w-[542px] font-almaraiBold700 text-2xl leading-[46px] text-white customMd:text-3xl"
                  data-aos="fade-up"
               >
                  {t('Ready')}
               </p>
               <Link href="/aboutUs#reqForm" data-aos="zoom-in" data-aos-delay="200">
                  <Button
                     variant="contained"
                     className="!w-full customMd:!w-[190px]"
                     sx={{
                        height: 52,
                        borderRadius: 57,
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#4678BC',
                        backgroundColor: 'white',
                        ':hover': {
                           backgroundColor: '#CED2DE',
                        },
                     }}
                     endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                  >
                     {t('Counseling request')}
                  </Button>
               </Link>
            </div>
         </div>

         <div className="bg-[#EBF3FF]">
            <div className="mx-auto max-w-[1440px] px-5 py-10 customMd:px-[60px] customMd:pb-8 customMd:pt-[78px]">
               <Grid container spacing={{ md: 5, lg: 0 }}>
                  <Grid item xs={12} md={3.5}>
                     <div className="mb-[75px] customMd:mb-0 customMd:max-w-[306px]" data-aos="fade-right">
                        <Link href="/" className="block h-[51px] w-[110px] customMd:h-[31px] customMd:w-[67px]">
                           <Image src={headerLogo} alt="footer logo" className="size-full" />
                        </Link>
                        <p className="mt-4 text-xs leading-[30px]">{t('footer explain 1')}</p>
                        <div className="mt-5 flex items-center gap-5">
                           <a
                              href="https://www.instagram.com/roadgraph_studio?igsh=ZGUzMzM3NWJiOQ=="
                              target="_blank"
                              rel="noreferrer"
                           >
                              <IconButton sx={socialButtonsStyles}>
                                 <Instagram size="20px" />
                              </IconButton>
                           </a>
                           <a href="https://t.me/Roadgraph" target="_blank" rel="noreferrer">
                              <IconButton sx={socialButtonsStyles}>
                                 <FaTelegramPlane fontSize="20px" />
                              </IconButton>
                           </a>
                           <a
                              href="https://www.linkedin.com/in/roadgraph-studio-80526030a"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <IconButton sx={socialButtonsStyles}>
                                 <FaLinkedin fontSize="20px" />
                              </IconButton>
                           </a>
                        </div>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={4.5}>
                     <Grid container rowSpacing={{ xs: 4.5, sm: 0 }}>
                        <Grid item xs={12} sm={7}>
                           <div data-aos="fade-right" data-aos-delay="200">
                              <p className="relative font-almaraiBold700 text-xl">
                                 {t('Quick links')}
                                 <Image src={footerLine} alt="line" className="absolute bottom-[-12px] start-0" />
                              </p>
                              <Grid container marginTop="37px">
                                 <Grid item xs={6}>
                                    <div className="flex flex-col gap-5 text-xs">
                                       <Link
                                          href="/"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-customPink"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('Home')}
                                       </Link>
                                       <Link
                                          href="/aboutUs"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-customPink"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('About us')}
                                       </Link>
                                       {/* <Link
                                          href="/services/website"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-customPink"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('Services')}
                                       </Link> */}
                                       <Link
                                          href="/allProducts"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-customPink"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('Projects')}
                                       </Link>
                                    </div>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <div className="flex flex-col gap-5 text-xs">
                                       <Link
                                          href="/faqs"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-customPink"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('FAQ')}
                                       </Link>
                                       <Link
                                          href="/prices"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-customPink"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('Prices')}
                                       </Link>
                                       <Link
                                          href="/contactUs"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-customPink"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('Contact us')}
                                       </Link>
                                    </div>
                                 </Grid>
                              </Grid>
                           </div>
                        </Grid>
                        <Grid item xs={12} sm={5} data-aos="fade-right" data-aos-delay="400">
                           <p className="relative font-almaraiBold700 text-xl">
                              {t('Blog')}
                              <Image src={footerLine} alt="line" className="absolute bottom-[-12px] start-0" />
                           </p>

                           <div className="mt-[37px] flex max-w-[150px] flex-col gap-5 text-xs">
                              {blogsData?.result?.map(item => (
                                 <Link
                                    href={`/blogs/blogDetail/${item?.title}`}
                                    className="flex items-start gap-1 leading-[18px] transition-all duration-150 hover:text-customPink"
                                    key={item?.id}
                                 >
                                    <Image
                                       src={footerArrow}
                                       alt="arrow"
                                       {...(locale === 'en' && { className: 'rotate-180' })}
                                    />
                                    <div>
                                       <p className="line-clamp-2 h-9">{item?.title}</p>
                                       <p className="text-10 text-[#626E94]">{item?.created_at}</p>
                                    </div>
                                 </Link>
                              ))}
                           </div>
                        </Grid>
                     </Grid>
                  </Grid>
                  <Grid item xs={12} md={4}>
                     <div className="mt-[83px] customMd:mt-0" data-aos="fade-right" data-aos-delay="600">
                        <p className="mb-6 font-almaraiBold700 text-2xl customMd:text-base">{t('Newsletter')}</p>
                        <form className="flex h-12 items-center rounded bg-white px-4" onSubmit={sendEmail}>
                           <input
                              type="text"
                              className="h-full grow border-none bg-transparent font-almaraiRegular400 text-sm outline-none placeholder:text-xs placeholder:text-black"
                              placeholder={t('Enter your email')}
                           />
                           <IconButton type="submit" size="small" sx={{ ':hover': { backgroundColor: '#EBF3FF' } }}>
                              <Image src={emailIcon} alt="email" />
                           </IconButton>
                        </form>

                        <p className="mt-3 text-xs leading-[30px]">{t('Newsletter description')}</p>
                     </div>
                  </Grid>
               </Grid>

               <p className="mt-[62px] text-center text-xs">{t('Rights')}</p>
            </div>
         </div>
      </FooterStyle>
   );
}

export default Footer;
