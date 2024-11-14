import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Ecommerce Web',
  description: 'Good vibes, Better deals!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen max-w-screen-xl mx-auto bg-sky-200 p-4 `}>
        <Header />
        <main className="h-full flex-grow">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
