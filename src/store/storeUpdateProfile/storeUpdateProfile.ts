import { create } from "zustand";
import { StoreUpdateProfile } from "./types/typeStoreUpdateProfile";

const storeUpdateProfile = create<StoreUpdateProfile>((set, get) => ({
  openUpdateProfile: false,
  setOpenUpdateProfile() {
    const { openUpdateProfile } = get();
    set({ openUpdateProfile: !openUpdateProfile });
  },
}));

export default storeUpdateProfile;
