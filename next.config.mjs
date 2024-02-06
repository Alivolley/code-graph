/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,

   images: {
      remotePatterns: [
         {
            hostname: 'roadgraph.pythonanywhere.com',
         },
      ],
   },

   i18n: {
      locales: ['fa', 'en'],
      defaultLocale: 'fa',
      localeDetection: false,
   },
};

export default nextConfig;
