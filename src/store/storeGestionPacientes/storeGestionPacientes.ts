import { create } from "zustand";
import { StoreGestionPaciente } from "./types/storeGestionPacientes";

const storeGestionPaciente = create<StoreGestionPaciente>((set, get) => ({
  setOpenFormGestionPaciente() {
    const { openFormGestionPaciente } = get();
    set({ openFormGestionPaciente: !openFormGestionPaciente });
  },
  openFormGestionPaciente: false,
  openNewServicesGestionPaciente: false,
  setOpenNewServicesGestionPaciente() {
    const { openNewServicesGestionPaciente } = get();
    set({ openNewServicesGestionPaciente: !openNewServicesGestionPaciente });
  },

  setOpenDeletePaciente() {
    const { openDeletePaciente } = get();
    set({
      openDeletePaciente: !openDeletePaciente,
    });
  },
  openDeletePaciente: false,
}));

export default storeGestionPaciente;
