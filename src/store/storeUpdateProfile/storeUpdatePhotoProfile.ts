import { create } from "zustand";
import { StoreUpdatePhotoProfile } from "./types/typeStoreUpdatePhotoProfile";

const storeUpdatePhotoProfile = create<StoreUpdatePhotoProfile>((set, get) => ({
  openUpdatePhotoProfile: false,

  setOpenUpdatePhotoProfile() {
    const { openUpdatePhotoProfile } = get();
    set({ openUpdatePhotoProfile: !openUpdatePhotoProfile });
  },
}));

export default storeUpdatePhotoProfile;
