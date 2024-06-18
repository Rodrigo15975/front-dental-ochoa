import { create } from "zustand";
import { StoreSidebarMobile } from "./types/typeStoreSidebarMobile";

const storeSidebarMobile = create<StoreSidebarMobile>((set, get) => ({
  collapse: false,
  screenMobile: false,
  toggle: false,
  setCollapse() {
    const { collapse } = get();
    set({ collapse: !collapse });
  },
 
  setScreenMobile() {
    if (window.innerWidth <= 1200) {
      set({ screenMobile: true });
    } else {
      set({ screenMobile: false });
    }
  },
  setToggle() {
    const { toggle } = get();
    set({ toggle: !toggle });
  },
}));

export default storeSidebarMobile;
