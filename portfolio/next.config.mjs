import nextTranslate from 'next-translate-plugin';

const nextConfig = nextTranslate({
  async rewrites() {
    return [
      {
        source: '/:lang(fr|en-US)/:path*',
        destination: '/:path*',
      },

    ];
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
});

export default nextConfig;
