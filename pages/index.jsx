// Components
import BoldProducts from '@/components/pages/home/bold-products/bold-products';
import HomeBanner from '@/components/pages/home/home-banner/home-banner';
import HomeIntroduce from '@/components/pages/home/home-introduce/home-introduce';
import ValueDescription from '@/components/pages/home/value-description/value-description';

export default function Home() {
   return (
      <div>
         <HomeBanner />
         <HomeIntroduce />
         <BoldProducts />
         <ValueDescription />
      </div>
   );
}

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
      revalidate: 3600,
   };
}
