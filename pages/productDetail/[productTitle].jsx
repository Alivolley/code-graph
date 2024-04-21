function ProductDetail() {
   return <div>ProductDetail</div>;
}

export default ProductDetail;

export async function getServerSideProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}
