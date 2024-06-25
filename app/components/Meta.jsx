"use client"
import useStore from "../store/store";

const websiteData = useStore((state) => state.websiteData);

export const Metadata = {
  title: websiteData.websiteName | 'mysite',
  // You must show 160 charactor as decription for seo
  description: websiteData.description.slice(0, 160) | 'website description',
  keywords: websiteData.keywords,
  robots: "index , follow",
  openGraph: {
    title: websiteData.websiteName | 'mysite',
    description: websiteData.description.slice(0, 160) | 'website description',
    siteName: websiteData.websiteName | 'mysite',
  },
};