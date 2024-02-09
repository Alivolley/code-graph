export default function Home() {
   return <div />;
}

export async function getStaticProps(context) {
   try {
      return {
         props: {
            messages: (await import(`@/messages/${context.locale}.json`)).default,
         },
         revalidate: 3600,
      };
   } catch (error) {
      return {
         props: {
            messages: (await import(`@/messages/${context.locale}.json`)).default,
            error: error?.message,
         },
      };
   }
}
