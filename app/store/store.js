import {create} from 'zustand';

import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      websiteName: '',
      setWebsiteName: (name) => set({ websiteName: name }),
    }),
    {
      name: 'website-storage', // unique name
    }
  )
);

export default useStore;