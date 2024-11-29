import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppBar from "@/components/molecules/Appbar/appBar";
import Footer from "@/components/molecules/Footer/footer";
import { CounterStoreProvider } from "@/providers/counter-store-provider";

const geistSans = localFont({
  src: "./fonts/Foggy-Regular.woff2",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title:
    "Discover live events and gigs| Buy tickets on DICE",
  description: "online ticketing service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <main>
          <AppBar />
          <div className="p-4">
            <CounterStoreProvider>
              {children}
            </CounterStoreProvider>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
