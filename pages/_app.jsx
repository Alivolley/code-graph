import AOS from 'aos';
import Head from 'next/head';
import { useEffect } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import AppLayout from '@/components/layout/app-layout/app-layout';
import '@/styles/globals.css';
import '@/styles/reset.css';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
   const { locale } = useRouter();
   const timeZone = 'Europe/Vienna';

   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);

   return (
      <NextIntlClientProvider locale={locale} messages={pageProps.messages} timeZone={timeZone}>
         <Head>
            <title>{locale === 'fa' ? 'رود گراف' : 'RoadGraph'}</title>
            <meta
               name="description"
               content={
                  locale === 'fa'
                     ? 'خدمات تیم رودگراف شامل طراحی گرافیک، UI/UX، سایت‌های واکنش‌گرا ، مدرن و بهینه و بهینه‌سازی سئو برای مشتریان است.'
                     : 'RoadGraph team services include graphic design, UI/UX, responsive, modern and optimized sites and SEO optimization for clients.'
               }
            />
            <meta
               name="keywords"
               content={
                  locale === 'fa'
                     ? 'طراحی سایت، طراحی وب‌سایت، طراحی گرافیک، طراحی UI، طراحی UX، طراحی لوگو، uixu، بهینه‌سازی سئو، بنرهای تبلیغاتی، طراحی کاربرپسند، تیم حرفه‌ای طراحی'
                     : 'Website design, website design, graphic design, UI design, UX design, logo design, uixu, SEO optimization, advertising banners, user-friendly design, professional design team'
               }
            />
            <meta name="author" content={locale === 'fa' ? 'رود گراف' : 'RoadGraph'} />
            <link rel="icon" href="/favicon.png" />
         </Head>
         <AppLayout>
            <Component {...pageProps} />
         </AppLayout>
      </NextIntlClientProvider>
   );
}
