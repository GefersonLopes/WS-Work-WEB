import { create } from "zustand";

type NavState = {
  activePath: string;
  setActivePath: (path: string) => void;

  mobileOpen: boolean;
  closeMobile: () => void;
  toggleMobile: () => void;
};

export const useNav = create<NavState>((set) => ({
  activePath: "/",
  setActivePath: (path) => set({ activePath: path }),

  mobileOpen: false,
  closeMobile: () => set({ mobileOpen: false }),
  toggleMobile: () => set((s) => ({ mobileOpen: !s.mobileOpen })),
}));
