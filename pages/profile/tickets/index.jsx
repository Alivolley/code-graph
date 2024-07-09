// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';

function Tickets() {
   return (
      <ProfileLayout>
         <div className="text-base">Tickets</div>
      </ProfileLayout>
   );
}

export default Tickets;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
