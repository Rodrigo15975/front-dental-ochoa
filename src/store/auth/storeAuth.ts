import { create } from "zustand";
import { StoreAuth } from ".";

const storeAuth = create<StoreAuth>((set) => ({
  setIsAuth(isAuth) {
    set({
      isAuth,
    });
  },
  isAuth: false,
}));

export default storeAuth;
