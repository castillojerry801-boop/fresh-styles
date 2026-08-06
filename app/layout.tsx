import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Styles Barbershop | Layton, Utah",
  description:
    "Layton's Premier Barbershop on Hill Field Road, minutes from Hill Air Force Base. Clean fades, sharp cuts, and detailed beard services. Walk-ins welcome.",
  metadataBase: new URL("https://freshstyles-barbershop.com"),
  alternates: { canonical: "/" },
  keywords: [
    "barbershop Layton Utah",
    "haircut Layton UT",
    "fade haircut Layton",
    "barber near Hill Air Force Base",
    "beard trim Layton Utah",
    "Fresh Styles Barbershop",
  ],
  openGraph: {
    title: "Fresh Styles Barbershop | Layton, Utah",
    description:
      "Layton's Premier Barbershop on Hill Field Road. Clean fades, sharp cuts, beard services. Walk-ins welcome.",
    url: "https://freshstyles-barbershop.com",
    siteName: "Fresh Styles Barbershop",
    images: [
      {
        url: "/images/logo-2025.png",
        width: 1080,
        height: 1080,
        alt: "Fresh Styles Barbershop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Fresh Styles Barbershop | Layton, Utah",
    description:
      "Layton's Premier Barbershop. Clean fades, sharp cuts, beard services. Walk-ins welcome.",
    images: ["/images/logo-2025.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Fresh Styles Barbershop",
  description:
    "Layton's Premier Barbershop on Hill Field Road. Clean fades, sharp cuts, and detailed beard services.",
  url: "https://freshstyles-barbershop.com",
  telephone: "+13853938418",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2704 N Hill Field Rd Ste 4",
    addressLocality: "Layton",
    addressRegion: "UT",
    postalCode: "84041",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  image: "https://freshstyles-barbershop.com/images/logo-2025.png",
  sameAs: [
    "https://www.facebook.com/freshstylesUT",
    "https://www.instagram.com/freshstyles.ut",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full bg-[#0d0d0d] text-white">{children}</body>
    </html>
  );
}
