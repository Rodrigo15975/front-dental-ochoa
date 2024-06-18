import { create } from "zustand";
import { StoreUpdateImgHome } from "./types/typeStoreUpdatePhotoHome";

const storeUpdateImgHome = create<StoreUpdateImgHome>((set, get) => ({
  setOpenUpdate() {
    const { openUpdate } = get();
    set({ openUpdate: !openUpdate });
  },
  setImgUrl(url) {
    set({ imgUrl: url });
  },
  imgUrl: "",
  openUpdate: false,
}));

export default storeUpdateImgHome;
