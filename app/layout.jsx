import { Inter } from "next/font/google";
import "./globals.css";
import  SiteConfig from "@/app/config/site"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${SiteConfig.name} | ${SiteConfig.name_en}`,
  description: SiteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
