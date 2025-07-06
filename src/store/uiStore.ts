import { create } from 'zustand';

interface UIStore {
  tabValue: number;
  setTabValue: (value: number) => void;

  sidebar: boolean;
  setSideBar: (value: boolean) => void;

  drawer: boolean;
  setDrawer: (value: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  tabValue: 0,
  setTabValue: (value) => set({ tabValue: value }),

  sidebar: false,
  setSideBar: (value) => set({ sidebar: value }),

  drawer: false,
  setDrawer: (value) => set({ drawer: value }),
}));
