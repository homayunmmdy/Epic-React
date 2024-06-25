import {create} from 'zustand';

import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      websiteData: {
        websiteName: '',
        description: '',
        siteUrl: '',
        keywords: '',
        logo: '',
        favicon: '',
        author: '',
        socialMedia: [],
      },
      setWebsiteData: (key, value) =>
        set((state) => ({
          websiteData: {
            ...state.websiteData,
            [key]: value,
          },
        })),
      addSocialMedia: (name, address) =>
        set((state) => ({
          websiteData: {
            ...state.websiteData,
            socialMedia: [
              ...state.websiteData.socialMedia,
              { name, address },
            ],
          },
        })),
    }),
    {
      name: 'website-storage',
    }
  )
);

export default useStore;