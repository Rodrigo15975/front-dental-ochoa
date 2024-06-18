import { create } from "zustand";
import { StorePrescripcion } from "./types/typePrescripcion";

const storePrescripcion = create<StorePrescripcion>((set, get) => ({
  openModalNewPrescripcion: false,
  openModalHistoryReceta: false,
  setOpenModalNewPrescripcion() {
    const { openModalNewPrescripcion } = get();
    set({ openModalNewPrescripcion: !openModalNewPrescripcion });
  },
  setOpenModalHistoryReceta() {
    const { openModalHistoryReceta } = get();
    set({ openModalHistoryReceta: !openModalHistoryReceta });
  },
}));

export default storePrescripcion;
