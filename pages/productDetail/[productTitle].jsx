/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

// Components
import axiosInstance from '@/configs/axiosInstance';

function ProductDetail({ productData }) {
   const { locale } = useRouter();
   const t = useTranslations('allProducts');

   return (
      <div className="relative mx-auto mt-[125px] max-w-[1440px] px-5 pb-[105px] customMd:mt-[180px] customMd:px-[60px] customMd:pb-[70px]">
         <p className="font-almaraiExtraBold text-[38px] leading-[42px] text-[#626E94] customMd:text-[42px] customMd:leading-[47px]">
            {productData?.title}
         </p>
         <p className="mt-6 text-[24px] leading-[27px] text-[#626E94] customMd:text-[28px] customMd:leading-[32px]">
            {productData?.short_description}
         </p>
         <p className="mt-10 text-sm text-[#626E94] customMd:mt-6 customMd:text-[18px]"># {productData?.category}</p>
         <div className="mb-14 mt-6 flex items-center gap-2 text-sm text-[#626E94] customMd:text-base">
            <p>{t('Visit project link')} :</p>
            <a href={productData?.link} target="_blank" rel="noreferrer" className="underline">
               {productData?.link}
            </a>
         </div>
         <img src={productData?.images?.[0]} className="mx-auto block max-w-full rounded object-cover" alt="project" />

         <div className="mb-[30px] mt-[90px] flex items-center justify-center gap-3 customMd:mb-20 customMd:mt-40 customMd:gap-6">
            <div
               style={{
                  clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
               }}
               className={`size-7 bg-[#626E94] ${locale === 'en' ? 'rotate-180' : ''}`}
            />
            <p className="text-center font-almaraiExtraBold text-[28px] leading-[31px] text-[#626E94] customMd:text-[42px] customMd:leading-[47px]">
               {t('Some internal pages')}
            </p>
         </div>

         <div className="space-y-20">
            {productData?.images?.map(
               (item, index) =>
                  index !== 0 && (
                     <img
                        src={item}
                        alt="project"
                        className="mx-auto block max-w-full rounded object-cover"
                        key={item}
                     />
                  )
            )}
         </div>

         <div className="mt-[100px] customMd:mt-[121px]">
            <p className="text-center font-almaraiExtraBold text-[32px] leading-[36px] text-[#626E94] customMd:text-[48px] customMd:leading-[54px]">
               {productData?.title}
            </p>
            <p className="mt-[30px] text-center text-[14px] leading-[52px] text-[#7683AD] customMd:text-[28px] customMd:leading-[60px]">
               {productData?.description}
            </p>
         </div>
      </div>
   );
}

export default ProductDetail;

export async function getStaticPaths() {
   return {
      paths: [{ params: { productTitle: '' } }],
      fallback: 'blocking',
   };
}

export async function getStaticProps(context) {
   const productData = await axiosInstance(
      `get-project/?lang=${context.locale}&title=${context?.params?.productTitle}`
   ).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         productData,
      },
      revalidate: 3600,
   };
}
