import { Inter } from "next/font/google";
import "./Font.css";
import "./globals.css";
import SiteConfig from "@/app/config/site";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Popup from "./components/Popup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${SiteConfig.name} | ${SiteConfig.name_en}`,
  description: SiteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="cupcake">
      <body className={inter.className}>
        <Navbar />
        <div className="mt-20">
          {children}
          <Popup />
        </div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
