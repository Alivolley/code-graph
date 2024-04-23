import axiosInstance from '@/configs/axiosInstance';

// Components
import BoldProducts from '@/components/pages/home/bold-products/bold-products';
import HomeBanner from '@/components/pages/home/home-banner/home-banner';
import HomeIntroduce from '@/components/pages/home/home-introduce/home-introduce';
import ValueDescription from '@/components/pages/home/value-description/value-description';

export default function Home({ products }) {
   return (
      <div>
         <HomeBanner />
         <HomeIntroduce />
         <BoldProducts products={products} />
         <ValueDescription />
      </div>
   );
}

export async function getStaticProps(context) {
   const products = await axiosInstance(`suggested-project/`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         products,
      },
      revalidate: 300,
   };
}
