// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';

function Security() {
   return (
      <ProfileLayout>
         <div className="text-base">Security</div>
      </ProfileLayout>
   );
}

export default Security;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
