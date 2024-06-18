import { create } from "zustand";
import { StoreGestionUsuarios } from "./types/typeGestionUsuarios";

const storeGestionUsuarios = create<StoreGestionUsuarios>((set, get) => ({
  setOpenFormGestionUsuarios() {
    const { openFormGestionUsuarios } = get();
    set({ openFormGestionUsuarios: !openFormGestionUsuarios });
  },

  openFormGestionUsuarios: false,
}));

export default storeGestionUsuarios;
