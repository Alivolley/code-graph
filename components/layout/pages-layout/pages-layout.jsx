import { useRouter } from 'next/router';

// Components
import Footer from '../footer/footer';
import Header from '../header/header';
import RtlProvider from '../rtlProvider/rtlProvider';

function PagesLayout({ children, dir, language }) {
   const { pathname } = useRouter();

   return (
      <div
         dir={dir}
         // className={language === 'en' ? 'font-poppins' : language === 'fa' ? 'font-dana' : 'font-rubik'}
         id="pageLayout"
      >
         <RtlProvider isRtl={language !== 'en'}>
            {/* {pathname !== '/login' && !pathname.startsWith('/adminPanel') && ( */}
            <Header />
            {/* )} */}

            <main>{children}</main>

            {/* {pathname !== '/login' && !pathname.startsWith('/adminPanel') && ( */}
            <Footer />
            {/* )} */}
         </RtlProvider>
      </div>
   );
}

export default PagesLayout;
