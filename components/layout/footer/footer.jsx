import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Button, Grid, IconButton } from '@mui/material';

// Icons
import { ArrowLeft, Google, Instagram, Whatsapp, Youtube } from 'iconsax-react';

// Assets
import headerLogo from '@/assets/images/headerLogo.png';
import emailIcon from '@/assets/icons/emailIconFooter.svg';
import footerLine from '@/assets/icons/footerLine.svg';
import footerArrow from '@/assets/icons/footerArrow.svg';
import FooterStyle from './footer.style';

const socialButtonsStyles = {
   color: 'white',
   width: 35,
   height: 35,
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

   const sendEmail = e => {
      e?.preventDefault();
      console.log(e?.target?.[0]?.value);
   };
   return (
      <FooterStyle>
         <div id="back">
            <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-9 px-5 py-12 customMd:flex-row customMd:items-center customMd:px-[60px] customMd:py-6">
               <p className="max-w-[542px] font-almaraiBold text-2xl leading-[46px] text-white customMd:text-3xl">
                  {t('Ready')}
               </p>
               <Link href="/">
                  <Button
                     variant="contained"
                     className="!w-full customMd:!w-[174px]"
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
                     {t('Get started')}
                  </Button>
               </Link>
            </div>
         </div>

         <div className="bg-[#EBF3FF]">
            <div className="mx-auto max-w-[1440px] px-5 py-10 customMd:px-[60px] customMd:pb-8 customMd:pt-[78px]">
               <Grid container spacing={{ md: 5, lg: 0 }}>
                  <Grid item xs={12} md={3.5}>
                     <div className="mb-[75px] customMd:mb-0 customMd:max-w-[306px]">
                        <Link href="/" className="block h-[51px] w-[110px] customMd:h-[31px] customMd:w-[67px]">
                           <Image src={headerLogo} alt="footer logo" className="size-full" />
                        </Link>
                        <p className="mt-4 text-xs leading-[30px]">{t('lorem1')}</p>
                        <div className="mt-5 flex items-center gap-5">
                           <Link href="/">
                              <IconButton sx={socialButtonsStyles}>
                                 <Instagram size="15" />
                              </IconButton>
                           </Link>
                           <Link href="/">
                              <IconButton sx={socialButtonsStyles}>
                                 <Youtube size="15" variant="Bold" />
                              </IconButton>
                           </Link>
                           <Link href="/">
                              <IconButton sx={socialButtonsStyles}>
                                 <Whatsapp size="15" variant="Bold" />
                              </IconButton>
                           </Link>
                           <Link href="/">
                              <IconButton sx={socialButtonsStyles}>
                                 <Google size="15" variant="Bold" />
                              </IconButton>
                           </Link>
                        </div>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={4.5}>
                     <Grid container rowSpacing={{ xs: 4.5, sm: 0 }}>
                        <Grid item xs={12} sm={7}>
                           <div>
                              <p className="relative text-xl font-bold">
                                 {t('Quick links')}
                                 <Image src={footerLine} alt="line" className="absolute bottom-[-12px] start-0" />
                              </p>
                              <Grid container marginTop="37px">
                                 <Grid item xs={6}>
                                    <div className="flex flex-col gap-5 text-xs">
                                       <Link
                                          href="/"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-[#FD8266]"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('Home')}
                                       </Link>
                                       <Link
                                          href="/"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-[#FD8266]"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('About us')}
                                       </Link>
                                       <Link
                                          href="/"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-[#FD8266]"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('Services')}
                                       </Link>
                                       <Link
                                          href="/"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-[#FD8266]"
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
                                          href="/"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-[#FD8266]"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('FAQ')}
                                       </Link>
                                       <Link
                                          href="/"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-[#FD8266]"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('Prices')}
                                       </Link>
                                       <Link
                                          href="/"
                                          className="flex items-center gap-1 transition-all duration-150 hover:text-[#FD8266]"
                                       >
                                          <Image
                                             src={footerArrow}
                                             alt="arrow"
                                             {...(locale === 'en' && { className: 'rotate-180' })}
                                          />
                                          {t('Subcategories')}
                                       </Link>
                                    </div>
                                 </Grid>
                              </Grid>
                           </div>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                           <p className="relative text-xl font-bold">
                              {t('Blog')}
                              <Image src={footerLine} alt="line" className="absolute bottom-[-12px] start-0" />
                           </p>

                           <div className="mt-[37px] flex max-w-[150px] flex-col gap-5 text-xs">
                              <Link
                                 href="/"
                                 className="flex items-start gap-1 leading-[18px] transition-all duration-150 hover:text-[#FD8266]"
                              >
                                 <Image
                                    src={footerArrow}
                                    alt="arrow"
                                    {...(locale === 'en' && { className: 'rotate-180' })}
                                 />
                                 <div>
                                    <p>{t('Lorem2')}</p>
                                    <p className="text-10 text-[#626E94]">8 Nov, 2021</p>
                                 </div>
                              </Link>
                              <Link
                                 href="/"
                                 className="flex items-start gap-1 leading-[18px] transition-all duration-150 hover:text-[#FD8266]"
                              >
                                 <Image
                                    src={footerArrow}
                                    alt="arrow"
                                    {...(locale === 'en' && { className: 'rotate-180' })}
                                 />
                                 <div>
                                    <p>{t('Lorem2')}</p>
                                    <p className="text-10 text-[#626E94]">8 Nov, 2021</p>
                                 </div>
                              </Link>
                           </div>
                        </Grid>
                     </Grid>
                  </Grid>
                  <Grid item xs={12} md={4}>
                     <div className="mt-[83px] customMd:mt-0">
                        <p className="mb-6 text-2xl font-bold customMd:text-base">{t('Newsletter')}</p>
                        <form className="flex h-12 items-center rounded bg-white px-4" onSubmit={sendEmail}>
                           <input
                              type="text"
                              className="h-full grow border-none bg-transparent font-almaraiRegular text-sm outline-none placeholder:text-xs placeholder:text-black"
                              placeholder={t('Enter your email')}
                           />
                           <IconButton type="submit" size="small" sx={{ ':hover': { backgroundColor: '#EBF3FF' } }}>
                              <Image src={emailIcon} alt="email" />
                           </IconButton>
                        </form>

                        <p className="mt-3 text-sm leading-[30px]">{t('Newsletter description')}</p>
                     </div>
                  </Grid>
               </Grid>

               <p className="mt-[103px] text-center text-xs customMd:mt-[62px]">{t('Rights')}</p>
            </div>
         </div>
      </FooterStyle>
   );
}

export default Footer;
