// Components
import HomeBanner from '@/components/pages/home/home-banner/home-banner';
import HomeIntroduce from '@/components/pages/home/home-introduce/home-introduce';

export default function Home() {
   return (
      <div>
         <HomeBanner />
         <HomeIntroduce />
      </div>
   );
}

export async function getStaticProps(context) {
   try {
      return {
         props: {
            messages: (await import(`@/messages/${context.locale}.json`)).default,
         },
         revalidate: 3600,
      };
   } catch (error) {
      return {
         props: {
            messages: (await import(`@/messages/${context.locale}.json`)).default,
            error: error?.message,
         },
      };
   }
}
