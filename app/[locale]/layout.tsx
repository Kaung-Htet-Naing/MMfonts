import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextIntlClientProvider } from 'next-intl';
import localFont from 'next/font/local';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import GoogleAnalytics from '@hooks/GoogleAnalytics';
import { HotJar } from '@hooks/index';
import Providers from './Providers';

const myLocalFont = localFont({
  src: [
    {
      path: '../../public/fonts/site/AcreMMVariable-Thin.ttf',
      weight: '100',
    },
    {
      path: '../../public/fonts/site/AcreMMVariable-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: '../../public/fonts/site/AcreMMVariable-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/site/AcreMMVariable-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/site/AcreMMVariable-DemiBold.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/site/AcreMMVariable-Demi.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/site/AcreMMVariable-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/site/AcreMMVariable-Black.ttf',
      weight: '800',
    },
  ],
  variable: '--font-acre',
});

export const metadata = {
  title: { default: 'Myanmar Fonts Hub', template: '%s | Myanmar Fonts Hub' },
  description:
    "MmFontsHub.com is Myanmar's premier online platform for fonts, catering specifically to the needs of the Myanmar community. Our website offers a vast collection of high-quality fonts, carefully curated and optimized for various projects, including web design, graphic design, branding, and more. Discover an extensive range of traditional and contemporary fonts, all conveniently accessible in one place. Whether you're a professional designer or an enthusiast, MmFontsHub.com provides the perfect resource to enhance your creative projects and express your unique style in the Myanmar language.",
  keywords: [
    'Myanmar Fonts',
    'Fonts',
    'Fonts Collection',
    'Myanmar Fonts Collection',
    'Zaw-Gyi One Fonts',
    'Myanmar Unicode Fonts',
    'MM Fonts Hub',
  ],
  icons: {
    icon: '/icon.png',
    shortcut: '/apple-touch-icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      url: '/apple-touch-icon.png',
    },
  },
  creator: 'KAUNG HTET NAING',
  publisher: 'Digital House Myanmar',
  manifest: '/manifest.json',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return [{ locale: 'mm' }, { locale: 'en' }];
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} translate="no">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmfontshub.com/" />
        <meta property="og:title" content="Myanmar Fonts Hub" />
        <meta
          property="og:description"
          content="MmFontsHub.com is Myanmar's premier online platform for fonts, catering specifically to the needs of the Myanmar community. Our website offers a vast collection of high-quality fonts, carefully curated and optimized for various projects, including web design, graphic design, branding, and more. Discover an extensive range of traditional and contemporary fonts, all conveniently accessible in one place. Whether you're a professional designer or an enthusiast, MmFontsHub.com provides the perfect resource to enhance your creative projects and express your unique style in the Myanmar language."
        />
        <meta property="og:image" content="/images/banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mmfontshub.com/" />
        <meta property="twitter:title" content="Myanmar Fonts Hub" />
        <meta
          property="twitter:description"
          content="MmFontsHub.com is Myanmar's premier online platform for fonts, catering specifically to the needs of the Myanmar community. Our website offers a vast collection of high-quality fonts, carefully curated and optimized for various projects, including web design, graphic design, branding, and more. Discover an extensive range of traditional and contemporary fonts, all conveniently accessible in one place. Whether you're a professional designer or an enthusiast, MmFontsHub.com provides the perfect resource to enhance your creative projects and express your unique style in the Myanmar language."
        />
        <meta property="twitter:image" content="/images/banner.png" />
      </Head>
      {process.env.NEXT_PUBLIC_GA_TRAKCING_ID && (
        <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRAKCING_ID} />
      )}
      <HotJar />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${myLocalFont.variable} font-acre `}>
          <Providers>{children}</Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
