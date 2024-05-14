import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Assets
import pic from '@/assets/images/404Pic.png';

export default function Custom404() {
   const t = useTranslations('home');

   return (
      <div className="mx-auto max-w-[1440px] px-5 pb-[80px] pt-[150px] customMd:px-[60px] customMd:pt-[170px]">
         <div className="mx-auto max-w-[700px]">
            <Image src={pic} alt="pic" className="size-full" />
         </div>

         <p className="mt-10 text-center font-almaraiExtraBold800 text-3xl text-customPink customMd:text-6xl">
            {t('Page not found')} ...
         </p>
      </div>
   );
}

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
