// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';

function Information() {
   return (
      <ProfileLayout>
         <div className="text-base">Information</div>
      </ProfileLayout>
   );
}

export default Information;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
