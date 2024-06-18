import { create } from "zustand";
import { StoreGestionMedicos } from "./types/typesStoresGestionMedicos";

const storeGestionMedicos = create<StoreGestionMedicos>((set, get) => ({
  setOpenFormGestionMedicos() {
    const { openFormGestionMedicos } = get();
    set({ openFormGestionMedicos: !openFormGestionMedicos });
  },

  openListInactiveMedicos: false,
  openFormGestionMedicos: false,
  openAsistenciaMedicos: false,

  setOpenListInactiveMedicos() {
    const { openListInactiveMedicos } = get();
    set({ openListInactiveMedicos: !openListInactiveMedicos });
  },

  setOpenAsistenciaMedicos() {
    const { openAsistenciaMedicos } = get();
    set({ openAsistenciaMedicos: !openAsistenciaMedicos });
  },
}));

export default storeGestionMedicos;
