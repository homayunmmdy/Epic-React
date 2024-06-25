import { Inter } from "next/font/google";
import "./Font.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "./components/Meta";

const inter = Inter({ subsets: ["latin"] });

<Metadata />

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-theme="cupcake">
      <body className={inter.className}>
        <Navbar />
        <div className="mt-20">
          {children}
        </div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
