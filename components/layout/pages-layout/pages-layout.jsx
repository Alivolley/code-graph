import { useRouter } from 'next/router';

// Components
import Footer from '../footer/footer';
import Header from '../header/header';
import RtlProvider from '../rtlProvider/rtlProvider';

function PagesLayout({ children, dir, language }) {
   const { pathname } = useRouter();

   return (
      <div dir={dir} className="overflow-hidden font-almaraiRegular400">
         <RtlProvider isRtl={language !== 'en'}>
            {pathname !== '/login' && !pathname?.startsWith('/profile') && <Header />}

            <main>{children}</main>

            {pathname !== '/login' && !pathname?.startsWith('/profile') && <Footer />}
         </RtlProvider>
      </div>
   );
}

export default PagesLayout;
