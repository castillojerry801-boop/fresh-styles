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
    "Layton's premier destination for precision haircuts, clean fades, and beard services. Walk in looking good. Leave looking great.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0d0d0d] text-white">{children}</body>
    </html>
  );
}
