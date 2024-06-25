import {create} from 'zustand';

const useStore = create((set) => ({
  websiteName: '',
  setWebsiteName: (name) => set({ websiteName: name }),
}));

export default useStore;