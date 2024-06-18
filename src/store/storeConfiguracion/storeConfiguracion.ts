import { create } from "zustand";
import { StoreConfiguration } from "./types/typeConfiguration";

const storeConfiguration = create<StoreConfiguration>((set, get) => ({
  openFormEditConfiguracion: false,
  openDeleteConfiguracion: false,
  setOpenDeleteConfiguracion() {
    const { openDeleteConfiguracion } = get();
    set({ openDeleteConfiguracion: !openDeleteConfiguracion });
  },
  setOpenFormEditConfiguracion() {
    const { openFormEditConfiguracion } = get();
    set({ openFormEditConfiguracion: !openFormEditConfiguracion });
  },
}));

export default storeConfiguration;
