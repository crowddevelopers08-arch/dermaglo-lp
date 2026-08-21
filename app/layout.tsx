import type { Metadata } from "next";
import { Onest, Caveat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Best Skin & Hair Clinic in Rajarajeshwari Nagar | DermaGlow Studio",
  description:
    "Dermatologist-led personalised skin and hair treatments in Rajarajeshwari Nagar, Bengaluru. Book a consultation with Dr. Sahana Karthik at DermaGlow Studio.",
  keywords: [
    "DermaGlow Studio",
    "dermatologist in Rajarajeshwari Nagar",
    "skin clinic in Rajarajeshwari Nagar",
    "hair clinic in Rajarajeshwari Nagar",
    "dermatologist in Bangalore",
    "acne treatment Bangalore",
    "pigmentation treatment Bangalore",
    "laser hair reduction Bangalore",
    "hair loss treatment Bangalore",
    "Hydrafacial Bangalore",
    "skin rejuvenation Bangalore",
    "Dr Sahana dermatologist",
  ],
  authors: [{ name: "DermaGlow Studio" }],
  creator: "DermaGlow Studio",
  publisher: "DermaGlow Studio",
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "any",
      },
      {
        url: "/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "DermaGlow Studio | Skin & Hair Clinic in Rajarajeshwari Nagar",
    description:
      "Personalised, dermatologist-led skin and hair treatments with Dr. Sahana Karthik in Rajarajeshwari Nagar, Bengaluru.",
    type: "website",
    locale: "en_IN",
    siteName: "DermaGlow Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DermaGlow Studio | Skin & Hair Clinic",
    description:
      "Advanced, personalised skin and hair care in Rajarajeshwari Nagar, Bengaluru.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJBW58NW');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJBW58NW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}