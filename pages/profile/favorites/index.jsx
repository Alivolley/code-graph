import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// MUI
import { Button, CircularProgress } from '@mui/material';

// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';
import BlogCart from '@/components/pages/blogs/blog-cart/blog-cart';

// Assets
import noFavorites from '@/assets/images/noFavorites.png';

// Apis
import useGetFavorites from '@/apis/favorites/useGetFavorites';

function Favorites() {
   const t = useTranslations('userDashboard');

   const { data: favoritesData, isLoading: favoritesIsLoading } = useGetFavorites(true);

   return (
      <ProfileLayout>
         <div>
            <div
               className="rounded-10 bg-[#F5F8FC] px-[15px] py-[27px] font-almaraiExtraBold800 text-[#0F172A] customMd:text-xl"
               data-aos="fade-left"
               data-aos-duration="650"
            >
               {t('Favorites list')}
            </div>

            <div className="mt-[22px]">
               {favoritesIsLoading ? (
                  <div className="flex items-center justify-center">
                     <CircularProgress color="customPink" />
                  </div>
               ) : favoritesData?.length ? (
                  <div className="flex w-full flex-nowrap gap-5 max-customMd:overflow-auto customMd:flex-wrap">
                     {favoritesData?.map((item, index) => (
                        <div key={item?.id} className="w-[272px] shrink-0">
                           <BlogCart detail={item} index={index} />
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="mt-[117px] flex flex-col items-center customMd:mt-[172px]">
                     <div className="relative h-[231px] w-[286px]">
                        <Image src={noFavorites} alt="empty favorites" fill />
                     </div>
                     <p className="mt-7 text-center font-almaraiExtraBold800 text-xl leading-6 customMd:text-[22px]">
                        {t('Your favorites list is empty')}
                     </p>
                     <p className="mt-2 text-center text-sm leading-6 text-[#626E94]">
                        {t('There are currently no listings for you')}
                     </p>
                     <Link href="/blogs" className="mt-6 max-customMd:min-w-[280px] customMd:w-[392px]">
                        <Button variant="contained" sx={{ color: 'white', height: 50, borderRadius: 37 }} fullWidth>
                           {t('Go to blogs')}
                        </Button>
                     </Link>
                  </div>
               )}
            </div>
         </div>
      </ProfileLayout>
   );
}

export default Favorites;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
