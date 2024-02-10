export default function Custom404() {
   return <h1>صفحه پیدا نشد</h1>;
}

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
