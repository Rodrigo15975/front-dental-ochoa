import { create } from "zustand";
import { StoreOptionProfile } from "./types/typeStoreOptionProfile";

const storeOptionProfile = create<StoreOptionProfile>((set, get) => ({
  openOption: false,

  setOpenOption() {
    const { openOption } = get();
    set({ openOption: !openOption });
  },
}));

export default storeOptionProfile;
