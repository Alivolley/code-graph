import axiosInstance from '@/configs/axiosInstance';

// Components
import BoldProducts from '@/components/pages/home/bold-products/bold-products';
import HomeBanner from '@/components/pages/home/home-banner/home-banner';
import HomeIntroduce from '@/components/pages/home/home-introduce/home-introduce';
import ValueDescription from '@/components/pages/home/value-description/value-description';

export default function Home({ products, categories }) {
   return (
      <div>
         <HomeBanner categories={categories} />
         <HomeIntroduce />
         <BoldProducts products={products} categories={categories} />
         <ValueDescription />
      </div>
   );
}

export async function getStaticProps(context) {
   const products = await axiosInstance(`suggested-project/?lang=${context.locale}`).then(res => res.data);
   const categories = await axiosInstance(`list-category/?lang=${context.locale}`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         products,
         categories,
      },
      revalidate: 300,
   };
}
