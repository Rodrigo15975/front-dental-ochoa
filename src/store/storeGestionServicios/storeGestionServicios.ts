import { create } from "zustand";
import { StoreGestionServicios } from "./types/typeStoreGestionServices";

const storeGestionServicios = create<StoreGestionServicios>((set, get) => ({
  setOpenFormGestionServicios() {
    const { openFormGestionServicios } = get();
    set({ openFormGestionServicios: !openFormGestionServicios });
  },
  setIdPaciente(idPaciente, apellidos, name, mayorEdad) {
    set({ idPaciente, apellidos, name, mayorEdad });
  },
  mayorEdad: false,
  idPaciente: "",
  apellidos: "",
  name: "",
  openFormGestionServicios: false,
  openFormAsignarServicios: false,
  openOptionsServicios: false,
  openAddExistinServicio: false,
  openAddNewServicios: false,

  setOpenFormAsignarServicios() {
    const { openFormAsignarServicios } = get();
    set({ openFormAsignarServicios: !openFormAsignarServicios });
  },
  setOpenOptionsServicios() {
    const { openOptionsServicios } = get();
    set({ openOptionsServicios: !openOptionsServicios });
  },

  setOpenAddExistinServicio() {
    const { openAddExistinServicio } = get();
    set({ openAddExistinServicio: !openAddExistinServicio });
  },

  setOpenAddNewServicios() {
    const { openAddNewServicios } = get();
    set({ openAddNewServicios: !openAddNewServicios });
  },
}));

export default storeGestionServicios;
