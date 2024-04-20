function ProductDetail() {
   return <div>ProductDetail</div>;
}

export default ProductDetail;

export async function getStaticPaths() {
   return {
      paths: [{ params: { productTitle: '' } }],
      fallback: 'blocking',
   };
}

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
      revalidate: 3600,
   };
}
