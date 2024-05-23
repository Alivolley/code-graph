/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

// Components
import axiosInstance from '@/configs/axiosInstance';

function ProductDetail({ productData }) {
   const { locale } = useRouter();
   const t = useTranslations('allProducts');
   const tags = productData?.tags?.split('-');

   return (
      <div
         className="relative mx-auto mt-[125px] max-w-[1440px] px-5 pb-[105px] customMd:mt-[180px] customMd:px-[60px] customMd:pb-[70px]"
         data-aos="fade-up"
         data-aos-duration="650"
      >
         <Head>
            <title>{locale === 'fa' ? 'رودگراف - جزییات پروژه' : 'RoadGraph-project detail'}</title>
         </Head>
         <p className="font-almaraiExtraBold800 text-[38px] leading-[42px] text-[#626E94] customMd:text-[42px] customMd:leading-[47px]">
            {productData?.title}
         </p>

         <p className="mt-10 text-sm text-[#626E94] customMd:mt-6 customMd:text-[18px]">{productData?.category}</p>
         <div className="mt-6 flex items-center gap-2 text-sm text-[#626E94] customMd:text-base">
            <p>{t('Visit project link')} :</p>
            <a href={productData?.link} target="_blank" rel="noreferrer" className="underline" dir="ltr">
               {productData?.link}
            </a>
         </div>

         <div
            className="mt-8 flex flex-wrap items-center gap-2 text-sm leading-[15px] text-[#626E94]
          customMd:mt-6 customMd:gap-5 customMd:text-[18px] customMd:leading-[20px]"
         >
            {tags?.map(item => (
               <p key={item.trim()}># {item.trim()}</p>
            ))}
         </div>

         <img
            src={productData?.cover}
            className="mt-[30px] block w-full rounded bg-slate-200 customMd:mt-12"
            alt="project"
         />

         <p
            className="mt-[43px] font-almaraiExtraBold800 text-[28px] leading-[31px] text-[#626E94] 
         customMd:mt-[60px] customMd:text-[38px] customMd:leading-[42px]"
         >
            نوع سفارش
         </p>

         <p className="mt-[25px] text-2xl leading-[39px] text-[#858EAD] customMd:text-[28px] customMd:leading-[31px]">
            {productData?.order_type}
         </p>

         {productData?.introduction_image && (
            <img
               src={productData?.introduction_image}
               className="mt-[30px] block w-full rounded bg-slate-200 customMd:mt-[50px]"
               alt="project"
            />
         )}

         {productData?.landing_internal_profile && (
            <img
               src={productData?.landing_internal_profile}
               className="mt-[43px] block w-full rounded bg-slate-200 customMd:mt-[90px]"
               alt="project"
            />
         )}

         <div className="mt-[77px] customMd:mt-[221px]">
            <p className="text-center font-almaraiExtraBold800 text-[20px] leading-[22px] text-[#626E94] customMd:text-[42px] customMd:leading-[47px]">
               طراحی رابط کاربری نسخه موبایل
            </p>
            <p className="mt-[14px] text-center text-xs leading-[24px] text-[#7683AD] customMd:mt-7 customMd:text-[18px] customMd:leading-[40px]">
               {productData?.mobile_version_description}
            </p>
         </div>

         {productData?.responsive_images && (
            <img
               src={productData?.responsive_images}
               className="mt-[25px] block w-full rounded bg-slate-200 customMd:mt-[60px]"
               alt="project"
            />
         )}

         {productData?.font_color_tools && (
            <img
               src={productData?.font_color_tools}
               className="mt-[80px] block w-full rounded bg-slate-200 customMd:mt-[116px]"
               alt="project"
            />
         )}

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
            <p className="text-center font-almaraiExtraBold800 text-[32px] leading-[36px] text-[#626E94] customMd:text-[48px] customMd:leading-[54px]">
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

export async function getServerSideProps(context) {
   const { query, req } = context;

   const accessToken = req?.cookies?.roadGraph_accessToken;

   const productData = await axiosInstance(`get-project/?lang=${context.locale}&title=${query?.productTitle}`, {
      ...(accessToken && {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      }),
   }).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         productData,
      },
   };
}
