import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html>
         <Head />
         <body>
            <Main />
            <NextScript />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="https://accounts.google.com/gsi/client" />
         </body>
      </Html>
   );
}
