/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   output: 'standalone',

   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**',
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
