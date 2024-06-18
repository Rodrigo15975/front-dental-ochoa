import { create } from "zustand";

type StyleMenu = {
  x: number;
  y: number;
};

type Store = {
  openMenuAppointment: boolean;
  setOpenMenuAppointment: () => void;

  setStyleMenu: (styleMenu: StyleMenu) => void;
  styleMenu: StyleMenu;
};

export const storeMenuAppointMent = create<Store>((set, get) => ({
  openMenuAppointment: false,
  styleMenu: {
    x: 0,
    y: 0,
  },
  setOpenMenuAppointment() {
    const { openMenuAppointment } = get();
    set({ openMenuAppointment: !openMenuAppointment });
  },
  setStyleMenu(styleMenu) {
    set({
      styleMenu,
    });
  },
}));
