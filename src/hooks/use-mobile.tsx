
import { create } from 'zustand';

type MobileMenuState = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
}

export const useMobileMenu = create<MobileMenuState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));
