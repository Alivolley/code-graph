import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Button, Grid } from '@mui/material';

// Icons
import { ArrowLeft } from 'iconsax-react';

// Assets
import bannerTestPic from '@/assets/images/bannerTestPic.png';
import axiosInstance from '@/configs/axiosInstance';

// Components
import BlogCart from '@/components/pages/blogs/blog-cart/blog-cart';

function BlogTitle({ blogDetail }) {
   const { locale } = useRouter();
   const t = useTranslations('blogs');

   return (
      <div>
         <div className="relative mx-auto mt-[110px] max-w-[1440px] px-5 customMd:mt-[237px] customMd:px-[60px]">
            <div className="flex items-center gap-[10px]">
               <p className="font-almaraiBold text-sm uppercase text-[#333333]">Development</p>
               <p className="text-sm text-[#999999]">16 March 2023</p>
            </div>
            <p className="mt-[30px] font-almaraiBold text-[24px] leading-[38px] text-[#333333] customMd:text-[40px] customMd:leading-[64px]">
               How to make a Game look more attractive with New VR & AI Technology
            </p>
            <div className="relative mt-7 aspect-[1.5/1] w-full customMd:mt-[51px] customMd:aspect-[2/1]">
               <Image src={bannerTestPic} alt="banner" fill className="rounded-[20px] object-cover" />
            </div>
            <div className="mt-5 text-base customMd:mt-[70px]">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim natus praesentium? Excepturi
               doloribus, corporis, fugit quia voluptatum, quisquam alias error dicta ab veniam repellat? Sequi quod
               eaque sed nostrum error ut accusantium temporibus voluptas excepturi placeat. Iusto totam similique
               beatae nostrum iure ipsa enim numquam facilis! Quas animi amet quis blanditiis. Mollitia magni quos
               voluptatem maiores! Neque corporis, repellendus quae incidunt commodi iusto voluptatum aliquam
               accusantium iste cupiditate. Exercitationem saepe, aliquam deleniti deserunt a sequi officia rerum beatae
               perferendis cumque quod. Iure consequuntur deleniti quos laborum, et exercitationem fugit autem, ea,
               similique temporibus hic. Nisi dolorem id fugiat reiciendis voluptatem quidem eos beatae eligendi?
               Corporis ex, repellendus eum vitae totam dolore placeat id saepe rem aliquam, quidem non asperiores quam
               velit numquam doloremque doloribus iure magnam quae commodi. At optio deleniti ipsam reiciendis libero
               possimus vero iste ipsa molestiae placeat totam amet similique illo ipsum veniam provident dolorum, ullam
               vel rerum dolor exercitationem omnis blanditiis. Eos recusandae exercitationem dolorem cupiditate,
               perferendis ad impedit voluptatem unde quo! Ab sequi eligendi laborum aperiam eaque officia itaque magni
               consequatur optio ducimus tenetur officiis autem eius pariatur odit perferendis esse cupiditate minus
               possimus, voluptate amet dolores facere totam. Laborum quae asperiores odit cum voluptatem reprehenderit
               neque placeat ab culpa officia suscipit sed dolorem, magnam porro possimus autem esse, impedit totam
               facilis quidem animi dicta! Facere, doloremque in veniam tempora fuga debitis, nulla est excepturi
               doloribus ea exercitationem magnam laboriosam ullam aspernatur! Sapiente deleniti eos, odit, voluptates
               soluta consectetur id inventore fugit aut quos dolores numquam ratione unde aliquid, molestiae odio
               mollitia ipsum. Soluta libero magnam ipsa, reprehenderit explicabo neque fuga exercitationem vitae quas
               at odit quidem commodi, aliquid eius similique consequatur accusamus sunt officiis illum laudantium modi!
               Ipsam, exercitationem quae. Error dolorum dolor fugiat sapiente expedita ab deserunt voluptatum ipsa!
               Repellat distinctio vel, ex dolor, explicabo necessitatibus exercitationem totam culpa delectus quibusdam
               officiis a consequuntur eos eaque, sint veniam! Nostrum harum dolore placeat perferendis laborum dolorem
               minus. Ullam asperiores tempora amet fugiat rem qui nostrum nulla soluta delectus nesciunt. Perferendis,
               nam veritatis alias reiciendis at iusto quas totam ipsam aut ut nesciunt enim eaque sunt eligendi dolor
               labore tempora error, obcaecati sequi dolore laboriosam officia nihil? Itaque vero cupiditate eum hic
               distinctio facere repellat nulla aliquam eaque ullam ea vitae corporis doloremque perspiciatis commodi,
               praesentium labore harum provident repudiandae mollitia sit, qui fugiat, aut voluptates. Voluptatum
               corrupti nostrum debitis distinctio fuga quos unde repellendus magni, possimus accusantium ipsa eaque
               excepturi culpa doloribus et impedit dicta, perferendis commodi non, voluptatibus dignissimos dolore
               ducimus? Illo totam voluptas nesciunt repellendus temporibus quae repellat laborum ex vel nemo
               distinctio, corporis, at amet. In nostrum unde ipsa quas delectus non exercitationem, adipisci ex a
               recusandae pariatur dicta, sint consequatur iure reiciendis modi! Minus sed modi eveniet quo optio
               voluptatibus, quasi itaque. Aspernatur, earum aliquam! Ut molestiae qui est, cum at eligendi optio in?
               Quasi facilis esse quae consectetur ipsa? Sit cumque consequatur accusamus deserunt, ea fugit earum
               tenetur obcaecati repellendus sint iste error quae similique et consectetur aspernatur totam eius nostrum
               pariatur culpa. Voluptatibus hic, modi commodi mollitia quibusdam, nihil odit soluta nemo, numquam
               assumenda optio quaerat totam. At sunt tempora facilis a possimus tempore non ipsum veritatis quidem
               voluptate ratione in saepe iusto accusantium amet quod, fugit ea maiores. Illum asperiores fugit rerum
               quas! Et suscipit reprehenderit doloremque qui similique? Quo hic obcaecati ea rem voluptate alias
               reiciendis commodi iste ipsam nemo architecto deleniti, aperiam cumque nisi labore qui illo quisquam
               accusamus expedita atque asperiores repellat laboriosam quibusdam? Cupiditate ipsum, laborum, consectetur
               excepturi iusto pariatur perferendis impedit, officiis cumque incidunt expedita doloremque numquam
               dolorum eveniet obcaecati! Eos consectetur eius error architecto dolorem, itaque temporibus similique.
               Fugiat, repellendus! Dolores, reprehenderit odit. Iste unde culpa accusantium enim non voluptatum
               tenetur, ut rerum officia molestias nihil nulla esse perferendis magnam nesciunt optio impedit, eaque
               laudantium excepturi dolor, nobis consectetur atque voluptas odio? Aspernatur ipsam repudiandae nesciunt
               quidem ipsa consequuntur odio assumenda aperiam natus. Sapiente quod atque obcaecati corrupti
               reprehenderit eveniet, dignissimos perspiciatis voluptatem maxime sed expedita exercitationem sequi
               similique architecto animi. Dolor, officiis laborum! Hic, aut ipsam harum enim quaerat quasi sed vero, ea
               quod expedita, tempora voluptas tenetur obcaecati officiis in veritatis? Rem saepe, voluptatum quia
               doloremque tempore atque qui nam est consectetur quis facilis veritatis labore? Sit laboriosam ullam
               itaque natus reprehenderit commodi. Ducimus sint doloribus dolorum omnis deserunt rem quis delectus, odio
               et maiores beatae inventore iusto repellendus enim autem nihil recusandae explicabo quisquam corrupti
               voluptates optio qui! Architecto distinctio sit accusantium, debitis eveniet eum minus voluptates maxime
               quasi fuga omnis voluptatum doloribus ipsum aliquid voluptatem ex sed! Fugiat consectetur placeat magni
               omnis, explicabo laboriosam, cupiditate quis reprehenderit laudantium odio fuga necessitatibus assumenda,
               eum nesciunt earum maiores illum unde tempora facere? Qui eius eum tenetur perferendis impedit
               dignissimos? Veniam, perferendis, quos blanditiis numquam odio sint aliquid dignissimos officia amet cum
               libero voluptatem illo nemo sit id minima minus vel maiores doloremque nobis corrupti nihil! Excepturi
               labore aperiam ipsam molestias quam non alias reiciendis, odio ex nobis animi similique doloremque
               doloribus. Architecto nulla omnis ullam velit reiciendis numquam sit blanditiis, deserunt deleniti
               necessitatibus harum! Quo doloremque impedit quia saepe quos minima eligendi eaque nulla? Voluptatibus
               iure error doloribus sapiente repudiandae harum natus autem debitis mollitia beatae facilis eum non
               dolore voluptates doloremque minima, provident, ipsam maiores voluptate quisquam. Exercitationem,
               voluptas? Id error excepturi quo tempora ab, reiciendis totam sed veritatis deserunt, optio saepe nostrum
               assumenda incidunt? Dolor totam ipsum, incidunt illo mollitia quam. Iste voluptatibus beatae, nihil
               dolores accusantium labore corrupti ullam, amet, veniam sapiente doloribus et eum mollitia? Sequi nam
               asperiores obcaecati aut laboriosam dolorum expedita totam laborum, eligendi libero quidem atque, earum
               repellat eius voluptates deserunt, doloremque sapiente ducimus debitis odit minima recusandae vero.
               Dolores ullam omnis eligendi facere autem velit aperiam rem sint consequatur sapiente ratione accusamus
               aliquid, asperiores, quam eum necessitatibus. Nisi aspernatur, aliquid quas, voluptas molestiae at
               repudiandae repellendus modi assumenda nulla, asperiores nobis facere laborum! Neque necessitatibus
               corrupti itaque maiores incidunt eum quisquam distinctio nobis voluptatem, quibusdam, ad suscipit
               pariatur mollitia voluptatibus.
            </div>
         </div>
         <div className="mt-10 bg-[#F5F8FC] customMd:mt-[76px]">
            <div className="relative mx-auto max-w-[1440px] px-5 py-[30px] customMd:p-[60px]">
               <div className="flex items-center justify-center customMd:justify-between">
                  <p className="font-almaraiBold text-2xl leading-[64px] text-[#333333] customMd:text-[48px]">
                     {t('Popular posts')}
                  </p>
                  <Link href="/blogs" className="hidden customMd:block">
                     <Button
                        variant="contained"
                        sx={{
                           height: 52,
                           width: 222,
                           borderRadius: 57,
                           fontFamily: 'almaraiBold',
                           fontSize: 16,
                           color: 'white',
                           backgroundColor: '#65A5FC',
                           ':hover': {
                              backgroundColor: 'white',
                              color: '#65A5FC',
                           },
                        }}
                        endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                     >
                        {t('See all')}
                     </Button>
                  </Link>
               </div>

               <div className="mt-5 customMd:mt-[58px]">
                  <Grid container rowSpacing={{ xs: '15px', md: '20px' }} columnSpacing="5px">
                     <Grid item xs={12} sm={6} md={4}>
                        <BlogCart />
                     </Grid>
                     <Grid item xs={12} sm={6} md={4}>
                        <BlogCart />
                     </Grid>
                     <Grid item xs={12} sm={6} md={4}>
                        <BlogCart />
                     </Grid>
                  </Grid>
               </div>

               <Link href="/blogs" className="mt-10 block customMd:hidden">
                  <Button
                     variant="contained"
                     fullWidth
                     sx={{
                        height: 52,
                        borderRadius: 57,
                        fontFamily: 'almaraiBold',
                        fontSize: 14,
                        color: 'white',
                        backgroundColor: '#65A5FC',
                        ':hover': {
                           backgroundColor: 'white',
                           color: '#65A5FC',
                        },
                     }}
                     endIcon={<ArrowLeft size="20" {...(locale === 'en' && { className: 'rotate-180' })} />}
                  >
                     {t('See all')}
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default BlogTitle;

export async function getServerSideProps(context) {
   // const { query } = context;

   // const blogDetail = await axiosInstance(`blog/detail?lang=${context.locale}&title=${query?.blogTitle}`).then(
   //    res => res.data
   // );

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         //       blogDetail,
      },
   };
}
